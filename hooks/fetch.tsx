"use server"
import "server-only"
import type {
  ResponseHistory,
  ResponseJob,
  ResponseLicense,
  ResponsePortfolio,
  ResponsePortfolios,
  ResponseSkill,
} from "../types"

/**
 * 経歴の取得
 * @return {ResponseHistory}
 */
export const fetchHistories = async (): Promise<ResponseHistory> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/histories`)
  return response.json()
}

/**
 * 特定の経歴の取得
 * @param id 経歴のid
 * @return {ResponseHistory}
 */
export const fetchHistory = async (id: string): Promise<ResponseHistory> => {
  console.log("fetchHistory", id)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/histories/${id}`)
  console.log(response)
  return response.json()
}

/**
 * 職歴の取得
 * @return {ResponseJob}
 */
export const fetchJobs = async (): Promise<ResponseJob> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`)
  return response.json()
}

/**
 * 特定の職歴の取得
 * @param id 職歴のid
 * @return {ResponseJob}
 */
export const fetchJob = async (id: string): Promise<ResponseJob> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs/${id}`)
  return response.json()
}

/**
 * 資格の取得
 * @return {ResponseLicense}
 */
export const fetchLicenses = async (): Promise<ResponseLicense> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/licenses`)
  return response.json()
}

/**
 * 特定の資格の取得
 * @param id 資格のid
 * @return {ResponseJob}
 */
export const fetchLicense = async (id: string): Promise<ResponseLicense> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/licenses/${id}`)
  return response.json()
}

/**
 * フロントエンドのポートフォリオの取得
 * @returns {ResponsePortfolios}
 */
export const fetchPortfoliosFront = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`)
  return await response.json()
}

/**
 * ポートフォリオの取得
 * @return {ResponsePortfolios}
 */
export const fetchPortfolios = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`)
  return await response.json()
}

/**
 * 特定のポートフォリオの取得
 * @param id ポートフォリオの記事id
 * @return {ResponsePortfolio}
 */
export const fetchPortfolio = async (id: string | string[]): Promise<ResponsePortfolio> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolios/${id}`)
  return response.json()
}

/**
 * フロントスキルの取得
 * @return {ResponseSkill}
 */
export const fetchFrontSkills = async (): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/front`)
  return response.json()
}

/**
 * 特定のフロントスキルの取得
 * @param id フロントスキルのid
 * @return {ResponseSkill}
 */
export const fetchFrontSkill = async (id: string): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/front/${id}`)
  return response.json()
}

/**
 * バックエンドスキルの取得
 * @return {ResponseSkill}
 */
export const fetchBackSkills = async (): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/back`)
  return response.json()
}

/**
 * 特定のバックエンドスキルの取得
 * @param id バックエンドスキルのid
 * @return {ResponseSkill}
 */
export const fetchBackSkill = async (id: string): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/back/${id}`)
  return response.json()
}

/**
 * バックエンドスキルの取得
 * @return {ResponseSkill}
 */
export const fetchInfraSkills = async (): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/infra`)
  return response.json()
}

/**
 * 特定のインフラスキルの取得
 * @param id インフラスキルのid
 * @return {ResponseSkill}
 */
export const fetchInfraSkill = async (id: string): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/infra/${id}`)
  return response.json()
}

/**
 * インフラスキルの取得
 * @return {ResponseSkill}
 */
export const fetchOtherSkills = async (): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/other`)
  return response.json()
}

/**
 * 特定のその他スキルの取得
 * @param id その他スキルのid
 * @return {ResponseSkill}
 */
export const fetchOtherSkill = async (id: string): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/other/${id}`)
  return response.json()
}
