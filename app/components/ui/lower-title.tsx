interface LowerTitleProps {
	enTitle: string
	title: string
}

export const LowerTitle: React.FC<LowerTitleProps> = ({ title, enTitle }) => {
	return (
		<div className="lower_bg">
			<div className="max_width">
				<h1 className="lower__title" data-ja={enTitle}>
					{title}
				</h1>
			</div>
		</div>
	)
}
