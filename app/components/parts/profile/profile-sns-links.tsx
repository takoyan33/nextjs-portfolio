import Image from "next/image"
import Link from "next/link"
import { SOCIAL_LINKS } from "utils/data"

export const ProfileSnsLinks = () => {
	return (
		<div className="about__container">
			{SOCIAL_LINKS.map((link) => (
				<Link key={link.href + link.alt} href={link.href} target="_blank">
					<Image
						src={link.src}
						className="about__sns-icon"
						alt={link.alt}
						height={link.height}
						width={link.width}
					/>
				</Link>
			))}
		</div>
	)
}
