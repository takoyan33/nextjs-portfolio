# Portfolio 詳細設計書

## 1. ページ概要

- ページ: `/portfolios`
- 目的: 制作実績一覧をカード形式で表示し、ユーザーを各制作物の詳細ページへ遷移させる。
- 対象ユーザー: サイト訪問者、採用担当者、制作実績を確認したいユーザー。
- 備考: 依頼パスは `/portfolio` だが、アプリの公開ルートは `/portfolios`。

## 2. 画面仕様

drawio/pc/portfolio.drawio
drawio/sp/portfolio.drawio

## 3. データフロー

- `app/portfolios/page.tsx` で `fetchPortfoliosFront()` を実行し、`/api/portfolios` から制作実績一覧を取得する。
- Server Component 側で初期表示用に日付降順へ並び替える。
- Client Component の `PortfolioList` で URL クエリ `order` を読み取り、「新しい順」「古い順」の再ソートを行う。
- `PortfolioItem` でサムネイル、日付、タイトル、タグをカード表示する。

mermaid/portfolio.mmd

## 4. 状態管理・ロジック

- **静的生成**: `export const dynamic = "force-static"` を指定する。
- **メタデータ**: `metadata.title` に `To You Design - Portfolio` を設定する。
- **URLクエリ管理**: `useSearchParams` で `order` を読み取り、`useRouter().replace()` と `usePathname()` でクエリを更新する。
- **ローカル state**: `PortfolioList` の `order` state で現在の並び替え条件を保持する。
- **空データ表示**: 制作実績が 0 件の場合は「制作物がありません」を表示する。
- **画像エラー対応**: `PortfolioItem` の画像読み込み失敗時は `/images/dummy-image.jpg` へ差し替える。

## 5. ルーティング

- 一覧ページ: `/portfolios`
- 並び替え: `/portfolios?order=new`、`/portfolios?order=old`
- 詳細ページ: `/portfolios/[id]`

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/portfolios` にアクセス | 制作実績一覧を取得し、日付降順で表示 | Portfolio 一覧が表示される |
| 並び替え変更 | セレクトで「新しい順」または「古い順」を選択 | `order` state を更新し、`router.replace()` で URL クエリを更新 | 表示順と URL が同期する |
| 並び替え解除 | セレクトで「並び替え」を選択 | `order` クエリを削除 | 初期順の一覧へ戻る |
| カードクリック | 制作実績カードをクリック | `TransitionLink` で詳細ページへ遷移 | `/portfolios/[id]` が表示される |
| 画像読み込み失敗 | サムネイルのロードエラー | `onError` でダミー画像へ差し替え | 画像欠落を防ぐ |

## 7. APIインターフェース (Backend)

| エンドポイント | メソッド | 内容 |
|----------------|----------|------|
| `/api/portfolios` | GET | 制作実績一覧を取得 |
| `/api/portfolios/[id]` | GET | 制作実績詳細ページ用の個別データを取得 |

## 8. エラーハンドリング

- `/api/portfolios` の取得に失敗した場合、共通 fetcher がエラーを投げ、Next.js のエラー境界に委譲する。
- 取得結果が空の場合は一覧を描画せず、「制作物がありません」を表示する。
- サムネイル画像の取得に失敗した場合は `/images/dummy-image.jpg` を表示する。

## 9. その他仕様

- 実画面確認: `http://localhost:3000/portfolios`
- 確認時の表示: `title = "To You Design - Portfolio"`、`h1 = "Portfolio"`、`h2 = "全ての制作物3件"`、カード3件。
- セレクト項目: 「並び替え」「新しい順」「古い順」。
- 主要コンポーネント: `Breadcrumb`、`LowerTitle`、`PortfolioList`、`PortfolioItem`。
