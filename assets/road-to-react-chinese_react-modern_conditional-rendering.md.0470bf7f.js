import{_ as s,o as n,c as a,a as l}from"./app.a9f825fd.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u6761\u4EF6\u6E32\u67D3","slug":"react-\u6761\u4EF6\u6E32\u67D3","link":"#react-\u6761\u4EF6\u6E32\u67D3","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/conditional-rendering.md","lastUpdated":1676386809000}'),e={name:"road-to-react-chinese/react-modern/conditional-rendering.md"},p=l(`<h2 id="react-\u6761\u4EF6\u6E32\u67D3" tabindex="-1">React \u6761\u4EF6\u6E32\u67D3 <a class="header-anchor" href="#react-\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a></h2><p>\u5728 React \u4E2D\u5904\u7406\u5F02\u6B65\u6570\u636E\u4F7F\u6211\u4EEC\u5904\u4E8E\u6761\u4EF6\u72B6\u6001\uFF1A\u6709\u6570\u636E\uFF0C\u65E0\u6570\u636E\u3002\u8FD9\u79CD\u60C5\u51B5\u5DF2\u7ECF\u8986\u76D6\uFF0C\u7531\u4E8E\u6211\u4EEC\u7684\u521D\u59CB state \u662F\u4E00\u4E2A\u7A7A\u5217\u8868\u800C\u4E0D\u662F <code>null</code>\uFF0C\u5982\u679C\u662F <code>null</code>\uFF0C\u6211\u4EEC\u5219\u5FC5\u987B\u5728 JSX \u4E2D\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u5B83\u662F <code>[]</code>, \u6211\u4EEC\u5BF9\u7528\u4E8E\u641C\u7D22\u7684\u7A7A\u6570\u7EC4\u8FDB\u884C\u4E86 <code>filter()</code> \u5904\u7406\uFF0C\u4F9D\u7136\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002\u8FD9\u5BFC\u81F4\u5728 List \u7EC4\u4EF6\u7684 <code>map()</code> \u51FD\u6570\u4E2D\u4E0D\u6E32\u67D3\u4EFB\u4F55\u5185\u5BB9\u3002</p><p>\u4F46\u5728\u5B9E\u9645\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u5F02\u6B65\u6570\u636E\u901A\u5E38\u6709\u4E24\u4E2A\u4EE5\u4E0A\u7684\u6761\u4EF6\u72B6\u6001\u3002\u8003\u8651\u5EF6\u8FDF\u6570\u636E\u52A0\u8F7D\u65F6\u5411\u7528\u6237\u663E\u793A\u52A0\u8F7D\u6307\u793A\u5668\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, setStories] = React.useState([]);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [isLoading, setIsLoading] = React.useState(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    setIsLoading(true);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    getAsyncStories().then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setStories(result.data.stories);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      setIsLoading(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4F7F\u7528<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="_blank" rel="noreferrer">JavaScript \u4E09\u5143\u8FD0\u7B97\u7B26</a>, \u6211\u4EEC\u53EF\u4EE5\u5C06\u8BE5\u6761\u4EF6\u72B6\u6001\u5728 JSX \u4E2D\u5185\u8054\u4E3A<strong>\u6761\u4EF6\u6E32\u67D3</strong></p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;List</span></span>
<span class="line"><span style="color:#A6ACCD;">          list={searchedStories}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onRemoveItem={handleRemoveStory}</span></span>
<span class="line"><span style="color:#A6ACCD;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5F02\u6B65\u6570\u636E\u6709\u9519\u8BEF\u5904\u7406\uFF0C\u5728\u6211\u4EEC\u7684\u6A21\u62DF\u73AF\u5883\u4E2D\u4E0D\u4F1A\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u5F00\u59CB\u4ECE\u53E6\u4E00\u4E2A\u7B2C\u4E09\u65B9 API \u83B7\u53D6\u6570\u636E\uFF0C\u5219\u53EF\u80FD\u4F1A\u51FA\u9519\u3002\u5F15\u5165\u53E6\u4E00\u4E2A state \u6765\u5904\u7406\u9519\u8BEF\u72B6\u6001\uFF0C\u5E76\u5728 Promise \u5B8C\u6210\u65F6\u5728 Promise \u7684 <code>catch()</code> \u4E2D\u5904\u7406\u5B83\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, setStories] = React.useState([]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [isLoading, setIsLoading] = React.useState(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [isError, setIsError] = React.useState(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setIsLoading(true);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    getAsyncStories()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setStories(result.data.stories);</span></span>
<span class="line"><span style="color:#A6ACCD;">        setIsLoading(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(() =&gt; setIsError(true));</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u53CD\u9988\uFF0C\u4EE5\u9632\u5176\u4ED6\u6761\u4EF6\u6E32\u67D3\u51FA\u73B0\u95EE\u9898\u3002\u8FD9\u6B21\uFF0C\u5B83\u8981\u4E48\u6E32\u67D3\u4E00\u4E9B\u5185\u5BB9\uFF0C\u8981\u4E48\u4EC0\u4E48\u90FD\u4E0D\u6E32\u67D3\u3002\u7528 <code>&amp;&amp;</code> \u7B80\u5199\u7684\u5F62\u5F0F\u6765\u907F\u514D\u5728\u4E09\u5143\u8FD0\u7B97\u7B26\u7684\u53E6\u4E00\u6D4B\u8FD4\u56DE <code>null</code>\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {isError &amp;&amp; &lt;p&gt;Something went wrong ...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5728 JavaScript \u4E2D\uFF0C <code>true &amp;&amp; &#39;Hello World&#39;</code> \u603B\u662F\u8FD4\u56DE &#39;Hello world&#39;\u3002<code>false &amp;&amp; &#39;Hello World&#39;</code> \u603B\u662F\u8FD4\u56DE false\u3002\u5728 React \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u79CD\u884C\u4E3A\u6765\u83B7\u5F97\u4F18\u52BF\u3002\u5982\u679C\u6761\u4EF6\u4E3A true\uFF0C \u5219\u903B\u8F91 <code>&amp;&amp;</code> \u8FD0\u7B97\u7B26\u4E4B\u540E\u7684\u8868\u8FBE\u5F0F\u5C06\u4F5C\u4E3A\u8F93\u51FA\u3002\u5982\u679C\u6761\u4EF6\u662F false\uFF0CReact \u5C06\u5FFD\u7565\u5B83\u5E76\u8DF3\u8FC7\u8868\u8FBE\u5F0F\u3002</p><p>\u6761\u4EF6\u6E32\u67D3\u4E0D\u4EC5\u9002\u7528\u4E8E\u5F02\u6B65\u6570\u636E\uFF0C\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u662F\u4F7F\u7528\u6309\u94AE\u5207\u6362\u4E00\u4E2A\u5E03\u5C14\u6807\u5FD7\u7684 state\uFF0C\u5982\u679C\u662F true\uFF0C\u5219\u6E32\u67D3\u67D0\u4E9B\u5185\u5BB9\uFF0C\u5982\u679C\u662F false\uFF0C\u5219\u4E0D\u6E32\u67D3\u4EFB\u4F55\u5185\u5BB9\u3002</p><p>\u8FD9\u4E2A\u529F\u80FD\u975E\u5E38\u5F3A\u5927\uFF0C\u56E0\u4E3A\u5B83\u4F7F\u60A8\u80FD\u591F\u6709\u6761\u4EF6\u5730\u5448\u73B0 JSX\u3002\u5B83\u662F React \u4E2D\u53E6\u4E00\u4E2A\u4F7F\u60A8\u7684 UI \u66F4\u52A0\u52A8\u6001\u7684\u5DE5\u5177\u3002\u6B63\u5982\u6211\u4EEC\u6240\u53D1\u73B0\u7684\uFF0C\u5BF9\u4E8E\u5F02\u6B65\u6570\u636E\u7B49\u66F4\u590D\u6742\u7684\u63A7\u5236\u6D41\u800C\u8A00\uFF0C\u901A\u5E38\u662F\u5FC5\u9700\u7684\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-Conditional-Rendering" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-Asynchronous-Data...hs/React-Conditional-Rendering?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A<a href="https://www.robinwieruch.de/conditional-rendering-react/" target="_blank" rel="noreferrer">React \u6761\u4EF6\u6E32\u67D3</a>\u3002</li></ul>`,19),r=[p];function c(t,o,i,b,A,C){return n(),a("div",null,r)}const d=s(e,[["render",c]]);export{m as __pageData,d as default};
