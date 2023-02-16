import{_ as s,o as n,c as a,a as e}from"./app.b476fd3b.js";const m=JSON.parse('{"title":"ESLint \u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u63D2\u4EF6","slug":"\u5B89\u88C5\u63D2\u4EF6","link":"#\u5B89\u88C5\u63D2\u4EF6","children":[]},{"level":2,"title":"Vue3.x \u63A8\u8350\u914D\u7F6E","slug":"vue3-x-\u63A8\u8350\u914D\u7F6E","link":"#vue3-x-\u63A8\u8350\u914D\u7F6E","children":[]},{"level":2,"title":"Vue2.x \u63A8\u8350\u914D\u7F6E","slug":"vue2-x-\u63A8\u8350\u914D\u7F6E","link":"#vue2-x-\u63A8\u8350\u914D\u7F6E","children":[]},{"level":2,"title":"Prettier\u914D\u7F6E","slug":"prettier\u914D\u7F6E","link":"#prettier\u914D\u7F6E","children":[]}],"relativePath":"front-spec/eslint/index.md","lastUpdated":1676558697000}'),l={name:"front-spec/eslint/index.md"},p=e(`<h1 id="eslint-\u914D\u7F6E" tabindex="-1">ESLint \u914D\u7F6E <a class="header-anchor" href="#eslint-\u914D\u7F6E" aria-hidden="true">#</a></h1><p><a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint\u82F1\u6587\u5B98\u7F51open in new window</a><a href="https://eslint.bootcss.com/" target="_blank" rel="noreferrer">ESLint\u4E2D\u6587\u5B98\u7F51open in new window</a></p><h4 id="eslint\u3001prettier\u3001vetur\u3001volar\u7684\u7B80\u8FF0\uFF1A" tabindex="-1">eslint\u3001prettier\u3001vetur\u3001volar\u7684\u7B80\u8FF0\uFF1A <a class="header-anchor" href="#eslint\u3001prettier\u3001vetur\u3001volar\u7684\u7B80\u8FF0\uFF1A" aria-hidden="true">#</a></h4><p>(vue2\u548Cvue3\u7684\u914D\u7F6E\u8FD8\u6709\u5F85\u7EE7\u7EED\u4F18\u5316\u8C03\u6574)</p><ul><li><code>ESLint</code> \u4E3B\u8981\u8D1F\u8D23: \u8D28\u91CF\u68C0\u67E5(\u4F8B\u5982\u4F7F\u7528\u4E86\u67D0\u4E2A\u53D8\u91CF\u5374\u5FD8\u8BB0\u4E86\u5B9A\u4E49)\u3001\u98CE\u683C\u68C0\u67E5 <a href="https://eslint.bootcss.com/docs/user-guide/configuring" target="_blank" rel="noreferrer">\u67E5\u770B\u5B98\u7F51open in new window</a></li><li><code>Prettier</code>\u4E3B\u8981\u8D1F\u8D23: \u98CE\u683C\u68C0\u67E5\u548C\u683C\u5F0F\u5316, \u6CA1\u6709\u8D28\u91CF\u68C0\u67E5 <a href="https://prettier.io/docs/en/index.html" target="_blank" rel="noreferrer">\u67E5\u770B\u5B98\u7F51open in new window</a></li><li><code>vetur</code> \u4E3B\u8981\u8D1F\u8D23\uFF1A\u652F\u6301vue2.x\u7248\u672C\u8BED\u6CD5\u9AD8\u4EAE, \u4EE3\u7801\u7247\u6BB5, \u8D28\u91CF\u63D0\u793A&amp;\u9519\u8BEF\u3001\u667A\u80FD\u63D0\u793A\uFF0C\u4E5F\u652F\u6301\u683C\u5F0F\u5316\u3001\u683C\u5F0F\u5316/\u98CE\u683C\uFF08\u53EF\u914D\u7F6E\u4E3Aprettier\uFF09</li><li><code>volar</code> \u4E3B\u8981\u8D1F\u8D23\uFF1A\u652F\u6301vue3.x\u7248\u672C\u8BED\u6CD5\u9AD8\u4EAE, \u4EE3\u7801\u7247\u6BB5, \u8D28\u91CF\u63D0\u793A&amp;\u9519\u8BEF\u3001\u667A\u80FD\u63D0\u793A\uFF0C\u4E5F\u652F\u6301\u683C\u5F0F\u5316\u3001\u683C\u5F0F\u5316/\u98CE\u683C\uFF08\u53EF\u914D\u7F6E\u4E3Aprettier\uFF09</li></ul><p>vetur\u548Cvolar\u7684\u4E3B\u8981\u4F5C\u7528\u8FD8\u662F\u5BF9.vue\u6587\u4EF6\u7684\u8BED\u6CD5\u9AD8\u4EAE\u3001\u667A\u80FD\u63D0\u793A\u3001\u8D28\u91CF\u68C0\u6D4B\u3002</p><hr><p><strong>ESLint\u914D\u7F6E\u8BF4\u660E\uFF1A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//.eslintrc.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  parser: &quot;vue-eslint-parser&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &#39;plugin:vue/recommended&#39;,  //vue2\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:vue/vue3-recommended&#39;, //vue3\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &#39;plugin:@typescript-eslint/recommended&#39;, //\u6709ts\u5219\u9700\u8981\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:prettier/recommended&#39;, //\u914D\u7F6Eprettier\uFF0C\u6CE8\u610F\uFF0C\u6B64\u914D\u7F6E\u8981\u653E\u7F6E\u6700\u540E</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>extends</code>\u5C5E\u6027\u914D\u7F6E</p><ul><li>\u5171\u4EAB\u914D\u7F6E\u5305 \u5C5E\u6027\u503C\u53EF\u4EE5\u7701\u7565\u5305\u540D\u7684\u524D\u7F00 eslint-config-* extends: standard //\u8868\u793A\u4F7F\u7528\u529F\u80FD\u7684\u662F eslint-config-standard \u5305\u7684\u914D\u7F6E</li><li>\u63D2\u4EF6\u914D\u7F6E \u5C5E\u6027\u503C\u53EF\u4EE5\u7701\u7565\u5305\u540D\u7684\u524D\u7F00 eslint-plugin-* extends:[&quot;plugin:vue/recommended&quot;]</li></ul><h2 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1">\u5B89\u88C5\u63D2\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A eslint \u548C prettier \u7684\u683C\u5F0F\u5316\u5B58\u5728\u51B2\u7A81\u3002\u6240\u4EE5\u9700\u8981\u5B89\u88C5\u5982\u4E0B\u7EC4\u4EF6\uFF1A</p><ul><li><code>eslint-config-prettier</code> \u7981\u7528\u4E00\u4E9B eslint \u548C prettier \u51B2\u7A81\u7684\u89C4\u5219\u3002 \u5177\u4F53\u53EF\u901A\u8FC7node_modules\u4E0B\u7684npm\u67E5\u770B\u3002</li><li><code>eslint-plugin-prettier</code> \u8C03\u7528 prettier \u683C\u5F0F\u5316\u4EE3\u7801\uFF0C\u7136\u540E\u4E0E\u683C\u5F0F\u5316\u524D\u5BF9\u6BD4\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u8FD9\u4E2A\u5730\u65B9\u5C31\u4F1A\u88AB prettier \u8FDB\u884C\u6807\u8BB0\u3002</li></ul><p><strong>\u4F7F\u7528 ESLint \u4E0E eslint-plugin-prettier \u7684\u7ED3\u679C\u662F\u6700\u7EC8\u5F97\u5230\u7684\u4EE3\u7801\u662F\u5145\u5206\u5C0A\u91CDPrettier\u7684\u7ED3\u679C</strong></p><h4 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h4><p><a href="https://www.cnblogs.com/mspeer/p/12055962.html" target="_blank" rel="noreferrer">vscode, eslint, prettier, vetur\u51B2\u7A81\u53CA\u89E3\u51B3open in new window</a></p><h2 id="vue3-x-\u63A8\u8350\u914D\u7F6E" tabindex="-1">Vue3.x \u63A8\u8350\u914D\u7F6E <a class="header-anchor" href="#vue3-x-\u63A8\u8350\u914D\u7F6E" aria-hidden="true">#</a></h2><p><strong>\u63A8\u8350\u4F7F\u7528 eslint + prettier + volar \u4E09\u4E2A vscode \u63D2\u4EF6</strong><br><strong>.eslintrc.js</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//.eslintrc.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  parser: &quot;vue-eslint-parser&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">     // &#39;plugin:vue/recommended&#39;,  //vue2\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:vue/vue3-recommended&#39;, //vue3\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &#39;plugin:@typescript-eslint/recommended&#39;, //\u6709ts\u5219\u9700\u8981\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:prettier/recommended&#39;, //\u914D\u7F6Eprettier\uFF0C\u6CE8\u610F\uFF0C\u6B64\u914D\u7F6E\u8981\u653E\u7F6E\u6700\u540E</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* \u4F18\u5148\u7EA7\u4F4E\u4E8Eparser\u5C5E\u6027\u914D\u7F6E\u7684\u8BED\u6CD5\u89E3\u6790\u5668 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  parserOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    parser: &quot;@typescript-eslint/parser&quot;, //\u82E5\u5B58\u5728ts\uFF0C\u5219\u9700\u8981\u914D\u7F6E\u6B64\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaVersion: &#39;latest&#39;, //\u9ED8\u8BA4latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourceType: &quot;module&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ecmaFeatures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   jsx: true //\u542F\u7528JSX</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;off&quot; -\u5173\u95ED\u89C4\u5219,&quot;warn&quot; - \u5F00\u542F\u89C4\u5219, \u4F7F\u7528\u8B66\u544A \u7A0B\u5E8F\u4E0D\u4F1A\u9000\u51FA,&quot;error&quot; - \u5F00\u542F\u89C4\u5219, \u4F7F\u7528\u9519\u8BEF \u7A0B\u5E8F\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;prettier/prettier&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;error&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        singleQuote: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u9ED8\u8BA4\u90FD\u662Fbabel\u7684parser\uFF0C\u56E0\u4E3Aprettier\u548Cvetur\u68C0\u67E5\u51B2\u7A81\uFF0C\u6240\u4EE5\u914D\u7F6E\u6210flow</span></span>
<span class="line"><span style="color:#A6ACCD;">        parser: &quot;flow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;vue/multi-word-component-names&quot;: &quot;off&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //...\u672A\u5B8C\u5F85\u7EED</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>.vsconde/settings.json</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;window.zoomLevel&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;editor.wordWrap&quot;: &quot;wordWrapColumn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.formatOnSave&quot;: true, //true \u4FDD\u5B58\u65F6\u683C\u5F0F\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;source.fixAll.eslint&quot;: false //true \u4FDD\u5B58\u65F6\u81EA\u52A8\u4FEE\u590D</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;eslint.format.enable&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;eslint.validate&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;javascript&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;javascriptreact&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;html&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;vue-html&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;vue&quot; //\u8BBE\u7F6Evue\u8868\u793A\u4F7F\u7528eslint\u68C0\u67E5vue</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;files.associations&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;*.vue&quot;: &quot;vue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;*.ts&quot;: &quot;typescript&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[vue]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;johnsoncodehk.volar&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   &quot;source.fixAll.eslint&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   &quot;source.fixAll.stylelint&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;volar.tsPlugin&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;volar.tsPluginStatus&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[typescript]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;editor.defaultFormatter&quot;: &quot;johnsoncodehk.vscode-typescript-vue-plugin&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;editor.defaultFormatter&quot;: &quot;vscode.typescript-language-features&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[javascriptreact]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[css]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[less]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[scss]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[json]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[jsonc]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[html]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[javascript]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;prettier.singleQuote&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;prettier.jsxSingleQuote&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;javascript.format.insertSpaceAfterConstructor&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.enable&quot;: false, //\u7981\u7528vetur\u683C\u5F0F\u5316\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;vetur.validation.template&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // Use &#39;:&#39; as separator between property and value</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;languageStylus.useSeparator&quot;: true, // default value</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Toggle matches for Stylus Builtin Functions on autocomplete</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;languageStylus.useBuiltinFunctions&quot;: true, // default value</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Toggle colors preview</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.colorDecorators&quot;: true // default value</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><ul><li><code>.vsconde/extension.json</code><br> \u8FD9\u4E2A\u5728\u5207\u6362\u5230\u63D2\u4EF6\u89C6\u56FE\u65F6\uFF0C\u4F1A\u63D0\u793A\u201C\u63A8\u8350\u63D2\u4EF6\u201D\uFF0C\u5168\u90E8\u5B89\u88C5\u63A8\u8350\u63D2\u4EF6\u5373\u53EF\u3002</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Extension identifier format: \${publisher}.\${name}. Example: vscode.csharp</span></span>
<span class="line"><span style="color:#A6ACCD;">  // List of extensions which should be recommended for users of this workspace.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;recommendations&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;dbaeumer.vscode-eslint&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editorconfig.editorconfig&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;johnsoncodehk.volar&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;johnsoncodehk.vscode-typescript-vue-plugin&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;mrmlnc.vscode-scss&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;gruntfuggly.todo-tree&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // List of extensions recommended by VS Code that should not be recommended for users of this workspace.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;unwantedRecommendations&quot;: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="vue2-x-\u63A8\u8350\u914D\u7F6E" tabindex="-1">Vue2.x \u63A8\u8350\u914D\u7F6E <a class="header-anchor" href="#vue2-x-\u63A8\u8350\u914D\u7F6E" aria-hidden="true">#</a></h2><p><strong>\u63A8\u8350\u4F7F\u7528 eslint + prettier + vetur \u4E09\u4E2A vscode \u63D2\u4EF6</strong></p><ul><li><code>.eslintrc.js</code></li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//.eslintrc.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  parser: &quot;vue-eslint-parser&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:vue/recommended&#39;,  //vue2\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &#39;plugin:vue/vue3-recommended&#39;, //vue3\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &#39;plugin:@typescript-eslint/recommended&#39;, //\u6709ts\u5219\u9700\u8981\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;plugin:prettier/recommended&#39;, //\u914D\u7F6Eprettier\uFF0C\u6CE8\u610F\uFF0C\u6B64\u914D\u7F6E\u8981\u653E\u7F6E\u6700\u540E</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* \u4F18\u5148\u7EA7\u4F4E\u4E8Eparser\u5C5E\u6027\u914D\u7F6E\u7684\u8BED\u6CD5\u89E3\u6790\u5668 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  parserOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // parser: &quot;@typescript-eslint/parser&quot;, //\u82E5\u5B58\u5728ts\uFF0C\u5219\u9700\u8981\u914D\u7F6E\u6B64\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">    ecmaVersion: &#39;latest&#39;, //\u9ED8\u8BA4latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourceType: &quot;module&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ecmaFeatures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   jsx: true //\u542F\u7528JSX</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;off&quot; -\u5173\u95ED\u89C4\u5219,&quot;warn&quot; - \u5F00\u542F\u89C4\u5219, \u4F7F\u7528\u8B66\u544A \u7A0B\u5E8F\u4E0D\u4F1A\u9000\u51FA,&quot;error&quot; - \u5F00\u542F\u89C4\u5219, \u4F7F\u7528\u9519\u8BEF \u7A0B\u5E8F\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;prettier/prettier&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;error&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        singleQuote: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u9ED8\u8BA4\u90FD\u662Fbabel\u7684parser\uFF0C\u56E0\u4E3Aprettier\u548Cvetur\u68C0\u67E5\u51B2\u7A81\uFF0C\u6240\u4EE5\u914D\u7F6E\u6210flow</span></span>
<span class="line"><span style="color:#A6ACCD;">        parser: &quot;flow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;vue/multi-word-component-names&quot;: &quot;off&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><strong>.vsconde/settings.json</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;window.zoomLevel&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;editor.wordWrap&quot;: &quot;wordWrapColumn&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.formatOnSave&quot;: true, //true \u4FDD\u5B58\u65F6\u683C\u5F0F\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;source.fixAll.eslint&quot;: false //true \u4FDD\u5B58\u65F6\u81EA\u52A8\u4FEE\u590D</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;eslint.format.enable&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;eslint.validate&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;javascript&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;javascriptreact&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;html&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;vue-html&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;vue&quot; //\u8BBE\u7F6Evue\u8868\u793A\u4F7F\u7528eslint\u68C0\u67E5vue</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;files.associations&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;*.vue&quot;: &quot;vue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[vue]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;octref.vetur&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[css]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[json]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[jsonc]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[html]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[javascript]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;prettier.singleQuote&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;prettier.jsxSingleQuote&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;javascript.format.insertSpaceAfterConstructor&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //vetur\u9ED8\u8BA4\u96C6\u6210\u4E86\u4E00\u4E2Aeslint-plugin-vue\u7248\u672C\u6765\u5BF9&lt;template&gt;\u63D0\u793A.</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E5F\u53EF\u81EA\u5DF1\u5B89\u88C5\u4E00\u4E2A\u65B0\u7684\u7248\u672C. \u5982\u679C\u81EA\u5DF1\u5B89\u88C5\u4E00\u4E2A\u65B0\u7684\u7248\u672C, \u90A3\u4E48\u914D\u7F6E\u8FC7\u7A0B\u5982\u4E0B:</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.validation.template&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.useWorkspaceDependencies&quot;: true, //\u4F7F\u7528\u672C\u5730\u5DE5\u4F5C\u533A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.enable&quot;: true, //\u5F00\u542Fvetur\u683C\u5F0F\u5316\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.options.useTabs&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.options.tabSize&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.html&quot;: &quot;prettier&quot;, //\u9ED8\u8BA4:prettyhtml  \u6216 prettier</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.css&quot;: &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.postcss&quot;: &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.scss&quot;: &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.less&quot;: &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.stylus&quot;: &quot;stylus-supremacy&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.ts&quot;: &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.sass&quot;: &quot;sass-formatter&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //stylus\u683C\u5F0F\u5316\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;stylusSupremacy.insertColons&quot;: true, // \u662F\u5426\u63D2\u5165\u5192\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;stylusSupremacy.insertSemicolons&quot;: false, // \u662F\u5426\u63D2\u5165\u5206\u597D</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;stylusSupremacy.insertBraces&quot;: false, // \u662F\u5426\u63D2\u5165\u5927\u62EC\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;stylusSupremacy.insertNewLineAroundImports&quot;: false, // import\u4E4B\u540E\u662F\u5426\u6362\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;stylusSupremacy.insertNewLineAroundBlocks&quot;: false, // \u4E24\u4E2A\u9009\u62E9\u5668\u4E2D\u662F\u5426\u6362\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Use &#39;:&#39; as separator between property and value</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;languageStylus.useSeparator&quot;: true, // default value</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Toggle matches for Stylus Builtin Functions on autocomplete</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;languageStylus.useBuiltinFunctions&quot;: true, // default value</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Toggle colors preview</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.colorDecorators&quot;: true // default value</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><ul><li><code>.vsconde/extension.json</code> \u8FD9\u4E2A\u5728\u5207\u6362\u5230\u63D2\u4EF6\u89C6\u56FE\u65F6\uFF0C\u4F1A\u63D0\u793A\u201C\u63A8\u8350\u63D2\u4EF6\u201D\uFF0C\u5168\u90E8\u5B89\u88C5\u63A8\u8350\u63D2\u4EF6\u5373\u53EF\u3002</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Extension identifier format: \${publisher}.\${name}. Example: vscode.csharp</span></span>
<span class="line"><span style="color:#A6ACCD;">  // List of extensions which should be recommended for users of this workspace.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;recommendations&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;dbaeumer.vscode-eslint&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;octref.vetur&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editorconfig.editorconfig&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;syler.sass-indented&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sysoev.language-stylus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;gruntfuggly.todo-tree&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // List of extensions recommended by VS Code that should not be recommended for users of this workspace.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;unwantedRecommendations&quot;: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="prettier\u914D\u7F6E" tabindex="-1">Prettier\u914D\u7F6E <a class="header-anchor" href="#prettier\u914D\u7F6E" aria-hidden="true">#</a></h2><h4 id="prettier-\u57FA\u672C\u914D\u7F6E" tabindex="-1">Prettier - \u57FA\u672C\u914D\u7F6E <a class="header-anchor" href="#prettier-\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a></h4><p>\u8BF4\u660E\uFF1A\u82E5\u67D0\u7C7B\u578B\u6587\u4EF6\u4E0D\u91C7\u7528prettier\u683C\u5F0F\uFF0C\u5219\u53EF\u5728\u9879\u76EE\u6839\u76EE\u5F55 <strong>.prettierignore</strong> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u6392\u9664\u9879 \u6B63\u5219\u8868\u8FBE\u5F0F\u5FFD\u7565\u6389\u3002</p><p><strong>prettier.config.js</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//prettier.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //html\u9700strict\u4E25\u683C\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  htmlWhitespaceSensitivity: &quot;strict&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u662F\u5426\u7ED9vue\u4E2D\u7684 &lt;script&gt; and &lt;style&gt;\u6807\u7B7E\u52A0\u7F29\u8FDB</span></span>
<span class="line"><span style="color:#A6ACCD;">  vueIndentScriptAndStyle: false,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // tab\u7F29\u8FDB\u5927\u5C0F,\u9ED8\u8BA4\u4E3A2</span></span>
<span class="line"><span style="color:#A6ACCD;">  tabWidth: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F7F\u7528tab\u7F29\u8FDB\uFF0C\u9ED8\u8BA4false</span></span>
<span class="line"><span style="color:#A6ACCD;">  useTabs: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F7F\u7528\u5206\u53F7, \u9ED8\u8BA4true</span></span>
<span class="line"><span style="color:#A6ACCD;">  semi: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F7F\u7528\u5355\u5F15\u53F7, \u9ED8\u8BA4false(\u5728jsx\u4E2D\u914D\u7F6E\u65E0\u6548, \u9ED8\u8BA4\u90FD\u662F\u53CC\u5F15\u53F7)</span></span>
<span class="line"><span style="color:#A6ACCD;">  singleQuote: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u884C\u5C3E\u9017\u53F7,\u9ED8\u8BA4none,\u53EF\u9009 none|es5|all</span></span>
<span class="line"><span style="color:#A6ACCD;">  // es5 \u5305\u62ECes5\u4E2D\u7684\u6570\u7EC4\u3001\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // all \u5305\u62EC\u51FD\u6570\u5BF9\u8C61\u7B49\u6240\u6709\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">  trailingComma: &quot;none&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5BF9\u8C61\u4E2D\u7684\u7A7A\u683C \u9ED8\u8BA4true</span></span>
<span class="line"><span style="color:#A6ACCD;">  // true: { foo: bar }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // false: {foo: bar}</span></span>
<span class="line"><span style="color:#A6ACCD;">  bracketSpacing: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // JSX\u6807\u7B7E\u95ED\u5408\u4F4D\u7F6E \u9ED8\u8BA4false</span></span>
<span class="line"><span style="color:#A6ACCD;">  // false: &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">  //          className=&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  //          style={{}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  //       &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // true: &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">  //          className=&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  //          style={{}} &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  jsxBracketSameLine: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5728jsx\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">  jsxSingleQuote: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7BAD\u5934\u51FD\u6570\u53C2\u6570\u62EC\u53F7 \u9ED8\u8BA4avoid \u53EF\u9009 avoid| always</span></span>
<span class="line"><span style="color:#A6ACCD;">  // avoid \u80FD\u7701\u7565\u62EC\u53F7\u7684\u65F6\u5019\u5C31\u7701\u7565 \u4F8B\u5982x =&gt; x</span></span>
<span class="line"><span style="color:#A6ACCD;">  // always \u603B\u662F\u6709\u62EC\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">  arrowParens: &quot;avoid&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E0D\u4F7F\u7528prettier\u683C\u5F0F\u5316\u7684\u6587\u4EF6\u586B\u5199\u5728\u9879\u76EE\u7684.prettierignore\u6587\u4EF6\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">  ignorePath: &quot;.prettierignore&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //true\u5F00\u542F,false\u5173\u95ED  prettier\u4F7F\u7528eslint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span></span>
<span class="line"><span style="color:#A6ACCD;">  eslintIntegration: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //rue\u5F00\u542F,false\u5173\u95ED  prettier\u4F7F\u7528stylelint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   stylelintIntegration: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7ED3\u5C3E\u662F \\n \\r \\n\\r auto</span></span>
<span class="line"><span style="color:#A6ACCD;">  endOfLine: &quot;auto&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  wrapAttributes: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // sortAttributes: false</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,37),r=[p];function o(t,c,i,u,b,A){return n(),a("div",null,r)}const q=s(l,[["render",o]]);export{m as __pageData,q as default};
