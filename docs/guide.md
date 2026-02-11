# Next.js コーディング規約

## 📁 プロジェクト構成

```
.
├── api             # APIのデータ
├── app
│   ├── components  # コンポーネントの記載
│   ├── api         # APIの取得
│   ├── about       # Aboutページ
│   ├── contact     # お問い合わせページ
│   ├── portfolio   # ポートフォリオページ
│   ├── portfolios  # ポートフォリオ個別ページ
│   ├── skills      # スキルページ
├── public          # 画像
├── stories         # Storybook
├── styles          # CSSの設定
├── hooks           # カスタムフック
├── utils           # 共通関数
├── types           # 型定義
```

## 🧾 ファイル命名規則

| 区分         | 命名ルール            | 例                                 |
| ---------- | ---------------- | --------------------------------- |
| ディレクトリ名    | `camelCase`      | `userProfile`, `blogPosts`        |
| ファイル名（UI）  | `PascalCase.tsx` | `UserCard.tsx`                    |
| ファイル名（非UI） | `camelCase.ts`   | `useFetchUser.ts`, `apiClient.ts` |
| CSS/SCSS   | `kebab-case`     | `user-card.module.css`            |

## 🧩 コンポーネント設計

* `components/`: 再利用できる汎用UI（Button, Modalなど）
* `export default` よりも `named export` を推奨
* propsは `interface Props` で明示する

```tsx
interface Props {
  title: string;
  onClick: () => void;
}

export const CustomButton: React.FC<Props> = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
);
```

## 🎨 スタイル

### CSS Module 使用時

* ファイル名は `ComponentName.module.css`
* グローバルCSSは `globals.css` に限定

## 🧠 TypeScriptルール

* `any` は使用禁止
* 関数には明示的な `return type` を付与
* 型は `types/` ディレクトリに分離

```ts
export interface User {
  id: string;
  name: string;
}
```

## 🔁 API通信ルール

* 通信には `fetch` + `SWR` を推奨（または `axios`）


```ts
// lib/api/user.ts
export const fetchUser = async (id: string) => {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
```

## 🧹 Lint / 整形ルール

### OxLint

### Prettier

```json
{
  "singleQuote": true,
  "semi": false,
  "printWidth": 100,
  "tabWidth": 2
}
```

## 🚫 禁止事項

* `pages/api/` にロジックを書くのは最小限に
* `any` の使用
* `console.log` の残し（本番前に削除）
* `useEffect` に直接 `async` を書かない

## 📎 補足

* App Router 使用時は `layout.tsx` などの構成に注意
* サードパーティ導入時は型や更新頻度を確認
