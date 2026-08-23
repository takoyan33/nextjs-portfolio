# Home 詳細設計書

## 1. ページ概要

- サイトトップとして、ブランド、プロフィール概要、制作実績、経歴、スキル、ブログ、お問い合わせ導線を縦方向に提示するページ。
- `app/(home)/page.tsx` で `export const dynamic = "force-static"` を指定し、静的生成を前提に構成する。
- FV では Three.js の GLTF モデルを表示し、主要セクションはスクロール時のフェードイン演出を行う。

### meta
- `title: "To You Design - Home"`

## 2. 画面仕様

### 画面構成図

- `drawio/home.drawio`

### 画面項目

画面構成は上から下へ 9 ブロックで構成する。各項目の詳細は以下のとおり。

#### No1: ヘッダー

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Header`（`components/layout/header.tsx`） |
| 表示要素 | ロゴ（`/images/common/logo.svg`）、ハンバーガーボタン |
| SP レイアウト | 768px 未満ではグローバルナビを非表示とし、ハンバーガーメニューで代替する |
| ドロワーメニュー | About / ポートフォリオ / ブログ へのリンクを縦並びで表示 |
| 操作 | ハンバーガーボタンクリックでメニュー開閉。開閉時は `body` のスクロールを禁止する |
| アクセシビリティ | `aria-expanded`、`aria-controls="navigation"`、フォーカストラップ（`#js-focus-trap`）を設定 |

#### No2: FV（ファーストビュー）

| 項目 | 内容 |
|------|------|
| コンポーネント | `HomeFvSection`（`app/(home)/sections/home-fv-section.tsx`） |
| 表示要素 | 大見出し `To You Design`、サブ見出し `Portfolio`、Three.js 3D モデル |
| 3D モデル | `ThreeModel`（クライアントコンポーネント）。GLTF `/models/scene.gltf` を Canvas 上に描画 |
| アニメーション | モデルは上下移動（sin 波）と Y 軸回転を自動実行。`OrbitControls` によりドラッグ操作可能（ズーム無効） |
| 演出 | 見出しに `slide__in__right` クラスを付与し、右からスライドインする |
| SP レイアウト | 見出しと 3D モデルを縦方向に配置。Canvas は画面幅いっぱいに表示 |

#### No3: About

| 項目 | 内容 |
|------|------|
| コンポーネント | `HomeAboutSection`（Server Component） |
| セクション見出し | `About`（`data-ja="To You Designについて"`） |
| データ取得 | `fetchProfile()` → `/api/profiles` |
| 表示要素 | プロフィール画像、氏名（阿部 舜平）、本文、趣味、資格、SNS リンク |
| プロフィール画像 | `/images/myphoto.png`。SP では `sizes="100vw"` で全幅表示 |
| 本文 | `html-react-parser` で HTML を描画 |
| SNS リンク | `ProfileSnsLinks`。GitHub / X / Zenn 等を外部リンク（`target="_blank"`）で表示 |
| SP レイアウト | 画像 → テキストの順に縦積み。左右に 20px 相当の余白（`.max_width` 内） |
| 演出 | `ScrollComponent` によりスクロール時フェードイン |

#### No4: Portfolio

| 項目 | 内容 |
|------|------|
| コンポーネント | `HomePortfolioSlide`（Server）+ `HomePortfolioSlideClient`（Client） |
| セクション見出し | `Portfolio`（`data-ja="ポートフォリオ"`） |
| データ取得 | `fetchPortfoliosFront()` → `/api/portfolios`。失敗時または 0 件時は `public/mock/api/portfolios/index.json` を使用 |
| 並び順 | 制作日（`date`）の降順 |
| スライダー | Swiper を使用。SP（0px 以上）は `slidesPerView: 1.5`、768px 以上は `3.5` |
| カード要素 | サムネイル画像、日付、タイトル、タグ（`#tag` 形式） |
| カード操作 | カードクリックで `TransitionLink` により `/portfolios/[id]` へ遷移 |
| 前後ボタン | 制作物が 5 件以上の場合のみ左右ナビ（`ChevronLeft` / `ChevronRight`）を表示 |
| CTA | `LinkButton`「ポートフォリオをさらに見る」→ `/portfolios`。GTM: `home_portfolio` / `click_more_portfolio` |
| SP レイアウト | 1.5 枚表示により次カードの一部が見える peep 表示。左右 20px 余白 |

