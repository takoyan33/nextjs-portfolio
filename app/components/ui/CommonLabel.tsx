import Link from "next/link"
import type React from "react"

interface CommonLabelProps {
	text: string
	id?: string
}

export const CommonLabel: React.FC<CommonLabelProps> = ({ text, id }) => {
	return (
		<label htmlFor={id} className="form-box-label">
			{text}
			<span className="form-box-label-required">必須</span>
		</label>
	)
}
