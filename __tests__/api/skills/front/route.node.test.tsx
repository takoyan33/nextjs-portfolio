import { GET } from "@/app/api/skills/front/route";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";

// 環境変数のモック
const mockEnv = {
  BACKEND_API_URL: "http://localhost:3000/",
};

// fetchのモック
const mockFetch = vi.fn();

beforeAll(() => {
  process.env.BACKEND_API_URL = mockEnv.BACKEND_API_URL;
  global.fetch = mockFetch;
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("GET /api/skills/front", () => {
  test("正常なレスポンスを返すこと", async () => {
    const mockData = [
      {
        id: 1,
        name: "HTML",
        rank: "★★★★",
        tag: "経験年数：3年",
        about:
          "ホームページ制作などで長年利用。セマンティックなマークアップを意識している。",
        icon: "/images/skill/html5.svg",
      },
    ];

    // fetch をモック化
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.BACKEND_API_URL}api/v1/front_skills`
    );
  });

  test("APIエラー時に適切なエラーレスポンスを返すこと", async () => {
    mockFetch.mockRejectedValueOnce(new Error("API request failed"));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Failed to fetch data" });
  });
});
