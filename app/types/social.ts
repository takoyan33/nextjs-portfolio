export type SocialLink = {
  readonly href: string
  readonly src: string
  readonly alt: string
  readonly height: number
  readonly width: number
}

// 通信ステータス
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Error404 = 404,
  Error500 = 500,
}

// 通信ステータスと文字列を紐付ける
type StatusMessage = Record<Status, string>

// 通信ステータスに対応したメッセージを作成
export const messages: StatusMessage = {
  [Status.Pending]: "処理中です...",
  [Status.Success]: "成功しました！",
  [Status.Error404]: "404エラーが発生しました。",
  [Status.Error500]: "500エラーが発生しました。",
}
