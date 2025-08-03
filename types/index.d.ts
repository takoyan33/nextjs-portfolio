export interface History {
	id: number
	title: string
	date: string
	body: string
}

export interface ResponseHistory {
	status: string
	data: History[]
}

export interface Job {
	id: number
	title: string
	date: string
	body: string
}

export interface ResponseJob {
	status: string
	data: Job[]
}

export interface License {
	id: number
	date: string
	title: string
}

export interface ResponseLicense {
	status: string
	data: License[]
}

export interface Skill {
	id: number
	name: string
	rank: string
	tag: string
	about: string
	icon: string
}

export interface ResponseSkill {
	status: string
	data: Skill[]
}

export interface PortfolioType {
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
	data: PortfolioType[]
}

export interface ResponsePortfolio {
	status: string
	data: PortfolioType
}

export interface Zenn {
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

export interface ZennProps {
	articles: Zenn[]
}

// メニューアイテムの型定義
export interface MenuItem {
	id: number
	title: string
	link: string
}
