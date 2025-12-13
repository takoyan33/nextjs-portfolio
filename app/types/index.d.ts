// 共通のベース型
type BaseResponse<T> = {
  status: string
  data: T
}

// 共通のタイムライン項目型
type BaseTimelineItem = {
  id: number
  title: string
  date: string
}

// 履歴
export type History = BaseTimelineItem & {
  body: string
}

export type ResponseHistory = BaseResponse<History[]>

// 職歴
export type Job = BaseTimelineItem & {
  body: string
}

export type ResponseJob = BaseResponse<Job[]>

// 資格
export type License = Omit<BaseTimelineItem, "body">

export type ResponseLicense = BaseResponse<License[]>

// スキル
export type Skill = {
  id: number
  name: string
  rank: string
  tag: string
  about: string
  icon: string
}

export type ResponseSkill = BaseResponse<Skill[]>

// ポートフォリオ
export type PortfolioType = {
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

export type ResponsePortfolios = BaseResponse<PortfolioType[]>
export type ResponsePortfolio = BaseResponse<PortfolioType>

// Zenn
export type ZennUser = {
  id: number
  username: string
  name: string
  avatar_small_url: string
}

export type Zenn = {
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
  source_repo_updated_at: string | null
  pinned: boolean
  path: string
  user: ZennUser
  publication: null
}

export type ZennProps = {
  articles: Zenn[]
}

// メニューアイテム
export type MenuItem = {
  id: number
  title: string
  link: string
}
