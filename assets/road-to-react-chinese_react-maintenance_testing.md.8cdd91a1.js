import{_ as s,o as n,c as a,a as p}from"./app.ee052c02.js";const l="/vitepress-demo/assets/testing-pyramid.84eeae41.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5","slug":"\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5","link":"#\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5","children":[{"level":3,"title":"\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5","slug":"\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5-1","link":"#\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5-1","children":[]},{"level":3,"title":"\u5FEB\u7167\u6D4B\u8BD5","slug":"\u5FEB\u7167\u6D4B\u8BD5","link":"#\u5FEB\u7167\u6D4B\u8BD5","children":[]},{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-maintenance/testing.md","lastUpdated":1676383400000}'),e={name:"road-to-react-chinese/react-maintenance/testing.md"},r=p('<h2 id="\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5" tabindex="-1">\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5 <a class="header-anchor" href="#\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>\u6D4B\u8BD5\u4EE3\u7801\u5BF9\u4E8E\u7F16\u7A0B\u6765\u8BF4\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5E94\u8BE5\u88AB\u89C6\u4E3A\u8BA4\u771F\u7684\u5F00\u53D1\u4EBA\u5458\u7684\u4E00\u9879\u5FC5\u4FEE\u8BFE\u3002\u5728\u4EA7\u54C1\u73AF\u5883\u4F7F\u7528\u524D\uFF0C\u6211\u4EEC\u8981\u5148\u9A8C\u8BC1\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u7684\u8D28\u91CF\u548C\u529F\u80FD\u3002<a href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank" rel="noreferrer">\u6D4B\u8BD5\u91D1\u5B57\u5854</a>\u5C06\u4F5C\u4E3A\u6211\u4EEC\u7684\u6307\u5357\u3002</p><p>\u6D4B\u8BD5\u91D1\u5B57\u5854\u5305\u542B\u4E86\u7AEF\u5230\u7AEF\u6D4B\u8BD5\uFF0C\u57FA\u7840\u6D4B\u8BD5\u548C\u5355\u5143\u6D4B\u8BD5\u3002\u5355\u5143\u6D4B\u8BD5\u7528\u4E8E\u5C0F\u800C\u72EC\u7ACB\u7684\u4EE3\u7801\u5757\uFF0C\u6BD4\u5982\u4E00\u4E2A\u51FD\u6570\u6216\u7EC4\u4EF6\u3002\u96C6\u6210\u6D4B\u8BD5\u5E2E\u52A9\u6211\u4EEC\u5F04\u6E05\u695A\u8FD9\u4E9B\u5355\u5143\u662F\u5426\u80FD\u591F\u5F88\u597D\u5730\u534F\u4F5C\u3002\u7AEF\u5230\u7AEF\u6D4B\u8BD5\u6A21\u62DF\u4E86\u4E00\u4E2A\u771F\u5B9E\u7684\u60C5\u666F\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7F51\u9875\u5E94\u7528\u7684\u767B\u5F55\u6D41\u7A0B\u3002\u5355\u5143\u6D4B\u8BD5\u7684\u7F16\u5199\u5F88\u5FEB\uFF0C\u7EF4\u62A4\u4E5F\u5F88\u7B80\u5355\uFF1B\u7AEF\u5230\u7AEF\u6D4B\u8BD5\u5219\u76F8\u53CD\u3002</p><p>\u6211\u4EEC\u5E0C\u671B\u6709\u8BB8\u591A\u5355\u5143\u6D4B\u8BD5\u6765\u8986\u76D6\u51FD\u6570\u548C\u7EC4\u4EF6\u3002\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u90E8\u5206\u96C6\u6210\u6D4B\u8BD5\u6765\u786E\u4FDD\u6700\u91CD\u8981\u7684\u51FD\u6570\u548C\u7EC4\u4EF6\u6309\u7167\u6211\u4EEC\u9884\u671F\u7684\u65B9\u5F0F\u534F\u4F5C\u3002\u6700\u540E\uFF0C\u6211\u4EEC\u6216\u8BB8\u9700\u8981\u4E00\u4E9B\u7AEF\u5230\u7AEF\u6D4B\u8BD5\u6765\u6A21\u62DF\u5173\u952E\u60C5\u666F\u3002\u5728\u8FD9\u6B21\u5B66\u4E60\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8986\u76D6<strong>\u5355\u5143\u6D4B\u8BD5\u548C\u96C6\u6210\u6D4B\u8BD5</strong>\uFF0C\u4EE5\u53CA\u4E00\u79CD\u88AB\u79F0\u4E3A<strong>\u5FEB\u7167\u6D4B\u8BD5</strong>\u7684\u7279\u6B8A\u7684\u7EC4\u4EF6\u6D4B\u8BD5\u6280\u672F\u3002<strong>\u7AEF\u5230\u7AEF\u6D4B\u8BD5</strong>\u5C06\u662F\u672C\u6B21\u7EC3\u4E60\u7684\u4E00\u90E8\u5206\u3002</p><p><img src="'+l+`" alt=""></p><p>\u7531\u4E8E\u6709<a href="https://www.robinwieruch.de/react-testing-tutorial" target="_blank" rel="noreferrer">\u8BB8\u591A\u6D4B\u8BD5\u5E93</a>\uFF0C\u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\u4ECE\u4E2D\u9009\u62E9\u4E00\u4E2A\u53EF\u80FD\u662F\u4E00\u4E2A\u6311\u6218\u3002\u6211\u4EEC\u5C06\u4F7F\u7528 FaceBook \u7684 <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a> \u4F5C\u4E3A\u6D4B\u8BD5\u6846\u67B6\uFF0C\u4EE5\u907F\u514D\u8BA9\u672C\u6559\u7A0B\u8FC7\u4E8E\u4E3B\u89C2\u3002\u5176\u4ED6\u5927\u90E8\u5206 React \u7684\u6D4B\u8BD5\u5E93\u4EE5 Jest \u4F5C\u4E3A\u57FA\u7840\uFF0C\u6240\u4EE5\u8FD9\u4E5F\u662F\u5176\u8DB3\u591F\u597D\u7684\u4E00\u4E2A\u8BC1\u660E\u3002</p><h3 id="\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5-1" tabindex="-1">\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5 <a class="header-anchor" href="#\u4ECE\u5355\u5143\u6D4B\u8BD5\u5230\u96C6\u6210\u6D4B\u8BD5-1" aria-hidden="true">#</a></h3><p>\u901A\u5E38\u6765\u8BF4\u5355\u5143\u6D4B\u8BD5\u548C\u96C6\u6210\u6D4B\u8BD5\u7684\u8FB9\u754C\u662F\u6A21\u7CCA\u7684\u3002\u6D4B\u8BD5\u5305\u542B Item \u7EC4\u4EF6\u7684 List \u7EC4\u4EF6\u53EF\u4EE5\u88AB\u770B\u505A\u662F\u4E00\u4E2A\u96C6\u6210\u6D4B\u8BD5\uFF0C\u4F46\u662F\u5B83\u4E5F\u53EF\u4EE5\u88AB\u770B\u505A\u662F\u5BF9\u4E8E\u4E24\u4E2A\u9AD8\u8026\u5408\u7EC4\u4EF6\u7684\u5355\u5143\u6D4B\u8BD5\u3002\u5728\u8FD9\u4E00\u5C0F\u8282\u4E2D\uFF0C\u6211\u4EEC\u4ECE\u5355\u5143\u6D4B\u8BD5\u5F00\u59CB\uFF0C\u9010\u6E10\u5411\u96C6\u6210\u6D4B\u8BD5\u8FC7\u6E21\u3002\u8FD9\u4E24\u8005\u4E4B\u95F4\u7684\u8FC7\u6E21\u5982\u5149\u8C31\u4E00\u6837\u6A21\u7CCA\u6CA1\u6709\u8FB9\u754C\u3002</p><p>\u8BA9\u6211\u4EEC\u5728 <em>src/App.test.js</em> \u76EE\u5F55\u4E0B\u4EE5\u4E00\u4E2A\u4F2A\u6D4B\u8BD5\u4F5C\u4E3A\u5F00\u59CB\u5427\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;something truthy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;true to be true&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(true).toBe(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5E78\u8FD0\u7684\u662F\uFF0Ccreate-react-app \u81EA\u5E26 Jest\u3002\u4F60\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528\u4EA4\u4E92\u5F0F create-react-app \u6D4B\u8BD5\u811A\u672C\u6765\u8FD0\u884C\u6D4B\u8BD5\u3002\u6240\u6709\u6D4B\u8BD5\u7528\u4F8B\u7684\u8F93\u51FA\u90FD\u5C06\u663E\u793A\u5728\u4F60\u7684\u547D\u4EE4\u884C\u754C\u9762\u4E2D\u3002</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Jest \u5728\u547D\u4EE4\u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u5339\u914D\u6240\u6709\u6587\u4EF6\u540D\u540E\u7F00\u4E3A <em>test.js</em> \u7684\u6587\u4EF6\u3002\u8FD0\u884C\u6210\u529F\u7684\u6D4B\u8BD5\u5C06\u663E\u793A\u4E3A\u7EFF\u8272\uFF1B\u5931\u8D25\u7684\u5219\u663E\u793A\u4E3A\u7EA2\u8272\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;something truthy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;true to be true&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(true).toBe(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Jest \u91CC\u7684\u6D4B\u8BD5\u7531<strong>\u6D4B\u8BD5\u5957\u4EF6</strong>(<code>describe</code>)\u7EC4\u6210\uFF0C\u800C\u6D4B\u8BD5\u5957\u4EF6\u53C8\u7531<strong>\u6D4B\u8BD5\u7528\u4F8B</strong>(<code>it</code>)\u7EC4\u6210\uFF0C\u6D4B\u8BD5\u7528\u4F8B\u4E2D\u7684<strong>\u65AD\u8A00</strong>(<code>expect</code>)\u6765\u51B3\u5B9A\u6D4B\u8BD5\u662F\u5426\u901A\u8FC7\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// test suite</span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;truthy and falsy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // test case</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;true to be true&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // test assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(true).toBe(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // test case</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;false to be false&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // test assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(false).toBe(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>it</code> \u5757\u63CF\u8FF0\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u3002\u5B83\u9644\u5E26\u4E86\u4E00\u4E2A\u5728\u6D4B\u8BD5\u6210\u529F\u6216\u5931\u8D25\u65F6\u8FD4\u56DE\u7684\u6D4B\u8BD5\u63CF\u8FF0\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u5757\u5199\u5165 <code>describe</code> \u5757\uFF0C\u8BE5\u5757\u7528\u8BB8\u591A\u4E2A <code>it</code> \u5757\u5B9A\u4E49\u4E86\u4E00\u4E2A\u9488\u5BF9\u7279\u6B8A\u7EC4\u4EF6\u7684\u6D4B\u8BD5\u5957\u4EF6\u3002\u8FD9\u4E24\u4E2A\u5757\u90FD\u7528\u6765\u7EC4\u7EC7\u4F60\u7684\u6D4B\u8BD5\u7528\u4F8B\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F <code>it</code> \u51FD\u6570\u5728 JavaScript \u793E\u533A\u4E2D\u88AB\u79F0\u4E3A\u5355\u6D4B\u8BD5\u7528\u4F8B\u51FD\u6570\uFF1B\u4F46\u662F\u5728 Jest \u4E2D\uFF0C<code>it</code> \u901A\u5E38\u88AB\u7528\u505A <code>test</code> \u51FD\u6570\u7684\u522B\u540D\u3002</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;something truthy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  test(&#39;true to be true&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(true).toBe(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E3A\u4E86\u5728 Jest \u4E2D\u4F7F\u7528 React \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u4E2A\u5728\u6D4B\u8BD5\u73AF\u5883\u6E32\u67D3\u7EC4\u4EF6\u7684\u5B9E\u7528\u7684\u5E93\uFF1A</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install react-test-renderer --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5F53\u7136\u4E86\uFF0C\u5728\u4F60\u6D4B\u8BD5\u4F60\u7684\u7EC4\u4EF6\u524D\uFF0C\u4F60\u5FC5\u987B\u4ECE\u4F60\u7684 <em>src/App.js</em> \u6587\u4EF6\u4E2D\u5C06\u5176\u5BFC\u51FA\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default App;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">export { SearchForm, InputWithLabel, List, Item };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728 <em>src/App.test.js</em> \u6587\u4EF6\u4E2D\u5C06\u7EC4\u4EF6\u8FDE\u540C\u4E4B\u524D\u5B89\u88C5\u597D\u7684\u5DE5\u5177\u5E93\u4E00\u8D77\u5F15\u5165\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import renderer from &#39;react-test-renderer&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import App, { Item, List, SearchForm, InputWithLabel } from &#39;./App&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E3A Item \u7EC4\u4EF6\u7F16\u5199\u7B2C\u4E00\u4E2A\u6D4B\u8BD5\u3002\u8BE5\u6D4B\u8BD5\u7528\u4F8B\u7528\u5DE5\u5177\u5E93\u6E32\u67D3\u51FA\u7ED9\u5B9A\u7684 <code>item</code> \u7EC4\u4EF6\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import renderer from &#39;react-test-renderer&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import App, { Item, List, SearchForm, InputWithLabel } from &#39;./App&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: &#39;https://reactjs.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: &#39;Jordan Walke&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    num_comments: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    points: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">    objectID: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders all properties&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const component = renderer.create(&lt;Item item={item} /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(&#39;a&#39;).props.href).toEqual(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;https://reactjs.org/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u7EC4\u4EF6\u6216\u5143\u7D20\u7684\u5C5E\u6027\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 <code>porps</code> \u5C5E\u6027\u83B7\u53D6\u5230\u3002\u5728\u6D4B\u8BD5\u7684\u65AD\u8A00\u4E2D\uFF0C\u6211\u4EEC\u83B7\u53D6\u5230\u951A\u70B9\u6807\u7B7E(<code>a</code>)\u548C\u5B83\u7684 <code>href</code> \u5C5E\u6027\uFF0C\u540C\u65F6\u6267\u884C\u4E86\u4E00\u4E2A\u53EF\u7528\u6027\u68C0\u67E5\u3002\u5982\u679C\u6D4B\u8BD5\u53D8\u7EFF\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u786E\u5B9A Item \u7EC4\u4EF6\u951A\u70B9\u6807\u7B7E\u7684 <code>href</code> \u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E86\u6B63\u786E\u7684 <code>url</code> \u5C5E\u6027\u3002\u5728\u540C\u4E00\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E3A\u5176\u4ED6 Item \u7EC4\u4EF6\u7684\u5C5E\u6027\u589E\u52A0\u66F4\u591A\u7684\u6D4B\u8BD5\u65AD\u8A00\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: &#39;https://reactjs.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: &#39;Jordan Walke&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    num_comments: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    points: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">    objectID: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders all properties&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const component = renderer.create(&lt;Item item={item} /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(&#39;a&#39;).props.href).toEqual(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;https://reactjs.org/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      component.root.findAllByType(&#39;span&#39;)[1].props.children</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual(&#39;Jordan Walke&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u56E0\u4E3A\u6709\u591A\u4E2A <code>span</code> \u5143\u7D20\uFF0C\u6211\u4EEC\u5148\u83B7\u53D6\u5230\u6240\u6709\u7684 <code>span</code> \u5143\u7D20\u7136\u540E\u9009\u62E9\u7B2C\u4E8C\u4E2A\uFF08\u7D22\u5F15\u4E3A 1\uFF0C\u56E0\u4E3A\u4ECE 0 \u5F00\u59CB\u8BA1\u6570\uFF09\u518D\u5C06\u5176 React \u7684 <code>children</code> \u5C5E\u6027\u4E0E Item \u7EC4\u4EF6\u7684 <code>author</code> \u4F5C\u5BF9\u6BD4\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u8FD8\u4E0D\u591F\u5F7B\u5E95\u3002\u4E00\u65E6 Item \u7EC4\u4EF6\u4E2D\u7684 span \u5143\u7D20\u7684\u987A\u5E8F\u53D1\u751F\u53D8\u5316\uFF0C\u6D4B\u8BD5\u5C31\u4F1A\u5931\u8D25\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C06\u65AD\u8A00\u6539\u6210\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = { ... };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders all properties&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      component.root.findAllByProps({ children: &#39;Jordan Walke&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .length</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual(1);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FD9\u4E0B\u6D4B\u8BD5\u65AD\u8A00\u4E0D\u518D\u90A3\u4E48\u5177\u4F53\u4E86\u3002\u5B83\u53EA\u662F\u6D4B\u8BD5\u4E86\u662F\u5426\u6709\u4E00\u4E2A\u5143\u7D20\u5177\u6709 Item \u7684 <code>author</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u7528\u8FD9\u79CD\u65B9\u5F0F\u53BB\u6D4B\u8BD5 Item \u5176\u4ED6\u7684\u5C5E\u6027\u3002\u6216\u8005\u4F60\u53EF\u4EE5\u628A\u5B83\u4EEC\u7559\u4F5C\u540E\u9762\u7684\u7EC3\u4E60\u3002</p><p>\u6211\u4EEC\u5DF2\u7ECF\u6D4B\u8BD5\u4E86 Item \u7EC4\u4EF6\u662F\u5426\u5982\u671F\u6E32\u67D3\u4E86\u5B57\u7B26\u6216\u8005 HTML \u5C5E\u6027(<code>href</code>)\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD8\u6CA1\u6709\u6D4B\u8BD5\u56DE\u8C03\u5904\u7406\u51FD\u6570\u3002\u4E0B\u9762\u7684\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7 <code>button</code> \u5143\u7D20\u7684 <code>onClick</code> \u5C5E\u6027\u6A21\u62DF\u4E86\u4E00\u4E2A\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u65AD\u8A00\u3002</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = { ... };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders all properties&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;calls onRemoveItem on button click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const handleRemoveItem = jest.fn();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const component = renderer.create(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Item item={item} onRemoveItem={handleRemoveItem} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    component.root.findByType(&#39;button&#39;).props.onClick();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(handleRemoveItem).toHaveBeenCalledTimes(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(handleRemoveItem).toHaveBeenCalledWith(item);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findAllByType(Item).length).toEqual(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>Jest \u5141\u8BB8\u6211\u4EEC\u5C06\u4E00\u4E2A\u7279\u6B8A\u7684\u6D4B\u8BD5\u51FD\u6570\u5F53\u505A Item \u7EC4\u4EF6\u7684 prop \u4F20\u5165\u3002\u8FD9\u4E9B\u51FD\u6570\u88AB\u79F0\u4E3A <strong>spy</strong> \u3001 <strong>stub</strong> \u6216 <strong>mock</strong>\uFF1B\u5B83\u4EEC\u88AB\u7528\u505A\u4E0D\u540C\u7684\u6D4B\u8BD5\u573A\u666F\u3002<code>jest.fn()</code> \u5C06\u8FD4\u56DE\u4E00\u4E2A\u771F\u5B9E\u51FD\u6570\u7684 mock\uFF0C\u8FD9\u53EF\u4EE5\u8BA9\u6211\u4EEC\u6355\u6349\u5230\u51FD\u6570\u4EC0\u4E48\u65F6\u5019\u88AB\u8C03\u7528\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>toHaveBeenCalledTimes</code> \u65AD\u8A00\u6765\u65AD\u8A00\u51FD\u6570\u88AB\u8C03\u7528\u7684\u6B21\u6570\uFF1B\u4E5F\u53EF\u4EE5\u7528 <code>toHaveBeenCalledWith</code> \u6765\u9A8C\u8BC1\u4F20\u5165\u51FD\u6570\u7684\u53C2\u6570\u3002</p><p>Item \u7EC4\u4EF6\u7684\u5355\u5143\u6D4B\u8BD5\u5230\u8FD9\u91CC\u5C31\u5B8C\u6210\u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5DF2\u7ECF\u6D4B\u8BD5\u4E86\u8F93\u5165(<code>item</code>)\u548C\u8F93\u51FA(<code>onRemoveItem</code>)\u3002\u4E0D\u8981\u5C06\u8FD9\u4E24\u8005\u4E0E\u5DF2\u7ECF\u6D4B\u8BD5\u8FC7\u7684\u51FD\u6570\u7EC4\u4EF6\u7684\u8F93\u5165\uFF08\u53C2\u6570\uFF09\u548C\u8F93\u51FA\uFF08JSX\uFF09\u6DF7\u6DC6\u3002\u6700\u540E\u7684\u4E00\u4E2A\u6539\u8FDB\u662F\u589E\u52A0\u4E00\u4E2A\u516C\u6709\u7684\u8BBE\u7F6E\u51FD\u6570\u6765\u8BA9 Item \u7EC4\u4EF6\u7684\u6D4B\u8BD5\u66F4\u52A0\u7B80\u6D01\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = { ... };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handleRemoveItem = jest.fn();</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  let component;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeEach(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    component = renderer.create(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Item item={item} onRemoveItem={handleRemoveItem} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders all properties&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(&#39;a&#39;).props.href).toEqual(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;https://reactjs.org/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;calls onRemoveItem on button click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    component.root.findByType(&#39;button&#39;).props.onClick();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u5728\u6D4B\u8BD5\u4E2D\uFF0C\u4E00\u4E2A\u516C\u6709\u7684\u8BBE\u7F6E\uFF08\u6216\u62C6\u5378\uFF09\u51FD\u6570\u53EF\u4EE5\u6D88\u9664\u91CD\u590D\u4EE3\u7801\u3002\u56E0\u4E3A\u7EC4\u4EF6\u5FC5\u987B\u5728\u4E24\u4E2A\u6D4B\u8BD5\u4E2D\u6E32\u67D3\uFF0C\u800C\u4E14\u4E24\u6B21\u6E32\u67D3\u7684 props \u662F\u76F8\u540C\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5C06\u8FD9\u90E8\u5206\u4EE3\u7801\u653E\u5230\u4E00\u4E2A\u516C\u6709\u7684\u8BBE\u7F6E\u51FD\u6570\u4E2D\u3002\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u6211\u4EEC\u5C06\u8FDB\u5165 List \u7EC4\u4EF6\u7684\u6D4B\u8BD5\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;List&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const list = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: &#39;https://reactjs.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      author: &#39;Jordan Walke&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      num_comments: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">      points: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">      objectID: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: &#39;Redux&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: &#39;https://redux.js.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      author: &#39;Dan Abramov, Andrew Clark&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      num_comments: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      points: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">      objectID: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders two items&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const component = renderer.create(&lt;List list={list} /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findAllByType(Item).length).toEqual(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u8BE5\u6D4B\u8BD5\u76F4\u63A5\u68C0\u67E5\u4E86\u5728 List \u7EC4\u4EF6\u4E2D\u662F\u5426\u4EE5\u4E24\u4E2A item \u5C5E\u6027\u6E32\u67D3\u4E86\u4E24\u4E2A Item \u7EC4\u4EF6\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0A\u4E00\u4E2A Item \u7EC4\u4EF6\u6D4B\u8BD5\u4E2D\u7C7B\u4F3C\u7684\u65B9\u5F0F\uFF0C\u63A5\u7740\u6D4B\u8BD5 List \u7EC4\u4EF6\u7684\u6BCF\u4E00\u4E2A\u56DE\u8C03\u5904\u7406\u51FD\u6570(<code>onRemoveItem</code>)\u662F\u5426\u5728\u6BCF\u4E00\u4E2A Item \u7EC4\u4EF6\u4E2D\u88AB\u8C03\u7528\u3002\u90A3\u4E48\u8FD9\u4E2A\u8FD9\u6837\u7684\u6D4B\u8BD5\u8FD8\u662F\u4E00\u4E2A\u5355\u5143\u6D4B\u8BD5\u5417\uFF1F\u6216\u8005\u8BF4\u8FD9\u5DF2\u7ECF\u5C5E\u4E8E\u96C6\u6210\u6D4B\u8BD5\u4E86\u5462\uFF1F</p><p>\u5148\u628A\u8FD9\u4E2A\u95EE\u9898\u653E\u4E00\u653E\uFF0C\u6211\u4EEC\u5C06\u7EE7\u7EED\u6D4B\u8BD5\u5E26\u6709 InputWithLabel \u7EC4\u4EF6\u7684 SearchForm \u7EC4\u4EF6\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;SearchForm&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const searchFormProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    searchTerm: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    onSearchInput: jest.fn(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    onSearchSubmit: jest.fn(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let component;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeEach(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    component = renderer.create(&lt;SearchForm {...searchFormProps} /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders the input field with its value&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const value = component.root.findByType(InputWithLabel).props</span></span>
<span class="line"><span style="color:#A6ACCD;">      .value;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(value).toEqual(&#39;React&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u5728\u8FD9\u4E2A\u6D4B\u8BD5\u4E2D\uFF0C\u6211\u4EEC\u65AD\u8A00\u4E86 InputWithLabel \u7EC4\u4EF6\u662F\u5426\u4ECE SearchForm \u7EC4\u4EF6\u4E2D\u63A5\u6536\u5230\u4E86\u6B63\u786E\u7684 prop\u3002\u672C\u8D28\u4E0A\u6765\u8BF4\u8FD9\u4E2A\u6D4B\u8BD5\u5728 InputWithLabel \u7EC4\u4EF6\u4E4B\u524D\u5C31\u7ED3\u675F\u4E86\uFF0C\u56E0\u4E3A\u5B83\u53EA\u6D4B\u8BD5\u4E86\u7EC4\u4EF6\u7684\u63A5\u53E3(props)\u3002\u53EF\u4EE5\u8BF4\u5B83\u4ECD\u7136\u662F\u4E00\u4E2A\u5355\u5143\u6D4B\u8BD5\uFF0C\u56E0\u4E3A InputWithLabel \u7EC4\u4EF6\u7684\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282\u53EF\u4EE5\u5728\u4E0D\u6539\u53D8\u63A5\u53E3\u7684\u60C5\u51B5\u4E0B\u6539\u53D8\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u6539\u53D8\u6D4B\u8BD5\u6765\u83B7\u53D6\u5230 InputWithLabel \u7EC4\u4EF6\u5185 input \u7EC4\u4EF6\u7684\u5B57\u6BB5\uFF0C\u56E0\u4E3A\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u548C\u5143\u7D20\u4E5F\u4F1A\u88AB\u6E32\u67D3\u3002</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;SearchForm&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;renders the input field with its value&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    const value = component.root.findByType(&#39;input&#39;).props.value;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(value).toEqual(&#39;React&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u662F\u6211\u4EEC\u7B2C\u4E00\u6B21\u5728 SearchForm \u7EC4\u4EF6\u548C InputWithLabel \u7EC4\u4EF6\u4E4B\u95F4\u8FDB\u884C\u96C6\u6210\u6D4B\u8BD5\uFF0C\u8FD9\u4E24\u4E2A\u7EC4\u4EF6\u5E76\u4E0D\u50CF List \u7EC4\u4EF6\u548C Item \u7EC4\u4EF6\u90A3\u6837\u9AD8\u8026\u5408\u3002InputWithLabel \u7EC4\u4EF6\u53EF\u4EE5\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF08\u9AD8\u5EA6\u53EF\u91CD\u7528\uFF09\uFF0C\u800C Item \u7EC4\u4EF6\u57FA\u672C\u4E0A\u662F List \u7EC4\u4EF6\u4E2D\u4E0D\u53EF\u91CD\u7528\u7684\u90E8\u5206\u3002</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;SearchForm&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const searchFormProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    searchTerm: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    onSearchInput: jest.fn(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    onSearchSubmit: jest.fn(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;changes the input field&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const pseudoEvent = { target: &#39;Redux&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    component.root.findByType(&#39;input&#39;).props.onChange(pseudoEvent);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(searchFormProps.onSearchInput).toHaveBeenCalledWith(</span></span>
<span class="line"><span style="color:#A6ACCD;">      pseudoEvent</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;submits the form&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const pseudoEvent = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    component.root.findByType(&#39;form&#39;).props.onSubmit(pseudoEvent);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(searchFormProps.onSearchSubmit).toHaveBeenCalledWith(</span></span>
<span class="line"><span style="color:#A6ACCD;">      pseudoEvent</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u548C Item \u7EC4\u4EF6\u4E00\u6837\uFF0C\u6700\u540E\u4E24\u4E2A\u6D4B\u8BD5\u4E5F\u662F\u5BF9\u7EC4\u4EF6\u7684\u56DE\u8C03\u5904\u7406\u51FD\u6570\u8FDB\u884C\u4E86\u6D4B\u8BD5\u3002\u5BF9\u4E8E SearchForm \u7EC4\u4EF6\u7684\u63A5\u53E3\u548C\u4E0E InputWithLabel \u7EC4\u4EF6\u7684\u96C6\u6210\u6765\u8BB2\uFF0C\u6240\u6709\u7684\u8F93\u5165\uFF08\u975E\u51FD\u6570 props\uFF09\u548C\u8F93\u51FA\uFF08\u56DE\u8C03\u5904\u7406\u51FD\u6570\uFF09props \u90FD\u88AB\u6D4B\u8BD5\u4E86\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u6D4B\u8BD5\u50CF\u7981\u7528\u6309\u94AE\u8FD9\u6837\u7684\u8FB9\u754C\u60C5\u51B5\u3002\u5728\u5DF2\u7ECF\u6E32\u67D3\u7684\u6D4B\u8BD5\u7EC4\u4EF6\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>update()</code> \u65B9\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u65B0\u7684 props\u3002</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;SearchForm&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const searchFormProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    searchTerm: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    onSearchInput: jest.fn(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    onSearchSubmit: jest.fn(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let component;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeEach(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    component = renderer.create(&lt;SearchForm {...searchFormProps} /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;disables the button and prevents submit&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    component.update(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;SearchForm {...searchFormProps} searchTerm=&quot;&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      component.root.findByType(&#39;button&#39;).props.disabled</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toBeTruthy();</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u5C06\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u7EC4\u4EF6\u5C42\u6B21\u7ED3\u6784\u4E2D\u518D\u6B21\u6DF1\u5165\u3002App \u7EC4\u4EF6\u83B7\u53D6 list \u6570\u636E\u540E\uFF0C\u4F1A\u5C06\u5176\u63D0\u4F9B\u7ED9 List \u7EC4\u4EF6\u3002\u5728\u6D4B\u8BD5\u4E2D\u5F15\u5165 App \u7EC4\u4EF6\u540E\uFF0C\u4E00\u4E2A\u672C\u5730\u7684\u6D4B\u8BD5\u4F1A\u662F\u8FD9\u6837\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;App&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;succeeds fetching data with a list&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        url: &#39;https://reactjs.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        author: &#39;Jordan Walke&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        num_comments: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        points: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">        objectID: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;Redux&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        url: &#39;https://redux.js.org/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        author: &#39;Dan Abramov, Andrew Clark&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        num_comments: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">        points: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">        objectID: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const component = renderer.create(&lt;App /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(List).props.list).toEqual(list);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5728\u5B9E\u9645\u7684 App \u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\uFF08axios\uFF09\u5411\u4E00\u4E2A\u8FDC\u7A0B API \u53D1\u51FA\u8BF7\u6C42\u3002\u8FD9\u4E2A API \u8FD4\u56DE\u7684\u6570\u636E\u662F\u6211\u4EEC\u5728\u6D4B\u8BD5\u4E2D\u65E0\u6CD5\u9884\u77E5\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u5BF9\u5176\u8FDB\u884C mock\u3002Jest \u63D0\u4F9B\u4E86 mock \u6574\u4E2A\u5E93\u53CA\u5176\u65B9\u6CD5\u7684\u673A\u5236\u3002\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8981\u6A21\u62DF axios \u7684 <code>get()</code> \u65B9\u6CD5\u6765\u8FD4\u56DE\u6211\u4EEC\u60F3\u8981\u7684\u6570\u636E\u3002</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import renderer from &#39;react-test-renderer&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">jest.mock(&#39;axios&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;App&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;succeeds fetching data with a list&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    const promise = Promise.resolve({</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        hits: list,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    axios.get.mockImplementationOnce(() =&gt; promise);</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const component = renderer.create(&lt;App /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(List).props.list).toEqual(list);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6D4B\u8BD5\u662F\u540C\u6B65\u8BFB\u53D6\u7684\uFF0C\u4F46\u6211\u4EEC\u8FD8\u662F\u8981\u5904\u7406\u5F02\u6B65\u6570\u636E\u3002\u5F53\u7EC4\u4EF6\u7684\u72B6\u6001\u66F4\u65B0\u65F6\uFF0C\u7EC4\u4EF6\u5E94\u8BE5\u91CD\u65B0\u6E32\u67D3\u3002\u6211\u4EEC\u53EF\u4EE5\u7528\u6211\u4EEC\u7684\u5DE5\u5177\u5E93\u548C async/await \u6765\u505A\u5230\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;App&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;succeeds fetching data with a list&#39;, async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list = [ ... ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const promise = Promise.resolve({</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        hits: list,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    axios.get.mockImplementationOnce(() =&gt; promise);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    let component;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    await renderer.act(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      component = renderer.create(&lt;App /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(List).props.list).toEqual(list);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6211\u4EEC\u5E76\u6CA1\u6709\u6E32\u67D3 App \u7EC4\u4EF6\uFF0C\u800C\u662F\u901A\u8FC7 mock \u83B7\u53D6\u6570\u636E\u7684\u65B9\u6CD5\u6765\u6A21\u62DF\u8FDC\u7A0B API \u7684\u54CD\u5E94\u3002\u4E3A\u4E86\u4E13\u6CE8\u4E8E happy path\uFF0C\u6211\u4EEC\u544A\u8BC9\u6D4B\u8BD5\u5C06\u7EC4\u4EF6\u89C6\u4E3A\u5F02\u6B65\u66F4\u65B0\u7EC4\u4EF6\u3002\u4F60\u53EF\u4EE5\u5C06\u7C7B\u4F3C\u7684\u7B56\u7565\u5E94\u7528\u5230 unhappy path \u4E0A\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;App&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;succeeds fetching data with a list&#39;, async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;fails fetching data with a list&#39;, async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const promise = Promise.reject();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    axios.get.mockImplementationOnce(() =&gt; promise);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let component;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    await renderer.act(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      component = renderer.create(&lt;App /&gt;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(component.root.findByType(&#39;p&#39;).props.children).toEqual(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;Something went wrong ...&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u73B0\u5728\u6570\u636E\u7684\u83B7\u53D6\u548C\u4E0E\u8FDC\u7A0B API \u7684\u96C6\u6210\u5DF2\u7ECF\u6D4B\u8BD5\u5B8C\u6BD5\u3002\u6211\u4EEC\u4ECE\u4E13\u6CE8\u4E8E\u5355\u4E2A\u7EC4\u4EF6\u7684\u5355\u5143\u6D4B\u8BD5\uFF0C\u8F6C\u5411\u4E86\u5BF9\u591A\u4E2A\u7EC4\u4EF6\u7684\u6D4B\u8BD5\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u4E0E\u7B2C\u4E09\u65B9\u5982 axios \u548C\u8FDC\u7A0B API \u7684\u96C6\u6210\u3002</p><h3 id="\u5FEB\u7167\u6D4B\u8BD5" tabindex="-1">\u5FEB\u7167\u6D4B\u8BD5 <a class="header-anchor" href="#\u5FEB\u7167\u6D4B\u8BD5" aria-hidden="true">#</a></h3><p>Jest \u8FD8\u53EF\u4EE5\u8BA9\u4F60\u5BF9\u4F60\u7684\u6E32\u67D3\u7EC4\u4EF6\u8FDB\u884C<strong>\u5FEB\u7167</strong>\uFF0C\u5C06\u5176\u4E0E\u672A\u6765\u6293\u53D6\u7684\u5FEB\u7167\u7ED3\u679C\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u5E76\u5728\u53D1\u73B0\u53D8\u52A8\u65F6\u901A\u77E5\u4F60\u3002\u7136\u540E\u6839\u636E\u6240\u9700\u7684\u7ED3\u679C\uFF0C\u53EF\u4EE5\u63A5\u53D7\u6216\u62D2\u7EDD\u66F4\u6539\u3002\u8FD9\u79CD\u673A\u5236\u662F\u5BF9\u5355\u5143\u548C\u96C6\u6210\u6D4B\u8BD5\u7684\u5F88\u597D\u8865\u5145\uFF0C\u56E0\u4E3A\u5B83\u53EA\u6D4B\u8BD5\u6E32\u67D3\u8F93\u51FA\u7684\u5DEE\u5F02\uFF0C\u800C\u4E0D\u9700\u8981\u5927\u91CF\u7684\u7EF4\u62A4\u6210\u672C\u3002\u8981\u67E5\u770B\u5B83\u7684\u5B9E\u9645\u64CD\u4F5C\uFF0C\u8BF7\u7528\u4F60\u7684\u7B2C\u4E00\u4E2A\u5FEB\u7167\u6D4B\u8BD5\u6765\u6269\u5C55 Item \u7EC4\u4EF6\u7684\u6D4B\u8BD5\u5957\u4EF6\uFF1A</p><p title="src/App.test.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;Item&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeEach(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    component = renderer.create(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Item item={item} onRemoveItem={handleRemoveItem} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  test(&#39;renders snapshot&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let tree = component.toJSON();</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(tree).toMatchSnapshot();</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u518D\u6B21\u8FD0\u884C\u4F60\u7684\u6D4B\u8BD5\uFF0C\u89C2\u5BDF\u5B83\u4EEC\u5982\u4F55\u6210\u529F\u6216\u5931\u8D25\u7684\u3002\u4E00\u65E6\u6211\u4EEC\u66F4\u6539 <em>src/App.js</em> \u6587\u4EF6\u4E2D Item \u7EC4\u4EF6\u7684\u6E32\u67D3\u5757\u7684\u8F93\u51FA\uFF0C\u7531\u6B64\u6539\u53D8\u4E86\u8FD4\u56DE\u7684 HTML \u7ED3\u6784\uFF0C\u5FEB\u7167\u6D4B\u8BD5\u5C31\u4F1A\u5931\u8D25\u3002\u8FD9\u65F6\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u51B3\u5B9A\u662F\u66F4\u65B0\u5FEB\u7167\u8FD8\u662F\u5BF9 Item \u7EC4\u4EF6\u8FDB\u884C\u8C03\u67E5\u3002</p><p>Jest \u5C06\u5FEB\u7167\u5B58\u50A8\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF0C\u8FD9\u6837\u5B83\u5C31\u53EF\u4EE5\u5BF9\u672A\u6765\u7684\u5FEB\u7167\u6D4B\u8BD5\u8FDB\u884C\u5DEE\u522B\u9A8C\u8BC1\u3002\u7528\u6237\u53EF\u4EE5\u8DE8\u56E2\u961F\u5171\u4EAB\u8FD9\u4E9B\u5FEB\u7167\u4EE5\u8FDB\u884C\u7248\u672C\u63A7\u5236\uFF08\u4F8B\u5982\uFF1Agit\uFF09\u3002\u7B2C\u4E00\u6B21\u8FD0\u884C\u5FEB\u7167\u6D4B\u8BD5\u65F6\uFF0C\u4F1A\u5728\u9879\u76EE\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u5FEB\u7167\u6587\u4EF6\u3002\u5F53\u518D\u6B21\u8FD0\u884C\u6D4B\u8BD5\u65F6\uFF0C\u5FEB\u7167\u6309\u7167\u9884\u671F\u5C06\u4E0E\u6700\u8FD1\u4E00\u6B21\u6D4B\u8BD5\u8FD0\u884C\u7684\u7248\u672C\u76F8\u5339\u914D\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u5982\u4F55\u786E\u4FDD DOM \u4FDD\u6301\u4E0D\u53D8\u7684\u65B9\u6CD5\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li><p>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/react-testing" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</p><ul><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/react-modern-final...hs/react-testing?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li></ul></li><li><p>\u4E3A\u6240\u6709\u5176\u4ED6\u7684\u7EC4\u4EF6\u52A0\u4E0A\u4E00\u4E2A\u5FEB\u7167\u6D4B\u8BD5\u3002</p></li><li><p>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E<a href="https://www.robinwieruch.de/react-testing-tutorial" target="_blank" rel="noreferrer">\u6D4B\u8BD5 React \u7EC4\u4EF6</a>\u7684\u4FE1\u606F\u3002</p><ul><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a> \u548C <a href="https://www.robinwieruch.de/react-testing-jest/" target="_blank" rel="noreferrer">React \u4E2D\u7684 Jest</a> \u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u3001\u96C6\u6210\u6D4B\u8BD5\u548C\u5FEB\u7167\u6D4B\u8BD5\u7684\u4FE1\u606F\u3002</li></ul></li><li><p>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E <a href="https://www.robinwieruch.de/react-testing-cypress" target="_blank" rel="noreferrer">React \u4E2D\u7AEF\u5230\u7AEF\u6D4B\u8BD5</a>\u7684\u4FE1\u606F\u3002</p></li><li><p>\u5728\u63A5\u4E0B\u6765\u7684\u7AE0\u8282\u4E2D\u7EE7\u7EED\u5B66\u4E60\u8BFE\u7A0B\u7684\u540C\u65F6\uFF0C\u4FDD\u6301\u4F60\u7684\u6D4B\u8BD5\u7ED3\u679C\u4E3A\u7EFF\u8272\uFF0C\u5E76\u4E14\u5728\u4F60\u4EFB\u4F55\u65F6\u5019\u89C9\u5F97\u5E94\u8BE5\u52A0\u6D4B\u8BD5\u7684\u65F6\u5019\u52A0\u4E0A\u65B0\u7684\u6D4B\u8BD5\u3002</p></li></ul>`,87),c=[r];function t(o,i,b,A,C,u){return n(),a("div",null,c)}const D=s(e,[["render",t]]);export{y as __pageData,D as default};
