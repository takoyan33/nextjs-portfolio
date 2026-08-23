import { pickRandomArticles } from "@/utils/zenn"
import { describe, expect, it } from "vitest"

describe("pickRandomArticles", () => {
  it("指定件数以下の場合は全件返す", () => {
    const articles = [{ id: 1 }, { id: 2 }]
    expect(pickRandomArticles(articles, 4)).toEqual(articles)
  })

  it("指定件数分を返す", () => {
    const articles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    const result = pickRandomArticles(articles, 3)
    expect(result).toHaveLength(3)
    expect(result.every((item) => articles.includes(item))).toBe(true)
  })

  it("元の配列を変更しない", () => {
    const articles = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const original = [...articles]
    pickRandomArticles(articles, 2)
    expect(articles).toEqual(original)
  })
})
