import fs from "fs"

const content = process.argv[2]

fs.writeFileSync("../../ai-output/ai-blog.md", content)

console.log("✅ saved: ai-output/ai-blog.md")
