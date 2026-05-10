---
globs: "components/**/\*.tsx", "app/**/\*.tsx"
alwaysApply: false
---
# React開発ガイドライン

---

## React コンポーネント作成規則


### fetch

- データフェッチはServer Componentsで行うこと
- server-onlyを利用してモジュールを保護すること
- 末端のコンポーネントへデータフェッチをコロケーションすること
- N+1データフェッチが発生しないように避ける
  参考： https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_1_data_loader
- fetch関数はデフォルトでキャッシュが無効になっている
- 基本的には`cache: "force-cache"`を設定する


### Server Functions
- ユーザー操作にともなってデータを操作し、その後の結果を再取得などの場合は、Server ActionsとrevalidatePath()/revalidateTag()を組み合わせ実行することで実現する

### キャッシュ

`../../docs/cache.md`

### シンプルなコンポーネントの場合

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

### 複雑なコンポーネントの場合

- Container/Presentationalパターンでコンポーネント設計を行う
  - 責務を分けられる点とサーバーコンポーネントのテスト対応が不十分な部分があるため。
- 参考： https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_2_container_presentational_pattern
- コンテナーはロジックを持たず、プレゼンテーション層はロジックを持つ
- コンテナーはプレゼンテーション層を参照し、プレゼンテーション層はコンテナーを参照する

例：
- `app/(home)/_containers/home-portfolio-slide/home-portfolio-slide-client.tsx`
- `app/(home)/_containers/home-portfolio-slide/home-portfolio-slide-item.tsx`