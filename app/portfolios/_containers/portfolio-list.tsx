"use client"

import type React from "react"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { fetchPortfoliosFront } from "../../../hooks/fetch"
import type { PortfolioType } from "../../../types"
import PortfolioItem from "../../components/ui/portfolio-item"

/**
 * ポートフォリオ一覧
 */
export const PortfolioList = () => {
  const { data, error, isLoading } = useSWR("portfolios", fetchPortfoliosFront)
  const [portfolios, setPortfolios] = useState<PortfolioType[]>([])

  // SWRでデータ取得後、stateにセット
  useEffect(() => {
    if (data) {
      setPortfolios(data.data)
    }
  }, [data])

  if (isLoading) {
    return <div className="portfolio__loading">読み込み中...</div>
  }
  if (error) {
    return <div className="portfolio__loading">エラーが発生しました</div>
  }
  if (!data || !data.data) {
    return <div className="portfolio__loading">データがありません</div>
  }

  /** ポートフォリオの絞り込み */
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const sortedData = [...(data.data as PortfolioType[])] // APIデータを元にソート

    if (value === "new-order") {
      sortedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (value === "old-order") {
      sortedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    setPortfolios(sortedData)
  }

  return (
    <div className="max_width">
      <h2 className="lower__subTitle">
        全ての制作物
        <span className="lower__subTitle-span">{portfolios.length}件</span>
      </h2>
      <div className="portfolio__filter">
        <label className="selectBox">
          <select name="orders" id="order-select" onChange={handleSortChange}>
            <option value="" disabled selected>
              並び替え
            </option>
            <option value="new-order">新しい順</option>
            <option value="old-order">古い順</option>
          </select>
        </label>
      </div>
      <div className="portfolio__List">
        {portfolios.map((portfolio: PortfolioType) => (
          <PortfolioItem
            key={portfolio.id + portfolio.name}
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
