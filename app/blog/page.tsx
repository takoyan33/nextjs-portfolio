import type { Metadata } from "next"
import type { ZennProps } from "../../types"
import { PATH } from "../../utils/path"
import { Breadcrumb, LowerTitle } from "../components/ui/"
import ZennArticleItem from "./_containers/zenn-article-item"
import ZennAsideArticleItem from "./_containers/zenn-aside-article-item"

export const metadata: Metadata = {
	title: "To You Design - Blog",
	description: "Generated by Next.js",
}

const Blog = async () => {
	let zennArticles: ZennProps | null = null

	try {
		const response = await fetch(
			"https://zenn.dev/api/articles?username=643866",
		)
		zennArticles = await response.json()
	} catch (err) {
		console.error(err)
	}

	zennArticles?.articles.sort((a, b) => {
		return (
			new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
		)
	})

	return (
		<main>
			<div className="max_width">
				<Breadcrumb name="Blog" link={PATH.BLOG} />
			</div>
			<LowerTitle title="Blog" enTitle="ブログ" />
			<div className="blog__layout max_width">
				<div>
					<h2 className="lower__subTitle">
						Zenn
						<span className="lower__subTitle-span">
							{zennArticles?.articles.length}件
						</span>
					</h2>
					<div className="blog__List">
						{zennArticles?.articles.map((article) => (
							<ZennArticleItem
								key={article.id}
								zenn_id={article.id}
								zenn_title={article.title}
								zenn_published_at={article.published_at}
								zenn_article_type={article.article_type}
								zenn_emoji={article.emoji}
								zenn_path={article.path}
							/>
						))}
					</div>
				</div>
				<div className="blog__aside">
					<h2>おすすめ記事</h2>
					<div className="blog__aside__List">
						{zennArticles?.articles.slice(0, 4).map((article) => (
							<ZennAsideArticleItem
								key={article.id}
								zenn_id={article.id}
								zenn_title={article.title}
								zenn_published_at={article.published_at}
								zenn_article_type={article.article_type}
								zenn_emoji={article.emoji}
								zenn_path={article.path}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Blog
