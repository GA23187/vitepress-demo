// md文件图片存储本地
// https://juejin.cn/post/7143437194236002318
import fs from 'fs'
import path from 'path'
import https from 'https'
import inquirer from 'inquirer'

let success = 0,
  fail = 0,
  images = 0

/**
 * @description 读取md文件和url解析
 * @returns
 */
const start = () => {
  try {
    // 读取文件内容
    const buff = fs.readFileSync('script/file/test.md')
    console.log('123')
    let str = buff.toString()
    // 找到图片
    let urlList: any = str.match(/(?<=(![image.png]))(.*)/g)
    if (Array.isArray(urlList) && urlList.length > 0) {
      urlList = urlList.filter(
        (url) => url.indexOf('https') > -1 || url.indexOf('http') > -1
      )
    } else {
      console.log('没有找到图片')
      return
    }
    images = urlList.length
    // 批量下载
    urlList.forEach((url: string) => {
      const urlGet = url.slice(1, url.indexOf('#'))
      const name = urlGet.slice(urlGet.lastIndexOf('/') + 1)
      load(urlGet, name)
    })
    // 替换图片路径
    urlList.forEach((url: string) => {
      if (url.indexOf('https') > -1 || url.indexOf('http') > -1) {
        const name = url.slice(url.lastIndexOf('/') + 1, url.indexOf('#'))
        str = str.replace(url, `(images/${name})`)
      }
    })
    fs.writeFileSync('../file/test.new.md', str)
  } catch (e) {
    console.log(e)
    exit()
  }
}

/**
 * @description 文件下载和保存
 * @param {*} url 地址
 * @param {*} name 文件名
 */
function load(url: string, name: string) {
  https.get(url, function (res) {
    let imgData = ''
    res.setEncoding('binary') // 设置response的编码为binary否则会下载下来的图片打不开
    res.on('data', function (chunk) {
      imgData += chunk
    })
    res.on('end', function () {
      if (imgData) {
        console.log('下载成功!', url)
        const path = `../file/images/${name}`
        console.log('文件路径', path)
        fs.writeFileSync(path, imgData, 'binary')
        success += 1
      } else {
        console.log('下载失败！,图片路径不存在！')
        fail += 1
      }
      // 判断是否已经全部下载
      if (images === success + fail) {
        exit()
      }
    })
  })
}

/**
 * @description 退出，这里阻塞直接退出，便于用户直接看到下载成果而不是闪退
 */
async function exit() {
  console.log(`图片总数：${images}，成功：${success}，失败：${fail}`)
  const promptList = [
    {
      type: 'confirm',
      message: '执行完毕，是否退出？',
      name: 'exit',
    },
  ]

  await inquirer.prompt(promptList).then((answers) => {
    console.log('你的answers', answers)

    console.log('退出成功') // 返回的结果
  })
}

setTimeout(() => {
  start()
}, 1000)
