import fs from 'fs'

const makeDir = (path: string) => {
  try {
    fs.mkdirSync(path)
  } catch {}
}

export default makeDir
