import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u4E2D\u7684 CSS \u6A21\u5757\u5316","slug":"react-\u4E2D\u7684-css-\u6A21\u5757\u5316","link":"#react-\u4E2D\u7684-css-\u6A21\u5757\u5316","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-styling/css-modules.md","lastUpdated":1677316569000}'),p={name:"road-to-react-chinese/react-styling/css-modules.md"},e=l(`<h2 id="react-\u4E2D\u7684-css-\u6A21\u5757\u5316" tabindex="-1">React \u4E2D\u7684 CSS \u6A21\u5757\u5316 <a class="header-anchor" href="#react-\u4E2D\u7684-css-\u6A21\u5757\u5316" aria-hidden="true">#</a></h2><p>CSS Modules \u662F\u4E00\u79CD\u9AD8\u7EA7\u7684 <strong>CSS-in-CSS</strong> \u65B9\u6CD5\u3002CSS \u6587\u4EF6\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4F60\u53EF\u4EE5\u5E94\u7528 Sass \u7B49 CSS \u6269\u5C55\uFF0C\u4F46\u5B83\u5728 React \u7EC4\u4EF6\u4E2D\u7684\u4F7F\u7528\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u8981\u5728 <code>create-react-app</code> \u4E2D\u542F\u7528 CSS \u6A21\u5757\uFF0C\u8BF7\u5C06 <em>src/App.css</em> \u6587\u4EF6\u91CD\u547D\u540D\u4E3A <em>src/App.module.css</em>\u3002\u8FD9\u4E2A\u64CD\u4F5C\u662F\u5728\u4F60\u7684\u9879\u76EE\u76EE\u5F55\u7684\u547D\u4EE4\u884C\u4E2D\u8FDB\u884C\u7684\u3002</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mv src/App.css src/App.module.css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u91CD\u547D\u540D\u540E\u7684 <em>src/App.module.css</em> \u4E2D\uFF0C\u50CF\u4E4B\u524D\u4E00\u6837\u4ECE\u7B2C\u4E00\u4E2A CSS \u7C7B\u5F00\u59CB\u5B9A\u4E49\uFF1A</p><p title="src/App.module.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.container {</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  background: #83a4d4; /* fallback for old browsers */</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: linear-gradient(to left, #b6fbff, #83a4d4);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.headlinePrimary {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 48px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-weight: 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">  letter-spacing: 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u518D\u7528\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165 <em>src/App.module.css</em> \u6587\u4EF6\u3002\u8FD9\u4E00\u6B21\uFF0C\u628A\u5B83\u4F5C\u4E3A\u4E00\u4E2A JavaScript \u5BF9\u8C61\u5BFC\u5165\uFF0C\u5BF9\u8C61\u7684\u540D\u79F0\uFF08\u8FD9\u91CC\u662F<code>styles</code>\uFF09\u7531\u4F60\u51B3\u5B9A\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import styles from &#39;./App.module.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0D\u9700\u8981\u5C06 <code>className</code> \u5B9A\u4E49\u4E3A\u4E00\u4E2A\u6620\u5C04\u5230 CSS \u6587\u4EF6\u7684\u5B57\u7B26\u4E32\uFF0C\u800C\u662F\u76F4\u63A5\u4ECE <code>styles</code> \u5BF9\u8C61\u4E2D\u8BBF\u95EE CSS \u7C7B\uFF0C\u5E76\u901A\u8FC7 <code>JavaScript in JSX</code> \u8868\u8FBE\u5F0F\u5C06\u5176\u5206\u914D\u7ED9\u4F60\u7684\u5143\u7D20\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div className={styles.container}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h1 className={styles.headlinePrimary}&gt;My Hacker Stories&lt;/h1&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6709\u5404\u79CD\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7 <code>styles</code> \u5BF9\u8C61\u5411\u5143\u7D20\u7684\u5355\u4E2A <code>className</code> \u5C5E\u6027\u6DFB\u52A0\u591A\u4E2A CSS \u7C7B\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u4F7F\u7528\u7684\u662F <code>JavaScript</code> \u6A21\u677F\u5B57\u7B26\u4E32\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div className={styles.item}&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">        className={\`\${styles.button} \${styles.buttonSmall}\`}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728 JSX \u4E2D\u518D\u6B21\u6DFB\u52A0\u5185\u8054\u6837\u5F0F\u4F5C\u4E3A\u66F4\u591A\u7684\u52A8\u6001\u6837\u5F0F\u3002\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u50CF Sass \u8FD9\u6837\u7684 CSS \u6269\u5C55\u6765\u5B9E\u73B0 CSS \u5D4C\u5957\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002\u4E0D\u8FC7\u6211\u4EEC\u4F1A\u575A\u6301\u4F7F\u7528\u539F\u751F CSS \u7684\u529F\u80FD\uFF1A</p><p title="src/App.module.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.item {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4E0B\u9762\u662F <em>src/App.module.css</em> \u6587\u4EF6\u4E2D\u6309\u94AE CSS \u7C7B\uFF1A</p><p title="src/App.module.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.button {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">.buttonSmall {</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.buttonLarge {</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u5411\u4F2A BEM \u547D\u540D\u60EF\u4F8B\u7684\u8F6C\u53D8\uFF0C\u4E0E\u4E0A\u4E00\u8282\u7684 <code>button_small</code> \u548C <code>button_large</code> \u5F62\u6210\u5BF9\u6BD4\u3002\u5982\u679C\u524D\u9762\u7684\u547D\u540D\u7EA6\u5B9A\u6210\u7ACB\uFF0C\u6211\u4EEC\u53EA\u80FD\u7528 <code>styles[&#39;button_small&#39;]</code> \u6765\u8BBF\u95EE\u6837\u5F0F\uFF0C\u7531\u4E8E JavaScript \u5BF9\u5BF9\u8C61\u4E0B\u5212\u7EBF\u7684\u9650\u5236\uFF0C\u8FD9\u4F7F\u5F97\u5B83\u66F4\u52A0\u5570\u55E6\u3002\u540C\u6837\u7684\u7F3A\u70B9\u4E5F\u9002\u7528\u4E8E\u7528\u7834\u6298\u53F7\uFF08<code>-</code>\uFF09\u5B9A\u4E49\u7684\u7C7B\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>styles.buttonSmall</code> \u6765\u4EE3\u66FF\uFF08\u53C2\u89C1\uFF1AItem\u7EC4\u4EF6\uFF09:</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const SearchForm = ({ ... }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;form onSubmit={onSearchSubmit} className={styles.searchForm}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;InputWithLabel ... &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">      type=&quot;submit&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      disabled={!searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      className={\`\${styles.button} \${styles.buttonLarge}\`}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Submit</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>SearchForm \u7EC4\u4EF6\u4E5F\u4F1A\u63A5\u6536\u8FD9\u4E9B\u6837\u5F0F\u3002\u5B83\u5FC5\u987B\u4F7F\u7528\u5B57\u7B26\u4E32\u63D2\u503C\uFF0C\u901A\u8FC7 JavaScript \u7684\u6A21\u677F\u5B57\u7B26\u4E32\u5728\u4E00\u4E2A\u5143\u7D20\u4E2D\u4F7F\u7528\u4E24\u4E2A\u6837\u5F0F\u3002\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F <a href="https://github.com/JedWatson/classnames" target="_blank" rel="noreferrer">classnames</a> \u5E93\uFF0C\u5B83\u4F5C\u4E3A\u9879\u76EE\u4F9D\u8D56\u901A\u8FC7\u547D\u4EE4\u884C\u5B89\u88C5\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import cs from &#39;classnames&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// somewhere in a className attribute</span></span>
<span class="line"><span style="color:#A6ACCD;">className={cs(styles.button, styles.buttonLarge)}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8BE5\u5E93\u4E5F\u63D0\u4F9B\u4E86\u6761\u4EF6\u6837\u5F0F\u3002\u6700\u540E\uFF0C\u7EE7\u7EED\u4ECB\u7ECD InputWithLabel \u7EC4\u4EF6\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const InputWithLabel = ({ ... }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;label htmlFor={id} className={styles.label}&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">        className={styles.input}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5E76\u5728 <em>src/App.module.css</em> \u6587\u4EF6\u4E2D\u5B8C\u6210\u5269\u4E0B\u7684\u6837\u5F0F\uFF1A</p><p title="src/App.module.css,lang=&quot;css&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.searchForm {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4E0E\u4E0A\u4E00\u8282\u540C\u6837\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A\u5176\u4E2D\u4E00\u4E9B\u6837\u5F0F\uFF0C\u5982 <code>input</code> \u548C <code>label</code>\uFF0C\u5728\u6CA1\u6709 CSS \u6A21\u5757\u7684\u5168\u5C40 <em>src/index.css</em> \u6587\u4EF6\u4E2D\u53EF\u80FD\u66F4\u6709\u6548\u3002</p><p>\u540C\u6837\uFF0CCSS Modules \u5C31\u50CF\u4EFB\u4F55\u5176\u4ED6 CSS-in-CSS \u65B9\u6CD5\u4E00\u6837\uFF0C\u53EF\u4EE5\u4F7F\u7528 Sass \u6765\u5B9E\u73B0\u66F4\u9AD8\u7EA7\u7684 CSS \u529F\u80FD\uFF0C\u6BD4\u5982\u5D4C\u5957\u3002CSS \u6A21\u5757\u7684\u4F18\u52BF\u5728\u4E8E\uFF0C\u6BCF\u6B21\u5F53\u4E00\u4E2A\u6837\u5F0F\u6CA1\u6709\u88AB\u5B9A\u4E49\u65F6\uFF0C\u6211\u4EEC\u90FD\u4F1A\u5728 JavaScript \u4E2D\u6536\u5230\u4E00\u4E2A\u9519\u8BEF\u3002\u5728\u6807\u51C6\u7684 CSS \u65B9\u6CD5\u4E2D\uFF0CJavaScript \u548C CSS \u6587\u4EF6\u4E2D\u672A\u5339\u914D\u7684\u6837\u5F0F\u53EF\u80FD\u4F1A\u88AB\u5FFD\u7565\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/CSS-Modules-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a></li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/react-modern-final...hs/CSS-Modules-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a></li><li>\u4E86\u89E3\u66F4\u591A <a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet" target="_blank" rel="noreferrer">create-react-app \u4E2D\u7684 CSS Modules</a>\u3002</li></ul>`,38),r=[e];function c(t,o,i,b,C,A){return n(),a("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
