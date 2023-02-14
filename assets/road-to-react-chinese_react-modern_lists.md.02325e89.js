import{_ as s,o as n,c as a,a as l}from"./app.ee052c02.js";const p="/vitepress-demo/assets/jsx-mapping.39b3ed37.png",d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u4E2D\u7684\u5217\u8868","slug":"react-\u4E2D\u7684\u5217\u8868","link":"#react-\u4E2D\u7684\u5217\u8868","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/lists.md","lastUpdated":1676383400000}'),e={name:"road-to-react-chinese/react-modern/lists.md"},r=l(`<h2 id="react-\u4E2D\u7684\u5217\u8868" tabindex="-1">React \u4E2D\u7684\u5217\u8868 <a class="header-anchor" href="#react-\u4E2D\u7684\u5217\u8868" aria-hidden="true">#</a></h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5728 JSX \u4E2D\u6E32\u67D3\u4E86\u4E00\u4E9B\u539F\u59CB\u53D8\u91CF\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u6E32\u67D3\u9879\u76EE\u5217\u8868\u3002\u6211\u4EEC\u5148\u7528\u793A\u4F8B\u6570\u636E\u8FDB\u884C\u5B9E\u9A8C\uFF0C\u7136\u540E\u5C06\u5176\u5E94\u7528\u4E8E\u4ECE\u8FDC\u7A0B API \u83B7\u53D6\u6570\u636E\u3002\u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u5C06\u6570\u7EC4\u5B9A\u4E49\u4E3A\u53D8\u91CF\u3002\u548C\u4EE5\u524D\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5916\u90E8\u6216\u5185\u90E8\u5B9A\u4E49\u53D8\u91CF\u3002\u4EE5\u4E0B\u662F\u5728\u5916\u90E8\u5B9A\u4E49\u53D8\u91CF\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const list = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: &#39;https://reactjs.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: &#39;Jordan Walke&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    num_comments: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    points: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">    objectID: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;Redux&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: &#39;https://redux.js.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: &#39;Dan Abramov, Andrew Clark&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    num_comments: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    points: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">    objectID: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App() { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u6211\u5728\u8FD9\u91CC\u4F7F\u7528\u4E00\u4E2A <code>...</code> \u4F5C\u4E3A\u5360\u4F4D\u7B26\uFF0C\u4EE5\u4F7F\u4EE3\u7801\u6BB5\u7B80\u6D01\uFF08\u6CA1\u6709 App \u7EC4\u4EF6\u5B9E\u73B0\u7EC6\u8282\uFF09\uFF0C\u5E76\u4E13\u6CE8\u4E8E\u5FC5\u8981\u90E8\u5206\uFF08App \u7EC4\u4EF6\u5916\u90E8\u7684 <code>list</code> \u53D8\u91CF\uFF09\u3002\u5728\u6574\u4E2A\u5B66\u4E60\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u5C06\u4F7F\u7528 <code>...</code> \u4F5C\u4E3A\u6211\u4E4B\u524D\u7528\u4E8E\u7EC3\u4E60\u7684\u4EE3\u7801\u5757\u7684\u5360\u4F4D\u7B26\u3002 \u5982\u679C\u4F60\u611F\u5230\u56F0\u60D1\uFF0C\u53EF\u4EE5\u968F\u65F6\u4F7F\u7528\u5927\u591A\u6570\u7AE0\u8282\u7ED3\u5C3E\u5904\u63D0\u4F9B\u7684 CodeSandbox \u94FE\u63A5\u6765\u9A8C\u8BC1\u4EE3\u7801\u3002</p><p>\u5217\u8868\u4E2D\u7684\u6BCF\u4E2A\u9879\u76EE\u90FD\u6709\u4E00\u4E2A\u6807\u9898\uFF0C\u4E00\u4E2A URL\uFF0C\u4E00\u4E2A\u4F5C\u8005\uFF0C\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF08<code>objectID</code>\uFF09\uFF0C\u5206\u6570\uFF08\u8868\u793A\u8BE5\u9879\u76EE\u7684\u53D7\u6B22\u8FCE\u7A0B\u5EA6\uFF09\u4EE5\u53CA\u8BC4\u8BBA\u6570\u3002 \u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u5728 JSX \u4E2D\u52A8\u6001\u6E32\u67D3\u5217\u8868\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {/* render the list here */}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4F60\u53EF\u4EE5\u4F7F\u7528<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noreferrer">\u6570\u7EC4\u5185\u7F6E\u7684 JavaScript map \u65B9\u6CD5</a>\u904D\u5386\u6BCF\u4E2A\u9879\u76EE\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u65B0\u7248\u672C\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const numbers = [1, 4, 9, 16];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const newNumbers = numbers.map(function(number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return number * 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(newNumbers);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [2, 8, 18, 32]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u4ECE\u4E00\u79CD JavaScript \u6570\u636E\u7C7B\u578B\u6620\u5C04\u5230\u53E6\u4E00\u79CD\u3002 \u76F8\u53CD\uFF0C\u6211\u4EEC\u8FD4\u56DE\u6E32\u67D3\u5217\u8868\u4E2D\u6BCF\u4E2A\u9879\u76EE\u7684 JSX \u7247\u6BB5\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {list.map(function(item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;div&gt;{item.title}&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      })}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u6211\u6700\u521D\u5BF9 React \u611F\u5230\u60CA\u53F9\u7684\u77AC\u95F4\u4E4B\u4E00\u662F\u4F7F\u7528\u7B80\u6D01\u7684 JavaScript \u6765\u5C06 JavaScript \u5BF9\u8C61\u5217\u8868\u6620\u5C04\u4E3A HTML \u5143\u7D20\uFF0C\u800C\u6CA1\u6709\u4EFB\u4F55\u5176\u4ED6 HTML \u6A21\u677F\u8BED\u6CD5\u3002 \u5B83\u53EA\u662F HTML \u4E2D\u7684 JavaScript\u3002</p><p><img src="`+p+`" alt=""></p><p>React \u73B0\u5728\u4F1A\u663E\u793A\u6BCF\u4E2A\u9879\u76EE\uFF0C\u4F46\u662F\u4F60\u4ECD\u7136\u53EF\u4EE5\u6539\u8FDB\u4EE3\u7801\uFF0C\u4EE5\u4FBF React \u66F4\u4F18\u96C5\u5730\u5904\u7406\u9AD8\u7EA7\u52A8\u6001\u5217\u8868\u3002 \u901A\u8FC7\u4E3A\u6BCF\u4E2A\u5217\u8868\u9879\u7684\u5143\u7D20\u5206\u914D key \u5C5E\u6027\uFF0CReact \u53EF\u4EE5\u5728\u5217\u8868\u53D1\u751F\u66F4\u6539\uFF08\u4F8B\u5982\u91CD\u65B0\u6392\u5E8F\uFF09\u65F6\u8BC6\u522B\u5DF2\u4FEE\u6539\u7684\u9879\u76EE\u3002 \u5E78\u8FD0\u7684\u662F\uFF0C\u6211\u4EEC\u7684\u5217\u8868\u9879\u5E26\u6709\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {list.map(function(item) {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div key={item.objectID}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">            {item.title}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      })}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u6211\u4EEC\u8981\u907F\u514D\u4F7F\u7528\u6570\u7EC4\u4E2D\u9879\u76EE\u7684\u7D22\u5F15\u6765\u4FDD\u8BC1 key \u5C5E\u6027\u662F\u7A33\u5B9A\u7684\u6807\u8BC6\u7B26\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u5217\u8868\u66F4\u6539\u987A\u5E8F\uFF0CReact \u5C06\u65E0\u6CD5\u6B63\u786E\u8BC6\u522B\u9879\u76EE\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// don&#39;t do this</span></span>
<span class="line"><span style="color:#A6ACCD;">{list.map(function(item, index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div key={index}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">})}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6BCF\u4E2A\u9879\u76EE\u4EC5\u663E\u793A\u6807\u9898\u3002 \u8BA9\u6211\u4EEC\u5C1D\u8BD5\u663E\u793A\u66F4\u591A\u9879\u76EE\u5C5E\u6027\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {list.map(function(item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return (</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div key={item.objectID}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">      })}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>map \u51FD\u6570\u7B80\u6D01\u5730\u5185\u8054\u5728\u4F60\u7684 JSX \u4E2D\u3002 \u5728 map \u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BBF\u95EE\u6BCF\u4E2A\u9879\u76EE\u53CA\u5176\u5C5E\u6027\u3002 \u6BCF\u4E2A\u9879\u76EE\u7684 <code>url</code> \u5C5E\u6027\u90FD\u53EF\u7528\u4F5C\u951A\u6807\u7B7E <code>&lt;a&gt;</code> \u7684\u52A8\u6001 <code>href</code> \u5C5E\u6027\u3002 JSX \u4E2D\u7684 JavaScript \u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u663E\u793A\u9879\u76EE\uFF0C\u8FD8\u53EF\u4EE5\u52A8\u6001\u5206\u914D HTML \u5C5E\u6027\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Lists-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-JSX...hs/Lists-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E\u4E3A\u4F55\u9700\u8981 React \u7684 key \u5C5E\u6027\u7684\u4FE1\u606F\uFF08<a href="https://dev.to/jtonzing/the-significance-of-react-keys---a-visual-explanation--56l7" target="_blank" rel="noreferrer">0</a>\uFF0C<a href="https://www.robinwieruch.de/react-list-key" target="_blank" rel="noreferrer">1</a>\uFF0C<a href="https://reactjs.org/docs/lists-and-keys.html" target="_blank" rel="noreferrer">2</a>\uFF09\u3002 \u5982\u679C\u4F60\u8FD8\u4E0D\u4E86\u89E3\u5B9E\u73B0\uFF0C\u8BF7\u4E0D\u8981\u62C5\u5FC3\uFF0C\u53EA\u9700\u5173\u6CE8\u5B83\u5BF9\u52A8\u6001\u5217\u8868\u9020\u6210\u7684\u95EE\u9898\u3002</li><li>\u56DE\u987E<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/" target="_blank" rel="noreferrer">\u6807\u51C6\u5185\u7F6E\u6570\u7EC4\u65B9\u6CD5</a> -* \u5C24\u5176\u662F\u539F\u751F JavaScript \u4E2D\u53EF\u7528\u7684 <em>map</em> \uFF0C<em>filter</em> \u548C <em>reduce</em> \u3002</li><li>\u5982\u679C\u4F60\u8FD4\u56DE <code>null</code> \u800C\u4E0D\u662F JSX\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</li><li>\u7528\u66F4\u591A\u9879\u76EE\u6269\u5C55\u5217\u8868\uFF0C\u8BA9\u793A\u4F8B\u66F4\u771F\u5B9E\u3002</li><li>\u7EC3\u4E60\u5728 JSX \u4E2D\u4F7F\u7528\u4E0D\u540C\u7684 JavaScript \u8868\u8FBE\u5F0F\u3002</li></ul>`,28),c=[r];function t(i,o,b,A,C,u){return n(),a("div",null,c)}const y=s(e,[["render",t]]);export{d as __pageData,y as default};
