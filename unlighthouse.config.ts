import { defineUnlighthouseConfig } from "unlighthouse/config"

const config = defineUnlighthouseConfig({
  cache: false,
  urls: [
    "/",
    "/about",
    "/contact",
    "/portfolios",
    "/portfolios/1",
    "/blog",
    "/privacy-policy",
    "/admin",
    "/admin/dashboard",
  ],
  hooks: {
    async "puppeteer:before-goto"(page) {
      await page.setExtraHTTPHeaders({
        "x-unlighthouse": "true",
      })
      console.log("Hook: puppeteer:before-goto executing")
      const cookieLocalhost = {
        name: "auth",
        value: "true",
        url: "http://localhost:3001",
        domain: "localhost",
        path: "/",
      }
      const cookieIp = {
        name: "auth",
        value: "true",
        url: "http://localhost:3001",
        domain: "localhost",
        path: "/",
      }
      await page.browserContext().setCookie(cookieLocalhost, cookieIp)
      console.log("Hook: Cookie set via puppeteer")
    },
  },
  cookies: [
    {
      name: "auth",
      value: "true",
      domain: "localhost",
      url: "http://localhost:3001",
      path: "/",
    },
  ],
})

console.log("Loaded Unlighthouse Config:", JSON.stringify(config.cookies, null, 2))

export default config
