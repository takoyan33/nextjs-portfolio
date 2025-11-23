import "@testing-library/jest-dom/vitest"
import { afterAll, afterEach, beforeAll, vi } from "vitest"
import { server } from "./__tests__/mocks/server"

// server-only のモック
vi.mock("server-only", () => ({}))

if (process.env.VITEST_BROWSER === "true") {
  // MSWサーバーの設定
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
}

// IntersectionObserver のモック
class IntersectionObserverMock {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
