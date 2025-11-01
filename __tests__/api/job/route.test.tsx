import { afterEach, beforeAll, describe, expect, test, vi } from "vitest"
import { GET } from "../../../app/api/jobs/route"

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

describe("GET /api/jobs", () => {
  test("正常なレスポンスを返すこと", async () => {
    const mockData = [
      {
        id: "1",
        title: "フロントエンドエンジニア",
        date: "2023-01-01",
        body: "React/Next.jsを使用したWebアプリケーション開発に従事",
      },
      {
        id: "2",
        title: "フルスタックエンジニア",
        date: "2023-06-01",
        body: "フロントエンドとバックエンドの両方を担当し、システム全体の設計・開発を実施",
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
    expect(mockFetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/jobs`)
  })

  test("APIエラー時に適切なエラーレスポンスを返すこと", async () => {
    mockFetch.mockRejectedValueOnce(new Error("API request failed"))

    const response = await GET()
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data).toEqual({ error: "Failed to fetch data" })
  })
})
