import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import sidebarHttpProtocol from './sidebarHttpProtocol'
import sidebarFrontSpec from './sidebarFrontSpec'
import sidebarJavascriptDesignModel from './sidebarJavascriptDesignModel'
import sidebarSummary from './sidebarSummary'
import sidebarRoadToReact from './sidebarRoadToReact'
import sidebarAdvancedCoreKnowledage from './sidebarAdvancedCoreKnowledage'
import { getSidebarData } from '../../script/generateSideBar'

console.log(process.env.PULISH_ENV, 'process.env.PULISH_ENV')
// getSidebarData({
//   dirName: 'advanced-core-knowledage-front-end',
// })
export default defineConfig({
  title: 'vitepress-demo',
  description: '一个vitepree-demo....',
  base: process.env.PULISH_ENV === 'production' ? '/' : '/vitepress-demo/',
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    siteTitle: 'vitepress-demo',
    logo: '/favicon.ico',
    lastUpdatedText: '最后更新时间',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-09-tiger',
    },
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },
    nav: nav(),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/GA23187/vitepress-demo',
      },
    ],
    sidebar: {
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '文档配置', link: '/about/' },
            { text: '性能优化', link: '/about/optimization' },
          ],
        },
      ],
      '/http-protocol/': sidebarHttpProtocol(),
      '/front-spec/': sidebarFrontSpec(),
      '/javascript-design-model/': sidebarJavascriptDesignModel(),
      '/typora/': sidebarSummary(),
      '/road-to-react-chinese/': sidebarRoadToReact(),
      '/advanced-core-knowledage-front-end/': sidebarAdvancedCoreKnowledage(),
    },
  },
})

function nav() {
  return [
    {
      text: '笔记',
      link: '/typora/',
      activeMatch: '/typora/',
    },
    {
      text: '透视 HTTP 协议',
      link: '/http-protocol/',
      activeMatch: '/http-protocol/',
    },
    {
      text: '前端规范',
      link: '/front-spec/',
      activeMatch: '/front-spec',
    },
    {
      text: '设计模式',
      link: '/javascript-design-model/',
      activeMatch: '/javascript-design-model',
    },
    {
      text: 'React之路',
      link: '/road-to-react-chinese/',
      activeMatch: '/road-to-react-chinese/',
    },
    {
      text: '前端进阶',
      link: '/advanced-core-knowledage-front-end/',
      activeMatch: '/advanced-core-knowledage-front-end/',
    },
    {
      text: '关于',
      link: '/about/',
      activeMatch: '/about/',
    },
    {
      text: '相关文档',
      items: [
        {
          text: 'vue',
          link: 'https://staging-cn.vuejs.org/',
        },
        {
          text: 'electron',
          link: 'https://www.electronjs.org/',
        },
        {
          text: 'vite',
          link: 'https://cn.vitejs.dev/',
        },
        {
          text: 'vite中文版(大佬翻译)',
          link: 'https://process1024.github.io/vitepress/',
        },
        {
          text: 'rollup',
          link: 'https://www.rollupjs.com/',
        },
        {
          text: 'electron-builder',
          link: 'https://www.electron.build/',
        },
        {
          text: 'vue-router',
          link: 'https://router.vuejs.org/zh/',
        },
        {
          text: 'pinia',
          link: 'https://pinia.vuejs.org/',
        },
        {
          text: 'vueuse',
          link: 'https://vueuse.org/',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: '友情连接/sky',
          link: 'https://zh-sky.gitee.io/electron-vue-template-doc/',
        },
      ],
    },
  ]
}
