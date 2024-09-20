export const fetchHistory = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/history`)
  const data = await response.json()
  return data
}

export const fetchJob = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/job`)
  const data = await response.json()
  return data
}

export const fetchLicenses = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/license`)
  const data = await response.json()
  return data
}

export const fetchPortfolios = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolio`)
  const data = await response.json()
  return data
}

export const fetchFrontSkills = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/front`)
  const data = await response.json()
  return data
}

export const fetchBackSkills = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/back`)
  const data = await response.json()
  return data
}

export const fetchInfraSkills = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/infra`)
  const data = await response.json()
  return data
}

export const fetchOtherSkills = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/other`)
  const data = await response.json()
  return data
}
