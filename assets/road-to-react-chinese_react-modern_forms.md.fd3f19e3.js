import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u8868\u5355","slug":"react-\u8868\u5355","link":"#react-\u8868\u5355","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/forms.md","lastUpdated":1677316569000}'),p={name:"road-to-react-chinese/react-modern/forms.md"},e=l(`<h2 id="react-\u8868\u5355" tabindex="-1">React \u8868\u5355 <a class="header-anchor" href="#react-\u8868\u5355" aria-hidden="true">#</a></h2><p>\u524D\u4E00\u8282\u4E2D\u6211\u4EEC\u52A0\u5165\u4E86\u4E00\u4E2A\u663E\u5F0F\u83B7\u53D6\u6570\u636E\u7684\u6309\u94AE\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528 HTML \u8868\u5355\u6765\u5B8C\u5584\u5B83\uFF0C\u5C06\u641C\u7D22\u8F93\u5165\u6846\u3001\u6309\u94AE\u90FD\u5C01\u88C5\u8D77\u6765\u3002</p><p>\u8868\u5355\u5728 JSX\uFF08React\uFF09\u548C HTML \u4E2D\u6CA1\u6709\u592A\u5927\u5DEE\u522B\u3002\u6211\u4EEC\u5C06\u5206\u51E0\u6B65\u8FDB\u884C\u91CD\u6784\uFF0C\u9996\u5148\u628A\u8F93\u5165\u6846\u548C\u6309\u94AE\u90FD\u7528 <code>form</code> \u5143\u7D20\u5305\u88F9\u8D77\u6765\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;form onSubmit={handleSearchSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;InputWithLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">          id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          value={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">          isFocused</span></span>
<span class="line"><span style="color:#A6ACCD;">          onInputChange={handleSearchInput}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button type=&quot;submit&quot; disabled={!searchTerm}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          Submit</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6211\u4EEC\u4E0D\u518D\u628A <code>handleSearchSubmit</code> \u76D1\u542C\u51FD\u6570\u7ED1\u5B9A\u5728\u63D0\u4EA4\u6309\u94AE\u4E0A\uFF0C\u800C\u662F\u7ED1\u5728\u65B0\u7684 <code>form</code> \u5143\u7D20\u4E0A\u3002\u53E6\u5916\u628A\u63D0\u4EA4\u6309\u94AE\u7684 <code>type</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>submit</code>\uFF0C\u8FD9\u6837 <code>form</code> \u5143\u7D20\u5C31\u80FD\u5904\u7406\u63D0\u4EA4\u4E8B\u4EF6\u3002</p><p>\u76D1\u542C\u51FD\u6570\u7528\u6765\u5904\u7406\u8868\u5355\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u5176\u4E2D\u6267\u884C <code>event.preventDefault()</code>\uFF0C\u6765\u907F\u514D\u6D4F\u89C8\u5668\u9ED8\u8BA4\u884C\u4E3A\uFF08\u8FD9\u4F1A\u5BFC\u81F4\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\uFF09\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchSubmit = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrl(\`\${API_ENDPOINT}\${searchTerm}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u952E\u76D8\u7684 <code>Enter</code> \u952E\u6765\u6267\u884C\u641C\u7D22\u529F\u80FD\u3002 \u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u8BE5\u7EC4\u4EF6\u62BD\u53D6\u4E3A\u72EC\u7ACB\u7684 SearchForm \u7EC4\u4EF6\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const SearchForm = ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  searchTerm,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSearchInput,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSearchSubmit,</span></span>
<span class="line"><span style="color:#A6ACCD;">}) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;form onSubmit={onSearchSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;InputWithLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">      id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      value={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">      isFocused</span></span>
<span class="line"><span style="color:#A6ACCD;">      onInputChange={onSearchInput}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button type=&quot;submit&quot; disabled={!searchTerm}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Submit</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u628A\u8FD9\u4E2A\u65B0\u7EC4\u4EF6\u5F15\u5165\u5230 App \u7EC4\u4EF6\u4E2D\u3002App \u7EC4\u4EF6\u4ECD\u7136\u66FF\u8868\u5355\u7EC4\u4EF6\u7BA1\u7406\u72B6\u6001\uFF0C\u56E0\u4E3A App \u7EC4\u4EF6\u7684\u72B6\u6001\u4F1A\u901A\u8FC7 props(<code>stories.data</code>) \u4F20\u9012\u7ED9 List \u7EC4\u4EF6\u4F7F\u7528\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;SearchForm</span></span>
<span class="line"><span style="color:#A6ACCD;">        searchTerm={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onSearchInput={handleSearchInput}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onSearchSubmit={handleSearchSubmit}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isError &amp;&amp; &lt;p&gt;Something went wrong ...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;List list={stories.data} onRemoveItem={handleRemoveStory} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8868\u5355\u5728 React \u548C HTML \u4E2D\u6CA1\u6709\u592A\u5927\u5DEE\u522B\u3002\u5F53\u6211\u4EEC\u901A\u8FC7\u6309\u94AE\u53BB\u63D0\u4EA4\u8F93\u5165\u6846\u7684\u6570\u636E\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u8FD9\u4E9B\u5143\u7D20\u5305\u88F9\u8FDB\u542B\u6709 <code>onSubmit</code> \u76D1\u542C\u5668\u7684 <code>form</code> \u5143\u7D20\u4E2D\uFF0C\u800C\u63D0\u4EA4\u6309\u94AE\u4EC5\u9700\u8981\u8BBE\u7F6E <code>type=&quot;submit&quot;</code>\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Forms-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002 <ul><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Async-Await-in-React...hs/Forms-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li></ul></li><li>\u8BD5\u8BD5\u4E0D\u4F7F\u7528 <code>preventDefault</code> \u7684\u6548\u679C\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://www.robinwieruch.de/react-preventdefault" target="_blank" rel="noreferrer">preventDefault for Events in React</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://www.robinwieruch.de/react-component-composition" target="_blank" rel="noreferrer">React Component Composition</a>\u3002</li></ul>`,18),r=[e];function c(t,o,i,b,A,C){return n(),a("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
