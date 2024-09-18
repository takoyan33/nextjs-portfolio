export type history = {
  title: string
  date: string
  body: string
}

export type historyProps = {
  history: history[]
}

export type job = {
  title: string
  date: string
  body: string
}

export type jobProps = {
  job: job[]
}

export type license = {
  date: string
  title: string
}

export type licenseProps = {
  license: license[]
}

export type skill = {
  name: string
  rank: string
  tag: string
  about: string
  icon: string
}

export type skillProps = {
  skill: skill[]
}

export type Portfolio = {
  id: number
  name: string
  date: string
  tag: string[]
  topImg: string
  front_url: string
  back_url: string
  front_github: string
  back_github: string
  color: string
  about: string
  aboutImg: string
  function: string
  functionImg: string
  appeal: string
  appealImg: string
  front_skill: string[]
  back_skill: string[]
  infra_skill: string[]
  time: string
}

export type PortfolioProps = {
  portfolio: Portfolio[]
}
