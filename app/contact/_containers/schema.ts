import * as z from "zod"

export const PostContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "名前は入力必須です" })
    .max(50, { message: "名前は50文字以内で入力してください" }),
  email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
  message: z.string().min(5, { message: "問い合わせ内容は5文字以上必要です" }),
})

export type ContactSchema = z.infer<typeof PostContactSchema>
