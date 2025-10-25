import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe } from "node:test"
import useSWR, { SWRResponse } from "swr"
import { expect, test, vi, vitest } from "vitest"
import { PortfolioList } from "../../app/portfolios/_containers/portfolio-list.tsx"

// useSWRをモック
vi.mock("swr")

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

describe("正常系", () => {
  test("portfolioList表示される", () => {
    // モックの戻り値を設定
    vi.mocked(useSWR).mockReturnValue({
      data: {
        data: [
          {
            id: 1,
            name: "ポートフォリオ1",
            date: "2023-01-01",
            topImg: "/images/portfolio1.png",
            tag: ["説明1"],
          },
          {
            id: 2,
            name: "ポートフォリオ2",
            date: "2023-02-01",
            topImg: "/images/portfolio2.png",
            tag: ["説明2"],
          },
        ],
      },
      error: undefined,
      isLoading: false,
    } as any)

    render(<PortfolioList />)
    //screen.debug()
    expect(screen.getByText("全ての制作物")).toBeVisible()
    expect(screen.getByText("ポートフォリオ1")).toBeVisible()
    expect(screen.getByText("ポートフォリオ2")).toBeVisible()
  })

  test("portfolioList 読み込み中", () => {
    // モックの戻り値を設定
    type SWRData = { data: undefined }
    type SWRError = Error

    const mockErrorResponse: SWRResponse<SWRData, SWRError> = {
      data: undefined,
      error: undefined,
      isLoading: true,
      mutate: vi.fn(),
      isValidating: false,
    }

    // ✅ 型を合わせてキャスト（useSWRがunknownを返すため）
    vi.mocked(useSWR<unknown, unknown>).mockReturnValue(
      mockErrorResponse as unknown as SWRResponse<unknown, unknown>,
    )

    render(<PortfolioList />)

    expect(screen.getByText("読み込み中...")).toBeVisible()
  })
  test("portfolioList 記事がない場合", () => {
    // モックの戻り値を設定
    // ✅ useSWR の型を明示的に合わせる
    type SWRData = { data: undefined }
    type SWRError = Error

    const mockErrorResponse: SWRResponse<SWRData, SWRError> = {
      data: undefined,
      error: undefined,
      isLoading: false,
      mutate: vi.fn(),
      isValidating: false,
    }

    // ✅ 型を合わせてキャスト（useSWRがunknownを返すため）
    vi.mocked(useSWR<unknown, unknown>).mockReturnValue(
      mockErrorResponse as unknown as SWRResponse<unknown, unknown>,
    )

    render(<PortfolioList />)

    expect(screen.getByText("記事がありません")).toBeVisible()
  })
})

describe("異常系", () => {
  test("portfolioList表示されない", () => {
    // ✅ useSWR の型を明示的に合わせる
    type SWRData = { data: undefined }
    type SWRError = Error

    const mockErrorResponse: SWRResponse<SWRData, SWRError> = {
      data: undefined,
      error: new Error("fetch failed"),
      isLoading: false,
      mutate: vi.fn(),
      isValidating: false,
    }

    // ✅ 型を合わせてキャスト（useSWRがunknownを返すため）
    vi.mocked(useSWR<unknown, unknown>).mockReturnValue(
      mockErrorResponse as unknown as SWRResponse<unknown, unknown>,
    )

    render(<PortfolioList />)

    expect(screen.getByText("エラーが発生しました")).toBeVisible()
  })
})
