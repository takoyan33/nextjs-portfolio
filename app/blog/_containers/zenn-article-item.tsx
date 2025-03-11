import dayjs from "dayjs"
import Link from "next/link"

interface ZennArticleItemProps {
	zenn_id: number
	zenn_title: string
	zenn_published_at: Date
	zenn_article_type: string
	zenn_emoji: string
	zenn_path: string
}

export default function ZennArticleItem({
	zenn_id,
	zenn_title,
	zenn_published_at,
	zenn_article_type,
	zenn_emoji,
	zenn_path,
}: ZennArticleItemProps) {
	//日付のフォーマット
	const formatDate = (date: Date): string => dayjs(date).format("YYYY-MM-DD")
	return (
		<article className="zennArticle" key={zenn_id}>
			<Link href={`https://zenn.dev${zenn_path}`} target="_blank">
				<div className="zennArticle__emoji">{zenn_emoji}</div>
				<div className="zennArticle__content">
					<p className="zennArticle__date">{formatDate(zenn_published_at)}</p>
					<h3 className="zennArticle__title"> {zenn_title} </h3>
					<ul className="zennArticle__container">
						<li className="zennArticle__tag">{zenn_article_type}</li>
					</ul>
				</div>
			</Link>
		</article>
	)
}