#### No5: History

| 項目 | 内容 |
|------|------|
| コンポーネント | `CareerHistoryTimeline`（Server Component） |
| セクション見出し | `History`（`data-ja="過去の経歴"`） |
| データ取得 | `fetchHistories()` → `/api/histories` |
| 表示要素 | 経歴タイムライン（日付、タイトル、本文）を `Timeline` コンポーネントで縦並び表示 |
| CTA | `LinkButton`「経歴をさらに見る」→ `/about`。GTM: `home_history` / `click_more_history` |
| SP レイアウト | タイムラインを 1 カラムで表示。CTA はセクション下部に配置 |
| 演出 | `ScrollComponent` によりスクロール時フェードイン |

#### No6: Skill

| 項目 | 内容 |
|------|------|
| コンポーネント | `HomeSkills`（Server Component） |
| セクション見出し | `Skill`（`data-ja="スキルセット"`） |
| データ取得 | `Promise.all` で 4 カテゴリを並列取得（`/api/skills/front`, `/back`, `/infra`, `/other`） |
| カテゴリ | Frontend / Backend / Infra / Other の 4 区分 |
| 表示要素 | 各カテゴリ見出し（`h3.skill__title`）+ スキルカード（`SkillElement`：アイコン、スキル名） |
| SP レイアウト | カテゴリごとに縦積み。スキルカードは 1 カラム中心配置 |
| 演出 | 各カテゴリのスキル一覧に `ScrollComponent` を適用 |

#### No7: Blog

| 項目 | 内容 |
|------|------|
| コンポーネント | `HomeBlog`（Server Component）+ `HomeBlogItem` |
| セクション見出し | `Blog`（`data-ja="ブログ"`） |
| データ取得 | `fetchZennArticles()` → Zenn API（`https://zenn.dev/api/articles?username=643866`） |
| 表示件数 | 最新 3 件（`HOME_BLOG_COUNT = 3`） |
| 記事要素 | 公開日（`time`）、タイトル（`h3`） |
| 記事操作 | クリックで Zenn 記事ページへ外部リンク（`target="_blank"`） |
| 条件分岐 | 記事 0 件または取得失敗時は一覧を描画せず `null` を返す（CTA のみ表示） |
| CTA | `LinkButton`「ブログをさらに見る」→ `/blog`。GTM: `home_blog` / `click_more_blog` |
| SP レイアウト | 記事を縦並びリスト（ニュース風）で表示 |

#### No8: Contact

| 項目 | 内容 |
|------|------|
| コンポーネント | `page.tsx` 内の Contact セクション |
| セクション見出し | `Contact`（`main__title-white`、`data-ja="お問い合わせ"`） |
| 背景 | 青背景（`.contact` セクション、`#4284ff` 系） |
| 表示要素 | CONTACT ボックス（`h3.contact__box-title`）、説明文「お問い合わせ」、CTA ボタン |
| CTA | `LinkButton`「お問い合せフォームへ」→ `/contact`。GTM: `home_contact` / `click_more_contact` |
| SP レイアウト | セクション全幅。ボックスは `.max_width` 内に中央配置 |
| 演出 | `ScrollComponent` によりスクロール時フェードイン |

#### No9: フッター / TopBackButton

| 項目 | 内容 |
|------|------|
| フッター | `RootLayout` の `Footer`（全ページ共通） |
| 戻るボタン | `TopBackButton`（`components/ui/button/top-back-button.tsx`） |
| 表示条件 | スクロール 150px 超で右下固定ボタン（`ChevronUp` アイコン）を表示 |
| 操作 | ボタンクリックで `window.scrollTo(0, 0)` によりページ先頭へ戻る |
| SP レイアウト | フッターは画面下部全幅。TopBackButton は右下に固定表示 |

