import type React from "react"

interface CommonLabelProps {
	text: string
	id?: string
}

/**
 *  * フォームラベルコンポーネント
 * @param text - ラベルテキスト
 * @param id - 関連付けるフォーム要素のID
 */
export const CommonLabel: React.FC<CommonLabelProps> = ({ text, id = "" }) => {
	return (
		<label htmlFor={id} className="form-box-label" aria-required={true}>
			{text}
			<span className="form-box-label-required">必須</span>
		</label>
	)
}
