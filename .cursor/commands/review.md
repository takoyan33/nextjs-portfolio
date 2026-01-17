---
description: コードレビューのコマンド
---

1. **変更内容の確認**
   - `git diff` または `git diff --staged` で変更内容の差分を確認する
   - `git status` で変更されたファイルの一覧を取得する
   - 変更されたファイルの種類（コンポーネント、ページ、API、ユーティリティなど）を分類する

2. **Vercel React Best Practices に基づくレビュー**
   - `.cursor/skills/vercel-react-best-practices/` のスキルを参照する
   - 以下の観点からレビューする：
     - **CRITICAL**: Waterfall の排除、Bundle Size 最適化（Barrel Imports の回避、Dynamic Imports）
     - **HIGH**: Server-Side Performance（並列フェッチ、シリアライゼーション最小化）
     - **MEDIUM**: Re-render 最適化、Rendering Performance
   - 各問題に対して、具体的な修正方法とコード例を提示する

3. **多角的なレビュー**
   - **プロジェクト固有のルール**: `.cursor/rules/` のルールに準拠しているか確認
     - React コンポーネントの設計規則（`.cursor/rules/react.mdc`）
     - テストのルール（`.cursor/rules/test.mdc`）
     - コーディング規約（`.cursor/rules/general.mdc`）
   - **TypeScript 型安全性**: 適切な型定義がされているか、`any` の使用がないか
   - **セキュリティ**: XSS対策、環境変数の適切な使用、入力検証
   - **エラーハンドリング**: 適切なエラーハンドリングが実装されているか
   - **アクセシビリティ**: ARIA属性、キーボード操作、セマンティックHTML
   - **パフォーマンス**: 不要な再レンダリング、メモ化の必要性、バンドルサイズ

4. **レビュー結果のドキュメント作成**
   - `docs/reviews/[YYYY-MM-DD]-code-review.md` 形式でファイルを作成する
   - 以下のセクションを含める：
     - **概要**: レビュー対象のファイルと変更内容の概要
     - **修正点（優先度順）**:
       - CRITICAL: 即座に修正が必要な問題
       - HIGH: 早急に修正推奨
       - MEDIUM: 改善推奨
       - LOW: 任意の改善
     - **疑問点**: 実装意図が不明確な箇所、確認が必要な点
     - **良い点**: 良い実装や参考になる箇所
   - ドキュメントを作成したら、ファイルを開いて内容を確認できるようにする
