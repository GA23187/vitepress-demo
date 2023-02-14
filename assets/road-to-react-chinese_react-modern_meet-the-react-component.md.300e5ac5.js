import{_ as s,o as n,c as a,a as p}from"./app.a9f825fd.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BA4\u8BC6React\u7EC4\u4EF6","slug":"\u8BA4\u8BC6react\u7EC4\u4EF6","link":"#\u8BA4\u8BC6react\u7EC4\u4EF6","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/meet-the-react-component.md","lastUpdated":1676385096000}'),l={name:"road-to-react-chinese/react-modern/meet-the-react-component.md"},e=p(`<h2 id="\u8BA4\u8BC6react\u7EC4\u4EF6" tabindex="-1">\u8BA4\u8BC6React\u7EC4\u4EF6 <a class="header-anchor" href="#\u8BA4\u8BC6react\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7684\u7B2C\u4E00\u4E2A React \u7EC4\u4EF6\u5728 <em>src/App.js</em> \u6587\u4EF6\u4E2D\uFF0C\u5B83\u548C\u4E0B\u9762\u7684\u8FD9\u4E2A\u4F8B\u5B50\u5F88\u76F8\u4F3C\u3002\u5185\u5BB9\u53EF\u80FD\u7A0D\u6709\u4E0D\u540C\uFF0C\u56E0\u4E3A create-react-app \u6709\u65F6\u5019\u4F1A\u66F4\u65B0\u9ED8\u8BA4\u7684\u7EC4\u4EF6\u7ED3\u6784\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import logo from &#39;./logo.svg&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./App.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;header className=&quot;App-header&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;img src={logo} className=&quot;App-logo&quot; alt=&quot;logo&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;a</span></span>
<span class="line"><span style="color:#A6ACCD;">          className=&quot;App-link&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Href=&quot;https://reactjs.org&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          target=&quot;_blank&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          rel=&quot;noopener noreferrer&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Learn React</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/header&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u9664\u975E\u6709\u53E6\u5916\u7684\u8BF4\u660E\uFF0C\u5426\u5219\u8BE5\u6587\u4EF6\u5C06\u4F1A\u662F\u8D2F\u7A7F\u8FD9\u4E2A\u6559\u7A0B\u7684\u6838\u5FC3\u3002\u6211\u4EEC\u5148\u5C06\u7EC4\u4EF6\u7B80\u5316\u4E3A\u66F4\u8F7B\u4FBF\u7684\u7248\u672C\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u5165\u95E8\u65F6\u4E0D\u7528\u5173\u6CE8\u90A3\u4E48\u591A create-react-app \u751F\u6210\u7684\u6A21\u677F\u4EE3\u7801\u4E86\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello World&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9996\u5148\uFF0C\u8FD9\u4E2A App \u7EC4\u4EF6\u662F\u4E00\u4E2A JavaScript \u51FD\u6570\u3002\u4E00\u822C\u79F0\u5B83\u4E3A <strong>\u51FD\u6570\u7EC4\u4EF6</strong>\uFF0C\u56E0\u4E3A\u8FD8\u6709\u5176\u4ED6\u5F62\u5F0F\u7684 React \u7EC4\u4EF6\uFF08\u7A0D\u540E\u4ECB\u7ECD <strong>\u7EC4\u4EF6\u7C7B\u578B</strong>\uFF09\u3002\u5176\u6B21\uFF0C\u622A\u6B62\u76EE\u524D App \u51FD\u6570\u7EC4\u4EF6\u4E0D\u63A5\u6536\u4EFB\u4F55\u53C2\u6570\uFF08\u7A0D\u540E\u4ECB\u7ECD <strong>props</strong>\uFF09\u3002\u6700\u540E\uFF0CApp \u7EC4\u4EF6\u8FD4\u56DE\u7684\u50CF HTML \u7684\u4EE3\u7801\u79F0\u4E4B\u4E3A JSX\uFF08\u7A0D\u540E\u4ECB\u7ECD <strong>JSX</strong>\uFF09\u3002</p><p>\u8FD9\u4E2A\u51FD\u6570\u7EC4\u4EF6\u7684\u5B9E\u73B0\u7EC6\u8282\u548C\u5176\u4ED6\u4EFB\u4F55 JavaScript \u51FD\u6570\u4E00\u6837\u3002\u5728\u6574\u4E2A React \u65C5\u7A0B\u4E2D\uFF0C\u4F60\u4F1A\u5728\u5B9E\u8DF5\u4E2D\u4F53\u4F1A\u5230\u8FD9\u4E00\u70B9\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5728\u8FD9\u513F\u505A\u70B9\u4EC0\u4E48</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello World&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8DDF\u6240\u6709\u7684 JavaScript \u51FD\u6570\u4E00\u6837\uFF0C\u5728\u51FD\u6570\u4F53\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u4F1A\u5728\u6BCF\u6B21\u8FD0\u884C\u51FD\u6570\u7684\u65F6\u5019\u88AB\u91CD\u65B0\u5B9A\u4E49\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const title = &#39;React&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello World&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u4E0D\u9700\u8981\u4F7F\u7528 App \u7EC4\u4EF6\u4E2D\u7684\u4EFB\u4F55\u5185\u5BB9\uFF08\u6BD4\u5982\uFF1A\u53C2\u6570\u6765\u6E90\u4E8E\u51FD\u6570\u7B7E\u540D\uFF09\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728 App \u7EC4\u4EF6\u5916\u90E8\u5B9A\u4E49\u8FD9\u4E2A\u53D8\u91CF\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const title = &#39;React&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello World&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u8282\u4E2D\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\uFF01</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Meet-the-React-Component" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u5982\u679C\u4F60\u4E0D\u786E\u5B9A\u4EC0\u4E48\u65F6\u5019\u5728 JavaScript\uFF08\u6216 React\uFF09\u4E2D\u4F7F\u7528<code>const</code>\uFF0C<code>let</code>\uFF0C\u6216\u8005<code>var</code>\u6765\u58F0\u660E\u53D8\u91CF\uFF0C\u53EF\u4EE5<a href="https://www.robinwieruch.de/const-let-var" target="_blank" rel="noreferrer">\u9605\u8BFB\u66F4\u591A\u5173\u4E8E\u5B83\u4EEC\u4E4B\u95F4\u7684\u533A\u522B</a><ul><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" target="_blank" rel="noreferrer">const</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" target="_blank" rel="noreferrer">let</a></li></ul></li></ul><p>\u601D\u8003\u4E00\u4E0B\u5728 App \u7EC4\u4EF6\u8FD4\u56DE\u7684 HTML \u4E2D\u5C55\u793A<code>title</code>\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B\u3002\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u8282\u4E2D\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\u3002</p>`,21),r=[e];function c(t,o,i,A,b,C){return n(),a("div",null,r)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
