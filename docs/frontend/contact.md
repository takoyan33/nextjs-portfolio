# お問い合わせ ページ詳細設計書

## 1. ページ概要

- ページ: `/contact`
- 目的: ユーザーからの問い合わせを受け付け、名前、メールアドレス、メッセージを入力させ、確認画面を経由してメール送信（EmailJS経由）を行う。
- 対象ユーザー: サイト訪問者、仕事の依頼や質問を行いたいユーザー。
- 関連ページ: トップページ。

### meta
- `title: "To You Design - Contact"`

## 2. 画面仕様

### 画面構成図

- PC: `drawio/contact.drawio`
- SP: `drawio/contact.drawio`

### 画面項目

画面構成は状態（入力画面 / 確認画面）に応じて変化する。上から下へ 5 ブロックで構成する。各項目の詳細は以下のとおり。

#### No1: ヘッダー

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Header`（`components/layout/header.tsx`） |
| 表示要素 | ロゴ（`/images/common/logo.svg`）、ハンバーガーボタン |

#### No2: パンくず

| 項目 | 内容 |
|------|------|
| コンポーネント | `Breadcrumb`（`components/ui/breadcrumb.tsx`） |
| 表示階層 | トップ → Contact |
| 操作 | トップリンククリックで `/` へ遷移。カレントページ（Contact）は `aria-current="page"`（リンクなし） |

#### No3: 下層タイトル

| 項目 | 内容 |
|------|------|
| コンポーネント | `LowerTitle`（`components/ui/lower-title.tsx`） |
| 表示要素 | 見出し `お問い合わせ`（`h1`）、英字補助（`data-ja="contact"`） |
| 背景 | 青背景（`.lower__bg`）の全幅ブロック |

#### No4: 入力フォーム画面（`isConfirming = false` 時）

| 項目 | 内容 |
|------|------|
| コンポーネント | `ContactForm` (`app/contact/_containers/contact-form.tsx`) |
| 入力要素 | 名前（`input[type="text"]`）、メールアドレス（`input[type="email"]`）、メッセージ（`textarea`） |
| バリデーション | Zodスキーマ (`PostContactSchema`) と `react-hook-form` を用いたクライアントバリデーション。エラー時は対象入力欄の下部に赤字でエラー文言を表示し、枠線を赤くする |
| 操作 | 「確認画面へ」ボタン押下で、バリデーションが通れば確認画面へ遷移（`isConfirming` stateを `true` に） |

#### No5: 確認画面（`isConfirming = true` 時）

| 項目 | 内容 |
|------|------|
| コンポーネント | `ContactForm` (`app/contact/_containers/contact-form.tsx`) |
| 表示要素 | 入力された名前、メールアドレス、メッセージをプレビュー表示 |
| 操作 | ・「戻る」ボタン：入力画面に戻る（`isConfirming` stateを `false` に。入力値は保持される）<br/>・「送信する」ボタン：メール送信（`sendMail`）を実行。送信中はボタンが非活性化される |

#### No6: フッター

| 項目 | 内容 |
|------|------|
| コンポーネント | `RootLayout` の `Footer`（全ページ共通） |

## 3. データフロー

- ユーザーがフォームに入力し、「確認画面へ」ボタンを押すと、`zodResolver(PostContactSchema)` によるバリデーションチェックが行われる。
- バリデーションに成功すると、一時 state（`name`, `email`, `message`）に入力内容が保存され、確認画面（`isConfirming = true`）に切り替わる。
- 確認画面で「送信する」ボタンを押すと、`sendMail` メソッドが呼ばれ、EmailJS SDK を用いて `emailjsConfig.serviceId` および `emailjsConfig.templateId` 宛てにメールデータを送信する。
- メール送信が完了すると成功アラートを表示し、トップページ（`/`）に `router.push('/')` でリダイレクトする。失敗した場合はエラーアラートを表示して確認画面にとどまる。

mermaid/contact-flow.mmd

## 4. 状態管理・ロジック

- **フォーム管理とバリデーション**: `react-hook-form` を用い、`schema.ts` で定義した `PostContactSchema` によって制御。
  - 名前: 入力必須（1文字以上、50文字以内）
  - メールアドレス: 形式チェック（正しいメールアドレス形式）
  - メッセージ: 5文字以上必須
- **ローカル state**:
  - `name`, `email`, `message`: 送信データの一時保持
  - `isConfirming`: 確認画面フラグ
  - `isSubmitting`: 送信中の二重送信防止用フラグ

## 5. ルーティング

- パス: `/contact`
- 送信完了後リダイレクト先: `/` (トップページ)

## 6. イベント・アクション仕様

| イベント | 発火条件 | 処理内容 | 結果 |
|----------|----------|----------|------|
| フォーム送信（確認画面へ） | 入力画面で「確認画面へ」ボタンを押下 | バリデーションチェックを実行 | エラーがなければ確認画面を表示。エラー時は各フィールドにエラー文言を表示 |
| 戻る | 確認画面で「戻る」ボタンを押下 | `isConfirming` を `false` に変更 | 入力フォームに戻る（値は保持される） |
| メール送信（送信する） | 確認画面で「送信する」ボタンを押下 | EmailJSの `send` 関数を呼び出し | 送信成功でアラートを出してトップへ遷移。失敗時はエラーアラートを表示して二重送信を防止 |

## 7. APIインターフェース (外部サービス連携)

- **EmailJS SDK**:
  - 呼び出し関数: `send(serviceId, templateId, template_param)`
  - パラメータ例:
    ```json
    {
      "to_name": "入力された名前",
      "from_email": "入力されたメールアドレス",
      "message": "入力されたメッセージ"
    }
    ```

## 8. エラーハンドリング

- クライアントバリデーションエラー：リアルタイムまたはサブミット時に `react-hook-form` 経由で各インプット要素に適用。
- 送信時エラー：EmailJSのAPI送信エラーを `catch` し、「お問い合わせを送信失敗しました。」というエラーアラートを表示し、`isSubmitting` を解除して確認画面を維持する。
- 二重送信防止：送信処理実行中は `isSubmitting` を `true` にし、連続クリックを受け付けない。

## 9. その他仕様

- 実画面確認: `http://localhost:3000/contact`
- 主要コンポーネント: `Breadcrumb`, `LowerTitle`, `CommonLabel`, `ActionButton`, `ContactForm`
