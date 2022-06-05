import fs from 'fs'

const deleteFolder = (filePath: string) => {
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath)

    files.forEach(file => {
      const nextFilePath = `${filePath}/${file}`
      const states = fs.statSync(nextFilePath)

      if (states.isDirectory()) {
        deleteFolder(nextFilePath)
      } else {
        fs.unlinkSync(nextFilePath)
      }
    })

    fs.rmdirSync(filePath)
  }
}

export default deleteFolder
