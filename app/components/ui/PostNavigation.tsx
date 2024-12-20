import Link from "next/link"
import type React from "react"

interface PostNavigationProps {
	next_title?: string
	next_article_id?: string
	prev_title?: string
	prev_article_id?: string
}

export const PostNavigation = ({
	next_title,
	next_article_id,
	prev_title,
	prev_article_id,
}: PostNavigationProps) => {
	return (
		<div className="PostNavigation max_width">
			<div className="PostNavigation__item">
				{prev_title && (
					<Link href={`/portfolios/${prev_article_id}`}>
						<p>
							<span>＜　</span>
							{prev_title}
						</p>
					</Link>
				)}
			</div>

			<div className="PostNavigation__item">
				{next_title && (
					<Link href={`/portfolios/${next_article_id}`}>
						<p>
							{next_title}
							<span>　＞</span>
						</p>
					</Link>
				)}
			</div>
		</div>
	)
}
