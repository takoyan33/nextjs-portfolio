# Portfolio 詳細設計書

## 1. ページ概要

- ページ: `/portfolios`
- 目的: 制作実績一覧をカード形式で表示し、ユーザーを各制作物の詳細ページへ遷移させる。
- 対象ユーザー: サイト訪問者、採用担当者、制作実績を確認したいユーザー。
- 備考: 依頼パスは `/portfolio` だが、アプリの公開ルートは `/portfolios`。

### meta
- `title: "To You Design - Portfolio"`

## 2. 画面仕様

### 画面構成図

- PC: `drawio/pc/portfolio.drawio`
- SP: `drawio/portfolio.drawio`

### 画面項目（SP）

SP 版の画面構成は上から下へ 8 ブロックで構成する。各項目の詳細は以下のとおり。

#### No1: ヘッダー

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Header`（`components/layout/header.tsx`） |
| 表示要素 | ロゴ（`/images/common/logo.svg`）、ハンバーガーボタン |
| SP レイアウト | 768px 未満ではグローバルナビを非表示とし、ハンバーガーメニューで代替する |
| ドロワーメニュー | About / ポートフォリオ / ブログ へのリンクを縦並びで表示 |
| 操作 | ハンバーガーボタンクリックでメニュー開閉。開閉時は `body` のスクロールを禁止する |

#### No2: パンくず

| 項目 | 内容 |
|------|------|
| コンポーネント | `Breadcrumb`（`components/ui/breadcrumb.tsx`） |
| 表示階層 | トップ → Portfolio |
| 区切り | `ChevronRight` アイコン |
| 操作 | トップリンククリックで `/` へ遷移。カレントページ（Portfolio）は `aria-current="page"` |
| SP レイアウト | `.max_width` 内に左寄せ。左右 20px 相当の余白 |

#### No3: 下層タイトル

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerTitle`（`components/ui/lower-title.tsx`） |
| 表示要素 | 見出し `Portfolio`（`h1`）、英字補助（`data-ja="制作物"`） |
| 背景 | 青背景（`.lower__bg`、`#4284ff` 系）の全幅ブロック |
| SP レイアウト | 画面全幅。テキストは `.max_width` 内に配置 |

#### No4: 見出し / 件数

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerSubTitle`（`components/ui/lower-sub-title.tsx`） |
| 表示要素 | 「全ての制作物」+ 件数（例: `3件`） |
| データ | `PortfolioList` に渡された制作実績配列の length |
| SP レイアウト | `.max_width` 内。件数は `span.lower__subTitle-span` で表示 |

#### No5: 並び替えセレクト

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioList` 内の `select` |
| 選択肢 | 「並び替え」（デフォルト）/「新しい順」/「古い順」 |
| 状態管理 | `order` state（`""` / `"new"` / `"old"`） |
| URL 同期 | 選択値をクエリ `order` と同期。`router.replace()` で URL を更新 |
| 操作 | セレクト変更で制作実績の表示順を切り替え |
| SP レイアウト | 横幅 230px 以上。`.portfolio__filter` 内に配置 |

#### No6: 制作実績カード一覧

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioList` + `PortfolioItem` |
| データ取得 | Server 側で `fetchPortfoliosFront()` → `/api/portfolios` |
| 並び順 | 初期は日付降順。クライアント側で `order` に応じて再ソート |
| SP レイアウト | `.portfolio__List` 内でカードを縦積み（1 カラム）表示 |
| 空状態 | 0 件時は「制作物がありません」を表示 |

#### No7: カード要素

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioItem`（`components/ui/portfolio-item.tsx`） |
| 表示要素 | サムネイル画像、日付（`time`）、タイトル（`h3`）、タグ（`#tag` 形式） |
| タイトル | `html-react-parser` で HTML を描画 |
| 操作 | カード全体が `TransitionLink` により `/portfolios/[id]` へ遷移 |
| 画像フォールバック | 読み込み失敗時は `/images/dummy-image.jpg` へ差し替え |
| SP レイアウト | 画像高さは `auto`。`sizes="100vw"` で全幅表示 |

#### No8: フッター

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Footer`（全ページ共通） |
| SP レイアウト | 画面下部全幅。コピーライト・サイトマップリンクを表示 |

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
