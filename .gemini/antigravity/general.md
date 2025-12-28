# 基本方針（Antigravity用）

## 基本

- 日本語で応答すること
- 必要に応じて、ユーザに質問を行い、要求を明確にすること
- 作業後、作業内容とユーザが次に取れる行動を説明すること
- 作業項目が多い場合は、段階に区切り、git commit を行いながら進めること
  - semantic commit を使用する
- コマンドの出力が確認できない場合、適切なツールを使用して確認すること
- yarn コマンドで基本実施する

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

---

## mcp serever

- yarn dev or yarn dev:mockで動かす

- next-devtools-mcp
- chrome-devtools-mcp

## applyTo: "\*\*"
