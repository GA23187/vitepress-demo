import{_ as s,o as a,c as n,a as e}from"./app.436197f7.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React\u4E2D\u7684\u7B2C\u4E09\u65B9\u5E93","slug":"react\u4E2D\u7684\u7B2C\u4E09\u65B9\u5E93","link":"#react\u4E2D\u7684\u7B2C\u4E09\u65B9\u5E93","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/third-party-libraries.md","lastUpdated":1677316569000}'),l={name:"road-to-react-chinese/react-modern/third-party-libraries.md"},p=e(`<h2 id="react\u4E2D\u7684\u7B2C\u4E09\u65B9\u5E93" tabindex="-1">React\u4E2D\u7684\u7B2C\u4E09\u65B9\u5E93 <a class="header-anchor" href="#react\u4E2D\u7684\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a></h2><p>\u6B64\u524D\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u539F\u751F\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684 fetch API\uFF0C\u5B8C\u6210\u5BF9 Hacker News API \u7684\u8BF7\u6C42\u3002\u7136\u800C\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u8FD9\u4E2A API\uFF0C\u7279\u522B\u662F\u4E00\u4E9B\u8001\u7248\u672C\u7684\u6D4F\u89C8\u5668\u3002\u53E6\u5916\uFF0C\u4E00\u65E6\u4F60\u5F00\u59CB\u5728<a href="https://en.wikipedia.org/wiki/Headless_browser" target="_blank" rel="noreferrer">\u65E0\u5934\u6D4F\u89C8\u5668\u73AF\u5883</a> \u4E2D\u6D4B\u8BD5\u4F60\u7684\u5E94\u7528\uFF0Cfetch API \u5C31\u4F1A\u51FA\u73B0\u95EE\u9898\u3002\u8FD9\u91CC\u6709\u51E0\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5728\u65E7\u7248\u672C\u6D4F\u89C8\u5668\u4E0A\u4F7F\u7528 fetch <a href="https://en.wikipedia.org/wiki/Polyfill_(programming)" target="_blank" rel="noreferrer">polyfills</a>)\u548C\u6D4B\u8BD5\uFF08\u540C\u6784\u5F0F fetch\uFF09\uFF0C\u4F46\u662F\u8FD9\u4E9B\u6982\u5FF5\u5BF9\u73B0\u5728\u6765\u8BF4\u6709\u70B9\u504F\u79BB\u4E3B\u9898\u3002</p><p>\u4E00\u4E2A\u66FF\u4EE3\u65B9\u6848\u662F\u7528\u4E00\u4E2A\u7A33\u5B9A\u7684\u5E93\u5982 <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a> \u6765\u66FF\u4EE3\u539F\u751F fetch API \uFF0C\u5B83\u6267\u884C\u5BF9\u8FDC\u7A0B API \u7684\u5F02\u6B65\u8BF7\u6C42\u3002\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5B66\u4E60\u600E\u6837\u4F7F\u7528 npm \u6CE8\u518C\u8868\u4E2D\u7684\u4E00\u4E2A\u5E93\u6765\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u7684 API\u3002\u9996\u5148\uFF0C\u5728\u547D\u4EE4\u884C\u5B89\u88C5 axios\uFF1A</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install axios</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\uFF0C\u5C06 axios \u5F15\u5165\u5230 App \u7EC4\u4EF6\u6587\u4EF6\u91CC\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528 <code>axios</code> \u4EE3\u66FF <code>fetch</code>\uFF0C\u5B83\u7684\u4F7F\u7528\u770B\u8D77\u6765\u4E0E\u539F\u751F fetch API \u51E0\u4E4E\u76F8\u540C\u3002\u5B83\u5C06 URL \u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A promise\u3002\u4F60\u4E0D\u9700\u8981\u5C06\u8FD4\u56DE\u7684\u7ED3\u679C\u8F6C\u6362\u6210 JSON\uFF0C\u56E0\u4E3A axios \u628A\u7ED3\u679C\u5305\u88C5\u6210\u4E86 JavaScript \u7684\u6570\u636E\u5BF9\u8C61\u3002\u4F60\u53EA\u662F\u9700\u8981\u786E\u4FDD\u4F60\u7684\u4EE3\u7801\u9002\u914D\u8FD4\u56DE\u7684\u6570\u636E\u7ED3\u6784\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleFetchStories = React.useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    axios</span></span>
<span class="line"><span style="color:#A6ACCD;">      .get(url)</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;STORIES_FETCH_SUCCESS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          payload: result.data.hits,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({ type: &#39;STORIES_FETCH_FAILURE&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [url]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5728\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u8C03\u7528 axios <code>axios.get()</code> \u7528\u4E8E\u4E00\u4E2A\u663E\u5F0F <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET" target="_blank" rel="noreferrer">HTTP GET \u8BF7\u6C42</a>\uFF0C\u8FD9\u4E5F\u662F\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u7684\u539F\u751F fetch API \u4E2D\u9ED8\u8BA4\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6 HTTP \u65B9\u6CD5\uFF0C\u6BD4\u5982\u4F7F\u7528 <code>axios.post()</code> \u53D1\u8D77 HTTP POST \u8BF7\u6C42\u3002</p><p>\u901A\u8FC7\u8FD9\u4E9B\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 axios \u662F\u4E00\u4E2A\u6267\u884C\u8FDC\u7A0B API \u8BF7\u6C42\u7684\u5F3A\u5927\u7684\u5E93\u3002\u5F53\u8BF7\u6C42\u53D8\u5F97\u590D\u6742\u7684\u65F6\u5019\u6216\u4E0E\u8001\u7248\u672C\u6D4F\u89C8\u5668\u4E00\u8D77\u5DE5\u4F5C\uFF0C\u6216\u8005\u7528\u4E8E\u6D4B\u8BD5\u65F6\uFF0C\u76F8\u6BD4\u539F\u751F fetch API\uFF0C \u6211\u66F4\u63A8\u8350\u4F7F\u7528 axios\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Third-Party-Libraries-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a></li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Explicit-Data-Fetching-with-React...hs/Third-Party-Libraries-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://www.robinwieruch.de/react-libraries" target="_blank" rel="noreferrer">React \u4E2D\u6D41\u884C\u7684\u5E93</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://www.robinwieruch.de/why-frameworks-matter" target="_blank" rel="noreferrer">\u4E3A\u4EC0\u4E48\u6846\u67B6\u91CD\u8981</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a></li></ul>`,15),r=[p];function t(i,c,o,b,A,d){return a(),n("div",null,r)}const h=s(l,[["render",t]]);export{C as __pageData,h as default};