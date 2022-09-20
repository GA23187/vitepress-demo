# ESLint 配置

[ESLint英文官网open in new window](https://eslint.org/) 
[ESLint中文官网open in new window](https://eslint.bootcss.com/)

#### eslint、prettier、vetur、volar的简述：

\(vue2和vue3的配置还有待继续优化调整\)

* `ESLint` 主要负责: 质量检查\(例如使用了某个变量却忘记了定义\)、风格检查 [查看官网open in new window](https://eslint.bootcss.com/docs/user-guide/configuring)
* `Prettier`主要负责: 风格检查和格式化, 没有质量检查 [查看官网open in new window](https://prettier.io/docs/en/index.html)
* `vetur` 主要负责：支持vue2.x版本语法高亮, 代码片段, 质量提示\&错误、智能提示，也支持格式化、格式化/风格（可配置为prettier）
* `volar` 主要负责：支持vue3.x版本语法高亮, 代码片段, 质量提示\&错误、智能提示，也支持格式化、格式化/风格（可配置为prettier）

vetur和volar的主要作用还是对.vue文件的语法高亮、智能提示、质量检测。

* * *

**ESLint配置说明：**

```
//.eslintrc.js
module.exports = {
  parser: "vue-eslint-parser",
  extends: [
    // 'plugin:vue/recommended',  //vue2配置
    'plugin:vue/vue3-recommended', //vue3配置
    // 'plugin:@typescript-eslint/recommended', //有ts则需要配置
    'plugin:prettier/recommended', //配置prettier，注意，此配置要放置最后
  ],
};
```

`extends`属性配置

* 共享配置包 
  属性值可以省略包名的前缀 eslint-config-\* 
  extends: standard //表示使用功能的是 eslint-config-standard 包的配置
* 插件配置 
  属性值可以省略包名的前缀 eslint-plugin-\* 
  extends:\["plugin:vue/recommended"\]

## 安装插件

因为 eslint 和 prettier 的格式化存在冲突。所以需要安装如下组件：

* `eslint-config-prettier` 
  禁用一些 eslint 和 prettier 冲突的规则。 
  具体可通过node\_modules下的npm查看。
* `eslint-plugin-prettier` 
  调用 prettier 格式化代码，然后与格式化前对比，如果不一致，这个地方就会被 prettier 进行标记。

**使用 ESLint 与 eslint-plugin-prettier 的结果是最终得到的代码是充分尊重Prettier的结果**

#### 参考

[vscode, eslint, prettier, vetur冲突及解决open in new window](https://www.cnblogs.com/mspeer/p/12055962.html)

## Vue3.x 推荐配置

**推荐使用 eslint + prettier + volar 三个 vscode 插件**  
**.eslintrc.js**

```
//.eslintrc.js
module.exports = {
  parser: "vue-eslint-parser",
  extends: [
     // 'plugin:vue/recommended',  //vue2配置
    'plugin:vue/vue3-recommended', //vue3配置
    // 'plugin:@typescript-eslint/recommended', //有ts则需要配置
    'plugin:prettier/recommended', //配置prettier，注意，此配置要放置最后
  ],
  /* 优先级低于parser属性配置的语法解析器 */
  parserOptions: {
    parser: "@typescript-eslint/parser", //若存在ts，则需要配置此项
    ecmaVersion: 'latest', //默认latest
    sourceType: "module",
    // ecmaFeatures: {
    //   jsx: true //启用JSX
    // }
  },
  rules: {
    // "off" -关闭规则,"warn" - 开启规则, 使用警告 程序不会退出,"error" - 开启规则, 使用错误 程序退出
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        //默认都是babel的parser，因为prettier和vetur检查冲突，所以配置成flow
        parser: "flow",
      },
    ],
    "vue/multi-word-component-names": "off",
    //...未完待续
  },
};
```

**.vsconde/settings.json**

```
{
  "window.zoomLevel": 0,
  // "editor.wordWrap": "wordWrapColumn",
  "editor.formatOnSave": true, //true 保存时格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": false //true 保存时自动修复
  },
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue-html",
    "vue" //设置vue表示使用eslint检查vue
  ],
  "files.associations": {
    "*.vue": "vue"
    // "*.ts": "typescript"
  },
  "[vue]": {
    "editor.defaultFormatter": "johnsoncodehk.volar"
    // "editor.codeActionsOnSave": {
    //   "source.fixAll.eslint": true,
    //   "source.fixAll.stylelint": true
    // }
  },
  "volar.tsPlugin": true,
  "volar.tsPluginStatus": false,
  "[typescript]": {
    // "editor.defaultFormatter": "johnsoncodehk.vscode-typescript-vue-plugin"
    // "editor.defaultFormatter": "vscode.typescript-language-features",
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": false,
  "javascript.format.insertSpaceAfterConstructor": true,

  "vetur.format.enable": false, //禁用vetur格式化器
  // "vetur.validation.template": false,

  // Use ':' as separator between property and value
  // "languageStylus.useSeparator": true, // default value
  // Toggle matches for Stylus Builtin Functions on autocomplete
  // "languageStylus.useBuiltinFunctions": true, // default value
  // Toggle colors preview
  "editor.colorDecorators": true // default value
}
```



* `.vsconde/extension.json`  
  这个在切换到插件视图时，会提示“推荐插件”，全部安装推荐插件即可。

```
{
  // See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
  // Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
  // List of extensions which should be recommended for users of this workspace.
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "editorconfig.editorconfig",
    "johnsoncodehk.volar",
    "johnsoncodehk.vscode-typescript-vue-plugin",
    "mrmlnc.vscode-scss",
    "gruntfuggly.todo-tree"
  ],
  // List of extensions recommended by VS Code that should not be recommended for users of this workspace.
  "unwantedRecommendations": []
}
```

## Vue2.x 推荐配置

**推荐使用 eslint + prettier + vetur 三个 vscode 插件**

* `.eslintrc.js`

```
//.eslintrc.js
module.exports = {
  parser: "vue-eslint-parser",
  extends: [
    'plugin:vue/recommended',  //vue2配置
    // 'plugin:vue/vue3-recommended', //vue3配置
    // 'plugin:@typescript-eslint/recommended', //有ts则需要配置
    'plugin:prettier/recommended', //配置prettier，注意，此配置要放置最后
  ],
  /* 优先级低于parser属性配置的语法解析器 */
  parserOptions: {
    // parser: "@typescript-eslint/parser", //若存在ts，则需要配置此项
    ecmaVersion: 'latest', //默认latest
    sourceType: "module",
    // ecmaFeatures: {
    //   jsx: true //启用JSX
    // }
  },
  rules: {
    // "off" -关闭规则,"warn" - 开启规则, 使用警告 程序不会退出,"error" - 开启规则, 使用错误 程序退出
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        //默认都是babel的parser，因为prettier和vetur检查冲突，所以配置成flow
        parser: "flow",
      },
    ],
    "vue/multi-word-component-names": "off",
  },
};
```

**.vsconde/settings.json**

```
{
  "window.zoomLevel": 0,
  // "editor.wordWrap": "wordWrapColumn",
  "editor.formatOnSave": true, //true 保存时格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": false //true 保存时自动修复
  },
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue-html",
    "vue" //设置vue表示使用eslint检查vue
  ],
  "files.associations": {
    "*.vue": "vue"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": false,
  "javascript.format.insertSpaceAfterConstructor": true,
  //vetur默认集成了一个eslint-plugin-vue版本来对<template>提示.
  // 也可自己安装一个新的版本. 如果自己安装一个新的版本, 那么配置过程如下:
  "vetur.validation.template": false,
  "vetur.useWorkspaceDependencies": true, //使用本地工作区版本
  "vetur.format.enable": true, //开启vetur格式化器
  "vetur.format.options.useTabs": false,
  "vetur.format.options.tabSize": 2,
  "vetur.format.defaultFormatter.html": "prettier", //默认:prettyhtml  或 prettier
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  //stylus格式化配置
  "stylusSupremacy.insertColons": true, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
  // Use ':' as separator between property and value
  // "languageStylus.useSeparator": true, // default value
  // Toggle matches for Stylus Builtin Functions on autocomplete
  // "languageStylus.useBuiltinFunctions": true, // default value
  // Toggle colors preview
  "editor.colorDecorators": true // default value
}
```

* `.vsconde/extension.json` 
  这个在切换到插件视图时，会提示“推荐插件”，全部安装推荐插件即可。

```
{
  // See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
  // Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
  // List of extensions which should be recommended for users of this workspace.
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "octref.vetur",
    "editorconfig.editorconfig",
    "syler.sass-indented",
    "sysoev.language-stylus",
    "gruntfuggly.todo-tree"
  ],
  // List of extensions recommended by VS Code that should not be recommended for users of this workspace.
  "unwantedRecommendations": []
}

```

## Prettier配置

#### Prettier - 基本配置

说明：若某类型文件不采用prettier格式，则可在项目根目录 **.prettierignore** 文件中添加排除项 正则表达式忽略掉。

**prettier.config.js**

```
//prettier.config.js
module.exports = {
  //html需strict严格模式
  htmlWhitespaceSensitivity: "strict",
  // 是否给vue中的 <script> and <style>标签加缩进
  vueIndentScriptAndStyle: false,

  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 使用分号, 默认true
  semi: false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: "none",
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: true,
  // 在jsx中使用单引号代替双引号
  jsxSingleQuote: false,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: "avoid",
  // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  ignorePath: ".prettierignore",
  //true开启,false关闭  prettier使用eslint的代码格式进行校验
  eslintIntegration: true,
  //rue开启,false关闭  prettier使用stylelint的代码格式进行校验
  //   stylelintIntegration: true,
  // 结尾是 \n \r \n\r auto
  endOfLine: "auto",
  wrapAttributes: false,
  // sortAttributes: false
};
```
