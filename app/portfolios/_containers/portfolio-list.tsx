"use client"

import type { PortfolioType } from "@/app/types"
import { LowerSubTitle } from "@/components/ui/lower-sub-title"
import PortfolioItem from "@/components/ui/portfolio-item"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type SortOrder = "new" | "old" | ""

type Props = {
  portfolios: PortfolioType[]
}

/** 並び替えは純粋関数 */
const sortPortfolios = (portfolios: PortfolioType[], order: SortOrder): PortfolioType[] => {
  const sorted = [...portfolios]

  if (order === "new") {
    return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  if (order === "old") {
    return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  return portfolios
}

export const PortfolioList = ({ portfolios }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 🔽 URL から初期値を取得
  const [order, setOrder] = useState<SortOrder>("")

  useEffect(() => {
    const orderParam = searchParams.get("order") as SortOrder | null
    if (orderParam === "new" || orderParam === "old") {
      setOrder(orderParam)
    }
  }, [searchParams])

  /** select変更時にURL更新 */
  const handleChange = (value: SortOrder) => {
    setOrder(value)

    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("order", value)
    } else {
      params.delete("order")
    }

    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname)
  }

  const sortedPortfolios = sortPortfolios(portfolios, order)

  if (!portfolios || portfolios.length === 0) {
    return (
      <div className="max_width">
        <h2 className="lower__subTitle">全ての制作物</h2>
        <p className="portfolio__loading">制作物がありません</p>
      </div>
    )
  }

  return (
    <div className="max_width">
      <LowerSubTitle title="全ての制作物" count={sortedPortfolios.length} />

      <div className="portfolio__filter">
        <label className="selectBox">
          <select value={order} onChange={(e) => handleChange(e.target.value as SortOrder)}>
            <option value="">並び替え</option>
            <option value="new">新しい順</option>
            <option value="old">古い順</option>
          </select>
        </label>
      </div>

      <div className="portfolio__List">
        {sortedPortfolios.map((portfolio) => (
          <PortfolioItem
            key={portfolio.id}
            portfolio_id={portfolio.id}
            portfolio_name={portfolio.name}
            portfolio_date={portfolio.date}
            portfolio_tag={portfolio.tag}
            portfolio_topImg={portfolio.topImg}
          />
        ))}
      </div>
    </div>
  )
}
