# About 詳細設計書

## 1. ページ概要

- 開発者の経歴、職歴、および取得資格をユーザーに提示するページ。
- タブ切り替えにより「経歴(History)」と「職歴(Career)」を動的に切り替えて表示する。
- 静的生成（`export const dynamic = "force-static"`）されるが、タブ切り替えはクライアントサイトの状態管理（Zustand）で行われる。

### meta
- `title: "To You Design - About"`

## 2. 画面仕様

### 画面構成図

- `drawio/about.drawio`

### 画面項目

画面構成は上から下へ 7 ブロックで構成する。各項目の詳細は以下のとおり。

#### No1: ヘッダー

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Header`（`components/layout/header.tsx`） |
| 表示要素 | ロゴ、グローバルナビ（About / ポートフォリオ / ブログ）、お問い合わせボタン |
| SP レイアウト | 768px 未満ではハンバーガーメニューに切り替え。ドロワー内にナビリンクを表示 |
| 操作 | ハンバーガーボタンクリックでメニュー開閉。開閉時は `body` のスクロールを禁止 |

#### No2: パンくずリスト

| 項目 | 内容 |
|------|------|
| コンポーネント | `Breadcrumb`（`components/ui/breadcrumb.tsx`） |
| 表示階層 | トップ → About |
| 区切り | `ChevronRight` アイコン |
| 操作 | トップリンククリックで `/` へ遷移。カレントページは `aria-current="page"` |
| レイアウト | `.max_width` 内に配置 |

#### No3: ヒーローエリア（Title）

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerTitle`（`components/ui/lower-title.tsx`） |
| 表示要素 | 日本語タイトル「プロフィール」、英字タイトル（`data-ja="About"`） |
| 背景 | 青背景（`.lower__bg`、`#3b82f6` 系）の全幅ブロック |
| セマンティクス | `h1.lower__title` としてページタイトルを表示 |

#### No4: タブメニュー

| 項目 | 内容 |
|------|------|
| コンポーネント | `AboutTabs`（`app/about/_containers/about-tabs.tsx`） |
| タブ項目 | 「経歴」（history）/「職歴」（career） |
| 状態管理 | Zustand `useTabStore`。初期値は `"history"` |
| 操作 | タブクリックで `changeActiveTab` を呼び出し、表示コンテンツを切り替え |
| スタイル | アクティブタブに `.active` クラスを付与（青い上線） |
| アクセシビリティ | `role="tablist"` / `role="tab"` / `role="tabpanel"`、`aria-selected`、`aria-controls` を設定 |

#### No5: タイムライン（コンテンツ）

| 項目 | 内容 |
|------|------|
| コンポーネント | `CareerHistoryTimeline`（経歴）/ `JobTimeline`（職歴） |
| データ取得 | 経歴: `fetchHistories()` → `/api/histories`、職歴: `fetchJobs()` → `/api/job` |
| 表示要素 | 日付（`dt`）、タイトル（`h2`）、本文（`html-react-parser` で HTML 描画） |
| 条件分岐 | `activeTab === "history"` で経歴、`activeTab === "career"` で職歴を表示 |
| ローディング | `Suspense` 境界で「読み込み中...」を表示 |
| 空状態 | データ 0 件時は「データはありません」を表示 |
| レイアウト | `.tab-content.max_width` 内。青色サークルマーカー付きタイムライン |

#### No6: 資格セクション

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerSubTitle` + `LicenseList`（`components/ui/rsc/license-list.tsx`） |
| セクション見出し | 「資格」（`LowerSubTitle`） |
| データ取得 | `fetchLicenses()` → `/api/licenses` |
| 表示形式 | テーブル（日付 / 資格名の 2 列） |
| 空状態 | 0 件時は「データはありません」を表示 |
| ローディング | `Suspense` 境界で「読み込み中...」を表示 |
| レイアウト | `.license.max_width` セクション内 |

#### No7: フッター

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Footer`（全ページ共通） |
| 表示要素 | ロゴ、サイトマップリンク、コピーライト |

## 3. データフロー

- MSW (Mock Service Worker) により、経歴、職歴、資格の各エンドポイントからデータを取得。
- `Suspense` コンポーネントにより、データ取得中はローディング表示（「読み込み中...」）が行われる。

mermaid/about.mmd

## 4. 状態管理・ロジック

- **Zustand (`useTabStore`)**: グローバルなタブ状態 (`activeTab`) を保持し、`changeActiveTab` アクションで切り替えを行う。
- **AboutTabs**: クライアントコンポーネントであり、`activeTab` の値に基づいて表示する子要素（`CareerHistoryTimeline` or `JobTimeline`）を切り替える。
- **モバイル対応**: 画面幅が一定以下になると、ヘッダーのナビゲーションがハンバーガーメニューに格納される。

## 5. ルーティング

- `/about`

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/about` にアクセス | 静的HTMLの表示 + コンポーネントのハイドレーション | プロフィールの表示 |
| タブクリック | 「経歴」または「職歴」をクリック | `changeActiveTab` の呼び出し | ステート更新とコンテンツの切り替え |
| メニュー開閉 | モバイル時にメニューアイコンをクリック | ナビゲーションの表示フラグ更新 | メニューの開閉 |

## 7. APIインターフェース (Backend)

| エンドポイント | メソッド | 内容 |
|----------------|----------|------|
| `/api/histories` | GET | 経歴データ（大学卒業、個人開発開始など）を取得 |
| `/api/job` | GET | 職歴データ（従事したプロジェクト情報など）を取得 |
| `/api/licenses` | GET | 取得した資格一覧を取得 |

## 8. エラーハンドリング

- データ取得失敗時は、基本的な `error.tsx` へのフォールバック、または `Suspense` の境界での処理が行われる。

## 9. その他仕様

- SEO用メタデータ: `title: "To You Design - About"`
- コンポーネント構成: RSC (ページ) + クライアントコンポーネント (タブ) のハイブリッド構成。
