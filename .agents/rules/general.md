---
alwaysApply: true
---

# 基本方針

## 基本

- 日本語で応答すること
- 必要に応じて、ユーザに質問を行い、要求を明確にすること
- 作業後、作業内容とユーザが次に取れる行動を説明すること
- 作業項目が多い場合は、段階に区切り、git commit を行いながら進めること
- semantic commit を使用する
- コマンドの出力が確認できない場合、適切なツールを使用して確認すること
- pnpm コマンドで基本実施する
- マージ、リバートをする際は、許可を得てから行うこと
- pnpm dev:mockでローカル環境を立ち上げる
- スキルセット項目のsvgアイコンは、https://svgl.app/ のSVG画像を利用しています。

---

## コーディング規約

- 変数名や関数名は意味のある名前を使ってください
  - 省略語などは使わない
- コメントは簡潔かつ具体的に書いてください
- JSDOC コメントを使用して、関数の引数や戻り値の説明を追加してください
- マジックナンバーは避け、定数として定義してください
- コードの可読性を重視してください
- コンポーネント名・型名はPascalCase、関数・変数名はcamelCaseを使用する
- インデントは2スペース、タブは使用しない
- 波括弧 {} はJSX/JSの標準スタイル（改行せず同じ行に書く）
- 短い説明には//、詳細な説明や複数行には/_ ... _/を使う
- if文のネストは行わない
- 早期リターンを活用し、ネストを作らない
- DRY原則で関数やコンポーネントは共通化をする
  - 2箇所程度であれば行わない、目的が違う場合は行わない
- 再代入が不要な変数にはletではなく、constを用いる
- フラグ引数(booleanなど)は利用しない
- 尋ねるな、命じろ(Tell Don`t Ask) で設計する
  - 他のオブジェクトの内部状態を尋ねたり、呼び出し側が判断するのではなく、メソッドを呼ぶだけで適切な判断や制御を行えるようにする
- 目的ごとに関数やコンポーネントの分離を行う（関心の分離）
- 単一責任の原則で関数やコンポーネントを作成する
- 下記は避ける
  - トランザクションスクリプトパターン（一連の処理が長く書かれている）
  - 神クラス（何千何万行あるロジック）
  - デッドコード（条件分岐で到達しないコード）
  - YAGNI原則
    -  将来の仕様を予見して作り込むこと 必要な時に作る
  - nullを返さない メソッドの戻り値としてnullをreturnしない
  - nullを渡さない 引数として渡さない
  - nullを代入しない 変数に代入しない
  - 例外の握り潰し
   - try catchのcatchで何もしない
- アンカリング効果に気をつける

## スタイリング

- SCSS/CSS Moduleを使用（`ComponentName.module.scss`）
- グローバルCSSは `styles/globals.scss` に限定
- 共通変数は `styles/common/_variables.scss` を使用
- Tailwind CSSは未導入なので、利用しない

---

## ドキュメント構成

- `docs/guide.md` : プロジェクト概要
- `docs/ai.md` : AI関連
- `docs/api.md` : API関連
- `docs/design.md` : デザインシステム
- `docs/concept.md` : デザインの方針
- `docs/docker.md` : Docker概要
- `docs/pino.md` : ログ設計概要
- `docs/analytics.md` : google analytics, Clarity設計概要
- `docs/backend/docs` : APIのドキュメント類を格納


rules関連
- `.agents/rules/react.md` : React関連の指示
- `.agents/rules/storybook.mdc` : Storybook関連の指示
- `.agents/rules/test.mdc` : テスト関連の指示
- `.agents/rules/docs.mdc` : 設計書関連の指示
- `.agents/rules/general.mdc` : その他

---

## MCP Server

- MCP Serverを起動の際は、`pnpm dev:mock` で動かす
- StorybookのMCP Serverは、`pnpm storybook` で動かす

### 設定ファイル

- **Google Gemini (Antigravity)**: 自動設定済み

### 利用可能なMCPサーバー

1. **next-devtools-mcp** - Next.js開発ツール（リアルタイム診断、ルート情報、エラー検出）
2. **chrome-devtools-mcp** - Chrome DevTools統合（ブラウザテスト、ビジュアル検証）
3. **context7** - 最新のライブラリドキュメント提供
4. **playwright-mcp** - Playwrightブラウザ自動化
5. **storybook-mcp** - Storybookドキュメント提供
6. **serena** - コード解析とトークン節約

---

## applyTo: "\*\*"
