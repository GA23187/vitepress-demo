import{_ as s,o as n,c as a,a as l}from"./app.8c924618.js";const m=JSON.parse('{"title":"Vue\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue\u5F00\u53D1","slug":"vue\u5F00\u53D1","link":"#vue\u5F00\u53D1","children":[]},{"level":2,"title":"Vue\u4EE3\u7801\u7247\u6BB5","slug":"vue\u4EE3\u7801\u7247\u6BB5","link":"#vue\u4EE3\u7801\u7247\u6BB5","children":[]},{"level":2,"title":"Tips\u96C6\u9526","slug":"tips\u96C6\u9526","link":"#tips\u96C6\u9526","children":[]}],"relativePath":"front-spec/vue/index.md","lastUpdated":1663696705000}'),p={name:"front-spec/vue/index.md"},e=l(`<h1 id="vue\u89C4\u8303" tabindex="-1">Vue\u89C4\u8303 <a class="header-anchor" href="#vue\u89C4\u8303" aria-hidden="true">#</a></h1><h2 id="vue\u5F00\u53D1" tabindex="-1">Vue\u5F00\u53D1 <a class="header-anchor" href="#vue\u5F00\u53D1" aria-hidden="true">#</a></h2><p>Vue\u6587\u4EF6\u7F16\u7801\u89C4\u8303\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;!-- \u5F15\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5927\u9A7C\u5CF0\u547D\u540D\u65B9\u5F0F --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;MyComponent @my-event=&quot;onClick&quot;&gt;&lt;/MyComponent&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;!-- \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5B9A\u4E49\u548C\u4F7F\u7528\u90FD\u91C7\u7528\u77ED\u6A2A\u7EBF\u5F62\u5F0F --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6CE8\u610F\uFF1A\u4E0D\u5EFA\u8BAE\u5728export default\u5916\u9762\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5404\u65B9\u6CD5\u51FD\u6570\u7684\u5B9A\u4E49\u4F4D\u7F6E\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&quot;MainComponent&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      MyComponent:()=&gt;import(&#39;@/components/Card.vue&#39;) //\u91C7\u7528\u8DEF\u7531\u61D2\u52A0\u8F7D,vue-router\u8DEF\u7531\u7684\u914D\u7F6E\u4E5F\u914D\u7F6E\u61D2\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u5B9A\u4E49\u91C7\u7528\u5C0F\u9A7C\u5CF0,\u4F7F\u7528\u91C7\u7528\u77ED\u6A2A\u7EBF</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u4F7F\u7528\u65B9\u5F0F\`\`\`&lt;MainComponent :data-type=&quot;xx&quot;&gt;&lt;/MainComponent&gt;\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      dataType: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: String, //\u53EF\u901A\u8FC7\u6570\u7EC4\u5B9A\u4E49\u591A\u79CD\u7C7B\u578B\uFF0C[String,Boolean]</span></span>
<span class="line"><span style="color:#A6ACCD;">        required: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        validator: function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [&#39;List&#39;, &#39;Array&#39;,&#39;Null&#39;].indexOf(value) !== -1; //\u81EA\u5B9A\u4E49\u6821\u9A8C\u5C5E\u6027\u503C\u662F\u5426\u6B63\u786E </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u6B64\u5904\u5B9A\u4E49\u79C1\u6709\u53D8\u91CF\u4E0D\u4F1A\u88AB\u76D1\u542C\uFF0C\u63D0\u9AD8\u6027\u80FD\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u5B9A\u4E49\u79C1\u6709\u53D8\u91CF\u5EFA\u8BAE\u6DFB\u52A0\u4E0B\u5212\u7EBF_\u524D\u7F00</span></span>
<span class="line"><span style="color:#A6ACCD;">        this._pageSize=10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">          firstName:null,</span></span>
<span class="line"><span style="color:#A6ACCD;">          lastName:null</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      fullName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">          return  this.firstName||&#39;&#39; + this.lastName||&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*----Vue\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\uFF0C\u6309\u5468\u671F\u987A\u5E8F\u6392\u5217----*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u9875\u9762\u521D\u59CB\u5316\uFF0C\u6570\u636E\u8BF7\u6C42\u5728\u6B64\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mounted() {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforDestory(){},</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*------------------------------------------*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      async init(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u521D\u59CB\u5316\u8BF7\u6C42\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">        const res=await api.getData(params);</span></span>
<span class="line"><span style="color:#A6ACCD;">        //1.\u901A\u8FC7\u53EF\u9009\u94FE\u5224\u65AD\u8FD4\u56DE\u7ED3\u679C\u662F\u5426\u4E3A\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">        //2.\u901A\u8FC7||\u8D4B\u503C\u53EF\u80FD\u4E3A\u7A7A\u7684\u5C5E\u6027\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.firstName=res?.firstName||&#39;&#39;; </span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      fullName(newVal,oldVal){}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped lang=&quot;stylus&quot;&gt;&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><ul><li>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u8BE6\u7EC6\u53EF\u67E5\u770BVue\u5B98\u7F51 <a href="https://cn.vuejs.org/v2/guide/components-custom-events.html#ad" target="_blank" rel="noreferrer">\u81EA\u5B9A\u4E49\u4E8B\u4EF6open in new window</a></li></ul><h2 id="vue\u4EE3\u7801\u7247\u6BB5" tabindex="-1">Vue\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#vue\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h2><p>\u53EF\u901A\u8FC7\u81EA\u5B9A\u4E49VS Code\u7684\u201C\u7528\u6237\u7247\u6BB5\u201D\uFF0C\u5728\u65B0\u5EFAVue\u6587\u4EF6\u5185\u8F93\u5165\u201Cvue\u201D\u53EF\u5FEB\u901F\u751F\u6210Vue\u6A21\u677F\uFF0C\u907F\u514D\u81EA\u5DF1\u624B\u52A8\u6DFB\u52A0created\uFF0Cmethods\u7B49\u4EE3\u7801\u3002<br> VS Code\u8BBE\u7F6E\uFF1A<strong>\u6587\u4EF6-&gt;\u9996\u9009\u9879-&gt;\u7528\u6237\u7247\u6BB5-&gt;\u641C\u7D22\u680F\u8F93\u5165vue.json</strong>\uFF0C\u7F16\u8F91\u66FF\u6362\u5982\u4E0B\u4EE3\u7801\u7247\u6BB5\u5373\u53EF\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;Print to Vue&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;prefix&quot;: &quot;vue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;body&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;&lt;template&gt;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    &lt;div&gt;\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    &lt;/div&gt;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;&lt;/template&gt;\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;&lt;script&gt;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;export default {&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    data() {&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;        return {&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;          \${1}&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;        };&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    },&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    created() {\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    },&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    mounted() {\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    },&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    methods: {\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;    }&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;};&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;&lt;/script&gt;\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;&lt;style scoped lang=\\&quot;scss\\&quot;&gt;\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;&lt;/style&gt;\\n&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		],</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;description&quot;: &quot;Create vue template&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="tips\u96C6\u9526" tabindex="-1">Tips\u96C6\u9526 <a class="header-anchor" href="#tips\u96C6\u9526" aria-hidden="true">#</a></h2><ol><li><p>v-model.trim=&quot;&quot;</p></li><li><p>\u52A8\u6001form\u8868\u5355\u7684\u7ED1\u5B9A<br> \u4EE5\u4E0Bprop\u7ED1\u5B9A\u65B9\u5F0F\u53EF\u4EE5\u5BF9\u52A8\u6001\u6570\u7EC4\u8FDB\u884Crule\u6821\u9A8C<br> \u5FC5\u987B\u662FformData\u4E0B\u9762\u589E\u52A0\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF08\u5982list)</p></li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;el-form :model=&quot;formData&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;el-form-item</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-for=&quot;(item, index) in formData.list&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :label=&quot;&#39;\u9009\u9879&#39; + (index + 1)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :prop=&quot;&#39;list.&#39; + index + &#39;.value&#39;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-input v-model.trim=&quot;item.value&quot; type=&quot;text&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/el-form-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/el-form&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u53C2\u8003\u6216\u5F15\u7528" tabindex="-1">\u53C2\u8003\u6216\u5F15\u7528 <a class="header-anchor" href="#\u53C2\u8003\u6216\u5F15\u7528" aria-hidden="true">#</a></h4><ul><li><a href="https://juejin.cn/post/6987349513836953607" target="_blank" rel="noreferrer">\u53F2\u4E0A\u6700\u5168 Vue \u524D\u7AEF\u4EE3\u7801\u98CE\u683C\u6307\u5357open in new window</a></li></ul>`,13),t=[e];function r(o,c,i,u,b,C){return n(),a("div",null,t)}const y=s(p,[["render",r]]);export{m as __pageData,y as default};
