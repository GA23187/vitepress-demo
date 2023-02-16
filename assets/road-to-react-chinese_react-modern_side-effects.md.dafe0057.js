import{_ as s,o as n,c as a,a as e}from"./app.b476fd3b.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u526F\u4F5C\u7528","slug":"react-\u526F\u4F5C\u7528","link":"#react-\u526F\u4F5C\u7528","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/side-effects.md","lastUpdated":1676558697000}'),l={name:"road-to-react-chinese/react-modern/side-effects.md"},p=e(`<h2 id="react-\u526F\u4F5C\u7528" tabindex="-1">React \u526F\u4F5C\u7528 <a class="header-anchor" href="#react-\u526F\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8981\u7ED9 Search \u7EC4\u4EF6\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u529F\u80FD\uFF0C\u8BA9 Search \u7EC4\u4EF6\u8BB0\u4F4F\u6700\u8FD1\u4E00\u6B21\u641C\u7D22\u64CD\u4F5C\uFF0C\u8FD9\u6837\u6BCF\u6B21\u91CD\u542F\u5E94\u7528\u4E4B\u540E\uFF0C\u5E94\u7528\u5C31\u4F1A\u5728\u6D4F\u89C8\u5668\u91CC\u628A\u5B83\u6253\u5F00\u3002</p><p>\u9996\u5148\uFF0C\u7528\u6D4F\u89C8\u5668\u7684\u672C\u5730\u5B58\u50A8\u6765\u5B58\u50A8 <code>searchTerm</code> \u548C\u5B83\u7684\u6807\u8BC6\u7B26\u3002\u7136\u540E\uFF0C\u7528\u5B58\u50A8\u7684\u503C\uFF0C\u5982\u679C\u5B58\u5728\u7684\u8BDD\uFF0C\u4F5C\u4E3A <code>searchTerm</code> \u7684\u521D\u59CB state\u3002\u5426\u5219\u5C31\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u4F7F\u7528\u6211\u4EEC\u7684\u521D\u59CB state\uFF08\u8FD9\u91CC\u6307 &quot;React&quot; \uFF09\u4F5C\u4E3A\u9ED8\u8BA4\u7684\u521D\u59CB\u503C\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> const [searchTerm, setSearchTerm] = React.useState(</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">   localStorage.getItem(&#39;search&#39;) || &#39;React&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"> );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> const handleSearch = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">   localStorage.setItem(&#39;search&#39;, event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"> };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5F53\u7528\u6237\u4F7F\u7528\u8F93\u5165\u6846\u7136\u540E\u5237\u65B0\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u5E94\u8BE5\u53EF\u4EE5\u8BB0\u4F4F\u6700\u540E\u4E00\u4E2A\u641C\u7D22\u9879\u3002\u5728 React \u91CC\u4F7F\u7528\u672C\u5730\u5B58\u50A8\u53EF\u4EE5\u88AB\u770B\u4F5C\u662F\u4E00\u79CD<strong>\u526F\u4F5C\u7528</strong>\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8DE8\u51FA\u4E86 React \u7684\u9886\u57DF\u53BB\u548C\u6D4F\u89C8\u5668\u7684 API \u4EA7\u751F\u4E86\u4E92\u52A8\u3002</p><p>\u4E0D\u8FC7\u8FD9\u91CC\u8FD8\u6709\u4E2A\u95EE\u9898\u3002\u5904\u7406\u51FD\u6570\u5E94\u8BE5\u53EA\u5173\u5FC3\u5982\u4F55\u66F4\u65B0 state\uFF0C\u4F46\u5B83\u73B0\u5728\u8FD8\u6709\u4E00\u4E2A\u526F\u4F5C\u7528\u3002\u5982\u679C\u6211\u4EEC\u5728\u5E94\u7528\u7684\u5176\u4ED6\u5730\u65B9\u8C03\u7528 <code>setSearchTerm</code> \u5C31\u53EF\u80FD\u4F1A\u7834\u574F\u5DF2\u6709\u529F\u80FD\uFF0C\u56E0\u4E3A\u65E0\u6CD5\u786E\u5B9A\u672C\u5730\u7F13\u5B58\u662F\u5426\u4E5F\u4F1A\u88AB\u66F4\u65B0\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u628A\u5BF9\u526F\u4F5C\u7528\u7684\u5904\u7406\u56FA\u5B9A\u5728\u67D0\u4E2A\u5730\u65B9\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u8FD9\u91CC\u5C06\u5728\u6BCF\u6B21 <code>searchTerm</code> \u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u7528\u5230 <strong>React \u7684 useEffect Hook</strong> \u6765\u89E6\u53D1\u526F\u4F5C\u7528\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> const [searchTerm, setSearchTerm] = React.useState(</span></span>
<span class="line"><span style="color:#A6ACCD;">   localStorage.getItem(&#39;search&#39;) || &#39;React&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"> React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   localStorage.setItem(&#39;search&#39;, searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"> }, [searchTerm]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"> const handleSearch = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"> };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>React \u7684 useEffect Hook \u9700\u8981\u4E24\u4E2A\u53C2\u6570\uFF1A\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u4F1A\u4EA7\u751F\u526F\u4F5C\u7528\u7684\u51FD\u6570\u3002\u5728\u6211\u4EEC\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u526F\u4F5C\u7528\u662F\u6307\u5F53\u7528\u6237\u8F93\u5165\u641C\u7D22\u8BCD <code>searchTerm</code> \u5E76\u5B58\u8FDB\u6D4F\u89C8\u5668\u7684\u672C\u5730\u5B58\u50A8\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6240\u4F9D\u8D56\u7684\u53D8\u91CF\u6570\u7EC4\u3002\u5982\u679C\u4EFB\u4F55\u4E00\u4E2A\u4F9D\u8D56\u7684\u53D8\u91CF\u53D1\u751F\u53D8\u5316\uFF0C\u5305\u542B\u526F\u4F5C\u7528\u7684\u8FD9\u4E2A\u51FD\u6570\u5C31\u4F1A\u88AB\u8C03\u7528\u3002\u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4\uFF0C\u6BCF\u6B21 <code>searchTerm</code> \u6539\u53D8\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF1B\u5F53\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u5B83\u4E5F\u4F1A\u88AB\u521D\u59CB\u5316\u8C03\u7528\u3002</p><p>\u5982\u679C useEffect \u7684\u4F9D\u8D56\u6570\u7EC4\u662F\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7BA1\u7406\u526F\u4F5C\u7528\u7684\u51FD\u6570\u53EA\u4F1A\u88AB\u6267\u884C\u4E00\u6B21\uFF0C\u4E5F\u5C31\u662F\u5728\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u6E32\u67D3\u4E4B\u540E\u3002\u8FD9\u4E2A hook \u4F7F\u6211\u4EEC\u53EF\u4EE5\u6709\u9009\u62E9\u6027\u5730\u4F7F\u7528 React \u7684\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u3002\u5B83\u4F1A\u5728\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u6302\u8F7D\u7684\u65F6\u5019\u88AB\u89E6\u53D1\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5B83\u7684\u4F9D\u8D56\u66F4\u65B0\u65F6\u88AB\u89E6\u53D1\u3002</p><p>\u4F7F\u7528 React \u7684 <code>useEffect</code> \u800C\u4E0D\u662F\u5904\u7406\u51FD\u6570\u6765\u7BA1\u7406\u526F\u4F5C\u7528\uFF0C\u4F1A\u8BA9\u6211\u4EEC\u7684\u5E94\u7528\u66F4\u52A0\u5065\u58EE\u3002\u65E0\u8BBA<em>\u4F55\u65F6\u4F55\u5730</em> \u4F7F\u7528 <code>setSearchTerm</code> \u66F4\u65B0 <code>searchTerm</code>\uFF0C\u672C\u5730\u5B58\u50A8\u90FD\u4F1A\u540C\u6B65\u66F4\u65B0\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-Side-Effects" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Props-Handling...hs/React-Side-Effects?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E React \u7684 useEffect Hook \u7684\u6587\u7AE0\uFF1A(<a href="https://reactjs.org/docs/hooks-effect.html" target="_blank" rel="noreferrer">0</a>, <a href="https://reactjs.org/docs/hooks-reference.html#useeffect" target="_blank" rel="noreferrer">1</a>)\u3002</li><li>\u5728\u7B2C\u4E00\u4E2A\u51FD\u6570\u53C2\u6570\u91CC\u4F7F\u7528 <code>console.log()</code> \u6765\u6D4B\u8BD5 React useEffect Hook \u7684\u4F9D\u8D56\u6570\u7EC4\u3002\u4E5F\u770B\u4E00\u4E0B\u4F9D\u8D56\u6570\u7EC4\u4E3A\u7A7A\u7684\u60C5\u51B5\u4E0B\uFF0C\u65E5\u5FD7\u662F\u4EC0\u4E48\u6837\u7684\u3002</li></ul>`,14),r=[p];function c(t,o,i,b,A,u){return n(),a("div",null,r)}const m=s(l,[["render",c]]);export{d as __pageData,m as default};