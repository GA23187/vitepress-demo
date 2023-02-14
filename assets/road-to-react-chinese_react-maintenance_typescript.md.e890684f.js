import{_ as s,o as n,c as a,a as p}from"./app.ee052c02.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728React\u4E2D\u4F7F\u7528TypeScript","slug":"\u5728react\u4E2D\u4F7F\u7528typescript","link":"#\u5728react\u4E2D\u4F7F\u7528typescript","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-maintenance/typescript.md","lastUpdated":1676383400000}'),e={name:"road-to-react-chinese/react-maintenance/typescript.md"},l=p(`<h2 id="\u5728react\u4E2D\u4F7F\u7528typescript" tabindex="-1">\u5728React\u4E2D\u4F7F\u7528TypeScript <a class="header-anchor" href="#\u5728react\u4E2D\u4F7F\u7528typescript" aria-hidden="true">#</a></h2><p>\u5728 JavaScript \u548C React \u4E2D\u4F7F\u7528 TypeScript\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u5F3A\u5927\u7684\u5E94\u7528\u7A0B\u5E8F\u6709\u8BB8\u591A\u597D\u5904\u3002TypeScript \u96C6\u6210\u540E\u4E0D\u4F1A\u5728\u8FD0\u884C\u65F6\u5728\u547D\u4EE4\u884C\u6216\u6D4F\u89C8\u5668\u4E2D\u51FA\u73B0\u7C7B\u578B\u9519\u8BEF\uFF0C\u800C\u662F\u4F1A\u5728 IDE \u5185\u7F16\u8BD1\u65F6\u663E\u793A\u5B83\u4EEC\u3002\u5B83\u7F29\u77ED\u4E86 JavaScript \u5F00\u53D1\u7684\u53CD\u9988\u5FAA\u73AF\u7684\u5468\u671F\u3002TypeScript \u4E0D\u4EC5\u6539\u5584\u4E86\u5F00\u53D1\u4EBA\u5458\u7684\u4F53\u9A8C\uFF0C\u4E5F\u8BA9\u4EE3\u7801\u53D8\u5F97\u66F4\u52A0\u81EA\u6587\u6863\u5316\uFF0C\u5E76\u4E14\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u53D8\u91CF\u90FD\u4F7F\u7528\u4E86\u7C7B\u578B\u5B9A\u4E49\u3002\u540C\u6837\u7684\uFF0C\u79FB\u52A8\u4EE3\u7801\u5757\u6216\u6267\u884C\u66F4\u5927\u7684\u4EE3\u7801\u5E93\u7684\u91CD\u6784\u4E5F\u53D8\u5F97\u66F4\u52A0\u9AD8\u6548\u3002\u8BF8\u5982 TypeScript \u4E4B\u7C7B\u7684\u9759\u6001\u7C7B\u578B\u8BED\u8A00\u662F\u53D1\u5C55\u8D8B\u52BF\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u6BD4\u8BF8\u5982 JavaScript \u4E4B\u7C7B\u7684\u52A8\u6001\u7C7B\u578B\u8BED\u8A00\u5177\u6709\u66F4\u591A\u4F18\u52BF\u3002\u6240\u4EE5\uFF0C\u5C3D\u53EF\u80FD\u591A\u5730\u4E86\u89E3 <a href="https://www.typescriptlang.org/index.html" target="_blank" rel="noreferrer">Typescript</a> \u662F\u975E\u5E38\u6709\u7528\u7684\u3002</p><p>\u8981\u5728 React \u4E2D\u4F7F\u7528 TypeScript\uFF0C\u8BF7\u4F7F\u7528\u547D\u4EE4\u884C\u5C06 TypeScript \u53CA\u5176\u4F9D\u8D56\u9879\u5B89\u88C5\u5230\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u3002\u5982\u679C\u9047\u5230\u969C\u788D\uFF0C\u8BF7\u9075\u5FAA\u5B98\u65B9 TypeScript \u5B89\u88C5\u8BF4\u660E\u4E2D\u7684 <a href="https://create-react-app.dev/docs/adding-typescript/" target="_blank" rel="noreferrer">create-react-app</a>\uFF1A</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save typescript @types/node @types/react</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install --save typescript @types/react-dom @types/jest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u5C06\u6240\u6709 JavaScript \u6587\u4EF6(<em>.js</em>)\u91CD\u547D\u540D\u4E3A TypeScript \u6587\u4EF6(<em>.tsx</em>)\u3002</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mv src/index.js src/index.tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">mv src/App.js src/App.tsx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u5728\u547D\u4EE4\u884C\u4E2D\u91CD\u65B0\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u3002\u4F60\u53EF\u80FD\u4F1A\u5728\u6D4F\u89C8\u5668\u548C IDE \u4E2D\u9047\u5230\u7F16\u8BD1\u9519\u8BEF\u7684\u95EE\u9898\u3002\u5982\u679C\u662F IDE \u6CA1\u6709\u6B63\u786E\u663E\u793A\u7F16\u8BD1\u9519\u8BEF\uFF0C\u8BF7\u5C1D\u8BD5\u4E3A\u4F60\u7684\u7F16\u8F91\u5668\u5B89\u88C5 TypeScript \u63D2\u4EF6\uFF0C\u6216\u8005\u4E3A IDE \u5B89\u88C5\u6269\u5C55\u7A0B\u5E8F\u3002\u5728 React \u8BBE\u7F6E\u4E2D\u521D\u59CB\u5316 TypeScript \u4E4B\u540E\uFF0C\u6211\u4EEC\u5C06\u4E3A\u6574\u4E2A <em>src/App.tsx</em> \u6587\u4EF6\u6DFB\u52A0\u5B89\u5168\u7C7B\u578B\uFF0C\u4ECE\u7F16\u5199\u81EA\u5B9A\u4E49 hook \u7684\u53C2\u6570\u5F00\u59CB\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const useSemiPersistentState = (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  key: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  initialState: string</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [value, setValue] = React.useState(</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.getItem(key) || initialState</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [value, key]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return [value, setValue];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E3A\u51FD\u6570\u7684\u53C2\u6570\u6DFB\u52A0\u7C7B\u578B\u5B9A\u4E49\u7684\u505A\u6CD5\u4E3B\u8981\u5173\u6CE8\u5728 Javascript\uFF0C\u800C\u4E0D\u662F React\u3002\u6211\u4EEC\u5B9A\u4E49\u8BE5\u51FD\u6570\u9700\u8981\u4E24\u4E2A\u53C2\u6570\uFF0C\u5E76\u4E14\u4E24\u4E2A\u53C2\u6570\u90FD\u662F JavaScript \u4E2D\u7684\u57FA\u672C\u7C7B\u578B string\u3002\u540C\u6837\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u5E76\u544A\u8BC9\u4E00\u4E9B\u7C7B\u4F3C <code>state updater function</code> \u7684\u65B9\u6CD5\uFF0C\u8BE5\u51FD\u6570\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C(<code>void</code>)\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const useSemiPersistentState = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  key: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  initialState: string</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">): [string, (newValue: string) =&gt; void] =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [value, setValue] = React.useState(</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.getItem(key) || initialState</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [value, key]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return [value, setValue];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5C3D\u7BA1\u4E0E React \u6709\u5173\uFF0C\u4F46\u8003\u8651\u5230\u4EE5\u524D\u5BF9\u81EA\u5B9A\u4E49 hook \u7684\u7C7B\u578B\u5B89\u5168\u6027\u7684\u6539\u8FDB\uFF0C\u6211\u4EEC\u6CA1\u6709\u5728\u51FD\u6570\u4F53\u5185\u90E8\u7684 React hooks \u4E2D\u6DFB\u52A0\u7C7B\u578B\u3002\u8FD9\u662F\u56E0\u4E3A<strong>\u7C7B\u578B\u63A8\u65AD</strong>\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5BF9\u4E8E React hooks \u90FD\u9002\u7528\u3002\u5982\u679C\u4E00\u4E2A React useState Hook \u7684 <em>\u521D\u59CB\u5316 state</em> \u662F\u4E00\u4E2A JavaScript \u7684\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684 <em>\u5F53\u524D\u7684 state</em> \u5C06\u88AB\u63A8\u65AD\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u800C\u8FD4\u56DE\u7684 <em>state \u66F4\u65B0\u51FD\u6570</em> \u5C06\u4EC5\u4EE5\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u4E14\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const [value, setValue] = React.useState(&#39;React&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// value is inferred to be a string</span></span>
<span class="line"><span style="color:#A6ACCD;">// setValue only takes a string as argument</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u6709\u591A\u79CD\u65B9\u6CD5\u6765\u5B9E\u73B0\u4E3A React \u5E94\u7528\u7A0B\u5E8F\u53CA\u5176\u7EC4\u4EF6\u6DFB\u52A0\u7C7B\u578B\u5B89\u5168\u3002\u6211\u4EEC\u53EF\u4EE5\u4ECE\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u4E2A\u8F83\u5C0F\u7684\u7EC4\u4EF6\u7684 props \u548C state \u5F00\u59CB\u8FDB\u884C\u4FEE\u6539\u3002\u4F8B\u5982\uFF0CItem \u7EC4\u4EF6\u63A5\u6536\u4E00\u4E2A story\uFF08\u6B64\u5904\u4E3A <code>item</code>\uFF09\u4EE5\u53CA\u4E00\u4E2A\u56DE\u8C03\u5904\u7406\u51FD\u6570\uFF08\u6B64\u5904\u4E3A <code>onRemoveItem</code>\uFF09\u3002\u6211\u4EEC\u53EF\u4EE5\u50CF\u4E4B\u524D\u4E00\u6837\uFF0C\u4E3A\u4E24\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u6DFB\u52A0\u5185\u8054\u7684\u7C7B\u578B\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  item,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onRemoveItem,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">}: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  item: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    objectID: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    num_comments: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">    points: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  onRemoveItem: (item: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    objectID: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    num_comments: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">    points: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">}) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u91CC\u7684\u4EE3\u7801\u4F1A\u6709\u4E24\u4E2A\u95EE\u9898\uFF1A\u4EE3\u7801\u5197\u957F\uFF0C\u5E76\u4E14\u6709\u91CD\u590D\u9879\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5728 <em>src/App.js</em> \u9876\u90E8\u7684\u7EC4\u4EF6\u5916\u90E8\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684 Story \u7C7B\u578B\u6765\u89E3\u51B3\u8FD9\u4E24\u4E2A\u95EE\u9898\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type Story = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  objectID: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  url: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  author: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  num_comments: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  points: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Item = ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  item,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onRemoveItem,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">}: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  item: Story;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onRemoveItem: (item: Story) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">}) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>item</code> \u5B9A\u4E49\u4E3A <code>Story</code> \u7C7B\u578B\uFF1B<code>onRemoveItem</code> \u51FD\u6570\u5C06\u63A5\u53D7\u4E00\u4E2A <code>Story</code> \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5E76\u4E14\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C\u3002\u63A5\u4E0B\u6765\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u5916\u90E8\u5B9A\u4E49 Item \u7EC4\u4EF6\u7684 props \u7684\u7C7B\u578B\u7684\u65B9\u5F0F\u6765\u6574\u7406\u4E00\u4E0B\u4EE3\u7801\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type ItemProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  item: Story;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onRemoveItem: (item: Story) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }: ItemProps) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FD9\u662F\u7528 TypeScript \u5B9A\u4E49 React \u7EC4\u4EF6\u7684 props \u7684\u6700\u5E38\u7528\u7684\u65B9\u6CD5\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u7EC4\u4EF6\u6811\u4E2D\u5411\u4E0A\u5BFB\u627E\u5230 List \u7EC4\u4EF6\uFF0C\u5E76\u4E3A List \u7EC4\u4EF6\u7684 props \u6DFB\u52A0\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Story = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type Stories = Array&lt;Story&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type ListProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  list: Stories;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onRemoveItem: (item: Story) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const List = ({ list, onRemoveItem }: ListProps) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  list.map(item =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Item</span></span>
<span class="line"><span style="color:#A6ACCD;">      key={item.objectID}</span></span>
<span class="line"><span style="color:#A6ACCD;">      item={item}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onRemoveItem={onRemoveItem}</span></span>
<span class="line"><span style="color:#A6ACCD;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u6211\u4EEC\u5728 <code>ItemProps</code> \u548C <code>ListProps</code> \u4E2D\u91CD\u590D\u5B9A\u4E49\u4E86 <code>onRemoveItem</code> \u65B9\u6CD5\u3002\u4E3A\u4E86\u66F4\u52A0\u7B80\u6D01\uFF0C\u4F60<em>\u53EF\u4EE5</em>\u5C06\u5176\u63D0\u53D6\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u5B9A\u4E49\u7684 <code>OnRemoveItem</code> \u7684\u7C7B\u578B\uFF0C\u5E76\u4E14\u5728\u9700\u8981\u4F7F\u7528 <code>onRemoveItem</code> \u5C5E\u6027\u7684\u5730\u65B9\u590D\u7528\u5B83\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u968F\u7740\u7EC4\u4EF6\u88AB\u62C6\u5206\u6210\u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u5F00\u53D1\u4F1A\u53D8\u5F97\u8D8A\u6765\u8D8A\u56F0\u96BE\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u5C06\u5728\u6B64\u5904\u4FDD\u7559\u91CD\u590D\u9879\u3002</p><p>\u5F53\u6211\u4EEC\u6211\u4EEC\u5DF2\u7ECF\u5B9A\u4E49\u4E86 <code>Story</code> \u548C <code>Stories</code> \u7C7B\u578B\uFF0C\u4FBF\u53EF\u4EE5\u5C06\u5B83\u4EEC\u91CD\u65B0\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6\u3002\u5C06 Story \u7C7B\u578B\u6DFB\u52A0\u5230 App \u7EC4\u4EF6\u4E2D\u7684\u56DE\u8C03\u5904\u7406\u5668\u4E2D\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleRemoveStory = (item: Story) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;REMOVE_STORY&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      payload: item,</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>reducer</code> \u65B9\u6CD5\u4E5F\u53EF\u4EE5\u7BA1\u7406 <code>Story</code> \u7C7B\u578B\uFF0C\u9664\u975E\u6211\u4EEC\u4E0D\u5173\u5FC3 <code>state</code> \u548C <code>action</code> \u7684\u7C7B\u578B\u3002\u4F5C\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7684\u5F00\u53D1\u4EBA\u5458\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u4F20\u9012\u7ED9\u8BE5 reducer \u51FD\u6570\u7684\u53C2\u6570\u5BF9\u8C61\u53CA\u5176\u7C7B\u578B\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type StoriesState = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: Stories;</span></span>
<span class="line"><span style="color:#A6ACCD;">  isLoading: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">  isError: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type StoriesAction = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  payload: any;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const storiesReducer = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: StoriesState,</span></span>
<span class="line"><span style="color:#A6ACCD;">  action: StoriesAction</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5E26\u6709 <code>string</code> \u548C <code>any</code>\uFF08TypeScript <strong>\u901A\u914D\u7B26</strong>\uFF09\u7C7B\u578B\u5B9A\u4E49\u7684 <code>Action</code> \u7C7B\u578B\u770B\u8D77\u6765\u4E0D\u592A\u660E\u786E\uFF1B\u800C\u4E14\u6211\u4EEC\u901A\u8FC7\u5B83\u65E0\u6CD5\u83B7\u5F97\u4EFB\u4F55\u7C7B\u578B\u7684\u5B89\u5168\u6027\uFF0C\u56E0\u4E3A actions \u662F\u4E0D\u53EF\u533A\u5206\u7684\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u6BCF\u4E2A action \u7684\u7C7B\u578B\u6307\u5B9A\u4E3A<strong>\u63A5\u53E3</strong>\u6765\u4F18\u5316\uFF0C\u5E76\u4F7F\u7528<strong>\u8054\u5408\u7C7B\u578B</strong>\uFF08\u6B64\u5904\u4E3A <code>StoriesAction</code>\uFF09\u4EE5\u786E\u4FDD\u6700\u7EC8\u7C7B\u578B\u5B89\u5168\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">interface StoriesFetchInitAction {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;STORIES_FETCH_INIT&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">interface StoriesFetchSuccessAction {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;STORIES_FETCH_SUCCESS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  payload: Stories;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">interface StoriesFetchFailureAction {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;STORIES_FETCH_FAILURE&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">interface StoriesRemoveAction {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;REMOVE_STORY&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  payload: Story;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type StoriesAction =</span></span>
<span class="line"><span style="color:#A6ACCD;">  | StoriesFetchInitAction</span></span>
<span class="line"><span style="color:#A6ACCD;">  | StoriesFetchSuccessAction</span></span>
<span class="line"><span style="color:#A6ACCD;">  | StoriesFetchFailureAction</span></span>
<span class="line"><span style="color:#A6ACCD;">  | StoriesRemoveAction;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const storiesReducer = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: StoriesState,</span></span>
<span class="line"><span style="color:#A6ACCD;">  action: StoriesAction</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u73B0\u5728\u7684 stories state\uFF0Ccurrent state\u548C action \u90FD\u5B9A\u4E49\u4E86\u7C7B\u578B\uFF0C\u5E76\u4E14\u8FD4\u56DE\u65B0\u7684 state\uFF08\u901A\u8FC7\u63A8\u65AD\u51FA\u6765\u7684\uFF09\u73B0\u5728\u662F\u5B89\u5168\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u672A\u5B9A\u4E49\u7684 <code>action</code> \u7C7B\u578B\u5C06 action \u5206\u6D3E\u7ED9 reducer\uFF0C\u5219\u4F1A\u51FA\u73B0\u7C7B\u578B\u9519\u8BEF\u3002\u6216\u8005\uFF0C\u5982\u679C\u4F60\u5C06 store \u4EE5\u5916\u7684\u5176\u4ED6\u5C5E\u6027\u4F20\u9012\u7ED9\u5220\u9664 story \u7684 action\uFF0C\u5219\u4E5F\u4F1A\u51FA\u73B0\u7C7B\u578B\u9519\u8BEF\u3002</p><p>\u5728 List \u7EC4\u4EF6\u4E2D\uFF0C\u7EC4\u4EF6\u7684 return \u8BED\u53E5\u4ECD\u7136\u5B58\u5728\u7C7B\u578B\u5B89\u5168\u95EE\u9898\u3002\u53EF\u4EE5\u901A\u8FC7\u7ED9 List \u7EC4\u4EF6\u5305\u88C5 HTML <code>div</code> \u5143\u7D20\u6216 React \u7247\u6BB5\u6765\u89E3\u51B3\u6B64\u95EE\u9898\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const List = ({ list, onRemoveItem }: ListProps) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {list.map(item =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Item</span></span>
<span class="line"><span style="color:#A6ACCD;">        key={item.objectID}</span></span>
<span class="line"><span style="color:#A6ACCD;">        item={item}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onRemoveItem={onRemoveItem}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6839\u636E TypeScript \u548C React \u76F8\u5173\u7684 github issue \u7684\u8BF4\u6CD5\uFF1A\u201C<em>\u8FD9\u662F\u7531\u4E8E\u7F16\u8BD1\u5668\u7684\u9650\u5236\uFF0C\u529F\u80FD\u7EC4\u4EF6\u65E0\u6CD5\u8FD4\u56DE\u9664 JSX \u8868\u8FBE\u5F0F\u6216 null \u4EE5\u5916\u7684\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5426\u5219\u5B83\u4F1A\u62A5\u544A\u4E00\u4E2A\u9690\u542B\u7684\u9519\u8BEF\u6D88\u606F\uFF0C\u5185\u5BB9\u662F\u6307\u5176\u4ED6\u7C7B\u578B\u4E0D\u53EF\u5206\u914D\u7ED9 Element\u3002</em>\u201D</p><p>\u63A5\u4E0B\u6765\u5173\u6CE8 SearchForm \u7EC4\u4EF6\uFF0C\u8BE5\u7EC4\u4EF6\u5177\u6709\u4E8B\u4EF6\u7684\u56DE\u8C03\u5904\u7406\u5668\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type SearchFormProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  searchTerm: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSearchInput: (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSearchSubmit: (event: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const SearchForm = ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  searchTerm,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSearchInput,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSearchSubmit,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">}: SearchFormProps) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6211\u4EEC\u901A\u5E38\u4F7F\u7528 <code>React.SyntheticEvent</code> \u4EE3\u66FF <code>React.ChangeEvent</code> \u6216 <code>React.FormEvent</code> \u3002\u56DE\u5230 App \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u4F7F\u7528\u8BE5\u7C7B\u578B\u6765\u5B9A\u4E49\u56DE\u8C03\u5904\u7406\u5668\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchInput = (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    event: React.ChangeEvent&lt;HTMLInputElement&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSearchTerm(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleSearchSubmit = (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    event: React.FormEvent&lt;HTMLFormElement&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setUrl(\`\${API_ENDPOINT}\${searchTerm}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u73B0\u5728\u53EA\u5269\u4E0B InputWithLabel \u7EC4\u4EF6\u4E86\u3002\u5728\u5904\u7406\u8BE5\u7EC4\u4EF6\u7684 props \u4E4B\u524D\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E00\u4E0B React \u7684 useRef Hook \u4E2D\u7684 <code>ref</code>\u3002\u8FD9\u91CC\u7684\u95EE\u9898\u5728\u4E8E\u8FD8\u4E0D\u80FD\u63A8\u65AD\u51FA\u8FD4\u56DE\u503C\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const InputWithLabel = ({ ... }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const inputRef = React.useRef&lt;HTMLInputElement&gt;(null!);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isFocused &amp;&amp; inputRef.current) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      inputRef.current.focus();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, [isFocused]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6211\u4EEC\u5C06\u8FD4\u56DE\u7684 <code>ref</code> \u8BBE\u7F6E\u4E3A\u5B89\u5168\u7C7B\u578B\uFF0C\u5E76\u5C06\u5176\u5B9A\u4E49\u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4EC5\u5BF9\u5B83\u6267\u884C <code>focus</code> \u65B9\u6CD5\uFF08\u53EA\u8BFB\uFF09\u3002 React\u5C06\u4F1A\u5E2E\u52A9\u6211\u4EEC\u5C06 DOM \u5143\u7D20\u8BBE\u7F6E\u4E3A <code>current</code> \u5C5E\u6027\u3002</p><p>\u6700\u540E\uFF0C\u6211\u4EEC\u5C06\u5BF9 InputWithLabel \u7EC4\u4EF6\u7684 props \u8FDB\u884C\u5B89\u5168\u7C7B\u578B\u7684\u68C0\u67E5\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<code>children</code> \u5C5E\u6027\u5177\u6709\u5176 React \u7684\u7279\u5B9A\u7C7B\u578B\uFF0C\u5E76\u4E14\u8FD8\u6709\u5E26\u95EE\u53F7\u7684<strong>\u53EF\u9009\u7C7B\u578B</strong>\uFF1A</p><p title="src/App.tsx,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">type InputWithLabelProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  value: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  type?: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">  onInputChange: (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  isFocused?: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">  children: React.ReactNode;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const InputWithLabel = ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  value,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type = &#39;text&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onInputChange,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isFocused,</span></span>
<span class="line"><span style="color:#A6ACCD;">  children,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">}: InputWithLabelProps) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><code>type</code> \u548C <code>isFocused</code> \u5C5E\u6027\u90FD\u662F\u53EF\u9009\u7684\u3002\u4F7F\u7528 <code>TypeScript</code> \u7684\u65F6\u5019\uFF0C\u4F60\u53EF\u4EE5\u544A\u8BC9\u7F16\u8BD1\u5668\u4E0D\u9700\u8981\u5C06\u8FD9\u4E9B\u4F5C\u4E3A prop \u4F20\u9012\u7ED9\u7EC4\u4EF6\u3002<code>children</code> \u5C5E\u6027\u6709\u591A\u4E2A\u9002\u7528\u4E8E\u6B64\u6982\u5FF5\u7684 TypeScript \u7C7B\u578B\uFF0C\u5176\u4E2D\u6700\u901A\u7528\u7684\u662F <code>React</code> \u5E93\u4E2D\u7684 <code>React.ReactNode</code>\u3002</p><p>\u6700\u540E\uFF0C\u6211\u4EEC\u7684\u6574\u4E2A React \u5E94\u7528\u7A0B\u5E8F\u90FD\u5F15\u5165\u4E86 TypeScript \u7C7B\u578B\uFF0C\u4ECE\u800C\u5F88\u5BB9\u6613\u5728\u7F16\u8BD1\u65F6\u53D1\u73B0\u7C7B\u578B\u9519\u8BEF\u3002\u5C06 TypeScript \u6DFB\u52A0\u5230 React \u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u9996\u5148\u9700\u8981\u5728\u51FD\u6570\u7684\u53C2\u6570\u4E2D\u6DFB\u52A0\u7C7B\u578B\u5B9A\u4E49\u3002\u8FD9\u4E9B\u51FD\u6570\u53EF\u4EE5\u662F JavaScript \u51FD\u6570\uFF0C\u81EA\u5B9A\u4E49\u7684 React hook \u6216 React \u51FD\u6570\u7EC4\u4EF6\u3002\u5F53\u6211\u4EEC\u5728\u4F7F\u7528 React \u65F6\uFF0C\u4E86\u89E3\u8868\u5355\u5143\u7D20\uFF0C\u4E8B\u4EF6\u548C JSX \u7684\u7279\u5B9A\u7C7B\u578B\u5F88\u91CD\u8981\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/TypeScript-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/react-modern-final...hs/TypeScript-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u6DF1\u5165\u7814\u7A76 <a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets" target="_blank" rel="noreferrer">React + TypeScript \u5907\u5FD8\u5355</a>\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E5F\u6DB5\u76D6\u4E86\u6211\u4EEC\u5728\u672C\u8282\u4E2D\u9762\u4E34\u7684\u6700\u5E38\u89C1\u7528\u4F8B\u3002\u65E0\u9700\u4ECE\u5934\u81F3\u5C3E\u4E86\u89E3\u6240\u6709\u5185\u5BB9\u3002</li><li>\u5728\u63A5\u4E0B\u6765\u8FDB\u884C\u5404\u7AE0\u8282\u4E2D\u7684\u5B66\u4E60\u65F6\uFF0C\u8BF7\u4F7F\u7528 TypeScript \u5220\u9664\u6216\u4FDD\u7559\u4F60\u7684\u7C7B\u578B\u3002\u5982\u679C\u4F60\u9009\u62E9\u540E\u8005\uFF0C\u5219\u6BCF\u5F53\u9047\u5230\u7F16\u8BD1\u9519\u8BEF\u65F6\u90FD\u6DFB\u52A0\u65B0\u7684\u7C7B\u578B\u3002</li></ul>`,61),r=[l];function c(t,o,i,b,A,C){return n(),a("div",null,r)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
