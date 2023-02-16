import{_ as s,o as n,c as a,a as l}from"./app.b476fd3b.js";const m=JSON.parse('{"title":"\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199 Promise \u5417\uFF08\u4E0A\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECE Promise \u5316\u4E00\u4E2A API \u8C08\u8D77","slug":"\u4ECE-promise-\u5316\u4E00\u4E2A-api-\u8C08\u8D77","link":"#\u4ECE-promise-\u5316\u4E00\u4E2A-api-\u8C08\u8D77","children":[]},{"level":2,"title":"Promise \u521D\u89C1\u96CF\u5F62","slug":"promise-\u521D\u89C1\u96CF\u5F62","link":"#promise-\u521D\u89C1\u96CF\u5F62","children":[]},{"level":2,"title":"Promise \u5B9E\u73B0\u72B6\u6001\u5B8C\u5584","slug":"promise-\u5B9E\u73B0\u72B6\u6001\u5B8C\u5584","link":"#promise-\u5B9E\u73B0\u72B6\u6001\u5B8C\u5584","children":[]},{"level":2,"title":"Promise \u5F02\u6B65\u5B8C\u5584","slug":"promise-\u5F02\u6B65\u5B8C\u5584","link":"#promise-\u5F02\u6B65\u5B8C\u5584","children":[]},{"level":2,"title":"Promise \u7EC6\u8282\u5B8C\u5584","slug":"promise-\u7EC6\u8282\u5B8C\u5584","link":"#promise-\u7EC6\u8282\u5B8C\u5584","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u5206\u4EAB\u4EA4\u6D41","slug":"\u5206\u4EAB\u4EA4\u6D41","link":"#\u5206\u4EAB\u4EA4\u6D41","children":[]}],"relativePath":"advanced-core-knowledage-front-end/javascript-yu-yan-jin-jie/009-ni-yi-wei-wo-zhen-de-xiang-rang-ni-shou-xie-promise-ma-shang.md","lastUpdated":1676558697000}'),e={name:"advanced-core-knowledage-front-end/javascript-yu-yan-jin-jie/009-ni-yi-wei-wo-zhen-de-xiang-rang-ni-shou-xie-promise-ma-shang.md"},p=l(`<h1 id="\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199-promise-\u5417\uFF08\u4E0A\uFF09" tabindex="-1">\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199 Promise \u5417\uFF08\u4E0A\uFF09 <a class="header-anchor" href="#\u4F60\u4EE5\u4E3A\u6211\u771F\u7684\u60F3\u8BA9\u4F60\u624B\u5199-promise-\u5417\uFF08\u4E0A\uFF09" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u524D\u9762\u51E0\u8282\u8BFE\u7684\u5B66\u4E60\uFF0C\u6211\u4EEC\u8BA4\u8BC6\u5230\uFF1A\u60F3\u4F18\u96C5\u5730\u8FDB\u884C\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5FC5\u987B\u8981\u719F\u8BC6\u4E00\u4E2A\u6781\u5176\u91CD\u8981\u7684\u6982\u5FF5 \u2014\u2014 Promise\u3002\u5B83\u662F\u53D6\u4EE3\u4F20\u7EDF\u56DE\u8C03\uFF0C\u5B9E\u73B0\u540C\u6B65\u94FE\u5F0F\u5199\u6CD5\u7684\u89E3\u51B3\u65B9\u6848\uFF1B\u662F\u7406\u89E3 generator\u3001async/await \u7684\u5173\u952E\u3002\u4F46\u662F Promise \u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\uFF0C\u5E76\u4E0D\u662F\u5F88\u597D\u7406\u89E3\uFF0C\u5176\u4E2D\u7684\u6982\u5FF5\u7EB7\u6742\uFF0C\u4E14\u62BD\u8C61\u7A0B\u5EA6\u8F83\u9AD8\u3002</p><p>\u4E0E\u6B64\u540C\u65F6\uFF0C\u5728\u4E2D\u9AD8\u7EA7\u524D\u7AEF\u5F00\u53D1\u9762\u8BD5\u5F53\u4E2D\uFF0C\u5BF9\u4E8E Promise \u7684\u8003\u5BDF\u4E5F\u591A\u79CD\u591A\u6837\uFF0C\u8FD1\u51E0\u5E74\u6D41\u884C\u201C\u8BA9\u5F00\u53D1\u8005\u5B9E\u73B0\u4E00\u4E2A Promise\u201D\u3002\u90A3\u4E48\u8FD9\u4E00\u8BB2\uFF0C\u6211\u5C31\u5E26\u5927\u5BB6\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 Promise\u3002\u6CE8\u610F\uFF1A <strong>\u5B9E\u73B0\u4E0D\u662F\u6700\u7EC8\u76EE\u7684\uFF0C\u5728\u5B9E\u73B0\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4F1A\u914D\u4EE5\u5173\u952E\u7ED3\u8BBA\u548C\u5173\u4E8E Promise \u7684\u8003\u5BDF\u9898\u76EE\uFF0C\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u878D\u4F1A\u8D2F\u901A\u3002</strong></p><p>\u6574\u4E2A\u8FC7\u7A0B\u5C06\u5206\u4E24\u8282\u8BFE\u5B8C\u6210\uFF0C\u672C\u8BB2\u7684\u76F8\u5173\u77E5\u8BC6\u70B9\u5982\u4E0B\uFF1A</p><p><img src="https://images.gitbook.cn/f1981920-7f7c-11e9-9482-6704bcd43149" alt=""></p><h2 id="\u4ECE-promise-\u5316\u4E00\u4E2A-api-\u8C08\u8D77" tabindex="-1">\u4ECE Promise \u5316\u4E00\u4E2A API \u8C08\u8D77 <a class="header-anchor" href="#\u4ECE-promise-\u5316\u4E00\u4E2A-api-\u8C08\u8D77" aria-hidden="true">#</a></h2><p>\u719F\u6089\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u7684\u8BFB\u8005\u5E94\u8BE5\u77E5\u9053\uFF0C\u6211\u4EEC\u4F7F\u7528 wx.request() \u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u73AF\u5883\u4E2D\u53D1\u9001\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42\u3002\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF0C\u5177\u4F53\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">  url: &#39;test.php&#39;, // \u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    x: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    y: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  header: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;content-type&#39;: &#39;application/json&#39; // \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  success(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(res.data)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u914D\u7F6E\u5316\u7684 API \u98CE\u683C\u548C\u6211\u4EEC\u65E9\u671F\u4F7F\u7528 jQuery \u4E2D Ajax \u65B9\u6CD5\u7684\u5C01\u88C5\u7C7B\u4F3C\u3002\u8FD9\u6837\u7684\u8BBE\u8BA1\u6709\u4E00\u4E2A\u5C0F\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u5BB9\u6613\u51FA\u73B0\u201C\u56DE\u8C03\u5730\u72F1\u201D\u95EE\u9898\u3002\u5982\u679C\u6211\u4EEC\u60F3\u5148\u901A\u8FC7 ./userInfo \u63A5\u53E3\u6765\u83B7\u53D6\u767B\u5F55\u7528\u6237\u4FE1\u606F\u6570\u636E\uFF0C\u518D\u4ECE\u767B\u5F55\u7528\u6237\u4FE1\u606F\u6570\u636E\u4E2D\uFF0C\u901A\u8FC7\u8BF7\u6C42 <code>./\${id}/friendList</code> \u63A5\u53E3\u6765\u83B7\u53D6\u767B\u5F55\u7528\u6237\u6240\u6709\u597D\u53CB\u5217\u8868\uFF0C\u5C31\u9700\u8981\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">  url: &#39;./userInfo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  success(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const id = res.data.id</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: \`./\${id}/friendList\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">      success(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD9\u53EA\u662F\u5D4C\u5957\u4E86\u4E00\u5C42\u56DE\u8C03\u800C\u5DF2\uFF0C\u8FD8\u591F\u4E0D\u6210\u201C\u5730\u72F1\u201D\u573A\u666F\uFF0C\u4F46\u662F\u8DB3\u4EE5\u8BF4\u660E\u95EE\u9898\u3002</p><p>\u6211\u4EEC\u77E5\u9053\u89E3\u51B3\u201C\u56DE\u8C03\u5730\u72F1\u201D\u95EE\u9898\u7684\u4E00\u4E2A\u6781\u4F73\u65B9\u5F0F\u5C31\u662F Promise\uFF0C\u5C06\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F wx.request() \u65B9\u6CD5\u8FDB\u884C Promise \u5316\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const wxRequest = (url, data = {}, method = &#39;GET&#39;) =&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">  new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wx.request({</span></span>
<span class="line"><span style="color:#A6ACCD;">      url,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data,</span></span>
<span class="line"><span style="color:#A6ACCD;">      method,</span></span>
<span class="line"><span style="color:#A6ACCD;">      header: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u901A\u7528\u5316 header \u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      success: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const code = res.statusCode</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (code !== 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject({ error: &#39;request fail&#39;, code })</span></span>
<span class="line"><span style="color:#A6ACCD;">          return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(res.data)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      fail: function (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject({ error: &#39;request fail&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Promise \u57FA\u672C\u6982\u5FF5\u4E0D\u518D\u8FC7\u591A\u4ECB\u7ECD\u3002\u8FD9\u662F\u4E00\u4E2A\u5178\u578B\u7684 Promise \u5316\u6848\u4F8B\uFF0C\u5F53\u7136\u6211\u4EEC\u4E0D\u4EC5\u53EF\u4EE5\u5BF9 wx.request() API \u8FDB\u884C Promise \u5316\uFF0C\u66F4\u5E94\u8BE5\u505A\u7684\u901A\u7528\uFF0C\u80FD\u591F Promise \u5316\u66F4\u591A\u7C7B\u4F3C\uFF08\u901A\u8FC7 success \u548C fail \u8868\u5F81\u72B6\u6001\uFF09\u7684\u63A5\u53E3\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const promisify = fn =&gt; args =&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">  new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    args.success = function(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return resolve(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    args.fail = function(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return reject(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F7F\u7528\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const wxRequest = promisify(wx.request)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u901A\u8FC7\u4E0A\u4F8B\uFF0C\u6211\u4EEC\u77E5\u9053\uFF1A</p><p>Promise \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u6211\u4EEC\u4F7F\u7528\u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A Promise \u5B9E\u4F8B\u3002\u8BE5\u6784\u9020\u51FD\u6570\u5F88\u7B80\u5355\uFF0C\u5B83\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u6309\u7167 Promise/A+ \u89C4\u8303\u7684\u547D\u540D\uFF0C\u628A Promise \u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u53EB\u505A executor\uFF0Cexecutor \u7C7B\u578B\u4E3A\u51FD\u6570\u3002\u8FD9\u4E2A\u51FD\u6570\u53C8\u201C\u81EA\u52A8\u201D\u5177\u6709 resolve\u3001reject \u4E24\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u53C2\u6570\u3002</p><p>\u8BF7\u4ED4\u7EC6\u4F53\u4F1A\u4E0A\u8FF0\u7ED3\u8BBA\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7ED3\u8BBA\uFF0C\u5F00\u59CB\u5B9E\u73B0 Promise \u7684\u7B2C\u4E00\u6B65\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u597D\u5427\uFF0C\u521D\u59CB\u8D77\u6B65\u662F\u591F\u57FA\u672C\u7684\u4E86\u3002\u5982\u679C\u8BFB\u8005\u8FD8\u4E0D\u7406\u89E3\u6784\u9020\u51FD\u6570\u7684\u6982\u5FF5\uFF0C\u6211\u7ED9\u5927\u5BB6\u63A8\u8350\u9605\u8BFB\uFF1A <a href="http://javascript.ruanyifeng.com/oop/basic.html" target="_blank" rel="noreferrer">\u6784\u9020\u51FD\u6570\u4E0E new \u547D\u4EE4</a>\uFF0C\u5728\u7406\u89E3\u7684\u57FA\u7840\u4E0A\uFF0C\u8BA9\u6211\u4EEC\u7EE7\u7EED\u5427\u3002</p><h2 id="promise-\u521D\u89C1\u96CF\u5F62" tabindex="-1">Promise \u521D\u89C1\u96CF\u5F62 <a class="header-anchor" href="#promise-\u521D\u89C1\u96CF\u5F62" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u9762\u7684 wx.request() \u4ECB\u7ECD\u4E2D\uFF0C\u5B9E\u73B0\u4E86 Promise \u5316\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u5D4C\u5957\u56DE\u8C03\u573A\u666F\uFF0C\u53EF\u4EE5\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">wxRequest(&#39;./userInfo&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(</span></span>
<span class="line"><span style="color:#A6ACCD;">    data =&gt; wxRequest(\`./\${data.id}/friendList\`),</span></span>
<span class="line"><span style="color:#A6ACCD;">    error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">  .then(</span></span>
<span class="line"><span style="color:#A6ACCD;">    data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u901A\u8FC7\u89C2\u5BDF\u4F7F\u7528\u4F8B\u5B50\uFF0C\u6211\u4EEC\u6765\u5256\u6790 Promise \u7684\u5B9E\u8D28\uFF1A</p><p><strong>\u7ED3\u8BBA</strong> Promise \u6784\u9020\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A promise \u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u8FD9\u4E2A\u8FD4\u56DE\u7684 promise \u5BF9\u8C61\u5177\u6709\u4E00\u4E2A then \u65B9\u6CD5\u3002then \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528\u8005\u53EF\u4EE5\u5B9A\u4E49\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F onfulfilled \u548C onrejected\uFF0C\u5B83\u4EEC\u90FD\u662F\u51FD\u6570\u7C7B\u578B\u3002\u5176\u4E2D onfulfilled \u901A\u8FC7\u53C2\u6570\uFF0C\u53EF\u4EE5\u83B7\u53D6 promise \u5BF9\u8C61 resolved \u7684\u503C\uFF0Conrejected \u83B7\u5F97 promise \u5BF9\u8C61 rejected \u7684\u503C\u3002\u901A\u8FC7\u8FD9\u4E2A\u503C\uFF0C\u6211\u4EEC\u6765\u5904\u7406\u5F02\u6B65\u5B8C\u6210\u540E\u7684\u903B\u8F91\u3002</p><p>\u8FD9\u4E9B\u90FD\u662F\u89C4\u8303\u7684\u57FA\u672C\u5185\u5BB9\uFF1A <a href="https://promisesaplus.com/" target="_blank" rel="noreferrer">Promise/A+</a>\u3002</p><p>\u56E0\u6B64\uFF0C\u7EE7\u7EED\u5B9E\u73B0\u6211\u4EEC\u7684 Promise\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7EE7\u7EED\u590D\u4E60 Promise \u7684\u77E5\u8BC6\uFF0C\u770B\u4F8B\u5B50\u6765\u7406\u89E3\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise1.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let promise2 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  reject(&#39;error&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise2.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>\u7ED3\u8BBA</strong> \u6211\u4EEC\u5728\u4F7F\u7528 new \u5173\u952E\u5B57\u8C03\u7528 Promise \u6784\u9020\u51FD\u6570\u65F6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\uFF08\u5F80\u5F80\u662F\u5F02\u6B65\u7ED3\u675F\u65F6\uFF09\uFF0C\u8C03\u7528 executor \u7684\u53C2\u6570 resolve \u65B9\u6CD5\uFF0C\u5E76\u5C06 resolved \u7684\u503C\u4F5C\u4E3A resolve \u51FD\u6570\u53C2\u6570\u6267\u884C\uFF0C\u8FD9\u4E2A\u503C\u4FBF\u53EF\u4EE5\u540E\u7EED\u5728 then \u65B9\u6CD5\u7B2C\u4E00\u4E2A\u51FD\u6570\u53C2\u6570\uFF08onfulfilled\uFF09\u4E2D\u62FF\u5230\uFF1B\u540C\u7406\uFF0C\u5728\u51FA\u73B0\u9519\u8BEF\u65F6\uFF0C\u8C03\u7528 executor \u7684\u53C2\u6570 reject \u65B9\u6CD5\uFF0C\u5E76\u5C06\u9519\u8BEF\u4FE1\u606F\u4F5C\u4E3A reject \u51FD\u6570\u53C2\u6570\u6267\u884C\uFF0C\u8FD9\u4E2A\u9519\u8BEF\u4FE1\u606F\u53EF\u4EE5\u5728\u540E\u7EED\u7684 then \u65B9\u6CD5\u7B2C\u4E8C\u4E2A\u51FD\u6570\u53C2\u6570\uFF08onrejected\uFF09\u4E2D\u62FF\u5230\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u5728\u5B9E\u73B0 Promise \u65F6\uFF0C\u5E94\u8BE5\u6709\u4E24\u4E2A\u503C\uFF0C\u5206\u522B\u50A8\u5B58 resolved \u7684\u503C\uFF0C\u4EE5\u53CA rejected \u7684\u503C\uFF08\u5F53\u7136\uFF0C\u56E0\u4E3A Promise \u72B6\u6001\u7684\u552F\u4E00\u6027\uFF0C\u4E0D\u53EF\u80FD\u540C\u65F6\u51FA\u73B0 resolved \u7684\u503C\u548C rejected \u7684\u503C\uFF0C\u56E0\u6B64\u4E5F\u53EF\u4EE5\u7528\u4E00\u4E2A\u53D8\u91CF\u6765\u5B58\u50A8\uFF09\uFF1B\u540C\u65F6\u4E5F\u9700\u8981\u5B58\u5728\u4E00\u4E2A\u72B6\u6001\uFF0C\u8FD9\u4E2A\u72B6\u6001\u5C31\u662F promise \u5B9E\u4F8B\u7684\u72B6\u6001\uFF08pending\uFF0Cfulfilled\uFF0Crejected\uFF09\uFF1B\u540C\u65F6\u8FD8\u8981\u63D0\u4F9B resolve \u65B9\u6CD5\u4EE5\u53CA reject \u65B9\u6CD5\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u9700\u8981\u4F5C\u4E3A executor \u7684\u53C2\u6570\u63D0\u4F9B\u7ED9\u5F00\u53D1\u8005\u4F7F\u7528\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const self = this</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function resolve(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    self.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function reject(reason) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    self.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4E3A\u4E86\u4FDD\u8BC1 onfulfilled\u3001onrejected \u80FD\u591F\u5F3A\u5065\u6267\u884C\uFF0C\u6211\u4EEC\u4E3A\u5176\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u503C\uFF0C\u5176\u9ED8\u8BA4\u503C\u4E3A\u4E00\u4E2A\u51FD\u6570\u5143\uFF08Function.prototype\uFF09\u3002</p><p><strong>\u6CE8\u610F\uFF0C\u56E0\u4E3A resolve \u7684\u6700\u7EC8\u8C03\u7528\u662F\u7531\u5F00\u53D1\u8005\u5728\u4E0D\u786E\u5B9A\u73AF\u5883\u4E0B\uFF08\u5F80\u5F80\u662F\u5728\u5168\u5C40\u4E2D\uFF09\u76F4\u63A5\u8C03\u7528\u7684\u3002\u4E3A\u4E86\u5728 resolve \u51FD\u6570\u4E2D\u80FD\u591F\u62FF\u5230 promise \u5B9E\u4F8B\u7684\u503C\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9 this \u8FDB\u884C\u4FDD\u5B58\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7528 self \u53D8\u91CF\u8BB0\u5F55 this\uFF0C\u6216\u8005\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF1A</strong></p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled = Function.prototype, onrejected = Function.prototype) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>\u4E3A\u4EC0\u4E48 then \u653E\u5728 Promise \u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u4E0A\uFF0C\u800C\u4E0D\u662F\u653E\u5728\u6784\u9020\u51FD\u6570\u5185\u90E8\u5462\uFF1F</strong></p><p>\u8FD9\u6D89\u53CA\u5230\u539F\u578B\u3001\u539F\u578B\u94FE\u7684\u77E5\u8BC6\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u672C\u8BB2\u7684\u5185\u5BB9\uFF0C\u8FD9\u91CC\u8FD8\u662F\u7B80\u5355\u5730\u63D0\u4E00\u4E0B\uFF1A\u6BCF\u4E2A promise \u5B9E\u4F8B\u7684 then \u65B9\u6CD5\u903B\u8F91\u662F\u4E00\u81F4\u7684\uFF0C\u5728\u5B9E\u4F8B\u8C03\u7528\u8BE5\u65B9\u6CD5\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u539F\u578B\uFF08Promise.prototype\uFF09\u627E\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u6BCF\u6B21\u5B9E\u4F8B\u5316\u90FD\u65B0\u521B\u5EFA\u4E00\u4E2A then \u65B9\u6CD5\uFF0C\u8FD9\u6837\u8282\u7701\u5185\u5B58\uFF0C\u663E\u7136\u66F4\u5408\u9002\u3002</p><h2 id="promise-\u5B9E\u73B0\u72B6\u6001\u5B8C\u5584" tabindex="-1">Promise \u5B9E\u73B0\u72B6\u6001\u5B8C\u5584 <a class="header-anchor" href="#promise-\u5B9E\u73B0\u72B6\u6001\u5B8C\u5584" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u5230\u9898\u76EE\uFF0C\u5224\u65AD\u8F93\u51FA\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  reject(&#39;error&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u53EA\u4F1A</strong> \u8F93\u51FA\uFF1Adata\uFF0C\u56E0\u4E3A\u6211\u4EEC\u77E5\u9053 promise \u5B9E\u4F8B\u72B6\u6001\u53EA\u80FD\u4ECE pending \u6539\u53D8\u4E3A fulfilled\uFF0C\u6216\u8005\u4ECE pending \u6539\u53D8\u4E3A rejected\u3002\u72B6\u6001\u4E00\u65E6\u53D8\u66F4\u5B8C\u6BD5\uFF0C\u5C31\u4E0D\u53EF\u518D\u6B21\u53D8\u5316\u6216\u8005\u9006\u8F6C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF1A\u5982\u679C\u4E00\u65E6\u53D8\u5230 fulfilled\uFF0C\u5C31\u4E0D\u80FD\u518D rejected\uFF0C\u4E00\u65E6\u53D8\u5230 rejected\uFF0C\u5C31\u4E0D\u80FD fulfilled\u3002</p><p>\u800C\u6211\u4EEC\u7684\u4EE3\u7801\u5B9E\u73B0\uFF0C\u663E\u7136\u65E0\u6CD5\u6EE1\u8DB3\u8FD9\u4E00\u7279\u6027\u3002\u6267\u884C\u4E0A\u4E00\u6BB5\u4EE3\u7801\u65F6\uFF0C\u5C06\u4F1A\u8F93\u51FA data \u4EE5\u53CA error\u3002</p><p>\u56E0\u6B64\uFF0C\u9700\u8981\u5BF9\u72B6\u6001\u8FDB\u884C\u5224\u65AD\u548C\u5B8C\u5584\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.status = &#39;fulfilled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.status = &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; {throw error}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6211\u4EEC\u770B\uFF0C\u5728 resolve \u548C reject \u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u52A0\u5165\u5224\u65AD\uFF0C\u53EA\u5141\u8BB8 promise \u5B9E\u4F8B\u72B6\u6001\u4ECE pending \u6539\u53D8\u4E3A fulfilled\uFF0C\u6216\u8005\u4ECE pending \u6539\u53D8\u4E3A rejected\u3002</p><p>\u540C\u65F6\u6CE8\u610F\uFF0C <strong>\u8FD9\u91CC\u6211\u4EEC\u5BF9 Promise.prototype.then \u53C2\u6570 onfulfilled \u548C onrejected \u8FDB\u884C\u4E86\u5224\u65AD\uFF0C\u5F53\u5B9E\u53C2\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u65F6\uFF0C\u8D4B\u4E88\u9ED8\u8BA4\u51FD\u6570\u503C</strong> \u3002\u8FD9\u65F6\u5019\u7684\u9ED8\u8BA4\u503C\u4E0D\u518D\u662F\u51FD\u6570\u5143 Function.prototype \u4E86\u3002\u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u66F4\u6539\uFF1F\u540E\u9762\u4F1A\u6709\u4ECB\u7ECD\u3002</p><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u7684\u5B9E\u73B0\u663E\u7136\u66F4\u52A0\u63A5\u8FD1\u771F\u5B9E\u4E86\u3002\u521A\u624D\u7684\u4F8B\u5B50\u4E5F\u53EF\u4EE5\u8DD1\u901A\u4E86\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  reject(&#39;error&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4F46\u662F\u4E0D\u8981\u9AD8\u5174\u5F97\u592A\u65E9\uFF0Cpromise \u662F\u89E3\u51B3\u5F02\u6B65\u95EE\u9898\u7684\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u5168\u90E8\u90FD\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u4F3C\u4E4E\u8FD8\u5DEE\u4E86\u66F4\u91CD\u8981\u7684\u903B\u8F91\u3002</p><h2 id="promise-\u5F02\u6B65\u5B8C\u5584" tabindex="-1">Promise \u5F02\u6B65\u5B8C\u5584 <a class="header-anchor" href="#promise-\u5F02\u6B65\u5B8C\u5584" aria-hidden="true">#</a></h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u5B9E\u73B0\u8FD8\u5DEE\u4E86\u54EA\u4E9B\u5185\u5BB9\u5462\uFF1F\u522B\u6025\uFF0C\u6211\u4EEC\u518D\u4ECE\u793A\u4F8B\u4EE3\u7801\u5206\u6790\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6B63\u5E38\u6765\u8BB2\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u4F1A\u5728 2 \u79D2\u4E4B\u540E\u8F93\u51FA data\uFF0C\u4F46\u662F\u6211\u4EEC\u5B9E\u73B0\u7684\u4EE3\u7801\uFF0C\u5E76\u6CA1\u6709\u8F93\u5165\u4EFB\u4F55\u4FE1\u606F\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u539F\u56E0\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684\u5B9E\u73B0\u903B\u8F91\u5168\u662F\u540C\u6B65\u7684\u3002\u5728\u4E0A\u9762\u5B9E\u4F8B\u5316\u4E00\u4E2A promise \u7684\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u6211\u4EEC\u662F\u5728 setTimeout \u903B\u8F91\u91CC\u624D\u8C03\u7528 resolve\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C2 \u79D2\u4E4B\u540E\u624D\u4F1A\u8C03\u7528 resolve \u65B9\u6CD5\uFF0C\u4E5F\u624D\u4F1A\u53BB\u66F4\u6539 promise \u5B9E\u4F8B\u72B6\u6001\u3002\u800C\u7ED3\u5408\u6211\u4EEC\u7684\u5B9E\u73B0\uFF0C\u8FD4\u56DE\u5B9E\u73B0\u4EE3\u7801\uFF0Cthen \u65B9\u6CD5\u4E2D\u7684 onfulfilled \u6267\u884C\u662F\u540C\u6B65\u7684\uFF0C\u5B83\u5728\u6267\u884C\u65F6 this.status \u4ECD\u7136\u4E3A pending\uFF0C\u5E76\u6CA1\u6709\u505A\u5230\u201C2 \u79D2\u4E2D\u4E4B\u540E\u518D\u6267\u884C onfulfilled\u201D\u3002</p><p>\u90A3\u8BE5\u600E\u4E48\u529E\u5462\uFF1F\u6211\u4EEC\u4F3C\u4E4E\u5E94\u8BE5\u5728\u201C\u5408\u9002\u201D\u7684\u65F6\u95F4\u624D\u53BB\u8C03\u7528 onfulfilled \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u5408\u9002\u7684\u65F6\u95F4\u5C31\u5E94\u8BE5\u662F\u5F00\u53D1\u8005\u8C03\u7528 resolve \u7684\u65F6\u523B\uFF0C\u90A3\u4E48\u6211\u4EEC\u5148\u5728\u72B6\u6001\uFF08status\uFF09\u4E3A pending \u65F6\uFF0C\u628A\u5F00\u53D1\u8005\u4F20\u8FDB\u6765\u7684 onfulfilled \u65B9\u6CD5\u5B58\u8D77\u6765\uFF0C\u5728 resolve \u65B9\u6CD5\u4E2D\u518D\u53BB\u6267\u884C\u5373\u53EF\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onFulfilledFunc = Function.prototype</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onRejectedFunc = Function.prototype</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.status = &#39;fulfilled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledFunc(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.status = &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedFunc(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; {throw error}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onFulfilledFunc = onfulfilled</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onRejectedFunc = onrejected</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u53D1\u73B0\u73B0\u5728\u6211\u4EEC\u7684\u5B9E\u73B0\u4E5F\u53EF\u4EE5\u652F\u6301\u5F02\u6B65\u4E86\uFF01</p><p>\u540C\u65F6\uFF0C <strong>\u6211\u4EEC\u77E5\u9053 Promise \u662F\u5F02\u6B65\u6267\u884C\u7684\uFF1A</strong></p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6B63\u5E38\u7684\u8BDD\uFF0C\u8FD9\u91CC\u4F1A <strong>\u6309\u7167\u987A\u5E8F</strong> \uFF0C\u8F93\u51FA 1 \u518D\u8F93\u51FA data\u3002</p><p>\u800C\u6211\u4EEC\u7684\u5B9E\u73B0\uFF0C\u5374\u6CA1\u6709\u8003\u8651\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5148\u8F93\u51FA data \u518D\u8F93\u51FA 1\u3002\u56E0\u6B64\uFF0C\u9700\u8981\u5C06 resolve \u548C reject \u7684\u6267\u884C\uFF0C\u653E\u5230\u4EFB\u52A1\u961F\u5217\u4E2D\u3002\u8FD9\u91CC\u59D1\u4E14\u5148\u653E\u5230 setTimeout \u91CC\uFF0C\u4FDD\u8BC1\u5F02\u6B65\u6267\u884C\uFF08\u8FD9\u6837\u7684\u505A\u6CD5\u5E76\u4E0D\u4E25\u8C28\uFF0C\u4E3A\u4E86\u4FDD\u8BC1 Promise \u5C5E\u4E8E microtasks\uFF0C\u5F88\u591A Promise \u7684\u5B9E\u73B0\u5E93\u7528\u4E86 MutationObserver \u6765\u6A21\u4EFF nextTick\uFF09\u3002</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const resolve = value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (value instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return value.then(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.status = &#39;fulfilled&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onFulfilledFunc(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const reject = reason =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.reason = reason</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.status = &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      this.onRejectedFunc(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u5728\u6267\u884C\u5230 executor(resolve, reject) \u65F6\uFF0C\u4E5F\u80FD\u4FDD\u8BC1\u5728 nextTick \u4E2D\u624D\u53BB\u6267\u884C\uFF0C\u4E0D\u4F1A\u963B\u585E\u540C\u6B65\u4EFB\u52A1\u3002</p><p>\u540C\u65F6\u6211\u4EEC\u5728 resolve \u65B9\u6CD5\u4E2D\uFF0C\u52A0\u5165\u4E86\u5BF9 value \u503C\u662F\u4E00\u4E2A Promise \u5B9E\u4F8B\u7684\u5224\u65AD\u3002\u770B\u4E00\u4E0B\u5230\u76EE\u524D\u4E3A\u6B62\u7684\u5B9E\u73B0\u4EE3\u7801\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.status = &#39;pending&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.value = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.reason = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onFulfilledFunc = Function.prototype</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.onRejectedFunc = Function.prototype</span></span>
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
<span class="line"><span style="color:#A6ACCD;">        this.onFulfilledFunc(this.value)</span></span>
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
<span class="line"><span style="color:#A6ACCD;">        this.onRejectedFunc(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; {throw error}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onFulfilledFunc = onfulfilled</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onRejectedFunc = onrejected</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>\u8FD9\u6837\u7684\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E5F\u4F1A <strong>\u6309\u7167\u987A\u5E8F</strong> \uFF0C\u8F93\u51FA 1 \u518D\u8F93\u51FA data\u3002</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E5F\u4F1A <strong>\u6309\u7167\u987A\u5E8F</strong> \uFF0C\u8F93\u51FA 1 \u518D\u8F93\u51FA data\u3002</p><h2 id="promise-\u7EC6\u8282\u5B8C\u5584" tabindex="-1">Promise \u7EC6\u8282\u5B8C\u5584 <a class="header-anchor" href="#promise-\u7EC6\u8282\u5B8C\u5584" aria-hidden="true">#</a></h2><p>\u5230\u6B64\u4E3A\u6B62\uFF0C\u4F3C\u4E4E\u6211\u4EEC\u7684 Promise \u5B9E\u73B0\u8D8A\u6765\u8D8A\u9760\u8C31\u4E86\uFF0C\u4F46\u662F\u8FD8\u6709\u4E9B\u7EC6\u8282\u9700\u8981\u5B8C\u5584\u3002</p><p>\u6BD4\u5982\u5F53\u6211\u4EEC\u5728 promise \u5B9E\u4F8B\u72B6\u6001\u53D8\u66F4\u4E4B\u524D\uFF0C\u6DFB\u52A0\u591A\u4E2A then \u65B9\u6CD5\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`1: \${data}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`2: \${data}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5E94\u8BE5\u8F93\u51FA\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">1: data</span></span>
<span class="line"><span style="color:#A6ACCD;">2: data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u800C\u6211\u4EEC\u7684\u5B9E\u73B0\uFF0C\u53EA\u4F1A\u8F93\u51FA 2: data\uFF0C\u8FD9\u662F\u56E0\u4E3A\u7B2C\u4E8C\u4E2A then \u65B9\u6CD5\u4E2D\u7684 onFulfilledFunc \u4F1A\u8986\u76D6\u7B2C\u4E00\u4E2A then \u65B9\u6CD5\u4E2D\u7684 onFulfilledFunc\u3002</p><p>\u8FD9\u4E2A\u95EE\u9898\u4E5F\u597D\u89E3\u51B3\uFF0C\u53EA\u9700\u8981\u5C06\u6240\u6709 then \u65B9\u6CD5\u4E2D\u7684 onFulfilledFunc \u50A8\u5B58\u4E3A\u4E00\u4E2A\u6570\u7EC4 onFulfilledArray\uFF0C\u5728 resolve \u65F6\uFF0C\u4F9D\u6B21\u6267\u884C\u5373\u53EF\u3002\u5BF9\u4E8E onRejectedFunc \u540C\u7406\uFF0C\u6539\u52A8\u540E\u7684\u5B9E\u73B0\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; {throw error}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onFulfilledArray.push(onfulfilled)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onRejectedArray.push(onrejected)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>\u53E6\u5916\u4E00\u4E2A\u7EC6\u8282\uFF0C\u5728\u6784\u9020\u51FD\u6570\u4E2D\u5982\u679C\u51FA\u9519\uFF0C\u5C06\u4F1A\u81EA\u52A8\u89E6\u53D1 promise \u5B9E\u4F8B\u72B6\u6001\u4E3A rejected\uFF0C\u6211\u4EEC\u7528 try...catch \u5757\u5BF9 executor \u8FDB\u884C\u5305\u88F9\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">  executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F53\u6211\u4EEC\u6545\u610F\u5199\u9519\u65F6\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve(&#39;data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">promise.then(data =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;got error from promise&#39;, error)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5C31\u53EF\u4EE5\u5BF9\u9519\u8BEF\u8FDB\u884C\u5904\u7406\uFF0C\u6355\u83B7\u5230\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">got error from promise ReferenceError: setTimeouteout is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">    at &lt;anonymous&gt;:2:3</span></span>
<span class="line"><span style="color:#A6ACCD;">    at &lt;anonymous&gt;:33:7</span></span>
<span class="line"><span style="color:#A6ACCD;">    at o (web-46c6729d4d8cac92aed8.js:1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u521D\u6B65\u5B9E\u73B0\u4E86\u57FA\u672C\u7684 Promise\uFF0C\u5B9E\u73B0\u7ED3\u679C\u56FA\u7136\u91CD\u8981\uFF0C\u4F46\u662F\u5728\u5B9E\u73B0\u8FC7\u7A0B\u4E2D\uFF0C\u4E5F\u52A0\u6DF1\u4E86\u5BF9 Promise \u7684\u7406\u89E3\uFF0C\u5F97\u51FA\u4E86\u4E00\u4E9B\u91CD\u8981\u7ED3\u8BBA\uFF1A</p><ul><li>Promise \u72B6\u6001\u5177\u6709\u51DD\u56FA\u6027</li><li>Promise \u9519\u8BEF\u5904\u7406</li><li>Promise \u5B9E\u4F8B\u6DFB\u52A0\u591A\u4E2A then \u5904\u7406</li></ul><p>\u6700\u540E\uFF0C\u9644\u4E0A\u5230\u6B64\u4E3A\u6B62\u7684\u5168\u90E8\u4EE3\u7801\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">function Promise(executor) {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    executor(resolve, reject)</span></span>
<span class="line"><span style="color:#A6ACCD;">  } catch(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reject(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Promise.prototype.then = function(onfulfilled, onrejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  onfulfilled = typeof onfulfilled === &#39;function&#39; ? onfulfilled : data =&gt; data</span></span>
<span class="line"><span style="color:#A6ACCD;">  onrejected = typeof onrejected === &#39;function&#39; ? onrejected : error =&gt; { throw error}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;fulfilled&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onfulfilled(this.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;rejected&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onrejected(this.reason)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (this.status === &#39;pending&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onFulfilledArray.push(onfulfilled)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.onRejectedArray.push(onrejected)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><p>\u4E0B\u4E00\u8BB2\u6211\u4EEC\u5C06\u4F1A\u7EE7\u7EED\u5B9E\u73B0 Promise\u3001\u5904\u7406 Promise \u5B9E\u4F8B\u7684\u8FD4\u56DE\u95EE\u9898\uFF0C\u4EE5\u53CA\u66F4\u591A\u7684 Promise \u9759\u6001\u65B9\u6CD5\u3002</p><h2 id="\u5206\u4EAB\u4EA4\u6D41" tabindex="-1">\u5206\u4EAB\u4EA4\u6D41 <a class="header-anchor" href="#\u5206\u4EAB\u4EA4\u6D41" aria-hidden="true">#</a></h2><p>\u9605\u8BFB\u6587\u7AE0\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u7591\u95EE\u968F\u65F6\u53EF\u4EE5\u8DDF\u5176\u4ED6\u5C0F\u4F19\u4F34\u8BA8\u8BBA\uFF0C\u6216\u8005\u76F4\u63A5\u5411\u4F5C\u8005 LucasHC \u63D0\u95EE\uFF08\u4F5C\u8005\u770B\u5230\u540E\u62BD\u7A7A\u56DE\u590D\uFF09\u3002 <strong>\u4F60\u7684\u5206\u4EAB\u4E0D\u4EC5\u5E2E\u52A9\u4ED6\u4EBA\uFF0C\u66F4\u4F1A\u63D0\u5347\u81EA\u5DF1\u3002</strong></p><p>\u4F60\u4E5F\u53EF\u4EE5\u8BF4\u8BF4\u81EA\u5DF1\u6700\u60F3\u4E86\u89E3\u7684\u4E3B\u9898\uFF0C\u8BFE\u7A0B\u5185\u5BB9\u4F1A\u6839\u636E\u90E8\u5206\u8BFB\u8005\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\u8FED\u4EE3\u548C\u5B8C\u5584\u3002</p><p>\u6B64\u5916\uFF0C\u6211\u4EEC\u4E3A\u672C\u8BFE\u7A0B\u4ED8\u8D39\u8BFB\u8005\u521B\u5EFA\u4E86\u300A\u524D\u7AEF\u5F00\u53D1\u6838\u5FC3\u77E5\u8BC6\u8FDB\u9636\u300B\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u4EE5\u65B9\u4FBF\u66F4\u6709\u9488\u5BF9\u6027\u5730\u8BA8\u8BBA\u8BFE\u7A0B\u76F8\u5173\u95EE\u9898\u3002\uFF08\u5165\u7FA4\u8BF7\u5230\u7B2C1-2\u8BFE\u672B\u5C3E\u6DFB\u52A0 GitChat \u5C0F\u52A9\u624B\u4F3D\u5229\u7565\u7684\u5FAE\u4FE1\uFF0C\u5E76\u6CE8\u660E\u300C\u524D\u7AEF\u6838\u5FC3\u300D\uFF0C\u8C22\u8C22~\uFF09</p>`,98),r=[p];function c(o,i,t,b,A,C){return n(),a("div",null,r)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
