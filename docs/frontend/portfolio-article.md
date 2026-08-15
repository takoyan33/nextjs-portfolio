# Portfolio 詳細ページ 詳細設計書

## 1. ページ概要

- ページ: `/portfolios/[id]`
- 目的: 各制作実績の詳細情報（概要、機能一覧、アピールポイント、制作期間、使用技術、外部リンクなど）を詳細に表示し、制作者のスキルや制作実績を深く理解させる。
- 対象ユーザー: 採用担当者、サイト訪問者、技術スタックや実績に関心があるユーザー。
- 関連ページ: 制作実績一覧ページ（`/portfolios`）

### meta
- `title: "To You Design - 記事タイトル"`

## 2. 画面仕様

### 画面構成図

`drawio/portfolio-article.drawio`

### 画面項目

画面構成は上から下へ 13 ブロックで構成する。各項目の詳細は以下のとおり。

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
| 表示階層 | トップ → Portfolio → [制作物名] |
| 区切り | `ChevronRight` アイコン |
| 操作 | トップリンククリックで `/` へ遷移、Portfolioクリックで `/portfolios` へ遷移。カレントページ（制作実績名）はリンクなし |
| SP レイアウト | `.max_width` 内に左寄せ。左右 20px 相当の余白 |

#### No3: 投稿ヘッダー情報

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` (`app/portfolios/[id]/portfolio-detail.tsx`) 内 |
| 表示要素 | 制作日付（`portfolio.date`）、タイトル（`portfolio.name`）、タグリスト（`portfolio.tag`） |
| フォーマット | 日付は `formatDate(portfolio.date)` により `YYYY.MM` 形式に整形して表示。タグは `#` プレフィックスを付与 |
| SP レイアウト | `.portfolioDetail` コンテナ内に配置、タイトルは `h2` 要素 |

#### No4: 目次 (TOC)

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` 内の目次ブロック |
| 表示要素 | "目次" 見出しと各セクションリンク（About、機能一覧、アピール、制作期間・使用技術、リンク） |
| 操作 | 各目次ボタンクリック時に `scrollToSection(id)` が走り、対象要素へスムーズスクロール（`scrollIntoView({ behavior: "smooth" })`） |
| SP レイアウト | 縦並びのリンクボタン形式で表示 |

#### No5: トップ画像 (サムネイル)

| 項目 | 内容 |
|------|------|
| コンポーネント | `Next/Image` + `CommonModal` |
| 表示要素 | `portfolio.topImg` |
| 操作 | 画像クリック時に拡大モーダル（`CommonModal`）を開く（`isOpen` state） |
| SP レイアウト | 横幅全幅表示、高さはアスペクト比を維持 |

#### No6: About セクション

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` 内 |
| 表示要素 | "About" 見出し（`h3`）、`portfolio.aboutImg`、`portfolio.about` テキスト |
| 画像モーダル | 画像クリック時に拡大モーダルを開く（`isOpen2` state） |
| テキストパース | HTML記述に対応するため、`html-react-parser`（`parse`）を使用して描画し、サニタイズを行う |

#### No7: 機能一覧 セクション

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` 内 |
| 表示要素 | "機能一覧" 見出し（`h3`）、`portfolio.functionImg`、`portfolio.function` テキスト |
| 画像モーダル | 画像クリック時に拡大モーダルを開く（`isOpen3` state） |
| テキストパース | `html-react-parser` を使用して描画し、サニタイズを行う |

#### No8: アピール セクション

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` 内 |
| 表示要素 | "アピール" 見出し（`h3`）、`portfolio.appealImg`、`portfolio.appeal` テキスト |
| 画像モーダル | 画像クリック時に拡大モーダルを開く（`isOpen4` state） |
| テキストパース | `html-react-parser` を使用して描画し、サニタイズを行う |

