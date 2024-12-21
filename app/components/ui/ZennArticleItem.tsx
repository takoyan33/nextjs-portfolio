import Image from "next/image"
import Link from "next/link"

type ZennArticleItemProps = {
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
	const formatDate = (dateString) => {
		const date = new Date(dateString)
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, "0")
		const day = String(date.getDate()).padStart(2, "0")

		return `${year}-${month}-${day}`
	}
	return (
		<div className="flx_el" key={zenn_id}>
			<Link href={`https://zenn.dev${zenn_path}`} target="_blank">
				<div className="zenn__emoji">{zenn_emoji}</div>
				<div className="zenn__flex">
					<li className="zenn__tag">{zenn_article_type}</li>
				</div>
				<p className="zenn__title"> {zenn_title} </p>
				<p className="zenn__date">{formatDate(zenn_published_at)}</p>
			</Link>
		</div>
	)
}
