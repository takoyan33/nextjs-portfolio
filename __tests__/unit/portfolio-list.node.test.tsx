import type { PortfolioType } from "@/app/types"
import { PortfolioList } from "@/app/portfolios/_containers/portfolio-list"
import "@testing-library/jest-dom/vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { beforeEach, describe, expect, test, vi } from "vitest"

const portfolios: PortfolioType[] = [
  {
    id: 1,
    name: "古い制作物",
    date: "2023-01-01",
    topImg: "/images/portfolio1.png",
    tag: ["説明1"],
    front_url: "https://example.com/old",
    front_github: "https://github.com/example/old-front",
    color: "#000000",
    about: "old about",
    aboutImg: "/images/about-old.png",
    function: "old function",
    functionImg: "/images/function-old.png",
    appeal: "old appeal",
    appealImg: "/images/appeal-old.png",
    front_skill: ["React"],
    time: "1 week",
  },
  {
    id: 2,
    name: "新しい制作物",
    date: "2024-01-01",
    topImg: "/images/portfolio2.png",
    tag: ["説明2"],
    front_url: "https://example.com/new",
    front_github: "https://github.com/example/new-front",
    color: "#111111",
    about: "new about",
    aboutImg: "/images/about-new.png",
    function: "new function",
    functionImg: "/images/function-new.png",
    appeal: "new appeal",
    appealImg: "/images/appeal-new.png",
    front_skill: ["Next.js"],
    time: "2 weeks",
  },
]

vi.mock("next/navigation")

const mockedUseRouter = vi.mocked(useRouter)
const mockedUsePathname = vi.mocked(usePathname)
const mockedUseSearchParams = vi.mocked(useSearchParams)

const createSearchParams = (search = "") =>
  new URLSearchParams(search) as unknown as ReturnType<typeof useSearchParams>

const renderPortfolioList = (search = "") => {
  mockedUsePathname.mockReturnValue("/portfolios")
  mockedUseSearchParams.mockReturnValue(createSearchParams(search))

  const replace = vi.fn()
  const push = vi.fn()

  mockedUseRouter.mockReturnValue({
    push,
    replace,
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  } as ReturnType<typeof useRouter>)

  render(<PortfolioList portfolios={portfolios} />)

  return { replace, push }
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe("PortfolioList", () => {
  test("portfolioList表示される", () => {
    renderPortfolioList()

    expect(screen.getByText("全ての制作物")).toBeVisible()
    expect(screen.getByText("古い制作物")).toBeVisible()
    expect(screen.getByText("新しい制作物")).toBeVisible()
  })

  test("order=new のクエリで新しい順に並ぶ", async () => {
    renderPortfolioList("order=new")

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toHaveValue("new")
    })

    const titles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent)
    expect(titles).toEqual(["新しい制作物", "古い制作物"])
  })

  test("order=old のクエリで古い順に並ぶ", async () => {
    renderPortfolioList("order=old")

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toHaveValue("old")
    })

    const titles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent)
    expect(titles).toEqual(["古い制作物", "新しい制作物"])
  })

  test("絞り込みの変更で表示順が変わる", async () => {
    const user = userEvent.setup()
    const { replace } = renderPortfolioList()

    await user.selectOptions(screen.getByRole("combobox"), "new")

    await waitFor(() => {
      const titles = screen
        .getAllByRole("heading", { level: 3 })
        .map((heading) => heading.textContent)
      expect(titles).toEqual(["新しい制作物", "古い制作物"])
    })
    expect(replace).toHaveBeenCalledWith("/portfolios?order=new")
  })

  test("絞り込みを戻すとクエリが消える", async () => {
    const user = userEvent.setup()
    const { replace } = renderPortfolioList("order=new")

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toHaveValue("new")
    })

    await user.selectOptions(screen.getByRole("combobox"), "")

    expect(replace).toHaveBeenCalledWith("/portfolios?")
  })
})
