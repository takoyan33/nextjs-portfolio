import type { Zenn } from "@/types"
import { logger } from "@/utils/logger"
import { siteConfig } from "@/utils/site"

const ZENN_USERNAME = siteConfig.links.zenn.split("/").pop() ?? "643866"
export const ZENN_API_URL = `https://zenn.dev/api/articles?username=${ZENN_USERNAME}`

/**
 * Zennの記事一覧を取得し、新しい順にソートして返す
 */
export const fetchZennArticles = async (options?: { cache?: RequestCache }): Promise<Zenn[]> => {
  try {
    logger.info("Fetching Zenn articles")
    const response = await fetch(
      ZENN_API_URL,
      options?.cache === "no-store"
        ? { cache: "no-store" }
        : { next: { revalidate: 60 * 60 * 24 * 30 } },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch Zenn articles: ${response.status}`)
    }

    const data = (await response.json()) as { articles: Zenn[] }
    const articles = data.articles ?? []

    return articles.toSorted(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    )
  } catch (err) {
    logger.error(err, "Failed to fetch Zenn articles")
    return []
  }
}

/**
 * 配列からランダムに指定件数を取得する（Fisher-Yatesシャッフル）
 */
export const pickRandomArticles = <T>(articles: T[], count: number): T[] => {
  if (articles.length <= count) {
    return [...articles]
  }

  const shuffled = [...articles]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, count)
}
