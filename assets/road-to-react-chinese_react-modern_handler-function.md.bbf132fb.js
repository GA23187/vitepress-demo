import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSX \u4E2D\u7684\u5904\u7406\u51FD\u6570","slug":"jsx-\u4E2D\u7684\u5904\u7406\u51FD\u6570","link":"#jsx-\u4E2D\u7684\u5904\u7406\u51FD\u6570","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/handler-function.md","lastUpdated":1677316569000}'),e={name:"road-to-react-chinese/react-modern/handler-function.md"},p=l(`<h2 id="jsx-\u4E2D\u7684\u5904\u7406\u51FD\u6570" tabindex="-1">JSX \u4E2D\u7684\u5904\u7406\u51FD\u6570 <a class="header-anchor" href="#jsx-\u4E2D\u7684\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u8FD8\u6CA1\u4F7F\u7528\u5230 App \u7EC4\u4EF6\u91CC\u7684\u8F93\u5165\u6846\u53CA\u5176\u6807\u7B7E\u3002\u5728 JSX \u4E4B\u5916\u7684 HTML \u4E2D\uFF0Cinput \u6709\u4E00\u4E2A <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange" target="_blank" rel="noreferrer">onchange \u5904\u7406\u51FD\u6570</a>\u3002\u6211\u4EEC\u5C06\u8981\u5B66\u4E60\u5982\u4F55\u5728 React \u7EC4\u4EF6\u4E2D\u7684 JSX \u4E0A\u4F7F\u7528 onchange \u5904\u7406\u51FD\u6570\u3002\u8BA9\u6211\u4EEC\u5148\u628A App \u7EC4\u4EF6\u4ECE\u7B80\u6D01\u4F53\u91CD\u6784\u56DE\u5757\u4F53\uFF0C\u4EE5\u4FBF\u6DFB\u52A0\u66F4\u591A\u5B9E\u73B0\u7EC6\u8282\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // do something in between</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u968F\u540E\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u666E\u901A\u51FD\u6570\u6216\u8005\u7BAD\u5934\u51FD\u6570\u90FD\u53EF\u4EE5\uFF0C\u7528\u6765\u5904\u7406 input \u7684 change \u4E8B\u4EF6\u3002\u5728 React \u4E2D\uFF0C\u8FD9\u79CD\u51FD\u6570\u53EB\u505A <strong>\uFF08\u4E8B\u4EF6\uFF09\u5904\u7406\u51FD\u6570</strong>\u3002\u73B0\u5728\u53EF\u4EE5\u628A\u8FD9\u4E2A\u51FD\u6570\u4F20\u7ED9 input \u7684 <code>onChange</code> \u5C5E\u6027\u4E86\uFF08JSX \u547D\u540D\u7684\u5C5E\u6027\uFF09\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleChange = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(event);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor=&quot;search&quot;&gt;Search: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input id=&quot;search&quot; type=&quot;text&quot; onChange={handleChange} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;List /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\uFF0C\u518D\u6253\u5F00\u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u5728\u8F93\u5165\u6846\u6253\u5B57\u4E4B\u540E\u7684\u65E5\u5FD7\u4E86\u3002\u8FD9\u88AB\u79F0\u4E3A<strong>\u5408\u6210\u4E8B\u4EF6</strong>\uFF0C\u7531\u4E00\u4E2A JavaScript \u5BF9\u8C61\u6784\u6210\u3002\u901A\u8FC7\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u62FF\u5230\u8F93\u5165\u6846\u53D1\u51FA\u7684\u503C\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleChange = event =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(event.target.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return ( ... );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5408\u6210\u4E8B\u4EF6\u672C\u8D28\u4E0A\u5C31\u662F\u628A<a href="https://developer.mozilla.org/en-US/docs/Web/Events" target="_blank" rel="noreferrer">\u6D4F\u89C8\u5668\u7684\u539F\u751F\u4E8B\u4EF6</a>\u5305\u4E86\u4E00\u5C42\uFF0C\u9644\u52A0\u4E86\u4E00\u4E9B\u6709\u7528\u7684\u51FD\u6570\u53EF\u4EE5\u963B\u6B62\u6D4F\u89C8\u5668\u9ED8\u8BA4\u884C\u4E3A\uFF08\u6BD4\u5982\uFF0C\u7528\u6237\u70B9\u51FB\u8868\u5355\u63D0\u4EA4\u6309\u94AE\u4E4B\u540E\u6D4F\u89C8\u5668\u4F1A\u5237\u65B0\u9875\u9762\uFF09\u3002\u6709\u65F6\u4F60\u4F1A\u7528\u5230\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u6709\u65F6\u4E0D\u9700\u8981\u3002</p><p>\u8FD9\u5C31\u662F\u5982\u4F55\u901A\u8FC7\u7ED9 HTML \u5143\u7D20\u9644\u52A0 JSX \u5904\u7406\u51FD\u6570\u6765\u54CD\u5E94\u7528\u6237\u4EA4\u4E92\u7684\u65B9\u5F0F\u3002\u53EA\u628A\u51FD\u6570\u4F20\u7ED9\u8FD9\u4E9B\u5904\u7406\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u9664\u975E\u8FD4\u56DE\u503C\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// don&#39;t do this</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">  id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  onChange={handleChange()}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// do this instead</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">  id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  onChange={handleChange}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>HTML \u548C JavaScript \u5728 JSX \u91CC\u5408\u4F5C\u5730\u5F88\u6109\u5FEB\u3002HTML \u4E2D\u7684 JavaScript \u53EF\u4EE5\u5C55\u793A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F20\u9012 JavaScript \u7684\u57FA\u672C\u7C7B\u578B\u7ED9 HTML \u5C5E\u6027\uFF08\u4F8B\u5982\u628A <code>href</code> \u4F20\u7ED9 <code>&lt;a&gt;</code>\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7ED9\u5143\u7D20\u5C5E\u6027\u4F20\u9012\u51FD\u6570\u6765\u5904\u7406\u4E8B\u4EF6\u3002</p><p>\u6211\u4E2A\u4EBA\u66F4\u503E\u5411\u4E8E\u7528\u7BAD\u5934\u51FD\u6570\u6765\u5B9A\u4E49\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u8FD9\u6837\u66F4\u7B80\u6D01\u3002\u4F46\u662F\u5728\u7A0D\u5927\u7684 React \u7EC4\u4EF6\u4E2D\uFF0C\u6211\u53D1\u73B0\u81EA\u5DF1\u4E5F\u4F1A\u4F7F\u7528\u51FD\u6570\u58F0\u660E\uFF0C\u56E0\u4E3A\u8FD9\u6837\u80FD\u66F4\u597D\u5730\u548C\u7EC4\u4EF6\u4E2D\u5176\u4ED6\u7684\u53D8\u91CF\u58F0\u660E\u533A\u5206\u5F00\u6765\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Handler-Function-in-JSX" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-Component-Definition...hs/Handler-Function-in-JSX?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://reactjs.org/docs/events.html" target="_blank" rel="noreferrer">React\u7684\u4E8B\u4EF6</a>\u7684\u6587\u7AE0\u3002</li></ul>`,18),r=[p];function t(c,o,i,b,u,C){return n(),a("div",null,r)}const m=s(e,[["render",t]]);export{d as __pageData,m as default};