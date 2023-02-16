import{_ as s,o as n,c as a,a as l}from"./app.b476fd3b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSX \u4E2D\u7684\u5185\u8054\u5904\u7406\u51FD\u6570","slug":"jsx-\u4E2D\u7684\u5185\u8054\u5904\u7406\u51FD\u6570","link":"#jsx-\u4E2D\u7684\u5185\u8054\u5904\u7406\u51FD\u6570","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/inline-handler.md","lastUpdated":1676558697000}'),p={name:"road-to-react-chinese/react-modern/inline-handler.md"},e=l(`<h2 id="jsx-\u4E2D\u7684\u5185\u8054\u5904\u7406\u51FD\u6570" tabindex="-1">JSX \u4E2D\u7684\u5185\u8054\u5904\u7406\u51FD\u6570 <a class="header-anchor" href="#jsx-\u4E2D\u7684\u5185\u8054\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u62E5\u6709\u7684 stories \u5217\u8868\u53EA\u662F\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u53D8\u91CF\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u641C\u7D22\u7684\u529F\u80FD\u6765\u7B5B\u9009\u6E32\u67D3\u7684\u5217\u8868\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u5220\u9664\u8FC7\u6EE4\u5668\uFF0C\u5217\u8868\u672C\u8EAB\u5C06\u4FDD\u6301\u4E0D\u53D8\u3002\u8FC7\u6EE4\u5668\u53EA\u662F\u901A\u8FC7\u7B2C\u4E09\u65B9\u4E34\u65F6\u66F4\u6539\uFF0C\u4F46\u6211\u4EEC\u4E0D\u80FD\u64CD\u4F5C\u771F\u5B9E\u7684\u5217\u8868\u3002</p><p>\u4E3A\u4E86\u83B7\u5F97\u5BF9\u5217\u8868\u7684\u63A7\u5236\u6743\uFF0C\u628A\u5B83\u4F5C\u4E3A React \u7684 useState Hook \u4E2D\u7684\u521D\u59CB state\uFF0C\u53EF\u4EE5\u8BA9\u5B83\u5177\u6709 state\u3002\u8FD4\u56DE\u503C\u662F\u5F53\u524D state\uFF08<code>stories</code>\uFF09\u548C state\u66F4\u65B0\u51FD\u6570\uFF08<code>setStories</code>\uFF09\u3002\u6211\u4EEC\u6CA1\u6709\u4F7F\u7528\u81EA\u5B9A\u4E49 <code>useSemiPersistentState</code> hook\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4E0D\u60F3\u6BCF\u6B21\u90FD\u7528\u7F13\u5B58\u5217\u8868\u6253\u5F00\u6D4F\u89C8\u5668\u3002\u76F8\u53CD\uFF0C\u6211\u4EEC\u603B\u662F\u60F3\u8981\u7528\u521D\u59CB\u5217\u8868\u5F00\u59CB\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const initialStories = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;Redux&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const useSemiPersistentState = (key, initialState) =&gt; { ... };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [searchTerm, setSearchTerm] = ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, setStories] = React.useState(initialStories);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8FD9\u5E94\u7528\u7A0B\u5E8F\u7684\u884C\u4E3A\u662F\u4E00\u6837\u7684\uFF0C\u56E0\u4E3A\u73B0\u5728\u4ECE <code>useState</code> \u8FD4\u56DE <code>stories</code>\uFF0C\u4ECD\u7136\u4F1A\u88AB\u8FC7\u6EE4\u5230 <code>searchedStories</code>\uFF0C\u5E76\u5C55\u793A\u5728\u5217\u8868\u4E2D\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u8981\u901A\u8FC7\u79FB\u9664\u5217\u8868\u4E2D\u7684\u4E00\u4E2A item \u6765\u64CD\u4F5C\u5217\u8868\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, setStories] = React.useState(initialStories);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleRemoveStory = item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const newStories = stories.filter(</span></span>
<span class="line"><span style="color:#A6ACCD;">      story =&gt; item.objectID !== story.objectID</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    setStories(newStories);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List list={searchedStories} onRemoveItem={handleRemoveStory} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>App \u7EC4\u4EF6\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u5C06\u8981\u5220\u9664\u7684 item \u4F5C\u4E3A\u53C2\u6570\u63A5\u6536\uFF0C\u5E76\u4E14\u901A\u8FC7\u5220\u9664\u6240\u6709\u4E0D\u7B26\u5408\u6761\u4EF6\u7684 items \u6765\u7B5B\u9009\u5F53\u524D stories\u3002\u7136\u540E\u5C06\u8FD4\u56DE\u7684 stories \u8BBE\u7F6E\u4E3A\u65B0\u7684 state\uFF0CList \u7EC4\u4EF6\u4F1A\u4F20\u9012\u8FD9\u4E2A\u51FD\u6570\u7ED9\u5B83\u7684\u5B50\u7EC4\u4EF6\u3002\u5B83\u6CA1\u6709\u4F7F\u7528\u8FD9\u4E2A\u65B0\u7684\u4FE1\u606F\uFF0C\u5B83\u4EC5\u662F\u4F20\u9012\u4E0B\u53BB\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const List = ({ list, onRemoveItem }) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  list.map(item =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Item</span></span>
<span class="line"><span style="color:#A6ACCD;">      key={item.objectID}</span></span>
<span class="line"><span style="color:#A6ACCD;">      item={item}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      onRemoveItem={onRemoveItem}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6700\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 Item \u7EC4\u4EF6\u7684\u53E6\u4E00\u4E2A\u5904\u7406\u51FD\u6570\u4E2D\u4F7F\u7528\u4F20\u5165\u51FD\u6570\uFF0C\u5C06 <code>item</code> \u4F20\u9012\u7ED9\u5B83\u3002\u4E00\u4E2A\u6309\u94AE\u5143\u7D20\u53EF\u4EE5\u88AB\u7528\u6765\u89E6\u53D1\u5B9E\u9645\u7684\u4E8B\u4EF6\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleRemoveItem = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onRemoveItem(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button type=&quot;button&quot; onClick={handleRemoveItem}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6211\u4EEC\u53EF\u80FD\u53EA\u80FD\u4F20\u9012 item \u7684 <code>objectID</code>\uFF0C\u56E0\u4E3A\u8FD9\u662F\u6211\u4EEC\u5728 App \u7EC4\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u9700\u8981\u7684\u5168\u90E8\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u786E\u5B9A\u8FD9\u4E2A\u5904\u7406\u51FD\u6570\u4E4B\u540E\u53EF\u80FD\u9700\u8981\u4EC0\u4E48\u4FE1\u606F\u3002\u5220\u9664\u4E00\u4E2A item \u53EF\u80FD\u9700\u8981\u7684\u4E0D\u4EC5\u662F\u4E00\u4E2A\u6807\u8BC6\u7B26\u3002\u5982\u679C\u6211\u4EEC\u8C03\u7528 <code>onRemoveItem</code> \u5904\u7406\u51FD\u6570\uFF0C\u8FD9\u4E2A item \u5E94\u8BE5\u88AB\u5B8C\u6574\u4F20\u9012\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u5B83\u7684\u6807\u8BC6\u7B26\u3002</p><p>\u6211\u4EEC\u5DF2\u7ECF\u4F7F\u7528 React \u7684 useState Hook\uFF0C\u8BA9 stories \u5217\u8868\u5177\u6709\u72B6\u6001\u3002\u5E76\u5C06\u641C\u7D22\u5230\u7684 stories \u4F5C\u4E3A List \u7EC4\u4EF6\u7684 props \u8FDB\u884C\u4F20\u9012\u3002\u4E3A\u4E86\u80FD\u591F\u5728\u5404\u81EA\u7684\u7EC4\u4EF6\u88AB\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E86\u56DE\u8C03\u51FD\u6570\uFF08<code>handleRemoveStory</code>\uFF09\u548C\u5904\u7406\u51FD\u6570\uFF08<code>handleRemoveItem</code>\uFF09\u3002\u7531\u4E8E\u5904\u7406\u51FD\u6570\u4EC5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5B83\u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u5185\u5BB9\uFF0C\u4E3A\u4E86\u5B8C\u6574\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u79FB\u9664\u8FD9\u4E2A\u5757\u4F53\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleRemoveItem = () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    onRemoveItem(item);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7531\u4E8E\u6211\u4EEC\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u79EF\u7D2F\u4E86\u5904\u7406\u51FD\u6570\uFF0C\u8FD9\u4F1A\u9020\u6210\u6211\u4EEC\u6E90\u4EE3\u7801\u53EF\u8BFB\u6027\u964D\u4F4E\u3002\u6709\u65F6\u6211\u4F1A\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u91CD\u6784\u5904\u7406\u51FD\u6570\uFF0C\u4ECE\u7BAD\u5934\u51FD\u6570\u8FD4\u56DE\u666E\u901A\u51FD\u6570\u8BED\u53E5\uFF0C\u4EC5\u662F\u4E3A\u4E86\u4F7F\u7EC4\u4EF6\u66F4\u52A0\u5BB9\u6613\u63A2\u7D22\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  function handleRemoveItem() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onRemoveItem(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 props\uFF0C\u5904\u7406\u51FD\u6570\uFF0C\u56DE\u8C03\u51FD\u6570\u548C state\u3002\u8FD9\u4E9B\u90FD\u662F\u4E4B\u524D\u8BFE\u7A0B\u5B66\u5230\u7684\u3002\u73B0\u5728\u6211\u4EEC\u5C06\u8FFD\u8E2A<strong>\u5185\u8054\u5904\u7406\u51FD\u6570</strong>\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u5728 JSX \u4E2D\u6B63\u786E\u6267\u884C\u51FD\u6570\u3002\u5728 Item \u7EC4\u4EF6\u4E2D\u4F20\u5165\u51FD\u6570\u4F5C\u4E3A\u5185\u8054\u5904\u7406\u51FD\u6570\u6709\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\u3002\u9996\u5148\uFF0C\u4F7F\u7528 JavaScript \u7684 bind \u65B9\u6CD5\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button type=&quot;button&quot; onClick={onRemoveItem.bind(null, item)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5728\u51FD\u6570\u4E0A\u4F7F\u7528 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" target="_blank" rel="noreferrer">JavaScript \u7684 bind \u65B9\u6CD5</a> \u5141\u8BB8\u6211\u4EEC\u76F4\u63A5\u7ED1\u5B9A\u53C2\u6570\uFF0C\u5728\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\u4F7F\u7528\u5B83\u3002bind \u7684\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u9644\u52A0\u4E86\u7ED1\u5B9A\u53C2\u6570\u7684\u65B0\u51FD\u6570\u3002</p><p>\u7B2C\u4E8C\u4E2A\u66F4\u4E3A\u6D41\u884C\u7684\u89E3\u51B3\u65B9\u6848\u662F\u4F7F\u7528\u4E00\u4E2A\u5305\u88C5\u7BAD\u5934\u51FD\u6570\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u6F5C\u5165\u50CF <code>item</code> \u7C7B\u7684\u53C2\u6570\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button type=&quot;button&quot; onClick={() =&gt; onRemoveItem(item)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u5FEB\u901F\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u56E0\u4E3A\u6709\u65F6\u6211\u4EEC\u4E0D\u60F3\u628A\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6\u7684\u7B80\u77ED\u51FD\u6570\u4F53\u91CD\u6784\u56DE\u5757\u4F53\uFF0C\u4E3A\u4E86\u5B9A\u4E49\u4E00\u4E2A\u9002\u5F53\u7684\u51FD\u6570\u5904\u7406\u5728\u51FD\u6570\u7B7E\u540D\u548C\u8FD4\u56DE\u8BED\u53E5\u4E4B\u95F4\u3002\u5C3D\u7BA1\u8FD9\u4E2A\u65B9\u5F0F\u76F8\u6BD4\u5176\u4ED6\u66F4\u52A0\u7B80\u6D01\uFF0C\u4F46\u662F\u7531\u4E8E JavaScript \u903B\u8F91\u53EF\u80FD\u4F1A\u88AB\u9690\u85CF\u5728 JSX \u4E2D\uFF0C\u4F1A\u5BFC\u81F4\u4EE3\u7801\u96BE\u4EE5\u8C03\u8BD5\u3002\u5982\u679C\u5305\u88C5\u7BAD\u5934\u51FD\u6570\u4F7F\u7528\u5757\u4F53\u800C\u4E0D\u662F\u7B80\u5199\u4F53\u6765\u5C01\u88C5\u8D85\u8FC7\u4E00\u884C\u7684\u5B9E\u73B0\u903B\u8F91\uFF0C\u5B83\u4F1A\u53D8\u5F97\u66F4\u52A0\u5197\u957F\u3002\u5E94\u8BE5\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // do something else</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          // note: avoid using complex logic in JSX</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          onRemoveItem(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u53EF\u4EE5\u63A5\u53D7\u4E09\u4E2A\u5904\u7406\u51FD\u6570\u7248\u672C\u4E2D\uFF0C\u5176\u4E2D\u4E24\u4E2A\u662F\u5185\u8054\u548C\u4E00\u4E2A\u5E38\u89C4\u5904\u7406\u51FD\u6570\u3002\u975E\u5185\u8054\u7684\u5904\u7406\u51FD\u6570\u4F1A\u79FB\u52A8\u8BE6\u7EC6\u7684\u5B9E\u73B0\u8FDB\u5165\u51FD\u6570\u7EC4\u4EF6\u5757\u4F53\uFF0C\u5185\u8054\u51FD\u6570\u4F1A\u79FB\u52A8\u8BE6\u7EC6\u7684\u5B9E\u73B0\u5230 JSX \u4E2D\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Inline-Handler-in-JSX" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u4EE3\u7801</a>\u3002</li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Imperative-React...hs/Inline-Handler-in-JSX?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u590D\u4E60\u5904\u7406\u51FD\u6570\uFF0C\u56DE\u8C03\u51FD\u6570\u548C\u5185\u8054\u5904\u7406\u51FD\u6570\u3002</li></ul>`,34),t=[e];function r(c,o,i,b,A,C){return n(),a("div",null,t)}const y=s(p,[["render",r]]);export{u as __pageData,y as default};
