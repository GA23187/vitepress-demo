## vitepress-demo

## 介绍

VitePress 是 [VuePress](https://vuepress.vuejs.org/) 小兄弟, 基于 [Vite](https://github.com/vitejs/vite)构建。

官网地址：https://vitepress.vuejs.org/

## 用法

待补充

## 进阶

### 自定义首页

vitepress 也是支持直接在 md 中写 vue 的，所以可以通过 vue 组件的形式，来自定义一套样式。

```
---
layout: home
---
<home />
<script setup>
import home from './components/home.vue'
</script>
```

### 自定义页面

通过添加 `.vitepress/theme/index.js` 或 `.vitepress/theme/index.ts` 文件（“主题入口文件”）来启用自定义主题。

```
import MyLayout from './layout.vue'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  // NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    console.log(app, '>>>>>')
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  },
}
```

默认主题 `<Layout/>` 组件有一些插槽，可用于在页面的某些位置注入内容。

```
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

console.log(frontmatter.value)
</script>

<template>
  <Layout>
    <template #doc-before>
      文档前面添加内容
      {{frontmatter}}
    </template>
    <template #doc-after>
      文档后面添加内容
      {{frontmatter}}
    </template>
  </Layout>
</template>

<style>
.page-info {
  font-size: 13px;
  color: #7f7f7f;
  margin-right: 10px;
}
</style>
```

## 打包

文档多了打包速度肉眼可见的慢的。。

```
✓ building client + server bundles...
✓ rendering pages...
build complete in 77.26s.
```

## 部署

https://vitepress.vuejs.org/guide/deploying

### 部署到 GitHub Pages

1. 配置`docs/.vitepress/config.js`中的`base`，如果您计划将站点部署到 https://foo.github.io/bar/ ，那么应该将 base 设置为`/bar/`。它应该始终以斜杠开始和结束。

2. 创建`.github/workflows/deploy.yml`文件，内容如下

   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - master

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: yarn
         - run: yarn install --frozen-lockfile

         - name: Build
           run: yarn docs:build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: docs/.vitepress/dist
   ```

   > 注意分支名**master** 如果你要提交到**main**记得修改上面，核心就是在推送到对应分支时触发部署。

3. 提交到`master`分支

4. 在对应 GitHub 仓库的 setting 中的 pages 选择`gh-pages`分支作为 GitHub Pages source，保存后就会自动部署了

### 打包错误

- [vitepress] No language registration for http

```
/ building client + server bundles...[vitepress] No language registration for http
file: E:/code/myProject/vitepress/docs/http-protocol/05/01.md
✖ building client + server bundles...
build error:
 Error: No language registration for http
    at getGrammar (E:\code\myProject\vitepress\node_modules\shiki\dist\index.js:2213:13)
```

> shiki 定位发现是这个的问题
>
>  ```http
>   http://www.chrono.com/18-2
>  ```

打包时会以为这是一个http语言的代码块

- [vitepress] One or more pages contain dead links.

```
(!) Found dead link ./01/index in file E:/code/myProject/vitepress/docs/http-protocol/README.md
If it is intended, you can use:
<a href="./01/index" target="_blank" rel="noreferrer">./01/index</a>
\ building client + server bundles...[vitepress] One or more pages contain dead links.
✖ building client + server bundles...
```

这个 md 文件中的地址是个相对路径，生成的地址在项目中不存在

-  Error: One or more pages contain dead links.

```
(!) Found dead link ./lib/Less in file E:/code/myProject/vitepress/docs/typora/00summary/02 前端项目流程.md
If it is intended, you can use:
<a href="./lib/Less" target="_blank" rel="noreferrer">./lib/Less</a>
```

md文档中的`[打开文件夹](./lib/JS)`无法解析

- Error [ERR_MODULE_NOT_FOUND]: Cannot find module

```
'E:\code\myProject\vitepress\docs\.vitepress\.temp\typora_12VueCode_31 添加全局$router 属性.md.js'
imported from E:\code\myProject\vitepress\node_modules\vitepress\dist\node\serve-1b26f7f9.js
```

感觉是文档标题中有`$`导致的，删除后就没事了



## vitepress版本问题

当前版本`"vitepress": "^1.0.0-alpha.13"` `sidebar`必须含有`items`属性

