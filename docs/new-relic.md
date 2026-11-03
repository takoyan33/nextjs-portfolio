# New Relic APM

このプロジェクトでは、Vercel Production（`to-you-design.vercel.app`）上で動作する Next.js の Node.js runtime を New Relic APM で監視する。

## 対象範囲

- App Router の Server Component、Route Handler、Server Action から発生するサーバーサイド処理
- Next.js が出力する OpenTelemetry span を New Relic Hybrid Agent で収集する
- Edge runtime とブラウザ側の操作は対象外

ブラウザ側の Core Web Vitals やユーザー操作も計測したい場合は、別途 New Relic Browser のアプリケーションを作成して Browser agent を追加する。

## 実装

| ファイル | 役割 |
| --- | --- |
| `newrelic.cjs` | Production 用エージェント設定。Hybrid Agent を有効にし、重複する `next` / `http` / `undici` 計測を無効化する |
| `instrumentation.ts` / `newrelic-agent.ts` | Node.js runtime の起動時にエージェントを最初に読み込む。エージェントの import を分離し、Edge bundle へ含めない |
| `next.config.ts` | `newrelic` を server external package として実行時に読み込めるようにする |

`newrelic` は v14.1 以降が必要である。現在使用している v14.1.0 は Node.js 22 以降を必要とするため、`package.json` でもこのバージョンを必須化している。Vercel の Node.js バージョンも 22 以降に設定する。Next.js 16 では、New Relic の従来のNext.js計測ではなく、Next.js標準の OpenTelemetry と Hybrid Agent を組み合わせる。

## Vercel の環境変数

Vercel Dashboard の **Project Settings > Environment Variables** で、以下を **Production** に設定する。

| 変数 | 値 | 公開 |
| --- | --- | --- |
| `NEW_RELIC_LICENSE_KEY` | New Relic の ingest license key | 非公開 |
| `NEW_RELIC_APP_NAME` | 例: `to-you-design` | 非公開 |
| `NEW_RELIC_OPENTELEMETRY_ENABLED` | `true` | 非公開 |
| `NEW_RELIC_INSTRUMENTATION_NEXT_ENABLED` | `false` | 非公開 |
| `NEW_RELIC_INSTRUMENTATION_HTTP_ENABLED` | `false` | 非公開 |
| `NEW_RELIC_INSTRUMENTATION_UNDICI_ENABLED` | `false` | 非公開 |
| `NEW_RELIC_LOG` | `stdout` | 非公開 |
| `NEW_RELIC_LOG_LEVEL` | `warn`（調査時は `info`） | 非公開 |
| `NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED` | `true` | 非公開 |

`NEW_RELIC_LOG=stdout` は必須である。Vercel の実行環境はファイルシステムが読み取り専用のため、未設定だとエージェントが `/var/task/newrelic_agent.log` を開けず `EROFS` エラーになる。

## ログ

アプリケーションのログ（pino）は、エージェントが自動で New Relic に転送し、トレースと紐づけて表示する。New Relic の **Logs**、または Distributed tracing の該当トレースから参照できる。

- Vercel は関数の標準出力を常に収集するため、Vercel の Logs にも同じログが出る。これは止められない。
- サーバーレスでは関数の停止前に送信が間に合わず、New Relic に届かないログがありうる。取りこぼしの確認には Vercel の Logs を使う。
- ログ転送は取り込み量に応じて課金対象になる。不要な `info` ログを増やさない。

## 確認手順

1. 上記の環境変数をVercelへ設定して Production deploy を実行する。
2. Production URL のページ、`/api/*` Route Handler、管理画面の Server Action をそれぞれ操作する。
3. New Relic の **APM & Services** で `NEW_RELIC_APP_NAME` のサービスを開く。
4. Transactions に Web transaction、Distributed tracing に Next.js の span が表示されることを確認する。

Preview / Development 環境ではエージェントを起動しない。これはテスト・ローカル開発・Preview deployment のテレメトリーが Production サービスへ混在することを防ぐためである。判定にはホスト名ではなく Vercel の `VERCEL_ENV=production` を使うため、同じ Production deployment に紐づくカスタムドメインや alias からのアクセスも同じサービスへ送信される。

## 注意事項

- New Relic Hybrid Agent は Node.js runtime 専用で、Edge runtime は監視しない。
- Next.js の `fetch` は独自の span を生成する。`undici` 計測も有効にすると重複するため無効化している。
- 新規の migration や依存更新後は、Production deploy 後にエラー率と外部 API 呼び出しを確認する。
- ログの取り込み量は New Relic の **Usage** 画面で定期的に確認する。

詳細は [New Relic: Next.js instrumentation with the Hybrid Agent](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/extend-your-instrumentation/nextjs-instrumentation/) を参照する。
