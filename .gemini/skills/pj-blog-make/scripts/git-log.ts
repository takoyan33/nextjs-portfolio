import { execSync } from "child_process"

const log = execSync(`git log --since="3 months ago" --pretty=format:"%h|%ad|%s" --date=short`, {
  encoding: "utf-8",
})

const commits = log
  .split("\n")
  .map((line) => {
    const [hash, date, message] = line.split("|")
    return { hash, date, message }
  })
  .filter((c) => /feat|fix|refactor|ai|frontend/i.test(c.message))

console.log(JSON.stringify(commits, null, 2))
