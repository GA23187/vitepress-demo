import path from 'path'
import { readdirSync, statSync, writeFileSync } from 'fs'

/**
 * 判断是否为markdown文件
 *
 * @param   {string}  fileName  文件名
 *
 * @return  {[boolean]}         有返回值则表示是markdown文件,否则不是
 */
function isMarkdownFile(fileName: string) {
  return fileName.match(/.+\.md$/)
}

interface SideBarItem {
  text: string
  collapsible?: boolean
  collapsed?: boolean
  items?: SideBarItem[]
  link?: string
}
function getSideBarItemTreeData(
  dirFullPath: string,
  level: number,
  maxLevel: number,
  ignoreFileName: string,
  ignoreDirNames: string[]
): SideBarItem[] {
  // 获取所有文件名和目录名
  const allDirAndFileNameArr = readdirSync(dirFullPath)
  const result: SideBarItem[] = []
  allDirAndFileNameArr.map((fileOrDirName: string, idx: number) => {
    const fileOrDirFullPath = path.join(dirFullPath, fileOrDirName)
    const stats = statSync(fileOrDirFullPath)
    if (stats.isDirectory()) {
      if (!ignoreDirNames.includes(fileOrDirName)) {
        // 当前为文件夹
        const dirData: SideBarItem = {
          text: fileOrDirName,
          collapsed: false,
        }
        if (level !== maxLevel) {
          dirData.items = getSideBarItemTreeData(
            fileOrDirFullPath,
            level + 1,
            maxLevel,
            ignoreFileName,
            ignoreDirNames
          )
        }
        if (dirData.items) {
          dirData.collapsible = true
        }
        result.push(dirData)
      }
    } else if (
      isMarkdownFile(fileOrDirName) &&
      ignoreFileName !== fileOrDirName
    ) {
      // 当前为文件
      const matchResult = fileOrDirName.match(/(.+)\.md/)
      const text = matchResult ? matchResult[1] : fileOrDirName
      const fileData: SideBarItem = {
        text,
        link: fileOrDirFullPath
          .split('docs')[1]
          .replace('.md', '')
          .replace(/\\/g, '/'),
      }
      result.push(fileData)
    }
  })
  return result
}

interface SidebarGenerateConfig {
  /**
   * 需要遍历的目录. 默认:articles
   */
  dirName?: string
  /**
   * 忽略的文件名. 默认: index.md
   */
  ignoreFileName?: string
  /**
   * 忽略的文件夹名称. 默认: ['demo','asserts']
   */
  ignoreDirNames?: string[]
}
export function getSidebarData(
  sidebarGenerateConfig: SidebarGenerateConfig = {}
) {
  const {
    dirName = 'articles',
    ignoreFileName = 'index.md',
    ignoreDirNames = ['demo', 'asserts'],
  } = sidebarGenerateConfig
  // 获取目录的绝对路径
  const dirFullPath = path.resolve(__dirname, `../docs/${dirName}`)
  console.log(dirFullPath, 'dirFullPath', dirName)

  const allDirAndFileNameArr = readdirSync(dirFullPath)
  console.log(allDirAndFileNameArr, 'allDirAndFileNameArr')

  // const obj: any = {}
  const resultArr: any = []
  allDirAndFileNameArr.map((dirName) => {
    let subDirFullName = path.join(dirFullPath, dirName)
    const property = subDirFullName.split('docs')[1].replace(/\\/g, '/') + '/'

    const stats = statSync(subDirFullName)
    if (stats.isDirectory()) {
      const arr = getSideBarItemTreeData(
        subDirFullName,
        1,
        2,
        ignoreFileName,
        ignoreDirNames
      )
      // obj[property] = arr
      resultArr.push({
        text: property,
        items: arr,
      })
    } else {
      // obj[property] = [
      //   {
      //     text: 'JavaScript 基础强化',
      //     link: subDirFullName
      //       .split('docs')[1]
      //       .replace('.md', '')
      //       .replace(/\\/g, '/'),
      //   },
      // ]
      resultArr.push({
        text: 'JavaScript 基础强化',
        link: subDirFullName
          .split('docs')[1]
          .replace('.md', '')
          .replace(/\\/g, '/'),
      })
    }
  })
  // console.log('sidebarData')
  console.log(resultArr)
  writeFileSync('test.json', JSON.stringify(resultArr))
  return resultArr
}
