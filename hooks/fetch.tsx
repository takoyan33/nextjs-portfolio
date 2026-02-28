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
  ResponseSkillDetail,
  ResponseSkills,
} from "../types"
import { CACHE_OPTIONS } from "../utils/data"

/**
 * 経歴の取得
 * @return {ResponseHistory}
 */
export const fetchHistories = async (): Promise<ResponseHistory> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/histories`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch histories: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch histories: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定の経歴の取得
 * @param id 経歴のid
 * @return {ResponseHistory}
 */
export const fetchHistory = async (id: string): Promise<ResponseHistoryDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/histories/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch history ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch history ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * 職歴の取得
 * @return {ResponseJob}
 */
export const fetchJobs = async (): Promise<ResponseJob> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch jobs: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch jobs: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定の職歴の取得
 * @param id 職歴のid
 * @return {ResponseJob}
 */
export const fetchJob = async (id: string): Promise<ResponseJobDetail> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs/${id}`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch job ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch job ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * 資格の取得
 * @return {ResponseLicense}
 */
export const fetchLicenses = async (): Promise<ResponseLicense> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/licenses`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch licenses: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch licenses: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定の資格の取得
 * @param id 資格のid
 * @return {ResponseJob}
 */
export const fetchLicense = async (id: string): Promise<ResponseLicenseDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/licenses/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch license ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch license ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * フロントエンドのポートフォリオの取得
 * @returns {ResponsePortfolios}
 */
export const fetchPortfoliosFront = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch portfolios (front): ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch portfolios: ${response.status}`)
  }

  return await response.json()
}

/**
 * ポートフォリオの取得
 * @return {ResponsePortfolios}
 */
export const fetchPortfolios = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.BACKEND_API_URL}api/v1/portfolios`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch portfolios (backend): ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch portfolios from backend: ${response.status}`)
  }

  return await response.json()
}

/**
 * 特定のポートフォリオの取得
 * @param id ポートフォリオの記事id
 * @return {ResponsePortfolio}
 */
export const fetchPortfolio = async (id: string | string[]): Promise<ResponsePortfolio> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/portfolios/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch portfolio ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch portfolio ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * フロントスキルの取得
 * @return {ResponseSkills}
 */
export const fetchFrontSkills = async (): Promise<ResponseSkills> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/front`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch front skills: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch front skills: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定のフロントスキルの取得
 * @param id フロントスキルのid
 * @return {ResponseSkillDetail}
 */
export const fetchFrontSkill = async (id: string): Promise<ResponseSkillDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/skills/front/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch front skill ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch front skill ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * バックエンドスキルの取得
 * @return {ResponseSkills}
 */
export const fetchBackSkills = async (): Promise<ResponseSkills> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/back`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch back skills: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch back skills: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定のバックエンドスキルの取得
 * @param id バックエンドスキルのid
 * @return {ResponseSkillDetail}
 */
export const fetchBackSkill = async (id: string): Promise<ResponseSkillDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/skills/back/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch back skill ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch back skill ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * バックエンドスキルの取得
 * @return {ResponseSkills}
 */
export const fetchInfraSkills = async (): Promise<ResponseSkills> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/infra`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch infra skills: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch infra skills: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定のインフラスキルの取得
 * @param id インフラスキルのid
 * @return {ResponseSkillDetail}
 */
export const fetchInfraSkill = async (id: string): Promise<ResponseSkillDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/skills/infra/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch infra skill ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch infra skill ${id}: ${response.status}`)
  }

  return response.json()
}

/**
 * インフラスキルの取得
 * @return {ResponseSkills}
 */
export const fetchOtherSkills = async (): Promise<ResponseSkills> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/other`, CACHE_OPTIONS)

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch other skills: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch other skills: ${response.status}`)
  }

  return response.json()
}

/**
 * 特定のその他スキルの取得
 * @param id その他スキルのid
 * @return {ResponseSkillDetail}
 */
export const fetchOtherSkill = async (id: string): Promise<ResponseSkillDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/skills/other/${id}`,
    CACHE_OPTIONS,
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Failed to fetch other skill ${id}: ${response.status} - ${errorText}`)
    throw new Error(`Failed to fetch other skill ${id}: ${response.status}`)
  }

  return response.json()
}
