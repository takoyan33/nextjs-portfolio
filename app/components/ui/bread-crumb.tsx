import Image from "next/image"
import { PATH } from "../../../utils/path"
import { TransitionLink } from "."

interface BreadcrumbProps {
	name: string
	link: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ name, link }) => {
	return (
		<p className="breadCrumb__title max-width">
			<TransitionLink href={PATH.INDEX}>トップ</TransitionLink>
			<span className="breadCrumb__arrow">
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
			<TransitionLink href={link} className="breadCrumb__second">
				{name}
			</TransitionLink>
		</p>
	)
}
