import { atom } from 'recoil'
import { selector } from 'recoil'

export type PortfolioItem = {
  id: number
  name: string
  date: string
  tag: string[]
  topImg: string
  url: string
  github: string
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
//const url = 'http://localhost:3000/'
const url = 'https://nextjs-portfolio-puce.vercel.app/'

export const portfolioDataAtom = atom<PortfolioItem[]>({
  key: 'portfolioData',
  default: [],
})

export const portfolioState = selector<PortfolioItem[]>({
  key: 'portfolioState',
  get: async ({ get }) => {
    const initialData = get(portfolioDataAtom)
    if (initialData.length > 0) {
      // 初期データがあれば返す
      return initialData
    } else {
      // APIから値を取って返す
      const response = await fetch(`${url}api/portfolio`)
      const data = (await response.json()) as PortfolioItem[]
      return data
    }
  },
})
