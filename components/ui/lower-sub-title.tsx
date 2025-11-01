interface LowerTitleProps {
  title: string
  count?: number
}

/**
 * 下層タイトル
 * @param title - 日本語タイトル
 * @param count - 件数
 */
export const LowerSubTitle: React.FC<LowerTitleProps> = ({ title, count }) => {
  return (
    <h2 className="lower__subTitle">
      {title}
      {count && <span className="lower__subTitle-span">{count}件</span>}
    </h2>
  )
}
