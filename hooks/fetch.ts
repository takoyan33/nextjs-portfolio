"use server"
import "server-only"

import type {
  ResponseHistory,
  ResponseHistoryDetail,
  ResponseJob,
  ResponseJobDetail,
  ResponseLicense,
  ResponseLicenseDetail,
  ResponsePortfolio,
  ResponsePortfolios,
  ResponseProfiles,
  ResponseSkillDetail,
  ResponseSkills,
} from "../types"

import { fetcher } from "./fetcher"

/**
 * 経歴一覧取得
 */
export const fetchHistories = async () => fetcher<ResponseHistory>("api/histories")

/**
 * 経歴詳細取得
 */
export const fetchHistory = async (id: string) =>
  fetcher<ResponseHistoryDetail>(`api/histories/${id}`)

/**
 * 職歴一覧取得
 */
export const fetchJobs = async () => fetcher<ResponseJob>("api/jobs")

/**
 * 職歴詳細取得
 */
export const fetchJob = async (id: string) => fetcher<ResponseJobDetail>(`api/jobs/${id}`)

/**
 * 資格一覧取得
 */
export const fetchLicenses = async () => fetcher<ResponseLicense>("api/licenses")

/**
 * 資格詳細取得
 */
export const fetchLicense = async (id: string) =>
  fetcher<ResponseLicenseDetail>(`api/licenses/${id}`)

/**
 * ポートフォリオ一覧取得
 */
export const fetchPortfolios = async () => fetcher<ResponsePortfolios>("api/portfolios")

/**
 * フロント用ポートフォリオ一覧取得
 * 必要なければ削除OK
 */
export const fetchPortfoliosFront = async () => fetcher<ResponsePortfolios>("api/portfolios")

/**
 * ポートフォリオ詳細取得
 */
export const fetchPortfolio = async (id: string | string[]) =>
  fetcher<ResponsePortfolio>(`api/portfolios/${id}`)

/**
 * フロントスキル一覧取得
 */
export const fetchFrontSkills = async () => fetcher<ResponseSkills>("api/skills/front")

/**
 * フロントスキル詳細取得
 */
export const fetchFrontSkill = async (id: string) =>
  fetcher<ResponseSkillDetail>(`api/skills/front/${id}`)

/**
 * バックスキル一覧取得
 */
export const fetchBackSkills = async () => fetcher<ResponseSkills>("api/skills/back")

/**
 * バックスキル詳細取得
 */
export const fetchBackSkill = async (id: string) =>
  fetcher<ResponseSkillDetail>(`api/skills/back/${id}`)

/**
 * インフラスキル一覧取得
 */
export const fetchInfraSkills = async () => fetcher<ResponseSkills>("api/skills/infra")

/**
 * インフラスキル詳細取得
 */
export const fetchInfraSkill = async (id: string) =>
  fetcher<ResponseSkillDetail>(`api/skills/infra/${id}`)

/**
 * その他スキル一覧取得
 */
export const fetchOtherSkills = async () => fetcher<ResponseSkills>("api/skills/other")

/**
 * その他スキル詳細取得
 */
export const fetchOtherSkill = async (id: string) =>
  fetcher<ResponseSkillDetail>(`api/skills/other/${id}`)

/**
 * プロフィール取得
 */
export const fetchProfile = async () => fetcher<ResponseProfiles>("api/profiles")
