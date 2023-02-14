import{_ as s,o as n,c as a,a as e}from"./app.ee052c02.js";const A=JSON.parse('{"title":"\u4EE3\u7801\u89C4\u8303\u5DE5\u5177\u53CA\u80CC\u540E\u6280\u672F\u8BBE\u8BA1\uFF08\u4E0A\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u52A8\u5316\u5DE5\u5177\u5DE1\u793C","slug":"\u81EA\u52A8\u5316\u5DE5\u5177\u5DE1\u793C","link":"#\u81EA\u52A8\u5316\u5DE5\u5177\u5DE1\u793C","children":[{"level":3,"title":"prettier","slug":"prettier","link":"#prettier","children":[]},{"level":3,"title":"ESLint","slug":"eslint","link":"#eslint","children":[]},{"level":3,"title":"linter VS prettier","slug":"linter-vs-prettier","link":"#linter-vs-prettier","children":[]},{"level":3,"title":"husky \u548C lint-staged","slug":"husky-\u548C-lint-staged","link":"#husky-\u548C-lint-staged","children":[]}]},{"level":2,"title":"\u5206\u4EAB\u4EA4\u6D41","slug":"\u5206\u4EAB\u4EA4\u6D41","link":"#\u5206\u4EAB\u4EA4\u6D41","children":[]}],"relativePath":"advanced-core-knowledage-front-end/qian-duan-gong-cheng-hua/029-dai-ma-gui-fan-gong-ju-ji-bei-hou-ji-shu-she-ji-shang.md","lastUpdated":1676383400000}'),l={name:"advanced-core-knowledage-front-end/qian-duan-gong-cheng-hua/029-dai-ma-gui-fan-gong-ju-ji-bei-hou-ji-shu-she-ji-shang.md"},p=e(`<h1 id="\u4EE3\u7801\u89C4\u8303\u5DE5\u5177\u53CA\u80CC\u540E\u6280\u672F\u8BBE\u8BA1\uFF08\u4E0A\uFF09" tabindex="-1">\u4EE3\u7801\u89C4\u8303\u5DE5\u5177\u53CA\u80CC\u540E\u6280\u672F\u8BBE\u8BA1\uFF08\u4E0A\uFF09 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303\u5DE5\u5177\u53CA\u80CC\u540E\u6280\u672F\u8BBE\u8BA1\uFF08\u4E0A\uFF09" aria-hidden="true">#</a></h1><p>\u4E0D\u7BA1\u662F\u56E2\u961F\u7684\u6269\u5F20\u8FD8\u662F\u4E1A\u52A1\u7684\u53D1\u5C55\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u9879\u76EE\u4EE3\u7801\u91CF\u51FA\u73B0\u7206\u70B8\u5F0F\u589E\u957F\u3002\u4E3A\u4E86\u9632\u6B62\u201C\u91CE\u86EE\u751F\u957F\u201D\u73B0\u8C61\uFF0C\u6211\u4EEC\u9700\u8981\u6709\u4E00\u4E2A\u826F\u597D\u7684\u6280\u672F\u9009\u578B\u548C\u6210\u719F\u7684\u67B6\u6784\u505A\u652F\u6491\uFF0C\u4E5F\u9700\u8981\u56E2\u961F\u4E2D\u6BCF\u4E00\u4E2A\u5F00\u53D1\u8005\u90FD\u80FD\u7528\u5FC3\u7EF4\u62A4\u9879\u76EE\u3002\u5728\u6B64\u65B9\u5411\u4E0A\u9664\u4E86\u4EBA\u5DE5 code review \u4EE5\u5916\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5BF9\u4E8E\u4E00\u4E9B\u89C4\u8303\u5DE5\u5177\u5E76\u4E0D\u964C\u751F\u3002</p><p>\u4F5C\u4E3A\u4E00\u540D\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C <strong>\u5728\u4F7F\u7528\u73B0\u4EE3\u5316\u5DE5\u5177\u7684\u57FA\u7840\u4E0A\uFF0C\u5982\u4F55\u5C3D\u53EF\u80FD\u53D1\u6325\u5176\u80FD\u91CF\uFF1F\u5728\u5FC5\u8981\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u4F55\u5F00\u53D1\u9002\u5408\u81EA\u5DF1\u56E2\u961F\u9700\u6C42\u7684\u5DE5\u5177\uFF1F</strong> \u672C\u8282\u5C06\u56F4\u7ED5\u8FD9\u4E9B\u95EE\u9898\u5C55\u5F00\uFF0C\u6211\u4EEC\u91CD\u70B9\u5206\u6790\uFF1A</p><p><img src="https://images.gitbook.cn/725e5a90-4ec9-11e9-b0b8-a9c8a3696845" alt=""></p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u901A\u8FC7 2 \u8282\u5185\u5BB9\u6765\u5B66\u4E60\u8FD9\u4E2A\u4E3B\u9898\u3002</p><h2 id="\u81EA\u52A8\u5316\u5DE5\u5177\u5DE1\u793C" tabindex="-1">\u81EA\u52A8\u5316\u5DE5\u5177\u5DE1\u793C <a class="header-anchor" href="#\u81EA\u52A8\u5316\u5DE5\u5177\u5DE1\u793C" aria-hidden="true">#</a></h2><p>\u73B0\u4EE3\u524D\u7AEF\u5F00\u53D1\uFF0C\u201C\u6B66\u5668\u201D\u90FD\u5DF2\u7ECF\u975E\u5E38\u81EA\u52A8\u5316\u4E86\u3002\u4E0D\u540C\u5DE5\u5177\u5206\u5DE5\u4E0D\u540C\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5408\u7406\u7ED3\u5408\u5404\u79CD\u5DE5\u5177\uFF0C\u6253\u9020\u4E00\u6761\u5B8C\u5584\u7684\u81EA\u52A8\u5316\u6D41\u6C34\u7EBF\uFF0C\u4EE5\u9AD8\u6548\u7387\u3001\u4F4E\u6295\u5165\u7684\u65B9\u5F0F\uFF0C\u4E3A\u6211\u4EEC\u7684\u4EE3\u7801\u8D28\u91CF\u63D0\u4F9B\u6709\u6548\u4FDD\u969C\u3002</p><h3 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-hidden="true">#</a></h3><p>\u9996\u5148\u4ECE prettier \u8BF4\u8D77\uFF0C\u82F1\u6587\u5355\u8BCD prettier \u662F pretty \u7684\u6BD4\u8F83\u7EA7\uFF0Cpretty \u8BD1\u4E3A\u201C\u6F02\u4EAE\u3001\u7F8E\u5316\u201D\u3002\u987E\u540D\u601D\u4E49\uFF0Cprettier \u8FD9\u4E2A\u5DE5\u5177\u80FD\u591F\u7F8E\u5316\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u6216\u8005\u8BF4\u683C\u5F0F\u5316\u3001\u89C4\u8303\u5316\u4EE3\u7801\uFF0C\u4F7F\u5176\u66F4\u52A0\u5DE5\u6574\u3002\u5B83\u4E00\u822C\u4E0D\u4F1A\u68C0\u67E5\u6211\u4EEC\u4EE3\u7801\u5177\u4F53\u7684\u5199\u6CD5\uFF0C\u800C\u662F\u5728\u201C\u53EF\u8BFB\u6027\u201D\u4E0A\u505A\u6587\u7AE0\u3002\u76EE\u524D\u652F\u6301\u5305\u62EC JavaScript\u3001JSX\u3001Angular\u3001Vue\u3001Flow\u3001TypeScript\u3001CSS\uFF08Less\u3001SCSS\uFF09\u3001JSON \u7B49\u591A\u79CD\u8BED\u8A00\u3001\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3001\u8BED\u6CD5\u89C4\u8303\u6269\u5C55\u3002\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5B83\u80FD\u591F\u5C06\u539F\u59CB\u4EE3\u7801\u98CE\u683C\u79FB\u9664\uFF0C\u5E76\u66FF\u6362\u4E3A\u56E2\u961F\u7EDF\u4E00\u914D\u7F6E\u7684\u4EE3\u7801\u98CE\u683C\u3002\u867D\u7136\u51E0\u4E4E\u6240\u6709\u56E2\u961F\u90FD\u5728\u4F7F\u7528\u8FD9\u6B3E\u5DE5\u5177\uFF0C\u4E0D\u8FC7\u6211\u4EEC\u8FD8\u662F\u7B80\u5355\u5206\u6790\u4E00\u4E0B\u4F7F\u7528\u5B83\u7684\u539F\u56E0\u5427\uFF1A</p><ul><li>\u6784\u5EFA\u5E76\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C</li><li>\u5E2E\u52A9\u56E2\u961F\u65B0\u6210\u5458\u5FEB\u901F\u878D\u5165\u56E2\u961F</li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u5B8C\u5168\u805A\u7126\u4E1A\u52A1\u5F00\u53D1\uFF0C\u4E0D\u5FC5\u5728\u4EE3\u7801\u6574\u7406\u4E0A\u82B1\u8D39\u8FC7\u591A\u5FC3\u601D</li><li>\u65B9\u4FBF\u4F4E\u6210\u672C\u7075\u6D3B\u63A5\u5165\uFF0C\u5E76\u5FEB\u901F\u53D1\u6325\u4F5C\u7528</li><li>\u6E05\u7406\u5E76\u89C4\u8303\u5DF2\u6709\u4EE3\u7801</li><li>\u51CF\u5C11\u6F5C\u5728 Bug</li><li>\u4E30\u5BCC\u5F3A\u5927\u7684\u793E\u533A\u652F\u6301</li></ul><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4ECE\u96F6\u5F00\u59CB\u7684\u7B80\u5355 demo\uFF0C\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF08\u8BE5 demo \u5F15\u7528\u81EA\u7CFB\u5217\u6587\u7AE0 <a href="https://gist.github.com/adeelibr/3d71c39436fc0d9721330d0b66a5790c" target="_blank" rel="noreferrer">Prettier-Eslinst-Editor-Config- Article</a>\uFF09\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir prettier-demo &amp;&amp; cd prettier-demo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FDB\u884C\u9879\u76EE\u521D\u59CB\u5316\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn init -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add prettier --dev --exact</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728 package.json \u4E2D\u52A0\u5165 script\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;: &quot;prettier-demo&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;prettier&quot;: &quot;prettier --write src/index.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>prettier --write src/index.js \u610F\u601D\u662F\u8FD0\u884C prettier\uFF0C\u5E76\u5BF9 src/index.js \u6587\u4EF6\u8FDB\u884C\u5904\u7406\uFF1A--write \u6807\u8BC6\u544A\u8BC9 prettier \u8981\u628A\u683C\u5F0F\u5316\u597D\u7684\u5185\u5BB9\u4FDD\u5B58\u5230\u5F53\u524D\u6587\u4EF6\u4E2D\u3002</p><p>\u6211\u4EEC\u5728 ./src \u76EE\u5F55\u4E2D\u65B0\u5EFA index.js \u6587\u4EF6\uFF0C\u952E\u5165\u4E00\u4E9B\u683C\u5F0F\u7F3A\u5931\u7684\u4EE3\u7801\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">    let person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &quot;Yoda&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    designation: &#39;Jedi Master &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        function trainJedi (jediWarrion) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (jediWarrion.name === &#39;Yoda&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&#39;No need! already trained&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`Training \${jediWarrion.name} complete\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                trainJedi(person)</span></span>
<span class="line"><span style="color:#A6ACCD;">    trainJedi({ name: &#39;Adeel&#39;,  designation: &#39;padawan&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u540C\u65F6\u5728\u6839\u6587\u4EF6\u4E2D\u521B\u5EFA prettier.config.js \u6587\u4EF6\uFF0C\u6DFB\u52A0 prettier \u89C4\u5219\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    printWidth: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">    singleQuote: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    trailingComma: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bracketSpacing: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    jsxBracketSameLine: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tabWidth: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    semi: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>prettier \u8BFB\u53D6\u8FD9\u4E9B\u89C4\u5219 \uFF0C\u5E76\u6309\u7167\u4EE5\u4E0A\u89C4\u5219\u914D\u7F6E\u7F8E\u5316\u4EE3\u7801\u3002\u5BF9\u4E8E\u8FD9\u4E9B\u89C4\u5219\uFF0C\u6211\u4EEC\u770B\u5176\u547D\u540D\u4FBF\u80FD\u7406\u89E3\u5927\u6982\uFF0C\u66F4\u591A\u5185\u5BB9\u7559\u7ED9\u5927\u5BB6\u53BB\u5B98\u7F51\u5BFB\u627E\u3002</p><p>\u73B0\u5728\u8FD0\u884C\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn prettier</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4EE3\u7801\u5C31\u4F1A\u81EA\u52A8\u88AB\u683C\u5F0F\u5316\u4E86\u3002</p><p>\u5F53\u7136\uFF0Cprettier \u4E5F\u53EF\u4EE5\u4E0E\u7F16\u8F91\u5668\u7ED3\u5408\uFF0C\u5728\u5F00\u53D1\u8005\u4FDD\u5B58\u540E\u7ACB\u5373\u8FDB\u884C\u7F8E\u5316\uFF0C\u4E5F\u53EF\u4EE5\u96C6\u6210\u5230 CI \u73AF\u5883\u4E2D\uFF0C\u6216\u8005 git pre-commit \u7684 hook \u9636\u6BB5\u3002\u6BD4\u5982\u4F7F\u7528 <a href="https://www.npmjs.com/package/pretty-quick" target="_blank" rel="noreferrer">pretty-quick</a>\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add prettier pretty-quick husky --dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5E76\u5728 package.json \u4E2D\u914D\u7F6E\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;husky&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;hooks&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;pre-commit&quot;: &quot;pretty-quick --staged&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>husky \u4E2D\uFF0C\u5B9A\u4E49 pre-commit \u9636\u6BB5\uFF0C\u5BF9\u53D8\u5316\u7684\u6587\u4EF6\u8FD0\u884C prettier\uFF0C--staged \u53C2\u6570\u8868\u793A pre-commit \u6A21\u5F0F\uFF1A\u53EA\u5BF9 staged \u7684\u6587\u4EF6\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u4E86\u5B98\u65B9\u63A8\u8350\u7684 <a href="https://www.npmjs.com/package/pretty-quick" target="_blank" rel="noreferrer">pretty-quick</a> \u6765\u5B9E\u73B0 pre-commit \u9636\u6BB5\u7684\u7F8E\u5316\u3002\u8FD9\u53EA\u662F\u5B9E\u73B0\u65B9\u5F0F\u4E4B\u4E00\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 lint-staged \u6765\u5B9E\u73B0\uFF0C\u6211\u4EEC\u4F1A\u5728\u4E0B\u9762\u4ECB\u7ECD ESLint \u548C husky \u5F53\u4E2D\u4ECB\u7ECD\u3002 \u200B<br> \u901A\u8FC7 demo \u6211\u4EEC\u80FD\u770B\u51FA\uFF0Cprettier \u786E\u5B9E\u5F88\u7075\u6D3B\uFF0C\u4E14\u81EA\u52A8\u5316\u7A0B\u5EA6\u5F88\u9AD8\uFF0C\u63A5\u5165\u9879\u76EE\u4E5F\u5341\u5206\u65B9\u4FBF\u3002</p><h3 id="eslint" tabindex="-1">ESLint <a class="header-anchor" href="#eslint" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u6765\u770B\u4E00\u4E0B\u4EE5 ESLint \u4E3A\u4EE3\u8868\u7684 linter\u3002code linting \u8868\u793A\u57FA\u4E8E\u9759\u6001\u5206\u6790\u4EE3\u7801\u539F\u7406\uFF0C\u627E\u51FA\u4EE3\u7801\u53CD\u6A21\u5F0F\u7684\u8FD9\u8FC7\u7A0B\u3002\u591A\u6570\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709 linter\uFF0C\u5B83\u4EEC\u5F80\u5F80\u88AB\u96C6\u6210\u5728\u7F16\u8BD1\u9636\u6BB5\uFF0C\u5B8C\u6210 coding linting \u7684\u4EFB\u52A1\u3002</p><p>\u5BF9\u4E8E JavaScript \u8FD9\u79CD\u52A8\u6001\u3001\u677E\u7C7B\u578B\u7684\u8BED\u8A00\u6765\u8BF4\uFF0C\u5F00\u53D1\u8005\u66F4\u5BB9\u6613\u72AF\u9519\u3002\u7531\u4E8E JavaScript \u4E0D\u5177\u5907\u5148\u5929\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u5F80\u5F80\u5728\u8FD0\u884C\u65F6\u66B4\u9732\u9519\u8BEF\uFF0C\u800C linter\uFF0C\u5C24\u5176\u6700\u5177\u4EE3\u8868\u6027\u7684 ESLint \u7684\u51FA\u73B0\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u5728\u6267\u884C\u524D\u53D1\u73B0\u4EE3\u7801\u9519\u8BEF\u6216\u4E0D\u5408\u7406\u7684\u5199\u6CD5\u3002</p><p>ESLint \u6700\u91CD\u8981\u7684\u51E0\u70B9\u54F2\u5B66\u601D\u60F3\uFF1A</p><ul><li>\u6240\u6709\u89C4\u5219\u90FD\u63D2\u4EF6\u5316</li><li>\u6240\u6709\u89C4\u5219\u90FD\u53EF\u63D2\u62D4\uFF08\u968F\u65F6\u5F00\u5173\uFF09</li><li>\u6240\u6709\u8BBE\u8BA1\u90FD\u900F\u660E\u5316</li><li>\u4F7F\u7528 espree \u8FDB\u884C JavaScript \u89E3\u6790</li><li>\u4F7F\u7528 AST \u5206\u6790\u8BED\u6CD5</li></ul><p>\u6700\u540E\u4E24\u70B9\u6211\u4EEC\u5C06\u5728\u300C\u5DE5\u5177\u80CC\u540E\u7684\u6280\u672F\u539F\u7406\u548C\u8BBE\u8BA1\u300D\u4E00\u5C0F\u8282\u8FDB\u884C\u5206\u6790\u3002\u4E0B\u9762\u6211\u4EEC\u7B80\u5355\u914D\u7F6E\u4E00\u4E2A ESLint \u89C4\u5219\uFF1A</p><p>\u521D\u59CB\u5316\u9879\u76EE\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn init -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add eslint --dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5E76\u6267\u884C\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx eslint --init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5BF9\u4EFB\u610F\u6587\u4EF6\u8FDB\u884C lint\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">eslint XXX.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5F53\u7136\uFF0C\u60F3\u8981\u987A\u5229\u6267\u884C eslint\uFF0C\u8FD8\u9700\u8981\u5B89\u88C5\u5E94\u7528\u89C4\u5219\u63D2\u4EF6\u3002</p><p>\u90A3\u4E48\u5982\u4F55\u58F0\u660E\u5E76\u5E94\u7528\u89C4\u5219\u5462\uFF1F\u5728\u6839\u76EE\u5F55\u4E2D\u6253\u5F00 .eslintrc \u914D\u7F6E\u6587\u4EF6\uFF0C\u6211\u4EEC\u5728\u8BE5\u6587\u4EF6\u4E2D\u52A0\u5165\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;semi&quot;: [&quot;error&quot;, &quot;always&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;quote&quot;: [&quot;error&quot;, &quot;double&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>semi\u3001quote \u5C31\u662F ESLint \u89C4\u5219\u7684\u540D\u79F0\uFF0C\u5176\u503C\u5BF9\u5E94\u7684\u6570\u7EC4\u7B2C\u4E00\u9879\u53EF\u4EE5\u4E3A\uFF1Aoff/0\u3001warn/1\u3001error/2\uFF0C\u5206\u522B\u8868\u793A\u5173\u95ED\u89C4\u5219\u3001\u4EE5 warning \u5F62\u5F0F\u6253\u5F00\u89C4\u5219\u3001\u4EE5 error \u5F62\u5F0F\u6253\u5F00\u89C4\u5219\u3002</p><ul><li>off/0\uFF1A\u5173\u95ED\u89C4\u5219</li><li>warn/1\uFF1A\u4EE5 warning \u5F62\u5F0F\u6253\u5F00\u89C4\u5219</li><li>error/2\uFF1A\u4EE5 error \u5F62\u5F0F\u6253\u5F00\u89C4\u5219</li></ul><p>\u540C\u6837\u6211\u4EEC\u8FD8\u4F1A\u5728 .eslintrc \u6587\u4EF6\u4E2D\u53D1\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;extends&quot;: &quot;eslint:recommended&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u884C\u8868\u793A ESLint \u9ED8\u8BA4\u7684\u89C4\u5219\u90FD\u5C06\u4F1A\u88AB\u6253\u5F00\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u9009\u53D6\u5176\u4ED6\u89C4\u5219\u96C6\u5408\uFF0C\u6BD4\u8F83\u51FA\u540D\u7684\u6709\uFF1A</p><ul><li><a href="https://google.github.io/styleguide/jsguide.html" target="_blank" rel="noreferrer">Google JavaScript Style Guide</a></li><li><a href="https://github.com/airbnb/javascript#table-of-contents" target="_blank" rel="noreferrer">Airbnb JavaScript Style Guide</a></li></ul><p>\u6211\u4EEC\u7EE7\u7EED\u62C6\u5206 .eslintrc \u6587\u4EF6\uFF0C\u5176\u5B9E\u5B83\u4E3B\u8981\u7531\u516D\u4E2A\u5B57\u6BB5\u7EC4\u6210\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = { </span></span>
<span class="line"><span style="color:#A6ACCD;">   env: {}, </span></span>
<span class="line"><span style="color:#A6ACCD;">   extends: {}, </span></span>
<span class="line"><span style="color:#A6ACCD;">   plugins: {}, </span></span>
<span class="line"><span style="color:#A6ACCD;">   parser: {}, </span></span>
<span class="line"><span style="color:#A6ACCD;">   parserOptions: {}, </span></span>
<span class="line"><span style="color:#A6ACCD;">   rules: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>env\uFF1A\u8868\u793A\u6307\u5B9A\u60F3\u542F\u7528\u7684\u73AF\u5883</li><li>extends\uFF1A\u6307\u5B9A\u989D\u5916\u914D\u7F6E\u7684\u9009\u9879\uFF0C\u5982 [&#39;airbnb&#39;] \u8868\u793A\u4F7F\u7528 Airbnb \u7684 linting \u89C4\u5219</li><li>plugins\uFF1A\u8BBE\u7F6E\u89C4\u5219\u63D2\u4EF6</li><li>parser\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B ESLint \u4F7F\u7528 espree \u8FDB\u884C\u89E3\u6790</li><li>parserOptions\uFF1A\u5982\u679C\u5C06\u9ED8\u8BA4\u89E3\u6790\u5668\u66F4\u6539\uFF0C\u9700\u8981\u5236\u5B9A parserOptions</li><li>rules\uFF1A\u5B9A\u4E49\u62D3\u5C55\u5E76\u901A\u8FC7\u63D2\u4EF6\u6DFB\u52A0\u7684\u6240\u6709\u89C4\u5219</li></ul><p>\u6CE8\u610F\uFF0C\u4E0A\u6587\u4E2D .eslintrc \u6587\u4EF6\u6211\u4EEC\u91C7\u7528\u4E86 .eslintrc.js \u7684 JavaScript \u6587\u4EF6\u683C\u5F0F\uFF0C\u6B64\u5916\u8FD8\u53EF\u4EE5\u91C7\u7528 .yaml\u3001.json\u3001yml \u7B49\u683C\u5F0F\u3002\u5982\u679C\u9879\u76EE\u4E2D\u542B\u6709\u591A\u79CD\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\uFF0C\u4F18\u5148\u7EA7\u987A\u5E8F\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">.eslintrc.js</span></span>
<span class="line"><span style="color:#A6ACCD;">.eslintrc.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">.eslintrc.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">.eslintrc.json</span></span>
<span class="line"><span style="color:#A6ACCD;">.eslintrc</span></span>
<span class="line"><span style="color:#A6ACCD;">package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6700\u7EC8\uFF0C\u6211\u4EEC\u5728 package.json \u4E2D\u53EF\u4EE5\u6DFB\u52A0 script\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint&quot;: &quot;eslint --debug src/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint:write&quot;: &quot;eslint --debug src/ --fix&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>lint \u8FD9\u4E2A\u547D\u4EE4\u5C06\u904D\u5386\u6240\u6709\u6587\u4EF6\uFF0C\u5E76\u5728\u6BCF\u4E2A\u627E\u5230\u9519\u8BEF\u7684\u6587\u4EF6\u4E2D\u63D0\u4F9B\u8BE6\u7EC6\u65E5\u5FD7\uFF0C\u4F46\u9700\u8981\u5F00\u53D1\u8005\u624B\u52A8\u6253\u5F00\u8FD9\u4E9B\u6587\u4EF6\u5E76\u66F4\u6B63\u9519\u8BEF\u3002</li><li>lint:write \u4E0E\u4E0A\u7C7B\u4F3C\uFF0C\u4F46\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u81EA\u52A8\u7EA0\u6B63\u9519\u8BEF\u3002</li></ul><h3 id="linter-vs-prettier" tabindex="-1">linter VS prettier <a class="header-anchor" href="#linter-vs-prettier" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u5BF9\u6BD4\u4EE5 ESLint \u4E3A\u4EE3\u8868\u7684 linter \u548C prettier \u5462\uFF0C\u5B83\u4EEC\u5230\u5E95\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F\u5C31\u50CF\u5F00\u7BC7\u6240\u63D0\u5230\u7684\u90A3\u6837\uFF0C\u5B83\u4EEC\u89E3\u51B3\u4E0D\u540C\u7684\u95EE\u9898\uFF0C\u5B9A\u4F4D\u4E0D\u540C\uFF0C\u4F46\u662F\u53C8\u53EF\u4EE5\u76F8\u8F85\u76F8\u6210\u3002</p><p>\u6240\u6709\u7684 linter \u7C7B\u4F3C ESLint\uFF0C\u5176\u89C4\u5219\u90FD\u53EF\u4EE5\u5212\u5206\u4E3A\u4E24\u7C7B\u3002</p><ul><li>\u683C\u5F0F\u5316\u89C4\u5219\uFF08formatting rules\uFF09</li></ul><p>\u8FD9\u7C7B\u201C\u683C\u5F0F\u5316\u89C4\u5219\u201C\u5178\u578B\u7684\u6709 max-len\u3001no-mixed-spaces-and-tabs\u3001keyword-spacing\u3001comma- style\uFF0C\u5B83\u4EEC\u201C\u9650\u5236\u4E00\u884C\u7684\u6700\u5927\u957F\u5EA6\u201D\u3001\u201C\u7981\u6B62\u4F7F\u7528\u7A7A\u683C\u548C tab \u6DF7\u5408\u7F29\u8FDB\u201D\u7B49\u4EE3\u7801\u683C\u5F0F\u65B9\u9762\u7684\u89C4\u8303\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5373\u4FBF\u5F00\u53D1\u8005\u5199\u51FA\u7684\u4EE3\u7801\u8FDD\u53CD\u4E86\u8FD9\u7C7B\u89C4\u5219\uFF0C\u5982\u679C\u5728 lint \u9636\u6BB5\u524D\uFF0C\u5148\u7ECF\u8FC7 prettier \u5904\u7406\uFF0C\u8FD9\u4E9B\u95EE\u9898\u4F1A\u5148\u5728 prettier \u9636\u6BB5\u88AB\u7EA0\u6B63\uFF0C\u56E0\u6B64 linter \u4E0D\u4F1A\u629B\u51FA\u63D0\u9192\uFF0C\u975E\u5E38\u7701\u5FC3\uFF0C\u8FD9\u5C5E\u4E8E linter \u548C prettier \u91CD\u53E0\u7684\u5730\u65B9\u3002</p><ul><li>\u4EE3\u7801\u8D28\u91CF\u89C4\u5219\uFF08code quality rules\uFF09</li></ul><p>\u8FD9\u7C7B\u201C\u4EE3\u7801\u8D28\u91CF\u89C4\u5219\u201D\u7C7B\u4F3C no-unused-vars\u3001no-extra-bind\u3001no-implicit-globals\u3001prefer-promise- reject-errors\uFF0C\u5B83\u4EEC\u9650\u5236\u201C\u58F0\u660E\u672A\u4F7F\u7528\u53D8\u91CF\u201D\uFF0C\u201C\u4E0D\u5FC5\u8981\u7684\u51FD\u6570\u7ED1\u5B9A\u201D \u7B49\u4EE3\u7801\u5199\u6CD5\u89C4\u8303\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0Cprettier \u5BF9\u8FD9\u4E9B\u89C4\u5219\u65E0\u80FD\u4E3A\u529B\u3002\u800C\u8FD9\u4E9B\u89C4\u5219\u5BF9\u4E8E\u4EE3\u7801\u8D28\u91CF\u548C\u5F3A\u5065\u6027\u81F3\u5173\u91CD\u8981\uFF0C\u8FD8\u662F\u9700\u8981 linter \u6765\u4FDD\u969C\u7684\u3002</p><p>\u5982\u540C prettier\uFF0CESLint \u4E5F\u53EF\u4EE5\u96C6\u6210\u5230\u7F16\u8F91\u5668\u6216\u8005 git pre-commit \u9636\u6BB5\u3002\u524D\u6587\u5DF2\u7ECF\u6F14\u793A\u8FC7\u4E86 prettier \u642D\u914D husky\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E0B husky \u5230\u5E95\u662F\u4EC0\u4E48\u3002</p><h3 id="husky-\u548C-lint-staged" tabindex="-1">husky \u548C lint-staged <a class="header-anchor" href="#husky-\u548C-lint-staged" aria-hidden="true">#</a></h3><p>\u5176\u5B9E\uFF0Chusky \u5C31\u662F git \u7684\u4E00\u4E2A\u94A9\u5B50\uFF0C\u5728 git \u8FDB\u884C\u5230\u67D0\u4E00\u65F6\u6BB5\u65F6\uFF0C\u53EF\u4EE5\u4EA4\u7ED9\u5F00\u53D1\u8005\u5B8C\u6210\u67D0\u4E9B\u7279\u5B9A\u7684\u64CD\u4F5C\u3002\u5B89\u88C5 husky\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add --dev husky</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5728 package.json \u6587\u4EF6\u4E2D\u6DFB\u52A0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;husky&quot;: {    </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;hooks&quot;: {      </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;pre-commit&quot;: &quot;YOUR_SCRIPT&quot;, </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;pre-push&quot;: &quot;YOUR_SCRIPT&quot;   </span></span>
<span class="line"><span style="color:#A6ACCD;">    }  </span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u6837\u6BCF\u6B21\u63D0\u4EA4\uFF08commit \u9636\u6BB5\uFF09\u6216\u8005\u63A8\u9001\uFF08push \u9636\u6BB5\uFF09\u4EE3\u7801\u65F6\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C\u76F8\u5173 npm \u811A\u672C\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u6574\u4E2A\u9879\u76EE\u4E0A\u8FD0\u884C lint \u4F1A\u5F88\u6162\uFF0C\u6211\u4EEC\u4E00\u822C\u53EA\u60F3\u5BF9\u66F4\u6539\u7684\u6587\u4EF6\u8FDB\u884C\u68C0\u67E5\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u4F7F\u7528\u5230 lint-staged\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add --dev lint-staged</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5728 package.json \u6DFB\u52A0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;lint-staged&quot;: {    </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;*.(js|jsx)&quot;: [&quot;npm run lint:write&quot;, &quot;git add&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6700\u7EC8\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint&quot;: &quot;eslint --debug src/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint:write&quot;: &quot;eslint --debug src/ --fix&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;prettier&quot;: &quot;prettier --write src/**/*.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;husky&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;hooks&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;pre-commit&quot;: &quot;lint-staged&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;*.(js|jsx)&quot;: [&quot;npm run lint:write&quot;, &quot;npm run prettier&quot;, &quot;git add&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5B83\u8868\u793A\u5728 pre-commit \u9636\u6BB5\u5BF9\u4E8E js \u6216\u8005 jsx \u540E\u7F00\u4E14\u4FEE\u6539\u7684\u6587\u4EF6\u6267\u884C ESLint \u548C prettier \u64CD\u4F5C\uFF0C\u901A\u8FC7\u4E4B\u540E\u518D\u8FDB\u884C git add \u6DFB\u52A0\u5230\u6682\u5B58\u533A\u3002</p><p>\u4FD7\u8BDD\u8BF4\u201C\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u201D\uFF0C\u672C\u8282\u8BFE\u6211\u4EEC\u5BF9\u5E38\u7528\u5DE5\u5177\u8FDB\u884C\u4E86\u201C\u5DE1\u793C\u201D\uFF0C\u8BF7\u8BFB\u8005\u4EEC\u4EB2\u81EA\u52A8\u624B\u5B9E\u8DF5\uFF0C\u4E86\u89E3\u5176\u4E2D\u5965\u79D8\u3002</p><h2 id="\u5206\u4EAB\u4EA4\u6D41" tabindex="-1">\u5206\u4EAB\u4EA4\u6D41 <a class="header-anchor" href="#\u5206\u4EAB\u4EA4\u6D41" aria-hidden="true">#</a></h2><p>\u8BF7\u5927\u5BB6\u7559\u8A00\u5206\u4EAB\u300C\u4EE3\u7801\u89C4\u8303\u300D\u76F8\u5173\u7684\u4E2A\u4EBA\u7ECF\u9A8C\u5FC3\u5F97\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9605\u8BFB\u5B8C\u4E0B\u4E00\u8282\u5168\u90E8\u5B8C\u6210\u8FD9\u4E2A\u4E3B\u9898\u4E4B\u540E\u518D\u6765\u603B\u7ED3\u3002\u9605\u8BFB\u6587\u7AE0\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u7591\u95EE\u968F\u65F6\u53EF\u4EE5\u8DDF\u5176\u4ED6\u5C0F\u4F19\u4F34\u8BA8\u8BBA\uFF0C\u6216\u8005\u76F4\u63A5\u5411\u4F5C\u8005 LucasHC \u63D0\u95EE\uFF08\u4F5C\u8005\u770B\u5230\u540E\u62BD\u7A7A\u89E3\u7B54\uFF09\u3002 <strong>\u4F60\u7684\u5206\u4EAB\u4E0D\u4EC5\u5E2E\u52A9\u4ED6\u4EBA\uFF0C\u66F4\u4F1A\u63D0\u5347\u81EA\u5DF1\u3002</strong></p><p>\u540C\u65F6\uFF0C\u6B22\u8FCE\u8BF4\u8BF4\u81EA\u5DF1\u6700\u60F3\u4E86\u89E3\u7684\u4E3B\u9898\uFF0C\u8BFE\u7A0B\u5185\u5BB9\u4F1A\u6839\u636E\u5927\u5BB6\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\u8FED\u4EE3\u548C\u5B8C\u5584\u3002</p><p>\u6B64\u5916\uFF0C\u6211\u4EEC\u4E3A\u672C\u8BFE\u7A0B\u4ED8\u8D39\u8BFB\u8005\u521B\u5EFA\u4E86\u300A\u524D\u7AEF\u5F00\u53D1\u6838\u5FC3\u77E5\u8BC6\u8FDB\u9636\u300B\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u4EE5\u65B9\u4FBF\u66F4\u6709\u9488\u5BF9\u6027\u5730\u8BA8\u8BBA\u8BFE\u7A0B\u76F8\u5173\u95EE\u9898\u3002\uFF08\u5165\u7FA4\u8BF7\u5230\u7B2C1-2\u8BFE\u672B\u5C3E\u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u82E5\u5931\u6548\u8BF7\u52A0 GitChat \u5C0F\u52A9\u624B\u4F3D\u5229\u7565\u7684\u5FAE\u4FE1\uFF0CID \u4E3A GitChatty6\uFF0C\u6CE8\u660E\u300C\u524D\u7AEF\u6838\u5FC3\u300D\u3002\uFF09</p>`,89),r=[p];function t(i,o,c,u,b,d){return n(),a("div",null,r)}const m=s(l,[["render",t]]);export{A as __pageData,m as default};
