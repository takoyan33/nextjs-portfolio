import Image from "next/image"
import Link from "next/link"
import { SOCIAL_LINKS } from "utils/data"

export const ProfileSnsLinks = () => {
	return (
		<div className="about__flx">
			{SOCIAL_LINKS.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={link.src}
						className="about_snsLogo"
						alt={link.alt}
						height={link.height}
						width={link.width}
					/>
				</Link>
			))}
		</div>
	)
}
