import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { JobTimeline } from "../../components/ui/rsc/job-timeline"
import { fetchJobs } from "../../hooks/fetch.tsx"

// ✅ fetchJobsをモック
vi.mock("hooks/fetch", () => ({
  fetchJobs: vi.fn(),
}))

describe("JobTimeline", () => {
  test("正常系: JobTimelineが表示されるか", async () => {
    // モックデータ
    vi.mocked(fetchJobs).mockResolvedValueOnce({
      status: "SUCCESS",
      data: [
        {
          id: 1,
          title: "フロントエンドエンジニア",
          date: "2023-01-01",
          body: "React/Next.jsを使用したWebアプリケーション開発に従事",
        },
        {
          id: 2,
          title: "フルスタックエンジニア",
          date: "2023-06-01",
          body: "フロントエンドとバックエンドの両方を担当し、システム全体の設計・開発を実施",
        },
      ],
    })

    const ui = await JobTimeline()
    render(ui)

    expect(await screen.findByText("フロントエンドエンジニア")).toBeVisible()
    expect(await screen.findByText("フルスタックエンジニア")).toBeVisible()

    //screen.debug()
  })

  test("異常系: データが空の場合は職歴が表示されない", async () => {
    // 空データを返すモック
    vi.mocked(fetchJobs).mockResolvedValueOnce({
      status: 404,
      data: undefined,
    })

    const ui = await JobTimeline()
    render(ui)

    //screen.debug()

    expect(screen.queryByText("フロントエンドエンジニア")).toBeNull()
    expect(screen.queryByText("フルスタックエンジニア")).toBeNull()
    //expect(await screen.findByText("データはありません")).toBeVisible()
    //screen.debug()
  })
})

test("異常系: fetchLicensesがエラーを投げた場合", async () => {
  vi.mocked(fetchJobs).mockRejectedValueOnce(new Error("fetch failed"))

  // 例外処理がない場合は try-catch で捕まえる
  await expect(JobTimeline()).rejects.toThrow("fetch failed")
})
