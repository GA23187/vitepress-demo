import{_ as s,o as n,c as a,a as l}from"./app.a9f825fd.js";const p="/vitepress-demo/assets/last-searches.026efb9b.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u8BB0\u5F55","slug":"\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u8BB0\u5F55","link":"#\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u8BB0\u5F55","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern-advanced/remember-last-searches.md","lastUpdated":1676386809000}'),e={name:"road-to-react-chinese/react-modern-advanced/remember-last-searches.md"},r=l('<h2 id="\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u8BB0\u5F55" tabindex="-1">\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u8BB0\u5F55 <a class="header-anchor" href="#\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u8BB0\u5F55" aria-hidden="true">#</a></h2><p><strong>\u4EFB\u52A1\uFF1A</strong> \u8BB0\u4F4F\u6700\u8FD1\u4E94\u6B21\u7684\u641C\u7D22\u8BB0\u5F55\u7528\u6765\u8BBF\u95EE API\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u80FD\u5728\u641C\u7D22\u8BCD\u4E4B\u95F4\u5FEB\u901F\u79FB\u52A8\u7684\u6309\u94AE\u3002\u5F53\u70B9\u51FB\u6309\u94AE\u65F6\uFF0C\u5C06\u518D\u6B21\u83B7\u53D6\u641C\u7D22\u8BCD\u7684\u5185\u5BB9\u7ED3\u679C\u3002</p><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li>\u4E0D\u8981\u4E3A\u8FD9\u4E2A\u529F\u80FD\u4F7F\u7528\u65B0\u7684 state\u3002\u76F8\u53CD\uFF0C\u91CD\u7528 <code>url</code> state \u548C <code>setUrl</code> state \u66F4\u65B0\u51FD\u6570\u6765\u91CD\u65B0\u4ECE API \u83B7\u53D6\u5185\u5BB9\u3002\u5C06\u5B83\u4EEC\u9002\u914D\u4E3A <code>urls</code> \u72B6\u6001\uFF0C\u5E76\u4E14\u4F7F\u7528 <code>setUrls</code> \u8BBE\u7F6E <code>urls</code>\u3002<code>urls</code> \u4E2D\u7684\u6700\u540E\u4E00\u4E2A URL \u53EF\u4EE5\u7528\u6765\u83B7\u53D6\u6570\u636E\uFF0C\u5E76\u4E14 <code>urls</code> \u4E2D\u6700\u540E\u4E94\u4E2A URL \u53EF\u4EE5\u7528\u6765\u663E\u793A\u6309\u94AE\u3002</li></ul><p><img src="'+p+`" alt=""></p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5C06\u6240\u6709\u7684 <code>url</code> \u91CD\u6784\u5230\u4E00\u4E2A <code>urls</code> state \u4E2D\uFF0C\u540C\u65F6\u5C06 <code>setUrl</code> \u91CD\u6784\u4E3A <code>setUrls</code> state \u66F4\u65B0\u51FD\u6570\u3002\u4E0E\u5176\u4F7F\u7528\u5B57\u7B26\u4E32 <code>url</code> \u521D\u59CB\u5316 state\uFF0C\u5012\u4E0D\u5982\u628A\u5B83\u53D8\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u628A\u521D\u59CB\u7684 <code>url</code> \u4F5C\u4E3A\u5176\u552F\u4E00\u7684\u6761\u76EE\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [urls, setUrls] = React.useState([</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\${API_ENDPOINT}\${searchTerm}\`,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7B2C\u4E8C\uFF0C\u4F7F\u7528 <code>urls</code> \u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A <code>url</code> \u6761\u76EE\u6765\u83B7\u53D6\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u5F53\u524D <code>url</code> state\u3002\u5982\u679C <code>urls</code> \u4E2D\u65B0\u6DFB\u52A0\u4E86\u53E6\u4E00\u4E2A <code>url</code>\uFF0C\u5219\u5C31\u7528\u5B83\u6765\u83B7\u53D6\u6570\u636E\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleFetchStories = React.useCallback(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      const lastUrl = urls[urls.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">      const result = await axios.get(lastUrl);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: &#39;STORIES_FETCH_SUCCESS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        payload: result.data.hits,</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch {</span></span>
<span class="line"><span style="color:#A6ACCD;">      dispatchStories({ type: &#39;STORIES_FETCH_FAILURE&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [urls]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u7B2C\u4E09\uFF0C\u4E0D\u8981\u7528 state \u66F4\u65B0\u51FD\u6570\u5C06 <code>url</code> \u5B57\u7B26\u4E32\u50A8\u5B58\u4E3A state\uFF0C\u800C\u662F\u5C06\u65B0\u7684 <code>url</code> \u4E0E\u4E4B\u524D\u7684 <code>urls</code> \u6570\u7EC4\u5408\u5E76\u6210\u65B0\u7684 state\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchSubmit = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    const url = \`\${API_ENDPOINT}\${searchTerm}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrls(urls.concat(url));</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6BCF\u4E00\u6B21\u641C\u7D22\u65F6\uFF0C\u65B0\u7684 URL \u90FD\u4F1A\u50A8\u5B58\u5728\u6211\u4EEC\u7684 <code>urls</code> state \u4E2D\u3002\u63A5\u4E0B\u6765\uFF0C\u4E3A\u6700\u540E\u4E94\u4E2A URL \u4E2D\u6BCF\u4E2A URL \u6E32\u67D3\u4E00\u4E2A\u6309\u94AE\uFF0C\u6211\u4EEC\u5C06\u4E3A\u8FD9\u4E9B\u6309\u94AE\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u901A\u7528\u7684\u5904\u7406\u51FD\u6570\uFF0C\u5E76\u4E14\u6BCF\u6B21\u7ED9\u4E00\u4E2A\u7279\u5B9A\u7684\u5185\u8054\u51FD\u6570\u4F20\u9012\u4E00\u4E2A\u7279\u5B9A\u7684 <code>url</code>\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const getLastSearches = urls =&gt; urls.slice(-5);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleLastSearch = url =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // do something</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const lastSearches = getLastSearches(urls);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;SearchForm ... /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {lastSearches.map(url =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">          key={url}</span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; handleLastSearch(url)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {url}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ))}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u4E0D\u8981\u628A\u6309\u94AE\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u641C\u7D22\u7684 URL \u4F5C\u4E3A\u6309\u94AE\u7684\u6587\u672C\u5C55\u793A\u51FA\u6765\uFF0C\u800C\u662F\u7528\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u4EE3\u66FF API \u7684\u7AEF\u70B9\uFF0C\u53EA\u663E\u793A\u641C\u7D22\u8BCD\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const extractSearchTerm = url =&gt; url.replace(API_ENDPOINT, &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const getLastSearches = urls =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  urls.slice(-5).map(url =&gt; extractSearchTerm(url));</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const lastSearches = getLastSearches(urls);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {lastSearches.map(searchTerm =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          key={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; handleLastSearch(searchTerm)}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          {searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ))}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><code>getLastSearches</code> \u51FD\u6570\u76EE\u524D\u8FD4\u56DE\u7684\u662F\u641C\u7D22\u8BCD\u800C\u4E0D\u662F URL\u3002\u5B9E\u9645\u4E0A\uFF0C\u4F20\u9012\u7ED9\u5185\u8054\u51FD\u6570\u7684\u662F <code>searchTerm</code>\uFF0C\u800C\u4E0D\u662F <code>url</code>\u3002\u901A\u8FC7\u6620\u5C04\u5230 <code>getLastSearches</code> \u4E2D\u7684 <code>url</code> \u5217\u8868\uFF0C\u6211\u4EEC\u80FD\u5728\u6570\u7EC4\u7684 map \u65B9\u6CD5\u4E2D\u63D0\u53D6\u6BCF\u4E2A <code>url</code> \u7684\u641C\u7D22\u8BCD\u3002\u4E3A\u4E86\u66F4\u52A0\u7B80\u6D01\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const getLastSearches = urls =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  urls.slice(-5).map(extractSearchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u73B0\u5728\uFF0C\u56E0\u4E3A\u70B9\u51FB\u5176\u4E2D\u4E00\u4E2A\u6309\u94AE\u5E94\u8BE5\u89E6\u53D1\u4E00\u6B21\u65B0\u7684\u641C\u7D22\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u4E3A\u6BCF\u4E2A\u6309\u94AE\u4F7F\u7528\u7684\u65B0\u5904\u7406\u51FD\u6570\u63D0\u4F9B\u529F\u80FD\u3002\u7531\u4E8E\u6211\u4EEC\u4F7F\u7528 <code>urls</code> state \u6765\u83B7\u53D6\u6570\u636E\uFF0C\u5E76\u4E14\u6211\u4EEC\u77E5\u9053\u6700\u540E\u4E00\u4E2A URL \u603B\u662F\u7528\u6765\u83B7\u53D6\u6570\u636E\u7684\uFF0C\u6240\u4EE5\u5728 <code>urls</code> \u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 <code>url</code> \u6765\u89E6\u53D1\u53E6\u4E00\u6B21\u641C\u7D22\u8BF7\u6C42\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleLastSearch = searchTerm =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const url = \`\${API_ENDPOINT}\${searchTerm}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrls(urls.concat(url));</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u679C\u4F60\u5C06\u8FD9\u4E2A\u65B0\u7684\u5904\u7406\u51FD\u6570\u7684\u5B9E\u73B0\u903B\u8F91\u548C <code>handleSearchSubmit</code> \u5BF9\u6BD4\u4E00\u4E0B\uFF0C\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u4E00\u4E9B\u5171\u540C\u7684\u529F\u80FD\u3002\u5C06\u8FD9\u4E9B\u5171\u540C\u7684\u529F\u80FD\u63D0\u53D6\u5230\u4E00\u4E2A\u65B0\u7684\u5904\u7406\u51FD\u6570\u548C\u65B0\u63D0\u53D6\u7684\u5B9E\u7528\u5DE5\u5177\u51FD\u6570\u4E2D\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const getUrl = searchTerm =&gt; \`\${API_ENDPOINT}\${searchTerm}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchSubmit = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSearch(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleLastSearch = searchTerm =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSearch(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearch = searchTerm =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const url = getUrl(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrls(urls.concat(url));</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u65B0\u7684\u5B9E\u7528\u5DE5\u5177\u51FD\u6570\u53EF\u4EE5\u5728 App \u7EC4\u4EF6\u7684\u5176\u4ED6\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\u3002\u5982\u679C\u4F60\u63D0\u53D6\u7684\u529F\u80FD\u53EF\u4EE5\u88AB\u4E24\u5904\u4F7F\u7528\uFF0C\u90A3\u4E48\u4E00\u5B9A\u8981\u68C0\u67E5\u4E00\u4E0B\u5B83\u662F\u5426\u53EF\u4EE5\u88AB\u7B2C\u4E09\u65B9\u4F7F\u7528\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // important: still wraps the returned value in []</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [urls, setUrls] = React.useState([getUrl(searchTerm)]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BE5\u529F\u80FD\u5E94\u8BE5\u53EF\u4EE5\u5DE5\u4F5C\u4E86\uFF0C\u4F46\u5982\u679C\u540C\u4E00\u4E2A\u641C\u7D22\u8BCD\u88AB\u591A\u6B21\u4F7F\u7528\uFF0C\u5B83\u5C31\u4F1A\u51FA\u95EE\u9898\u4E86\uFF0C\u56E0\u4E3A <code>searchTerm</code> \u88AB\u4F5C\u4E3A <code>key</code> \u5C5E\u6027\u7528\u4E8E\u6BCF\u4E2A\u6309\u94AE\u5143\u7D20\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06 <code>key</code> \u4E0E\u6620\u5C04\u6570\u7EC4\u7684 <code>index</code> \u4E32\u8054\u8D77\u6765\uFF0C\u4F7F\u5F97 <code>key</code> \u66F4\u52A0\u5177\u4F53\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {lastSearches.map((searchTerm, index) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          key={searchTerm + index}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClick={() =&gt; handleLastSearch(searchTerm)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ))}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8FD9\u5E76\u4E0D\u662F\u5B8C\u7F8E\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u56E0\u4E3A <code>index</code> \u4E0D\u662F\u4E00\u4E2A\u7A33\u5B9A\u7684 key\uFF08\u5C24\u5176\u662F\u5F53\u5411\u5217\u8868\u4E2D\u6DFB\u52A0\u6761\u76EE\u65F6\uFF09\uFF1B\u7136\u800C\uFF0C\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\u5B83\u5E76\u6CA1\u6709\u88AB\u7834\u574F\u3002\u529F\u80FD\u73B0\u5728\u53EF\u4EE5\u8FD0\u884C\u4E86\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u4EFB\u52A1\u5BF9 UX \u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u6539\u8FDB\u3002</p><p><strong>\u66F4\u591A\u4EFB\u52A1\uFF1A</strong></p><ul><li>\uFF081\uFF09\u4EC5\u4EE5\u6309\u94AE\u5F62\u5F0F\u5C55\u793A\u4E4B\u524D\u7684\u4E94\u4E2A\u641C\u7D22\uFF0C\u800C\u5F53\u524D\u641C\u7D22\u4E0D\u9700\u8981\u5C55\u793A\u4E3A\u6309\u94AE\u5F62\u5F0F\u3002\u63D0\u793A\uFF1A\u9002\u914D <code>getLastSearches</code> \u51FD\u6570\u3002</li><li>\uFF082\uFF09\u4E0D\u8981\u663E\u793A\u91CD\u590D\u7684\u641C\u7D22\uFF0C\u641C\u7D22\u4E24\u6B21 &quot;React&quot; \u4E0D\u5E94\u8BE5\u4EA7\u751F\u4E24\u4E2A\u4E0D\u540C\u7684\u6309\u94AE\u3002\u63D0\u793A\uFF1A\u9002\u914D <code>getLastSearches</code> \u51FD\u6570\u3002</li><li>\uFF083\uFF09\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u6309\u94AE\u88AB\u70B9\u51FB\u4E86\uFF0C\u5219\u5C06 <code>SearchForm</code> \u7EC4\u4EF6\u7684\u8F93\u5165\u5B57\u6BB5\u7684\u503C\u8BBE\u7F6E\u4E3A\u6700\u540E\u4E00\u6B21\u641C\u7D22\u7684\u5185\u5BB9\u3002</li></ul><p>5 \u4E2A\u6E32\u67D3\u7684\u6309\u94AE\u6765\u81EA\u4E8E <code>getLastSearches</code> \u51FD\u6570\uFF0C\u5728\u8FD9\u4E2A\u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u53D6\u6570\u7EC4 <code>urls</code>\uFF0C\u5E76\u8FD4\u56DE\u5176\u4E2D\u7684\u6700\u540E 5 \u9879\u3002\u73B0\u5728\u6211\u4EEC\u5C06\u4FEE\u6539\u4E00\u4E0B\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8BA9\u5176\u8FD4\u56DE\u6700\u540E 6 \u9879\u800C\u4E0D\u662F 5 \u9879\u3002\u4E4B\u540E\uFF0C\u53EA\u6709 5 \u4E2A<em>\u4E4B\u524D\u7684</em>\u641C\u7D22\u7ED3\u679C\u4F1A\u4EE5\u6309\u94AE\u7684\u5F62\u5F0F\u5C55\u793A\u51FA\u6765\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const getLastSearches = urls =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  urls</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    .slice(-6)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .slice(0, -1)</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    .map(extractSearchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u76F8\u540C\u7684\u5185\u5BB9\u8FDE\u7EED\u641C\u7D22\u4E86\u591A\u6B21\uFF0C\u5C31\u4F1A\u51FA\u73B0\u91CD\u590D\u7684\u6309\u94AE\uFF0C\u8FD9\u5F88\u53EF\u80FD\u4E0D\u662F\u4F60\u60F3\u8981\u7684\u884C\u4E3A\u3002\u5982\u679C\u5C06\u8FDE\u7EED\u4E14\u76F8\u540C\u7684\u641C\u7D22\u5408\u5E76\u5230\u4E00\u4E2A\u6309\u94AE\u4E2D\uFF0C\u90A3\u5C31\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u4E86\u3002\u6211\u4EEC\u4E5F\u5C06\u5728\u8FD9\u4E2A\u51FD\u6570\u4E2D\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u5728\u5C06\u6570\u7EC4\u5206\u5272\u6210\u524D 5 \u6B21\u641C\u7D22\u5185\u5BB9\u4E4B\u524D\uFF0C\u5148\u5C06\u76F8\u540C\u7684\u641C\u7D22\u5185\u5BB9\u8FDB\u884C\u5206\u7EC4\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const getLastSearches = urls =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  urls</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    .reduce((result, url, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const searchTerm = extractSearchTerm(url);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (index === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result.concat(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      const previousSearchTerm = result[result.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (searchTerm === previousSearchTerm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result.concat(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, [])</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    .slice(-6)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .slice(0, -1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>reduce</code> \u51FD\u6570\u4EE5\u4E00\u4E2A\u7A7A\u6570\u7EC4\u4F5C\u4E3A\u5176 <code>result</code> \u5F00\u59CB\uFF0C\u7B2C\u4E00\u6B21\u5FAA\u73AF\u6211\u4EEC\u5C06\u4ECE\u7B2C\u4E00\u4E2A <code>url</code> \u4E2D\u63D0\u53D6 <code>searchTerm</code> \u5E76\u5408\u5E76\u5230 <code>result</code> \u4E2D\u3002\u6BCF\u4E00\u6B21\u63D0\u53D6\u7684 <code>searchTerm</code> \u90FD\u4F1A\u4E0E\u4E4B\u524D\u7684\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u4E4B\u524D\u7684\u641C\u7D22\u8BCD\u4E0E\u5F53\u524D\u7684\u4E0D\u540C\uFF0C\u5219\u5C06\u8FD9\u4E2A <code>searchTerm</code> \u6DFB\u52A0\u5230 <code>result</code> \u4E2D\u3002\u5982\u679C\u641C\u7D22\u8BCD\u76F8\u540C\uFF0C\u5219\u8FD4\u56DE <code>result</code> \u5E76\u4E14\u4E0D\u5411\u5176\u6DFB\u52A0\u4EFB\u4F55\u641C\u7D22\u8BCD\u3002</p><p>\u6700\u540E\uFF0C\u5982\u679C\u6700\u540E\u4E00\u4E2A\u641C\u7D22\u6309\u94AE\u88AB\u70B9\u51FB\u4E86\uFF0C<code>SearchForm</code> \u7684\u8F93\u5165\u5B57\u6BB5\u5E94\u8BE5\u8BBE\u7F6E\u4E3A\u65B0\u7684 <code>searchTerm</code>\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>SearchForm</code> \u7EC4\u4EF6\u4E2D\u7279\u5B9A\u503C\u7684 state \u66F4\u65B0\u51FD\u6570\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleLastSearch = searchTerm =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSearch(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6700\u540E\uFF0C\u5C06\u8BE5\u529F\u80FD\u7684\u65B0\u6E32\u67D3\u5185\u5BB9\u63D0\u53D6\u51FA\u6765\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u7EC4\u4EF6\uFF0C\u4EE5\u4FDD\u6301 App \u7EC4\u4EF6\u7684\u8F7B\u91CF\u7B80\u6D01\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const lastSearches = getLastSearches(urls);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;LastSearches</span></span>
<span class="line"><span style="color:#A6ACCD;">        lastSearches={lastSearches}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onLastSearch={handleLastSearch}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const LastSearches = ({ lastSearches, onLastSearch }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {lastSearches.map((searchTerm, index) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        key={searchTerm + index}</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; onLastSearch(searchTerm)}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u8FD9\u4E2A\u529F\u80FD\u5E76\u4E0D\u5BB9\u6613\u3002\u9700\u8981\u5F88\u591A React \u7684\u57FA\u7840\u77E5\u8BC6\uFF0C\u540C\u65F6\u4E5F\u9700\u8981\u5927\u91CF\u7684 JavaScript \u77E5\u8BC6\u6765\u5B8C\u6210\u5B83\u3002\u5982\u679C\u4F60\u5728\u81EA\u5DF1\u5B9E\u73B0\u5B83\u6216\u8005\u6309\u7167\u8BF4\u660E\u53BB\u505A\u65F6\u6CA1\u6709\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u90A3\u4E48\u4F60\u5C31\u5DF2\u7ECF\u505A\u7684\u5F88\u597D\u4E86\u3002\u5982\u679C\u4F60\u9047\u5230\u4E86\u8FD9\u6837\u6216\u90A3\u6837\u7684\u95EE\u9898\uFF0C\u4E5F\u4E0D\u7528\u592A\u8FC7\u62C5\u5FC3\uFF0C\u4E5F\u8BB8\u4F60\u53EF\u4EE5\u60F3\u51FA\u53E6\u4E00\u79CD\u89E3\u51B3\u65B9\u6CD5\uFF0C\u7ED3\u679C\u751A\u81F3\u53EF\u80FD\u6BD4\u6211\u5C55\u793A\u7684\u66F4\u52A0\u7B80\u5355\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Remember-Last-Searches" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a></li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Reverse-Sort...hs/Remember-Last-Searches?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a></li></ul>`,54),c=[r];function o(t,i,b,A,C,u){return n(),a("div",null,c)}const d=s(e,[["render",o]]);export{y as __pageData,d as default};
