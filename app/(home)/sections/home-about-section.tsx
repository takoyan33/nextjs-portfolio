import { ProfileSnsLinks } from "@/components/parts/profile/profile-sns-links"
import { fetchProfile } from "@/hooks/fetch"
import ScrollComponent from "hooks/use-fadeIn"
import parse from "html-react-parser"
import Image from "next/image"

export const HomeAboutSection = async () => {
  const data = await fetchProfile()

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
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </ScrollComponent>
            </div>
            <div className="aboutTop_container-item">
              <ScrollComponent>
                <p className="about__name">阿部 舜平</p>
                <p className="about__profile">{parse(data.data[0].content)}</p>
                <dl className="about__text">
                  <dt className="about__text">
                    <strong>趣味：</strong>
                  </dt>
                  <dd>{data.data[0].hobby}</dd>
                </dl>
                <dl className="about__text">
                  <dt className="about__text">
                    <strong>資格：</strong>
                  </dt>
                  <dd>{data.data[0].license}</dd>
                </dl>
                <ProfileSnsLinks />
              </ScrollComponent>
            </div>
          </div>
        </ScrollComponent>
      </div>
    </section>
  )
}
