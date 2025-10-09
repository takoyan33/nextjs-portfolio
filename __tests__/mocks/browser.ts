import { setupWorker } from "msw/browser"
import { handlers } from "./browser-handlers"

export const worker = setupWorker(...handlers)
