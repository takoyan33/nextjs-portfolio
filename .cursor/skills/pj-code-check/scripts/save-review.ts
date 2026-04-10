// scripts/save-review.ts
import fs from "fs"

const date = new Date().toISOString().split("T")[0]

fs.writeFileSync(`docs/reviews/${date}-code-review.md`, process.argv[2])
