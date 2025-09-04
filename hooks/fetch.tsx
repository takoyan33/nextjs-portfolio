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
 * 職歴の取得
 * @return {ResponseJob}
 */
export const fetchJobs = async (): Promise<ResponseJob> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`)
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
 * フロントエンドのポートフォリオの取得
 * @return {fetchPortfoliosFront}
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
 * バックエンドスキルの取得
 * @return {ResponseSkill}
 */
export const fetchBackSkills = async (): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/back`)
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
 * インフラスキルの取得
 * @return {ResponseSkill}
 */
export const fetchOtherSkills = async (): Promise<ResponseSkill> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skills/other`)
  return response.json()
}
