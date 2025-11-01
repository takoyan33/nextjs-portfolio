/**
 * 経歴一覧の型定義
 *
 * @returns id: 経歴ID
 * @returns title: 経歴タイトル
 * @returns date: 経歴取得日
 * @returns body: 経歴内容
 */
export interface History {
  id: number
  title: string
  date: string
  body: string
}

/**
 * 経歴一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: 経歴一覧
 */
export interface ResponseHistory {
  status: "SUCCESS" | 404
  data: History[] | undefined
}

/**
 * 職歴一覧の型定義
 *
 * @returns id: 職歴ID
 * @returns title: 会社名
 * @returns date: 職歴取得日
 * @returns body: 職歴内容
 */
export interface Job {
  id: number
  title: string
  date: string
  body: string
}

/**
 * 職歴一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: 職歴一覧
 */
export interface ResponseJob {
  status: "SUCCESS" | 404
  data: Job[] | undefined
}

/**
 * 資格一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: 資格取得日
 * @returns title: 資格名
 */
export interface License {
  id: number
  date: string
  title: string
}

/**
 * 資格一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: 資格一覧
 */
export interface ResponseLicense {
  status: "SUCCESS" | 404
  data: License[] | undefined
}

/**
 * スキル一覧の型定義
 *
 * @returns id: スキルID
 * @returns name: スキル名
 * @returns rank: スキルランク
 * @returns tag: スキルタグ
 * @returns about: スキル説明
 * @returns icon: スキルアイコン
 */
export interface Skill {
  id: number
  name: string
  rank: string
  tag: string
  about: string
  icon: string
}

/**
 * スキル一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: スキル一覧
 */
export interface ResponseSkill {
  status: "SUCCESS" | 404
  data: Skill[] | undefined
}

/**
 * ポートフォリオ一覧の型定義
 *
 * @returns id: ポートフォリオID
 * @returns name: ポートフォリオ名
 * @returns date: ポートフォリオ取得日
 * @returns tag: ポートフォリオタグ
 * @returns topImg: ポートフォリオトップ画像
 * @returns front_url: ポートフォリオフロントURL
 * @returns back_url: ポートフォリオバックURL
 * @returns front_github: ポートフォリオフロントGitHub
 * @returns back_github: ポートフォリオバックGitHub
 * @returns color: ポートフォリオカラー
 * @returns about: ポートフォリオ説明
 * @returns aboutImg: ポートフォリオ説明画像
 * @returns function: ポートフォリオ機能
 * @returns functionImg: ポートフォリオ機能画像
 * @returns appeal: ポーport_skill: ポートフォリオフロントスキル
 * @returns back_skill: ポートフォリオバックスキル
 * @returns infra_skill: ポートフォリオインフラスキル
 * @returns time: ポートフォリオ所要時間
 */
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

/**
 * ポートフォリオ一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: ポートフォリオ一覧
 */
export interface ResponsePortfolios {
  status: "SUCCESS" | 404
  data: PortfolioType[]
}

/**
 * ポートフォリオ一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: ポートフォリオ一覧
 */
export interface ResponsePortfolio {
  status: "SUCCESS" | 404
  data: PortfolioType | undefined
}

/**
 * Zenn一覧の型定義
 *
 * @returns status: データ成功かの判定
 * @returns data: Zenn一覧
 * @returns id: ZennID
 * @returns post_type: Zennタイプ
 * @returns title: Zennタイトル
 * @returns slug: Zennスラッグ
 * @returns comments_count: Zennコメント数
 * @returns liked_count: Zennいいね数
 * @returns body_letters_count: Zenn本文文字数
 * @returns article_type: Zenn記事タイプ
 * @returns emoji: Zennエモージュ
 * @returns is_suspending_private: Zenn非公開
 * @returns published_at: Zenn公開日
 * @returns body_updated_at: Zenn本文更新日
 * @returns source_repo_updated_at: Zennソースコード更新日
 * @returns pinned: Zennピン
 * @returns path: Zennパス
 * @returns user: Zennユーザー
 * @returns publication: Zenn出版
 */
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

/**
 * Zenn一覧の型定義
 *
 * @returns articles: Zenn一覧
 */
export interface ZennProps {
  articles: Zenn[]
}

/**
 * メニューアイテムの型定義
 *
 * @returns id: メニューアイテムID
 * @returns title: メニューアイテムタイトル
 * @returns link: メニューアイテムリンク
 */
export interface MenuItem {
  id: number
  title: string
  link: string
}
