import { ChevronUp } from "lucide-react"
import Image from "next/image"

interface SkillProps {
  name: string
  rank: string
  tag?: string
  icon: string
  about: string
}

/**
 * スキルの要素
 * @param name スキル名
 * @param rank スキルランク
 * @param icon スキルアイコン
 * @param about スキルの説明
 */
export const SkillElement = ({ name, rank, icon, about }: SkillProps) => {
  return (
    <details className="skill__element-wrapper">
      <summary className="skill__element">
        <div className="skill__svg">
          <Image
            src={icon}
            alt="skill画像"
            fill
            className="skill__svg"
            sizes="(min-width: 768px)"
          />
        </div>
        <div className="skill__content">
          <p className="skill__text">{name}</p>
          <p className="skill__text">{rank}</p>
        </div>
        <span className="skill__toggle-icon">
          <ChevronUp />
        </span>
      </summary>
      <div className="skill__accordion">
        <div className="skill__accordion-inner">
          <p className="skill__about">{about}</p>
        </div>
      </div>
    </details>
  )
}
