## vitepress-demo

## 打包错误
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