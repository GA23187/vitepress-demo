

# 项目规范

常用命名法有以下几种：

* `camelCase`（小驼峰式命名法 — 首字母小写）
* `PascalCase`（大驼峰式命名法 — 首字母大写）
* `kebab-case`（短横线连接式命名法）
* `Snake`（下划线连接式命名法）

## 项目名命名

**全部采用`[短横线命名法]`,字母均为小写,单词分词以短横线分隔。** 
具体项目名可根据部门或团队，项目或项目名等综合命名。团队名非必须。 
如：**`[部门/团队]-[项目/产品名]-[admin/h5]`** 说明：

* 项目/产品名采用短横线命名法。例如：`my-project-name`
* admin可用来表示管理端
* h5用来表示移动端H5 
  也可使用mobile表示M栈，app表示原生APP中内嵌的H5。

## 目录名命名

**同样采用`[短横线命名法]`。**

* 目录存在复数则采用复数命名。例：docs、assets、components、directives、mixins、utils、views。
* 多词目录，采用 **短横线“-”** 分割词语。例：system-config

**目录结构示例如下：**

```
my-project-name/
|- .vscode        //
    |- extensions.json  //推荐VS CODE扩展安装配置
    |- launch.json      //vs code启动文件配置，可调试node_modules中文件和nodejs项目
    |- settings.json //配置项目级别的格式化等信息
|- build          // 流水线部署脚本目录
|- config         // 可配置如dev、test、prod三个环境所需的配置文件。（可选）
|- docs           // 项目文档目录（可选），可存储设计文档，需求文档，TODO.md等
|- nginx          // 部署在容器上前端项目nginx代理文件目录
|- node_modules   // 下载的依赖包
|- public         // 静态页面目录
    |- index.html // 项目入口   
|- src            // 源码目录
    |- api        // http 请求目录
    |- assets     // 静态资源目录，这里的资源会被wabpack构建
        |- icons   // icon 存放目录
        |- imgs    // 图片存放目录
        |- js     // 公共 js 文件目录
        |- css   // 样式存放目录,可同事支持sass、stylus文件
            |- global.scss      // 全局公共样式，提供统一的水平，垂直居中等公共样式类库
            |- element-ui.styl  // 重写elementUI样式
            |- vant.styl        // 重写vant样式
            |- project.styl     // 定义项目级别的统一样式，如Button按钮颜色和居中，
    |- components     // 组件
    |- define         // 常量，变量的定义
        |- constant.js    //常量
        |- enums.js       //定义的枚举
        |- event.js       //定义的事件
    |- libs           // 依赖库
        |- http       // http请求库
            |- axios.js    // axios文件  
            |- fetch.js   //fetch请求库
        |- utils      // 工具存放目录
            |- converter.js    // 转换器
            |- checker.js      // 类型检查器
            |- storage.js      // 存储器
    |- plugins        // 插件
    |- router         // 路由
        |- modules    // 各模块的路由定义，方便各成员编辑路由防止冲突
            |- home.js    // 首页路由
            |- xxx.js     // 其他模块路由
            |- index.js   //动态加载聚合各模块路由
        |- constant-routes.js    //固定路由，如404,nopermission等
        |- index.js   // 加载modules和constant-routes路由，聚合导出全部路由
    |- store          // 全局状态管理
    |- views          // 单页面存放目录
       |- system-config
          |- Index.vue  
    |- pages          // 多页面应用存放目录 
    |- App.vue        // 根组件
    |- main.js        // 入口文件
    |- tests          // 测试用例
    |- .browserslistrc// 浏览器兼容配置文件
    |- .editorconfig  // 编辑器配置文件
    |- .eslintignore  // eslint 忽略规则
    |- .eslintrc.js   // eslint 规则
    |- .gitignore     // git 忽略规则
    |- babel.config.js // babel 规则
    |- Dockerfile // Docker 部署文件
    |- jest.config.js
    |- package.json // 依赖
    |- README.md // 项目README，编写项目介绍，安装，依赖等描述文件
    |- vue.config.js // webpack 编译打包配置文件
    |- yarn.lock       // YARN生成的版本锁定文件
```

**补充说明：**

* docs目录：不建议存储太多文档，会影响git的clone、占用过多存储空间
* tests目录：测试用例目录结构按照views中的模块页面。 建议测试用例文件也都创建在tests目录，而不是在开发页面统计目录创建测试用例文件。
* 页面存储目录：单页面应用存储在views中，多页面应用存储到pages中

## 文件命名

