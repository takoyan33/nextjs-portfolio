type NewRelicAgent = {
  collector?: { isConnected?: () => boolean }
  once: (event: "started" | "errored", listener: () => void) => void
  removeListener: (event: "started" | "errored", listener: () => void) => void
}

type NewRelicModule = {
  default?: { agent?: NewRelicAgent }
}

export const loadNewRelicAgent = async () => {
  const { default: newrelic } = (await import("newrelic")) as unknown as NewRelicModule
  const agent = newrelic?.agent

  if (!agent || agent.collector?.isConnected?.()) {
    return
  }

  // Wait briefly for the agent to connect so the first request is traced.
  await new Promise<void>((resolve) => {
    const done = () => {
      clearTimeout(timer)
      agent.removeListener("started", done)
      agent.removeListener("errored", done)
      resolve()
    }
    const timer = setTimeout(done, 8_000)

    agent.once("started", done)
    agent.once("errored", done)
  })
}
