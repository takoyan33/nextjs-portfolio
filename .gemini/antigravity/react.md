# React開発ガイドライン（Antigravity用）

## applyTo: "components/**/\*.tsx", "app/**/\*.tsx"

---

## React コンポーネント作成規則

- クラスコンポーネントではなく、**関数コンポーネントとフックを使ってください**。
- props は TypeScript の `interface` または `type` で定義してください。
- スタイリングには **styled-components** を使用してください。
- JSX 内ではロジックを複雑にしすぎず、必要であれば関数に切り出してください。

---

## 補足

- コンポーネントは単一責任の原則に従い、役割を明確にする
- 状態管理が必要な場合は Zustand または Recoil を使用する
- パフォーマンスを考慮し、必要に応じて `React.memo`、`useMemo`、`useCallback` を活用する
