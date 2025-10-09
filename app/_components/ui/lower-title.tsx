interface LowerTitleProps {
  enTitle: string
  title: string
}

/**
 * 下層タイトル
 * @param title - 日本語タイトル
 * @param enTitle - 英語タイトル
 */
export const LowerTitle: React.FC<LowerTitleProps> = ({ title, enTitle }) => {
  return (
    <div className="lower__bg">
      <div className="max_width">
        <h1 className="lower__title" data-ja={enTitle}>
          {title}
        </h1>
      </div>
    </div>
  )
}
