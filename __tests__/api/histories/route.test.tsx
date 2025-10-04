import { afterEach, beforeAll, describe, expect, test, vi } from "vitest"
import { GET } from "../../../app/api/histories/route"

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

describe("GET /api/histories", () => {
  test("正常なレスポンスを返すこと", async () => {
    const mockData = [
      {
        id: "1",
        title: "大学卒業",
        date: "2020-03-01",
        body: "情報工学専攻でコンピュータサイエンスの基礎を学ぶ",
      },
      {
        id: "2",
        title: "IT企業入社",
        date: "2020-04-01",
        body: "新卒としてWeb開発会社に入社し、エンジニアとしてのキャリアをスタート",
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
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/histories`,
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
