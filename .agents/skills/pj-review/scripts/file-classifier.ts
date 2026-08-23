export const classifyFiles = (files: string[]) => {
  return files.map((f) => {
    if (f.includes("/api/")) return { file: f, type: "API" }
    if (f.includes("/components/")) return { file: f, type: "Component" }
    if (f.includes("/app/")) return { file: f, type: "Page" }
    return { file: f, type: "Other" }
  })
}
