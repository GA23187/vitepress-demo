import{_ as s,o as n,c as a,a as e}from"./app.ee052c02.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u83B7\u53D6\u6570\u636E","slug":"react-\u83B7\u53D6\u6570\u636E","link":"#react-\u83B7\u53D6\u6570\u636E","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/data-fetching.md","lastUpdated":1676383400000}'),l={name:"road-to-react-chinese/react-modern/data-fetching.md"},p=e(`<h2 id="react-\u83B7\u53D6\u6570\u636E" tabindex="-1">React \u83B7\u53D6\u6570\u636E <a class="header-anchor" href="#react-\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u76EE\u524D\u6B63\u5728\u83B7\u53D6\u6570\u636E\uFF0C\u4F46\u5B83\u4ECD\u7136\u662F\u6765\u81EA\u6211\u4EEC\u81EA\u5DF1\u7528 Promise \u8BBE\u7F6E\u7684\u5047\u6570\u636E\u3002\u5230\u73B0\u5728\u4E3A\u6B62\u5173\u4E8E\u5F02\u6B65 React \u548C\u9AD8\u7EA7 State \u7BA1\u7406\u7684\u8BFE\u7A0B\u90FD\u5728\u4E3A\u6211\u4EEC\u4ECE\u771F\u6B63\u7684\u7B2C\u4E09\u65B9 API \u4E2D\u83B7\u53D6\u6570\u636E\u505A\u51C6\u5907\u3002\u6211\u4EEC\u5C06\u4F7F\u7528\u53EF\u9760\u4E14\u4E30\u5BCC\u7684 <a href="https://hn.algolia.com/api" target="_blank" rel="noreferrer">Hacker News API</a> \u6765\u8BF7\u6C42\u6D41\u884C\u7684\u79D1\u6280\u65B0\u95FB\u3002</p><p>\u6211\u4EEC\u5C06\u76F4\u63A5\u4ECE API \u4E2D\u83B7\u53D6\u6570\u636E\uFF0C \u800C\u4E0D\u662F\u4F7F\u7528 <code>initialStories</code> \u6570\u7EC4\u548C <code>getAsyncStories</code> \u51FD\u6570(\u4F60\u53EF\u4EE5\u5220\u9664\u8FD9\u4E9B)\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// A</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const API_ENDPOINT = &#39;https://hn.algolia.com/api/v1/search?query=&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch(\`\${API_ENDPOINT}react\`) // B</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(response =&gt; response.json()) // C</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;STORIES_FETCH_SUCCESS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          payload: result.hits, // D</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({ type: &#39;STORIES_FETCH_FAILURE&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u9996\u5148\uFF0C<code>API_ENDPOINT</code> (A) \u7528\u4E8E\u83B7\u53D6\u70ED\u95E8\u79D1\u6280\u65B0\u95FB\u7684\u67D0\u4E2A\u67E5\u8BE2(\u641C\u7D22\u4E3B\u9898)\u3002\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u83B7\u53D6 React \u76F8\u5173\u7684\u65B0\u95FB\u3002\u5176\u6B21\uFF0C\u7528\u6D4F\u89C8\u5668\u539F\u751F\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="noreferrer">fetch API</a> \u6765\u6267\u884C\u8FD9\u4E2A\u8BF7\u6C42 (B), \u5BF9\u4E8E fetch API\uFF0C\u9700\u8981\u5C06\u8FD4\u56DE\u6570\u636E\u7FFB\u8BD1\u6210 JSON (C)\u3002\u6700\u540E\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u9075\u5FAA\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784 (D)\uFF0C \u6211\u4EEC\u5C06\u5176\u4F5C\u4E3A\u6709\u6548\u6570\u636E\u53D1\u9001\u7ED9\u6211\u4EEC\u7684\u7EC4\u4EF6 state\u3002</p><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="noreferrer">JavaScript \u7684\u6A21\u7248\u5B57\u7B26\u4E32</a> \u8FDB\u884C\u5B57\u7B26\u4E32\u63D2\u503C\u3002\u5728 JavaScript \u4E2D\u6CA1\u6709\u8FD9\u4E2A\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u5728\u5B57\u7B26\u4E32\u4E0A\u4F7F\u7528 + \u8FD0\u7B97\u7B26\u6765\u4EE3\u66FF\u3002</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const greeting = &#39;Hello&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// + operator</span></span>
<span class="line"><span style="color:#A6ACCD;">const welcome = greeting + &#39; React&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(welcome);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Hello React</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// template literals</span></span>
<span class="line"><span style="color:#A6ACCD;">const anotherWelcome = \`\${greeting} React\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(anotherWelcome);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Hello React</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u68C0\u67E5\u4F60\u7684\u6D4F\u89C8\u5668\uFF0C\u67E5\u770B\u4ECE Hacker News API \u4E2D\u83B7\u53D6\u7684\u521D\u59CB\u67E5\u8BE2\u7684\u76F8\u5173\u5185\u5BB9\u3002\u7531\u4E8E\u6211\u4EEC\u5BF9\u6837\u672C\u5185\u5BB9\u4F7F\u7528\u4E86\u76F8\u540C\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u9700\u8981\u6539\u53D8\u4EC0\u4E48\uFF0C\u7528\u641C\u7D22\u529F\u80FD\u83B7\u53D6\u6570\u636E\u540E\u4ECD\u7136\u53EF\u4EE5\u5BF9\u5B83\u4EEC\u8FDB\u884C\u8FC7\u6EE4\u3002\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u8282\u4E2D\u6539\u53D8\u8FD9\u4E2A\u884C\u4E3A\u3002\u5BF9\u4E8E App \u7EC4\u4EF6\u6765\u8BF4\uFF0C\u8FD9\u91CC\u6CA1\u6709\u592A\u591A\u7684\u6570\u636E\u83B7\u53D6\u9700\u8981\u5B9E\u73B0\uFF0C\u867D\u7136\u8FD9\u90FD\u662F\u5B66\u4E60\u5982\u4F55\u5728 React \u4E2D\u628A\u5F02\u6B65\u6570\u636E\u4F5C\u4E3A state \u7BA1\u7406\u7684\u4E00\u90E8\u5206\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Data-Fetching-with-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a></li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-Impossible-States...hs/Data-Fetching-with-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a></li><li>\u901A\u8BFB <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer">Hacker News</a> \u548C\u5B83\u7684 <a href="https://hn.algolia.com/api" target="_blank" rel="noreferrer">API</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E\u8FDE\u63A5\u5230\u8FDC\u7A0B API \u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="noreferrer">\u6D4F\u89C8\u5668\u539F\u751F fetch API</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="noreferrer">JavaScript \u6A21\u677F\u5B57\u7B26\u4E32</a>\u3002</li></ul>`,12),r=[p];function t(c,o,i,b,A,C){return n(),a("div",null,r)}const d=s(l,[["render",t]]);export{m as __pageData,d as default};
