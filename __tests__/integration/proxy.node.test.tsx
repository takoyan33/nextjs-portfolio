import { proxy } from "@/proxy"
import { get } from "@vercel/edge-config"
import { NextRequest } from "next/server"
import { expect, test, vitest } from "vitest"

//@vercel/edge-configをモック
vitest.mock("@vercel/edge-config", () => ({
  get: vitest.fn(),
}))

test("未ログインで /admin/dashboard にアクセスすると /admin にリダイレクトされる", async () => {
  const request = new NextRequest("http://localhost:3001/admin/dashboard", {
    headers: {
      cookie: "",
    },
  })

  const response = await proxy(request)

  expect(response.status).toBe(307)
  expect(response.headers.get("location")).toBe("http://localhost:3001/admin")
})

test("ログイン済みで /admin/dashboard にアクセスすると /admin/dashboard にアクセスできる", async () => {
  const request = new NextRequest("http://localhost:3001/admin/dashboard", {
    headers: {
      cookie: "auth=true",
    },
  })

  const response = await proxy(request)

  expect(response.status).toBe(200)
})

test("メンテナンスONの場合、/maintenanceにアクセスされる", async () => {
  // await get("isMaintenance") をモック
  vitest.mocked(get).mockResolvedValue(true)

  const request = new NextRequest("http://localhost:3001/", {
    headers: {
      cookie: "",
    },
  })

  const response = await proxy(request)

  expect(response.status).toBe(200)
  // リダイレクトの際にx-middleware-rewriteが付与される
  expect(response.headers.get("x-middleware-rewrite")).toContain("/maintenance")
})
