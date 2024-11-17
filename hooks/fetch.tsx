export const fetchHistories = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/histories`,
	)
	const data = await response.json()
	return data
}

export const fetchJobs = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`)
	const data = await response.json()
	return data
}

export const fetchLicenses = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/licenses`)
	const data = await response.json()
	return data
}

export const fetchPortfolios = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`,
	)
	const data = await response.json()
	return data
}

export const fetchFrontSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/front`,
	)
	const data = await response.json()
	return data
}

export const fetchBackSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/back`,
	)
	const data = await response.json()
	return data
}

export const fetchInfraSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/infra`,
	)
	const data = await response.json()
	return data
}

export const fetchOtherSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/other`,
	)
	const data = await response.json()
	return data
}
