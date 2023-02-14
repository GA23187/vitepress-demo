import{_ as s,o as n,c as a,a as l}from"./app.ee052c02.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React JSX","slug":"react-jsx","link":"#react-jsx","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/jsx.md","lastUpdated":1676383400000}'),p={name:"road-to-react-chinese/react-modern/jsx.md"},e=l(`<h2 id="react-jsx" tabindex="-1">React JSX <a class="header-anchor" href="#react-jsx" aria-hidden="true">#</a></h2><p>\u56DE\u60F3\u4E00\u4E0B\uFF0C\u6211\u63D0\u5230 App \u7EC4\u4EF6\u8FD4\u56DE\u7684\u7C7B\u4F3C HTML \u7684\u8F93\u51FA\u3002\u6B64\u8F93\u51FA\u79F0\u4E3A JSX\uFF0C\u5B83\u5C06 HTML \u548C JavaScript \u6DF7\u5408\u5728\u4E00\u8D77\u3002\u8BA9\u6211\u4EEC\u770B\u770B\u5B83\u5982\u4F55\u5C55\u793A\u53D8\u91CF\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const title = &#39;React&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello {title}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u518D\u6B21\u4F7F\u7528 <code>npm start</code> \u542F\u52A8\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u5728\u6D4F\u89C8\u5668\u4E2D\u67E5\u627E\u6E32\u67D3\u7684\u53D8\u91CF\uFF0C\u5B83\u5E94\u8BE5\u663E\u793A\u4E3A\uFF1A&quot;Hello React&quot;\u3002</p><p>\u8BA9\u6211\u4EEC\u805A\u7126\u5230 HTML\uFF0C\u5B83\u5728 JSX \u4E2D\u7684\u8868\u8FBE\u51E0\u4E4E\u76F8\u540C\u3002\u5E26\u6709\u6807\u7B7E\u7684\u8F93\u5165\u5B57\u6BB5\u53EF\u4EE5\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const title = &#39;React&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello {title}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6211\u4EEC\u5728\u6B64\u5904\u6307\u5B9A\u4E86\u4E09\u4E2A HTML \u5C5E\u6027\uFF1A<code>htmlFor</code>\uFF0C<code>id</code> \u548C <code>type</code>\u3002\u8FD9\u91CC\u7684 <code>id</code> \u548C <code>type</code> \u5728\u539F\u751F HTML \u4E2D\u5F88\u719F\u6089\uFF0C<code>htmlFor</code> \u53EF\u80FD\u662F\u65B0\u7684\u5C5E\u6027\u3002<code>htmlFor</code> \u5728 HTML \u4E2D\u53CD\u6620\u4E86 <code>for</code> \u5C5E\u6027\u3002 JSX \u66FF\u6362\u4E86\u4E00\u4E9B HTML \u5185\u90E8\u5C5E\u6027\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u5728 React \u6587\u6863\u4E2D\u627E\u5230\u6240\u6709<a href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes" target="_blank" rel="noreferrer">\u652F\u6301\u7684 HTML \u5C5E\u6027</a>\uFF0C\u5C5E\u6027\u9075\u5FAA\u9A7C\u5CF0\u5F0F\u547D\u540D\u7EA6\u5B9A\u3002 \u968F\u7740\u5BF9 React \u7684\u66F4\u591A\u4E86\u89E3\uFF0C\u5C06\u4F1A\u9047\u5230\u66F4\u591A\u7684 JSX \u7279\u5B9A\u5C5E\u6027\uFF0C\u4F8B\u5982 <code>className</code> \u548C <code>onClick</code>\uFF0C\u800C\u4E0D\u662F <code>class</code> \u548C <code>onclick</code>\u3002</p><p>\u7A0D\u540E\uFF0C\u6211\u4EEC\u5C06\u91CD\u65B0\u63A2\u7D22 HTML \u8F93\u5165\u5B57\u6BB5\u7684\u5B9E\u73B0\u7EC6\u8282\uFF1B \u73B0\u5728\uFF0C\u8BA9\u6211\u4EEC\u56DE\u5230 JSX \u4E2D\u7684 JavaScript\u3002 \u6211\u4EEC\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u8981\u5728 App \u7EC4\u4EF6\u4E2D\u663E\u793A\u7684\u5B57\u7B26\u4E32\u57FA\u7840\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 JavaScript \u5BF9\u8C61\u5B8C\u6210\u6B64\u64CD\u4F5C\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const welcome = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  greeting: &#39;Hey&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        {welcome.greeting} {welcome.title}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8BF7\u8BB0\u4F4F\uFF0CJSX \u82B1\u62EC\u53F7\u4E2D\u7684\u6240\u6709\u5185\u5BB9\u90FD\u53EF\u4F7F\u7528 JavaScript \u8868\u8FBE\u5F0F\uFF08\u4F8B\u5982\u51FD\u6570\u6267\u884C\uFF09\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">function getTitle(title) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return title;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;Hello {getTitle(&#39;React&#39;)}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>JSX \u6700\u521D\u662F\u4E3A React \u53D1\u660E\u7684\uFF0C\u4F46\u5728\u6D41\u884C\u4E4B\u540E\uFF0C\u5B83\u5BF9\u5176\u4ED6\u73B0\u4EE3\u5E93\u548C\u6846\u67B6\u4E5F\u9002\u7528\u3002\u8FD9\u662F\u6211\u559C\u6B22 React \u7684\u5730\u65B9\u4E4B\u4E00\u3002\u73B0\u5728\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u7684\u6A21\u677F\u8BED\u6CD5\uFF08\u82B1\u62EC\u53F7\u9664\u5916\uFF09\uFF0C\u6211\u4EEC\u73B0\u5728\u5C31\u53EF\u4EE5\u5728 HTML \u4E2D\u4F7F\u7528 JavaScript\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-JSX" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Meet-the-React-Component...hs/React-JSX?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">React \u7684 JSX</a>\u3002</li><li>\u5B9A\u4E49\u66F4\u591A\u57FA\u7840\u548C\u590D\u6742\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u5E76\u5728 JSX \u4E2D\u6E32\u67D3\u5B83\u4EEC\u3002</li><li>\u5C1D\u8BD5\u5728 JSX \u4E2D\u6E32\u67D3 JavaScript \u6570\u7EC4\u3002 \u5982\u679C\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u4E0D\u8981\u62C5\u5FC3\uFF0C\u56E0\u4E3A\u4F60\u5C06\u5728\u4E0B\u4E00\u8282\u4E2D\u8BE6\u7EC6\u4E86\u89E3\u3002</li></ul>`,18),r=[e];function c(t,o,i,b,A,u){return n(),a("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
