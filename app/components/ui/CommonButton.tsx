import React from "react";
import Link from "next/link";

interface CommonButtonProps {
	text: string;
	link?: string;
	className?: string;
	handleClick?: () => void;
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
				onClick={handleClick}
				className={`main__btn ${className}`}
				aria-label="送信"
			>
				{text}
			</button>
		</Link>
	);
};
