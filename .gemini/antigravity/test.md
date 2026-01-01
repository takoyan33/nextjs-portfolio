# テストガイドライン（Antigravity用）

## applyTo: "**/\*.test.@(ts|tsx|js|jsx)", "**tests**/**/\*"

---

## 単体テストについて

- 単体テストは `@testing-library/react` を使い、テストランナーは `vitest` を使用してください。
- 外部モジュールのモック化には `vi.mock` を使ってください。
- **テストコードは `__tests__/unit` ディレクトリ以下に配置してください（例: `__tests__/unit/Button.test.tsx`）。**
- 実装詳細ではなく、**ユーザーの操作や画面上の振る舞いをテスト**してください。
- `describe` / `it` ブロックの説明は、何をテストしているか明確に記述してください。
- import は**相対パス**で指定してください
  - 例: `import { ContactForm } from "../../app/contact/_containers/contact-form"`
- `.toBeInTheDocument()` ではなく、`.toBeVisible()` を使ってください。
- `debug()` を使って、テスト実行時にDOMツリーを出力してください。
- `const router = useRouter()` がある場合はモックにしてください
- **正常系テストは1-2個、異常系テストも1個は作成してください**
- **テスト名は日本語でお願いします。**

---

## ページテスト（統合テスト）について

- ページでの統合テストは `@testing-library/react` を使い、テストランナーは `vitest` を使用してください。
- 外部モジュールのモック化には `vi.mock` を使ってください。
- **テストコードは `__tests__/integration` ディレクトリ以下に配置してください（例: `__tests__/integration/page.test.tsx`）。**
- 実装詳細ではなく、**ユーザーの操作や画面上の振る舞いをテスト**してください。
- `describe` / `it` ブロックの説明は、何をテストしているか明確に記述してください。
- import は**相対パス**で指定してください
  - 例: `import { ContactForm } from "../../app/contact/_containers/contact-form"`
- `.toBeInTheDocument()` ではなく、`.toBeVisible()` を使ってください。
- `debug()` を使って、テスト実行時にDOMツリーを出力してください。
- `const router = useRouter()` がある場合はモックにしてください

---

## E2Eテストについて

- E2E テストは **Playwright** を使用してください。
- E2E テストファイルは `e2e/` ディレクトリに配置してください。
- **ユーザーの操作フローや画面遷移を中心にテスト**してください。

---

## テスト作成時のポイント

1. **AAA パターン**に従う
   - Arrange（準備）: テストに必要なデータやモックを準備
   - Act（実行）: ユーザー操作や関数実行
   - Assert（検証）: 期待する結果を検証

2. **テストのカバレッジ**
   - 正常系: 主要な機能が期待通りに動作することを確認
   - 異常系: エラーハンドリングが正しく機能することを確認
   - エッジケース: 境界値や特殊な条件での動作を確認

3. **モック化の指針**
   - 外部APIやDBアクセスは必ずモック化
   - Next.jsのルーター (`useRouter`) はモック化
   - 日付や乱数など非決定的な値はモック化

---

## テストコマンド

```bash
# テスト実行
yarn test

# ウォッチモード
yarn test:watch

# カバレッジ確認
yarn test:coverage

# E2Eテスト
yarn playwright
yarn playwright:ui
```
