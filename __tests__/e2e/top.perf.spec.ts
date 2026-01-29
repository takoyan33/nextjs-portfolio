import { expect, test } from "@playwright/test"

/**
 * トップページの表示パフォーマンス計測用テスト
 *
 * - Navigation Timing API を使って、初回ロードの各種タイミングを取得
 * - PerformanceObserver で LCP を観測
 *
 * 目安:
 * - domContentLoaded: 2,000ms 未満
 * - loadEventEnd: 3,000ms 未満
 * - LCP: 2,500ms 未満
 */
test.describe("トップページ パフォーマンス計測", () => {
  test("Navigation Timing と LCP がしきい値内であること", async ({ page }) => {
    // LCP 計測スクリプトを事前に注入
    await page.addInitScript(() => {
      // window に LCP 計測用の変数をセット
      ;(window as any).__lcpTime = null

      try {
        const po = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          if (lastEntry && typeof lastEntry.startTime === "number") {
            ;(window as any).__lcpTime = lastEntry.startTime
          }
        })
        po.observe({ type: "largest-contentful-paint", buffered: true })
      } catch {
        // PerformanceObserver が使えない環境では何もしない
      }
    })

    const response = await page.goto("http://localhost:3001/", {
      waitUntil: "load",
    })

    expect(response?.ok()).toBeTruthy()

    // Navigation Timing を取得
    const timing = await page.evaluate(() => {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
      const nav = navEntries[0]

      if (!nav) {
        return null
      }

      return {
        domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime,
        loadEventEnd: nav.loadEventEnd - nav.startTime,
      }
    })

    expect(timing).not.toBeNull()

    const domContentLoaded = timing!.domContentLoaded
    const loadEventEnd = timing!.loadEventEnd

    // 目安のしきい値（必要に応じて調整）
    const MAX_DOM_CONTENT_LOADED = 2000 // ms
    const MAX_LOAD_EVENT_END = 3000 // ms

    // 基本的な SLA チェック
    expect(domContentLoaded).toBeLessThanOrEqual(MAX_DOM_CONTENT_LOADED)
    expect(loadEventEnd).toBeLessThanOrEqual(MAX_LOAD_EVENT_END)

    // LCP を取得
    const lcpTime = await page.evaluate(() => (window as any).__lcpTime as number | null)

    // LCP が取れた場合のみ閾値チェック（取れない環境もあるため）
    if (lcpTime != null) {
      const MAX_LCP = 2500 // ms
      expect(lcpTime).toBeLessThanOrEqual(MAX_LCP)
      // テスト出力で数値がわかるように log
      console.log(`[perf] LCP: ${lcpTime.toFixed(0)} ms`)
    } else {
      console.warn("[perf] LCP が取得できませんでした")
    }

    console.log(
      `[perf] domContentLoaded=${domContentLoaded.toFixed(
        0,
      )}ms, loadEventEnd=${loadEventEnd.toFixed(0)}ms`,
    )
  })
})
