"use client"
import { send } from "emailjs-com"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CommonButton } from "../../../app/components/ui/button/common-button"
import { emailjsConfig } from "../../../utils/emailjs"
import { CommonLabel } from "../../components/ui/"

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
	} = useForm()

	// お問い合わせフォーム送信
	const sendMail = (): void => {
		if (
			emailjsConfig.serviceId !== undefined &&
			emailjsConfig.templateId !== undefined
		) {
			const template_param = {
				to_name: name,
				from_email: email,
				message: message,
			}
			send(
				emailjsConfig.serviceId,
				emailjsConfig.templateId,
				template_param,
			).then(() => {
				window.alert("お問い合わせを送信致しました。")
				router.push("/")
			})
		} else {
			window.alert("お問い合わせを送信失敗しました。")
		}
	}

	// 確認画面へ
	const handleConfirm = (): void => {
		const isValid = Object.keys(errors).length === 0
		if (isValid) {
			setIsConfirming(true)
		}
	}

	// フォームに戻る
	const handleBack = (): void => {
		setIsConfirming(false)
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
					<button
						onClick={handleBack}
						type="button"
						className="form-box-btn mr-4"
					>
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
						className="form-box-textarea"
						value={name}
						{...register("name", { required: "名前を入力してください" })}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<div />
					{errors.name && (
						<p className="form-box-error">{errors.name.message}</p>
					)}
				</div>

				<div className="form-box">
					<CommonLabel text="メールアドレス" id="email" />
					<input
						type="email"
						id="email"
						placeholder="sample@email.com"
						className="form-box-textarea"
						{...register("email", { required: "emailを入力してください" })}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<div />
					{errors.email && (
						<p className="form-box-error">{errors.email.message}</p>
					)}
				</div>

				<div className="form-box">
					<CommonLabel text="メッセージ" id="message" />
					<textarea
						id="message"
						className="form-box-textarea"
						{...register("message", {
							required: "メッセージを入力してください",
						})}
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
					<div />
					{errors.message && (
						<p className="form-box-error">{errors.message.message}</p>
					)}
				</div>

				<CommonButton
					text="確認画面へ"
					handleClick={handleSubmit(handleConfirm)}
				/>
			</form>
		</div>
	)
}
