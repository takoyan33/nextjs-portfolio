# Pino Logger サンプル

Next.jsプロジェクトでPinoを使用したロギングのサンプルコードです。

## 📁 作成したファイル

### 1. `lib/logger.ts`

Pinoロガーの設定ファイル

- **開発環境**: `pino-pretty`で見やすいカラー出力
- **本番環境**: JSON形式で構造化ログ
- **ブラウザ対応**: クライアントサイドでは何もしないダミーロガーを返す

### 2. `app/api/log-sample/route.ts`

API Routeでのログ使用例

- 基本的なログレベル（info, debug, warn, error, fatal）
- 構造化ログ（オブジェクト形式）
- エラーハンドリングとスタックトレース
- GET/POSTの両方のサンプル

### 3. `app/log-example/page.tsx`

Server Componentでのログ使用例

- ページレンダリング時のログ
- データフェッチのログ
- パフォーマンス測定

## 🚀 使い方

### 1. 開発サーバーを起動

\`\`\`bash
npm run dev
\`\`\`

### 2. サンプルページにアクセス

ブラウザで以下にアクセス:
\`\`\`
http://localhost:3001/log-example
\`\`\`

ターミナルに以下のようなログが出力されます（開発環境）:
\`\`\`
[15:00:00] INFO: Log example page rendered
[15:00:00] INFO (fetchData): Fetching data...
action: "fetchData"
status: "started"
[15:00:00] INFO (fetchData): Data fetched successfully
action: "fetchData"
status: "success"
duration: 5
count: 3
\`\`\`

### 3. API Routeをテスト

#### 成功ケース

\`\`\`bash
curl "http://localhost:3001/api/log-sample?user=john&action=login"
\`\`\`

#### エラーケース

\`\`\`bash
curl "http://localhost:3001/api/log-sample?user=john&action=error"
\`\`\`

#### POSTリクエスト

\`\`\`bash
curl -X POST http://localhost:3001/api/log-sample \
 -H "Content-Type: application/json" \
 -d '{"username":"john","email":"john@example.com"}'
\`\`\`

## 📊 ログレベル

| レベル    | 用途         | 例                                     |
| --------- | ------------ | -------------------------------------- |
| **debug** | デバッグ情報 | 詳細な変数の値、処理の流れ             |
| **info**  | 一般的な情報 | リクエスト受信、処理完了               |
| **warn**  | 警告         | バリデーションエラー、非推奨機能の使用 |
| **error** | エラー       | リクエスト失敗、予期しないエラー       |
| **fatal** | 致命的エラー | アプリケーションのクラッシュ           |

## 🎨 ログの書き方

### 基本的な使い方

\`\`\`typescript
import logger from '@/lib/logger'

logger.info('シンプルなメッセージ')
\`\`\`

### 構造化ログ（推奨）

\`\`\`typescript
logger.info(
{
userId: '123',
action: 'login',
timestamp: new Date().toISOString(),
ip: '192.168.1.1',
},
'ユーザーがログインしました'
)
\`\`\`

### エラーログ

\`\`\`typescript
try {
// 処理
} catch (error) {
logger.error(
{
error: error instanceof Error ? error.message : 'Unknown error',
stack: error instanceof Error ? error.stack : undefined,
context: { userId: '123' },
},
'エラーが発生しました'
)
}
\`\`\`

### パフォーマンス測定

\`\`\`typescript
const startTime = Date.now()

// 処理

logger.info(
{
duration: Date.now() - startTime,
operation: 'データベースクエリ',
},
'処理完了'
)
\`\`\`

## ⚙️ 環境変数

\`.env.local\` で設定可能:

\`\`\`env

# ログレベル (debug, info, warn, error, fatal)

LOG_LEVEL=info

# 環境

NODE_ENV=development
\`\`\`

## 📝 本番環境での出力

本番環境ではJSON形式で出力されます:

\`\`\`json
{"level":"info","time":1702123456789,"env":"production","msg":"User action logged","user":"john","action":"login","timestamp":"2024-12-09T15:00:00.000Z","ip":"192.168.1.1"}
\`\`\`

この形式はログ収集ツール（Datadog, CloudWatch, etc.）で簡単にパースできます。

## 🔍 ベストプラクティス

1. **構造化ログを使う**: 文字列の連結ではなく、オブジェクトで情報を渡す
2. **適切なレベルを選ぶ**: debug < info < warn < error < fatal
3. **機密情報を含めない**: パスワード、トークンなどはログに出力しない
4. **コンテキストを含める**: userId, requestId など追跡に必要な情報を含める
5. **エラーにはスタックトレースを**: デバッグが容易になる

## 📚 参考リンク

- [Pino公式ドキュメント](https://getpino.io/)
- [pino-pretty](https://github.com/pinojs/pino-pretty)
