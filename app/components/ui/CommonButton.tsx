import type React from "react"
import { TransitionLink } from "./"

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
		<TransitionLink href={link ? link : ""}>
			<button
				type="button"
				onClick={handleClick}
				className={`main__btn ${className}`}
				aria-label={text}
			>
				{text}
			</button>
		</TransitionLink>
	)
}
