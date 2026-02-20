import styles from "@/components/ui/css/common-label.module.scss"
import type React from "react"

interface CommonLabelProps {
  text: string
  id?: string
  required?: boolean
}

/**
 *  * フォームラベルコンポーネント
 * @param text - ラベルテキスト
 * @param id - 関連付けるフォーム要素のID
 */
export const CommonLabel: React.FC<CommonLabelProps> = ({ text, id = "", required = false }) => {
  return (
    <label htmlFor={id} className={styles.label} aria-required={required}>
      <span className={styles.label__text}>{text}</span>
      {required && <span className={styles.label__required}>必須</span>}
    </label>
  )
}
