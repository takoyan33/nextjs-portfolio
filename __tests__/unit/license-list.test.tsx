import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { LicenseList } from "../../app/_components/ui/rsc/license-list"
import { fetchLicenses } from "../../hooks/fetch.tsx"

// ✅ fetchLicensesをモック
vi.mock("hooks/fetch", () => ({
  fetchLicenses: vi.fn(),
}))

describe("LicenseList", () => {
  test("正常系: 資格一覧が表示される", async () => {
    // モックデータ
    vi.mocked(fetchLicenses).mockResolvedValueOnce({
      status: "SUCCESS",
      data: [
        { id: 1, date: "2023-01-01", title: "AWS認定デベロッパー" },
        { id: 2, date: "2023-02-01", title: "AWS認定SysOpsアドミニストレーター" },
      ],
    })

    // 非同期Server Componentをawaitで取得
    const ui = await LicenseList()
    render(ui)

    expect(await screen.findByText("AWS認定デベロッパー")).toBeVisible()
    expect(await screen.findByText("AWS認定SysOpsアドミニストレーター")).toBeVisible()
  })

  test("異常系: データが空の場合は資格が表示されない", async () => {
    // 空データを返すモック
    vi.mocked(fetchLicenses).mockResolvedValueOnce({
      status: 404,
      data: undefined,
    })

    const ui = await LicenseList()
    render(ui)

    expect(screen.queryByText("AWS認定デベロッパー")).toBeNull()
    expect(screen.queryByText("AWS認定SysOpsアドミニストレーター")).toBeNull()
    expect(await screen.findByText("データはありません")).toBeVisible()
    //screen.debug()
  })

  test("異常系: fetchLicensesがエラーを投げた場合", async () => {
    vi.mocked(fetchLicenses).mockRejectedValueOnce(new Error("fetch failed"))

    // 例外処理がない場合は try-catch で捕まえる
    await expect(LicenseList()).rejects.toThrow("fetch failed")
  })
})
