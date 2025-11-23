import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { HomeSkills } from "../../app/(home)/_containers/home-skills"
import {
  fetchBackSkills,
  fetchFrontSkills,
  fetchInfraSkills,
  fetchOtherSkills,
} from "../../hooks/fetch"

// hooks の fetch をモック
vi.mock("hooks/fetch", () => ({
  fetchFrontSkills: vi.fn(),
  fetchBackSkills: vi.fn(),
  fetchInfraSkills: vi.fn(),
  fetchOtherSkills: vi.fn(),
}))

describe("HomeSkills コンポーネント", () => {
  test("正常系: スキルが描画される", async () => {
    vi.mocked(fetchFrontSkills).mockResolvedValueOnce({
      status: "SUCCESS",
      data: [{ id: 1, name: "HTML", rank: "A", icon: "", about: "", tag: "aaa" }],
    })
    vi.mocked(fetchBackSkills).mockResolvedValueOnce({
      status: "SUCCESS",
      data: [{ id: 1, name: "PHP", rank: "B", icon: "", about: "", tag: "bbb" }],
    })
    vi.mocked(fetchInfraSkills).mockResolvedValueOnce({
      status: "SUCCESS",
      data: [{ id: 1, name: "AWS", rank: "B", icon: "", about: "", tag: "ccc" }],
    })
    vi.mocked(fetchOtherSkills).mockResolvedValueOnce({
      status: "SUCCESS",
      data: [{ id: 1, name: "Figma", rank: "C", icon: "", about: "", tag: "ddd" }],
    })

    const ui = await HomeSkills()
    render(ui)

    expect(await screen.findByText("HTML")).toBeVisible()
    expect(await screen.findByText("PHP")).toBeVisible()
    expect(await screen.findByText("AWS")).toBeVisible()
    expect(await screen.findByText("Figma")).toBeVisible()
  })

  test("空データ: スキルが存在しない場合は描画されない", async () => {
    vi.mocked(fetchFrontSkills).mockResolvedValueOnce({ status: 404, data: [] })
    vi.mocked(fetchBackSkills).mockResolvedValueOnce({ status: 404, data: [] })
    vi.mocked(fetchInfraSkills).mockResolvedValueOnce({ status: 404, data: [] })
    vi.mocked(fetchOtherSkills).mockResolvedValueOnce({ status: 404, data: [] })

    const ui = await HomeSkills()
    render(ui)

    expect(screen.queryByText("HTML")).toBeNull()
    expect(screen.queryByText("PHP")).toBeNull()
    expect(screen.queryByText("AWS")).toBeNull()
    expect(screen.queryByText("Figma")).toBeNull()
  })

  test("異常系: fetchが例外を投げる場合は呼び出し側でエラーになる", async () => {
    vi.mocked(fetchFrontSkills).mockRejectedValueOnce(new Error("fetch failed"))
    // 他は成功しておく
    vi.mocked(fetchBackSkills).mockResolvedValueOnce({ status: "SUCCESS", data: [] })
    vi.mocked(fetchInfraSkills).mockResolvedValueOnce({ status: "SUCCESS", data: [] })
    vi.mocked(fetchOtherSkills).mockResolvedValueOnce({ status: "SUCCESS", data: [] })

    await expect(HomeSkills()).rejects.toThrow("fetch failed")
  })
})
