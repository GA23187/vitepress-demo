import{_ as s,o as n,c as a,a as p}from"./app.436197f7.js";const l="/vitepress-demo/assets/paginated-list.394ff4a6.png",e="/vitepress-demo/assets/pagination.84c9ae9e.png",r="/vitepress-demo/assets/infinite-pagination.10284e5a.png",c="/vitepress-demo/assets/concat.e61cc3e7.png",o="/vitepress-demo/assets/flicker.57fb6c7f.png",h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5206\u9875\u67E5\u8BE2","slug":"\u5206\u9875\u67E5\u8BE2","link":"#\u5206\u9875\u67E5\u8BE2","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern-advanced/paginated-fetch.md","lastUpdated":1677316569000}'),t={name:"road-to-react-chinese/react-modern-advanced/paginated-fetch.md"},i=p('<h2 id="\u5206\u9875\u67E5\u8BE2" tabindex="-1">\u5206\u9875\u67E5\u8BE2 <a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 Hacker News API \u641C\u7D22\u70ED\u95E8\u6545\u4E8B\u53EA\u662F\u8FC8\u5411\u5168\u529F\u80FD\u641C\u7D22\u5F15\u64CE\u7684\u4E00\u6B65\uFF0C\u8FD8\u6709\u5F88\u591A\u65B9\u6CD5\u53EF\u4EE5\u5BF9\u641C\u7D22\u8FDB\u884C\u5FAE\u8C03\u3002\u4ED4\u7EC6\u770B\u770B\u6570\u636E\u7ED3\u6784\uFF0C\u89C2\u5BDF <a href="https://hn.algolia.com/api" target="_blank" rel="noreferrer">Hacker News API</a> \u5982\u4F55\u8FD4\u56DE\u7684\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A <code>hits</code> \u5217\u8868\u3002</p><p>\u5177\u4F53\u6765\u8BF4\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5206\u9875\u5217\u8868\u3002page \u5C5E\u6027\uFF0C\u5728\u7B2C\u4E00\u4E2A\u54CD\u5E94\u4E2D\u662F <code>0</code>\uFF0C\u53EF\u4EE5\u7528\u6765\u83B7\u53D6\u66F4\u591A\u7684\u5206\u9875\u5217\u8868\u4F5C\u4E3A\u7ED3\u679C\u3002\u4F60\u53EA\u9700\u8981\u5C06\u4E0B\u4E00\u4E2A\u6709\u76F8\u540C\u641C\u7D22\u8BCD\u7684 page \u4F20\u9012\u7ED9 API\u3002</p><p><img src="'+l+'" alt=""></p><p>\u4E0B\u9762\u5C55\u793A\u4E86\u5982\u4F55\u5229\u7528 Hacker News \u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u5206\u9875\u83B7\u53D6\u3002\u5982\u679C\u4F60\u5DF2\u7ECF\u4E60\u60EF\u4E86\u5176\u4ED6\u5E94\u7528\u7A0B\u5E8F\u7684<strong>\u5206\u9875</strong>\uFF0C\u4F60\u7684\u8111\u6D77\u4E2D\u53EF\u80FD\u4F1A\u6709\u4E00\u6392\u4ECE 1-10 \u7684\u6309\u94AE--\u5F53\u524D\u9009\u4E2D\u7684\u9875\u9762\u88AB\u9AD8\u4EAE\u663E\u793A\u4E3A 1-[3]-10\uFF0C\u70B9\u51FB\u5176\u4E2D\u7684\u4E00\u4E2A\u6309\u94AE\u5C31\u4F1A\u83B7\u53D6\u5E76\u663E\u793A\u8FD9\u4E2A\u6570\u636E\u5B50\u96C6\u3002</p><p><img src="'+e+'" alt=""></p><p>\u76F8\u53CD\uFF0C\u6211\u4EEC\u5C06\u628A\u8BE5\u529F\u80FD\u5B9E\u73B0\u4E3A<strong>\u65E0\u9650\u5206\u9875</strong>\u3002\u6211\u4EEC\u4E0D\u4F1A\u5728\u70B9\u51FB\u6309\u94AE\u65F6\u5448\u73B0\u4E00\u4E2A\u5355\u4E00\u7684\u5206\u9875\u5217\u8868\uFF0C\u800C\u662F\u5C06<em>\u6240\u6709\u7684\u5206\u9875\u5217\u8868\u4F5C\u4E3A\u4E00\u4E2A\u5217\u8868</em>\uFF0C\u7528<em>\u4E00\u4E2A</em>\u6309\u94AE\u6765\u83B7\u53D6\u4E0B\u4E00\u9875\u3002\u6BCF\u4E00\u4E2A\u989D\u5916\u7684<em>\u5206\u9875\u5217\u8868</em>\u90FD\u4F1A\u5728<em>\u4E00\u4E2A\u5217\u8868</em>\u7684\u672B\u5C3E\u8FDB\u884C\u8FDE\u63A5\u3002</p><p><img src="'+r+`" alt=""></p><p>**\u4EFB\u52A1\uFF1A**\u4E0D\u662F\u53EA\u83B7\u53D6\u5217\u8868\u7684\u7B2C\u4E00\u9875\uFF0C\u800C\u662F\u6269\u5C55\u83B7\u53D6\u540E\u7EED\u9875\u9762\u7684\u529F\u80FD\uFF0C\u5C06\u5176\u4F5C\u4E3A\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u65E0\u9650\u5206\u9875\u6765\u5B9E\u73B0\u3002</p><p><strong>\u63D0\u793A\uFF1A</strong></p><ul><li>\u7528\u5206\u9875\u83B7\u53D6\u6240\u9700\u7684\u53C2\u6570\u6269\u5C55 <code>API_ENDPOINT</code>\u3002</li><li>\u4ECE <code>result</code> \u4E2D\u83B7\u53D6\u6570\u636E\u540E\uFF0C\u5C06 <code>page</code> \u5B58\u50A8\u4E3A state\u3002</li><li>\u6BCF\u6B21\u641C\u7D22\u90FD\u4F1A\u83B7\u53D6\u7B2C\u4E00\u9875(<code>0</code>)\u7684\u6570\u636E\u3002</li><li>\u6BCF\u5F53\u7528\u4E00\u4E2A\u65B0\u7684 HTML \u6309\u94AE\u89E6\u53D1\u4E00\u4E2A\u989D\u5916\u7684\u8BF7\u6C42\u65F6\uFF0C\u5C31\u83B7\u53D6\u540E\u7EED\u7684\u9875\u9762(<code>page + 1</code>)\u3002</li></ul><p>\u9996\u5148\uFF0C\u6269\u5C55 API \u5E38\u91CF\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u53EF\u4EE5\u5904\u7406\u5206\u9875\u6570\u636E\u3002\u6211\u4EEC\u5C06\u628A\u8FD9\u4E00\u4E2A\u5E38\u91CF\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const API_ENDPOINT = &#39;https://hn.algolia.com/api/v1/search?query=&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const getUrl = searchTerm =&gt; \`\${API_ENDPOINT}\${searchTerm}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6539\u4E3A\u4E00\u4E2A\u53EF\u5408\u6210\u7684 API \u5E38\u91CF\uFF0C\u5176\u53C2\u6570\u5982\u4E0B\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const API_BASE = &#39;https://hn.algolia.com/api/v1&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const API_SEARCH = &#39;/search&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const PARAM_SEARCH = &#39;query=&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// careful: notice the ? in between</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const getUrl = searchTerm =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  \`\${API_BASE}\${API_SEARCH}?\${PARAM_SEARCH}\${searchTerm}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u8C03\u6574 API \u7AEF\u70B9\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4E3A\u5B83\u63D0\u53D6\u4E86\u4E00\u4E2A\u901A\u7528\u7684 <code>getUrl</code> \u51FD\u6570\u3002\u4F46\u662F\uFF0C\u6709\u4E00\u4E2A\u5730\u65B9\u6211\u4EEC\u5FC5\u987B\u5728\u672A\u6765\u89E3\u51B3\u8FD9\u4E2A\u903B\u8F91\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const extractSearchTerm = url =&gt; url.replace(API_ENDPOINT, &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u63A5\u4E0B\u6765\u7684\u6B65\u9AA4\u4E2D\uFF0C\u4EC5\u4EC5\u66FF\u6362\u6389\u6211\u4EEC API \u7AEF\u70B9\u7684\u57FA\u7840\u662F\u4E0D\u591F\u7684\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u5DF2\u7ECF\u6CA1\u6709\u4E86 API \u7AEF\u70B9\u3002\u968F\u7740 API \u7AEF\u70B9\u7684\u53C2\u6570\u8D8A\u6765\u8D8A\u591A\uFF0CURL \u53D8\u5F97\u66F4\u52A0\u590D\u6742\u3002\u5B83\u5C06\u4ECE X \u53D8\u4E3A Y\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// X</span></span>
<span class="line"><span style="color:#A6ACCD;">https://hn.algolia.com/api/v1/search?query=react</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Y</span></span>
<span class="line"><span style="color:#A6ACCD;">https://hn.algolia.com/api/v1/search?query=react&amp;page=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6700\u597D\u662F\u63D0\u53D6\u641C\u7D22\u8BCD\uFF0C\u5C06 <code>?</code> \u548C <code>&amp;</code> \u4E4B\u95F4\u7684\u6240\u6709\u5185\u5BB9\u63D0\u53D6\u51FA\u6765\u3002\u53E6\u5916\uFF0C\u8003\u8651\u5230 <code>query</code> \u53C2\u6570\u662F\u76F4\u63A5\u653E\u5728 <code>?</code> \u4E4B\u540E\u7684\uFF0C\u800C\u6240\u6709\u5176\u4ED6\u53C2\u6570\u5982 <code>page</code> \u90FD\u5728\u5B83\u4E4B\u540E\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const extractSearchTerm = url =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  url</span></span>
<span class="line"><span style="color:#A6ACCD;">    .substring(url.lastIndexOf(&#39;?&#39;) + 1, url.lastIndexOf(&#39;&amp;&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u952E(<code>query=</code>)\u4E5F\u9700\u8981\u66FF\u6362\uFF0C\u53EA\u7559\u4E0B\u503C(<code>searchTerm</code>)\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const extractSearchTerm = url =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  url</span></span>
<span class="line"><span style="color:#A6ACCD;">    .substring(url.lastIndexOf(&#39;?&#39;) + 1, url.lastIndexOf(&#39;&amp;&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    .replace(PARAM_SEARCH, &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u57FA\u672C\u4E0A\uFF0C\u6211\u4EEC\u4F1A\u4FEE\u526A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u53EA\u7559\u4E0B\u641C\u7D22\u8BCD\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// url</span></span>
<span class="line"><span style="color:#A6ACCD;">https://hn.algolia.com/api/v1/search?query=react&amp;page=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// url after  substring</span></span>
<span class="line"><span style="color:#A6ACCD;">query=react</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// url after replace</span></span>
<span class="line"><span style="color:#A6ACCD;">react</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4ECE Hacker News API \u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86 <code>page</code> \u6570\u636E\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleFetchStories = React.useCallback(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const lastUrl = urls[urls.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">      const result = await axios.get(lastUrl);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: &#39;STORIES_FETCH_SUCCESS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        payload: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          list: result.data.hits,</span></span>
<span class="line"><span style="color:#A6ACCD;">          page: result.data.page,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch {</span></span>
<span class="line"><span style="color:#A6ACCD;">      dispatchStories({ type: &#39;STORIES_FETCH_FAILURE&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [urls]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u6211\u4EEC\u9700\u8981\u5B58\u50A8\u8FD9\u4E9B\u6570\u636E\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u8FDB\u884C\u5206\u9875\u83B7\u53D6\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const storiesReducer = (state, action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_INIT&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_SUCCESS&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isLoading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isError: false,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: action.payload.list,</span></span>
<span class="line"><span style="color:#A6ACCD;">        page: action.payload.page,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_FAILURE&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;REMOVE_STORY&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, dispatchStories] = React.useReducer(</span></span>
<span class="line"><span style="color:#A6ACCD;">    storiesReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    { data: [], page: 0, isLoading: false, isError: false }</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u7528\u65B0\u7684 <code>page</code> \u53C2\u6570\u6269\u5C55 API \u7AEF\u70B9\u3002\u8FD9\u4E2A\u53D8\u5316\u88AB\u6211\u4EEC\u4E4B\u524D\u8FC7\u65E9\u7684\u4F18\u5316\u6240\u8986\u76D6\uFF0C\u5F53\u65F6\u6211\u4EEC\u4ECE URL \u4E2D\u63D0\u53D6\u4E86\u641C\u7D22\u8BCD\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const API_BASE = &#39;https://hn.algolia.com/api/v1&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const API_SEARCH = &#39;/search&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const PARAM_SEARCH = &#39;query=&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const PARAM_PAGE = &#39;page=&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// careful: notice the ? and &amp; in between</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const getUrl = (searchTerm, page) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  \`\${API_BASE}\${API_SEARCH}?\${PARAM_SEARCH}\${searchTerm}&amp;\${PARAM_PAGE}\${page}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5FC5\u987B\u901A\u8FC7\u4F20\u9012 <code>page</code> \u53C2\u6570\u6765\u8C03\u6574\u6240\u6709 <code>getUrl</code> \u7684\u8C03\u7528\u3002\u7531\u4E8E\u521D\u59CB\u641C\u7D22\u548C\u6700\u540E\u4E00\u6B21\u641C\u7D22\u603B\u662F\u83B7\u53D6\u7B2C\u4E00\u9875(<code>0</code>)\uFF0C\u6211\u4EEC\u5C06\u8FD9\u4E00\u9875\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570\uFF0C\u4EE5\u4FBF\u68C0\u7D22\u9002\u5F53\u7684 URL\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [urls, setUrls] = React.useState([getUrl(searchTerm, 0)]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchSubmit = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSearch(searchTerm, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleLastSearch = searchTerm =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(searchTerm);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSearch(searchTerm, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearch = (searchTerm, page) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const url = getUrl(searchTerm, page);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrls(urls.concat(url));</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u4E3A\u4E86\u5728\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\u83B7\u53D6\u4E0B\u4E00\u9875\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u8FD9\u4E2A\u65B0\u7684\u5904\u7406\u7A0B\u5E8F\u4E2D\u589E\u52A0 <code>page</code> \u53C2\u6570\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleMore = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const lastUrl = urls[urls.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">    const searchTerm = extractSearchTerm(lastUrl);</span></span>
<span class="line"><span style="color:#A6ACCD;">    handleSearch(searchTerm, stories.page + 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;List list={stories.data} onRemoveItem={handleRemoveStory} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button type=&quot;button&quot; onClick={handleMore}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        More</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u6211\u4EEC\u5DF2\u7ECF\u7528\u52A8\u6001 <code>page</code> \u53C2\u6570\u5B9E\u73B0\u4E86\u6570\u636E\u83B7\u53D6\u3002\u521D\u6B21\u548C\u6700\u540E\u4E00\u6B21\u641C\u7D22\u603B\u662F\u4F7F\u7528\u7B2C\u4E00\u9875\uFF0C\u800C\u6BCF\u6B21\u4F7F\u7528\u65B0\u7684&quot;\u66F4\u591A&quot;\u6309\u94AE\u83B7\u53D6\u6570\u636E\u90FD\u4F1A\u4F7F\u7528\u9012\u589E\u7684\u9875\u9762\u3002\u4E0D\u8FC7\u5728\u5C1D\u8BD5\u8FD9\u4E2A\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u6709\u4E00\u4E2A\u5173\u952E\u7684 bug\uFF1A\u65B0\u7684\u53D6\u6570\u5E76\u6CA1\u6709\u6269\u5C55\u4E4B\u524D\u7684\u5217\u8868\uFF0C\u800C\u662F\u5B8C\u5168\u53D6\u4EE3\u4E86\u5B83\u3002</p><p><img src="`+c+`" alt=""></p><p>\u6211\u4EEC\u5728 reducer \u4E2D\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u907F\u514D\u7528\u65B0\u7684 <code>data</code> \u66FF\u6362\u5F53\u524D\u7684 <code>data</code>\uFF0C\u5BF9\u5206\u9875\u5217\u8868\u8FDB\u884C\u8FDE\u63A5\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const storiesReducer = (state, action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_INIT&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_SUCCESS&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isLoading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isError: false,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        data:</span></span>
<span class="line"><span style="color:#A6ACCD;">          action.payload.page === 0</span></span>
<span class="line"><span style="color:#A6ACCD;">            ? action.payload.list</span></span>
<span class="line"><span style="color:#A6ACCD;">            : state.data.concat(action.payload.list),</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        page: action.payload.page,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_FAILURE&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;REMOVE_STORY&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u7528\u65B0\u6309\u94AE\u83B7\u53D6\u66F4\u591A\u6570\u636E\u540E\uFF0C\u663E\u793A\u7684\u5217\u8868\u4F1A\u589E\u957F\u3002\u4F46\u662F\u4ECD\u6709\u95EA\u70C1\u7684\u73B0\u8C61\uFF0C\u4F7F\u7528\u6237\u4F53\u9A8C\u6CA1\u90A3\u4E48\u597D\u3002\u5728\u83B7\u53D6\u5206\u9875\u6570\u636E\u65F6\uFF0C\u7531\u4E8E\u52A0\u8F7D\u6307\u793A\u5668\u51FA\u73B0\uFF0C\u5217\u8868\u4F1A\u6D88\u5931\u7247\u523B\uFF0C\u5E76\u5728\u8BF7\u6C42\u89E3\u51B3\u540E\u91CD\u65B0\u51FA\u73B0\u3002</p><p><img src="`+o+`" alt=""></p><p>\u6240\u9700\u7684\u884C\u4E3A\u662F\u6E32\u67D3\u5217\u8868\u3002\u5728\u5F00\u59CB\u65F6\u662F\u4E00\u4E2A\u7A7A\u5217\u8868\uFF0C\u5E76\u5C06&quot;\u66F4\u591A&quot;\u6309\u94AE\u66FF\u6362\u4E3A\u4EC5\u9488\u5BF9\u5F85\u5904\u7406\u8BF7\u6C42\u7684\u52A0\u8F7D\u6307\u793A\u5668\u3002\u5F53\u4EFB\u52A1\u4ECE\u5355\u4E2A\u5217\u8868\u53D1\u5C55\u5230\u5206\u9875\u5217\u8868\u65F6\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684 UI \u91CD\u6784\uFF0C\u7528\u4E8E\u6709\u6761\u4EF6\u7684\u6E32\u67D3\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List list={stories.data} onRemoveItem={handleRemoveStory} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button type=&quot;button&quot; onClick={handleMore}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          More</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u73B0\u5728\u53EF\u4EE5\u6301\u7EED\u83B7\u53D6\u70ED\u95E8\u6545\u4E8B\u7684\u6570\u636E\u4E86\u3002\u5F53\u4F7F\u7528\u7B2C\u4E09\u65B9 API \u65F6\uFF0C\u63A2\u7D22\u5B83\u7684\u8FB9\u754C\u603B\u662F\u4E00\u4E2A\u597D\u4E3B\u610F\u3002\u6BCF\u4E2A\u8FDC\u7A0B API \u90FD\u4F1A\u8FD4\u56DE\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6240\u4EE5\u5B83\u7684\u529F\u80FD\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u6D88\u8D39 API \u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Paginated-Fetch" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>.</li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Remember-Last-Searches...hs/Paginated-Fetch?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>.</li><li>\u91CD\u65B0\u8BBF\u95EE <a href="https://hn.algolia.com/api" target="_blank" rel="noreferrer">Hacker News API \u6587\u6863</a>\uFF1A\u662F\u5426\u6709\u529E\u6CD5\u901A\u8FC7\u5411 API \u7AEF\u6DFB\u52A0\u66F4\u591A\u53C2\u6570\u6765\u83B7\u53D6\u66F4\u591A\u7684\u9875\u9762\u5217\u8868\u9879\u76EE\uFF1F</li><li>\u91CD\u6E29\u672C\u8282\u5F00\u5934\u8BB2\u5230\u7684\u5206\u9875\u548C\u65E0\u9650\u5206\u9875\u3002\u4F60\u5C06\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u666E\u901A\u7684\u5206\u9875\u7EC4\u4EF6\uFF0C\u6309\u94AE\u4ECE 1-[3]-10\uFF0C\u6BCF\u4E2A\u6309\u94AE\u53EA\u53D6\u5E76\u663E\u793A\u4E00\u9875\u5217\u8868\u3002</li><li>\u4E0E\u5176\u8BF4\u6709\u4E00\u4E2A&quot;\u66F4\u591A&quot;\u6309\u94AE\uFF0C\u4E0D\u5982\u8BF4\u7528\u65E0\u9650\u6EDA\u52A8\u6280\u672F\u5B9E\u73B0\u65E0\u9650\u5206\u9875\uFF1F\u65E0\u9650\u6EDA\u52A8\u4E0D\u662F\u660E\u786E\u5730\u70B9\u51FB\u4E00\u4E2A\u6309\u94AE\u6765\u83B7\u53D6\u4E0B\u4E00\u9875\uFF0C\u800C\u662F\u5728\u6D4F\u89C8\u5668\u7684\u89C6\u53E3\u5230\u8FBE\u663E\u793A\u5217\u8868\u7684\u5E95\u90E8\u540E\uFF0C\u5C31\u53EF\u4EE5\u83B7\u53D6\u4E0B\u4E00\u9875\u3002</li></ul>`,60),b=[i];function A(C,u,m,y,d,D){return n(),a("div",null,b)}const v=s(t,[["render",A]]);export{h as __pageData,v as default};
