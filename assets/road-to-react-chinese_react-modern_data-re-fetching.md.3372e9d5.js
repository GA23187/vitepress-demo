import{_ as s,o as n,c as a,a as e}from"./app.b476fd3b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u91CD\u65B0\u83B7\u53D6\u6570\u636E","slug":"react-\u91CD\u65B0\u83B7\u53D6\u6570\u636E","link":"#react-\u91CD\u65B0\u83B7\u53D6\u6570\u636E","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/data-re-fetching.md","lastUpdated":1676558697000}'),p={name:"road-to-react-chinese/react-modern/data-re-fetching.md"},l=e(`<h2 id="react-\u91CD\u65B0\u83B7\u53D6\u6570\u636E" tabindex="-1">React \u91CD\u65B0\u83B7\u53D6\u6570\u636E <a class="header-anchor" href="#react-\u91CD\u65B0\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a></h2><p>\u81F3\u6B64\uFF0CApp \u7EC4\u4EF6\u4F7F\u7528\u9884\u5B9A\u4E49\u7684\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u4E86\u4E00\u6B21 stories \u5217\u8868\u3002\u8FD9\u4E4B\u540E\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u641C\u7D22 stories\u3002\u73B0\u5728\u6211\u4EEC\u5C06\u628A\u8FD9\u4E2A\u529F\u80FD\u4ECE\u5BA2\u6237\u7AEF\u79FB\u5230\u670D\u52A1\u7AEF\uFF0C\u7528\u5B9E\u9645\u7684 <code>searchTerm</code> \u4F5C\u4E3A\u52A8\u6001\u67E5\u8BE2\u6761\u4EF6\u6765\u8BF7\u6C42 API\u3002</p><p>\u9996\u5148\uFF0C\u79FB\u9664 <code>searchedStories</code>\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5C06\u901A\u8FC7 API \u641C\u7D22\u83B7\u53D6 stories \u3002\u53EA\u4F20\u9012\u5E38\u89C4\u7684 stories \u7ED9 List \u7EC4\u4EF6\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;List list={stories.data} onRemoveItem={handleRemoveStory} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528\u7EC4\u4EF6 state \u4E2D\u5B9E\u9645\u7684 <code>searchTerm</code>\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u90A3\u6837\u4F7F\u7528\u786C\u7F16\u7801\u4F5C\u4E3A\u641C\u7D22\u5173\u952E\u8BCD\u3002\u5982\u679C <code>searchTerm</code> \u662F\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5219\u4EC0\u4E48\u90FD\u4E0D\u505A\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (searchTerm === &#39;&#39;) return;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch(\`\${API_ENDPOINT}\${searchTerm}\`)</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u73B0\u5728\u6309\u7167\u641C\u7D22\u5173\u952E\u8BCD\u521D\u59CB\u5316\u641C\u7D22\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u6570\u636E\u7684\u91CD\u65B0\u83B7\u53D6\u3002\u5982\u679C <code>searchTerm</code> \u6539\u53D8\uFF0C\u518D\u6B21\u6267\u884C\u83B7\u53D6\u6570\u636E\u7684\u526F\u4F5C\u7528\u51FD\u6570\u3002\u5982\u679C <code>searchTerm</code> \u6CA1\u6709\u5C55\u793A\uFF08\u5982 null\uFF0C\u7A7A\u5B57\u7B26\u4E32\uFF0Cundefined)\uFF0C\u5219\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF08\u4F5C\u4E3A\u4E00\u79CD\u66F4\u666E\u904D\u7684\u72B6\u51B5\uFF09\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!searchTerm) return;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  }, [searchTerm]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u6211\u4EEC\u5C06\u8BE5\u529F\u80FD\u4ECE\u5BA2\u6237\u7AEF\u641C\u7D22\u6539\u4E3A\u4E86\u670D\u52A1\u7AEF\u641C\u7D22\u3002\u4F7F\u7528 <code>searchTerm</code> \u83B7\u53D6\u4E00\u7EC4\u88AB\u670D\u52A1\u7AEF\u7B5B\u9009\u7684\u5217\u8868\uFF0C\u800C\u4E0D\u662F\u5728\u5BA2\u6237\u7AEF\u7B5B\u9009\u9884\u5148\u5B9A\u4E49\u7684\u5217\u8868\u3002\u670D\u52A1\u7AEF\u7684\u641C\u7D22\u4E0D\u4EC5\u53D1\u751F\u5728\u521D\u59CB\u6570\u636E\u83B7\u53D6\u65F6\uFF0C\u540C\u65F6\u4E5F\u5728 <code>searchTerm</code> \u6539\u53D8\u65F6\u83B7\u53D6\u6570\u636E\u3002\u8BE5\u529F\u80FD\u73B0\u5728\u5B8C\u5168\u5728\u670D\u52A1\u7AEF\u5B8C\u6210\u3002</p><p>\u6BCF\u6B21\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u5185\u5BB9\u5C31\u91CD\u65B0\u83B7\u53D6\u4E00\u6B21\u6570\u636E\u5E76\u4E0D\u662F\u6700\u4F73\u65B9\u6848\uFF0C\u8FD9\u4E00\u70B9\u6211\u4EEC\u5C06\u5728\u7A0D\u540E\u4FEE\u590D\u3002\u56E0\u4E3A\u8FD9\u79CD\u5B9E\u73B0\u4F1A\u7ED9 API \u9020\u6210\u538B\u529B\uFF0C\u5982\u679C\u4F60\u53D1\u8D77\u592A\u591A\u6B21\u7684\u8BF7\u6C42\uFF0C\u5219\u53EF\u80FD\u4F1A\u53D1\u751F\u4E00\u4E9B\u9519\u8BEF\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Data-Re-Fetching-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>.</li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Data-Fetching-with-React...hs/Data-Re-Fetching-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li></ul>`,15),r=[l];function c(t,o,i,b,A,C){return n(),a("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
