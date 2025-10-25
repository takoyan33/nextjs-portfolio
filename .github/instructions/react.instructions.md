---
applyTo: "app/_components/**/*.tsx"
---

- クラスコンポーネントではなく、関数コンポーネントとフックを使ってください。
- props は TypeScript の interface または type で定義してください。
- スタイリングには styled-components を使用してください。
- JSX 内ではロジックを複雑にしすぎず、必要であれば関数に切り出してください。
