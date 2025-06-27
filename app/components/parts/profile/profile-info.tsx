type ProfileInfoItem = {
	readonly label: string
	readonly content: string
}

type Props = {
	items: readonly ProfileInfoItem[]
}

export const ProfileInfo = ({ items }: Props) => {
	return (
		<>
			{items.map((item) => (
				<dl key={`${item.label}-${item.content}`} className="about__text">
					<dt className="about__text">
						<strong>{item.label}：</strong>
					</dt>
					<dd>{item.content}</dd>
				</dl>
			))}
		</>
	)
}
