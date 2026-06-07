# Home 詳細設計書

## 1. ページ概要

- サイトトップとして、ブランド、プロフィール概要、制作実績、経歴、スキル、ブログ、お問い合わせ導線を縦方向に提示するページ。
- `app/(home)/page.tsx` で `export const dynamic = "force-static"` を指定し、静的生成を前提に構成する。
- FV では Three.js の GLTF モデルを表示し、主要セクションはスクロール時のフェードイン演出を行う。

## 2. 画面仕様

drawio/pc/home.drawio
drawio/sp/home.drawio

## 3. データフロー

- プロフィール、ポートフォリオ、経歴、スキル、Zenn 記事を各 Server Component で取得する。
- ポートフォリオ一覧は API 取得に失敗した場合、`public/mock/api/portfolios/index.json` をフォールバックとして使用する。
- Zenn 記事が 0 件の場合、Blog セクション内の一覧は表示しない。

mermaid/home.mmd

## 4. 状態管理・ロジック

- **静的生成**: `dynamic = "force-static"` によりトップページを静的生成する。
- **FV 3D 表示**: `ThreeModel` はクライアントコンポーネントとして `Canvas`、`useGLTF`、`OrbitControls` を利用し、モデルを上下移動・回転させる。
- **ポートフォリオスライダー**: `HomePortfolioSlideClient` は Swiper と `useState` で前後ボタンの表示状態を制御する。
- **データ整形**: ポートフォリオは日付降順に並べ替え、ブログは Zenn 記事の先頭 3 件のみ表示する。
- **共通導線**: `LinkButton` で `/portfolios`、`/about`、`/blog`、`/contact` へ遷移する。

## 5. ルーティング

- `/`

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/` にアクセス | RootLayout、Header、Home、Footer を表示 | トップページを表示 |
| 3D モデル操作 | FV の Canvas をドラッグ | `OrbitControls` でモデル視点を操作 | モデルの向きが変化 |
| スクロール | 各セクションが表示領域に入る | `ScrollComponent` でフェードイン | セクション要素が順次表示 |
| スライダー操作 | Portfolio の前後ボタンをクリック | Swiper の navigation を実行 | 表示中の制作実績が切り替わる |
| 制作実績クリック | Portfolio カードをクリック | `TransitionLink` で詳細へ遷移 | `/portfolios/[id]` を表示 |
| CTA クリック | 各「さらに見る」ボタンをクリック | `LinkButton` で該当ページへ遷移し GTM イベントを付与 | 一覧・詳細導線へ遷移 |
| トップへ戻る | 右下固定ボタンをクリック | `TopBackButton` のスクロール処理を実行 | ページ先頭へ戻る |

## 7. APIインターフェース (Backend)

| エンドポイント | メソッド | 内容 |
|----------------|----------|------|
| `/api/profiles` | GET | トップ About セクション用プロフィールを取得 |
| `/api/portfolios` | GET | Portfolio スライダー用制作実績を取得 |
| `/api/histories` | GET | History セクション用経歴を取得 |
| `/api/skills/front` | GET | Frontend スキル一覧を取得 |
| `/api/skills/back` | GET | Backend スキル一覧を取得 |
| `/api/skills/infra` | GET | Infra スキル一覧を取得 |
| `/api/skills/other` | GET | Other スキル一覧を取得 |
| `https://zenn.dev/api/articles?username=643866` | GET | Blog セクション用 Zenn 記事一覧を取得 |

## 8. エラーハンドリング

- 共通 fetcher は `response.ok` が false の場合にエラーを投げ、呼び出し元または Next.js の `error.tsx` に委譲する。
- Portfolio スライダーは API 取得失敗または空配列時にモックデータへフォールバックする。
- Zenn 記事取得は失敗時に空配列を返し、Blog 一覧を非表示にする。

## 9. その他仕様

- SEO用メタデータ: `title: "To You Design"`、`description: "Next.js / React を中心に開発するフロントエンドエンジニア Abe Shumpei のポートフォリオサイト。制作実績や技術スタックを紹介しています。"`
- OGP画像: `/images/ogp.png`
- 画像: プロフィール画像 `/images/myphoto.png`、Three.js モデル `/models/scene.gltf`
- 計測: production 環境では Google Analytics、Google Tag Manager、Clarity、Vercel Speed Insights を読み込む。
