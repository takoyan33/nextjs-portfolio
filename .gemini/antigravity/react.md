# React開発ガイドライン（Antigravity用）

## applyTo: "components/**/\*.tsx", "app/**/\*.tsx"

---

## React コンポーネント作成規則

- クラスコンポーネントではなく、**関数コンポーネントとフックを使ってください**。
- props は TypeScript の  `type` で定義してください。
- スタイリングには **SCSS/CSS Module** を使用してください（ファイル名: `ComponentName.module.scss`）。
- JSX 内ではロジックを複雑にしすぎず、必要であれば関数に切り出してください。
- コンポーネントは単一責任の原則に従い、役割を明確にする。
- 状態管理が必要な場合は Zustandを使用する。
- 1ファイル1コンポーネントを基本とし、関数コンポーネントを推奨。
- 1つのコンポーネント/関数は1つの責務に絞る。50行以内を目安に分割を検討。
- 関数名・ハンドラ名は動詞から始める（例: `handleClick`, `fetchData`）。
- PropsやStateは必要最小限にし、型定義（TypeScript）を明確にする。

### コンポーネント例

```tsx
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

/**
 * ボタンコンポーネント
 * @param label - ボタンに表示するテキスト
 * @param onClick - クリック時のハンドラ
 * @param disabled - 無効化フラグ
 */
const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default Button
```
