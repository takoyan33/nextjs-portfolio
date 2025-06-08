import ScrollComponent from "hooks/use-fadeIn"
import Image from "next/image"
import Link from "next/link"
import { SOCIAL_LINKS } from "utils/data"

export const HomeAboutSection = () => {
	return (
		<section className="about">
			<div className="max_width">
				<ScrollComponent>
					<h2 className="main__title" data-ja="To You Designについて">
						About
					</h2>
				</ScrollComponent>
				<ScrollComponent>
					<div className="aboutTop_container">
						<div className="aboutTop_container-item">
							<ScrollComponent>
								<div className="about_img">
									<Image
										src="/images/myphoto.png"
										alt="プロフィール画像"
										fill
										priority
										sizes="(min-width: 768px) 50vw, 100vw"
									/>
								</div>
							</ScrollComponent>
						</div>
						<div className="aboutTop_container-item">
							<ScrollComponent>
								<p className="about__name">阿部 舜平</p>
								<p className="about__profile">
									北海道在住の社会人1年目のエンジニア。
									<br />
									大学在学中に、プログラミングに興味を持ち、HTML/CSSから学習を始めました。
									<br />
									文系大学を卒業後、フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。
									<br />
									現在はReactやVueを中心に、更なるフロントエンド技術の向上を目指しています。
								</p>
								<dl className="about__text">
									<dt className="about__text">
										<strong>趣味：</strong>
									</dt>
									<dd>旅行、ギター</dd>
								</dl>
								<dl className="about__text">
									<dt className="about__text">
										<strong>資格：</strong>
									</dt>
									<dd>基本情報技術者試験</dd>
								</dl>
								<div className="about__container">
									{SOCIAL_LINKS.map((link) => (
										<Link
											key={link.href + link.alt}
											href={link.href}
											target="_blank"
										>
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
							</ScrollComponent>
						</div>
					</div>
				</ScrollComponent>
			</div>
		</section>
	)
}
