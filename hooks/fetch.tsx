export const fetchHistories = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/histories`,
	)
	return response.json()
}

export const fetchJobs = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`)
	return response.json()
}

export const fetchLicenses = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/licenses`)
	return response.json()
}

export const fetchPortfolios = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`,
	)
	return response.json()
}

export const fetchFrontSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/front`,
	)
	return response.json()
}

export const fetchBackSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/back`,
	)
	return response.json()
}

export const fetchInfraSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/infra`,
	)
	return response.json()
}

export const fetchOtherSkills = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/skills/other`,
	)
	return response.json()
}
