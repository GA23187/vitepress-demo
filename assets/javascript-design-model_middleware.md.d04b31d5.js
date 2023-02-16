import{_ as s,o as n,c as a,a as l}from"./app.b476fd3b.js";const e="/vitepress-demo/assets/5d638d8b0001e7f506400360.1f95844f.jpg",p="/vitepress-demo/assets/V7d4E8k3XCaPnyK.f06063f5.png",o="/vitepress-demo/assets/5d6389bd0001c3c904780435.15712d16.png",c="/vitepress-demo/assets/5d638c1b000161af04100295.32a2e6f4.gif",g=JSON.parse('{"title":"29 \u4E2D\u95F4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F\u4E2D\u95F4\u4EF6","slug":"_1-\u4EC0\u4E48\u662F\u4E2D\u95F4\u4EF6","link":"#_1-\u4EC0\u4E48\u662F\u4E2D\u95F4\u4EF6","children":[]},{"level":2,"title":"2. Koa \u91CC\u7684\u4E2D\u95F4\u4EF6","slug":"_2-koa-\u91CC\u7684\u4E2D\u95F4\u4EF6","link":"#_2-koa-\u91CC\u7684\u4E2D\u95F4\u4EF6","children":[{"level":3,"title":"2.1 Koa2 \u91CC\u7684\u4E2D\u95F4\u4EF6\u4F7F\u7528","slug":"_2-1-koa2-\u91CC\u7684\u4E2D\u95F4\u4EF6\u4F7F\u7528","link":"#_2-1-koa2-\u91CC\u7684\u4E2D\u95F4\u4EF6\u4F7F\u7528","children":[]},{"level":3,"title":"2.2 \u6D0B\u8471\u6A21\u578B","slug":"_2-2-\u6D0B\u8471\u6A21\u578B","link":"#_2-2-\u6D0B\u8471\u6A21\u578B","children":[]}]}],"relativePath":"javascript-design-model/middleware.md","lastUpdated":1676558697000}'),r={name:"javascript-design-model/middleware.md"},t=l('<h1 id="_29-\u4E2D\u95F4\u4EF6" tabindex="-1">29 \u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#_29-\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h1><p><img src="'+e+'" alt=""></p><p>\u6CA1\u6709\u667A\u6167\u7684\u5934\u8111\uFF0C\u5C31\u50CF\u6CA1\u6709\u8721\u70DB\u7684\u706F\u7B3C\u3002</p><p>\u2014\u2014\u6258\u5C14\u65AF\u6CF0</p><p><strong>\u4E2D\u95F4\u4EF6</strong> \uFF08Middleware\uFF09\uFF0C\u53C8\u79F0\u4E2D\u4ECB\u5C42\uFF0C\u662F\u63D0\u4F9B\u7CFB\u7EDF\u8F6F\u4EF6\u548C\u5E94\u7528\u8F6F\u4EF6\u4E4B\u95F4\u8FDE\u63A5\u7684\u8F6F\u4EF6\uFF0C\u4EE5\u4FBF\u4E8E\u8F6F\u4EF6\u5404\u90E8\u4EF6\u4E4B\u95F4\u7684\u6C9F\u901A\uFF0C\u7279\u522B\u662F\u5E94\u7528\u8F6F\u4EF6\u5BF9\u4E8E\u7CFB\u7EDF\u8F6F\u4EF6\u7684\u96C6\u4E2D\u7684\u903B\u8F91\u3002\u4E2D\u95F4\u4EF6\u5728\u4F01\u4E1A\u67B6\u6784\u4E2D\u8868\u793A\u5404\u79CD\u8F6F\u4EF6\u5957\u4EF6\uFF0C\u6709\u52A9\u4E8E\u62BD\u8C61\u5E95\u5C42\u673A\u5236\uFF0C\u6BD4\u5982\u64CD\u4F5C\u7CFB\u7EDF API\u3001\u7F51\u7EDC\u901A\u4FE1\u3001\u5185\u5B58\u7BA1\u7406\u7B49\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8\u5E94\u7528\u4E2D\u7684\u4E1A\u52A1\u6A21\u5757\u3002</p><p>\u4ECE\u66F4\u5E7F\u4E49\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u4E2D\u95F4\u4EF6\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u94FE\u63A5\u5E95\u5C42\u670D\u52A1\u548C\u5E94\u7528\u7684\u8F6F\u4EF6\u5C42\u3002\u540E\u6587\u6211\u4EEC\u4E3B\u8981\u4F7F\u7528 Node.js \u91CC\u6700\u8FD1\u5F88\u70ED\u95E8\u7684\u6846\u67B6 Koa2 \u91CC\u7684\u4E2D\u95F4\u4EF6\u6982\u5FF5\u4E3A\u4F8B\uFF0C\u5E76\u4E14\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u6765\u52A0\u6DF1\u7406\u89E3\u3002</p><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u672C\u6587\u53EF\u80FD\u7528\u5230\u4E00\u4E9B ES6 \u7684\u8BED\u6CD5 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noreferrer">let/const</a>\u3001<a href="http://es6.ruanyifeng.com/#docs/function" target="_blank" rel="noreferrer">\u7BAD\u5934\u51FD\u6570</a>\u3001<a href="http://es6.ruanyifeng.com/#docs/async" target="_blank" rel="noreferrer">async/await</a> \u7B49\uFF0C\u5982\u679C\u8FD8\u6CA1\u63A5\u89E6\u8FC7\u53EF\u4EE5\u70B9\u51FB\u94FE\u63A5\u7A0D\u52A0\u5B66\u4E60 ~</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662F\u4E2D\u95F4\u4EF6" tabindex="-1">1. \u4EC0\u4E48\u662F\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728 Express\u3001Koa2 \u4E2D\uFF0C\u4E2D\u95F4\u4EF6\u4EE3\u8868\u4E00\u7CFB\u5217\u4EE5\u7BA1\u9053\u5F62\u5F0F\u88AB\u8FDE\u63A5\u8D77\u6765\uFF0C\u4EE5\u5904\u7406 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u51FD\u6570\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4E2D\u95F4\u4EF6\u5176\u5B9E<strong>\u5C31\u662F\u4E00\u4E2A\u51FD\u6570</strong>\uFF0C\u4E00\u4E2A\u6267\u884C\u7279\u5B9A\u903B\u8F91\u7684\u51FD\u6570\u3002\u524D\u7AEF\u4E2D\u7C7B\u4F3C\u7684\u6982\u5FF5\u8FD8\u6709\u62E6\u622A\u5668\u3001Vue \u4E2D\u7684\u8FC7\u6EE4\u5668\u3001<code>vue-router</code> \u4E2D\u7684\u8DEF\u7531\u5B88\u536B\u7B49\u3002</p><p>\u5DE5\u4F5C\u539F\u7406\u5C31\u662F\u8FDB\u5165\u5177\u4F53\u4E1A\u52A1\u4E4B\u524D\uFF0C\u5148\u5BF9\u5176\u8FDB\u884C\u9884\u5904\u7406\uFF08\u5728\u8FD9\u4E00\u70B9\u4E0A\u6709\u70B9\u7C7B\u4F3C\u4E8E\u88C5\u9970\u5668\u6A21\u5F0F\uFF09\uFF0C\u6216\u8005\u5728\u8FDB\u884C\u4E1A\u52A1\u4E4B\u540E\uFF0C\u5BF9\u5176\u8FDB\u884C\u540E\u5904\u7406\u3002</p><p>\u793A\u610F\u56FE\u5982\u4E0B\uFF1A</p><p><img src="'+p+`" alt=""></p><p>\u5F53\u63A5\u53D7\u5230\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5BF9\u8FD9\u4E2A\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u4E32\u8054\u7684\u7BA1\u9053\uFF0C\u6BD4\u5982\u5BF9\u4E8E\u6BCF\u4E2A\u8BF7\u6C42\uFF0C\u6211\u4EEC\u90FD\u60F3\u63D2\u5165\u4E00\u4E9B\u76F8\u540C\u7684\u903B\u8F91\u6BD4\u5982\u6743\u9650\u9A8C\u8BC1\u3001\u6570\u636E\u8FC7\u6EE4\u3001\u65E5\u5FD7\u7EDF\u8BA1\u3001\u53C2\u6570\u9A8C\u8BC1\u3001\u5F02\u5E38\u5904\u7406\u7B49\u529F\u80FD\u3002\u5BF9\u4E8E\u5F00\u53D1\u8005\u800C\u8A00\uFF0C\u81EA\u7136\u4E0D\u5E0C\u671B\u5BF9\u4E8E\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u7279\u6B8A\u5904\u7406\uFF0C\u56E0\u6B64\u5F15\u5165\u4E2D\u95F4\u4EF6\u6765\u7B80\u5316\u548C\u9694\u79BB\u8FD9\u4E9B\u57FA\u7840\u8BBE\u65BD\u4E0E\u4E1A\u52A1\u903B\u8F91\u4E4B\u95F4\u7684\u7EC6\u8282\uFF0C\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u5173\u6CE8\u5728\u4E1A\u52A1\u7684\u5F00\u53D1\u4E0A\uFF0C\u4EE5\u8FBE\u5230\u63D0\u5347\u5F00\u53D1\u6548\u7387\u7684\u76EE\u7684\u3002</p><h2 id="_2-koa-\u91CC\u7684\u4E2D\u95F4\u4EF6" tabindex="-1">2. Koa \u91CC\u7684\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#_2-koa-\u91CC\u7684\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><h3 id="_2-1-koa2-\u91CC\u7684\u4E2D\u95F4\u4EF6\u4F7F\u7528" tabindex="-1">2.1 Koa2 \u91CC\u7684\u4E2D\u95F4\u4EF6\u4F7F\u7528 <a class="header-anchor" href="#_2-1-koa2-\u91CC\u7684\u4E2D\u95F4\u4EF6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>Koa2 \u4E2D\u7684\u4E2D\u95F4\u4EF6\u5F62\u5F0F\u4E3A\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">app.use(async function middleware(context, next){ </span></span>
<span class="line"><span style="color:#A6ACCD;">    // ... \u524D\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    await next()     // \u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ... \u540E\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5176\u4E2D\u7B2C\u4E00\u4E2A\u53C2\u6570 <code>context</code> \u4F5C\u4E3A\u4E0A\u4E0B\u6587\u5C01\u88C5\u4E86 <code>request</code> \u548C <code>response</code> \u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B83\u6765\u8BBF\u95EE <code>request</code> \u548C <code>response</code>\uFF1B<code>next</code> \u662F\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u5F53\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u5904\u7406\u5B8C\u6BD5\uFF0C\u8C03\u7528 <code>next()</code> \u5C31\u53EF\u4EE5\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u5904\u7406\u5B8C\u518D\u4F7F\u7528 <code>next()</code>\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E2D\u95F4\u4EF6\u7684\u7BA1\u9053\u5316\uFF0C\u5BF9\u6D88\u606F\u7684\u4F9D\u6B21\u5904\u7406\u3002</p><p>\u4E00\u822C\u4E2D\u95F4\u4EF6\u6A21\u5F0F\u90FD\u7EA6\u5B9A\u6709\u4E2A <code>use</code> \u65B9\u6CD5\u6765\u6CE8\u518C\u4E2D\u95F4\u4EF6\uFF0CKoa2 \u4E5F\u662F\u5982\u6B64\u3002\u5343\u8A00\u4E07\u8BED\u4E0D\u53CA\u4E00\u884C\u4EE3\u7801\uFF0C\u8FD9\u91CC\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const koa = require(&#39;koa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = new koa()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use((ctx, next) =&gt; {      // \u6CA1\u9519\uFF0C\u8FD9\u5C31\u662F\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;in \u4E2D\u95F4\u4EF61&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(10001)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA\uFF1A in \u4E2D\u95F4\u4EF61</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Koa2 \u4E2D\u7684\u4E2D\u95F4\u4EF6\u6709\u591A\u79CD\u7C7B\u578B\uFF1A</p><ol><li>\u5E94\u7528\u7EA7\u4E2D\u95F4\u4EF6\uFF1B</li><li>\u8DEF\u7531\u7EA7\u4E2D\u95F4\u4EF6\uFF1B</li><li>\u9519\u8BEF\u5904\u7406\u4E2D\u95F4\u4EF6\uFF1B</li><li>\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\uFF1B</li></ol><p>\u9664\u4E86\u4F7F\u7528\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\u6BD4\u5982 <code>koa-router</code>\u3001<code>koa-bodyparser</code>\u3001<code>koa-static</code>\u3001<code>koa-logger</code> \u7B49\u63D0\u4F9B\u4E00\u4E9B\u901A\u7528\u7684\u8DEF\u7531\u3001\u5E8F\u5217\u5316\u3001\u53CD\u5E8F\u5217\u5316\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\u529F\u80FD\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u5E94\u7528\u7EA7\u4E2D\u95F4\u4EF6\uFF0C\u6765\u5B8C\u6210\u4E1A\u52A1\u76F8\u5173\u7684\u903B\u8F91\u3002</p><p>\u901A\u8FC7\u5F15\u5165\u5404\u79CD\u529F\u80FD\u5404\u5F02\u7684\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u5B8C\u6210\u5F88\u591A\u4E1A\u52A1\u76F8\u5173\u7684\u529F\u80FD\uFF1A</p><ol><li><code>request</code> \u548C <code>response</code> \u7684\u89E3\u6790\u548C\u5904\u7406\uFF1B</li><li>\u751F\u6210\u8BBF\u95EE\u65E5\u5FD7\uFF1B</li><li>\u7BA1\u7406 <code>session</code>\u3001<code>cookie</code> \u7B49\uFF1B</li><li>\u63D0\u4F9B\u7F51\u7EDC\u5B89\u5168\u9632\u62A4\uFF1B</li></ol><h3 id="_2-2-\u6D0B\u8471\u6A21\u578B" tabindex="-1">2.2 \u6D0B\u8471\u6A21\u578B <a class="header-anchor" href="#_2-2-\u6D0B\u8471\u6A21\u578B" aria-hidden="true">#</a></h3><p>\u5728\u4F7F\u7528\u591A\u4E2A\u4E2D\u95F4\u4EF6\u65F6\uFF0C\u5F15\u7528\u4E00\u5F20\u8457\u540D\u7684\u6D0B\u8471\u6A21\u578B\u56FE\uFF1A</p><p><img src="`+o+`" alt="\u56FE\u7247\u63CF\u8FF0"><br> \u6B63\u5982\u4E0A\u9762\u7684\u6D0B\u8471\u56FE\u6240\u793A\uFF0C\u8BF7\u6C42\u5728\u8FDB\u5165\u4E1A\u52A1\u903B\u8F91\u65F6\uFF0C\u4F1A\u4F9D\u6B21\u7ECF\u8FC7\u4E00\u7CFB\u5217\u4E2D\u95F4\u4EF6\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u6709\u5E8F\u5904\u7406\uFF0C\u4E1A\u52A1\u903B\u8F91\u4E4B\u540E\uFF0C\u53C8\u50CF\u6808\u7684\u5148\u5165\u540E\u51FA\u4E00\u6837\uFF0C\u5012\u5E8F\u7ECF\u8FC7\u4E4B\u524D\u7684\u4E2D\u95F4\u4EF6\u3002\u6D0B\u8471\u6A21\u578B\u5141\u8BB8\u5F53\u5E94\u7528\u6267\u884C\u5B8C\u4E3B\u8981\u903B\u8F91\u4E4B\u540E\u8FDB\u884C\u4E00\u4E9B\u540E\u5904\u7406\uFF0C\u518D\u5C06\u54CD\u5E94\u8FD4\u56DE\u7ED9\u7528\u6237\u3002</p><p>\u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Koa = require(&#39;koa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = new Koa()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E2D\u95F4\u4EF61</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;in \u4E2D\u95F4\u4EF61&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    await next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;out \u4E2D\u95F4\u4EF61&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E2D\u95F4\u4EF62</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;in \u4E2D\u95F4\u4EF62&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    await next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;out \u4E2D\u95F4\u4EF62&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// response</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async ctx =&gt; { ctx.body = &#39;Hello World&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(10001)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;app started at port http://localhost:10001&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA\uFF1A  in  \u4E2D\u95F4\u4EF61</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA\uFF1A  in  \u4E2D\u95F4\u4EF62</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA\uFF1A  out \u4E2D\u95F4\u4EF62</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA\uFF1A  out \u4E2D\u95F4\u4EF61</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5F15\u5165 <code>setTimeout</code> \u6765\u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\u7684\u8FC7\u7A0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Koa = require(&#39;koa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = new Koa()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E2D\u95F4\u4EF61</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;in \u4E2D\u95F4\u4EF61&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    await next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;out \u4E2D\u95F4\u4EF61&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E2D\u95F4\u4EF62</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;in \u4E2D\u95F4\u4EF62&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    await new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.zjj_start2 = Date.now()</span></span>
<span class="line"><span style="color:#A6ACCD;">          setTimeout(() =&gt; resolve(), 1000 + Math.random() * 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    await next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const duration = Date.now() - ctx.zjj_start2</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;out \u4E2D\u95F4\u4EF62 \u8017\u65F6\uFF1A&#39; + duration + &#39;ms&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E2D\u95F4\u4EF63</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async (ctx, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;in \u4E2D\u95F4\u4EF63&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    await new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.zjj_start3 = Date.now()</span></span>
<span class="line"><span style="color:#A6ACCD;">          setTimeout(() =&gt; resolve(), 1000 + Math.random() * 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    await next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const duration = Date.now() - ctx.zjj_start3</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;out \u4E2D\u95F4\u4EF63 \u8017\u65F6\uFF1A&#39; + duration + &#39;ms&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// response</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(async ctx =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39; ... \u4E1A\u52A1\u903B\u8F91\u5904\u7406\u8FC7\u7A0B ... &#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.listen(10001)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;app started at port http://localhost:10001&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+c+'" alt="\u56FE\u7247\u63CF\u8FF0"><br> \u5728\u4F7F\u7528\u591A\u4E2A\u4E2D\u95F4\u4EF6\u65F6\uFF0C\u7279\u522B\u662F\u5B58\u5728\u5F02\u6B65\u7684\u573A\u666F\uFF0C\u4E00\u822C\u8981 <code>await</code> \u6765\u8C03\u7528 <code>next</code> \u6765\u4FDD\u8BC1\u5728\u5F02\u6B65\u573A\u666F\u4E2D\uFF0C\u4E2D\u95F4\u4EF6\u4ECD\u6309\u7167\u6D0B\u8471\u6A21\u578B\u7684\u987A\u5E8F\u6765\u6267\u884C\uFF0C\u56E0\u6B64\u522B\u5FD8\u4E86 <code>next</code> \u4E5F\u8981\u901A\u8FC7 <code>await</code> \u8C03\u7528\u3002</p><hr><p>\u53C2\u8003\u6587\u6863\uFF1A</p><ol><li><a href="https://koa.bootcss.com/" target="_blank" rel="noreferrer">Koajs \u4E2D\u6587\u6587\u6863</a></li><li><a href="http://www.ruanyifeng.com/blog/2017/08/koa.html" target="_blank" rel="noreferrer">Koa \u6846\u67B6\u6559\u7A0B - \u962E\u4E00\u5CF0</a></li></ol>',37),i=[t];function b(A,C,u,d,m,y){return n(),a("div",null,i)}const _=s(r,[["render",b]]);export{g as __pageData,_ as default};