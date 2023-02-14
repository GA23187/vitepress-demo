import{_ as s,o as n,c as a,a as e}from"./app.a9f825fd.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 React \u8FDB\u884C\u663E\u5F0F\u6570\u636E\u83B7\u53D6","slug":"\u4F7F\u7528-react-\u8FDB\u884C\u663E\u5F0F\u6570\u636E\u83B7\u53D6","link":"#\u4F7F\u7528-react-\u8FDB\u884C\u663E\u5F0F\u6570\u636E\u83B7\u53D6","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/explicit-data-fetching.md","lastUpdated":1676386809000}'),l={name:"road-to-react-chinese/react-modern/explicit-data-fetching.md"},p=e(`<h2 id="\u4F7F\u7528-react-\u8FDB\u884C\u663E\u5F0F\u6570\u636E\u83B7\u53D6" tabindex="-1">\u4F7F\u7528 React \u8FDB\u884C\u663E\u5F0F\u6570\u636E\u83B7\u53D6 <a class="header-anchor" href="#\u4F7F\u7528-react-\u8FDB\u884C\u663E\u5F0F\u6570\u636E\u83B7\u53D6" aria-hidden="true">#</a></h2><p>\u6BCF\u6B21\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u5185\u5BB9\u5C31\u91CD\u65B0\u83B7\u53D6\u6570\u636E\u4E0D\u662F\u6700\u4F73\u7684\u9009\u62E9\u3002\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528\u7684\u662F\u7B2C\u4E09\u65B9 API \u53BB\u83B7\u53D6\u6570\u636E\uFF0C\u9891\u7E41\u7684\u8C03\u7528\u53EF\u80FD\u5F15\u53D1 <a href="https://en.wikipedia.org/wiki/Rate_limiting" target="_blank" rel="noreferrer">\u9650\u901F</a>\uFF0C\u63A5\u53E3\u5C06\u8FD4\u56DE\u9519\u8BEF\u3002</p><p>\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u628A\u83B7\u53D6\u6570\u636E\u7684\u5B9E\u73B0\u65B9\u5F0F\u4ECE\u9690\u5F0F\u6539\u4E3A\u663E\u5F0F\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4EC5\u5728\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u624D\u91CD\u65B0\u83B7\u53D6\u6570\u636E\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A\u786E\u8BA4\u6309\u94AE\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;InputWithLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">        id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        isFocused</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        onInputChange={handleSearchInput}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        disabled={!searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={handleSearchSubmit}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Submit</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u7136\u540E\uFF0C\u76D1\u542C\u8F93\u5165\u6846\u3001\u6309\u94AE\u7684\u51FD\u6570\u4F1A\u5904\u7406\u76F8\u5E94\u903B\u8F91\u5E76\u66F4\u65B0\u7EC4\u4EF6\u72B6\u6001\u3002\u8F93\u5165\u6846\u7684\u5904\u7406\u51FD\u6570\u4ECD\u7136\u4F1A\u7528\u6765\u66F4\u65B0 <code>searchTerm</code>\uFF0C\u6309\u94AE\u7684\u5904\u7406\u51FD\u6570\u4F1A\u7EC4\u88C5 <code>API_ENDPOINT</code> \u548C <em>\u6700\u65B0\u7684</em> <code>searchTerm</code> \u5E76\u66F4\u65B0\u5230 <code>url</code> \u72B6\u6001\u4E2D\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = useSemiPersistentState(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;search&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;React&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [url, setUrl] = React.useState(</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\${API_ENDPOINT}\${searchTerm}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchInput = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchSubmit = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrl(\`\${API_ENDPOINT}\${searchTerm}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4E4B\u540E\uFF0C\u5C06\u6BCF\u6B21\u56E0\u8F93\u5165\u6846\u503C\u6539\u53D8 <code>searchTerm</code>(<code>url</code>) \u800C\u5BFC\u81F4\u7684\u6570\u636E\u8BF7\u6C42\uFF0C\u6539\u4E3A\u6BCF\u6B21\u7528\u6237\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u6765\u89E6\u53D1\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleFetchStories = React.useCallback(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch(url)</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  }, [url]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleFetchStories();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [handleFetchStories]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u4E4B\u524D\u7684 <code>searchTerm</code> \u6709\u4E24\u4E2A\u7528\u9014\uFF1A\u66F4\u65B0\uFF08\u5B58\u50A8\uFF09\u8F93\u5165\u6846\u7684\u503C\u548C\u89E6\u53D1\u83B7\u53D6\u6570\u636E\uFF0C\u73B0\u5728\u5B83\u4EC5\u7528\u4E8E\u66F4\u65B0\uFF08\u5B58\u50A8\uFF09\u8F93\u5165\u6846\u7684\u503C\u3002\u73B0\u5728\u5F53\u7528\u6237\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\uFF0C<code>url</code> \u72B6\u6001\u4F1A\u88AB\u66F4\u65B0\u5E76\u5F15\u8D77\u76F8\u5E94\u7684\u526F\u4F5C\u7528\u4EE5\u83B7\u53D6\u65B0\u7684\u6570\u636E\u3002</p><blockquote><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3></blockquote><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Explicit-Data-Fetching-with-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>.</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Memoized-Handler-in-React...hs/Explicit-Data-Fetching-with-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>.</li><li>\u4E3A\u4EC0\u4E48 <code>url</code> \u7684\u72B6\u6001\u7528 <code>useState</code> \u800C\u4E0D\u662F <code>useSemiPersistentState</code> \u6765\u7BA1\u7406\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u5728 <code>handleFetchStories</code> \u51FD\u6570\u4E2D\u4E0D\u518D\u68C0\u67E5\u7A7A\u7684 <code>searchTerm</code>\uFF1F</li></ul>`,14),r=[p];function c(t,o,i,b,A,C){return n(),a("div",null,r)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
