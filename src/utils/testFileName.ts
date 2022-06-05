const testFileName = (files: RegExp | Array<RegExp>, fileName: string) => {
  if (Array.isArray(files)) {
    let res = false

    files.forEach(item => {
      res = item.test(fileName) || res
    })

    return res
  }

  return files.test(fileName)
}

export default testFileName
