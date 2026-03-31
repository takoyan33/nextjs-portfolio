import { execSync } from "child_process"

export const getDiff = () => {
  return execSync("git diff --staged", { encoding: "utf-8" })
}
