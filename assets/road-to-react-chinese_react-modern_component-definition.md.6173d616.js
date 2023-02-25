import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u51FD\u6570\u5B9A\u4E49 \uFF08\u9AD8\u9636\uFF09","slug":"react-\u51FD\u6570\u5B9A\u4E49-\uFF08\u9AD8\u9636\uFF09","link":"#react-\u51FD\u6570\u5B9A\u4E49-\uFF08\u9AD8\u9636\uFF09","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/component-definition.md","lastUpdated":1677316569000}'),p={name:"road-to-react-chinese/react-modern/component-definition.md"},e=l(`<h2 id="react-\u51FD\u6570\u5B9A\u4E49-\uFF08\u9AD8\u9636\uFF09" tabindex="-1">React \u51FD\u6570\u5B9A\u4E49 \uFF08\u9AD8\u9636\uFF09 <a class="header-anchor" href="#react-\u51FD\u6570\u5B9A\u4E49-\uFF08\u9AD8\u9636\uFF09" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u7684\u91CD\u6784\u5EFA\u8BAE\u662F\u53EF\u9009\u7684\uFF0C\u7528\u6765\u8F85\u52A9\u8BF4\u660E JavaScript/React \u4E0D\u540C\u7684\u6A21\u5F0F\u3002\u5C31\u7B97\u4E0D\u7528\u8FD9\u4E9B\u6A21\u5F0F\uFF0C\u4F60\u4E00\u6837\u53EF\u4EE5\u505A\u51FA\u5B8C\u6574\u7684 React \u5E94\u7528\uFF0C\u6240\u4EE5\u5982\u679C\u4E0B\u9762\u8FD9\u4E9B\u5185\u5BB9\u770B\u8D77\u6765\u592A\u590D\u6742\u4E86\uFF0C\u4E5F\u4E0D\u9700\u8981\u7070\u5FC3\u3002</p><p><em>src/App.js</em> \u91CC\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u662F\u51FD\u6570\u7EC4\u4EF6\u3002JavaScript \u6709\u5F88\u591A\u79CD\u58F0\u660E\u51FD\u6570\u7684\u65B9\u5F0F\u3002\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u90FD\u662F\u7528 function \u6765\u58F0\u660E\uFF0C\u4F46\u7BAD\u5934\u51FD\u6570\u770B\u8D77\u6765\u4F1A\u66F4\u7B80\u6D01\u4E00\u4E9B\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// function declaration</span></span>
<span class="line"><span style="color:#A6ACCD;">function () { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// arrow function declaration</span></span>
<span class="line"><span style="color:#A6ACCD;">const () =&gt; { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728\u58F0\u660E\u7BAD\u5934\u51FD\u6570\u65F6\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u53EF\u4EE5\u628A\u62EC\u53F7\u53BB\u6389\u3002\u4F46\u6709\u591A\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u62EC\u53F7\u662F\u5FC5\u987B\u7684\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// allowed</span></span>
<span class="line"><span style="color:#A6ACCD;">const item =&gt; { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// allowed</span></span>
<span class="line"><span style="color:#A6ACCD;">const (item) =&gt; { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// not allowed</span></span>
<span class="line"><span style="color:#A6ACCD;">const item, index =&gt; { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// allowed</span></span>
<span class="line"><span style="color:#A6ACCD;">const (item, index) =&gt; { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7528\u7BAD\u5934\u51FD\u6570\u58F0\u660E React \u51FD\u6570\u7EC4\u4EF6\u4F1A\u8BA9\u5B83\u4EEC\u770B\u8D77\u6765\u66F4\u52A0\u7B80\u6D01\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const List = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  return list.map(function(item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div key={item.objectID}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5BF9\u4E8E\u5176\u4ED6\u7684\u51FD\u6570\u4E5F\u4E00\u6837\uFF0C\u6BD4\u5982\u6211\u4EEC\u7528\u5230\u7684 JavaScript \u6570\u7EC4\u7684 map \u51FD\u6570\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const List = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  return list.map(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div key={item.objectID}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u679C\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570<em>\u4EC0\u4E48\u4E5F\u6CA1\u505A</em>\uFF0C\u53EA\u662F\u8FD4\u56DE\u4E86<em>\u67D0\u4E9B\u7ED3\u679C</em>\uFF0C\u2014\u2014 \u6362\u53E5\u8BDD\u8BF4\uFF0C\u5982\u679C\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u6267\u884C\u4EFB\u4F55\u4EFB\u52A1\uFF0C\u53EA\u8FD4\u56DE\u4FE1\u606F\u2014\u2014\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u53BB\u6389<strong>\u5757\u4F53</strong>\uFF08\u82B1\u62EC\u53F7\uFF09\u3002\u5728<strong>\u7B80\u5199\u4F53</strong>\u4E2D\uFF0C\u4F1A\u9644\u4E00\u4E2A<strong>\u9690\u5F0F\u7684\u8FD4\u56DE\u58F0\u660E</strong>\uFF0C\u6240\u4EE5 return \u4E5F\u662F\u53EF\u4EE5\u53BB\u6389\u7684\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// with block body</span></span>
<span class="line"><span style="color:#A6ACCD;">count =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // perform any task in between</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return count + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// with concise body</span></span>
<span class="line"><span style="color:#A6ACCD;">count =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  count + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E5F\u53EF\u4EE5\u5E94\u7528\u5728 App \u548C List \u7EC4\u4EF6\u4E0A\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u9664\u4E86\u8FD4\u56DE JSX \u4E4B\u5916\u4EC0\u4E48\u90FD\u6CA1\u505A\u3002\u540C\u6837\u4E5F\u53EF\u4EE5\u7528\u5728 map \u91CC\u7684\u7BAD\u5934\u51FD\u6570\u4E0A\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const List = () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  list.map(item =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div key={item.objectID}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ));</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u53BB\u6389\u4E86 function \u58F0\u660E\u3001\u82B1\u62EC\u53F7\u548C return \u8BED\u53E5\u540E\uFF0C\u6211\u4EEC\u7684 JSX \u73B0\u5728\u770B\u8D77\u6765\u66F4\u7B80\u6D01\u4E86\u3002\u4F46\u59CB\u7EC8\u8981\u8BB0\u5F97\uFF0C\u8FD9\u53EA\u662F\u53EF\u9009\u7684\u6B65\u9AA4\uFF0C\u4F7F\u7528\u4E00\u822C\u7684\u51FD\u6570\u58F0\u660E\u3001\u800C\u4E0D\u662F\u7BAD\u5934\u51FD\u6570\uFF0C\u5E26\u82B1\u62EC\u53F7\u7684\u7BAD\u5934\u51FD\u6570\u4F53\u3001\u800C\u975E\u7701\u7565\u5B83\uFF0C\u8FD9\u4E9B\u90FD\u662F\u53EF\u63A5\u53D7\u7684\u3002\u6709\u65F6\u51FD\u6570\u4F53\u662F\u5FC5\u8981\u7684\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u5728\u51FD\u6570\u7B7E\u540D\u548C\u8FD4\u56DE\u8BED\u53E5\u4E4B\u95F4\u5F15\u5165\u4E1A\u52A1\u903B\u8F91\u65F6\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // perform any task in between</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u786E\u4FDD\u4F60\u7406\u89E3\u4E86\u8FD9\u4E2A\u91CD\u6784\u7684\u6982\u5FF5\uFF0C\u56E0\u4E3A\u540E\u9762\u6211\u4EEC\u5C06\u5728\u6709\u548C\u6CA1\u6709\u51FD\u6570\u4F53\u7684\u7BAD\u5934\u51FD\u6570\u7EC4\u4EF6\u4E4B\u95F4\u7075\u6D3B\u5207\u6362\uFF0C\u53D6\u51B3\u4E8E\u7EC4\u4EF6\u7684\u9700\u6C42\u6765\u51B3\u5B9A\u4F7F\u7528\u54EA\u79CD\u5F62\u5F0F\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-Component-Definition" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Meet-another-React-Component...hs/React-Component-Definition?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank" rel="noreferrer">JavaScript \u7BAD\u5934\u51FD\u6570</a>\u7684\u6587\u7AE0\u3002</li><li>\u719F\u7EC3\u638C\u63E1\u6709\u5757\u4F53\u548C\u8FD4\u56DE\u7684\u7BAD\u5934\u51FD\u6570\u3001\u4EE5\u53CA\u6CA1\u6709\u8FD4\u56DE\u8BED\u53E5\u7684\u7B80\u5199\u4F53\u3002</li></ul>`,26),r=[e];function t(c,i,o,b,A,C){return n(),a("div",null,r)}const d=s(p,[["render",t]]);export{m as __pageData,d as default};
