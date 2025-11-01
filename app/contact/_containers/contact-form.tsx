"use client"
import { send } from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CommonLabel } from "../../../components/ui"
import { ActionButton } from "../../../components/ui/button/common-button"
import { emailjsConfig } from "../../../utils/emailjs"
import { ContactSchema, PostContactSchema } from "./schema"
/**
 * お問い合わせフォーム
 */
export const ContactForm = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isConfirming, setIsConfirming] = useState<boolean>(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(PostContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  /** 確認画面に遷移 */
  const handleConfirm = (data: ContactSchema): void => {
    const isValid = Object.keys(errors).length === 0
    setName(data.name)
    setEmail(data.email)
    setMessage(data.message)
    if (isValid) {
      setIsConfirming(true)
    }
  }

  /** フォームに戻る */
  const handleBack = (): void => {
    setIsConfirming(false)
  }

  /** お問い合わせフォーム送信 */
  const sendMail = (): void => {
    if (emailjsConfig.serviceId !== undefined && emailjsConfig.templateId !== undefined) {
      const template_param = {
        to_name: name,
        from_email: email,
        message: message,
      }
      send(emailjsConfig.serviceId, emailjsConfig.templateId, template_param).then(() => {
        window.alert("お問い合わせを送信致しました。")
        router.push("/")
      })
    } else {
      window.alert("お問い合わせを送信失敗しました。")
    }
  }

  if (isConfirming) {
    // プレビュー画面
    return (
      <div className="form">
        <h2>お問い合わせ内容確認</h2>
        <p>下記の内容で送信します。よろしいですか？</p>
        <p>名前：{name}</p>
        <p>メールアドレス：{email}</p>
        <p>メッセージ：{message}</p>
        <div className="text-center">
          <button onClick={handleBack} type="button" className="form-box-btn mr-4">
            戻る
          </button>
          <button onClick={sendMail} type="button" className="form-box-btn">
            送信する
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form">
      <p>
        以下のフォームに必要事項をご記入のうえ、お気軽にお問い合わせください。
        <br />
        内容確認後、ご連絡させて頂きます。
      </p>
      <form onSubmit={handleSubmit(sendMail)}>
        <div className="form-box">
          <CommonLabel text="名前" id="name" />
          <input
            type="text"
            id="name"
            placeholder="山田 太郎"
            className={`form-box-textarea${errors.name ? " form-box-textarea-error" : ""}`}
            {...register("name", { required: "名前を入力してください" })}
            required
          />
          <div />
          {errors.name && typeof errors.name.message === "string" && (
            <p className="form-box-error">{errors.name.message}</p>
          )}
        </div>

        <div className="form-box">
          <CommonLabel text="メールアドレス" id="email" />
          <input
            type="email"
            id="email"
            placeholder="sample@email.com"
            className={`form-box-textarea${errors.email ? " form-box-textarea-error" : ""}`}
            {...register("email", { required: "emailを入力してください" })}
            required
          />
          <div />
          {errors.email && typeof errors.email.message === "string" && (
            <p className="form-box-error">{errors.email.message}</p>
          )}
        </div>

        <div className="form-box">
          <CommonLabel text="メッセージ" id="message" />
          <textarea
            id="message"
            className={`form-box-textarea${errors.message ? " form-box-textarea-error" : ""}`}
            {...register("message", {
              required: "メッセージを入力してください",
            })}
            rows={5}
            placeholder="お問い合わせ"
            required
          />
          <div />
          {errors.message && typeof errors.message.message === "string" && (
            <p className="form-box-error">{errors.message.message}</p>
          )}
        </div>

        <ActionButton text="確認画面へ" handleClick={handleSubmit(handleConfirm)} />
      </form>
    </div>
  )
}
