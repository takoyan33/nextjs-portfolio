import { afterEach, beforeAll, describe, expect, test, vi } from "vitest"
import { GET } from "../../../app/api/licenses/route"

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

describe("GET /api/licenses", () => {
  test("正常なレスポンスを返すこと", async () => {
    const mockData = [
      { id: "1", date: "2023-01-01", title: "AWS認定ソリューションアーキテクト" },
      { id: "2", date: "2023-02-01", title: "AWS認定デベロッパー" },
      { id: "3", date: "2023-03-01", title: "AWS認定SysOpsアドミニストレーター" },
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
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/licenses`,
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
