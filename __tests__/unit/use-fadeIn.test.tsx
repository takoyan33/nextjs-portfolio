import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import ScrollComponent from "../../hooks/use-fadeIn"

// Mock IntersectionObserver
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb
  }
  observe = (el: Element) => {
    // simulate intersecting
    this.callback([{ isIntersecting: true, target: el } as IntersectionObserverEntry], this)
  }
  disconnect = () => {}
}

;(global as any).IntersectionObserver = MockIntersectionObserver

describe("use-fadeIn ScrollComponent", () => {
  test("子要素をラップして表示される", () => {
    render(
      <ScrollComponent>
        <div>Test Content</div>
      </ScrollComponent>,
    )
    expect(screen.getByText("Test Content")).toBeVisible()
  })

  test("要素がIntersectingするとis-visibleクラスが付与される", () => {
    const { container } = render(
      <ScrollComponent>
        <div data-testid="item">Item</div>
      </ScrollComponent>,
    )
    const wrapper = container.querySelector(".fade-in")
    expect(wrapper).toBeTruthy()
    expect(wrapper?.classList.contains("is-visible")).toBe(true)
  })
})
