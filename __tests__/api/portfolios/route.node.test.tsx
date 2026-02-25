import { GET } from "@/app/api/portfolios/route";
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

describe("GET /api/portfolios", () => {
  test("正常なレスポンスを返すこと", async () => {
    const mockData = [
      {
        id: 4,
        name: "To You Design(ポートフォリオサイト)2",
        date: "2023-11-30",
        tag: ["React", "Next.js", "Ruby"],
        topImg: "/images/portfolio/portfolio_top3.png",
        front_url: "https://to-you-design.vercel.app/",
        front_github: "https://github.com/takoyan33/nextjs-portfolio",
        back_github:
          "https://github.com/takoyan33/next-portfolio-backend-posgre",
        color: "portfolio__tag--color4",
        about:
          "<p>自分についての経歴や経験を振り返るために、ポートフォリオサイトとして、Next.jsとRuby on Railsで制作しました。</p>",
        aboutImg: "/images/portfolio/portfolio_about3.png",
        function:
          "<p>内容としては</p><ul><li>経歴、職歴紹介</li><li>ポートフォリオ紹介</li><li>ブログ表示</li><li>プロフィール画面</li></ul><p>があります</p>",
        functionImg: "/images/portfolio/portfolio_function3.png",
        appeal:
          "<p>意識した点は、1つはCSS設計を意識して、綺麗にコーディングしている点です。レスポンシブを意識した実装をしました。<br>2つ目は、App Routerで実装し、読み込みを早めるため、Server Componentを利用しながら実装している点です。<br>3つ目にRuby on RailsでバックエンドのAPIを作っており、そこからデータを取得している点です。</p>",
        appealImg: "/images/portfolio/portfolio_appeal3.png",
        front_skill: ["React", "Next.js", "SCSS", "Biome"],
        back_skill: ["Ruby on Rails", "Ruby"],
        infra_skill: ["Vercel", "Render"],
        time: "2ヶ月",
        prev_title: "Manga Study",
        prev_article_id: "2",
        next_title: "サークル管理App",
        next_article_id: "4",
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
      `${process.env.BACKEND_API_URL}api/v1/portfolios`
    );
  });

  // test("APIエラー時に適切なエラーレスポンスを返すこと", async () => {
  //   mockFetch.mockRejectedValueOnce(new Error("API request failed"))

  //   const response = await GET()
  //   const data = await response.json()

  //   expect(response.status).toBe(500)
  //   expect(data).toEqual({ error: "Failed to fetch data" })
  // })
});
