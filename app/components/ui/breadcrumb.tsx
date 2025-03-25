import Image from "next/image"
import { TransitionLink } from "."
import { PATH } from "../../../utils/path"
import styles from "./css/breadcrumb.module.scss"

interface BreadcrumbProps {
	name: string
	link: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ name, link }) => {
	return (
		<p className={`${styles.breadcrumb__title}`}>
			<TransitionLink href={PATH.INDEX} className={styles.breadCrumb__first}>
				トップ
			</TransitionLink>
			<span className={styles.Breadcrumb__arrow}>
				<Image
					src="/images/next-arrow.svg"
					width={15}
					height={15}
					alt="スライドショーのナビゲーション"
				/>
			</span>
			<TransitionLink href={link} className={styles.breadCrumb__second}>
				{name}
			</TransitionLink>
		</p>
	)
}
