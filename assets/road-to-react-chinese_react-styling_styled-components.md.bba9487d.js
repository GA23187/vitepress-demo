import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6","slug":"react-\u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6","link":"#react-\u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-styling/styled-components.md","lastUpdated":1677316569000}'),p={name:"road-to-react-chinese/react-styling/styled-components.md"},e=l(`<h2 id="react-\u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6" tabindex="-1">React \u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6 <a class="header-anchor" href="#react-\u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u6709\u4E86\u524D\u9762 CSS-in-CSS \u7684\u65B9\u6CD5\uFF0C<strong>Styled Components</strong> \u662F <strong>CSS-in-JS</strong> \u7684\u51E0\u79CD\u65B9\u6CD5\u4E4B\u4E00\u3002\u6211\u9009\u62E9 <strong>Styled Components</strong> \u662F\u56E0\u4E3A\u5B83\u662F\u6700\u6D41\u884C\u7684\u3002\u5B83\u662F\u4F5C\u4E3A JavaScript \u7684\u4F9D\u8D56\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u5728\u547D\u4EE4\u884C\u4E0A\u5B89\u88C5\u5B83\uFF1A</p><p title="Command Line,lang=&quot;text&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install styled-components</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5728\u4F60\u7684 <em>src/App.js</em> \u6587\u4EF6\u4E2D\u5F15\u5165\u5B83\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">import styled from &#39;styled-components&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u987E\u540D\u601D\u4E49\uFF0CCSS-in-JS \u53D1\u751F\u5728\u4F60\u7684 JavaScript \u6587\u4EF6\u4E2D\u3002\u5728\u4F60\u7684 <em>src/App.js</em> \u6587\u4EF6\u4E2D\uFF0C\u5B9A\u4E49\u4F60\u7684\u7B2C\u4E00\u4E2A\u6837\u5F0F\u7EC4\u4EF6\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const StyledContainer = styled.div\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  background: #83a4d4;</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: linear-gradient(to left, #b6fbff, #83a4d4);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const StyledHeadlinePrimary = styled.h1\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 48px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-weight: 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">  letter-spacing: 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5F53\u4F7F\u7528\u6837\u5F0F\u5316\u7EC4\u4EF6\u65F6\uFF0C\u4F60\u4F7F\u7528 JavaScript \u6A21\u677F\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u4E0E JavaScript \u51FD\u6570\u7684\u4F7F\u7528\u65B9\u5F0F\u76F8\u540C\u3002\u6A21\u677F\u5B57\u7B26\u4E32\u4E4B\u95F4\u7684\u6240\u6709\u5185\u5BB9\u90FD\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u53C2\u6570\uFF0C\u800C <code>styled</code> \u5BF9\u8C61\u5219\u8BA9\u4F60\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u8BBF\u95EE\u6240\u6709\u5FC5\u8981\u7684 HTML \u5143\u7D20\uFF08\u5982\uFF1Adiv\u3001h1\uFF09\u3002\u4E00\u65E6\u51FD\u6570\u88AB\u8C03\u7528\u4E86\u6837\u5F0F\uFF0C\u5B83\u5C31\u4F1A\u8FD4\u56DE\u4E00\u4E2A React \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u4F60\u7684 App \u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledContainer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;StyledHeadlinePrimary&gt;My Hacker Stories&lt;/StyledHeadlinePrimary&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/StyledContainer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u79CD React \u7EC4\u4EF6\u4E0E\u666E\u901A\u7684 React \u7EC4\u4EF6\u9075\u5FAA\u76F8\u540C\u7684\u89C4\u5219\u3002\u5B83\u7684\u5143\u7D20\u6807\u7B7E\u4E4B\u95F4\u4F20\u9012\u7684\u6240\u6709\u5185\u5BB9\u90FD\u4F1A\u81EA\u52A8\u4F5C\u4E3A React <code>children</code> prop \u4F20\u9012\u4E0B\u53BB\u3002\u5BF9\u4E8E Item \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u8FD9\u6B21\u6CA1\u6709\u4F7F\u7528\u5185\u8054\u6837\u5F0F\uFF0C\u800C\u662F\u4E3A\u5B83\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4E13\u95E8\u7684\u6837\u5F0F\u7EC4\u4EF6\u3002<code>StyledColumn</code> \u4F7F\u7528 React prop \u52A8\u6001\u63A5\u6536\u5176\u6837\u5F0F\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Item = ({ item, onRemoveItem }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;StyledItem&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledColumn width=&quot;40%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/StyledColumn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledColumn width=&quot;30%&quot;&gt;{item.author}&lt;/StyledColumn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledColumn width=&quot;10%&quot;&gt;{item.num_comments}&lt;/StyledColumn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledColumn width=&quot;10%&quot;&gt;{item.points}&lt;/StyledColumn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledColumn width=&quot;10%&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;StyledButtonSmall</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={() =&gt; onRemoveItem(item)}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dismiss</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/StyledButtonSmall&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/StyledColumn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/StyledItem&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u7075\u6D3B\u7684 <code>width</code> prop \u53EF\u4F5C\u4E3A\u5185\u8054\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u5728\u6837\u5F0F\u7EC4\u4EF6\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u8BBF\u95EE\u3002\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u5B57\u7B26\u4E32\u4F7F\u7528\uFF0C\u5E76\u4E14\u7531\u4E8E\u6211\u4EEC\u53EF\u4EE5\u7701\u7565\u7BAD\u5934\u51FD\u6570\u7684\u4E3B\u4F53\u5E76\u7ACB\u5373\u8FD4\u56DE\u7ED3\u679C\uFF0C\u6240\u4EE5\u5B83\u6210\u4E3A\u4E00\u4E2A\u7B80\u6D01\u7684\u5185\u8054\u51FD\u6570\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const StyledItem = styled.div\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding-bottom: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const StyledColumn = styled.span\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 0 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  white-space: nowrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">  white-space: nowrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  text-overflow: ellipsis;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  a {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: inherit;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  width: \${props =&gt; props.width};</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6837\u5F0F\u7EC4\u4EF6\u4E2D\u9ED8\u8BA4\u6709 CSS \u5D4C\u5957\u7B49\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5D4C\u5957\u7684\u5143\u7D20\u662F\u53EF\u4EE5\u8BBF\u95EE\u7684\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7528 <code>&amp;</code>CSS \u64CD\u4F5C\u7B26\u9009\u62E9\u5F53\u524D\u5143\u7D20\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const StyledButton = styled.button\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: all 0.1s ease-in;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: #ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5411\u5E93\u4E2D\u7684\u51FD\u6570\u4F20\u9012\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u6765\u521B\u5EFA\u4E00\u4E2A\u7279\u6B8A\u7684\u6837\u5F0F\u7EC4\u4EF6\u3002\u5B9A\u4E49\u7684\u6309\u94AE\u7EC4\u4EF6\u5C06\u4F1A\u4ECE\u4E4B\u524D\u5B9A\u4E49\u7684 StyledButton \u7EC4\u4EF6\u4E2D\u63A5\u6536\u6240\u6709\u7684\u57FA\u672C\u6837\u5F0F\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const StyledButtonSmall = styled(StyledButton)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const StyledButtonLarge = styled(StyledButton)\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const StyledSearchForm = styled.form\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px 0 20px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align-items: baseline;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u50CF StyledSearchForm \u8FD9\u6837\u7684\u6837\u5F0F\u7EC4\u4EF6\u65F6\uFF0C\u5B83\u7684\u5E95\u5C42\u5143\u7D20(<code>form</code>, <code>button</code>)\u88AB\u7528\u4E8E\u771F\u6B63\u7684 HTML \u8F93\u51FA\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u90A3\u91CC\u7EE7\u7EED\u4F7F\u7528\u539F\u751F\u7684 HTML \u5C5E\u6027\uFF08<code>onSubmit</code>\u3001<code>type</code>\u3001<code>disabled</code>\uFF09\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const SearchForm = ({ ... }) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;StyledSearchForm onSubmit={onSearchSubmit}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;InputWithLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">      id=&quot;search&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      value={searchTerm}</span></span>
<span class="line"><span style="color:#A6ACCD;">      isFocused</span></span>
<span class="line"><span style="color:#A6ACCD;">      onInputChange={onSearchInput}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;strong&gt;Search:&lt;/strong&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/InputWithLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;StyledButtonLarge type=&quot;submit&quot; disabled={!searchTerm}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      Submit</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/StyledButtonLarge&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/StyledSearchForm&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6700\u540E\uFF0CInputWithLabel \u7EC4\u4EF6\u7528\u5176\u5C1A\u672A\u5B9A\u4E49\u7684\u6837\u5F0F\u7EC4\u4EF6\u88C5\u9970\u4E00\u4E0B\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const InputWithLabel = ({ ... }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;StyledLabel htmlFor={id}&gt;{children}&lt;/StyledLabel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &amp;nbsp;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;StyledInput</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        ref={inputRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">        id={id}</span></span>
<span class="line"><span style="color:#A6ACCD;">        type={type}</span></span>
<span class="line"><span style="color:#A6ACCD;">        value={value}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onChange={onInputChange}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u800C\u4E0E\u4E4B\u76F8\u5339\u914D\u7684\u6837\u5F0F\u5316\u7EC4\u4EF6\u4E5F\u88AB\u5B9A\u4E49\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const StyledLabel = styled.label\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-top: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-left: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding-left: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const StyledInput = styled.input\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  border: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border-bottom: 1px solid #171212;</span></span>
<span class="line"><span style="color:#A6ACCD;">  background-color: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5E26\u6709\u6837\u5F0F\u5316\u7EC4\u4EF6\u7684 CSS-in-JS \u5C06\u5B9A\u4E49\u6837\u5F0F\u7684\u91CD\u70B9\u8F6C\u79FB\u5230\u5B9E\u9645\u7684 React \u7EC4\u4EF6\u4E0A\u3002Styled Components \u662F\u4F5C\u4E3A React \u7EC4\u4EF6\u5B9A\u4E49\u7684\u6837\u5F0F\uFF0C\u6CA1\u6709\u4E2D\u95F4\u7684 CSS \u6587\u4EF6\u3002\u5982\u679C\u4E00\u4E2A\u6837\u5F0F\u7EC4\u4EF6\u6CA1\u6709\u5728 JavaScript \u4E2D\u4F7F\u7528\uFF0C\u4F60\u7684 IDE \u6216\u7F16\u8F91\u5668\u4F1A\u544A\u8BC9\u4F60\u3002\u6837\u5F0F\u5316\u7EC4\u4EF6\u88AB\u6253\u5305\u5728 JavaScript \u6587\u4EF6\u4E2D\u7684\u5176\u4ED6 JavaScript \u8D44\u6E90\u4E2D\uFF0C\u7528\u4E8E\u51C6\u5907\u90E8\u7F72\u5728\u751F\u4EA7\u73AF\u5883\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u3002\u5728\u4F7F\u7528 CSS-in-JS \u7B56\u7565\u65F6\uFF0C\u6CA1\u6709\u989D\u5916\u7684 CSS \u6587\u4EF6\uFF0C\u53EA\u6709 JavaScript\u3002CSS-in-JS \u548C CSS-in-CSS \u8FD9\u4E24\u79CD\u7B56\u7565\u53CA\u5176\u65B9\u6CD5\uFF08\u5982\uFF1AStyled Components \u548C CSS Modules\uFF09\u5728 React \u5F00\u53D1\u4EBA\u5458\u4E2D\u5F88\u53D7\u6B22\u8FCE\u3002\u9009\u62E9\u4F7F\u7528\u6700\u9002\u5408\u4F60\u548C\u4F60\u7684\u56E2\u961F\u7684\u65B9\u6CD5\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5 <a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Styled-Components-in-React" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a></li><li>\u786E\u8BA4 <a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/react-modern-final...hs/Styled-Components-in-React?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a></li><li>\u4E86\u89E3\u66F4\u591A <a href="https://www.robinwieruch.de/react-styled-components" target="_blank" rel="noreferrer">React \u4E2D\u7684\u6837\u5F0F\u7EC4\u4EF6</a>\uFF1A <ul><li>\u5F53\u4F7F\u7528 Styled Components \u65F6\uFF0C\u901A\u5E38\u6CA1\u6709 <em>src/index.css</em> \u6587\u4EF6\u7528\u4E8E\u5168\u5C40\u6837\u5F0F\u3002\u4E86\u89E3\u5982\u4F55\u5728\u4F7F\u7528 Styled Components \u65F6\u4F7F\u7528\u5168\u5C40\u6837\u5F0F\u3002</li></ul></li></ul>`,37),r=[e];function c(t,o,i,b,C,A){return n(),a("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
