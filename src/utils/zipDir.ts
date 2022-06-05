import fs from 'fs'
import path from 'path'
import JSZIP from 'jszip'

const readDir = (zip: JSZIP, currentPath: string) => {
  const files = fs.readdirSync(currentPath)

  files.forEach(fileName => {
    const filePath = path.join(currentPath, fileName)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      readDir(zip.folder(fileName)!, filePath)
    } else {
      zip.file(fileName, fs.readFileSync(filePath))
    }
  })
}

const zipDir = (dirPath: string, outputPath: string): Promise<null> =>
  new Promise((resolve, reject) => {
    const zip = new JSZIP()

    readDir(zip, dirPath)

    zip
      .generateAsync({
        type: 'nodebuffer',
        compression: 'STORE',
        compressionOptions: {
          level: 9,
        },
      })
      .then(content => {
        fs.writeFileSync(outputPath, content)
        resolve(null)
      })
      .catch(err => {
        reject(err)
      })
  })

export default zipDir
