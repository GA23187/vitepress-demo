import{_ as s,o as n,c as a,a as l}from"./app.ee052c02.js";const p="/vitepress-demo/assets/callback-handler.f610301b.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSX \u56DE\u8C03\u5904\u7406\u51FD\u6570","slug":"jsx-\u56DE\u8C03\u5904\u7406\u51FD\u6570","link":"#jsx-\u56DE\u8C03\u5904\u7406\u51FD\u6570","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/callback-handlers.md","lastUpdated":1676383400000}'),e={name:"road-to-react-chinese/react-modern/callback-handlers.md"},r=l(`<h2 id="jsx-\u56DE\u8C03\u5904\u7406\u51FD\u6570" tabindex="-1">JSX \u56DE\u8C03\u5904\u7406\u51FD\u6570 <a class="header-anchor" href="#jsx-\u56DE\u8C03\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u4E13\u6CE8\u5728\u8F93\u5165\u6846\u548C\u6807\u7B7E\u4E0A\uFF0C\u901A\u8FC7\u5206\u79BB\u4E00\u4E2A\u72EC\u7ACB\u7684 Search \u7EC4\u4EF6\uFF0C\u5E76\u5728 App \u7EC4\u4EF6\u4E2D\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\u3002\u901A\u8FC7\u8FD9\u4E2A\u8FC7\u7A0B\uFF0CSearch \u7EC4\u4EF6\u5C06\u6210\u4E3A List \u7EC4\u4EF6\u7684\u5144\u5F1F\u7EC4\u4EF6\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002\u6211\u4EEC\u8FD8\u5C06\u628A\u5904\u7406\u51FD\u6570\u548C state \u79FB\u52A8\u5230 Search \u7EC4\u4EF6\u5185\u6765\u4FDD\u6301\u6211\u4EEC\u529F\u80FD\u7684\u5B8C\u6574\u6027\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const stories = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Search /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List list={stories} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const Search = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = React.useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleChange = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Searching for &lt;strong&gt;{searchTerm}&lt;/strong&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u6211\u4EEC\u6709\u4E00\u4E2A\u62BD\u53D6\u51FA\u7684 Search \u7EC4\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u5904\u7406 state \u5E76\u4E14\u663E\u793A state \u4F46\u6CA1\u6709\u66B4\u9732\u51FA\u5B83\u7684\u5185\u5BB9\u3002\u8BE5\u7EC4\u4EF6\u5C06 <code>searchTerm</code> \u663E\u793A\u4E3A\u6587\u672C\uFF0C\u4F46\u5E76\u672A\u4E0E\u7236\u7EC4\u4EF6\u6216\u5144\u5F1F\u7EC4\u4EF6\u5171\u4EAB\u6B64\u4FE1\u606F\u3002\u7531\u4E8E Search \u7EC4\u4EF6\u9664\u4E86\u663E\u793A\u641C\u7D22\u9879\u5916\u4EC0\u4E48\u4E5F\u4E0D\u505A\uFF0C\u56E0\u6B64\u5B83\u5BF9\u5176\u4ED6\u7EC4\u4EF6\u6BEB\u65E0\u7528\u5904\u3002</p><p><img src="`+p+`" alt=""></p><p>\u7531\u4E8E props \u53EA\u80FD\u5F80\u4E0B\u4F20\u9012\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5C06 JavaScript \u6570\u636E\u4FE1\u606F\u6CBF\u7EC4\u4EF6\u6811\u5F80\u4E0A\u4F20\u9012\u3002\u4F46\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F15\u5165<strong>\u56DE\u8C03\u51FD\u6570</strong>\uFF1A\u56DE\u8C03\u51FD\u6570\u88AB\u5F15\u5165 \uFF08A\uFF09\uFF0C\u5728\u5176\u4ED6\u5730\u65B9\u4F7F\u7528\u4E86\u56DE\u8C03\u51FD\u6570\uFF08B\uFF09\uFF0C\u4F46\u8C03\u7528\u5728\u56DE\u8C03\u51FD\u6570\u7684\u4F4D\u7F6E \uFF08C\uFF09\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const stories = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  // A</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearch = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // C</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Search onSearch={handleSearch} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List list={stories} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const Search = props =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = React.useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleChange = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    // B</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.onSearch(event);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return ( ... );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>\u5728\u60A8\u7684\u4EE3\u7801\u4E2D\u4F7F\u7528\u53EF\u4EE5\u7701\u7565\u6389\u6CE8\u91CA A\uFF0CB \u548C C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u53EA\u662F\u5728\u63D0\u9192\u6BCF\u4E2A\u4EE3\u7801\u5757\u8981\u6267\u884C\u7684\u4EFB\u52A1\u3002\u8003\u8651\u4E00\u4E0B\u56DE\u8C03\u51FD\u6570\u7684\u6982\u5FF5\uFF1A\u6211\u4EEC\u5C06\u4E00\u4E2A\u51FD\u6570\u4ECE\u4E00\u4E2A\u7EC4\u4EF6\uFF08App\uFF09\u4F20\u9012\u5230\u53E6\u4E00\u4E2A\u7EC4\u4EF6\uFF08Search\uFF09\uFF1B\u6211\u4EEC\u5728\u7B2C\u4E8C\u4E2A\u7EC4\u4EF6\uFF08Search\uFF09\u4E2D\u8C03\u7528\u5B83\uFF1B\u4F46\u5B9E\u9645\u4E0A\u5B83\u5728\u7B2C\u4E00\u4E2A\u7EC4\u4EF6\uFF08App\uFF09\u4E2D\u88AB\u6267\u884C\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u80FD\u5728\u7EC4\u4EF6\u6811\u4E2D\u5F80\u4E0A\u4F20\u9012\u4FE1\u606F\u3002\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u5904\u7406\u51FD\u6570\u6210\u4E3A\u56DE\u8C03\u5904\u7406\u51FD\u6570\uFF0C\u5E76\u5C06\u8BE5\u51FD\u6570\u901A\u8FC7 React props \u5F80\u4E0B\u4F20\u9012\u7ED9\u5176\u4ED6\u7EC4\u4EF6\u3002React props \u5728\u7EC4\u4EF6\u6811\u4E2D\u59CB\u7EC8\u5C06\u4FE1\u606F\u5F80\u4E0B\u4F20\u9012\uFF0C\u800C\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A props \u4F20\u9012\u65F6\u53EF\u4EE5\u7528\u6765\u548C\u4E0A\u5C42\u7EC4\u4EF6\u901A\u4FE1\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Callback-Handler-in-JSX" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-State...hs/Callback-Handler-in-JSX?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u6839\u636E\u9700\u8981\u591A\u6B21\u8BBF\u95EE\u5904\u7406\u51FD\u6570\u548C\u56DE\u8C03\u5904\u7406\u51FD\u6570\u7684\u6982\u5FF5\u3002</li></ul>`,12),c=[r];function t(o,i,b,A,C,u){return n(),a("div",null,c)}const D=s(e,[["render",t]]);export{y as __pageData,D as default};
