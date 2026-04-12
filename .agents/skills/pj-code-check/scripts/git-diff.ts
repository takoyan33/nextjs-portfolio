import { execSync } from "child_process"

export const getDiff = () => {
  return execSync("git diff main...HEAD", { encoding: "utf-8" })
}
