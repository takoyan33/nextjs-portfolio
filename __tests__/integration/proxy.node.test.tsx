import { proxy } from "@/proxy"
import { get } from "@vercel/edge-config"
import { NextRequest } from "next/server"
import { afterEach, beforeEach, expect, test, vitest } from "vitest"

// @vercel/edge-config をモック
vitest.mock("@vercel/edge-config", () => ({
  get: vitest.fn(),
}))

beforeEach(() => {
  // proxy 側の `process.env.EDGE_CONFIG` ガードを通すため
  vitest.stubEnv("EDGE_CONFIG", "https://edge-config.vercel.com/ecfg_test?token=test")
  // デフォルトはメンテナンスOFF
  vitest.mocked(get).mockResolvedValue(false)
})

afterEach(() => {
  vitest.unstubAllEnvs()
  vitest.resetAllMocks()
})

test("未ログインで /admin/dashboard にアクセスすると /admin にリダイレクトされる", async () => {
  const request = new NextRequest("http://localhost:3001/admin/dashboard", {
    headers: { cookie: "" },
  })

  const response = await proxy(request)

  expect(response.status).toBe(307)
  expect(response.headers.get("location")).toBe("http://localhost:3001/admin")
})

test("ログイン済みで /admin/dashboard にアクセスすると /admin/dashboard にアクセスできる", async () => {
  const request = new NextRequest("http://localhost:3001/admin/dashboard", {
    headers: { cookie: "auth_token=xxx" },
  })

  const response = await proxy(request)

  expect(response.status).toBe(200)
})

test("メンテナンスONの場合、/maintenanceにアクセスされる", async () => {
  vitest.mocked(get).mockResolvedValue(true)

  const request = new NextRequest("http://localhost:3001/", {
    headers: { cookie: "" },
  })

  const response = await proxy(request)

  expect(response.status).toBe(200)
  // rewrite のときは x-middleware-rewrite が付与される
  expect(response.headers.get("x-middleware-rewrite")).toContain("/maintenance")
})

test("EDGE_CONFIG が未設定の場合は、メンテナンスOFFとして通常どおり動作する", async () => {
  vitest.unstubAllEnvs()
  vitest.stubEnv("EDGE_CONFIG", "")

  const request = new NextRequest("http://localhost:3001/", {
    headers: { cookie: "" },
  })

  const response = await proxy(request)

  expect(get).not.toHaveBeenCalled()
  expect(response.status).toBe(200)
  expect(response.headers.get("x-middleware-rewrite")).toBeNull()
})

test("Edge Config の取得に失敗しても、メンテナンスOFFとして通常どおり動作する", async () => {
  vitest.spyOn(console, "error").mockImplementation(() => {})
  vitest.mocked(get).mockRejectedValue(new Error("connection failed"))

  const request = new NextRequest("http://localhost:3001/", {
    headers: { cookie: "" },
  })

  const response = await proxy(request)

  expect(response.status).toBe(200)
  expect(response.headers.get("x-middleware-rewrite")).toBeNull()
})
