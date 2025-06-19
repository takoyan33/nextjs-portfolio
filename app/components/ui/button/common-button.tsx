import type React from "react"
import { TransitionLink } from "../"

interface CommonButtonProps {
	text: string
	link?: string
	className?: string
	handleClick?: () => void
}

/**
 * ボタン
 */
export const CommonButton: React.FC<CommonButtonProps> = ({
	text,
	className = "more",
	handleClick,
	link,
}) => {
	return (
		<>
			{link ? (
				<TransitionLink href={link}>
					<button
						type="button"
						onClick={handleClick}
						className={`common__btn slide ${className}`}
						aria-label={text}
					>
						{text}
					</button>
				</TransitionLink>
			) : (
				<button
					type="button"
					onClick={handleClick}
					className={`common__btn slide ${className}`}
					aria-label={text}
				>
					{text}
				</button>
			)}
		</>
	)
}
