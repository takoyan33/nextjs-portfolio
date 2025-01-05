// import "server-only"
import type {
	ResponseHistory,
	ResponseJob,
	ResponseLicense,
	ResponsePortfolio,
	ResponsePortfolios,
	ResponseSkill,
} from "../utils/type"

export const fetchHistories = async (): Promise<ResponseHistory> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/histories`,
	)
	return response.json()
}

export const fetchJobs = async (): Promise<ResponseJob> => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`)
	return response.json()
}

export const fetchLicenses = async (): Promise<ResponseLicense> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/licenses`,
	)
	return response.json()
}

export const fetchPortfoliosFront = async (): Promise<ResponsePortfolios> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`,
	)
	return await response.json()
}

export const fetchPortfolios = async (): Promise<ResponsePortfolios> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`,
	)
	return await response.json()
}

export const fetchPortfolio = async (
	id: string | string[],
): Promise<ResponsePortfolio> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/portfolios/${id}`,
	)
	return response.json()
}

export const fetchFrontSkills = async (): Promise<ResponseSkill> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/front`,
	)
	return response.json()
}

export const fetchBackSkills = async (): Promise<ResponseSkill> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/back`,
	)
	return response.json()
}

export const fetchInfraSkills = async (): Promise<ResponseSkill> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/infra`,
	)
	return response.json()
}

export const fetchOtherSkills = async (): Promise<ResponseSkill> => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/other`,
	)
	return response.json()
}
