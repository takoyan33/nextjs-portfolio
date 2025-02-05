export interface history {
	id: number
	title: string
	date: string
	body: string
}

export interface ResponseHistory {
	status: string
	data: history[]
}

export interface job {
	id: number
	title: string
	date: string
	body: string
}

export interface ResponseJob {
	status: string
	data: job[]
}

export interface license {
	id: number
	date: string
	title: string
}

export interface ResponseLicense {
	status: string
	data: license[]
}

export interface skill {
	id: number
	name: string
	rank: string
	tag: string
	about: string
	icon: string
}

export interface ResponseSkill {
	status: string
	data: skill[]
}

export interface portfolioType {
	id: number
	name: string
	date: string
	tag: string[]
	topImg: string
	front_url: string
	back_url?: string
	front_github: string
	back_github?: string
	color: string
	about: string
	aboutImg: string
	function: string
	functionImg: string
	appeal: string
	appealImg: string
	front_skill: string[]
	back_skill?: string[]
	infra_skill?: string[]
	time: string
	prev_title?: string
	prev_article_id?: string
	next_title?: string
	next_article_id?: string
}

export interface ResponsePortfolios {
	status: string
	data: portfolioType[]
}

export interface ResponsePortfolio {
	status: string
	data: portfolioType
}

export interface zenn {
	id: number
	post_type: "Article"
	title: string
	slug: string
	comments_count: number
	liked_count: number
	body_letters_count: number
	article_type: "tech"
	emoji: string
	is_suspending_private: boolean
	published_at: Date
	body_updated_at: string
	source_repo_updated_at: null | string
	pinned: boolean
	path: string
	user: {
		id: number
		username: string
		name: string
		avatar_small_url: string
	}
	publication: null
}

export interface zennProps {
	articles: zenn[]
}

// メニューアイテムの型定義
export interface MenuItem {
	id: number
	title: string
	link: string
}
