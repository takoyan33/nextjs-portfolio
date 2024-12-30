import Image from "next/image"
import Link from "next/link"

interface BreadListProps {
	name: string
	link: string
}

export const BreadList: React.FC<BreadListProps> = ({ name, link }) => {
	return (
		<p className="bread__title max-width">
			<Link href="/">トップ</Link>
			<span className="bread__arrow">
				<Image
					src="/images/next-arrow.svg"
					width={15}
					height={15}
					style={{
						width: "100%",
						height: "auto",
					}}
					alt="スライドショーのナビゲーション"
				/>
			</span>
			<Link href={link} className="bread__second">
				{name}
			</Link>
		</p>
	)
}
