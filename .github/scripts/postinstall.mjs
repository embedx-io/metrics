import fs from "fs"
import path from "path"

const linguistBinaryPath = path.resolve("node_modules/linguist-js/node_modules/binary-extensions")
const targetPath = path.resolve("node_modules/binary-extensions")

if (!fs.existsSync(targetPath)) {
  process.exit(0)
}

if (!fs.existsSync(linguistBinaryPath)) {
  try {
    fs.mkdirSync(path.dirname(linguistBinaryPath), {recursive: true})
  } catch {}
  try {
    fs.symlinkSync(targetPath, linguistBinaryPath, "dir")
  } catch {}
}
