import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { PostNavigation } from "../../components/ui/post-navigation"

describe("PostNavigationの表示とリンク", () => {
  test("正常系: 前後の記事タイトルとリンクが表示される", () => {
    render(
      <PostNavigation
        next_title="次の記事"
        next_article_id="2"
        prev_title="前の記事"
        prev_article_id="1"
      />,
    )
    expect(screen.getByText("前の記事")).toBeVisible()
    expect(screen.getByText("次の記事")).toBeVisible()
    expect(screen.getByRole("link", { name: /前の記事/ })).toHaveAttribute("href", "/portfolios/1")
    expect(screen.getByRole("link", { name: /次の記事/ })).toHaveAttribute("href", "/portfolios/2")
  })

  test("正常系: リンクに遷移される", () => async () => {
    render(
      <PostNavigation
        next_title="次の記事"
        next_article_id="2"
        prev_title="前の記事"
        prev_article_id="1"
      />,
    )

    await screen.getByRole("link", { name: /前の記事/ }).click()
    expect(window.location.pathname).toBe("/portfolios/1")
  })

  test("異常系: タイトルが空の場合はリンクが表示されない", () => {
    render(<PostNavigation />)
    expect(screen.queryByRole("link")).toBeNull()
    expect(screen.queryByRole("span")).toBeNull()
  })
})
