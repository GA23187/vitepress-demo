import{_ as s,o as n,c as a,a as e}from"./app.ee052c02.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0D\u5408\u7406\u7684\u72B6\u6001","slug":"\u4E0D\u5408\u7406\u7684\u72B6\u6001","link":"#\u4E0D\u5408\u7406\u7684\u72B6\u6001","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/impossible-state.md","lastUpdated":1676383400000}'),p={name:"road-to-react-chinese/react-modern/impossible-state.md"},l=e(`<h2 id="\u4E0D\u5408\u7406\u7684\u72B6\u6001" tabindex="-1">\u4E0D\u5408\u7406\u7684\u72B6\u6001 <a class="header-anchor" href="#\u4E0D\u5408\u7406\u7684\u72B6\u6001" aria-hidden="true">#</a></h2><p>\u53EF\u80FD\u4F60\u5DF2\u7ECF\u6CE8\u610F\u5230\u4E86\u5728 App \u7EC4\u4EF6\u91CC\u6BCF\u4E2A state \u4E4B\u95F4\u662F\u6CA1\u6709\u5173\u8054\u7684\uFF0C\u867D\u7136\u770B\u8D77\u6765\u597D\u50CF\u5E94\u8BE5\u662F\u5C5E\u4E8E\u4E00\u8D77\u7684\uFF0C\u56E0\u4E3A\u90FD\u4F7F\u7528\u4E86 <code>useState</code> hook \u7684\u7F18\u6545\u3002\u6280\u672F\u4E0A\u6765\u8BB2\uFF0C\u6240\u6709\u548C\u5F02\u6B65\u6570\u636E\u76F8\u5173\u7684 state \u5E94\u8BE5\u662F\u7EDF\u4E00\u7684\uFF0C\u4E0D\u4EC5\u4EC5\u662F stories \u4F5C\u4E3A\u5B9E\u9645\u7684\u6570\u636E\uFF0C\u8FD8\u5E94\u5305\u62EC\u5B83\u7684\u52A0\u8F7D\u548C\u9519\u8BEF\u72B6\u6001\u3002</p><p>\u5728\u4E00\u4E2A React \u7EC4\u4EF6\u4E2D\u51FA\u73B0\u591A\u4E2A <code>useState</code> \u672C\u8EAB\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u8981\u8B66\u60D5\u8FDE\u7EED\u4F7F\u7528 state \u66F4\u65B0\u51FD\u6570\u3002\u8FD9\u4E9B\u6761\u4EF6\u72B6\u6001\u53EF\u80FD\u4F1A\u5BFC\u81F4<strong>\u4E0D\u5408\u7406\u7684\u72B6\u6001</strong>\uFF0C\u4EE5\u53CA\u5728 UI \u4E0A\u610F\u60F3\u4E0D\u5230\u7684\u884C\u4E3A\u3002\u6211\u4EEC\u8BD5\u7740\u628A\u4F2A\u6570\u636E\u83B7\u53D6\u51FD\u6570\u6539\u6210\u4E0B\u9762\u8FD9\u6837\uFF0C\u6765\u6A21\u62DF\u9519\u8BEF\u5904\u7406\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const getAsyncStories = () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  new Promise((resolve, reject) =&gt; setTimeout(reject, 2000));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0D\u5408\u7406\u7684\u72B6\u6001\u4F1A\u51FA\u73B0\u5728\u83B7\u53D6\u5F02\u6B65\u6570\u636E\u51FA\u9519\u7684\u65F6\u5019\u3002\u4FDD\u5B58 error \u7684 state \u66F4\u65B0\u4E86\uFF0C\u4F46\u6807\u8BC6 loading \u7684 state \u6CA1\u88AB\u53D6\u6D88\u3002\u5728 UI \u4E0A\uFF0C\u8FD9\u4F1A\u8BA9\u7528\u6237\u540C\u65F6\u770B\u5230\u65E0\u4F11\u6B62\u7684 loading \u6807\u8BC6\u548C\u4E00\u6761\u9519\u8BEF\u4FE1\u606F\uFF1B\u6BD4\u8F83\u597D\u7684\u5904\u7406\u65B9\u5F0F\u5E94\u8BE5\u53EA\u7ED9\u7528\u6237\u5C55\u793A\u9519\u8BEF\u4FE1\u606F\uFF0C\u9690\u85CF loading \u6807\u8BC6\u3002\u4E0D\u5408\u7406\u7684\u72B6\u6001\u5F88\u96BE\u5B9A\u4F4D\u5230\uFF0C\u5374\u7ECF\u5E38\u5F15\u53D1 UI \u4E0A\u7684\u95EE\u9898\uFF0C\u8FD9\u4E5F\u662F\u5B83\u81ED\u540D\u8FDC\u626C\u7684\u539F\u56E0\u3002</p><p>\u6240\u5E78\u7684\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u628A\u5206\u6563\u5728\u591A\u4E2A <code>useState</code> \u548C <code>useReducer</code> \u91CC\u4F46\u662F\u540C\u5C5E\u4E00\u4F53\u7684\u72B6\u6001\uFF0C\u632A\u5230\u4E00\u4E2A <code>useReducer</code> hook \u91CC\uFF0C\u6765\u51CF\u5C11\u51FA\u9519\u7684\u673A\u7387\u3002\u627E\u5230\u4E0B\u9762\u8FD9\u4E9B <code>useState</code> hooks\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, dispatchStories] = React.useReducer(</span></span>
<span class="line"><span style="color:#A6ACCD;">    storiesReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">    []</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [isLoading, setIsLoading] = React.useState(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [isError, setIsError] = React.useState(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u628A\u5B83\u4EEC\u5408\u5E76\u5230\u4E00\u4E2A <code>useReducer</code> hook \u91CC\uFF0C\u7528\u4E00\u4E2A\u66F4\u590D\u6742\u7684 state \u5BF9\u8C61\uFF0C\u4F5C\u4E3A\u7EDF\u4E00\u7BA1\u7406 state \u7684\u65B9\u5F0F\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, dispatchStories] = React.useReducer(</span></span>
<span class="line"><span style="color:#A6ACCD;">    storiesReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    { data: [], isLoading: false, isError: false }</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6240\u6709\u548C\u5F02\u6B65\u6570\u636E\u8BFB\u53D6\u76F8\u5173\u7684\u64CD\u4F5C\u5FC5\u987B\u901A\u8FC7\u8FD9\u4E2A\u65B0\u7684 dispatch \u51FD\u6570\u6765\u66F4\u65B0 state\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, dispatchStories] = React.useReducer(</span></span>
<span class="line"><span style="color:#A6ACCD;">    storiesReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">    { data: [], isLoading: false, isError: false }</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  React.useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatchStories({ type: &#39;STORIES_FETCH_INIT&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    getAsyncStories()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;STORIES_FETCH_SUCCESS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          payload: result.data.stories,</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch(() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        dispatchStories({ type: &#39;STORIES_FETCH_FAILURE&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u56E0\u4E3A\u8FD9\u91CC\u5F15\u5165\u4E86\u65B0\u7684\u7C7B\u578B\u6765\u8F6C\u6362 state\uFF0C\u6240\u4EE5\u5728 <code>storiesReducer</code> \u91CC\u9700\u8981\u5904\u7406\u5B83\u4EEC\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const storiesReducer = (state, action) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_INIT&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isLoading: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isError: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_SUCCESS&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isLoading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isError: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: action.payload,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;STORIES_FETCH_FAILURE&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isLoading: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isError: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;REMOVE_STORY&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state,</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: state.data.filter(</span></span>
<span class="line"><span style="color:#A6ACCD;">          story =&gt; action.payload.objectID !== story.objectID</span></span>
<span class="line"><span style="color:#A6ACCD;">        ),</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6BCF\u6B21 state \u8F6C\u6362\uFF0C\u90FD\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 state \u5BF9\u8C61\uFF0C\u5305\u542B\u6240\u6709\u5F53\u524D state \u5BF9\u8C61\u91CC\u7684\u952E\u503C\u5BF9\uFF08\u4F7F\u7528 JavaScript \u7684\u5C55\u5F00\u8FD0\u7B97\u7B26\uFF09\uFF0C\u518D\u7528\u65B0\u7684\u5C5E\u6027\u8986\u76D6\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C<code>STORIES_FETCH_FAILURE</code> \u91CD\u7F6E\u4E86 <code>isLoading</code>\u3001\u5E76\u8BBE\u7F6E\u4E86 <code>isError</code> \u5E03\u5C14\u6807\u8BC6\uFF0C\u4F46\u4FDD\u7559\u4E86\u5176\u4ED6\u7684 state\uFF0C\u4F8B\u5982 <code>stories</code>\u3002\u8FD9\u5C31\u662F\u5982\u4F55\u7ED5\u8FC7\u4E4B\u524D\u53EF\u80FD\u4F1A\u51FA\u73B0\u7684\u95EE\u9898\uFF1A\u5982\u679C\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u5E94\u8BE5\u53D6\u6D88\u52A0\u8F7D\u72B6\u6001\u3002</p><p>\u4E5F\u8BF7\u4ED4\u7EC6\u89C2\u5BDF <code>REMOVE_STORY</code> action \u7684\u53D8\u5316\u3002\u5B83\u9700\u8981\u64CD\u4F5C\u7684\u662F <code>state.data</code>\uFF0C\u800C\u4E0D\u518D\u662F\u4E00\u4E2A\u7B80\u5355\u7684 <code>state</code>\u3002\u73B0\u5728\u7684 state \u662F\u4E00\u4E2A\u590D\u6742\u7684\u5BF9\u8C61\uFF0C\u91CC\u9762\u6709 data\u3001loading \u548C error \u72B6\u6001\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A\u5355\u7EAF\u7684 stories \u5217\u8868\u3002\u5728\u5176\u4F59\u7684\u4EE3\u7801\u91CC\u4E5F\u9700\u8981\u89E3\u51B3\u8FD9\u4E2A\u53D8\u5316\u4EA7\u751F\u7684\u5F71\u54CD\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const [stories, dispatchStories] = React.useReducer(</span></span>
<span class="line"><span style="color:#A6ACCD;">    storiesReducer,</span></span>
<span class="line"><span style="color:#A6ACCD;">    { data: [], isLoading: false, isError: false }</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  const searchedStories = stories.data.filter(story =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    story.title.toLowerCase().includes(searchTerm.toLowerCase())</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isError &amp;&amp; &lt;p&gt;Something went wrong ...&lt;/p&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      {stories.isLoading ? (</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;Loading ...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;List</span></span>
<span class="line"><span style="color:#A6ACCD;">          list={searchedStories}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onRemoveItem={handleRemoveStory}</span></span>
<span class="line"><span style="color:#A6ACCD;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u518D\u8BD5\u7740\u7528\u629B\u9519\u7684\u6570\u636E\u83B7\u53D6\u51FD\u6570\uFF0C\u68C0\u67E5\u662F\u5426\u6240\u6709\u529F\u80FD\u90FD\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF1A</p><p title="src/App.js,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const getAsyncStories = () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  new Promise((resolve, reject) =&gt; setTimeout(reject, 2000));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6211\u4EEC\u4ECE\u591A\u4E2A <code>useState</code> \u5E26\u6765\u7684\u4E0D\u53EF\u9760\u7684 state \u8F6C\u6362\u8131\u79BB\u51FA\u6765\uFF0C\u8F6C\u800C\u4F7F\u7528 React \u7684 <code>useReducer</code> hook \u6765\u5B9E\u73B0\u53EF\u9884\u89C1\u7684 state \u8F6C\u6362\u3002\u8FD9\u4E2A\u7528 reducer \u7BA1\u7406\u7684 state \u5BF9\u8C61\u56CA\u62EC\u4E86\u6240\u6709\u5173\u4E8E stories \u7684\u6570\u636E\uFF0C\u5305\u62EC\u52A0\u8F7D\u4E2D\u548C\u9519\u8BEF\u72B6\u6001\uFF0C\u4E5F\u5B9E\u73B0\u4E86\u5982\u4F55\u4ECE stories \u5217\u8868\u4E2D\u5220\u9664\u7279\u5B9A story \u8FD9\u6837\u7684\u529F\u80FD\u3002\u6211\u4EEC\u6CA1\u6709\u5B8C\u5168\u6446\u8131\u6389\u4E0D\u5408\u7406\u7684\u72B6\u6001\uFF0C\u56E0\u4E3A\u59CB\u7EC8\u90FD\u6709\u53EF\u80FD\u9057\u6F0F\u67D0\u4E2A\u5173\u952E\u7684\u5E03\u5C14\u503C\uFF0C\u4F46\u6211\u4EEC\u5411\u66F4\u53EF\u9884\u89C1\u7684\u72B6\u6001\u7BA1\u7406\u8FC8\u8FDB\u4E86\u4E00\u6B65\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5<a href="https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/React-Impossible-States" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u7684\u6E90\u7801</a>\u3002</li><li>\u786E\u8BA4<a href="https://github.com/the-road-to-learn-react/hacker-stories/compare/hs/React-Advanced-State...hs/React-Impossible-States?expand=1" target="_blank" rel="noreferrer">\u4E0A\u4E00\u8282\u4E4B\u540E\u7684\u53D8\u66F4</a>\u3002</li><li>\u9605\u8BFB\u6559\u7A0B\u91CC\u4E4B\u524D\u63D0\u5230\u7684\u5173\u4E8E JavaScript \u548C React \u4E2D\u7684 reducer \u7684\u7AE0\u8282\u3002</li><li>\u9605\u8BFB\u66F4\u591A\u5173\u4E8E<a href="https://www.robinwieruch.de/react-usereducer-vs-usestate" target="_blank" rel="noreferrer">\u8BE5\u5982\u4F55\u9009\u7528 useState \u548C useReducer</a> \u7684\u6587\u7AE0\u3002</li></ul>`,28),r=[l];function c(t,o,i,b,A,C){return n(),a("div",null,r)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
