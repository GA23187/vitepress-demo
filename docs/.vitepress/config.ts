import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import sidebarHttpProtocol from './sidebarHttpProtocol'

export default defineConfig({
  title: 'vitepress-demo',
  description: '一个vitepree-demo....',
  base: '/vitepress-demo/',
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
    },
  },
})

function nav() {
  return [
    {
      text: '透视 HTTP 协议',
      link: '/http-protocol/',
      activeMatch: '/http-protocol/',
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
