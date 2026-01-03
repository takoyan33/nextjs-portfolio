# 基本方針（Antigravity用）

## 基本

- 日本語で応答すること
- 必要に応じて、ユーザに質問を行い、要求を明確にすること
- 作業後、作業内容とユーザが次に取れる行動を説明すること
- 作業項目が多い場合は、段階に区切り、git commit を行いながら進めること
  - semantic commit を使用する
- コマンドの出力が確認できない場合、適切なツールを使用して確認すること
- yarn コマンドで基本実施する
- マージ、リバートをする際は、許可を得てから行うこと
- yarn dev:mockでローカル環境を立ち上げる

---

## コーディング規約

- 変数名や関数名は意味のある名前を使ってください。
- コメントは簡潔かつ具体的に書いてください。
- JSDOC コメントを使用して、関数の引数や戻り値の説明を追加してください。
- マジックナンバーは避け、定数として定義してください。
- コードの可読性を重視してください。

---

## ドキュメント構成

- `docs/guide.md` : プロジェクト概要
- `.gemini/antigravity/react.md` : React関連の指示
- `.gemini/antigravity/storybook.md` : Storybook関連の指示
- `.gemini/antigravity/test.md` : テスト関連の指示
- `.gemini/antigravity/docs.md` : 設計書関連の指示
- `.gemini/antigravity/general.md` : その他

---

## MCP Server

-MCP Serverを起動の際は、yarn dev:mockで動かす

### 設定ファイル

- **Google Gemini (Antigravity)**: 自動設定済み
- **Claude Code**: `.claude/mcp_config.json` に設定ファイルがあります
  - 詳細な設定方法は `.claude/README.md` を参照してください

### 利用可能なMCPサーバー

1. **next-devtools-mcp** - Next.js開発ツール（リアルタイム診断、ルート情報、エラー検出）
2. **chrome-devtools-mcp** - Chrome DevTools統合（ブラウザテスト、ビジュアル検証）
3. **context7** (`@upstash/context7-mcp`) - 最新のライブラリドキュメント提供
4. **playwright-mcp** 

---

## applyTo: "\*\*"
