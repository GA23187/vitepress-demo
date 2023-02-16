import{_ as s,o as n,c as a,a as e}from"./app.b476fd3b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u547D\u4EE4\u5F0F\u7684 React","slug":"\u547D\u4EE4\u5F0F\u7684-react","link":"#\u547D\u4EE4\u5F0F\u7684-react","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-legacy/imperative-react.md","lastUpdated":1676558697000}'),l={name:"road-to-react-chinese/react-legacy/imperative-react.md"},p=e(`<h2 id="\u547D\u4EE4\u5F0F\u7684-react" tabindex="-1">\u547D\u4EE4\u5F0F\u7684 React <a class="header-anchor" href="#\u547D\u4EE4\u5F0F\u7684-react" aria-hidden="true">#</a></h2><p>\u5728 React \u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0CReact \u7684 useRef Hook \u4E3B\u8981\u7528\u4E8E\u547D\u4EE4\u5F0F\u7F16\u7A0B\u3002\u5728 React \u7684\u5386\u53F2\u4E0A\uFF0C<em>ref</em> \u53CA\u5176\u7528\u6CD5\u6709\u51E0\u4E2A\u7248\u672C\uFF1A</p><ul><li>String Refs (\u5DF2\u5F03\u7528)</li><li>Callback Refs</li><li>createRef Refs (\u7C7B\u7EC4\u4EF6\u4E13\u5C5E)</li><li>useRef Hook Refs (\u51FD\u6570\u5F0F\u7EC4\u4EF6\u4E13\u5C5E)</li></ul><p>\u6700\u8FD1\uFF0CReact \u56E2\u961F\u5F15\u5165\u4E86<strong>React \u7684 createRef</strong>\uFF0C\u4F5C\u4E3A\u6700\u65B0\u7684\u76F8\u5F53\u4E8E\u51FD\u6570\u7EC4\u4EF6\u7684 useRef \u94A9\u5B50\uFF1A</p><p title="Code Playground,lang=&quot;javascript&quot;"></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class InputWithLabel extends React.Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super(props);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.inputRef = React.createRef();</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.props.isFocused) {</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.inputRef.current.focus();</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-start-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          ref={this.inputRef}</span></span>
<span class="line"><span style="color:#A6ACCD;"># leanpub-end-insert</span></span>
<span class="line"><span style="color:#A6ACCD;">          id={id}</span></span>
<span class="line"><span style="color:#A6ACCD;">          type={type}</span></span>
<span class="line"><span style="color:#A6ACCD;">          value={value}</span></span>
<span class="line"><span style="color:#A6ACCD;">          onChange={onInputChange}</span></span>
<span class="line"><span style="color:#A6ACCD;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u901A\u8FC7\u5DE5\u5177\u51FD\u6570\uFF0C\u5728\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u521B\u5EFA <code>ref</code>\uFF0C\u5728 JSX \u4E2D\u5E94\u7528 <code>ref</code>\uFF0C\u8FD9\u91CC\u7528\u5728\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E2D\u4F7F\u7528\u3002<code>ref</code> \u4E5F\u53EF\u4EE5\u7528\u5728\u5176\u4ED6\u5730\u65B9\uFF0C\u6BD4\u5982\u5C06\u8F93\u5165\u5B57\u6BB5\u805A\u7126\u5728\u6309\u94AE\u70B9\u51FB\u4E0A\u3002</p><p>\u5728 React \u7684\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528 createRef\uFF0C\u800C\u5728 React \u7684\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5219\u4F7F\u7528 React \u7684 useRef Hook\u3002\u968F\u7740 React \u5411\u51FD\u6570\u7EC4\u4EF6\u7684\u8F6C\u53D8\uFF0C\u5982\u4ECA\u5176\u901A\u5E38\u7684\u505A\u6CD5\u662F\u4E13\u95E8\u4F7F\u7528 useRef \u94A9\u5B50\u6765\u7BA1\u7406 refs\uFF0C\u5E76\u5E94\u7528\u547D\u4EE4\u5F0F\u7F16\u7A0B\u539F\u5219\u3002</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u4E86\u89E3\u66F4\u591A <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank" rel="noreferrer">React \u4E2D\u4E0D\u540C\u7684 Ref \u6280\u672F</a>\u3002</li></ul>`,10),r=[p];function c(t,i,o,b,u,C){return n(),a("div",null,r)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
