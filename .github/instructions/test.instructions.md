## .github/instructions/test.instructions.md

## applyTo: "\*\*"

## 単体テストについて
- 単体テストは `@testing-library/react` を使い、テストランナーは `vitest` を使用してください。
- 外部モジュールのモック化には `vi.mock` を使ってください。
- **テストコードを提案する場合は、必ず `__tests__/` ディレクトリ以下に配置するファイルパスを明記してください（例: `__tests__/Button.test.tsx`）。**
- 実装詳細ではなく、ユーザーの操作や画面上の振る舞いをテストしてください。
- `describe` / `it` ブロックの説明は、何をテストしているか明確に記述してください。
- importは相対パスで指定してください
  - 例:import { ContactForm } from "../../app/contact/_containers/contact-form"
- .toBeInTheDocument() ではなく、 .toBeVisible() を使ってください。
- debug() を使って、テスト実行時にDOMツリーを出力してください。
- const router = useRouter()がある場合はモックにしてください

## E2Eテストについて
- E2E テストは `playwright` を使用してください。
- E2E テストファイルは `e2e/` ディレクトリに配置してください。
- ユーザーの操作フローや画面遷移を中心にテストしてください。
