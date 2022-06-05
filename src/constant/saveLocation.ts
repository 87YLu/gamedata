const user = '87YLu'

interface saveLoactionType {
  [key: string]: {
    path: Array<string>
    files: RegExp | Array<RegExp>
  }
}

const saveLocation: saveLoactionType = {
  空洞骑士: {
    path: ['C:', 'Users', user, 'AppData', 'LocalLow', 'Team Cherry', 'Hollow Knight'],
    files: /user.*?/,
  },
  死亡细胞: {
    path: ['C:', 'Program Files (x86)', 'Steam', 'steamapps', 'common', 'Dead Cells', 'save'],
    files: /user.*?/,
  },
  蔚蓝: {
    path: ['C:', 'Program Files (x86)', 'Steam', 'steamapps', 'common', 'Celeste', 'Saves'],
    files: /.*?/,
  },
  精灵与黑暗森林: {
    path: ['C:', 'Users', user, 'AppData', 'Local', 'Ori and the Blind Forest'],
    files: /.*?/,
  },
  精灵与萤火意志: {
    path: ['C:', 'Users', user, 'AppData', 'Local', 'Ori and the Will of The Wisps'],
    files: /.*?/,
  },
  哈迪斯: {
    path: ['C:', 'Users', user, 'Documents', 'Saved Games', 'Hades'],
    files: /.*?sav.*?/,
  },
  逆转裁判123成步堂精选集: {
    path: ['C:', 'Program Files (x86)', 'Steam', 'userdata', '1102759938', '787480', 'remote'],
    files: /systemdata/,
  },
  心跳文学部plus: {
    path: ['C:', 'Users', user, 'AppData', 'LocalLow', 'Team Salvato', 'Doki Doki Literature Club Plus'],
    files: /save.*?/,
  },
  东方夜雀食堂: {
    path: ['C:', 'Users', user, 'AppData', 'LocalLow', 'Epicomic', 'Touhou Mystia Izakaya', 'Memory', 'Save', 'BetaV9'],
    files: /memory$/,
  },
}

export default saveLocation
