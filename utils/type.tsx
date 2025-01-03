export type history = {
	id: number
	title: string
	date: string
	body: string
}

export type ResponseHistory = {
	status: string
	data: history[]
}

export type job = {
	id: number
	title: string
	date: string
	body: string
}

export type ResponseJob = {
	status: string
	data: job[]
}

export type license = {
	id: number
	date: string
	title: string
}

export type ResponseLicense = {
	status: string
	data: license[]
}

export type skill = {
	id: number
	name: string
	rank: string
	tag: string
	about: string
	icon: string
}

export type ResponseSkill = {
	status: string
	data: skill[]
}

export type portfolioType = {
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

export type ResponsePortfolios = {
	status: string
	data: portfolioType[]
}

export type ResponsePortfolio = {
	status: string
	data: portfolioType
}

export type zenn = {
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

export type zennProps = {
	articles: zenn[]
}

// メニューアイテムの型定義
export type MenuItem = {
	id: number
	title: string
	link: string
}
