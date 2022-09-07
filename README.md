## vitepress-demo

## 介绍

VitePress 是 [VuePress](https://vuepress.vuejs.org/) 小兄弟, 基于 [Vite](https://github.com/vitejs/vite)构建。

官网地址：https://vitepress.vuejs.org/

## 用法

待补充

## 部署

https://vitepress.vuejs.org/guide/deploying

### 部署到GitHub Pages

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

4. 在对应GitHub仓库的setting中的pages选择`gh-pages`分支作为GitHub Pages source，保存后就会自动部署了

### 打包错误

```
/ building client + server bundles...[vitepress] No language registration for http
file: E:/code/myProject/vitepress/docs/http-protocol/05/01.md
✖ building client + server bundles...
build error:
 Error: No language registration for http
    at getGrammar (E:\code\myProject\vitepress\node_modules\shiki\dist\index.js:2213:13)
```
- shiki 定位发现是这个的问题
 ```
  ```http 
  http://www.chrono.com/18-2
  ```
 ```

