import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"
import { GET } from "../../../app/api/histories/route"

// 環境変数のモック
const mockEnv = {
	NEXT_PUBLIC_BACKEND_API_URL: "http://localhost:3000/",
}

// fetchのモック
const mockFetch = vi.fn()

beforeAll(() => {
	// 環境変数のモック
	process.env.NEXT_PUBLIC_BACKEND_API_URL = mockEnv.NEXT_PUBLIC_BACKEND_API_URL
	// fetchのモック
	global.fetch = mockFetch
})

afterEach(() => {
	vi.clearAllMocks()
})

describe("GET /api/histories", () => {
	it("正常なレスポンスを返すこと", async () => {
		// モックデータ
		const mockData = [
			{ id: 1, title: "テスト履歴1" },
			{ id: 2, title: "テスト履歴2" },
		]

		// fetchのモック実装
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

	it("APIエラー時に適切なエラーレスポンスを返すこと", async () => {
		// fetchのモック実装（エラーケース）
		mockFetch.mockRejectedValueOnce(new Error("API request failed"))

		const response = await GET()
		const data = await response.json()

		expect(response.status).toBe(500)
		expect(data).toEqual({ error: "Failed to fetch data" })
	})
})
