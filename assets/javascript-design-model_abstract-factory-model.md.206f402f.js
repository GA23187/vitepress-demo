import{_ as s,o as n,c as a,a as l}from"./app.b476fd3b.js";const p="/vitepress-demo/assets/5d11def100016edf06400359.692dc149.jpg",e="/vitepress-demo/assets/5d1321610001a09511590468.6df1e8dd.png",m=JSON.parse('{"title":"09 \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A\u53C8\u53BB\u5C0F\u9910\u9986\u4E0B\u9986\u5B50","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u4F60\u66FE\u89C1\u8FC7\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","slug":"_1-\u4F60\u66FE\u89C1\u8FC7\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","link":"#_1-\u4F60\u66FE\u89C1\u8FC7\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","children":[]},{"level":2,"title":"2. \u5B9E\u4F8B\u7684\u4EE3\u7801\u5B9E\u73B0","slug":"_2-\u5B9E\u4F8B\u7684\u4EE3\u7801\u5B9E\u73B0","link":"#_2-\u5B9E\u4F8B\u7684\u4EE3\u7801\u5B9E\u73B0","children":[]},{"level":2,"title":"3. \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u901A\u7528\u5B9E\u73B0","slug":"_3-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u901A\u7528\u5B9E\u73B0","link":"#_3-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u901A\u7528\u5B9E\u73B0","children":[]},{"level":2,"title":"4. \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9","slug":"_4-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9","link":"#_4-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9","children":[]},{"level":2,"title":"5. \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F","slug":"_5-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F","link":"#_5-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F","children":[]},{"level":2,"title":"6. \u5176\u4ED6\u76F8\u5173\u6A21\u5F0F","slug":"_6-\u5176\u4ED6\u76F8\u5173\u6A21\u5F0F","link":"#_6-\u5176\u4ED6\u76F8\u5173\u6A21\u5F0F","children":[{"level":3,"title":"6.1 \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E0E\u5DE5\u5382\u6A21\u5F0F","slug":"_6-1-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E0E\u5DE5\u5382\u6A21\u5F0F","link":"#_6-1-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E0E\u5DE5\u5382\u6A21\u5F0F","children":[]}]}],"relativePath":"javascript-design-model/abstract-factory-model.md","lastUpdated":1676558697000}'),r={name:"javascript-design-model/abstract-factory-model.md"},c=l('<h1 id="_09-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A\u53C8\u53BB\u5C0F\u9910\u9986\u4E0B\u9986\u5B50" tabindex="-1">09 \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A\u53C8\u53BB\u5C0F\u9910\u9986\u4E0B\u9986\u5B50 <a class="header-anchor" href="#_09-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A\u53C8\u53BB\u5C0F\u9910\u9986\u4E0B\u9986\u5B50" aria-hidden="true">#</a></h1><p><img src="'+p+`" alt=""></p><p>\u673A\u9047\u53EA\u504F\u7231\u90A3\u4E9B\u6709\u51C6\u5907\u7684\u5934\u8111\u3002</p><p>\u2014\u2014\u5DF4\u65AF\u5FB7</p><p><strong>\u5DE5\u5382\u6A21\u5F0F</strong> \uFF08Factory Pattern\uFF09\uFF0C\u6839\u636E\u8F93\u5165\u7684\u4E0D\u540C\u8FD4\u56DE\u4E0D\u540C\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u4E00\u822C\u7528\u6765\u521B\u5EFA\u540C\u4E00\u7C7B\u5BF9\u8C61\u3002\u5DE5\u5382\u65B9\u5F0F\u7684\u4E3B\u8981\u601D\u60F3\u662F<strong>\u5C06\u5BF9\u8C61\u7684\u521B\u5EFA\u4E0E\u5BF9\u8C61\u7684\u5B9E\u73B0\u5206\u79BB</strong>\u3002</p><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u672C\u6587\u7528\u5230 ES6 \u7684\u8BED\u6CD5 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noreferrer">let/const</a> \u3001<a href="http://es6.ruanyifeng.com/#docs/class" target="_blank" rel="noreferrer">Class</a>\u3001<a href="http://es6.ruanyifeng.com/#docs/destructuring" target="_blank" rel="noreferrer">\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C</a> \u7B49\uFF0C\u5982\u679C\u8FD8\u6CA1\u63A5\u89E6\u8FC7\u53EF\u4EE5\u70B9\u51FB\u94FE\u63A5\u7A0D\u52A0\u5B66\u4E60 ~</p></blockquote><p><strong>\u62BD\u8C61\u5DE5\u5382</strong> \uFF08Abstract Factory\uFF09\uFF1A\u901A\u8FC7\u5BF9\u7C7B\u7684\u5DE5\u5382\u62BD\u8C61\u4F7F\u5176\u4E1A\u52A1\u7528\u4E8E\u5BF9\u4EA7\u54C1\u7C7B\u7C07\u7684\u521B\u5EFA\uFF0C\u800C\u4E0D\u662F\u8D1F\u8D23\u521B\u5EFA\u67D0\u4E00\u7C7B\u4EA7\u54C1\u7684\u5B9E\u4F8B\u3002\u5173\u952E\u5728\u4E8E\u4F7F\u7528\u62BD\u8C61\u7C7B\u5236\u5B9A\u4E86\u5B9E\u4F8B\u7684\u7ED3\u6784\uFF0C\u8C03\u7528\u8005\u76F4\u63A5\u9762\u5411\u5B9E\u4F8B\u7684\u7ED3\u6784\u7F16\u7A0B\uFF0C<strong>\u4ECE\u5B9E\u4F8B\u7684\u5177\u4F53\u5B9E\u73B0\u4E2D\u89E3\u8026</strong>\u3002</p><p>\u6211\u4EEC\u77E5\u9053 JavaScript \u5E76\u4E0D\u662F\u5F3A\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\uFF0C\u6240\u4EE5\u4F7F\u7528\u4F20\u7EDF\u7F16\u8BD1\u578B\u8BED\u8A00\u6BD4\u5982 JAVA\u3001C#\u3001C++ \u7B49\u5B9E\u73B0\u7684\u8BBE\u8BA1\u6A21\u5F0F\u548C JavaScript \u4E0D\u592A\u4E00\u6837\uFF0C\u6BD4\u5982 JavaScript \u4E2D\u6CA1\u6709\u539F\u751F\u7684\u7C7B\u548C\u63A5\u53E3\u7B49\uFF08\u4E0D\u8FC7 ES6+ \u6E10\u6E10\u63D0\u4F9B\u7C7B\u4F3C\u7684\u8BED\u6CD5\u7CD6\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u53D8\u901A\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u3002\u6700\u91CD\u8981\u7684\u662F\u8BBE\u8BA1\u6A21\u5F0F\u80CC\u540E\u7684\u6838\u5FC3\u601D\u60F3\uFF0C\u548C\u5B83\u6240\u8981\u89E3\u51B3\u7684\u95EE\u9898\u3002</p><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u672C\u6587\u7528\u5230 ES6 \u7684\u8BED\u6CD5 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noreferrer">let/const</a> \u3001<a href="http://es6.ruanyifeng.com/#docs/class" target="_blank" rel="noreferrer">Class</a>\u3001<a href="http://es6.ruanyifeng.com/#docs/destructuring" target="_blank" rel="noreferrer">\u53D8\u91CF\u7684\u89E3\u6784\u8D4B\u503C</a> \u7B49\uFF0C\u5982\u679C\u8FD8\u6CA1\u63A5\u89E6\u8FC7\u53EF\u4EE5\u70B9\u51FB\u94FE\u63A5\u7A0D\u52A0\u5B66\u4E60 ~</p><p>\u53E6\u5916\uFF0C\u672C\u6587\u5EFA\u8BAE\u5728\u4E0A\u4E00\u7AE0<strong>\u5DE5\u5382\u6A21\u5F0F</strong>\u4E4B\u540E\u9605\u8BFB\u3002</p></blockquote><h2 id="_1-\u4F60\u66FE\u89C1\u8FC7\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1">1. \u4F60\u66FE\u89C1\u8FC7\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F <a class="header-anchor" href="#_1-\u4F60\u66FE\u89C1\u8FC7\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u8FD8\u662F\u4F7F\u7528\u4E0A\u4E00\u8282\u5DE5\u5382\u6A21\u5F0F\u4E2D\u4F7F\u7528\u7684\u996D\u5E97\u4F8B\u5B50\u3002</p><p>\u4F60\u518D\u6B21\u6765\u5230\u4E86\u5C0F\u533A\u7684\u996D\u5E97\uFF0C\u8DDF\u8001\u677F\u8BF4\u6765\u4E00\u4EFD\u9C7C\u9999\u8089\u4E1D\uFF0C\u6765\u4E00\u4EFD\u5BAB\u4FDD\u9E21\u4E01\uFF0C\u6765\u4E00\u4EFD\u756A\u8304\u9E21\u86CB\u6C64\uFF0C\u6765\u4E00\u4EFD\u6392\u9AA8\u6C64\uFF08\u4ECA\u5929\u53EF\u80FD\u6BD4\u8F83\u60F3\u559D\u6C64\uFF09\u3002\u65E0\u8BBA\u4EC0\u4E48\u6837\u7684\u83DC\uFF0C\u8FD8\u662F\u4EC0\u4E48\u6837\u7684\u6C64\uFF0C\u4ED6\u4EEC\u90FD\u5177\u6709\u540C\u6837\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982\u83DC\u90FD\u53EF\u4EE5\u5403\uFF0C\u6C64\u90FD\u53EF\u4EE5\u559D\u3002\u6240\u4EE5\u6211\u4EEC\u4E0D\u8BBA\u62FF\u5230\u4EC0\u4E48\u83DC\uFF0C\u90FD\u53EF\u4EE5\u5403\uFF0C\u800C\u4E0D\u8BBA\u62FF\u5230\u4EC0\u4E48\u6C64\uFF0C\u90FD\u53EF\u4EE5\u559D\u3002\u5BF9\u4E8E\u996D\u5E97\u4E5F\u4E00\u6837\uFF0C\u8FD9\u4E2A\u996D\u5E97\u53EF\u4EE5\u505A\u83DC\u505A\u6C64\uFF0C\u53E6\u4E00\u4E2A\u996D\u5E97\u4E5F\u53EF\u4EE5\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u996D\u5E97\u5C31\u5177\u6709\u540C\u6837\u7684\u529F\u80FD\u7ED3\u6784\u3002</p><p>\u4E0A\u9762\u7684\u573A\u666F\u90FD\u662F\u5C5E\u4E8E\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F8B\u5B50\u3002\u83DC\u7C7B\u5C5E\u4E8E\u62BD\u8C61\u4EA7\u54C1\u7C7B\uFF0C\u5236\u5B9A\u5177\u4F53\u4EA7\u54C1\u83DC\u7C7B\u6240\u5177\u5907\u7684\u5C5E\u6027\uFF0C\u800C\u996D\u5E97\u548C\u4E4B\u524D\u7684\u5DE5\u5382\u6A21\u5F0F\u4E00\u6837\uFF0C\u8D1F\u8D23\u5177\u4F53\u751F\u4EA7\u4EA7\u54C1\u5B9E\u4F8B\uFF0C\u8BBF\u95EE\u8005\u901A\u8FC7\u8001\u677F\u83B7\u53D6\u60F3\u62FF\u7684\u4EA7\u54C1\u3002\u53EA\u8981\u6211\u4EEC\u70B9\u7684\u662F\u6C64\u7C7B\uFF0C\u5373\u4F7F\u8FD8\u6CA1\u6709\u88AB\u505A\u51FA\u6765\uFF0C\u6211\u4EEC\u5C31\u77E5\u9053\u662F\u53EF\u4EE5\u559D\u7684\u3002\u63A8\u5E7F\u4E00\u4E0B\uFF0C\u996D\u5E97\u529F\u80FD\u4E5F\u53EF\u4EE5\u88AB\u62BD\u8C61\uFF08\u62BD\u8C61\u996D\u5E97\u7C7B\uFF09\uFF0C\u7EE7\u627F\u8FD9\u4E2A\u7C7B\u7684\u996D\u5E97\u5B9E\u4F8B\u90FD\u5177\u6709\u505A\u83DC\u548C\u505A\u6C64\u7684\u529F\u80FD\uFF0C\u8FD9\u6837\u4E5F\u5B8C\u6210\u4E86\u62BD\u8C61\u7C7B\u5BF9\u5B9E\u4F8B\u7684\u7ED3\u6784\u7EA6\u675F\u3002</p><p>\u5728\u7C7B\u4F3C\u573A\u666F\u4E2D\uFF0C\u8FD9\u4E9B\u4F8B\u5B50\u6709\u7279\u70B9\uFF1A\u53EA\u8981\u5B9E\u73B0\u4E86\u62BD\u8C61\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u90FD\u5B9E\u73B0\u4E86\u62BD\u8C61\u7C7B\u5236\u5B9A\u7684\u7ED3\u6784\uFF1B</p><h2 id="_2-\u5B9E\u4F8B\u7684\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">2. \u5B9E\u4F8B\u7684\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#_2-\u5B9E\u4F8B\u7684\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u77E5\u9053 JavaScript \u5E76\u4E0D\u5F3A\u9762\u5411\u5BF9\u8C61\uFF0C\u4E5F\u6CA1\u6709\u63D0\u4F9B\u62BD\u8C61\u7C7B\uFF08\u81F3\u5C11\u76EE\u524D\u6CA1\u6709\u63D0\u4F9B\uFF09\uFF0C\u4F46\u662F\u53EF\u4EE5\u6A21\u62DF\u62BD\u8C61\u7C7B\u3002\u7528\u5BF9 <code>new.target</code> \u6765\u5224\u65AD <code>new</code> \u7684\u7C7B\uFF0C\u5728\u7236\u7C7B\u65B9\u6CD5\u4E2D <code>throw new Error()</code>\uFF0C\u5982\u679C\u5B50\u7C7B\u4E2D\u6CA1\u6709\u5B9E\u73B0\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u4F1A\u629B\u9519\uFF0C\u8FD9\u6837\u6765\u6A21\u62DF\u62BD\u8C61\u7C7B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* \u62BD\u8C61\u7C7B\uFF0CES6 class \u65B9\u5F0F */</span></span>
<span class="line"><span style="color:#A6ACCD;">class AbstractClass1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === AbstractClass1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    operate() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u62BD\u8C61\u7C7B\uFF0CES5 \u6784\u9020\u51FD\u6570\u65B9\u5F0F */</span></span>
<span class="line"><span style="color:#A6ACCD;">var AbstractClass2 = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (new.target === AbstractClass2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u62BD\u8C61\u65B9\u6CD5\uFF0C\u4F7F\u7528\u539F\u578B\u65B9\u5F0F\u6DFB\u52A0 */</span></span>
<span class="line"><span style="color:#A6ACCD;">AbstractClass2.prototype.operate = function(){ throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4E0B\u9762\u7528 JavaScript \u5C06\u4E0A\u9762\u4ECB\u7ECD\u7684\u996D\u5E97\u4F8B\u5B50\u5B9E\u73B0\u4E00\u4E0B\u3002</p><p>\u9996\u5148\u4F7F\u7528\u539F\u578B\u65B9\u5F0F\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* \u996D\u5E97\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">function Restaurant() {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Restaurant.orderDish = function(type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;\u9C7C\u9999\u8089\u4E1D&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new YuXiangRouSi()</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;\u5BAB\u4FDD\u9E21\u4E01&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new GongBaoJiDing()</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;\u7D2B\u83DC\u86CB\u6C64&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new ZiCaiDanTang()</span></span>
<span class="line"><span style="color:#A6ACCD;">        default:</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u672C\u5E97\u6CA1\u6709\u8FD9\u4E2A -\u3002-&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u83DC\u54C1\u62BD\u8C61\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">function Dish() { this.kind = &#39;\u83DC&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">Dish.prototype.eat = function() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u9C7C\u9999\u8089\u4E1D\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">function YuXiangRouSi() { this.type = &#39;\u9C7C\u9999\u8089\u4E1D&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">YuXiangRouSi.prototype = new Dish()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">YuXiangRouSi.prototype.eat = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.kind + &#39; - &#39; + this.type + &#39; \u771F\u9999~&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5BAB\u4FDD\u9E21\u4E01\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">function GongBaoJiDing() { this.type = &#39;\u5BAB\u4FDD\u9E21\u4E01&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">GongBaoJiDing.prototype = new Dish()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">GongBaoJiDing.prototype.eat = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.kind + &#39; - &#39; + this.type + &#39; \u8BA9\u6211\u60F3\u8D77\u4E86\u5916\u5A46\u505A\u7684\u83DC~&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const dish1 = Restaurant.orderDish(&#39;\u9C7C\u9999\u8089\u4E1D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">dish1.eat()</span></span>
<span class="line"><span style="color:#A6ACCD;">const dish2 = Restaurant.orderDish(&#39;\u7EA2\u70E7\u6392\u9AA8&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA: \u83DC - \u9C7C\u9999\u8089\u4E1D \u771F\u9999~</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA: Error \u672C\u5E97\u6CA1\u6709\u8FD9\u4E2A -\u3002-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>\u4F7F\u7528 class \u8BED\u6CD5\u6539\u5199\u4E00\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* \u996D\u5E97\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Restaurant {</span></span>
<span class="line"><span style="color:#A6ACCD;">    static orderDish(type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;\u9C7C\u9999\u8089\u4E1D&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new YuXiangRouSi()</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;\u5BAB\u4FDD\u9E21\u4E01&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new GongBaoJiDin()</span></span>
<span class="line"><span style="color:#A6ACCD;">            default:</span></span>
<span class="line"><span style="color:#A6ACCD;">                throw new Error(&#39;\u672C\u5E97\u6CA1\u6709\u8FD9\u4E2A -\u3002-&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u83DC\u54C1\u62BD\u8C61\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Dish {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === Dish) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.kind = &#39;\u83DC&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    eat() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u9C7C\u9999\u8089\u4E1D\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class YuXiangRouSi extends Dish {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;\u9C7C\u9999\u8089\u4E1D&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    eat() { console.log(this.kind + &#39; - &#39; + this.type + &#39; \u771F\u9999~&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5BAB\u4FDD\u9E21\u4E01\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class GongBaoJiDin extends Dish {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;\u5BAB\u4FDD\u9E21\u4E01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    eat() { console.log(this.kind + &#39; - &#39; + this.type + &#39; \u8BA9\u6211\u60F3\u8D77\u4E86\u5916\u5A46\u505A\u7684\u83DC~&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const dish0 = new Dish()  										// \u8F93\u51FA: Error \u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!</span></span>
<span class="line"><span style="color:#A6ACCD;">const dish1 = Restaurant.orderDish(&#39;\u9C7C\u9999\u8089\u4E1D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">dish1.eat()																		// \u8F93\u51FA: \u83DC - \u9C7C\u9999\u8089\u4E1D \u771F\u9999~</span></span>
<span class="line"><span style="color:#A6ACCD;">const dish2 = Restaurant.orderDish(&#39;\u7EA2\u70E7\u6392\u9AA8&#39;) // \u8F93\u51FA: Error \u672C\u5E97\u6CA1\u6709\u8FD9\u4E2A -\u3002-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u8FD9\u91CC\u7684 <code>Dish</code> \u7C7B\u5C31\u662F\u62BD\u8C61\u4EA7\u54C1\u7C7B\uFF0C\u7EE7\u627F\u8BE5\u7C7B\u7684\u5B50\u7C7B\u9700\u8981\u5B9E\u73B0\u5B83\u7684\u65B9\u6CD5 <code>eat</code>\u3002</p><p>\u4E0A\u9762\u7684\u5B9E\u73B0\u5C06\u4EA7\u54C1\u7684\u529F\u80FD\u7ED3\u6784\u62BD\u8C61\u51FA\u6765\u6210\u4E3A\u62BD\u8C61\u4EA7\u54C1\u7C7B\u3002\u4E8B\u5B9E\u4E0A\u6211\u4EEC\u8FD8\u53EF\u4EE5\u66F4\u8FDB\u4E00\u6B65\uFF0C\u5C06\u5DE5\u5382\u7C7B\u4E5F\u4F7F\u7528\u62BD\u8C61\u7C7B\u7EA6\u675F\u4E00\u4E0B\uFF0C\u4E5F\u5C31\u662F\u62BD\u8C61\u5DE5\u5382\u7C7B\uFF0C\u6BD4\u5982\u8FD9\u4E2A\u996D\u5E97\u53EF\u4EE5\u505A\u83DC\u548C\u6C64\uFF0C\u53E6\u4E00\u4E2A\u996D\u5E97\u4E5F\u53EF\u4EE5\u505A\u83DC\u548C\u6C64\uFF0C\u5B58\u5728\u5171\u540C\u7684\u529F\u80FD\u7ED3\u6784\uFF0C\u5C31\u53EF\u4EE5\u5C06\u5171\u540C\u7ED3\u6784\u4F5C\u4E3A\u62BD\u8C61\u7C7B\u62BD\u8C61\u51FA\u6765\uFF0C\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* \u996D\u5E97 \u62BD\u8C61\u7C7B\uFF0C\u996D\u5E97\u90FD\u53EF\u4EE5\u505A\u83DC\u548C\u6C64 */</span></span>
<span class="line"><span style="color:#A6ACCD;">class AbstractRestaurant {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === AbstractRestaurant)</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.signborad = &#39;\u996D\u5E97&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5\uFF1A\u521B\u5EFA\u83DC */</span></span>
<span class="line"><span style="color:#A6ACCD;">    createDish() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5\uFF1A\u521B\u5EFA\u6C64 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    createSoup() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5177\u4F53\u996D\u5E97\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Restaurant extends AbstractRestaurant {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() { super() }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    createDish(type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;\u9C7C\u9999\u8089\u4E1D&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new YuXiangRouSi()</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;\u5BAB\u4FDD\u9E21\u4E01&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new GongBaoJiDing()</span></span>
<span class="line"><span style="color:#A6ACCD;">            default:</span></span>
<span class="line"><span style="color:#A6ACCD;">                throw new Error(&#39;\u672C\u5E97\u6CA1\u8FD9\u4E2A\u83DC&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    createSoup(type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;\u7D2B\u83DC\u86CB\u6C64&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new ZiCaiDanTang()</span></span>
<span class="line"><span style="color:#A6ACCD;">            default:</span></span>
<span class="line"><span style="color:#A6ACCD;">                throw new Error(&#39;\u672C\u5E97\u6CA1\u8FD9\u4E2A\u6C64&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u83DC \u62BD\u8C61\u7C7B\uFF0C\u83DC\u90FD\u6709\u5403\u7684\u529F\u80FD eat */</span></span>
<span class="line"><span style="color:#A6ACCD;">class AbstractDish {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === AbstractDish) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.kind = &#39;\u83DC&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    eat() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u83DC \u9C7C\u9999\u8089\u4E1D\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class YuXiangRouSi extends AbstractDish {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;\u9C7C\u9999\u8089\u4E1D&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    eat() { console.log(this.kind + &#39; - &#39; + this.type + &#39; \u771F\u9999~&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u83DC \u5BAB\u4FDD\u9E21\u4E01\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class GongBaoJiDing extends AbstractDish {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;\u5BAB\u4FDD\u9E21\u4E01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    eat() { console.log(this.kind + &#39; - &#39; + this.type + &#39; \u8BA9\u6211\u60F3\u8D77\u4E86\u5916\u5A46\u505A\u7684\u83DC~&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u6C64 \u62BD\u8C61\u7C7B\uFF0C\u6C64\u90FD\u6709\u559D\u7684\u529F\u80FD drink */</span></span>
<span class="line"><span style="color:#A6ACCD;">class AbstractSoup {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === AbstractDish) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.kind = &#39;\u6C64&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    drink() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u6C64 \u7D2B\u83DC\u86CB\u6C64\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class ZiCaiDanTang extends AbstractSoup {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;\u7D2B\u83DC\u86CB\u6C64&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    drink() { console.log(this.kind + &#39; - &#39; + this.type + &#39; \u6211\u4ECE\u5C0F\u559D\u5230\u5927~&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const restaurant = new Restaurant()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const soup1 = restaurant.createSoup(&#39;\u7D2B\u83DC\u86CB\u6C64&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">soup1.drink()																		// \u8F93\u51FA: \u6C64 - \u7D2B\u83DC\u86CB\u6C64 \u6211\u4ECE\u5C0F\u559D\u5230\u5927~</span></span>
<span class="line"><span style="color:#A6ACCD;">const dish1 = restaurant.createDish(&#39;\u9C7C\u9999\u8089\u4E1D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">dish1.eat()																			// \u8F93\u51FA: \u83DC - \u9C7C\u9999\u8089\u4E1D \u771F\u9999~</span></span>
<span class="line"><span style="color:#A6ACCD;">const dish2 = restaurant.createDish(&#39;\u7EA2\u70E7\u6392\u9AA8&#39;)  // \u8F93\u51FA: Error \u672C\u5E97\u6CA1\u6709\u8FD9\u4E2A -\u3002-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><p>\u8FD9\u6837\u5982\u679C\u521B\u5EFA\u65B0\u7684\u996D\u5E97\uFF0C\u65B0\u7684\u996D\u5E97\u7EE7\u627F\u8FD9\u4E2A\u62BD\u8C61\u996D\u5E97\u7C7B\uFF0C\u90A3\u4E48\u4E5F\u8981\u5B9E\u73B0\u62BD\u8C61\u996D\u5E97\u7C7B\uFF0C\u8FD9\u6837\u5C31\u90FD\u5177\u6709\u62BD\u8C61\u996D\u5E97\u7C7B\u5236\u5B9A\u7684\u7ED3\u6784\u3002</p><h2 id="_3-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u901A\u7528\u5B9E\u73B0" tabindex="-1">3. \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u901A\u7528\u5B9E\u73B0 <a class="header-anchor" href="#_3-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u901A\u7528\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u63D0\u70BC\u4E00\u4E0B\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF0C\u996D\u5E97\u8FD8\u662F\u5DE5\u5382\uFF08Factory\uFF09\uFF0C\u83DC\u54C1\u79CD\u7C7B\u662F\u62BD\u8C61\u7C7B\uFF08AbstractFactory\uFF09\uFF0C\u800C\u5B9E\u73B0\u62BD\u8C61\u7C7B\u7684\u83DC\u54C1\u662F\u5177\u4F53\u7684\u4EA7\u54C1\uFF08Product\uFF09\uFF0C\u901A\u8FC7\u5DE5\u5382\u62FF\u5230\u5B9E\u73B0\u4E86\u4E0D\u540C\u62BD\u8C61\u7C7B\u7684\u4EA7\u54C1\uFF0C\u8FD9\u4E9B\u4EA7\u54C1\u53EF\u4EE5\u6839\u636E\u5B9E\u73B0\u7684\u62BD\u8C61\u7C7B\u88AB\u533A\u5206\u4E3A\u7C7B\u7C07\u3002\u4E3B\u8981\u6709\u4E0B\u9762\u51E0\u4E2A\u6982\u5FF5\uFF1A</p><ol><li><strong>Factory</strong> \uFF1A\u5DE5\u5382\uFF0C\u8D1F\u8D23\u8FD4\u56DE\u4EA7\u54C1\u5B9E\u4F8B\uFF1B</li><li><strong>AbstractFactory</strong> \uFF1A\u865A\u62DF\u5DE5\u5382\uFF0C\u5236\u5B9A\u5DE5\u5382\u5B9E\u4F8B\u7684\u7ED3\u6784\uFF1B</li><li><strong>Product</strong> \uFF1A\u4EA7\u54C1\uFF0C\u8BBF\u95EE\u8005\u4ECE\u5DE5\u5382\u4E2D\u62FF\u5230\u7684\u4EA7\u54C1\u5B9E\u4F8B\uFF0C\u5B9E\u73B0\u62BD\u8C61\u7C7B\uFF1B</li><li><strong>AbstractProduct</strong> \uFF1A\u4EA7\u54C1\u62BD\u8C61\u7C7B\uFF0C\u7531\u5177\u4F53\u4EA7\u54C1\u5B9E\u73B0\uFF0C\u5236\u5B9A\u4EA7\u54C1\u5B9E\u4F8B\u7684\u7ED3\u6784\uFF1B</li></ol><p>\u6982\u7565\u56FE\u5982\u4E0B\uFF1A</p><p><img src="`+e+`" alt="\u56FE\u7247\u63CF\u8FF0"><br> \u4E0B\u9762\u662F\u901A\u7528\u7684\u5B9E\u73B0\uFF0C\u539F\u578B\u65B9\u5F0F\u7565\u8FC7\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* \u5DE5\u5382 \u62BD\u8C61\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class AbstractFactory {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === AbstractFactory) </span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    createProduct1() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5177\u4F53\u996D\u5E97\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Factory extends AbstractFactory {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() { super() }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    createProduct1(type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;Product1&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new Product1()</span></span>
<span class="line"><span style="color:#A6ACCD;">            case &#39;Product2&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return new Product2()</span></span>
<span class="line"><span style="color:#A6ACCD;">            default:</span></span>
<span class="line"><span style="color:#A6ACCD;">                throw new Error(&#39;\u5F53\u524D\u6CA1\u6709\u8FD9\u4E2A\u4EA7\u54C1 -\u3002-&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u62BD\u8C61\u4EA7\u54C1\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">class AbstractProduct {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (new.target === AbstractProduct) </span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u62BD\u8C61\u7C7B\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.kind = &#39;\u62BD\u8C61\u4EA7\u54C1\u7C7B1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u62BD\u8C61\u65B9\u6CD5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    operate() { throw new Error(&#39;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u8C03\u7528!&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5177\u4F53\u4EA7\u54C1\u7C7B1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Product1 extends AbstractProduct {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;Product1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    operate() { console.log(this.kind + &#39; - &#39; + this.type) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5177\u4F53\u4EA7\u54C1\u7C7B2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Product2 extends AbstractProduct {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = &#39;Product2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    operate() { console.log(this.kind + &#39; - &#39; + this.type) }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const factory = new Factory()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const prod1 = factory.createProduct1(&#39;Product1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">prod1.operate()																		// \u8F93\u51FA: \u62BD\u8C61\u4EA7\u54C1\u7C7B1 - Product1</span></span>
<span class="line"><span style="color:#A6ACCD;">const prod2 = factory.createProduct1(&#39;Product3&#39;)	// \u8F93\u51FA: Error \u5F53\u524D\u6CA1\u6709\u8FD9\u4E2A\u4EA7\u54C1 -\u3002-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>\u5982\u679C\u5E0C\u671B\u589E\u52A0\u7B2C\u4E8C\u4E2A\u7C7B\u7C07\u7684\u4EA7\u54C1\uFF0C\u9664\u4E86\u9700\u8981\u6539\u4E00\u4E0B\u5BF9\u5E94\u5DE5\u5382\u7C7B\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u62BD\u8C61\u4EA7\u54C1\u7C7B\uFF0C\u5E76\u5728\u62BD\u8C61\u4EA7\u54C1\u7C7B\u57FA\u7840\u4E0A\u6269\u5C55\u65B0\u7684\u4EA7\u54C1\u3002</p><p>\u6211\u4EEC\u5728\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u4E00\u5B9A\u9700\u8981\u6BCF\u4E2A\u5DE5\u5382\u90FD\u7EE7\u627F\u62BD\u8C61\u5DE5\u5382\u7C7B\uFF0C\u6BD4\u5982\u53EA\u6709\u4E00\u4E2A\u5DE5\u5382\u7684\u8BDD\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5DE5\u5382\u6A21\u5F0F\uFF0C\u5728\u5B9E\u6218\u4E2D\u7075\u6D3B\u4F7F\u7528\u3002</p><h2 id="_4-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9" tabindex="-1">4. \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9 <a class="header-anchor" href="#_4-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a></h2><p>\u62BD\u8C61\u6A21\u5F0F\u7684\u4F18\u70B9\uFF1A\u62BD\u8C61\u4EA7\u54C1\u7C7B\u5C06\u4EA7\u54C1\u7684\u7ED3\u6784\u62BD\u8C61\u51FA\u6765\uFF0C\u8BBF\u95EE\u8005\u4E0D\u9700\u8981\u77E5\u9053\u4EA7\u54C1\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u53EA\u9700\u8981\u9762\u5411\u4EA7\u54C1\u7684\u7ED3\u6784\u7F16\u7A0B\u5373\u53EF\uFF0C<strong>\u4ECE\u4EA7\u54C1\u7684\u5177\u4F53\u5B9E\u73B0\u4E2D\u89E3\u8026</strong>\uFF1B</p><p>\u62BD\u8C61\u6A21\u5F0F\u7684\u7F3A\u70B9\uFF1A</p><ol><li><strong>\u6269\u5C55\u65B0\u7C7B\u7C07\u7684\u4EA7\u54C1\u7C7B\u6BD4\u8F83\u56F0\u96BE</strong>\uFF0C\u56E0\u4E3A\u9700\u8981\u521B\u5EFA\u65B0\u7684\u62BD\u8C61\u4EA7\u54C1\u7C7B\uFF0C\u5E76\u4E14\u8FD8\u8981\u4FEE\u6539\u5DE5\u5382\u7C7B\uFF0C\u8FDD\u53CD\u5F00\u95ED\u539F\u5219\uFF1B</li><li>\u5E26\u6765\u4E86<strong>\u7CFB\u7EDF\u590D\u6742\u5EA6</strong>\uFF0C\u589E\u52A0\u4E86\u65B0\u7684\u7C7B\uFF0C\u548C\u65B0\u7684\u7EE7\u627F\u5173\u7CFB\uFF1B</li></ol><h2 id="_5-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1">5. \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#_5-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E00\u7EC4\u5B9E\u4F8B\u90FD\u6709\u76F8\u540C\u7684\u7ED3\u6784\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u3002</p><h2 id="_6-\u5176\u4ED6\u76F8\u5173\u6A21\u5F0F" tabindex="-1">6. \u5176\u4ED6\u76F8\u5173\u6A21\u5F0F <a class="header-anchor" href="#_6-\u5176\u4ED6\u76F8\u5173\u6A21\u5F0F" aria-hidden="true">#</a></h2><h3 id="_6-1-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E0E\u5DE5\u5382\u6A21\u5F0F" tabindex="-1">6.1 \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E0E\u5DE5\u5382\u6A21\u5F0F <a class="header-anchor" href="#_6-1-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E0E\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a></h3><p>\u5DE5\u5382\u6A21\u5F0F\u548C\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u533A\u522B\uFF1A</p><ol><li><strong>\u5DE5\u5382\u6A21\u5F0F</strong> \u4E3B\u8981\u5173\u6CE8\u5355\u72EC\u7684\u4EA7\u54C1\u5B9E\u4F8B\u7684\u521B\u5EFA\uFF1B</li><li><strong>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</strong> \u4E3B\u8981\u5173\u6CE8\u4EA7\u54C1\u7C7B\u7C07\u5B9E\u4F8B\u7684\u521B\u5EFA\uFF0C\u5982\u679C\u4EA7\u54C1\u7C7B\u7C07\u53EA\u6709\u4E00\u4E2A\u4EA7\u54C1\uFF0C\u90A3\u4E48\u8FD9\u65F6\u7684\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u5C31\u9000\u5316\u4E3A\u5DE5\u5382\u6A21\u5F0F\u4E86\uFF1B</li></ol><p>\u6839\u636E\u573A\u666F\u7075\u6D3B\u4F7F\u7528\u5373\u53EF\u3002</p>`,45),o=[c];function t(i,b,A,C,u,y){return n(),a("div",null,o)}const d=s(r,[["render",t]]);export{m as __pageData,d as default};
