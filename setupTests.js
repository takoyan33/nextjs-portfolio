import "@testing-library/jest-dom/vitest"
import { beforeAll, afterEach, afterAll, vi } from "vitest"
import { server } from "./__tests__/mocks/server"

// server-only のモック
vi.mock("server-only", () => ({}))

// MSWサーバーの設定
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
