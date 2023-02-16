import MyLayout from './layout.vue'
import DefaultTheme from 'vitepress/theme' //viteperss的主题
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  // NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    // 打包时这里会一直运行，故不要console
    // console.log(app, '>>>>>')
    // 注册element-plus
    // app.use(ElementPlus)
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  },
}
