import{_ as s,o as n,c as a,a as l}from"./app.b476fd3b.js";const p="/vitepress-demo/assets/css-style-strategies.d0a1abcd.png",e="/vitepress-demo/assets/ui-library.99d1a1b1.png",d=JSON.parse('{"title":"React \u4E2D\u7684\u6837\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS in React","slug":"css-in-react","link":"#css-in-react","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-styling/css.md","lastUpdated":1676558697000}'),r={name:"road-to-react-chinese/react-styling/css.md"},c=l('<h1 id="react-\u4E2D\u7684\u6837\u5F0F" tabindex="-1">React \u4E2D\u7684\u6837\u5F0F <a class="header-anchor" href="#react-\u4E2D\u7684\u6837\u5F0F" aria-hidden="true">#</a></h1><p>React \u5E94\u7528\u4E2D\u5199\u6837\u5F0F\u7684\u65B9\u6CD5\u6709\u5F88\u591A\uFF0C\u5173\u4E8E\u6700\u597D\u7684<strong>\u6837\u5F0F\u7B56\u7565</strong>\u548C<strong>\u6837\u5F0F\u65B9\u6CD5</strong>\u4E5F\u4E89\u8BBA\u4E86\u5F88\u4E45\u3002\u6211\u4EEC\u5C06\u4ECB\u7ECD\u51E0\u79CD\u65B9\u6CD5\uFF0C\u4F46\u4E0D\u4F1A\u7ED9\u4E2A\u6743\u91CD\u6765\u8BF4\u660E\u8FD9\u4E9B\u65B9\u6CD5\u54EA\u4E2A\u66F4\u597D\u3002\u76EE\u524D\u6709\u6B63\u53CD\u4E24\u65B9\u9762\u7684\u8BBA\u70B9\uFF0C\u4F46\u4E3B\u8981\u662F\u770B\u4EC0\u4E48\u6700\u9002\u5408\u5F00\u53D1\u8005\u548C\u56E2\u961F\u3002</p><p>\u6211\u4EEC\u5C06\u4ECE React \u4E2D\u5E38\u89C1\u7684 CSS \u6837\u5F0F\u5F00\u59CB\uFF0C\u4F46\u968F\u540E\u6211\u4EEC\u5C06\u63A2\u8BA8\u4E24\u79CD\u66F4\u9AD8\u7EA7\u7684 <strong>CSS-in-CSS</strong>\uFF08<strong>CSS \u6A21\u5757</strong>\uFF09\u548C <strong>CSS-in-JS</strong>\uFF08<strong>\u6837\u5F0F\u7EC4\u4EF6</strong>\uFF09\u7B56\u7565\u3002CSS \u6A21\u5757\u548C\u6837\u5F0F\u7EC4\u4EF6\u53EA\u662F\u8FD9\u4E24\u7EC4\u7B56\u7565\u4E2D\u7684\u4E24\u79CD\u65B9\u6CD5\u3002\u6211\u4EEC\u4E5F\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728 React \u5E94\u7528\u7A0B\u5E8F\u4E2D\u5305\u542B\u53EF\u6269\u5C55\u7684\u77E2\u91CF\u56FE\u5F62\uFF08SVG\uFF09\uFF0C\u5982 Logo \u6216\u56FE\u6807\u7B49\u3002</p><p><img src="'+p+'" alt=""></p><p>\u5982\u679C\u4F60\u4E0D\u60F3\u4ECE\u5934\u5F00\u59CB\u6784\u5EFA\u5E38\u89C1\u7684 UI \u7EC4\u4EF6\uFF08\u5982\u6309\u94AE\u3001\u5BF9\u8BDD\u6846\u3001\u4E0B\u62C9\u83DC\u5355\uFF09\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u4E00\u4E2A<a href="https://www.robinwieruch.de/react-libraries" target="_blank" rel="noreferrer">\u9002\u5408 React \u6D41\u884C\u7684 UI \u5E93</a>\uFF0C\u5B83\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u8FD9\u4E9B\u7EC4\u4EF6\u3002\u4E0D\u8FC7\uFF0C\u5982\u679C\u4F60\u5728\u4F7F\u7528\u9884\u6784\u5EFA\u7684\u89E3\u51B3\u65B9\u6848\u4E4B\u524D\uFF0C\u5148\u5C1D\u8BD5\u7740\u6784\u5EFA\u8FD9\u4E9B\u7EC4\u4EF6\uFF0C\u5BF9\u5B66\u4E60 React \u66F4\u597D\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u5C06\u4E0D\u4F1A\u4F7F\u7528\u4EFB\u4F55\u4E00\u4E2A UI \u7EC4\u4EF6\u5E93\u3002</p><p><img src="'+e+`" alt=""></p><p>\u4EE5\u4E0B\u662F\u5728 <code>create-react-app</code> \u4E2D\u9884\u5148\u914D\u7F6E\u7684\u6837\u5F0F\u5316\u65B9\u6CD5\u548C SVG\u3002\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u6784\u5EFA\u5DE5\u5177\uFF08\u4F8B\u5982 Webpack\uFF09\uFF0C\u53EF\u80FD\u9700\u8981\u914D\u7F6E\u4E3A\u5BFC\u5165 CSS \u6216 SVG \u6587\u4EF6\u3002\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528\u7684\u662F create-react-app\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u7ACB\u5373\u4F7F\u7528\u8FD9\u4E9B\u6587\u4EF6\u4F5C\u4E3A\u8D44\u6E90\u3002</p><blockquote><h2 id="css-in-react" tabindex="-1">CSS in React <a class="header-anchor" href="#css-in-react" aria-hidden="true">#</a></h2></blockquote><p>React \u4E2D\u7684 CSS</p><p>React \u4E2D\u7684\u901A\u7528 CSS \u4E0E\u60A8\u53EF\u80FD\u5DF2\u7ECF\u5B66\u4E60\u7684\u6807\u51C6 CSS \u76F8\u4F3C\u3002 \u6BCF\u4E2A Web \u5E94\u7528\u7A0B\u5E8F\u90FD\u4E3A HTML \u5143\u7D20\u63D0\u4F9B\u4E86\u4E00\u4E2A class \u5C5E\u6027\uFF08\u5728 React \u4E2D\u4E3A className\uFF09\uFF0C\u8BE5\u5C5E\u6027\u7A0D\u540E\u5C06\u5728 CSS \u6587\u4EF6\u4E2D\u8BBE\u7F6E\u6837\u5F0F\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div className=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1 className=&quot;headline-primary&quot;&gt;My Hacker Stories&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;SearchForm</span></span>
<span class="line"><span style="color:#A6ACCD;">        searchTerm={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onSearchInput={handleSearchInput}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onSearchSubmit={handleSearchSubmit}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isError &amp;&amp; &lt;p&gt;Something went wrong ...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;List list={stories.data} onRemoveItem={handleRemoveStory} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u56E0\u4E3A CSS \u5728\u4E0B\u4E00\u6B65\u5904\u7406\u4E86\u8FB9\u6846\uFF0C\u6240\u4EE5\u5220\u9664\u4E86 <code>&lt;hr /&gt;</code>\u3002 \u6211\u4EEC\u5C06\u5BFC\u5165 CSS \u6587\u4EF6\uFF0C\u8FD9\u662F\u5728 create-react-app \u914D\u7F6E\u7684\u5E2E\u52A9\u4E0B\u5B8C\u6210\u7684\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./App.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6B64 CSS \u6587\u4EF6\u5C06\u5B9A\u4E49\u6211\u4EEC\u5728 App \u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u4E24\u4E2A\uFF08\u4EE5\u53CA\u66F4\u591A\uFF09CSS \u7C7B\u3002 \u5728* src / App.css *\u6587\u4EF6\u4E2D\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837\u5B9A\u4E49\u5B83\u4EEC\uFF1A</p><p title="src/App.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.container {</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  background: #83a4d4; /* fallback for old browsers */</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: linear-gradient(to left, #b6fbff, #83a4d4);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.headline-primary {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 48px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-weight: 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">  letter-spacing: 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5F53\u518D\u6B21\u542F\u52A8\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5E94\u8BE5\u4F1A\u770B\u5230\u7B2C\u4E00\u4E2A\u6837\u5F0F\u5DF2\u7ECF\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u751F\u6548\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B Item \u7EC4\u4EF6\u3002\u5B83\u7684\u4E00\u4E9B\u5143\u7D20\u4E5F\u4F1A\u63A5\u6536 &quot;className&quot; \u5C5E\u6027\uFF0C\u4F46\u662F\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u4E5F\u4F7F\u7528\u4E86\u4E00\u79CD\u65B0\u7684\u6837\u5F0F\u5316\u6280\u672F\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div className=&quot;item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style={{ width: &#39;40%&#39; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style={{ width: &#39;30%&#39; }}&gt;{item.author}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style={{ width: &#39;10%&#39; }}&gt;{item.num_comments}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style={{ width: &#39;10%&#39; }}&gt;{item.points}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span style={{ width: &#39;10%&#39; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; onRemoveItem(item)}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        className=&quot;button button_small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5982\u4F60\u6240\u89C1\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 HTML \u5143\u7D20\u7684\u539F\u751F <code>style</code> \u5C5E\u6027\u3002\u5728 JSX \u4E2D\uFF0Cstyle \u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u5185\u8054\u7684 JavaScript \u5BF9\u8C61\u4F20\u9012\u8FD9\u4E9B\u5C5E\u6027\u3002\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 JavaScript \u6587\u4EF6\u4E2D\u5B9A\u4E49\u52A8\u6001\u6837\u5F0F\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5927\u90E8\u5206\u7684\u9759\u6001 CSS \u6587\u4EF6\u3002\u8FD9\u79CD\u65B9\u6CD5\u88AB\u79F0\u4E3A<strong>\u5185\u8054\u6837\u5F0F</strong>\uFF0C\u5B83\u5BF9\u4E8E\u5FEB\u901F\u539F\u578B\u8BBE\u8BA1\u548C\u52A8\u6001\u6837\u5F0F\u5B9A\u4E49\u975E\u5E38\u6709\u7528\u3002\u7136\u800C\uFF0C\u5185\u8054\u6837\u5F0F\u5E94\u8BE5\u614E\u7528\uFF0C\u56E0\u4E3A\u5355\u72EC\u7684\u6837\u5F0F\u5B9A\u4E49\u53EF\u4EE5\u8BA9 JSX \u66F4\u7B80\u6D01\u3002</p><p>\u5728\u4F60\u7684 <em>src/App.css</em> \u6587\u4EF6\u4E2D\uFF0C\u5B9A\u4E49\u65B0\u7684 CSS \u7C7B\u3002\u4F7F\u7528\u4E86\u57FA\u672C\u7684 CSS \u7279\u6027\u3002\u6B64\u793A\u4F8B\u4E2D\u4E0D\u5305\u62EC\u6765\u81EA CSS \u6269\u5C55\uFF08\u5982 Sass\uFF09\u7684\u9AD8\u7EA7 CSS \u529F\u80FD\uFF08\u5982\u5D4C\u5957\uFF09\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F<a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/" target="_blank" rel="noreferrer">\u53EF\u9009\u914D\u7F6E</a>\u3002</p><p title="src/App.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.item {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding-bottom: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.item &gt; span {</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 0 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  white-space: nowrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">  white-space: nowrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  text-overflow: ellipsis;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.item &gt; span &gt; a {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: inherit;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u524D\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u7684\u6309\u94AE\u6837\u5F0F\u4ECD\u7136\u7F3A\u5931\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u5B9A\u4E49\u4E00\u4E2A\u57FA\u672C\u7684\u6309\u94AE\u6837\u5F0F\u548C\u4E24\u4E2A\u66F4\u7279\u5B9A\u7684\u6309\u94AE\u6837\u5F0F\uFF08\u5C0F\u548C\u5927\uFF09\u3002\u5176\u4E2D\u4E00\u4E2A\u6309\u94AE\u6837\u5F0F\u5DF2\u7ECF\u88AB\u4F7F\u7528\u4E86\uFF0C\u53E6\u4E00\u4E2A\u5C06\u5728\u4E0B\u4E00\u6B65\u4E2D\u4F7F\u7528\u3002</p><p title="src/App.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.button {</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: all 0.1s ease-in;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.button:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.button_small {</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.button_large {</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u9664\u4E86 React \u4E2D\u7684\u6837\u5F0F\u65B9\u6CD5\u5916\uFF0C\u547D\u540D\u7EA6\u5B9A([<a href="https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS" target="_blank" rel="noreferrer">CSS \u6307\u5357</a>)\u662F\u53E6\u4E00\u4E2A\u4E3B\u9898\u3002\u6700\u540E\u7684 CSS \u7247\u6BB5\u9075\u5FAA\u4E86 BEM \u89C4\u5219\uFF0C\u7528\u4E0B\u5212\u7EBF(<code>_</code>)\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\u9488\u5BF9\u4FEE\u6539\u3002\u9009\u62E9\u4EFB\u4F55\u9002\u5408\u4F60\u548C\u4F60\u7684\u56E2\u961F\u7684\u547D\u540D\u60EF\u4F8B\u3002\u4E8B\u4E0D\u5B9C\u8FDF\uFF0C\u6211\u4EEC\u5C06\u5BF9\u4E0B\u4E00\u4E2A React \u7EC4\u4EF6\u8BBE\u7F6E\u6837\u5F0F\u3002</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const SearchForm = ({ ... }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;form onSubmit={onSearchSubmit} className=&quot;search-form&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;InputWithLabel ... &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">      type=&quot;submit&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      disabled={!searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      className=&quot;button button_large&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Submit</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5C06 <code>className</code> \u5C5E\u6027\u4F5C\u4E3A prop \u4F20\u9012\u7ED9 React \u7EC4\u4EF6\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6B64\u9009\u9879\u4E3A SearchForm \u7EC4\u4EF6\u4F20\u9012\u7075\u6D3B\u7684\u6837\u5F0F,\u8BE5\u6837\u5F0F\u6765\u81EA CSS \u6587\u4EF6\u7684\u4E00\u7CFB\u5217\u9884\u5B9A\u4E49\u7C7B\u7684 <code>className</code> \u5C5E\u6027\u3002\u6700\u540E\uFF0C\u8BBE\u7F6E InputWithLabel \u7EC4\u4EF6\u7684\u6837\u5F0F:</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const InputWithLabel = ({ ... }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor={id} className=&quot;label&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        {children}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/label&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &amp;nbsp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">        ref={inputRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">        id={id}</span></span>
<span class="line"><span style="color:#A6ACCD;">        type={type}</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={value}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onChange={onInputChange}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        className=&quot;input&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5728 <em>src/App.css</em> \u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0\u5176\u4F59\u7684\u7C7B:</p><p title="src/App.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.search-form {</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px 0 20px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align-items: baseline;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.label {</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-top: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-left: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding-left: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.input {</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-bottom: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4E3A\u4E86\u7B80\u5355\u8D77\u89C1\uFF0C\u6211\u4EEC\u5728 <em>src/App.css</em> \u6587\u4EF6\u4E2D\u5206\u522B\u5B9A\u4E49\u4E86\u6807\u7B7E\u548C\u8F93\u5165\u7B49\u5143\u7D20\u7684\u6837\u5F0F\u3002\u7136\u800C\uFF0C\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u6700\u597D\u5728 <em>src/index.css</em> \u6587\u4EF6\u4E2D\u5168\u5C40\u5B9A\u4E49\u4E00\u6B21\u8FD9\u4E9B\u5143\u7D20\u3002\u7531\u4E8E React \u7EC4\u4EF6\u88AB\u62C6\u5206\u6210\u591A\u4E2A\u6587\u4EF6\uFF0C\u5171\u4EAB\u6837\u5F0F\u5C31\u6210\u4E86\u4E00\u79CD\u5FC5\u7136\u3002</p><p>\u8FD9\u662F\u6211\u4EEC\u5927\u591A\u6570\u4EBA\u5DF2\u7ECF\u5B66\u4E60\u7684\u57FA\u672C CSS\uFF0C\u4EE5\u66F4\u52A0\u52A8\u6001\u7684\u5185\u8054\u6837\u5F0F\u7F16\u5199\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u6CA1\u6709\u50CF Sass \u8FD9\u6837\u7684 CSS \u6269\u5C55\uFF08\u8BED\u6CD5\u4E0A\u5F88\u68D2\u7684\u6837\u5F0F\u8868\uFF09\uFF0C\u5219\u5185\u8054\u6837\u5F0F\u4F1A\u53D8\u5F97\u5F88\u9EBB\u70E6\uFF0C\u56E0\u4E3A CSS \u5D4C\u5957\u4E4B\u7C7B\u7684\u529F\u80FD\u5728\u539F\u751F CSS \u4E2D\u4E0D\u53EF\u7528\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/CSS-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a></li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/react-modern-final...hs/CSS-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E<a href="https://create-react-app.dev/docs/adding-a-stylesheet" target="_blank" rel="noreferrer">creative-react-app \u4E2D\u7684 CSS \u6837\u5F0F\u8868</a></li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E<a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet" target="_blank" rel="noreferrer">creative-react-app \u4E2D\u7684 Sass</a>,\u4EE5\u5229\u7528\u66F4\u9AD8\u7EA7\u7684 CSS \u529F\u80FD\uFF0C\u5982\u5D4C\u5957\u3002</li><li>\u5C1D\u8BD5\u5C06 \u201CclassName\u201D \u5C5E\u6027\u4ECE App \u4F20\u9012\u5230 SearchForm \u7EC4\u4EF6\uFF0C\u5176\u503C\u4E3A \u201Cbutton_small\u201D \u6216 \u201Cbutton_large\u201D\uFF0C\u5E76\u5C06\u5176\u7528\u4F5C\u6309\u94AE\u5143\u7D20\u7684 \u201CclassName\u201D\u3002</li></ul>`,41),t=[c];function o(i,b,C,A,u,m){return n(),a("div",null,t)}const D=s(r,[["render",o]]);export{d as __pageData,D as default};