文件名命名单词都应为名词，非动词。 
如：推荐:`logger.service.js`，不推荐:`log.service.js`

单词较长可采用简写，如message可简写msg等，变量命令可通过[CODELFopen in new window](https://unbug.github.io/codelf/)检索确定，VS Code也可以搜Codelf插件。

* **文件夹采用 \[短横线\],全部字母小写** 
  例：`dynamic-components` **（重点）** 
  因为npm包的命名规范是短横线，所以也建议约定目录命名规范也是短横线，便于统一共识。

* JavaScript文件采用 **\[短横线\]**,全字母小写 
  例:`event-bus.js` 
  具有不同角色功能模块可通过`**.[模块名称].[js/ts]` 符号分割区分。 
  例：`message.service.js`、`message.controller.ts`、`message.provider.ts`。

* css文件采用 **\[短横线\]**,全字母小写 
  例：`element-ui.js`、`date-picker.js`

* html文件采用 **\[下划线\]** 连接,全字母小写 
  例：`error_message.html`

* 图片等资源文件采用 **\[下划线\]** 连接,全字母小写 
  例：`banner-head.jpg`、`card-bg.png` 
  切记：不要使用中文，不要使用中文，不要使用中文。
  容易导致部署后图片显示不出来，发现很多项目中居然一直有使用中文命名。

* Vue文件采用 **\[大驼峰\]** 
  例：`Layout.vue`、`MyComponent.vue`

## 代码规范

代码规范主要目标：

* 代码整洁，提高可阅读和可维护性。
  建议参阅《代码整洁之道》，了解如何编写整洁代码。
* 提高应用的健壮性 
  避免踩坑，避免隐藏bug

**代码编写过程中如有未完成，可通过**`//TODO:[待做事项]`**标记** 
VS Code可安装【Todo Tree】插件，查看所有待做事项。 标记TODO的优点主要体现在，在编程过程中，可先编写主流程代码（类似伪代码），通过处理分线事项标记TODO事项即可。这样逻辑主线清晰，分线任务后续再详细实现细节。这样开发效率高、功能稳定可靠。

###  变量函数命名

* 常量命名：单词全部大写，分词使用下划线 
  例如：`MAX_COUNT=100`
* 变量命名： 
  私有变量，建议采用以下划线 **\_** 为前缀，例：`let _dataType=0` ES12新特性的私有变量采用#,如下

  ```
  class Student {
  get #Age() {
    return 18;
  }
  get publicAge() {
    return this.#Age
  }
  }
  ```

  建议未使用ES12新特性时，使用\*\*\_\*\*作为私有变量标记。
* 公共变量：建议采用 **\[小驼峰\]**，例：`dataType=0`
* 函数命名采用 **\[小驼峰\]**,动词 + 名词形式 例：`goPage(){}`、`getOrderList()`、`commitFormData()`  
  常用动词：can、has、is、get、set、commit、post、open、show
* 事件命名  
  采用 **\[小驼峰\]**，以**on**为前缀，即：`[on]+[名称(可选)]+[动词]` 例：`onButtonClick(){}`

### 路由命名

* 路由path命名采用 **\[短横线\]**,全字母小写 例：`/route-path`，因为浏览器只能识别短横线 **\-**
* 命名符合RESTful API  
  **可参考阮一峰大神的文章 [RESTful API 最佳实践open in new window](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html),概括如下：**
    1.  动词 + 宾语 命令是动词（如GET），path是宾语如：`/articles`
    2.  动词的覆盖 服务器必须接受POST模拟其他三个方法（PUT、PATCH、DELETE）
    3.  宾语必须是名词 例如:`/articles`,`/getAllCars`是错误的
    4.  复数 URL  
  
      比如`GET /articles/2`要好于`GET /article/2`
    5.  避免多级 URL  
  
      推荐：`GET /authors/12?categories=2`  
      不推荐：`GET /authors/12/categories/2`

### 注释

函数命名可一看知其意，则不建议添加注释。  
添加注释主要标注以下几方面：

* 说明业务注意点
* 业务逻辑实现是如何考虑
* 附上引用第三方API的链接地址，方便维护者再次查看

## 项目UI/UE

产品和设计的风格要保持统一，约定好同类型页面如何布局等。 也建议开发团队给团队人员指定好基准页面，让项目成员参照开发。

* 请求数据地方都要加loading
  * 页面数据加载建议使用骨架屏
  * 提交按钮上加loading效果
* 表格要添加斑马线

#### 参考或引用

* [史上最全 Vue 前端代码风格指南open in new window](https://juejin.cn/post/6987349513836953607)
