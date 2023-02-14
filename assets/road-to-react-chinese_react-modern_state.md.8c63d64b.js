import{_ as s,o as n,c as a,a as e}from"./app.ee052c02.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React State","slug":"react-state","link":"#react-state","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/state.md","lastUpdated":1676383400000}'),l={name:"road-to-react-chinese/react-modern/state.md"},p=e(`<h2 id="react-state" tabindex="-1">React State <a class="header-anchor" href="#react-state" aria-hidden="true">#</a></h2><p>React Props \u7528\u4E8E\u6CBF\u7740\u7EC4\u4EF6\u6811\u5411\u4E0B\u4F20\u9012\u4FE1\u606F\uFF1B<strong>React State</strong> \u7528\u4E8E\u5B9E\u73B0\u5E94\u7528\u4EA4\u4E92\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0E\u5E94\u7528\u7684\u4EA4\u4E92\u6765\u6539\u53D8\u5B83\u7684\u8868\u73B0\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE React \u4E2D\u83B7\u5F97\u4E00\u4E2A\u53EB\u4F5C useState \u7684\u5DE5\u5177\u51FD\u6570\u53BB\u7BA1\u7406 state\uFF0CuseState \u51FD\u6570\u88AB\u79F0\u4F5C hook\u3002React \u4E2D\u6709\u4E0D\u6B62\u4E00\u4E2A hook\uFF0C\u5B83\u4EEC\u4E0E React \u4E2D\u7684 state \u7BA1\u7406\u548C\u5176\u5B83\u4E8B\u52A1\u6709\u5173\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u63A5\u4E0B\u6765\u7684\u7AE0\u8282\u5B66\u4E60\u5B83\u4EEC\u3002\u73B0\u5728\uFF0C\u6211\u4EEC\u53EA\u5173\u6CE8 React \u4E2D\u7684 useState hook\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const stories = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = React.useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>React\u7684 <code>useState</code> hook \u4EE5\u4E00\u4E2A<em>\u521D\u59CB state</em> \u4F5C\u4E3A\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u3002\u540C\u65F6\u5B83\u4F1A\u8FD4\u56DE\u5305\u542B\u4E24\u4E2A\u503C\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u503C\uFF08<code>searchTerm</code>\uFF09\u8868\u793A<em>\u5F53\u524D state</em>\uFF1B\u7B2C\u4E8C\u4E2A\u503C\uFF08<code>setSearchTerm</code>\uFF09\u662F\u4E00\u4E2A<em>\u66F4\u65B0\u8FD9\u4E2A state \u7684\u51FD\u6570</em>\u3002\u6211\u6709\u65F6\u4F1A\u628A\u8FD9\u4E2A\u51FD\u6570\u79F0\u4F5C <em>state \u66F4\u65B0\u51FD\u6570</em>\u3002</p><p>\u5982\u679C\u4F60\u4E0D\u719F\u6089\u8FD9\u79CD\u4E00\u4E2A\u6570\u7EC4\u8FD4\u56DE\u4E24\u4E2A\u503C\u7684\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u53C2\u8003\u9605\u8BFB <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring" target="_blank" rel="noreferrer">JavaScript \u6570\u7EC4\u89E3\u6784</a>\u7684\u5185\u5BB9\u3002\u5B83\u53EF\u4EE5\u7528\u4E8E\u66F4\u7B80\u6D01\u5730\u8BFB\u53D6\u6570\u7EC4\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u8FD9\u662F\u6570\u7EC4\u7684\u89E3\u6784\uFF0C\u5E76\u4E14\u5176\u597D\u5904\u53EF\u4EE5\u76F4\u89C2\u770B\u5230\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// basic array definition</span></span>
<span class="line"><span style="color:#A6ACCD;">const list = [&#39;a&#39;, &#39;b&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// no array destructuring</span></span>
<span class="line"><span style="color:#A6ACCD;">const itemOne = list[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">const itemTwo = list[1];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// array destructuring</span></span>
<span class="line"><span style="color:#A6ACCD;">const [firstItem, secondItem] = list;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728 React \u4E2D\uFF0C<code>useState</code> hook \u662F\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\u7684\u51FD\u6570\u3002\u518D\u4EE5\u4E0B\u9762\u7684 JavaScript \u793A\u4F8B\u4F5C\u6BD4\u8F83\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function getAlphabet() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return [&#39;a&#39;, &#39;b&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// no array destructuring</span></span>
<span class="line"><span style="color:#A6ACCD;">const itemOne = getAlphabet()[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">const itemTwo = getAlphabet()[1];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// array destructuring</span></span>
<span class="line"><span style="color:#A6ACCD;">const [firstItem, secondItem] = getAlphabet();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6570\u7EC4\u89E3\u6784\u53EA\u662F\u9010\u4E2A\u83B7\u53D6\u6570\u7EC4\u503C\u7684\u4E00\u79CD\u7B80\u5199\u65B9\u5F0F\uFF0C\u5982\u679C\u4F60\u5728 React \u4E2D\u4E0D\u4EE5\u89E3\u6784\u7684\u65B9\u5F0F\u8868\u793A\u6570\u7EC4\uFF0C\u90A3\u4E48\u5B83\u7684\u53EF\u8BFB\u6027\u5C31\u4F1A\u964D\u4F4E\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const stories = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // less readable version without array destructuring</span></span>
<span class="line"><span style="color:#A6ACCD;">  const searchTermState = React.useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const searchTerm = searchTermState[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">  const setSearchTerm = searchTermState[1];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>React \u56E2\u961F\u4E4B\u6240\u4EE5\u9009\u62E9\u6570\u7EC4\u89E3\u6784\uFF0C\u662F\u56E0\u4E3A\u5B83\u8BED\u6CD5\u7B80\u6D01\u5E76\u4E14\u6709\u547D\u540D\u89E3\u6784\u540E\u7684\u53D8\u91CF\u7684\u80FD\u529B\u3002\u4E0B\u9762\u7684\u4EE3\u7801\u7247\u6BB5\u662F\u4E00\u4E2A\u9500\u6BC1\u6570\u7EC4\u7684\u4F8B\u5B50\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const stories = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = React.useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u6211\u4EEC\u521D\u59CB\u5316 state\uFF0C\u4E14\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D state \u548C state \u66F4\u65B0\u51FD\u6570\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u5B83\u4EEC\u663E\u793A\u5F53\u524D\u7684 state \u5E76\u901A\u8FC7 APP \u7EC4\u4EF6\u5185\u90E8\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5BF9\u5176\u8FDB\u884C\u66F4\u65B0\u4E86\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const stories = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = React.useState(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleChange = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Searching for &lt;strong&gt;{searchTerm}&lt;/strong&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List list={stories} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5F53\u7528\u6237\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u5185\u5BB9\u65F6\uFF0C\u8F93\u5165\u6846\u5185\u5BB9\u7684\u6539\u53D8\u4F1A\u88AB\u5904\u7406\u51FD\u6570\u4EE5\u5F53\u524D\u5185\u90E8\u503C\u6355\u83B7\u3002\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u903B\u8F91\u4F7F\u7528 state \u66F4\u65B0\u51FD\u6570\u53BB\u8BBE\u7F6E\u65B0\u7684 state\u3002\u5728\u7ED9\u7EC4\u4EF6\u8BBE\u7F6E\u4E86\u65B0\u7684 state \u4E4B\u540E\uFF0C\u7EC4\u4EF6\u4F1A\u88AB\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u610F\u5473\u7740\u8BE5\u7EC4\u4EF6\u51FD\u6570\u4F1A\u88AB\u518D\u6B21\u6267\u884C\u3002\u65B0\u7684 state \u53D8\u4E3A\u4E86\u5F53\u524D\u7684 state\uFF0C\u5E76\u53EF\u4EE5\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D\u663E\u793A\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-State" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-Props...hs/React-State?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring" target="_blank" rel="noreferrer">JavaScript\u6570\u7EC4\u89E3\u6784</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E React \u7684 useState hook (<a href="https://www.robinwieruch.de/react-usestate-hook" target="_blank" rel="noreferrer">0</a>, <a href="https://reactjs.org/docs/hooks-state.html" target="_blank" rel="noreferrer">1</a>), \u4F7F\u7528\u5B83\u8BA9\u4F60\u7684 React \u7EC4\u4EF6\u5177\u6709\u4EA4\u4E92\u6027\u3002</li></ul>`,24),r=[p];function t(c,o,i,b,u,A){return n(),a("div",null,r)}const d=s(l,[["render",t]]);export{m as __pageData,d as default};