## 3. データフロー

- プロフィール、ポートフォリオ、経歴、スキル、Zenn 記事を各 Server Component で取得する。
- ポートフォリオ一覧は API 取得に失敗した場合、`public/mock/api/portfolios/index.json` をフォールバックとして使用する。
- Zenn 記事が 0 件の場合、Blog セクション内の一覧は表示しない。

mermaid/home.mmd

## 4. 状態管理・ロジック

- **静的生成**: `dynamic = "force-static"` によりトップページを静的生成する。
- **FV 3D 表示**: `ThreeModel` はクライアントコンポーネントとして `Canvas`、`useGLTF`、`OrbitControls` を利用し、モデルを上下移動・回転させる。
- **ポートフォリオスライダー**: `HomePortfolioSlideClient` は Swiper と `useState` で前後ボタンの表示状態を制御する。
- **データ整形**: ポートフォリオは日付降順に並べ替え、ブログは Zenn 記事の先頭 3 件のみ表示する。
- **共通導線**: `LinkButton` で `/portfolios`、`/about`、`/blog`、`/contact` へ遷移する。

## 5. ルーティング

- `/`

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/` にアクセス | RootLayout、Header、Home、Footer を表示 | トップページを表示 |
| 3D モデル操作 | FV の Canvas をドラッグ | `OrbitControls` でモデル視点を操作 | モデルの向きが変化 |
| スクロール | 各セクションが表示領域に入る | `ScrollComponent` でフェードイン | セクション要素が順次表示 |
| スライダー操作 | Portfolio の前後ボタンをクリック | Swiper の navigation を実行 | 表示中の制作実績が切り替わる |
| 制作実績クリック | Portfolio カードをクリック | `TransitionLink` で詳細へ遷移 | `/portfolios/[id]` を表示 |
| CTA クリック | 各「さらに見る」ボタンをクリック | `LinkButton` で該当ページへ遷移し GTM イベントを付与 | 一覧・詳細導線へ遷移 |
| トップへ戻る | 右下固定ボタンをクリック | `TopBackButton` のスクロール処理を実行 | ページ先頭へ戻る |

## 7. APIインターフェース (Backend)

| エンドポイント | メソッド | 内容 |
|----------------|----------|------|
| `/api/profiles` | GET | トップ About セクション用プロフィールを取得 |
| `/api/portfolios` | GET | Portfolio スライダー用制作実績を取得 |
| `/api/histories` | GET | History セクション用経歴を取得 |
| `/api/skills/front` | GET | Frontend スキル一覧を取得 |
| `/api/skills/back` | GET | Backend スキル一覧を取得 |
| `/api/skills/infra` | GET | Infra スキル一覧を取得 |
| `/api/skills/other` | GET | Other スキル一覧を取得 |
| `https://zenn.dev/api/articles?username=643866` | GET | Blog セクション用 Zenn 記事一覧を取得 |

## 8. エラーハンドリング

- 共通 fetcher は `response.ok` が false の場合にエラーを投げ、呼び出し元または Next.js の `error.tsx` に委譲する。
- Portfolio スライダーは API 取得失敗または空配列時にモックデータへフォールバックする。
- Zenn 記事取得は失敗時に空配列を返し、Blog 一覧を非表示にする。

## 9. その他仕様

- SEO用メタデータ: `title: "To You Design"`、`description: "Next.js / React を中心に開発するフロントエンドエンジニア Abe Shumpei のポートフォリオサイト。制作実績や技術スタックを紹介しています。"`
- OGP画像: `/images/ogp.png`
- 画像: プロフィール画像 `/images/myphoto.png`、Three.js モデル `/models/scene.gltf`
- 計測: production 環境では Google Analytics、Google Tag Manager、Clarity、Vercel Speed Insights を読み込む。
