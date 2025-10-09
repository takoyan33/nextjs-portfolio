import { setupServer } from "msw/node"
import { handlers } from "./browser-handlers"

export const server = setupServer(...handlers)
