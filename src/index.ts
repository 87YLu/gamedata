import fs from 'fs'
import inquirer from 'inquirer'
import ProgressBar from 'progress'
import { join as pathJoin } from 'path'
import { outputPath, saveLocation } from './constant'
import { makeDir, testFileName, getTime, zipDir, deleteFolder } from './utils'

;(async () => {
  const { games } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'games',
      message: 'Select the game that needs to be backed up',
      choices: Object.keys(saveLocation),
      pageSize: Infinity,
    },
  ])

  makeDir(outputPath)

  const bar = new ProgressBar(':bar :percent', { total: games.length, width: 20 })

  games.forEach((game: string) => {
    const { path, files } = saveLocation[game]
    const dataPath = pathJoin(...path)

    try {
      const gameFiles = fs.readdirSync(dataPath)

      const gamePath = pathJoin(outputPath, game)
      const resPath = pathJoin(gamePath, getTime())

      makeDir(gamePath)
      makeDir(resPath)

      gameFiles.forEach(gameFile => {
        if (testFileName(files, gameFile)) {
          const from = pathJoin(dataPath, gameFile)
          const to = pathJoin(resPath, gameFile)
          fs.writeFileSync(to, fs.readFileSync(from))
        }
      })

      zipDir(resPath, `${resPath}.zip`).then(() => {
        deleteFolder(resPath)
        bar.tick()
      })
    } catch {
      console.log(`${game}存档路径读取错误`)
    }
  })
})()
