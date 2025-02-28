// 共通のベース型
type BaseResponse<T> = {
	readonly status: string
	readonly data: T
}

// 共通のタイムライン項目型
type BaseTimelineItem = {
	readonly id: number
	readonly title: string
	readonly date: string
}

// 履歴
export type History = BaseTimelineItem & {
	readonly body: string
}

export type ResponseHistory = BaseResponse<readonly History[]>

// 職歴
export type Job = BaseTimelineItem & {
	readonly body: string
}

export type ResponseJob = BaseResponse<readonly Job[]>

// 資格
export type License = Omit<BaseTimelineItem, "body">

export type ResponseLicense = BaseResponse<readonly License[]>

// スキル
export type Skill = {
	readonly id: number
	readonly name: string
	readonly rank: string
	readonly tag: string
	readonly about: string
	readonly icon: string
}

export type ResponseSkill = BaseResponse<readonly Skill[]>

// ポートフォリオ
export type PortfolioType = {
	readonly id: number
	readonly name: string
	readonly date: string
	readonly tag: readonly string[]
	readonly topImg: string
	readonly front_url: string
	readonly back_url?: string
	readonly front_github: string
	readonly back_github?: string
	readonly color: string
	readonly about: string
	readonly aboutImg: string
	readonly function: string
	readonly functionImg: string
	readonly appeal: string
	readonly appealImg: string
	readonly front_skill: readonly string[]
	readonly back_skill?: readonly string[]
	readonly infra_skill?: readonly string[]
	readonly time: string
	readonly prev_title?: string
	readonly prev_article_id?: string
	readonly next_title?: string
	readonly next_article_id?: string
}

export type ResponsePortfolios = BaseResponse<readonly PortfolioType[]>
export type ResponsePortfolio = BaseResponse<PortfolioType>

// Zenn
export type ZennUser = {
	readonly id: number
	readonly username: string
	readonly name: string
	readonly avatar_small_url: string
}

export type Zenn = {
	readonly id: number
	readonly post_type: "Article"
	readonly title: string
	readonly slug: string
	readonly comments_count: number
	readonly liked_count: number
	readonly body_letters_count: number
	readonly article_type: "tech"
	readonly emoji: string
	readonly is_suspending_private: boolean
	readonly published_at: Date
	readonly body_updated_at: string
	readonly source_repo_updated_at: string | null
	readonly pinned: boolean
	readonly path: string
	readonly user: ZennUser
	readonly publication: null
}

export type ZennProps = {
	readonly articles: readonly Zenn[]
}

// メニューアイテム
export type MenuItem = {
	readonly id: number
	readonly title: string
	readonly link: string
}
