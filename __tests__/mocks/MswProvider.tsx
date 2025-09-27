import { Suspense, type ReactNode } from "react"
import { MswClientProvider } from "./MswClientProvider"

if (process.env.NEXT_RUNTIME === "nodejs") {
  const { server } = await import("./server")
  console.log("🟢 MSW Import server!!!!!!")
  server.listen({ onUnhandledRequest: "warn" })
}

// 使用するProviderコンポーネント
export const MswProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={null}>
      <MswClientProvider>{children}</MswClientProvider>
    </Suspense>
  )
}
