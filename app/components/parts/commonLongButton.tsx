type CommonButtonProps = {
	text: string
	href?: string
	onClick?: () => void
}

export const commonButton = ({ text, href, onClick }: CommonButtonProps) => {
	const handleClick = () => {
		if (onClick) {
			onClick()
		}
		if (href) {
			window.location.href = href
		}
	}
	return (
		<button
			type='button'
			onClick={handleClick}
			className='main__btn__long'
			aria-label='送信'
		>
			{text}
		</button>
	)
}
