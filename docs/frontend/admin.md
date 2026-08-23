# Adminページ（ログイン） 詳細設計書

## 1. ページ概要

- ページ: `/admin`
- 目的: 管理者画面（ダッシュボード）へアクセスするための認証（ログイン）を行う。
- 対象ユーザー: 管理者
- 関連ページ: 管理画面ダッシュボード（`/admin/dashboard`）

### meta
- `title: "To You Design - Admin"`


## 2. 画面仕様

### 画面構成図

- `drawio/admin.drawio`

### 画面項目

画面構成は上から下へ 5 ブロックで構成する。各項目の詳細は以下のとおり。

#### No1: ヘッダー

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Header`（`components/layout/header.tsx`） |
| 表示要素 | ロゴ（`/images/common/logo.svg`）、ハンバーガーボタン |

#### No2: パンくず

| 項目 | 内容 |
|------|------|
| コンポーネント | `Breadcrumb`（`components/ui/breadcrumb.tsx`） |
| 表示階層 | トップ → Admin |
| 操作 | トップリンククリックで `/` へ遷移。カレントページ（Admin）は `aria-current="page"`（リンクなし） |

#### No3: 下層タイトル

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerTitle`（`components/ui/lower-title.tsx`） |
| 表示要素 | 見出し `Admin`（`h1`）、英字補助（`data-ja="認証"`） |
| 背景 | 青背景（`.lower__bg`）の全幅ブロック |

#### No4: ログインフォーム

| 項目 | 内容 |
|------|------|
| コンポーネント | `AdminForm` (`app/(auth)/admin/admin-form.tsx`) |
| 入力要素 | ・メールアドレス：`input[type="email"]`（必須）<br/>・パスワード：`input[type="password"]`（必須） |
| 認証状態表示 | 現在の Cookie 状態から `auth` があれば「認証済み」、なければ「未認証」を表示（クラス `is-auth` / `is-unauth` 切り替え） |
| 送信ボタン | `type="submit"`。送信処理中（`loading = true`）はボタンを非活性化（disabled）にし、「認証中...」とテキストを変更 |
| エラー表示 | 認証エラー発生時、フォーム下部に赤字でエラーメッセージを表示 |
| 操作 | サブミット時にクライアント側の `onSubmit` を経由して Server Action `authenticate` を呼び出す |

#### No5: フッター

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Footer`（全ページ共通） |

## 3. データフロー

- ユーザーがフォームを入力して送信ボタンを押すと、クライアント側で `loading = true` に設定し、Server Action である `authenticate(formData)` を呼び出す。
- `authenticate` は、環境変数 `BASE_API_URL` からバックエンドのログインAPI `/api/v1/auth/login` へ POST 送信する。

- **初期アクセス**: `app/(auth)/admin/page.tsx`
  - サーバーサイドで Cookie から auth_token を取得。
  - トークンが存在する場合、バックエンドの GET /api/v1/auth/validate にリクエストしてトークンの有効性を検証。
  - トークンが有効な場合: 既に認証済みのため /admin/dashboard へ自動リダイレクト。
  - トークンがない/無効な場合: ログインフォームを表示。
- **ログイン成功時**: 
  - APIからレスポンス { token: "eyJhbGci...", user: { ... } } を取得。
  - レスポンスに含まれる JWTトークン文字列そのもの を Cookie auth_token に保存する。
  - httpOnly: true（JavaScriptからの不正読み取り防止）
  - secure: true（HTTPS通信のみ送信）
  - sameSite: "lax"（CSRF対策）
  - maxAge: 60 * 60 * 24（24時間有効）
  - `/admin/dashboard` へのパス再検証（revalidatePath）を実行。
  - `redirect("/admin/dashboard")` を使ってダッシュボードへ遷移させる。
- **ログイン失敗時**:
  - バックエンドから 401 Unauthorized 等が返却された場合、Cookieは設定せず、エラーオブジェクト `{ ok: false, error: "メールアドレスまたはパスワードが正しくありません" }` を返却。
  - クライアント側でローディングを解除し、エラーメッセージを表示。

## 4. 状態管理・ロジック

- **ローカル state (React)**:
  - `loading`: サーバーでの認証処理実行中のローディング表示制御。
  - `error`: バックエンド認証失敗時のエラー文言保持。
- **Cookieによるセッション管理**:
  - Cookie名: auth_token
  - 値: バックエンドが発行した JWTアクセストークン
  - 有効期限: 24時間 (maxAge: 60 * 60 * 24)
  - セキュリティ設定:
    - httpOnly: true (XSS対策)
    - secure: process.env.NODE_NODE_ENV === "production" (盗聴対策)
    - sameSite: "lax" (CSRF対策)
    - path: "/"

## 5. ルーティング

- ログインページ: `/admin`
- 成功時の遷移先: `/admin/dashboard`
- Next.js Proxy (`proxy.js`):
  - `/admin/dashboard` 以下のリクエストに対し、auth_token Cookieの存在を判定。
  - トークンが存在しない場合は即座に /admin へリダイレクト。

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| ページアクセス | `/admin` にアクセス | クッキーから `auth` の有無をチェック | `auth` の状態に応じて「認証済み/未認証」の表示を切り替えてフォームを描画 |
| フォーム送信 | フォームの送信ボタンを押下 | `onSubmit` から Server Action `authenticate` を呼び出し | 認証中表示に変更し、API通信を行う |
| 認証成功 | APIから `200 OK` が返却 | クッキーをセットし、キャッシュを再検証 | `/admin/dashboard` にリダイレクトする |
| 認証失敗 | APIから非成功ステータスが返却 | クライアントへエラーメッセージを返却 | ローディング表示を解除し、エラーメッセージを画面に表示する |

## 7. APIインターフェース (Backend)

| エンドポイント | メソッド | リクエスト | レスクッキー / レスポンス例 |
|----------------|----------|------------|----------------------------|
| `${process.env.BASE_API_URL}api/v1/auth/login` | POST | `{ "email": "...", "password": "..." }` | 成功: `200 OK` (Cookie用データを返却)<br/>失敗: 非成功レスポンス (例: `401 Unauthorized`) |

## 8. エラーハンドリング

- クライアントバリデーション：ブラウザ標準の `required` / `type="email"` による必須入力・簡易フォーマットチェック。
- API通信エラー・認証失敗：APIが `!res.ok` の場合、共通の「メールまたはパスワードが違います」をエラーメッセージとして返し、画面に明示する。
- ローディング制御と連動して送信ボタンを無効化し、多重送信を防ぐ。

## 9. その他仕様

- 実画面確認: `http://localhost:3000/admin`
- 主要コンポーネント: `Breadcrumb`, `LowerTitle`, `CommonLabel`, `AdminForm`
- 主要サーバーアクション: `authenticate` (`app/(auth)/admin/actions.ts`)
