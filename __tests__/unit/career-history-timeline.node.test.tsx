import { CareerHistoryTimeline } from "@/components/ui/rsc/career-history-timeline"
import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, test, vi } from "vitest"

const mockHistories = [
  { id: "h1", title: "大学卒業", date: "2018-03-01", body: "卒業しました" },
  { id: "h2", title: "IT企業入社", date: "2018-04-01", body: "入社しました" },
]

describe("CareerHistoryTimeline コンポーネント", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("正常系: 経歴が表示される", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: mockHistories }),
    } as unknown as Response)

    const ui = await CareerHistoryTimeline()
    render(ui)

    expect(await screen.findByText("大学卒業")).toBeVisible()
    expect(await screen.findByText("IT企業入社")).toBeVisible()
  })

  test("空データ: data が undefined の場合は何も描画されない", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: undefined }),
    } as unknown as Response)

    const ui = await CareerHistoryTimeline()
    render(ui)

    expect(screen.queryByText("大学卒業")).toBeNull()
    expect(screen.queryByText("IT企業入社")).toBeNull()
  })

  test("異常系: fetch がエラーを投げると呼び出し側で例外になる", async () => {
    vi.spyOn(global, "fetch").mockRejectedValueOnce(new Error("network error"))

    await expect(CareerHistoryTimeline()).rejects.toThrow("network error")
  })
})
