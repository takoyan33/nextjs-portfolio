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
		<article className="flx_el" key={zenn_id}>
			<Link href={`https://zenn.dev${zenn_path}`} target="_blank">
				<div className="zenn__emoji">{zenn_emoji}</div>
				<div className="zenn__flex">
					<li className="zenn__tag">{zenn_article_type}</li>
				</div>
				<p className="zenn__title"> {zenn_title} </p>
				<p className="zenn__date">{formatDate(zenn_published_at)}</p>
			</Link>
		</article>
	)
}
