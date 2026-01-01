# Adminページ（ログイン） 詳細設計書

## 1. ページ概要
- 管理者画面へのログインを行うページ
- 対象ユーザー：管理者
- 利用シナリオ：メールアドレス・パスワードによる認証
- 関連ページ：管理画面ダッシュボード（/admin/dashboard）

## 2. UI構成
- パンくずリスト（Breadcrumb）
- タイトル（LowerTitle）
- ログインフォーム
  - メールアドレス入力欄（Email）
  - パスワード入力欄（Password）
  - 送信ボタン（Submit Button）
- ステータス表示（"認証済み" / "未認証"）
- レイアウト：max_width, u-padding

## 3. データフロー

mermaid/admin.mmd

## 4. 状態管理・ロジック
- **Local State (React)**:
  - `loading`: 送信中のローディング状態
  - `error`: エラーメッセージ
- **Server Component Props**:
  - `auth`: クッキーから取得した認証状態（"true" or undefined）

## 5. ルーティング
- パス：`/admin`
- リダイレクト処理：
  - ログイン成功時：`/admin/dashboard` へリダイレクト

## 6. イベント・アクション仕様
| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| submit   | フォーム送信 | authenticate (Server Action) 実行 | 成功時リダイレクト / 失敗時エラー表示 |

## 7. APIインターフェース (Backend)
| エンドポイント | メソッド | リクエスト | レスポンス例 |
|----------------|---------|------------|--------------|
| `/api/v1/auth/login` | POST | `{ email, password }` | 成功: 200 OK / 失敗: 4xx |

## 8. エラーハンドリング
- **入力バリデーション**: HTML標準の `required`, `type="email"`
- **APIエラー**:
  - バックエンドからのレスポンスが非成功 (`!res.ok`) の場合、"メールまたはパスワードが違います" を返す
  - クライアント側で `alert` およびテキストでエラーを表示

## 9. その他仕様
- **Cookie設定**:
  - 名前: `auth`
  - 値: `true`
  - 設定: `HttpOnly`, `Secure`, `SameSite=Lax`, `MaxAge=1日`
- **キャッシュ制御**:
  - ログイン成功時に `/admin/dashboard` を `revalidatePath` で更新
