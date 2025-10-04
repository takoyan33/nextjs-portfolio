import { afterEach, beforeAll, describe, expect, test, vi } from "vitest"
import { GET } from "../../../app/api/portfolios/route"

// 環境変数のモック
const mockEnv = {
  NEXT_PUBLIC_BACKEND_API_URL: "http://localhost:3000/",
}

// fetchのモック
const mockFetch = vi.fn()

beforeAll(() => {
  process.env.NEXT_PUBLIC_BACKEND_API_URL = mockEnv.NEXT_PUBLIC_BACKEND_API_URL
  global.fetch = mockFetch
})

afterEach(() => {
  vi.clearAllMocks()
})

describe("GET /api/portfolios", () => {
  test("正常なレスポンスを返すこと", async () => {
    const mockData = [
      {
        id: 1,
        name: "HTML",
        rank: "★★★★",
        tag: "経験年数：3年",
        about: "ホームページ制作などで長年利用。セマンティックなマークアップを意識している。",
        icon: "/images/skill/html5.svg",
      },
    ]

    // fetch をモック化
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    const response = await GET()
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual(mockData)
    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`,
    )
  })

  test("APIエラー時に適切なエラーレスポンスを返すこと", async () => {
    mockFetch.mockRejectedValueOnce(new Error("API request failed"))

    const response = await GET()
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data).toEqual({ error: "Failed to fetch data" })
  })
})
