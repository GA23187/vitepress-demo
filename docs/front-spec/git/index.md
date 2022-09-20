

# git版本管理

可先查看[参考或引用](#mac和windows换行符冲突)

git分支操作流程图，如下：

![git flow](assets/gitflow.png)

## 版本号定义

**v\[大版本\].\[小版本\].\[修订版本\]** 例：**v1.1.1**

* 大版本 
  用于架构调整，不兼容等的升级变更
* 小版本 
  用于新增功能时的变更
* 修订版本 
  用于修复功能时的变更

## 分支命名规则

若要想清晰查看每个版本的问题，则可以建立树形的版本发布记录，记录每个bug的修复

* feature分支 
  命名：`[feature/dev]_[v1.1]_[feature]` 
  例：dev\_v1.1\_coupon
* develop分支 
  命名：`dev_v1.1`
* release分支 
  命名：`release_v1.1`
* hotfix分支 命名：`release_v1.1_hotfix_[feature]` 命名：`master_v1.1_hotfix_[feature]` 
  **\_v1.1** 主要多版本并行开发，单版本开发时可无需加版本号
* production分支 
  命名：`master_v1.1`

## 分支合并规范

* `有效解决代码冲突的方式是push前fetch + rebase，基本可以避免80%+的冲突`

  **强烈建议禁止 git pull 同步代码** 
  因为git pull是拉取并覆盖方式，若存在冲突则按照默认合并方式进行处理。这种很容易导致冲突很多，必须解决后才能继续工作。 
  **强烈建议使用以下方式：**

1.  fetch + rebase 同步代码 
    fetch操作只是更新远程分支内容，rebase操作才会在本地分支进行合并操作，并且并不是直接覆盖。
2.  新建合并请求，指定审核人Review 
    同步代码并保证无冲突后，push自己的分支，通过gitlab的新建合并请求（Request Merge），并指派给审核人，审核人Review后通过后合并。
3.  合并后自动移除多余分支 若是fix分支可，在新建合并请求时勾选“接受合并请求后移除提交”的选项，合并后会自动删除fix分支，避免分支冗余。

## 提交规范

* `feat` 增加新功能
* `fix` 修复问题/BUG
* `style` 代码风格相关无影响运行结果的
* `perf` 优化/性能提升
* `refactor` 重构
* `revert` 撤销修改
* `test` 测试相关
* `docs` 文档/注释
* `build` 对构建系统或者外部依赖项进行了修改
* `chore` 依赖更新/脚手架配置修改等
* `workflow` 工作流改进
* `ci` 持续集成
* `types` 类型定义文件更改
* `wip` 开发中

## Mac和Windows换行符冲突

**换行符问题：** 
unix/linux 使用的是 LF 换行符，mac 是 linux 系统，使用的也是 LF 换行符，而 windows 系统使用的是 CRLF 换行符。 
在 windows 和 mac 系统协作开发过程中，很容易出现因为换行符的冲突，导致同步后很多文件没有实际内容修改，却因为换行符成为修改签出状态。可通过修改 git 的 autocrlf 修复。

**autocrtl 的三个选项：（配置 autocrtl 的主要目的是保持服务端代码都是一致的 LF 换行符）**

* true //建议 windows 配置。checkout 时自动将 LF 转成 CRLF，提交时又会自动将 CRLF 转成 LF 一般在 windows 系统中是 autocrtl 的默认配置。
* input //提交时自动将 CRLF 转成 LF，checkout 时不做处理。
* false //不对换行符做处理，保持原样。

一般情况，windows 和 mac 系统在默认配置都是可以正常协作开发的。 
因为 windows 系统默认配置是 autocrtl=true，提交时都会转成 LF,而 mac 系统默认配置也是保证提交的是 LF。 出现冲突主要因为更改了默认配置，有人提交的是 CRLF.

**注意：.prettierrc 格式化配置 endOfLine 不要配置“LF"或”CRLF“，应不配置或使用默认配置"auto"。 
否则当 windows 在 checkout 时自动将 LF 转成 CRLF 后，会提示格式化错误。**

####  参考或引用

* [Git Flow 的正确使用姿势open in new window](https://www.jianshu.com/p/41910dc6ef29)
* [Git代码版本控制流程open in new window](https://www.cnblogs.com/fangsmile/p/11535302.html)
* [Gitflow工作流程open in new window](https://www.cnblogs.com/jeffery-zou/p/10280167.html)