#### No9: 制作期間

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` 内 |
| 表示要素 | "制作期間" 見出し（`h3`）、期間テキスト（`portfolio.time`） |

#### No10: 使用技術

| 項目 | 内容 |
|------|------|
| コンポーネント | `PortfolioDetail` 内 |
| カテゴリ | フロントエンド（`portfolio.front_skill`）、バックエンド（`portfolio.back_skill`）、インフラ（`portfolio.infra_skill`） |
| 表示ロジック | フロントエンド、バックエンド、インフラのスキルが存在しない場合は各ブロックを非表示にする |
| 装飾 | カテゴリごとにSVGアイコンを表示。各スキル名はタグ形式のリストで出力 |

#### No11: 外部リンク (URL / GitHub)

| 項目 | 内容 |
|------|------|
| コンポーネント | `Next/Link` |
| リンク対象 | フロントエンドURL (`front_url`)、フロントエンドGitHub (`front_github`)、バックエンドURL (`back_url`)、バックエンドGitHub (`back_github`) |
| 表示ロジック | 各データが存在する場合のみ表示 |
| 操作 | `target="_blank"` で別タブ遷移。`SquareArrowOutUpRight` アイコンを付与 |

#### No12: 記事ナビゲーション

| 項目 | 内容 |
|------|------|
| コンポーネント | `PostNavigation`（`components/ui/post-navigation.tsx`） |
| 表示要素 | 「前の記事」へのリンク（`prev_title`）、「次の記事」へのリンク（`next_title`） |
| 遷移先 | クリックで `/portfolios/[prev_article_id]` または `/portfolios/[next_article_id]` へ遷移 |

#### No13: フッター

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Footer`（全ページ共通） |
| 表示要素 | コピーライト、サイトマップリンク等 |

## 3. データフロー

- 静的生成時（ビルド時）、`app/portfolios/[id]/page.tsx` の `generateStaticParams()` が呼び出され、`fetchPortfoliosFront()` から全実績の ID を取得してルートを確定する。
- ページアクセス時、非同期関数 `fetchPortfolio(id)` で `/api/portfolios/[id]` または該当データストアから個別の制作実績データを取得する。
- 取得したデータを `PortfolioDetail` コンポーネントに Props として引き渡し、画面描画を行う。
- `html-react-parser` を用いて、リッチテキスト（HTMLタグ含む説明文）を安全に描画する。

mermaid/portfolio-article.mmd

## 4. 状態管理・ロジック

- **静的生成設定**: `export const dynamic = "force-static"` および `export const dynamicParams = false` を指定し、定義されていないIDへのアクセスは自動的に404エラー（`notFound()`）とする。
- **データ存在検証**: `portfolio.data` が存在しない、もしくはレスポンスステータスが `404` の場合は `notFound()` を呼び出す。
- **モーダル表示管理**: 各セクションの画像（トップ、About、機能一覧、アピール）ごとに、独立した boolean state (`isOpen`〜`isOpen4`) を定義し、モーダルの開閉を制御する。
- **スムーススクロール**: TOCから各見出しへの移動は `scrollIntoView` メソッドを用い、スムーズなアニメーションスクロールを行う。

## 5. ルーティング

- パス: `/portfolios/[id]` (例: `/portfolios/1`)
- 未定義ID: 404 ページにリダイレクト

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/portfolios/[id]` にアクセス | `fetchPortfolio(id)` で詳細データをロード | 画面項目が描画される |
| TOC項目クリック | 目次内のボタンを押下 | `scrollToSection(id)` を実行 | 対象のアンカー位置までスムーズスクロールする |
| 画像クリック | サムネイル等の画像をクック | `OpenModal(setIsOpenX)` を実行 | 対象画像が `CommonModal` 内で全画面表示される |
| モーダル閉じる | モーダル背景や閉じるボタンを押下 | `CloseModal(setIsOpenX)` を実行 | モーダルが閉じる |
| 前後リンククリック | 前後のナビゲーションリンクを押下 | 対象の個別実績ページへ遷移 | `/portfolios/[new_id]` に画面が切り替わる |

## 7. APIインターフェース (Backend)

| エンドポイント | メソッド | リクエスト | レスポンス例 |
|----------------|----------|------------|--------------|
| `/api/portfolios/[id]` | GET | パスパラメータ: `id` | `{ "status": "SUCCESS", "data": { "id": 1, "name": "Portfolio Name", ... } }` |

## 8. エラーハンドリング

- `fetchPortfolio(id)` で例外が発生、または返却データが空、ステータスが404の場合は `notFound()` が実行され、Next.js の 404 画面を表示する。
- ローカル画像や外部画像の読み込みに失敗した場合のフォールバック動作は、Next.js `Image` またはレイアウト側のエラー処理に準拠する。

## 9. その他仕様

- **使用モジュール**: `html-react-parser`, `lucide-react` (SquareArrowOutUpRight)
- **主要コンポーネント**: `Breadcrumb`, `CommonModal`, `PostNavigation`
