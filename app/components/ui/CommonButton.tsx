import Link from "next/link"
import type React from "react"

interface CommonButtonProps {
	text: string
	link?: string
	className?: string
	handleClick?: () => void
}

export const CommonButton: React.FC<CommonButtonProps> = ({
	text,
	className = "more",
	handleClick,
	link,
}) => {
	return (
		<Link href={link ? link : ""}>
			<button
				type='button'
				onClick={handleClick}
				className={`main__btn ${className}`}
				aria-label='送信'
			>
				{text}
			</button>
		</Link>
	)
}
