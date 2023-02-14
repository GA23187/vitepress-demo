import{_ as s,o as n,c as a,a as l}from"./app.a9f825fd.js";const m=JSON.parse('{"title":"\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199 Promise \u5417\uFF08\u4E0B\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECE Promise then \u7684\u94FE\u5F0F\u8C03\u7528\u7EE7\u7EED\u8C08\u8D77","slug":"\u4ECE-promise-then-\u7684\u94FE\u5F0F\u8C03\u7528\u7EE7\u7EED\u8C08\u8D77","link":"#\u4ECE-promise-then-\u7684\u94FE\u5F0F\u8C03\u7528\u7EE7\u7EED\u8C08\u8D77","children":[]},{"level":2,"title":"\u94FE\u5F0F\u8C03\u7528\u521D\u6B65\u5B9E\u73B0","slug":"\u94FE\u5F0F\u8C03\u7528\u521D\u6B65\u5B9E\u73B0","link":"#\u94FE\u5F0F\u8C03\u7528\u521D\u6B65\u5B9E\u73B0","children":[]},{"level":2,"title":"\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u5B8C\u5584","slug":"\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u5B8C\u5584","link":"#\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u5B8C\u5584","children":[]},{"level":2,"title":"Promise \u7A7F\u900F\u5B9E\u73B0","slug":"promise-\u7A7F\u900F\u5B9E\u73B0","link":"#promise-\u7A7F\u900F\u5B9E\u73B0","children":[]},{"level":2,"title":"Promise \u9759\u6001\u65B9\u6CD5\u548C\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0","slug":"promise-\u9759\u6001\u65B9\u6CD5\u548C\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0","link":"#promise-\u9759\u6001\u65B9\u6CD5\u548C\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0","children":[{"level":3,"title":"Promise.prototype.catch \u5B9E\u73B0","slug":"promise-prototype-catch-\u5B9E\u73B0","link":"#promise-prototype-catch-\u5B9E\u73B0","children":[]},{"level":3,"title":"Promise.prototype.resolve \u5B9E\u73B0","slug":"promise-prototype-resolve-\u5B9E\u73B0","link":"#promise-prototype-resolve-\u5B9E\u73B0","children":[]},{"level":3,"title":"Promise.all \u5B9E\u73B0","slug":"promise-all-\u5B9E\u73B0","link":"#promise-all-\u5B9E\u73B0","children":[]},{"level":3,"title":"Promise.race \u5B9E\u73B0","slug":"promise-race-\u5B9E\u73B0","link":"#promise-race-\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u5206\u4EAB\u4EA4\u6D41","slug":"\u5206\u4EAB\u4EA4\u6D41","link":"#\u5206\u4EAB\u4EA4\u6D41","children":[]}],"relativePath":"advanced-core-knowledage-front-end/javascript-yu-yan-jin-jie/010-ni-yi-wei-wo-zhen-de-xiang-rang-ni-shou-xie-promise-ma-xia.md","lastUpdated":1676386809000}'),e={name:"advanced-core-knowledage-front-end/javascript-yu-yan-jin-jie/010-ni-yi-wei-wo-zhen-de-xiang-rang-ni-shou-xie-promise-ma-xia.md"},p=l(`<h1 id="\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199-promise-\u5417\uFF08\u4E0B\uFF09" tabindex="-1">\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199 Promise \u5417\uFF08\u4E0B\uFF09 <a class="header-anchor" href="#\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199-promise-\u5417\uFF08\u4E0B\uFF09" aria-hidden="true">#</a></h1><p>\u5728\u4E0A\u4E00\u8BB2\u4E2D\uFF0C\u6211\u4EEC\u6E10\u8FDB\u5F0F\u5730\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8C8C\u4F3C\u80FD\u5DE5\u4F5C\u7684 Promise\uFF0C\u5E76\u914D\u4EE5\u5B9E\u4F8B\u8FDB\u884C\u5B8C\u5584\u3002\u5982\u679C\u4F60\u89C9\u5F97\u5DF2\u7ECF\u63A5\u8FD1\u201C\u5927\u529F\u544A\u6210\u201D\u4E86\uFF0C\u5176\u5B9E\u8FD9\u624D\u521A\u521A\u5F00\u59CB\u3002Promise \u8FD9\u4E2A\u6982\u5FF5\u76F8\u5BF9\u6765\u8BF4\u6BD4\u8F83\u590D\u6742\uFF0C\u4E0B\u9762\u7EE7\u7EED\u4E00\u8FB9\u7814\u7A76\u3001\u4E00\u8FB9\u5B9E\u73B0\u5427\u3002</p><p>\u5148\u6765\u56DE\u987E\u4E00\u4E0B\u8FD9\u4E24\u8282\u8BFE\u7684\u76F8\u5173\u77E5\u8BC6\u70B9\uFF1A</p><p><img src="https://images.gitbook.cn/5089c410-8130-11e9-867f-b5a1456c4340" alt="enter image description here"></p><p>\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u8BA9\u6211\u4EEC\u5F00\u59CB\u5427\u3002</p><h2 id="\u4ECE-promise-then-\u7684\u94FE\u5F0F\u8C03\u7528\u7EE7\u7EED\u8C08\u8D77" tabindex="-1">\u4ECE Promise then \u7684\u94FE\u5F0F\u8C03\u7528\u7EE7\u7EED\u8C08\u8D77 <a class="header-anchor" href="#\u4ECE-promise-then-\u7684\u94FE\u5F0F\u8C03\u7528\u7EE7\u7EED\u8C08\u8D77" aria-hidden="true">#</a></h2><p>\u5148\u6765\u770B\u4E00\u9053\u9898\u76EE\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return \`\${data} next then\`</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6267\u884C\u540E\uFF0C\u5C06\u4F1A\u5728 2 \u79D2\u540E\u8F93\u51FA\uFF1Alucas\uFF0C\u7D27\u63A5\u7740\u8F93\u51FA\uFF1Alucas next then\u3002</p><p>\u6211\u4EEC\u770B\u5230\uFF0CPromise \u5B9E\u4F8B\u7684 then \u65B9\u6CD5\u652F\u6301\u94FE\u5F0F\u8C03\u7528\uFF0C\u8F93\u51FA resolved \u503C\u540E\uFF0C\u5982\u679C\u5728 then \u65B9\u6CD5\u4F53 onfulfilled \u51FD\u6570\u4E2D\u540C\u6B65\u663E\u5F0F\u8FD4\u56DE\u65B0\u7684\u503C\uFF0C\u5C06\u4F1A\u5728\u65B0 Promise \u5B9E\u4F8B\u7684 then \u65B9\u6CD5 onfulfilled \u51FD\u6570\u4E2D\u8F93\u51FA\u65B0\u503C\u3002</p><p>\u5982\u679C\u5728\u7B2C\u4E00\u4E2A then \u65B9\u6CD5\u4F53 onfulfilled \u51FD\u6570\u4E2D\u8FD4\u56DE\u53E6\u4E00\u4E2A Promise \u5B9E\u4F8B \uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(\`\${data} next then\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 4000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5C06\u5728 2 \u79D2\u540E\u8F93\u51FA\uFF1Alucas\uFF0C\u7D27\u63A5\u7740\u518D\u8FC7 4 \u79D2\u540E\uFF08\u7B2C 6 \u79D2\uFF09\u8F93\u51FA\uFF1Alucas next then\u3002</p><p>\u7531\u6B64\u53EF\u77E5\uFF1A</p><p>\u4E00\u4E2A Promise \u5B9E\u4F8B\u7684 then \u65B9\u6CD5\u4F53 onfulfilled \u51FD\u6570\u548C onrejected \u51FD\u6570\u4E2D\uFF0C\u662F\u652F\u6301\u518D\u6B21\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\u7684\uFF0C\u4E5F\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A\u975E Promise \u5B9E\u4F8B\u7684\u666E\u901A\u503C\uFF1B\u5E76\u4E14\u8FD4\u56DE\u7684\u8FD9\u4E2A Promise \u5B9E\u4F8B\u6216\u8005\u8FD9\u4E2A\u975E Promise \u5B9E\u4F8B\u7684\u666E\u901A\u503C\u5C06\u4F1A\u4F20\u7ED9\u4E0B\u4E00\u4E2A then \u65B9\u6CD5 onfulfilled \u51FD\u6570\u6216\u8005 onrejected \u51FD\u6570\u4E2D\uFF0C\u8FD9\u6837\u5C31\u652F\u6301\u94FE\u5F0F\u8C03\u7528\u4E86\u3002</p><p>\u90A3\u6211\u4EEC\u8BE5\u600E\u4E48\u5B9E\u73B0\u8FD9\u79CD\u884C\u4E3A\u5462\uFF1F</p><h2 id="\u94FE\u5F0F\u8C03\u7528\u521D\u6B65\u5B9E\u73B0" tabindex="-1">\u94FE\u5F0F\u8C03\u7528\u521D\u6B65\u5B9E\u73B0 <a class="header-anchor" href="#\u94FE\u5F0F\u8C03\u7528\u521D\u6B65\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u8BA9\u6211\u4EEC\u6765\u5206\u6790\u4E00\u4E0B\uFF1A\u4E3A\u4E86\u80FD\u591F\u652F\u6301 then \u65B9\u6CD5\u7684\u94FE\u5F0F\u8C03\u7528\uFF0C\u90A3\u4E48\u6BCF\u4E00\u4E2A then \u65B9\u6CD5\u7684 onfulfilled \u51FD\u6570\u548C onrejected \u51FD\u6570\u90FD\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\u3002</p><p>\u6211\u4EEC\u4E00\u6B65\u4E00\u6B65\u6765\uFF0C\u5148\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return \`\${data} next then\`</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8FD9\u79CD onfulfilled \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u503C\u7684\u573A\u666F\uFF0C\u8FD9\u91CC onfulfilled \u51FD\u6570\u6307\u7684\u662F\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return \`\${data} next then\`</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u6211\u4EEC\u4E0A\u4E00\u8BB2\u5B9E\u73B0\u7684 then \u65B9\u6CD5\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 promise2 \u7528\u4EE5\u8FD4\u56DE\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; { throw error }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // promise2 \u5C06\u4F5C\u4E3A then \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  let promse2</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promse2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u8FD9\u4E2A\u65B0\u7684 promse2 resolved \u7684\u503C\u4E3A onfulfilled \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onFulfilledArray.push(onfulfilled)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onRejectedArray.push(onrejected)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5F53\u7136\u522B\u5FD8\u4E86 this.status === &#39;rejected&#39; \u72B6\u6001\u548C this.status === &#39;pending&#39; \u72B6\u6001\u4E5F\u8981\u52A0\u5165\u76F8\u540C\u7684\u903B\u8F91\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // promise2 \u5C06\u4F5C\u4E3A then \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  let promise2</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u8FD9\u4E2A\u65B0\u7684 promise2 resolved \u7684\u503C\u4E3A onfulfilled \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u8FD9\u4E2A\u65B0\u7684 promise2 reject \u7684\u503C\u4E3A onrejected \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onrejected(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledArray.push(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedArray.push(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })      </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>\u8FD9\u91CC\u8981\u91CD\u70B9\u7406\u89E3 this.status === &#39;pending&#39; \u5224\u65AD\u5206\u652F\u4E2D\u7684\u903B\u8F91\uFF0C\u8FD9\u4E5F\u6700\u96BE\u7406\u89E3\u7684\u3002\u6211\u4EEC\u5148\u60F3\u60F3\uFF1A\u5F53\u4F7F\u7528 Promise \u5B9E\u4F8B\uFF0C\u8C03\u7528\u5176 then \u65B9\u6CD5\u65F6\uFF0C\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\uFF0C\u8FD4\u56DE\u7684\u5C31\u662F this.status === &#39;pending&#39; \u5224\u65AD\u5206\u652F\u4E2D\u8FD4\u56DE\u7684 promise2\u3002\u90A3\u4E48\u8FD9\u4E2A promise2 \u4EC0\u4E48\u65F6\u5019\u88AB resolve \u6216\u8005 reject \u5462\uFF1F\u5E94\u8BE5\u662F\u5728\u5F02\u6B65\u7ED3\u675F\uFF0C\u4F9D\u6B21\u6267\u884C onFulfilledArray \u6216\u8005 onRejectedArray \u6570\u7EC4\u4E2D\u7684\u51FD\u6570\u65F6\u3002</p><p>\u6211\u4EEC\u518D\u601D\u8003\uFF0C\u90A3\u4E48 onFulfilledArray \u6216\u8005 onRejectedArray \u6570\u7EC4\u4E2D\u7684\u51FD\u6570\u5E94\u8BE5\u505A\u4E9B\u4EC0\u4E48\u5462\uFF1F\u5F88\u660E\u663E\uFF0C\u9700\u8981\u5C06 promise2 \u7684\u72B6\u6001\u5207\u6362\uFF0C\u5E76 resolve onfulfilled \u51FD\u6570\u6267\u884C\u7ED3\u679C\u6216\u8005 reject onrejected \u7ED3\u679C\u3002</p><p>\u8FD9\u4E5F\u5C31\u662F\u6211\u4EEC\u7684\u6539\u52A8\uFF0C\u5C06 this.onFulfilledArray.push \u7684\u51FD\u6570\u7531\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">this.onFulfilledArray.push(onfulfilled)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6539\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7684\u539F\u56E0\u3002 this. onRejectedArray.push \u7684\u51FD\u6570\u7684\u6539\u52A8\u70B9\u540C\u7406\u3002</p><p>\u8FD9\u975E\u5E38\u4E0D\u5BB9\u6613\u7406\u89E3\uFF0C\u5982\u679C\u8BFB\u8005\u4ECD\u7136\u60F3\u4E0D\u660E\u767D\uFF0C\u4E5F\u4E0D\u9700\u8981\u7740\u6025\u3002\u8FD8\u662F\u5E94\u8BE5\u5148\u7406\u89E3\u900F Promise\uFF0C\u518D\u8FD4\u56DE\u6765\u770B\uFF0C\u591A\u770B\u51E0\u6B21\uFF0C\u4E00\u5B9A\u4F1A\u6709\u6240\u6536\u83B7\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u6B64\u65F6 Promise \u5B9E\u73B0\u7684\u5B8C\u6574\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onFulfilledArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onRejectedArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return value.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.status = &#39;fulfilled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.onFulfilledArray.forEach(func =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          func(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.status = &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.onRejectedArray.forEach(func =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          func(reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // promise2 \u5C06\u4F5C\u4E3A then \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  let promise2</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u8FD9\u4E2A\u65B0\u7684 promise2 resolved \u7684\u503C\u4E3A onfulfilled \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u8FD9\u4E2A\u65B0\u7684 promise2 reject \u7684\u503C\u4E3A onrejected \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onrejected(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledArray.push(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedArray.push(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })      </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br></div></div><h2 id="\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u5B8C\u5584" tabindex="-1">\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u5B8C\u5584 <a class="header-anchor" href="#\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u5B8C\u5584" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7EE7\u7EED\u6765\u5B9E\u73B0 then \u65B9\u6CD5\u663E\u5F0F\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\u7684\u60C5\u51B5\u3002\u5BF9\u5E94\u573A\u666F\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(\`\${data} next then\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 4000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5BF9\u6BD4\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF08 onfulfilled \u51FD\u6570\u548C onrejected \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u503C\u7684\u60C5\u51B5\uFF09\uFF0C\u5B9E\u73B0\u8FD9\u79CD onfulfilled \u51FD\u6570\u548C onrejected \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\u4E5F\u5E76\u4E0D\u56F0\u96BE\u3002\u4F46\u662F\u6211\u4EEC\u9700\u8981\u5C0F\u5E45\u5EA6\u91CD\u6784\u4E00\u4E0B\u4EE3\u7801\uFF0C\u5728\u4E0A\u9762\u5B9E\u73B0\u7684 let result = onfulfilled(this.value) \u8BED\u53E5\u548C let result = onrejected(this.reason) \u8BED\u53E5\u4E2D\uFF0C\u53D8\u91CF result \u7531\u4E00\u4E2A\u666E\u901A\u503C\u4F1A\u6210\u4E3A\u4E00\u4E2A Promise \u5B9E\u4F8B\u3002\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\uFF1A\u53D8\u91CF result \u65E2\u53EF\u4EE5\u662F\u4E00\u4E2A\u666E\u901A\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A Promise \u5B9E\u4F8B\uFF0C\u4E3A\u6B64\u6211\u4EEC\u62BD\u8C61\u51FA resolvePromise \u65B9\u6CD5\u8FDB\u884C\u7EDF\u4E00\u5904\u7406\u3002\u6539\u52A8\u5DF2\u6709\u5B9E\u73B0\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const resolvePromise = (promise2, result, resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // promise2 \u5C06\u4F5C\u4E3A then \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  let promise2</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //\u8FD9\u4E2A\u65B0\u7684 promise2 resolved \u7684\u503C\u4E3A onfulfilled \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    //\u8FD9\u4E2A\u65B0\u7684 promise2 reject \u7684\u503C\u4E3A onrejected \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    let result = onrejected(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledArray.push(value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedArray.push(reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onrejected(reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })      </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><p>\u73B0\u5728\u7684\u4EFB\u52A1\u5C31\u662F\u5B8C\u6210 resolvePromise \u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u56DB\u4E2A\u53C2\u6570\uFF1A</p><ul><li>promise2: \u8FD4\u56DE\u7684 Promise \u5B9E\u4F8B</li><li>result: onfulfilled \u6216\u8005 onrejected \u51FD\u6570\u7684\u8FD4\u56DE\u503C</li><li>resolve: promise2 \u7684 resolve \u65B9\u6CD5</li><li>reject: promise2 \u7684 reject \u65B9\u6CD5</li></ul><p>\u6709\u4E86\u8FD9\u4E9B\u53C2\u6570\uFF0C\u6211\u4EEC\u5C31\u5177\u5907\u4E86\u62BD\u8C61\u903B\u8F91\u7684\u5FC5\u5907\u6761\u4EF6\u3002\u63A5\u4E0B\u6765\u5C31\u662F\u52A8\u624B\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const resolvePromise = (promise2, result, resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5F53 result \u548C promise2 \u76F8\u7B49\u65F6\uFF0C\u4E5F\u5C31\u662F\u8BF4 onfulfilled \u8FD4\u56DE promise2 \u65F6\uFF0C\u8FDB\u884C reject</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (result === promise2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(new TypeError(&#39;error due to circular reference&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u662F\u5426\u5DF2\u7ECF\u6267\u884C\u8FC7 onfulfilled \u6216\u8005 onrejected</span></span>
<span class="line"><span style="color:#A6ACCD;">  let consumed = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  let thenable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (result instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (result.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result.then(function(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolvePromise(promise2, data, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let isComplexResult = target =&gt; (typeof target === &#39;function&#39; || typeof target === &#39;object&#39;) &amp;&amp; (target !== null)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u8FD4\u56DE\u7684\u662F\u7591\u4F3C Promise \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isComplexResult(result)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      thenable = result.then</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u8FD4\u56DE\u7684\u662F Promise \u7C7B\u578B\uFF0C\u5177\u6709 then \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (typeof thenable === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        thenable.call(result, function(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return resolvePromise(promise2, data, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;">      return reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>\u6211\u4EEC\u770B resolvePromise \u65B9\u6CD5\u7B2C\u4E00\u6B65\u8FDB\u884C\u4E86\u4EE5\u201C\u6B7B\u5FAA\u73AF\u201D\u7684\u5904\u7406\u3002\u5E76\u5728\u53D1\u751F\u6B7B\u5FAA\u73AF\u662F\uFF0Creject \u6389\uFF0C\u9519\u8BEF\u4FE1\u606F\u4E3A new TypeError(&#39;error due to circular reference&#39;)\u3002\u600E\u4E48\u7406\u89E3\u8FD9\u4E2A\u5904\u7406\u5462\uFF0C\u89C4\u8303\u4E2D\u4E3A\u6211\u4EEC\u6307\u51FA\uFF1A</p><p><img src="https://images.gitbook.cn/65a8bbf0-8129-11e9-95af-d396387f5d0e" alt="enter image description here"></p><p>\u5176\u5B9E\u51FA\u73B0\u201C\u6B7B\u5FAA\u73AF\u201D\u7684\u60C5\u51B5\u5982\u4E0B\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(onfulfilled = data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return onfulfilled(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u63A5\u7740\uFF0C\u5BF9\u4E8E onfulfilled \u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C result\uFF1A\u5982\u679C result \u975E Promise \u5B9E\u4F8B\uFF0C\u975E\u5BF9\u8C61\uFF0C\u975E\u51FD\u6570\u7C7B\u578B\uFF0C\u662F\u4E00\u4E2A\u666E\u901A\u503C\u7684\u8BDD\uFF08\u4E0A\u8FF0\u4EE3\u7801\u4E2D isComplexResult \u51FD\u6570\u8FDB\u884C\u5224\u65AD\uFF09\uFF0C\u6211\u4EEC\u76F4\u63A5\u5C06 promise2 \u4EE5\u8BE5\u503C resolve \u6389\u3002</p><p>\u5BF9\u4E8E onfulfilled \u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C result\uFF1A\u5982\u679C result \u542B\u6709 then \u5C5E\u6027\u65B9\u6CD5\uFF0C\u6211\u4EEC\u79F0\u8BE5\u5C5E\u6027\u65B9\u6CD5\u4E3A thenable\uFF0C\u8BF4\u660E result \u662F\u4E00\u4E2A Promise \u5B9E\u4F8B\uFF0C\u6211\u4EEC\u6267\u884C\u8BE5\u5B9E\u4F8B\u7684 then \u65B9\u6CD5\uFF08\u65E2 thenable\uFF09\uFF0C\u6B64\u65F6\u7684\u8FD4\u56DE\u7ED3\u679C\u6709\u53EF\u80FD\u53C8\u662F\u4E00\u4E2A Promise \u5B9E\u4F8B\u7C7B\u578B\uFF0C\u4E5F\u53EF\u80FD\u662F\u4E00\u4E2A\u666E\u901A\u503C\uFF0C\u56E0\u6B64\u8FD8\u8981\u9012\u5F52\u8C03\u7528 resolvePromise\u3002\u5982\u679C\u8BFB\u8005\u8FD8\u662F\u4E0D\u660E\u767D\u8FD9\u91CC\u4E3A\u4EC0\u4E48\u9700\u8981\u9012\u5F52\u8C03\u7528 resolvePromise\uFF0C\u53EF\u4EE5\u770B\u4EE3\u7801\u4F8B\u5B50\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(\`\${data} next then\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 4000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(\`\${data} next then\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 4000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8BE5\u6BB5\u4EE3\u7801\u5C06\u4F1A\u5728 2 \u79D2\u662F\u8F93\u51FA\uFF1Alucas\uFF0C10 \u79D2\u65F6\u8F93\u51FA\uFF1Alucas next then next then\u3002</p><p>\u6B64\u65F6\u6211\u4EEC\u7684 Promise \u5B9E\u73B0\u7684\u5B8C\u6574\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onFulfilledArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onRejectedArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return value.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.status = &#39;fulfilled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.onFulfilledArray.forEach(func =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          func(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.status = &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.onRejectedArray.forEach(func =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          func(reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const resolvePromise = (promise2, result, resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5F53 result \u548C promise2 \u76F8\u7B49\u65F6\uFF0C\u4E5F\u5C31\u662F\u8BF4 onfulfilled \u8FD4\u56DE promise2 \u65F6\uFF0C\u8FDB\u884C reject</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (result === promise2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(new TypeError(&#39;error due to circular reference&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u662F\u5426\u5DF2\u7ECF\u6267\u884C\u8FC7 onfulfilled \u6216\u8005 onrejected</span></span>
<span class="line"><span style="color:#A6ACCD;">  let consumed = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  let thenable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (result instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (result.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result.then(function(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolvePromise(promise2, data, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let isComplexResult = target =&gt; (typeof target === &#39;function&#39; || typeof target === &#39;object&#39;) &amp;&amp; (target !== null)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u8FD4\u56DE\u7684\u662F\u7591\u4F3C Promise \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isComplexResult(result)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      thenable = result.then</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u8FD4\u56DE\u7684\u662F Promise \u7C7B\u578B\uFF0C\u5177\u6709 then \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (typeof thenable === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        thenable.call(result, function(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return resolvePromise(promise2, data, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;">      return reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; { throw error }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // promise2 \u5C06\u4F5C\u4E3A then \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  let promise2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u8FD9\u4E2A\u65B0\u7684 promise2 resolved \u7684\u503C\u4E3A onfulfilled \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u8FD9\u4E2A\u65B0\u7684 promise2 reject \u7684\u503C\u4E3A onrejected \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">         let result = onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">         resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledArray.push(value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedArray.push(reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onrejected(reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })      </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br></div></div><h2 id="promise-\u7A7F\u900F\u5B9E\u73B0" tabindex="-1">Promise \u7A7F\u900F\u5B9E\u73B0 <a class="header-anchor" href="#promise-\u7A7F\u900F\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u5230\u8FD9\u91CC\uFF0C\u8BFB\u8005\u53EF\u4EE5\u677E\u53E3\u6C14\uFF0C\u6211\u4EEC\u7684 Promise \u57FA\u672C\u5B9E\u73B0\u9664\u4E86\u9759\u6001\u65B9\u6CD5\u4EE5\u5916\uFF0C\u5DF2\u7ECF\u5B8C\u6210\u4E86 95%\u3002\u4E3A\u4EC0\u4E48\u4E0D\u662F 100% \u5462\uFF1F\u5176\u5B9E\u8FD8\u6709\u4E00\u5904\u7EC6\u8282\uFF0C\u6211\u4EEC\u770B\u4EE3\u7801\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u5C06\u4F1A\u5728 2 \u79D2\u540E\u8F93\u51FA\uFF1Alucas\u3002\u8FD9\u5C31\u662F Promise \u7A7F\u900F\u73B0\u8C61\uFF1A</p><p>\u7ED9 .then() \u51FD\u6570\u4F20\u9012\u975E\u51FD\u6570\u503C\u4F5C\u4E3A\u5176\u53C2\u6570\u65F6\uFF0C\u5B9E\u9645\u4E0A\u4F1A\u88AB\u89E3\u6790\u6210 .then(null)\uFF0C\u8FD9\u65F6\u5019\u7684\u8868\u73B0\u5E94\u8BE5\u662F\uFF1A\u4E0A\u4E00\u4E2A promise \u5BF9\u8C61\u7684\u7ED3\u679C\u8FDB\u884C\u201C\u7A7F\u900F\u201D\uFF0C\u5982\u679C\u5728\u540E\u9762\u94FE\u5F0F\u8C03\u7528\u4ECD\u5B58\u5728\u7B2C\u4E8C\u4E2A .then() \u51FD\u6570\u65F6\uFF0C\u5C06\u4F1A\u83B7\u53D6\u88AB\u7A7F\u900F\u4E0B\u6765\u7684\u7ED3\u679C\u3002</p><p>\u90A3\u8BE5\u5982\u4F55\u5B9E\u73B0 Promise \u7A7F\u900F\u5462\uFF1F</p><p>\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5E76\u4E14\u6211\u4EEC\u5DF2\u7ECF\u505A\u5230\u4E86\u3002\u60F3\u60F3\u5728 then() \u65B9\u6CD5\u7684\u5B9E\u73B0\u4E2D\uFF1A\u6211\u4EEC\u5DF2\u7ECF\u5BF9 onfulfilled \u548C onrejected \u51FD\u6570\u52A0\u4E0A\u5224\u65AD\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; { throw error }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C onfulfilled \u4E0D\u662F\u51FD\u6570\u7C7B\u578B\uFF0C\u5219\u7ED9\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u8BE5\u9ED8\u8BA4\u503C\u662F\u8FD4\u56DE\u5176\u53C2\u6570\u7684\u51FD\u6570\u3002onrejected \u51FD\u6570\u540C\u7406\u3002\u8FD9\u6BB5\u903B\u8F91\uFF0C\u5C31\u662F\u8D77\u5230\u4E86\u5B9E\u73B0\u201C\u7A7F\u900F\u201D\u7684\u4F5C\u7528\u3002</p><h2 id="promise-\u9759\u6001\u65B9\u6CD5\u548C\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1">Promise \u9759\u6001\u65B9\u6CD5\u548C\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0 <a class="header-anchor" href="#promise-\u9759\u6001\u65B9\u6CD5\u548C\u5176\u4ED6\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u90E8\u5206\uFF0C\u6211\u4EEC\u5C06\u5B9E\u73B0\uFF1A</p><ul><li>Promise.prototype.catch</li><li>Promise.resolve\uFF0CPromise.reject</li><li>Promise.all</li><li>Promise.race</li></ul><h3 id="promise-prototype-catch-\u5B9E\u73B0" tabindex="-1">Promise.prototype.catch \u5B9E\u73B0 <a class="header-anchor" href="#promise-prototype-catch-\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>Promise.prototype.catch \u53EF\u4EE5\u8FDB\u884C\u5F02\u5E38\u6355\u83B7\uFF0C\u5B83\u7684\u5178\u578B\u7528\u6CD5\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reject(&#39;lucas error&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise1.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}).catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F1A\u5728 2 \u79D2\u540E\u8F93\u51FA\uFF1Alucas error\u3002</p><p>\u5176\u5B9E\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u5B83\u5C31\u76F8\u5F53\u4E8E\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.prototype.catch = function(catchFunc) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return this.then(null, catchFunc)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u56E0\u4E3A\u6211\u4EEC\u77E5\u9053 .then() \u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E5F\u662F\u8FDB\u884C\u5F02\u5E38\u6355\u83B7\u7684\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u6BD4\u8F83\u7B80\u5355\u5730\u5B9E\u73B0\u4E86 Promise.prototype.catch\u3002</p><h3 id="promise-prototype-resolve-\u5B9E\u73B0" tabindex="-1">Promise.prototype.resolve \u5B9E\u73B0 <a class="header-anchor" href="#promise-prototype-resolve-\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>MDN \u4E0A\u5BF9\u4E8E Promise.resolve(value) \u65B9\u6CD5\u7684\u4ECB\u7ECD\uFF1A</p><blockquote><p>Promise.resolve(value) \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u4EE5\u7ED9\u5B9A\u503C\u89E3\u6790\u540E\u7684 Promise \u5B9E\u4F8B\u5BF9\u8C61\u3002</p></blockquote><p>\u8BF7\u770B\u5B9E\u4F8B\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.resolve(&#39;data&#39;).then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5148\u8F93\u51FA 1 \u518D\u8F93\u51FA data\u3002</p><p>\u90A3\u4E48\u5B9E\u73B0 Promise.resolve(value) \u4E5F\u5F88\u7B80\u5355\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.resolve = function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u987A\u5E26\u5B9E\u73B0\u4E00\u4E2A Promise.reject(value)\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.reject = function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="promise-all-\u5B9E\u73B0" tabindex="-1">Promise.all \u5B9E\u73B0 <a class="header-anchor" href="#promise-all-\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>MDN \u5173\u4E8E \u7684\u89E3\u91CA\uFF1A</p><blockquote><p>Promise.all(iterable) \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\uFF0C\u6B64\u5B9E\u4F8B\u5728 iterable \u53C2\u6570\u5185\u6240\u6709\u7684 promise \u90FD\u201C\u5B8C\u6210\uFF08resolved\uFF09\u201D\u6216\u53C2\u6570\u4E2D\u4E0D\u5305\u542B promise \u65F6\u56DE\u8C03\u5B8C\u6210\uFF08resolve\uFF09\uFF1B\u5982\u679C\u53C2\u6570\u4E2D promise \u6709\u4E00\u4E2A\u5931\u8D25\uFF08rejected\uFF09\uFF0C\u6B64\u5B9E\u4F8B\u56DE\u8C03\u5931\u8D25\uFF08reject\uFF09\uFF0C\u5931\u8D25\u539F\u56E0\u7684\u662F\u7B2C\u4E00\u4E2A\u5931\u8D25 promise \u7684\u7ED3\u679C\u3002</p></blockquote><p>\u8FD8\u662F\u770B\u5B9E\u4F8B\u4F53\u4F1A\u4E00\u4E0B\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all([promise1, promise2]).then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5C06\u5728 2 \u79D2\u540E\u8F93\u51FA\uFF1A[&quot;lucas&quot;, &quot;lucas&quot;]\u3002</p><p>\u5B9E\u73B0\u601D\u8DEF\u4E5F\u5F88\u7B80\u5355\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.all = function(promiseArray) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!Array.isArray(promiseArray)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new TypeError(&#39;The arguments should be an array!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let resultArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      const length = promiseArray.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt;length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        promiseArray[i].then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resultArray.push(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          if (resultArray.length === length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(resultArray)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6211\u4EEC\u5148\u8FDB\u884C\u4E86\u5BF9\u53C2\u6570 promiseArray \u7684\u7C7B\u578B\u5224\u65AD\uFF0C\u5BF9\u4E8E\u975E\u6570\u7EC4\u7C7B\u578B\u53C2\u6570\uFF0C\u8FDB\u884C\u629B\u9519\u3002Promise.all \u4F1A\u8FD4\u56DE\u4E00\u4E2A Promise \u5B9E\u4F8B\uFF0C\u8FD9\u4E2A\u5B9E\u4F8B\u5C06\u4F1A\u5728 promiseArray \u4E2D\u7684\u6240\u6709 Promise \u5B9E\u4F8B resolve \u540E\u8FDB\u884C resolve\uFF0C\u4E14 resolve \u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u5B58\u6709 promiseArray \u4E2D\u7684\u6240\u6709 Promise \u5B9E\u4F8B resolve \u7684\u503C\u3002</p><p>\u6574\u4F53\u601D\u8DEF\u4F9D\u8D56\u4E00\u4E2A for \u5FAA\u73AF\u5BF9 promiseArray \u8FDB\u884C\u904D\u5386\u3002\u540C\u6837\u6309\u7167\u8FD9\u4E2A\u601D\u8DEF\uFF0C\u6211\u4EEC\u5BF9 Promise.race \u8FDB\u884C\u5B9E\u73B0\u3002</p><h3 id="promise-race-\u5B9E\u73B0" tabindex="-1">Promise.race \u5B9E\u73B0 <a class="header-anchor" href="#promise-race-\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u8FD8\u662F\u5148\u6765\u770B\u4E00\u4E0B Promise.race \u7684\u7528\u6CD5\u3002</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(&#39;lucas2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 4000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.race([promise1, promise2]).then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5C06\u4F1A\u5728 2 \u79D2\u540E\u8F93\u51FA\uFF1Alucas1\uFF0C\u5B9E\u73B0 Promise.race \u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Promise.race = function(promiseArray) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!Array.isArray(promiseArray)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new TypeError(&#39;The arguments should be an array!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          const length = promiseArray.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt;length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        promiseArray[i].then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6211\u4EEC\u6765\u7B80\u5355\u5206\u6790\u4E00\u4E0B\uFF0C\u8FD9\u91CC\u4F7F\u7528 for \u5FAA\u73AF\u540C\u6B65\u6267\u884C promiseArray \u6570\u7EC4\u4E2D\u7684\u6240\u6709 promise \u5B9E\u4F8B then \u65B9\u6CD5\uFF0C\u7B2C\u4E00\u4E2A resolve \u7684\u5B9E\u4F8B\u76F4\u63A5\u4F1A\u89E6\u53D1\u65B0 Promise\uFF08\u4EE3\u7801\u4E2D\u65B0 new \u51FA\u6765\u7684\uFF09 \u5B9E\u4F8B\u7684 resolve \u65B9\u6CD5\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E24\u8282\u8BFE\uFF0C\u76F8\u4FE1\u8BFB\u8005\u901A\u8FC7\u5BF9 Promise \u5B9E\u73B0\u7684\u5B66\u4E60\uFF0C\u5BF9 Promise \u8FD9\u4E2A\u6982\u5FF5\u7684\u7406\u89E3\u5927\u5927\u52A0\u6DF1\u3002\u5176\u5B9E\uFF0C\u5B9E\u73B0\u4E00\u4E2A Promise \u4E0D\u662F\u76EE\u7684\uFF0C\u5E76\u4E14\u8FD9\u4E2A Promise \u5B9E\u73B0\u4E5F\u6CA1\u6709\u5B8C\u5168 100% \u9075\u5FAA\u89C4\u8303\uFF0C\u6211\u4EEC\u66F4\u52A0\u5E94\u8BE5\u638C\u63E1\u6982\u5FF5\uFF0C\u878D\u4F1A\u8D2F\u901A\u3002\u53E6\u5916\uFF0C\u6574\u4F53\u6765\u770B\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u4E0D\u597D\u7406\u89E3\uFF0C\u5982\u679C\u6682\u65F6\u96BE\u4EE5\u63A5\u53D7\u5168\u90E8\u6982\u5FF5\uFF0C\u4E5F\u4E0D\u8981\u7070\u5FC3\u3002\u5B9E\u73B0\u7684\u4EE3\u7801\u5C31\u5728\u90A3\u91CC\uFF0C\u6211\u4EEC\u8981\u6709\u51B3\u5FC3\u6162\u6162\u5730\u638C\u63E1\u5B83\u3002</p><p>\u6700\u7EC8\u628A\u6240\u6709\u7684\u5B9E\u73B0\u653E\u5728\u4E00\u8D77\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onFulfilledArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onRejectedArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return value.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.status = &#39;fulfilled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.onFulfilledArray.forEach(func =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          func(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.status = &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        this.onRejectedArray.forEach(func =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          func(reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const resolvePromise = (promise2, result, resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5F53 result \u548C promise2 \u76F8\u7B49\u65F6\uFF0C\u4E5F\u5C31\u662F\u8BF4 onfulfilled \u8FD4\u56DE promise2 \u65F6\uFF0C\u8FDB\u884C reject</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (result === promise2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return reject(new TypeError(&#39;error due to circular reference&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u662F\u5426\u5DF2\u7ECF\u6267\u884C\u8FC7 onfulfilled \u6216\u8005 onrejected</span></span>
<span class="line"><span style="color:#A6ACCD;">  let consumed = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  let thenable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (result instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (result.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result.then(function(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolvePromise(promise2, data, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let isComplexResult = target =&gt; (typeof target === &#39;function&#39; || typeof target === &#39;object&#39;) &amp;&amp; (target !== null)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u8FD4\u56DE\u7684\u662F\u7591\u4F3C Promise \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isComplexResult(result)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      thenable = result.then</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u8FD4\u56DE\u7684\u662F Promise \u7C7B\u578B\uFF0C\u5177\u6709 then \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (typeof thenable === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        thenable.call(result, function(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return resolvePromise(promise2, data, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, function(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          return reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (consumed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      consumed = true</span></span>
<span class="line"><span style="color:#A6ACCD;">      return reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; {throw error}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // promise2 \u5C06\u4F5C\u4E3A then \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  let promise2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u8FD9\u4E2A\u65B0\u7684 promise2 resolved \u7684\u503C\u4E3A onfulfilled \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u8FD9\u4E2A\u65B0\u7684 promise2 reject \u7684\u503C\u4E3A onrejected \u7684\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">         let result = onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">         resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledArray.push(value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onfulfilled(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedArray.push(reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = onrejected(reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolvePromise(promise2, result, resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })      </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.catch = function(catchFunc) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return this.then(null, catchFunc)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.resolve = function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.reject = function(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.race = function(promiseArray) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!Array.isArray(promiseArray)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new TypeError(&#39;The arguments should be an array!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const length = promiseArray.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt;length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        promiseArray[i].then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.all = function(promiseArray) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!Array.isArray(promiseArray)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new TypeError(&#39;The arguments should be an array!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let resultArray = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      const length = promiseArray.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt;length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        promiseArray[i].then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resultArray.push(data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          if (resultArray.length === length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            resolve(resultArray)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br></div></div><h2 id="\u5206\u4EAB\u4EA4\u6D41" tabindex="-1">\u5206\u4EAB\u4EA4\u6D41 <a class="header-anchor" href="#\u5206\u4EAB\u4EA4\u6D41" aria-hidden="true">#</a></h2><p>\u9605\u8BFB\u6587\u7AE0\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u7591\u95EE\u968F\u65F6\u53EF\u4EE5\u8DDF\u5176\u4ED6\u5C0F\u4F19\u4F34\u8BA8\u8BBA\uFF0C\u6216\u8005\u76F4\u63A5\u5411\u4F5C\u8005 LucasHC \u63D0\u95EE\uFF08\u4F5C\u8005\u770B\u5230\u540E\u62BD\u7A7A\u56DE\u590D\uFF09\u3002 <strong>\u4F60\u7684\u5206\u4EAB\u4E0D\u4EC5\u5E2E\u52A9\u4ED6\u4EBA\uFF0C\u66F4\u4F1A\u63D0\u5347\u81EA\u5DF1\u3002</strong></p><p>\u4F60\u4E5F\u53EF\u4EE5\u8BF4\u8BF4\u81EA\u5DF1\u6700\u60F3\u4E86\u89E3\u7684\u4E3B\u9898\uFF0C\u8BFE\u7A0B\u5185\u5BB9\u4F1A\u6839\u636E\u90E8\u5206\u8BFB\u8005\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\u8FED\u4EE3\u548C\u5B8C\u5584\u3002</p><p>\u6B64\u5916\uFF0C\u6211\u4EEC\u4E3A\u672C\u8BFE\u7A0B\u4ED8\u8D39\u8BFB\u8005\u521B\u5EFA\u4E86\u300A\u524D\u7AEF\u5F00\u53D1\u6838\u5FC3\u77E5\u8BC6\u8FDB\u9636\u300B\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u4EE5\u65B9\u4FBF\u66F4\u6709\u9488\u5BF9\u6027\u5730\u8BA8\u8BBA\u8BFE\u7A0B\u76F8\u5173\u95EE\u9898\uFF08\u5165\u7FA4\u8BF7\u5230\u7B2C1-2\u8BFE\u672B\u5C3E\u6DFB\u52A0 GitChat \u5C0F\u52A9\u624B\u4F3D\u5229\u7565\u7684\u5FAE\u4FE1\uFF0C\u5E76\u6CE8\u660E\u300C\u524D\u7AEF\u6838\u5FC3\u300D\uFF0C\u8C22\u8C22~\uFF09</p>`,108),r=[p];function c(o,i,t,b,A,C){return n(),a("div",null,r)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
