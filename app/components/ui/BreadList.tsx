import Link from "next/link"

interface BreadListProps {
	name: string
	link: string
}

const BreadList: React.FC<BreadListProps> = ({ name, link }) => {
	return (
		<p className="bread__title max-width">
			<Link href="/">トップ</Link> <span className="bread__arrow">＞</span>
			<Link href={link} className="bread__second">
				{name}
			</Link>
		</p>
	)
}

export default BreadList
