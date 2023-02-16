import{_ as s,o as n,c as a,a as e}from"./app.b476fd3b.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u4E2D Memoized \u51FD\u6570\uFF08\u9AD8\u7EA7\uFF09","slug":"react-\u4E2D-memoized-\u51FD\u6570\uFF08\u9AD8\u7EA7\uFF09","link":"#react-\u4E2D-memoized-\u51FD\u6570\uFF08\u9AD8\u7EA7\uFF09","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/memoized-handler.md","lastUpdated":1676558697000}'),l={name:"road-to-react-chinese/react-modern/memoized-handler.md"},p=e(`<h2 id="react-\u4E2D-memoized-\u51FD\u6570\uFF08\u9AD8\u7EA7\uFF09" tabindex="-1">React \u4E2D Memoized \u51FD\u6570\uFF08\u9AD8\u7EA7\uFF09 <a class="header-anchor" href="#react-\u4E2D-memoized-\u51FD\u6570\uFF08\u9AD8\u7EA7\uFF09" aria-hidden="true">#</a></h2><p>\u524D\u4E00\u8282\u6211\u4EEC\u8BB2\u4E86\u5904\u7406\u51FD\u6570\u3001\u56DE\u8C03\u51FD\u6570\u4EE5\u53CA\u5185\u8054\u51FD\u6570\u3002\u73B0\u5728\u6211\u4EEC\u5C06\u4ECB\u7ECD<strong>memoized \u5904\u7406\u51FD\u6570</strong>\uFF0C\u5B83\u53EF\u4EE5\u88AB\u7528\u4E8E\u5904\u7406\u51FD\u6570\u548C\u56DE\u8C03\u51FD\u6570\u7684\u6700\u9876\u5C42\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u628A\u6240\u6709\u7684\u6570\u636E\u8BF7\u6C42\u7684\u903B\u8F91\u79FB\u52A8\u81F3\u526F\u4F5C\u7528\u5916\u90E8\u7684\u4E00\u4E2A\u5355\u72EC\u7684\u51FD\u6570\u4E2D\uFF08A\uFF09\uFF1B\u7136\u540E\u5C06\u5176\u7528 <code>useCallback</code> Hook \u5305\u88F9\uFF08B\uFF09\uFF1B\u5E76\u4E14\u5728 <code>useEffect</code> Hook \u4E2D\u8C03\u7528\u5B83\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // A</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleFetchStories = React.useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!searchTerm) return;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch(\`\${API_ENDPOINT}\${searchTerm}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(response =&gt; response.json())</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;STORIES_FETCH_SUCCESS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          payload: result.hits,</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({ type: &#39;STORIES_FETCH_FAILURE&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [searchTerm]); // E</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleFetchStories(); // C</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [handleFetchStories]); // D</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u5E94\u7528\u7684\u884C\u4E3A\u4E0E\u4E4B\u524D\u4E00\u81F4\uFF0C\u53EA\u662F\u91CD\u6784\u4E86\u4E00\u4E0B\u5B9E\u73B0\u903B\u8F91\u3002\u4E0E\u5728\u526F\u4F5C\u7528\u4E2D\u4F7F\u7528\u533F\u540D\u51FD\u6570\u8FDB\u884C\u8BF7\u6C42\u6570\u636E\u76F8\u6BD4\uFF0C\u6211\u4EEC\u5C06\u5176\u91CD\u6784\u6210\u4E86\u4E00\u4E2A\u5BF9\u5E94\u7528\u6765\u8BF4\u66F4\u53EF\u7528\u7684\u51FD\u6570\u3002</p><p>\u8BA9\u6211\u4EEC\u4E00\u8D77\u6765\u63A2\u8BA8\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u5728\u8FD9\u513F\u9700\u8981 React \u7684 <code>useCallback</code> Hook\u3002\u6BCF\u5F53\u5176\u4F9D\u8D56\u6570\u7EC4\uFF08E\uFF09\u6539\u53D8\u65F6\u8FD9\u4E2A Hook \u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A memoized \u51FD\u6570\u3002\u7ED3\u679C\uFF0C\u56E0\u4E3A <code>useEffect</code> Hook \u4F9D\u8D56\u4E8E\u65B0\u7684\u51FD\u6570\uFF08D\uFF09\u6240\u4EE5\u5B83\u4F1A\u518D\u6B21\u8FD0\u884C\uFF08C\uFF09\uFF1A</p><p title="Visualization,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1. change: searchTerm</span></span>
<span class="line"><span style="color:#A6ACCD;">2. implicit change: handleFetchStories</span></span>
<span class="line"><span style="color:#A6ACCD;">3. run: side-effect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u6211\u4EEC\u6CA1\u6709\u4F7F\u7528 <code>useCallback</code> Hook \u521B\u5EFA memoized \u51FD\u6570\u7684\u8BDD\uFF0C\u6BCF\u5F53\u6709\u4E00\u4E2A App \u7EC4\u4EF6\u6E32\u67D3\u65F6\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>handleFetchStories</code> \u65B9\u6CD5\u3002<code>handleFetchStories</code> \u65B9\u6CD5\u6BCF\u6B21\u90FD\u4F1A\u88AB\u521B\u5EFA\uFF0C\u5E76\u4E14\u4F1A\u5728 <code>useEffect</code> Hook \u4E2D\u6267\u884C\u83B7\u53D6\u6570\u636E\uFF0C\u968F\u540E\u83B7\u53D6\u5230\u7684\u6570\u636E\u4F1A\u88AB\u5B58\u5728\u7EC4\u4EF6\u7684 state \u4E2D\u3002\u56E0\u4E3A\u7EC4\u4EF6\u7684 state \u6539\u53D8\u4E86\uFF0C\u6240\u4EE5\u7EC4\u4EF6\u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\u5E76\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>handleFetchStories</code> \u65B9\u6CD5\u3002\u526F\u4F5C\u7528\u51FD\u6570\u4F1A\u88AB\u89E6\u53D1\u518D\u6B21\u83B7\u53D6\u6570\u636E\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u4F1A\u9677\u5165\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u4E2D\uFF1A</p><p title="Visualization,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1. define: handleFetchStories</span></span>
<span class="line"><span style="color:#A6ACCD;">2. run: side-effect</span></span>
<span class="line"><span style="color:#A6ACCD;">3. update: state</span></span>
<span class="line"><span style="color:#A6ACCD;">4. re-render: component</span></span>
<span class="line"><span style="color:#A6ACCD;">5. re-define: handleFetchStories</span></span>
<span class="line"><span style="color:#A6ACCD;">6. run: side-effect</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EA\u6709\u5F53\u641C\u7D22\u5185\u5BB9\u6539\u53D8\u65F6 <code>useCallback</code> Hook \u624D\u4F1A\u66F4\u6539\u51FD\u6570\u3002\u90A3\u662F\u5F53\u6211\u4EEC\u60F3\u89E6\u53D1\u91CD\u65B0\u83B7\u53D6\u6570\u636E\u65F6\uFF0C\u56E0\u4E3A\u8F93\u5165\u5B57\u6BB5\u4E2D\u6709\u65B0\u7684\u8F93\u5165\uFF0C\u5E76\u4E14\u6211\u4EEC\u5E0C\u671B\u770B\u5230\u5217\u8868\u4E2D\u5C55\u793A\u65B0\u7684\u6570\u636E\u3002</p><p>\u901A\u8FC7\u5C06\u83B7\u53D6\u6570\u636E\u7684\u51FD\u6570\u79FB\u52A8\u5230 <code>useEffect</code> Hook \u5916\uFF0C\u8BA9\u5B83\u53EF\u4EE5\u5728\u5E94\u7528\u7684\u5176\u4ED6\u90E8\u5206\u590D\u7528\u3002\u6211\u4EEC\u6682\u65F6\u4E0D\u4F1A\u4F7F\u7528\u5B83\uFF0C\u4F46\u8FD9\u662F\u7406\u89E3 <code>useCallback</code> Hook \u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u73B0\u5728\u5F53 <code>searchTerm</code> \u6539\u53D8\u65F6\uFF0C <code>useEffect</code> Hook \u5C06\u4F1A\u8FD0\u884C\uFF0C\u56E0\u4E3A\u6BCF\u6B21 <code>searchTerm</code> \u66F4\u6539\u65F6\u90FD\u4F1A\u91CD\u65B0\u5B9A\u4E49 <code>handleFetchStories</code>\u3002\u56E0\u4E3A <code>useEffect</code> Hook \u4F9D\u8D56\u4E8E <code>handleFetchStories</code>\uFF0C\u6240\u4EE5\u83B7\u53D6\u6570\u636E\u7684\u526F\u4F5C\u7528\u4F1A\u518D\u6B21\u8FD0\u884C\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Memoized-Handler-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Data-Re-Fetching-in-React...hs/Memoized-Handler-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://reactjs.org/docs/hooks-reference.html#usecallback" target="_blank" rel="noreferrer">React \u7684 useCallback Hook</a>\u3002</li></ul>`,15),c=[p];function r(o,t,i,d,b,C){return n(),a("div",null,c)}const m=s(l,[["render",r]]);export{A as __pageData,m as default};