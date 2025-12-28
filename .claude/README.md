# Claude Code MCP 設定

このディレクトリには、Claude Code (Claude Desktop) で使用するための MCP (Model Context Protocol) サーバー設定が含まれています。

## 設定方法

### macOS の場合

1. Claude Desktop の設定ファイルを開く:

```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

1. このプロジェクトの MCP 設定を追加:

```bash
cat .claude/mcp_config.json >> ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

または、手動で `mcp_config.json` の内容を `claude_desktop_config.json` にコピーしてください。

### Windows の場合

1. Claude Desktop の設定ファイルを開く:

```text
%APPDATA%\Claude\claude_desktop_config.json
```

1. このプロジェクトの MCP 設定を手動でコピーして追加してください。

## プロジェクト固有の設定

Claude Code でこのプロジェクトを開いた際に、以下の MCP サーバーが自動的に利用可能になります:

### 1. **next-devtools**

Next.js 開発ツール

- リアルタイムエラー診断
- ルート情報の取得
- ビルド状態の確認
- Next.js 16 へのアップグレード支援

### 2. **chrome-devtools**

Chrome DevTools 統合

- ブラウザ自動化 (Playwright ベース)
- ビジュアル検証
- スクリーンショット取得
- ページスナップショット

### 3. **context7**

最新ライブラリドキュメント

- リアルタイムドキュメント検索
- コード例の提供
- API リファレンス

## 使用例

Claude Code で以下のようなプロンプトを使用できます:

```text
Next Devtools, help me upgrade my Next.js app to version 16
```

```text
Chrome DevTools, navigate to http://localhost:3000 and take a screenshot
```

```text
Context7, show me the latest Next.js documentation for Server Components
```

## トラブルシューティング

### MCP サーバーが認識されない場合

1. Claude Desktop を再起動してください
2. 設定ファイルの JSON 形式が正しいか確認してください
3. `npx` コマンドが利用可能か確認してください:

```bash
npx --version
```

### 接続エラーが発生する場合

各 MCP サーバーを手動で実行して、エラーメッセージを確認してください:

```bash
npx -y next-devtools-mcp@latest
npx -y @executeautomation/chrome-devtools-mcp@latest
npx -y @upstash/context7-mcp@latest
```

## 参考リンク

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io)
- [Next.js DevTools MCP](https://www.npmjs.com/package/next-devtools-mcp)
- [Chrome DevTools MCP](https://www.npmjs.com/package/@executeautomation/chrome-devtools-mcp)
- [Context7 MCP](https://www.npmjs.com/package/@upstash/context7-mcp)
