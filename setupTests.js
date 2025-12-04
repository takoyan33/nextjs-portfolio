import "@testing-library/jest-dom/vitest"
import React from "react"
import { afterAll, afterEach, beforeAll, vi } from "vitest"
import { server } from "./mocks/server"

// server-only のモック
vi.mock("server-only", () => ({}))

// MSWサーバーの設定
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// IntersectionObserver のモック
class IntersectionObserverMock {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// eslint-disable-next-line no-undef
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})

// next/navigation のモック
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    query: {},
  })),
  usePathname: vi.fn(() => "/"),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}))

// next/image のモック
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props) => React.createElement("img", { ...props, priority: undefined }),
}))
