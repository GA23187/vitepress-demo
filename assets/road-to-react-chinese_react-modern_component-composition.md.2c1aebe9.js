import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u7EC4\u4EF6\u7EC4\u5408","slug":"react-\u7EC4\u4EF6\u7EC4\u5408","link":"#react-\u7EC4\u4EF6\u7EC4\u5408","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/component-composition.md","lastUpdated":1677316569000}'),e={name:"road-to-react-chinese/react-modern/component-composition.md"},p=l(`<h2 id="react-\u7EC4\u4EF6\u7EC4\u5408" tabindex="-1">React \u7EC4\u4EF6\u7EC4\u5408 <a class="header-anchor" href="#react-\u7EC4\u4EF6\u7EC4\u5408" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u5C06\u8981\u5B66\u4E60\u5982\u4F55\u901A\u8FC7\u4E00\u4E2A\u5F00\u5408\u6807\u7B7E\uFF0C\u50CF HTML \u5143\u7D20\u4E00\u6837\u4F7F\u7528 React \u5143\u7D20\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;InputWithLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">        id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onInputChange={handleSearch}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Search</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4E0D\u50CF\u4E4B\u524D\u4F7F\u7528 <code>label</code> prop \u90A3\u6837\uFF0C\u800C\u662F\u628A \u201CSearch\u201D \u5B57\u6837\u653E\u5728\u4E86\u7EC4\u4EF6\u5143\u7D20\u6807\u7B7E\u4E4B\u95F4\u3002\u5728\u7EC4\u4EF6 InputWithLabel \u91CC\uFF0C\u53EF\u4EE5\u901A\u8FC7 <strong>React \u7684 children</strong> prop \u6765\u83B7\u53D6\u8FD9\u4E2A\u4FE1\u606F\u3002\u4E0D\u4F7F\u7528 <code>label</code> prop\uFF0C\u800C\u662F\u7528 <code>children</code> prop \u5728\u9700\u8981\u7684\u5730\u65B9\u6E32\u67D3\u6240\u6709\u4ECE\u4E0A\u5C42\u4F20\u4E0B\u6765\u7684\u4E1C\u897F\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const InputWithLabel = ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  value,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type = &#39;text&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onInputChange,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  children,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">}) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;label htmlFor={id}&gt;{children}&lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;nbsp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">      id={id}</span></span>
<span class="line"><span style="color:#A6ACCD;">      type={type}</span></span>
<span class="line"><span style="color:#A6ACCD;">      value={value}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onChange={onInputChange}</span></span>
<span class="line"><span style="color:#A6ACCD;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u73B0\u5728 React \u7EC4\u4EF6\u5143\u7D20\u8868\u73B0\u7684\u548C\u539F\u751F HTML \u5F88\u7C7B\u4F3C\u4E86\u3002\u6240\u6709\u5728\u7EC4\u4EF6\u5143\u7D20\u4E4B\u95F4\u4F20\u9012\u7684\u90E8\u5206\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>children</code> \u83B7\u53D6\u5230\uFF0C\u7136\u540E\u6E32\u67D3\u51FA\u6765\u3002\u6709\u65F6\u5F53\u4F7F\u7528\u4E00\u4E2A React \u7EC4\u4EF6\u65F6\uFF0C\u4F60\u5E0C\u671B\u5728\u5916\u90E8\u6709\u66F4\u591A\u81EA\u7531\u53BB\u51B3\u5B9A\u7EC4\u4EF6\u5185\u90E8\u5E94\u8BE5\u6E32\u67D3\u4EC0\u4E48\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;InputWithLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">        id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onInputChange={handleSearch}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u6709\u4E86 React \u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4EA4\u7EC7\u4F7F\u7528 React \u7EC4\u4EF6\u3002\u6211\u4EEC\u53EF\u4EE5\u7528\u5B83\u6765\u4F20\u9012\u4E00\u4E2A JavaScript \u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u628A\u5B57\u7B26\u4E32\u7528 HTML \u5143\u7D20 <code>&lt;strong&gt;</code> \u5305\u8D77\u6765\uFF0C\u8FD8\u4E0D\u6B62\u5982\u6B64\uFF0C\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u88AB\u5F53\u4F5C React children \u4F20\u9012\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-Component-Composition" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/Reusable-React-Component...hs/React-Component-Composition?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E React \u7EC4\u4EF6\u7EC4\u5408\u7684\u6587\u7AE0 \uFF08<a href="https://www.robinwieruch.de/react-component-composition" target="_blank" rel="noreferrer">0</a>\uFF0C<a href="https://reactjs.org/docs/composition-vs-inheritance.html" target="_blank" rel="noreferrer">1</a>\uFF09\u3002</li><li>\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u6E32\u67D3\u5B57\u7B26\u4E32\u7684\u6587\u5B57\u7EC4\u4EF6\uFF0C\u7136\u540E\u5C06\u5B83\u4F5C\u4E3A <code>children</code> \u4F20\u7ED9 InputWithLabel \u7EC4\u4EF6\u3002</li></ul>`,13),r=[p];function c(t,o,i,b,C,A){return n(),a("div",null,r)}const d=s(e,[["render",c]]);export{m as __pageData,d as default};
