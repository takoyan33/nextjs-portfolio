# Privacy Policy 詳細設計書

## 1. ページ概要

- ユーザーに対して個人情報の取り扱い、アクセス解析ツール（Google Analytics, Microsoft Clarity）の使用等について明示するページ。
- 静的生成（`export const dynamic = "force-static"`）される。

### meta
- `title: "To You Design - Privacy Policy"`

## 2. 画面仕様

### 画面構成図

- `drawio/privacy-policy.drawio`

### 画面項目

画面構成は上から下へ 6 ブロックで構成する。各項目の詳細は以下のとおり。

#### No1: ヘッダー

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Header`（`components/layout/header.tsx`） |
| 表示要素 | サイトロゴ、グローバルナビ（About / ポートフォリオ / ブログ）、お問い合わせボタン |
| SP レイアウト | 768px 未満ではハンバーガーメニューに切り替え |
| 操作 | ハンバーガーボタンクリックでメニュー開閉。開閉時は `body` のスクロールを禁止 |

#### No2: パンくずリスト

| 項目 | 内容 |
|------|------|
| コンポーネント | `Breadcrumb`（`components/ui/breadcrumb.tsx`） |
| 表示階層 | トップ → Privacy Policy |
| 区切り | `ChevronRight` アイコン |
| 操作 | トップリンククリックで `/` へ遷移。ホバー時にアンダーライン表示 |
| レイアウト | `.max_width` 内に配置 |

#### No3: ヒーローエリア（Title）

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerTitle`（`components/ui/lower-title.tsx`） |
| 表示要素 | 日本語タイトル「プライバシーポリシー」、英字タイトル（`data-ja="Privacy Policy"`） |
| 背景 | 青背景（`.lower__bg`、`#3b82f6` 系）の全幅ブロック |
| セマンティクス | `h1.lower__title` としてページタイトルを表示 |

#### No4: メインコンテンツ（本文）

| 項目 | 内容 |
|------|------|
| コンポーネント | `page.tsx` 内の `.privacy-policy__content` |
| レイアウト | `.max_width` 内に中央寄せ |
| セクション1 | 「個人情報の利用目的」— お問い合わせ時の個人情報取り扱いについて |
| セクション2 | 「アクセス解析ツールについて」— Google Analytics の Cookie 利用と匿名収集の説明 |
| セクション3 | 「Microsoft Clarityについて」— ヒートマップ・セッションレコーディング等の匿名収集の説明 |
| スタイル | 見出し: `h2.privacy-policy__heading`（太字）、本文: `p.privacy-policy__text` |

#### No5: 外部リンク

| 項目 | 内容 |
|------|------|
| 表示位置 | 各セクション本文内に配置 |
| リンク先 | Google アナリティクス利用規約、Google ポリシーと規約、Microsoft Clarity 利用規約、Microsoft プライバシーステートメント |
| 属性 | `target="_blank"`、`rel="noopener noreferrer"` |
| スタイル | `a.privacy-policy__link` — 常時アンダーライン付きの青色テキスト |
| 操作 | クリックで外部ポリシーサイトを別タブで表示 |

#### No6: フッター

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Footer`（全ページ共通） |
| 表示要素 | ロゴ、サイトマップリンク、コピーライト |
| レイアウト | ヘッダーと同様のリンク構成を画面下部に表示 |

## 3. データフロー

mermaid/privacy-policy.mmd

- 静的なコンテンツであり、外部データの動的取得はない。
- Google Analytics および Microsoft Clarity によるクライアントサイドのデータ収集（匿名）が行われる。

## 4. 状態管理・ロジック

- クライアント側で Cookie を無効にされた場合、アクセス解析ツールのデータ収集は制限される（ブラウザ設定依存）。
- モバイル表示時、ヘッダーナビゲーションはハンバーガーメニュー内に格納される。

## 5. ルーティング

- `/privacy-policy`

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/privacy-policy` にアクセス | 静的HTMLのロード | プライバシーポリシーの表示 |
| 外部リンククリック | 利用規約等のリンクをクリック | `_blank` によるリンク遷移 | 外部ポリシーサイトを別タブで表示（noopener/noreferrer付与） |
| ハンバーガーメニュー操作 | モバイル時にメニューアイコンをクリック | ナビゲーションの開閉 | メニュー項目の表示/非表示 |

## 7. APIインターフェース (Backend)

- なし

## 8. エラーハンドリング

- 特になし。

## 9. その他仕様

- SEO用メタデータ: `title: "To You Design - プライバシーポリシー"`
- コンポーネント構成: React Server Component。
