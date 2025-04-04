import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { TransitionLink } from "."
import { PATH } from "../../../utils/path"
import styles from "./css/breadcrumb.module.scss"

interface BreadcrumbProps {
	name: string
	link: string
	thirdTitle?: string
}

/**
 * パンくずリスト
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
	name,
	link,
	thirdTitle = "",
}) => {
	return (
		<p className={`${styles.breadcrumb__title}`}>
			<TransitionLink href={PATH.INDEX} className={styles.breadCrumb__first}>
				トップ
			</TransitionLink>
			<span className={styles.Breadcrumb__arrow}>
				<ChevronRight />
			</span>
			<TransitionLink href={link} className={styles.breadCrumb__second}>
				{name}
			</TransitionLink>
			{thirdTitle && (
				<>
					<span className={styles.Breadcrumb__arrow}>
						<ChevronRight />
					</span>
					<span className={styles.breadcrumb__second}>{thirdTitle}</span>
				</>
			)}
		</p>
	)
}
