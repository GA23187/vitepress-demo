import{_ as s,o as n,c as a,a as l}from"./app.436197f7.js";const m=JSON.parse('{"title":"\u90A3\u4E9B\u5E74\u5E38\u8003\u7684\u524D\u7AEF\u7B97\u6CD5\uFF08\u4E2D\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"v8 sort \u6392\u5E8F\u7684\u5965\u79D8\u548C\u6F14\u8FDB","slug":"v8-sort-\u6392\u5E8F\u7684\u5965\u79D8\u548C\u6F14\u8FDB","link":"#v8-sort-\u6392\u5E8F\u7684\u5965\u79D8\u548C\u6F14\u8FDB","children":[]},{"level":2,"title":"\u5FEB\u6392\u548C\u63D2\u5165\u6392\u5E8F","slug":"\u5FEB\u6392\u548C\u63D2\u5165\u6392\u5E8F","link":"#\u5FEB\u6392\u548C\u63D2\u5165\u6392\u5E8F","children":[{"level":3,"title":"\u5FEB\u901F\u6392\u5E8F","slug":"\u5FEB\u901F\u6392\u5E8F","link":"#\u5FEB\u901F\u6392\u5E8F","children":[]},{"level":3,"title":"\u63D2\u5165\u6392\u5E8F","slug":"\u63D2\u5165\u6392\u5E8F","link":"#\u63D2\u5165\u6392\u5E8F","children":[]}]},{"level":2,"title":"\u6392\u5E8F\u7684\u7A33\u5B9A\u6027","slug":"\u6392\u5E8F\u7684\u7A33\u5B9A\u6027","link":"#\u6392\u5E8F\u7684\u7A33\u5B9A\u6027","children":[]},{"level":2,"title":"Timsort \u5B9E\u73B0","slug":"timsort-\u5B9E\u73B0","link":"#timsort-\u5B9E\u73B0","children":[]},{"level":2,"title":"\u5B9E\u6218\u4F8B\u9898","slug":"\u5B9E\u6218\u4F8B\u9898","link":"#\u5B9E\u6218\u4F8B\u9898","children":[{"level":3,"title":"\u4EA4\u6362\u661F\u53F7","slug":"\u4EA4\u6362\u661F\u53F7","link":"#\u4EA4\u6362\u661F\u53F7","children":[]},{"level":3,"title":"Longest Substring Without Repeating Characters","slug":"longest-substring-without-repeating-characters","link":"#longest-substring-without-repeating-characters","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"advanced-core-knowledage-front-end/bian-cheng-si-wei-he-suan-fa/042-na-xie-nian-chang-kao-de-qian-duan-suan-fa-zhong.md","lastUpdated":1677316569000}'),p={name:"advanced-core-knowledage-front-end/bian-cheng-si-wei-he-suan-fa/042-na-xie-nian-chang-kao-de-qian-duan-suan-fa-zhong.md"},e=l(`<h1 id="\u90A3\u4E9B\u5E74\u5E38\u8003\u7684\u524D\u7AEF\u7B97\u6CD5\uFF08\u4E2D\uFF09" tabindex="-1">\u90A3\u4E9B\u5E74\u5E38\u8003\u7684\u524D\u7AEF\u7B97\u6CD5\uFF08\u4E2D\uFF09 <a class="header-anchor" href="#\u90A3\u4E9B\u5E74\u5E38\u8003\u7684\u524D\u7AEF\u7B97\u6CD5\uFF08\u4E2D\uFF09" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8BB2\u6211\u4EEC\u5256\u6790\u4E86\u7B97\u6CD5\u7684\u4E00\u4E9B\u57FA\u672C\u6982\u5FF5\u3002\u8FD9\u4E00\u8BB2\u5C06\u56F4\u7ED5 v8 \u5F15\u7533\u51FA\u7684\u7B97\u6CD5\u8FDB\u884C\u5206\u6790\uFF0C\u540C\u65F6\u505A\u4E00\u4E9B\u5E38\u89C1\u3001\u5178\u578B\u8003\u9898\u3002\u4E3B\u8981\u5185\u5BB9\u5982\u4E0B\uFF1A</p><p><img src="https://images.gitbook.cn/a80ed7e0-d827-11e9-a98d-91914e1a8fb9" alt="enter image description here"></p><h2 id="v8-sort-\u6392\u5E8F\u7684\u5965\u79D8\u548C\u6F14\u8FDB" tabindex="-1">v8 sort \u6392\u5E8F\u7684\u5965\u79D8\u548C\u6F14\u8FDB <a class="header-anchor" href="#v8-sort-\u6392\u5E8F\u7684\u5965\u79D8\u548C\u6F14\u8FDB" aria-hidden="true">#</a></h2><p>\u524D\u4E00\u8BB2\uFF0C\u6211\u5E26\u5927\u5BB6\u5206\u6790\u4E86\u201C\u5982\u4F55\u5C06\u4E00\u4E2A JavaScript \u6570\u7EC4\u6253\u4E71\u987A\u5E8F\uFF1F\u201D\uFF0C\u5176\u4E2D\u63D0\u5230\u4E86 sort \u8FD9\u4E2A API\uFF0C\u5177\u4F53\u6709\u8FD9\u6837\u7684\u4E00\u6BB5\u63CF\u8FF0\uFF1A</p><blockquote><p>v8 \u5728\u5904\u7406 sort \u65B9\u6CD5\u65F6\uFF0C\u4F7F\u7528\u4E86\u63D2\u5165\u6392\u5E8F\u548C\u5FEB\u6392\u4E24\u79CD\u65B9\u6848\u3002\u5F53\u76EE\u6807\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E 10\uFF08\u4E0D\u540C\u7248\u672C\u6709\u5DEE\u522B\uFF09\u65F6\uFF0C\u4F7F\u7528\u63D2\u5165\u6392\u5E8F\uFF1B\u53CD\u4E4B\uFF0C\u4F7F\u7528\u5FEB\u6392\u3002</p></blockquote><p>\u5982\u679C\u7EC6\u5FC3\u7684\u8BFB\u8005\u53EF\u80FD\u4F1A\u5230 v8 \u6E90\u4EE3\u7801\u4E2D\u627E\u5BFB\u76F8\u5173\u7684\u7B97\u6CD5\u903B\u8F91\uFF0C\u90A3\u4E48\u4F60\u4E00\u5B9A\u4F1A\u5927\u5931\u6240\u671B\u3002\u56E0\u4E3A\u6839\u672C\u627E\u4E0D\u5230 10 \u8FD9\u6837\u7684\u5E38\u91CF\uFF0C\u66F4\u6CA1\u6709\u63D2\u5165\u6392\u5E8F\u548C\u5FEB\u6392\u4E24\u79CD\u65B9\u6848\u7684\u5207\u6362\uFF0C\u751A\u81F3\u8FDE\u5B9E\u73B0\u7684\u9884\u8A00\u90FD\u4E0D\u662F JavaScript \u6216\u8005 C++\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u539F\u6765\uFF0C\u5728\u65B0\u7684 v8 \u7248\u672C\u4E2D\uFF08\u5177\u4F53 V8 6.9\uFF09\u5DF2\u7ECF\u4F7F\u7528\u4E86\u4E00\u79CD\u540D\u53EB Torque \u7684\u5F00\u53D1\u8BED\u8A00\u91CD\u6784\uFF0C\u5E76\u5728 7.0 \u6539\u8FDB\u4E86 sort \u7B97\u6CD5\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u73B0\u5728\u793E\u533A\u4E0A\u51E0\u4E4E\u6240\u6709\u7684 V8 \u6392\u5E8F\u6E90\u7801\u5206\u6790\u90FD\u5DF2\u7ECF\u8FC7\u65F6\u4E86\u3002</p><p>Torque \u662F v8 \u56E2\u961F\u4E13\u95E8\u4E3A\u4E86\u5F00\u53D1 v8 \u5F15\u64CE\u800C\u5F00\u53D1\u7684\u8BED\u8A00\uFF0C\u4ED6\u7684\u540E\u7F00\u540D\u662F tq\u3002\u4F5C\u4E3A\u4E00\u79CD\u9AD8\u7EA7\u8BED\u8A00\uFF0CTorque \u4F9D\u9760 CodeStubAssembler \u7F16\u8BD1\u5668\u6765\u8F6C\u6362\u4E3A\u6C47\u7F16\u4EE3\u7801\u3002</p><p>\u5728\u65B0\u7684\u7248\u672C\u4E2D\uFF0Cv8 \u4E5F\u91C7\u7528\u4E86\u4E00\u79CD\u540D\u53EB Timsort \u7684\u5168\u65B0\u7B97\u6CD5\uFF0C\u8FD9\u5957\u7B97\u6CD5\u6700\u5F00\u59CB\u4E8E 2002 \u88AB Tim Peters \u5728 Python \u8BED\u8A00\u4E2D\u4F7F\u7528\u3002</p><p>\u4ECE\u8FD9\u4E2A\u6F14\u8FDB\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5206\u4E3A\u4E09\u5927\u5757\u6765\u770B\u3002</p><h2 id="\u5FEB\u6392\u548C\u63D2\u5165\u6392\u5E8F" tabindex="-1">\u5FEB\u6392\u548C\u63D2\u5165\u6392\u5E8F <a class="header-anchor" href="#\u5FEB\u6392\u548C\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a></h2><p>\u6392\u5E8F\u7B97\u6CD5\u591A\u79CD\u591A\u6837\uFF0C\u793E\u533A\u4E0A\u7684\u5206\u6790\u4E5F\u6BD4\u8F83\u591A\u3002\u8FD9\u91CC\u6211\u4EEC\u6311\u9009 v8 sort \u6392\u5E8F\u4E2D\u201C\u9732\u8138\u201D\u7684\u5FEB\u901F\u6392\u5E8F\u548C\u63D2\u5165\u6392\u5E8F\u8FDB\u884C\u8BB2\u89E3\u3002</p><p>\u4E0D\u77E5\u9053\u8BFB\u8005\u662F\u5426\u6709\u8FD9\u6837\u7684\u56F0\u6270\uFF1A\u6211\u4EEC\u770B\u4E00\u904D\u7B97\u6CD5\uFF0C\u7406\u89E3\u4E86\uFF0C\u53EF\u662F\u8FC7\u4E24\u5929\u53C8\u5B8C\u5168\u8BB0\u4E0D\u5F97\u5177\u4F53\u8BB2\u4E86\u4EC0\u4E48\u3002\u9488\u5BF9\u4E8E\u6B64\uFF0C\u6211\u4EEC\u5E94\u8BE5\u7ED3\u5408\u7B97\u6CD5\u7684\u7279\u70B9\uFF0C\u52A0\u4EE5\u5E94\u7528\uFF0C\u624D\u80FD\u6DF1\u5165\u8BB0\u5FC6\u3002\u6392\u5E8F\u7B97\u6CD5\u540C\u6837\u5982\u6B64\uFF0C\u5BF9\u4E8E\u6BCF\u4E00\u79CD\u7B97\u6CD5\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5148\u8BB0\u4F4F\u5176\u601D\u60F3\uFF0C\u518D\u8BB0\u4F4F\u5176\u5B9E\u73B0\u3002\u4E0D\u8FC7\u8981\u77E5\u9053\uFF1A\u201C\u6392\u5E8F\u6CA1\u6709\u60F3\u8C61\u4E2D\u90A3\u4E48\u7B80\u5355\u201D\u3002</p><h3 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1">\u5FEB\u901F\u6392\u5E8F <a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a></h3><p><strong>\u5FEB\u901F\u6392\u5E8F\u7684\u7279\u70B9\u5C31\u662F\u5206\u6CBB</strong> \u3002\u5982\u4F55\u4F53\u73B0\u5206\u6CBB\u7B56\u7565\u5462\uFF1F\u6211\u4EEC\u9996\u5148\u5728\u6570\u7EC4\u4E2D\u9009\u53D6\u4E00\u4E2A\u57FA\u51C6\u70B9\uFF0C\u53EB\u505A pivot\uFF0C\u6839\u636E\u8FD9\u4E2A\u57FA\u51C6\u70B9\uFF1A\u628A\u6BD4\u57FA\u51C6\u70B9\u5C0F\u7684\u6570\u7EC4\u503C\u653E\u5728\u57FA\u51C6\u70B9\u5DE6\u8FB9\uFF0C\u628A\u6BD4\u57FA\u51C6\u70B9\u5927\u7684\u6570\u7EC4\u503C\u653E\u5728\u57FA\u51C6\u70B9\u53F3\u8FB9\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u57FA\u4E8E\u57FA\u51C6\u70B9\uFF0C\u5DE6\u8FB9\u5206\u533A\u7684\u503C\u90FD\u5C0F\u4E8E\u57FA\u51C6\u70B9\uFF0C\u53F3\u8FB9\u5206\u533A\u7684\u503C\u90FD\u5927\u4E8E\u57FA\u51C6\u70B9\uFF0C\u7136\u540E\u9488\u5BF9\u5DE6\u8FB9\u5206\u533A\u548C\u53F3\u8FB9\u5206\u533A\u8FDB\u884C\u540C\u6837\u7684\u64CD\u4F5C\uFF0C\u76F4\u5230\u6700\u540E\u6392\u5E8F\u5B8C\u6210\u3002</p><p>\u6700\u7B80\u5355\u7684\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const quickSort = array =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (array.length &lt; 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return array.slice()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u968F\u673A\u627E\u5230 pivot</span></span>
<span class="line"><span style="color:#A6ACCD;">  let pivot = array[Math.floor(Math.random() * array.length)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let left = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  let middle = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  let right = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; array.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var value = array[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value &lt; pivot) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      left.push(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value === pivot) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      middle.push(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value &gt; pivot) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      right.push(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9012\u5F52\u8FDB\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">  return quickSort(left).concat(middle, quickSort(right))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u8FD9\u79CD\u5B9E\u73B0\u65B9\u6CD5\u6709\u4E0D\u5C11\u4F18\u5316\u70B9\uFF0C\u5176\u4E2D\u4E4B\u4E00\u5C31\u662F\u6211\u4EEC\u53EF\u4EE5\u5728\u539F\u6570\u7EC4\u4E0A\u8FDB\u884C\u64CD\u4F5C\uFF0C\u800C\u4E0D\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const quickSort = (array, start, end) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  start = start === undefined ? 0 : start</span></span>
<span class="line"><span style="color:#A6ACCD;">  end = end === undefined ? arr.length - 1 : end;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (start &gt;= end) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let value = array[start]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let i = start</span></span>
<span class="line"><span style="color:#A6ACCD;">  let j = end</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  while (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u627E\u51FA\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u5C0F\u4E8E\u53C2\u7167\u6570\u7684\u4E0B\u6807\u5E76\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (i &lt; j &amp;&amp; array[j] &gt;= value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      j--</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr[i++] = arr[j]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u627E\u51FA\u5DE6\u8FB9\u7B2C\u4E00\u4E2A\u5927\u4E8E\u53C2\u7167\u6570\u7684\u4E0B\u6807\uFF0C\u5E76\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (i &lt; j &amp;&amp; array[i] &lt; value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      i++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr[j--] = arr[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  arr[i] = value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  quickSort(array, start, i - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  quickSort(array, i + 1, end)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u8C03\u7528\u65B9\u5F0F\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">let arr = [0, 12, 43, 45, 88, 1, 69]</span></span>
<span class="line"><span style="color:#A6ACCD;">quickSort(arr, 0, arr.length - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u8BE5\u5982\u4F55\u7406\u89E3 in place \u7684\u5FEB\u6392\u7B97\u6CD5\u5462\uFF1F</p><p>\u9996\u5148\u4F7F\u7528\u53CC\u6307\u9488\uFF0C\u6307\u9488\u5F00\u59CB\u904D\u5386\uFF0C\u5F53\u53F3\u8FB9\u53D1\u73B0\u4E00\u4E2A\u5C0F\u4E8E\u53C2\u7167\u6570\uFF08\u5373 array[start]\uFF09\u7684\u65F6\u5019\uFF0C\u5C31\u5C06\u8BE5\u503C\u8D4B\u503C\u7ED9\u8D77\u59CB\u4F4D\u7F6E\u3002\u8D4B\u503C\u5B8C\u4E4B\u540E\uFF0C\u90A3\u4E48\u53F3\u8FB9\u8FD9\u4E2A\u4F4D\u7F6E\u5C31\u7A7A\u95F2\u4E86\u3002\u8FD9\u65F6\u5728\u5DE6\u8FB9\u53D1\u73B0\u6BD4\u53C2\u7167\u6570\u5927\u7684\u503C\u65F6\uFF0C\u5C31\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u521A\u521A\u7A7A\u95F2\u51FA\u6765\u7684\u53F3\u8FB9\u4F4D\u7F6E\u3002\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230 i \u4E0D\u518D\u5C0F\u4E8E j\u3002\u7ECF\u8FC7\u8FD9\u4E00\u8F6E\u64CD\u4F5C\u4E4B\u540E\uFF0C\u6240\u6709\u6BD4\u53C2\u7167\u6570\u5C0F\u7684\u90FD\u5230\u4E86\u6570\u7EC4\u7684\u5DE6\u8FB9\uFF0C\u6240\u6709\u6BD4\u53C2\u7167\u6570\u5927\u7684\u90FD\u5230\u4E86\u6570\u7EC4\u53F3\u8FB9\uFF0C\u800C\u6570\u7EC4\u4E2D\u95F4\u88AB\u8D4B\u503C\u4E3A\u53C2\u7167\u6570\u3002</p><p>\u6211\u4EEC\u518D\u6765\u5206\u6790\u53E6\u5916\u4E00\u4E2A\u4F18\u5316\u70B9\u3002\u4E4B\u524D\u7684\u8BFE\u7A0B\u4E2D\u63D0\u5230\u4E86\u5C3E\u9012\u5F52\u8C03\u7528\u4F18\u5316\uFF0C\u90A3\u4E48\u4E0A\u9762\u7684\u5FEB\u6392\u80FD\u5426\u4F7F\u7528\u5C3E\u9012\u5F52\u8FDB\u884C\u4F18\u5316\u5462\uFF1F</p><p>\u6211\u4EEC\u8FDB\u884C\u89C2\u5BDF\uFF0C\u4E0A\u9762\u7684\u5B9E\u73B0\u6700\u540E\u4E24\u884C\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">quickSort(array, start, i - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">quickSort(array, i + 1, end)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u80FD\u5F62\u6210\u4EE5\u4E0B\u7684\u5F62\u5F0F\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">return quickSort()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u90A3\u4E48\u5C31\u5B9E\u73B0\u4E86\u5C3E\u9012\u5F52\u8C03\u7528\u4F18\u5316\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A stack \u6765\u8FDB\u884C\u53C2\u6570\u4FE1\u606F\u7684\u4F20\u9012\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;"> const quickSort = (array, stack) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let start = stack[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">  let end = stack[1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let value = array[start]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let i = start</span></span>
<span class="line"><span style="color:#A6ACCD;">  let j = end</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  while (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (i &lt; j &amp;&amp; array[j] &gt;= value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      j--</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      array[i++] = array[j]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (i &lt; j &amp;&amp; array[i] &lt; value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      i++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      array[j--] = array[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  arr[i] = value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u79FB\u9664\u5DF2\u7ECF\u4F7F\u7528\u5B8C\u7684\u4E0B\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">  stack.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;">  stack.shift() </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5B58\u5165\u65B0\u7684\u4E0B\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (i + 1 &lt; end) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    stack.unshift(i + 1, end)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (start &lt; i - 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    stack.unshift(start, i - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (stack.length == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return quickSort(array, stack)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u6700\u540E\uFF0C\u5173\u4E8E\u5FEB\u901F\u6392\u5E8F\u7684\u4F18\u5316\u70B9\u8FD8\u6709\u4E00\u4E2A\u6700\u91CD\u8981\u7684\u65B9\u5411\u5C31\u662F\u5BF9 pivot \u5143\u7D20\u7684\u9009\u53D6\u3002\u901A\u8FC7\u4E0A\u9762\u7684\u5206\u6790\uFF0C\u6211\u4EEC\u53D1\u73B0\u5FEB\u901F\u6392\u5E8F\u7684\u7B97\u6CD5\u6838\u5FC3\u5728\u4E8E\u9009\u62E9\u4E00\u4E2A pivot\uFF0C\u5C06\u7ECF\u8FC7\u6BD4\u8F83\u4EA4\u6362\u7684\u6570\u7EC4\u6309\u57FA\u51C6\u5206\u89E3\u4E3A\u4E24\u4E2A\u6570\u533A\u8FDB\u884C\u540E\u7EED\u9012\u5F52\u3002</p><p>\u90A3\u4E48\u8BD5\u60F3\uFF0C\u5982\u679C\u6211\u4EEC\u5BF9\u4E00\u4E2A\u5DF2\u7ECF\u6709\u5E8F\u7684\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F\uFF0C\u6070\u597D\u6BCF\u6B21\u9009\u62E9 pivot \u65F6\u603B\u662F\u9009\u62E9\u7B2C\u4E00\u4E2A\u6216\u8005\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u6BCF\u6B21\u90FD\u4F1A\u6709\u4E00\u4E2A\u6570\u533A\u662F\u7A7A\u7684\uFF0C\u9012\u5F52\u7684\u5C42\u6570\u5C06\u8FBE\u5230 n\uFF0C\u6700\u540E\u5BFC\u81F4\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u9000\u5316\u4E3A O(n\xB2)\u3002\u56E0\u6B64 pivot \u7684\u9009\u62E9\u975E\u5E38\u91CD\u8981\u3002</p><p>\u5728\u65E9\u671F v8 \u4F7F\u7528\u5FEB\u901F\u6392\u5E8F\u65F6\uFF0C\u91C7\u7528\u4E86\u4E09\u6570\u53D6\u4E2D\uFF08median-of-three\uFF09\u7684 pivot \u4F18\u5316\u65B9\u6848\uFF1A\u9664\u4E86\u5934\u5C3E\u4E24\u4E2A\u5143\u7D20\u518D\u989D\u5916\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u53C2\u4E0E\u57FA\u51C6\u5143\u7D20\u7684\u7ADE\u4E89\u3002\u5177\u4F53 v8 \u6E90\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">var GetThirdIndex = function(a, from, to) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var t_array = new InternalArray();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Use both &#39;from&#39; and &#39;to&#39; to determine the pivot candidates.</span></span>
<span class="line"><span style="color:#A6ACCD;">    var increment = 200 + ((to - from) &amp; 15);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var j = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    from += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    to -= 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var i = from; i &lt; to; i += increment) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        t_array[j] = [i, a[i]];</span></span>
<span class="line"><span style="color:#A6ACCD;">        j++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    t_array.sort(function(a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return comparefn(a[1], b[1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    var third_index = t_array[t_array.length &gt;&gt; 1][0];</span></span>
<span class="line"><span style="color:#A6ACCD;">    return third_index;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var QuickSort = function QuickSort(a, from, to) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ......</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ......</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (to - from &gt; 1000) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            third_index = GetThirdIndex(a, from, to);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            third_index = from + ((to - from) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ......</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u7531\u6B64\u770B\u51FA\uFF0C\u8FD9\u6240\u8C13\u7684\u7B2C\u4E09\u4E2A\u7ADE\u4E89\u5143\u7D20\u4EA7\u751F\u65B9\u5F0F\u4E3A\uFF1A</p><ul><li>\u5F53\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E\u7B49\u4E8E 1000 \u65F6\uFF0C\u9009\u62E9\u6298\u534A\u4F4D\u7F6E\u7684\u5143\u7D20\u4F5C\u4E3A\u76EE\u6807\u5143\u7D20</li><li>\u5F53\u6570\u7EC4\u957F\u5EA6\u8D85\u8FC7 1000 \u65F6\uFF0C\u6BCF\u9694 200-215 \u4E2A\uFF08\u975E\u56FA\u5B9A\uFF0C\u8DDF\u7740\u6570\u7EC4\u957F\u5EA6\u800C\u53D8\u5316\uFF09\u5DE6\u53F3\u7684\u503C\uFF0C\u53BB\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u6765\u5148\u786E\u5B9A\u4E00\u6279\u5019\u9009\u5143\u7D20\u3002\u63A5\u7740\u5728\u8FD9\u6279\u5019\u9009\u5143\u7D20\u4E2D\u8FDB\u884C\u4E00\u6B21\u6392\u5E8F\uFF0C\u5C06\u6240\u5F97\u7684\u4E2D\u4F4D\u503C\u4F5C\u4E3A\u76EE\u6807\u5143\u7D20</li></ul><p>\u4E09\u6570\u53D6\u4E2D\uFF08median-of-three\uFF09\u5F53\u4E2D\uFF0C\u6700\u540E\u9009\u53D6\u7684\u662F\u4E09\u4E2A\u5143\u7D20\u7684\u4E2D\u4F4D\u503C\u4F5C\u4E3A pivot\u3002</p><h3 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1">\u63D2\u5165\u6392\u5E8F <a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a></h3><p>\u63D2\u5165\u6392\u5E8F\u6211\u4EEC\u8FD8\u662F\u4ECE\u7279\u70B9\u5165\u624B\uFF1A\u5B83\u5148\u5C06\u5F85\u6392\u5E8F\u5E8F\u5217\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u770B\u505A\u4E00\u4E2A\u6709\u5E8F\u5E8F\u5217\uFF0C\u5F53\u7136\u4E86\uFF0C\u5C31\u4E00\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u5B83\u4E00\u5B9A\u662F\u6709\u5E8F\u7684\uFF1B\u800C\u628A\u7B2C\u4E8C\u4E2A\u5143\u7D20\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5F53\u6210\u662F\u672A\u6392\u5E8F\u5E8F\u5217\uFF1B\u5BF9\u4E8E\u672A\u6392\u5E8F\u7684\u5E8F\u5217\u8FDB\u884C\u904D\u5386\uFF0C\u5C06\u626B\u63CF\u5230\u7684\u6BCF\u4E2A\u5143\u7D20\u63D2\u5165\u6709\u5E8F\u5E8F\u5217\u7684\u9002\u5F53\u4F4D\u7F6E\uFF0C\u4FDD\u8BC1\u6709\u5E8F\u5E8F\u5217\u4F9D\u7136\u6709\u5E8F\uFF0C\u90A3\u4E48\u76F4\u5230\u6240\u6709\u6570\u636E\u90FD\u5B8C\u6210\uFF0C\u6211\u4EEC\u4E5F\u5C31\u5B8C\u6210\u4E86\u6392\u5E8F\u3002</p><p>\u5982\u679C\u5F85\u63D2\u5165\u7684\u5143\u7D20\u4E0E\u6709\u5E8F\u5E8F\u5217\u4E2D\u7684\u67D0\u4E2A\u5143\u7D20\u76F8\u7B49\uFF0C\u90A3\u4E48\u6211\u4EEC\u7EDF\u4E00\u5148\u5C06\u5F85\u63D2\u5165\u5143\u7D20\u63D2\u5165\u5230\u76F8\u7B49\u5143\u7D20\u7684\u540E\u9762\u3002</p><p>\u6211\u4EEC\u7684\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const insertsSort = array =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const length = arr.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    let preIndex</span></span>
<span class="line"><span style="color:#A6ACCD;">    let current</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 1; i &lt; length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        preIndex = i - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        current = array[i]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        while (preIndex &gt;= 0 &amp;&amp; array[preIndex] &gt; current) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            array[preIndex + 1] = array[preIndex]</span></span>
<span class="line"><span style="color:#A6ACCD;">            preIndex--</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        array[preIndex + 1] = current</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return array</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u90A3\u4E48\u4E0A\u8FF0\u5B9E\u73B0\u7684\u63D2\u5165\u6392\u5E8F\u6709\u4F18\u5316\u7A7A\u95F4\u5417\uFF1F</p><p>\u8FD9\u662F\u4E00\u5B9A\u7684\uFF0C\u4F18\u5316\u7A7A\u95F4\u4E3B\u8981\u6709\u8FD9\u4E48\u51E0\u4E2A\u65B9\u5411\uFF1A</p><ul><li>\u5728\u904D\u5386\u672A\u6392\u5E8F\u5E8F\u5217\u65F6\uFF0C\u5C06\u5F53\u524D\u5143\u7D20\u63D2\u5165\u5230\u6709\u5E8F\u5E8F\u5217\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E8C\u5206\u6CD5\u51CF\u5C11\u67E5\u627E\u6B21\u6570\uFF08\u56E0\u4E3A\u662F\u5411\u6709\u5E8F\u5E8F\u5217\u63D2\u5165\uFF09</li><li>\u4F7F\u7528\u94FE\u8868\uFF0C\u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u4E3A\u94FE\u8868\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u90A3\u4E48\u63D2\u5165\u64CD\u4F5C\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\uFF0C\u67E5\u627E\u590D\u6742\u5EA6\u53D8\u4E3A O(n)</li><li>\u4F7F\u7528\u6392\u5E8F\u4E8C\u53C9\u6811\uFF0C\u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u4E3A\u6392\u5E8F\u4E8C\u53C9\u6811\u7ED3\u6784\uFF0C\u7136\u540E\u4E2D\u5E8F\u904D\u5386\u8BE5\u4E8C\u53C9\u6811\uFF0C\u4E0D\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u9700\u8981\u989D\u5916\u7A7A\u95F4\u3002</li></ul><p>\u91C7\u7528\u4E8C\u5206\u6CD5\u7684\u4F18\u5316\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const insertSort = array =&gt; array.reduce(insert, [])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const insert = (sortedArray, value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const length = sortedArray.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sortedArray.push(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return sortedArray</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let i = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  let j = length</span></span>
<span class="line"><span style="color:#A6ACCD;">  let mid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5148\u5224\u65AD\u662F\u5426\u4E3A\u6781\u7AEF\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (value &lt; sortedArray[i]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u76F4\u63A5\u63D2\u5165\u5230\u6570\u7EC4\u7684\u6700\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">    return sortedArray.unshift(value), sortedArray</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (value &gt;= sortedArray[length - 1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // \u76F4\u63A5\u63D2\u5165\u5230\u6570\u7EC4\u7684\u6700\u5C3E</span></span>
<span class="line"><span style="color:#A6ACCD;">    return sortedArray.push(value), sortedArray</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5F00\u59CB\u4E8C\u5206\u67E5\u627E</span></span>
<span class="line"><span style="color:#A6ACCD;">  while (i &lt; j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mid = ((j + i) / 2) | 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (i == mid) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value  &lt; sortedArray[mid]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      j = mid</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value === sortedArray[mid]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      i = mid</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (value &gt; sortedArray[mid]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      i = mid</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let midArray = [value]</span></span>
<span class="line"><span style="color:#A6ACCD;">  let lastArray = sortedArray.slice(i + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  sortedArray = sortedArray</span></span>
<span class="line"><span style="color:#A6ACCD;">    .slice(0, i + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .concat(midArray)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .concat(lastArray)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return sortedArray</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>\u5230\u6B64\u6211\u4EEC\u4ECB\u7ECD\u5B8C\u4E86\u4E24\u79CD\u6392\u5E8F\u65B9\u6CD5\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5149\u6392\u5E8F\u5C31\u662F\u4E00\u95E8\u5F88\u6DF1\u7684\u5B66\u95EE\uFF0C\u4E5F\u6D89\u53CA\u5230\u4E86\u7B97\u6CD5\u548C\u6570\u636E\u7ED3\u6784\u7684\u65B9\u65B9\u9762\u9762\uFF0C\u6211\u4EEC\u5C06\u7EE7\u7EED\u901A\u8FC7\u6392\u5E8F\uFF0C\u4E86\u89E3\u66F4\u591A\u7B97\u6CD5\u5185\u5BB9\u3002</p><h2 id="\u6392\u5E8F\u7684\u7A33\u5B9A\u6027" tabindex="-1">\u6392\u5E8F\u7684\u7A33\u5B9A\u6027 <a class="header-anchor" href="#\u6392\u5E8F\u7684\u7A33\u5B9A\u6027" aria-hidden="true">#</a></h2><p>\u4E8B\u5B9E\u4E0A\uFF0C\u9664\u4E86 v8 \u5F15\u64CE\uFF0C\u5176\u4ED6\u5F15\u64CE\u4E5F\u6709\u4E0D\u540C\u7684 sort \u6392\u5E8F\u89C4\u5219\u3002\u6BD4\u5982 SpiderMoney \u65E9\u671F\u5185\u90E8\u5B9E\u73B0\u4E86\u5F52\u5E76\u6392\u5E8F\uFF0CChakra \u7684\u6570\u7EC4\u6392\u5E8F\u7B97\u6CD5\u5B9E\u73B0\u7684\u4E5F\u662F\u5FEB\u901F\u6392\u5E8F\u3002Firefox\uFF08Firebird\uFF09\u6700\u521D\u7248\u672C\u5B9E\u73B0\u7684\u6570\u7EC4\u6392\u5E8F\u7B97\u6CD5\u662F\u5806\u6392\u5E8F\uFF0C\u8FD9\u4E5F\u662F\u4E00\u79CD\u4E0D\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0CMozilla \u5F00\u53D1\u7EC4\u5185\u90E8\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\u8FDB\u884C\u4E86\u4E00\u7CFB\u5217\u8BA8\u8BBA\u4E4B\u540E\uFF0CFirefox3 \u5C06\u5F52\u5E76\u6392\u5E8F\u4F5C\u4E3A\u4E86\u6570\u7EC4\u6392\u5E8F\u7684\u65B0\u5B9E\u73B0\u3002</p><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u5FEB\u901F\u6392\u5E8F\u662F\u4E00\u79CD\u4E0D\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u800C\u5F52\u5E76\u6392\u5E8F\u662F\u4E00\u79CD\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\u3002\u4EC0\u4E48\u662F\u6392\u5E8F\u7684\u7A33\u5B9A\u6027\u5462\uFF1F</p><blockquote><p>\u7B80\u5355\u8BF4\uFF0C\u5C31\u662F\u80FD\u4FDD\u8BC1\u6392\u5E8F\u524D 2 \u4E2A\u76F8\u7B49\u7684\u6570\u5176\u5728\u5E8F\u5217\u7684\u524D\u540E\u4F4D\u7F6E\u987A\u5E8F\u548C\u6392\u5E8F\u540E\u5B83\u4EEC\u4E24\u4E2A\u7684\u524D\u540E\u4F4D\u7F6E\u987A\u5E8F\u76F8\u540C\u3002\u5F62\u5F0F\u5316\u4E00\u4E0B\uFF0C\u5982\u679C array[i] = array[j]\uFF0Carray[i] \u539F\u6765\u5728\u4F4D\u7F6E\u524D\uFF0C\u6392\u5E8F\u540E array[i] \u8FD8\u662F\u8981\u5728 array[j] \u4F4D\u7F6E\u524D\u3002</p></blockquote><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u7A33\u5B9A\u7684\u6392\u5E8F\u4E5F\u4E0D\u4F1A\u9020\u6210\u5F71\u54CD\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u573A\u666F\u4E2D\uFF0C\u53EF\u80FD\u5C31\u4F1A\u201C\u6709\u6BD2\u201D\u3002\u6BD4\u5982\u5BF9\u4E8E\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61\uFF0C\u573A\u666F\u662F\uFF1A</p><blockquote><p>\u67D0\u5E02\u7684\u673A\u52A8\u8F66\u724C\u7167\u62CD\u5356\u7CFB\u7EDF\uFF0C\u6700\u7EC8\u4E2D\u6807\u7684\u89C4\u5219\u4E3A\uFF1A\u6309\u4EF7\u683C\u8FDB\u884C\u5012\u6392\u5E8F\uFF1B\u76F8\u540C\u4EF7\u683C\u5219\u6309\u7167\u7ADE\u6807\u987A\u4F4D\uFF08\u5373\u4EF7\u683C\u63D0\u4EA4\u65F6\u95F4\uFF09\u8FDB\u884C\u6B63\u6392\u5E8F\u3002</p></blockquote><p>\u5982\u679C\u91C7\u7528\u4E0D\u7A33\u5B9A\u6392\u5E8F\uFF0C\u90A3\u4E48\u7ED3\u679C\u5C31\u6709\u53EF\u80FD\u4E0D\u7B26\u5408\u9884\u671F\u3002</p><p>\u90A3\u4E48\u5982\u679C\u4E00\u4E9B\u6D4F\u89C8\u5668\u5F15\u64CE\u5B9E\u73B0\u7684\u6392\u5E8F\u91C7\u7528\u4E86\u4E0D\u7A33\u5B9A\u6392\u5E8F\u7B97\u6CD5\u5E94\u8BE5\u600E\u4E48\u529E\u5462\uFF1F\u65B9\u6848\uFF1A</p><blockquote><p>\u5C06\u5F85\u6392\u5E8F\u6570\u7EC4\u8FDB\u884C\u9884\u5904\u7406\uFF0C\u4E3A\u6BCF\u4E2A\u5F85\u6392\u5E8F\u7684\u5BF9\u8C61\u589E\u52A0\u81EA\u7136\u5E8F\u5C5E\u6027\uFF0C\u4E0D\u4E0E\u5BF9\u8C61\u7684\u5176\u4ED6\u5C5E\u6027\u51B2\u7A81\u5373\u53EF\u3002\u81EA\u5B9A\u4E49\u6392\u5E8F\u6BD4\u8F83\u65B9\u6CD5 compareFn\uFF0C\u603B\u662F\u5C06\u81EA\u7136\u5E8F\u4F5C\u4E3A\u524D\u7F6E\u5224\u65AD\u76F8\u7B49\u65F6\u7684\u7B2C\u4E8C\u5224\u65AD\u7EF4\u5EA6\u3002</p></blockquote><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const HELPER = Symbol(&#39;helper&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const getComparer = compare =&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">   (left, right) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let result = compare(left, right)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return result === 0 ? left[HELPER] - right[HELPER] : result</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const sort = (array, compare) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    array = array.map(</span></span>
<span class="line"><span style="color:#A6ACCD;">        (item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (typeof item === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                item[HELPER] = index</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            return item</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return array.sort(getComparer(compare))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u8FD1\u4E9B\u5E74\u6765\uFF0C\u968F\u7740\u6D4F\u89C8\u5668\u8BA1\u7B97\u80FD\u529B\u7684\u8FDB\u4E00\u6B65\u63D0\u5347\uFF0C\u9879\u76EE\u6B63\u5728\u5F80\u5BCC\u5BA2\u6237\u7AEF\u5E94\u7528\u65B9\u5411\u8F6C\u53D8\uFF0C\u524D\u7AEF\u5728\u9879\u76EE\u4E2D\u626E\u6F14\u7684\u89D2\u8272\u4E5F\u8D8A\u6765\u8D8A\u91CD\u8981\u3002\u7B97\u6CD5\u610F\u8BC6\u662F\u4E00\u4E2A\u4E0D\u5F97\u5FFD\u89C6\u7684\u8BDD\u9898\u3002</p><h2 id="timsort-\u5B9E\u73B0" tabindex="-1">Timsort \u5B9E\u73B0 <a class="header-anchor" href="#timsort-\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u597D\u4E86\uFF0C\u6211\u4EEC\u518D\u628A\u8BDD\u9898\u6536\u56DE\u6765\u3002\u90A3\u4E48 v8 \u91C7\u7528\u7684 Timsort \u7B97\u6CD5\u5230\u5E95\u662F\u4EC0\u4E48\u5462\uFF1FTimsort \u7ED3\u5408\u4E86\u5F52\u5E76\u6392\u5E8F\u548C\u63D2\u5165\u6392\u5E8F\uFF0C\u6548\u7387\u66F4\u9AD8\u3002Pyhton \u81EA\u4ECE 2.3 \u7248\uFF0CJava SE7 \u548C Android\u4EE5\u6765\u4E5F\u4E00\u76F4\u91C7\u7528 Timsort \u7B97\u6CD5\u6392\u5E8F\u3002</p><p>\u6211\u4EEC\u770B\u4E00\u4E0B JSE7 \u4E2D\u5BF9 Timsort \u7684\u63CF\u8FF0\uFF1A</p><blockquote><p>A stable, adaptive, iterative mergesort that requires far fewer than n lg(n) comparisons when running on partially sorted arrays, while offering performance comparable to a traditional mergesort when run on random arrays. Like all proper mergesorts, this sort is stable and runs O(n log n) time (worst case). In the worst case, this sort requires temporary storage space for n/2 object references; in the best case, it requires only a small constant amount of space.</p></blockquote><p>Timsort \u662F\u7A33\u5B9A\u4E14\u81EA\u9002\u5E94\u7684\u7B97\u6CD5\u3002\u5982\u679C\u9700\u8981\u6392\u5E8F\u7684\u6570\u7EC4\u4E2D\u5B58\u5728\u90E8\u5206\u5DF2\u7ECF\u6392\u5E8F\u597D\u7684\u533A\u95F4\uFF0C\u5B83\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4F1A\u5C0F\u4E8E nlogn\uFF0C\u5B83\u7684\u6700\u574F\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(nlogn\uFF09\u3002\u5728\u6700\u574F\u60C5\u51B5\u4E0B\uFF0CTimsort \u7B97\u6CD5\u9700\u8981\u7684\u4E34\u65F6\u7A7A\u95F4\u662F n/2\uFF0C\u5728\u6700\u597D\u60C5\u51B5\u4E0B\uFF0C\u5B83\u53EA\u9700\u8981\u4E00\u4E2A\u5F88\u5C0F\u7684\u5E38\u91CF\u5B58\u50A8\u7A7A\u95F4\u3002</p><p>Timsort \u7B97\u6CD5\u4E3A\u4E86\u51CF\u5C11\u5BF9\u5347\u5E8F\u90E8\u5206\u7684\u56DE\u6EAF\u548C\u5BF9\u964D\u5E8F\u90E8\u5206\u7684\u6027\u80FD\u5012\u9000\uFF0C\u5C06\u8F93\u5165\u6309\u5176\u5347\u5E8F\u548C\u964D\u5E8F\u7279\u70B9\u8FDB\u884C\u4E86\u5206\u533A\u3002</p><p>\u90A3\u4E48\u5177\u4F53\u7684\u8FC7\u7A0B\uFF1A\u6392\u5E8F\u8F93\u5165\u7684\u5355\u4F4D\u4E0D\u662F\u4E00\u4E2A\u4E2A\u5355\u72EC\u7684\u6570\u5B57\uFF0C\u800C\u662F\u4E00\u4E2A\u4E2A\u5206\u533A\u3002\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5206\u533A\u53EB\u4E00\u4E2A run\u3002\u9488\u5BF9\u8FD9\u4E9B run \u5E8F\u5217\uFF0C\u6BCF\u6B21\u62FF\u4E00\u4E2A run \u51FA\u6765\u6309\u89C4\u5219\u8FDB\u884C\u5408\u5E76\u3002\u6BCF\u6B21\u5408\u5E76\u4F1A\u5C06\u4E24\u4E2A run \u5408\u5E76\u6210\u4E00\u4E2A run\u3002\u5408\u5E76\u7684\u7ED3\u679C\u4FDD\u5B58\u5230\u6808\u4E2D\u3002\u5408\u5E76\u76F4\u5230\u6D88\u8017\u6389\u6240\u6709\u7684 run\uFF0C\u8FD9\u65F6\u5C06\u6808\u4E0A\u5269\u4F59\u7684 run \u5408\u5E76\u5230\u53EA\u5269\u4E00\u4E2A run \u4E3A\u6B62\u3002\u8FD9\u65F6\u8FD9\u4E2A\u4EC5\u5269\u7684 run \u4FBF\u662F\u6392\u597D\u5E8F\u7684\u7ED3\u679C\u3002</p><p>\u8FD9\u6837\u4E00\u6765 Timsort \u7684\u5177\u4F53\u5B9E\u65BD\u89C4\u5219\u5C31\u662F\uFF1A</p><ul><li>\u5982\u679C\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E\u67D0\u4E2A\u503C\uFF0C\u76F4\u63A5\u7528\u4E8C\u5206\u63D2\u5165\u6392\u5E8F\u7B97\u6CD5</li><li>\u627E\u5230\u5404\u4E2A run\uFF0C\u5E76\u5165\u6808</li><li>\u6309\u89C4\u5219\u5408\u5E76 run</li></ul><p>\u7406\u89E3 run \u5C06\u4F1A\u662F\u5173\u952E\uFF0C\u8BF7\u770B\u56FE\uFF1A</p><p><img src="https://images.gitbook.cn/1eec6920-db4f-11e9-a268-91dece478f6a" alt="1"></p><p>\u5177\u4F53\u5B9E\u73B0\u6211\u53C2\u8003\u90E8\u5206 <a href="https://github.com/bellbind/stepbystep-timsort" target="_blank" rel="noreferrer">timsort</a> \u5185\u5BB9\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Array.prototype.timsort = function(comp) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var global_a = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    var MIN_MERGE = 32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var MIN_GALLOP = 7</span></span>
<span class="line"><span style="color:#A6ACCD;">    var runBase = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    var runLen = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    var stackSize = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var compare = comp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sort(this, 0, this.length, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function sort(a, lo, hi, compare) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (typeof compare != &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&quot;Compare is not a function.&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        stackSize = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        runBase = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        runLen = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        rangeCheck(a.length, lo, hi);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var nRemaining = hi - lo;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (nRemaining &lt; 2) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (nRemaining &lt; MIN_MERGE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var initRunLen = countRunAndMakeAscending(a, lo, hi, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;">            binarySort(a, lo, hi, lo + initRunLen, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var ts = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">        var minRun = minRunLength(nRemaining);</span></span>
<span class="line"><span style="color:#A6ACCD;">        do {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var runLenVar = countRunAndMakeAscending(a, lo, hi, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (runLenVar &lt; minRun) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                var force = nRemaining &lt;= minRun ? nRemaining : minRun;</span></span>
<span class="line"><span style="color:#A6ACCD;">                binarySort(a, lo, lo + force, lo + runLenVar, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;">                runLenVar = force</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            pushRun(lo, runLenVar);</span></span>
<span class="line"><span style="color:#A6ACCD;">            mergeCollapse();</span></span>
<span class="line"><span style="color:#A6ACCD;">            lo += runLenVar;</span></span>
<span class="line"><span style="color:#A6ACCD;">            nRemaining -= runLenVar</span></span>
<span class="line"><span style="color:#A6ACCD;">        } while (nRemaining != 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">        mergeForceCollapse()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function binarySort(a, lo, hi, start, compare) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (start == lo) start++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (; start &lt; hi; start++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var pivot = a[start];</span></span>
<span class="line"><span style="color:#A6ACCD;">            var left = lo;</span></span>
<span class="line"><span style="color:#A6ACCD;">            var right = start;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (left &lt; right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                var mid = (left + right) &gt;&gt;&gt; 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (compare(pivot, a[mid]) &lt; 0) right = mid;</span></span>
<span class="line"><span style="color:#A6ACCD;">                else left = mid + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            var n = start - left;</span></span>
<span class="line"><span style="color:#A6ACCD;">            switch (n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                case 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    a[left + 2] = a[left + 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">                case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    a[left + 1] = a[left];</span></span>
<span class="line"><span style="color:#A6ACCD;">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD;">                default:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    arraycopy(a, left, a, left + 1, n)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[left] = pivot</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function countRunAndMakeAscending(a, lo, hi, compare) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var runHi = lo + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (compare(a[runHi++], a[lo]) &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (runHi &lt; hi &amp;&amp; compare(a[runHi], a[runHi - 1]) &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                runHi++</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            reverseRange(a, lo, runHi)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (runHi &lt; hi &amp;&amp; compare(a[runHi], a[runHi - 1]) &gt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                runHi++</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return runHi - lo</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function reverseRange(a, lo, hi) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        hi--;</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (lo &lt; hi) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var t = a[lo];</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[lo++] = a[hi];</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[hi--] = t</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function minRunLength(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var r = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return n + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function pushRun(runBaseArg, runLenArg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        runBase[stackSize] = runBaseArg;</span></span>
<span class="line"><span style="color:#A6ACCD;">        runLen[stackSize] = runLenArg;</span></span>
<span class="line"><span style="color:#A6ACCD;">        stackSize++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function mergeCollapse() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (stackSize &gt; 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var n = stackSize - 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (n &gt; 0 &amp;&amp; runLen[n - 1] &lt;= runLen[n] + runLen[n + 1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (runLen[n - 1] &lt; runLen[n + 1]) n--;</span></span>
<span class="line"><span style="color:#A6ACCD;">                mergeAt(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else if (runLen[n] &lt;= runLen[n + 1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                mergeAt(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                break</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function mergeForceCollapse() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (stackSize &gt; 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var n = stackSize - 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (n &gt; 0 &amp;&amp; runLen[n - 1] &lt; runLen[n + 1]) n--;</span></span>
<span class="line"><span style="color:#A6ACCD;">            mergeAt(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function mergeAt(i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var base1 = runBase[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">        var len1 = runLen[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">        var base2 = runBase[i + 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">        var len2 = runLen[i + 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">        runLen[i] = len1 + len2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (i == stackSize - 3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            runBase[i + 1] = runBase[i + 2];</span></span>
<span class="line"><span style="color:#A6ACCD;">            runLen[i + 1] = runLen[i + 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        stackSize--;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var k = gallopRight(global_a[base2], global_a, base1, len1, 0, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;">        base1 += k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        len1 -= k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len1 == 0) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        len2 = gallopLeft(global_a[base1 + len1 - 1], global_a, base2, len2, len2 - 1, compare);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len2 == 0) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len1 &lt;= len2) mergeLo(base1, len1, base2, len2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        else mergeHi(base1, len1, base2, len2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function gallopLeft(key, a, base, len, hint, compare) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var lastOfs = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var ofs = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (compare(key, a[base + hint]) &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var maxOfs = len - hint;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (ofs &lt; maxOfs &amp;&amp; compare(key, a[base + hint + ofs]) &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                lastOfs = ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ofs = (ofs &lt;&lt; 1) + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (ofs &lt;= 0) ofs = maxOfs</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (ofs &gt; maxOfs) ofs = maxOfs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            lastOfs += hint;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofs += hint</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var maxOfs = hint + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (ofs &lt; maxOfs &amp;&amp; compare(key, a[base + hint - ofs]) &lt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                lastOfs = ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ofs = (ofs &lt;&lt; 1) + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (ofs &lt;= 0) ofs = maxOfs</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (ofs &gt; maxOfs) ofs = maxOfs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            var tmp = lastOfs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            lastOfs = hint - ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofs = hint - tmp</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        lastOfs++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (lastOfs &lt; ofs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var m = lastOfs + ((ofs - lastOfs) &gt;&gt;&gt; 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (compare(key, a[base + m]) &gt; 0) lastOfs = m + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            else ofs = m</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return ofs</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function gallopRight(key, a, base, len, hint, compare) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var ofs = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var lastOfs = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (compare(key, a[base + hint]) &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var maxOfs = hint + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (ofs &lt; maxOfs &amp;&amp; compare(key, a[base + hint - ofs]) &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                lastOfs = ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ofs = (ofs &lt;&lt; 1) + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (ofs &lt;= 0) ofs = maxOfs</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (ofs &gt; maxOfs) ofs = maxOfs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            var tmp = lastOfs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            lastOfs = hint - ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofs = hint - tmp</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var maxOfs = len - hint;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (ofs &lt; maxOfs &amp;&amp; compare(key, a[base + hint + ofs]) &gt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                lastOfs = ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ofs = (ofs &lt;&lt; 1) + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (ofs &lt;= 0) ofs = maxOfs</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (ofs &gt; maxOfs) ofs = maxOfs;</span></span>
<span class="line"><span style="color:#A6ACCD;">            lastOfs += hint;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofs += hint</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        lastOfs++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (lastOfs &lt; ofs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var m = lastOfs + ((ofs - lastOfs) &gt;&gt;&gt; 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (compare(key, a[base + m]) &lt; 0) ofs = m;</span></span>
<span class="line"><span style="color:#A6ACCD;">            else lastOfs = m + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return ofs</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function mergeLo(base1, len1, base2, len2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var a = global_a;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var tmp = a.slice(base1, base1 + len1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var cursor1 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var cursor2 = base2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var dest = base1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a[dest++] = a[cursor2++];</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (--len2 == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(tmp, cursor1, a, dest, len1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len1 == 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(a, cursor2, a, dest, len2);</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[dest + len2] = tmp[cursor1];</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var c = compare;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var minGallop = MIN_GALLOP;</span></span>
<span class="line"><span style="color:#A6ACCD;">        outer: while (true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var count1 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            var count2 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            do {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (compare(a[cursor2], tmp[cursor1]) &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    a[dest++] = a[cursor2++];</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count2++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count1 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (--len2 == 0) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    a[dest++] = tmp[cursor1++];</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count1++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count2 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (--len1 == 1) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            } while ((count1 | count2) &lt; minGallop);</span></span>
<span class="line"><span style="color:#A6ACCD;">            do {</span></span>
<span class="line"><span style="color:#A6ACCD;">                count1 = gallopRight(a[cursor2], tmp, cursor1, len1, 0, c);</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (count1 != 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    arraycopy(tmp, cursor1, a, dest, count1);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    dest += count1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    cursor1 += count1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    len1 -= count1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (len1 &lt;= 1) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                a[dest++] = a[cursor2++];</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (--len2 == 0) break outer;</span></span>
<span class="line"><span style="color:#A6ACCD;">                count2 = gallopLeft(tmp[cursor1], a, cursor2, len2, 0, c);</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (count2 != 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    arraycopy(a, cursor2, a, dest, count2);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    dest += count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    cursor2 += count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    len2 -= count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (len2 == 0) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                a[dest++] = tmp[cursor1++];</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (--len1 == 1) break outer;</span></span>
<span class="line"><span style="color:#A6ACCD;">                minGallop--</span></span>
<span class="line"><span style="color:#A6ACCD;">            } while (count1 &gt;= MIN_GALLOP | count2 &gt;= MIN_GALLOP);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (minGallop &lt; 0) minGallop = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            minGallop += 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.minGallop = minGallop &lt; 1 ? 1 : minGallop;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len1 == 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(a, cursor2, a, dest, len2);</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[dest + len2] = tmp[cursor1]</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (len1 == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&quot;IllegalArgumentException. Comparison method violates its general contract!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(tmp, cursor1, a, dest, len1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function mergeHi(base1, len1, base2, len2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var a = global_a;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var tmp = a.slice(base2, base2 + len2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var cursor1 = base1 + len1 - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var cursor2 = len2 - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var dest = base2 + len2 - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        a[dest--] = a[cursor1--];</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (--len1 == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(tmp, 0, a, dest - (len2 - 1), len2);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len2 == 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            dest -= len1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cursor1 -= len1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(a, cursor1 + 1, a, dest + 1, len1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[dest] = tmp[cursor2];</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var c = compare;</span></span>
<span class="line"><span style="color:#A6ACCD;">        var minGallop = MIN_GALLOP;</span></span>
<span class="line"><span style="color:#A6ACCD;">        outer: while (true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var count1 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            var count2 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            do {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (compare(tmp[cursor2], a[cursor1]) &lt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    a[dest--] = a[cursor1--];</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count1++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count2 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (--len1 == 0) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    a[dest--] = tmp[cursor2--];</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count2++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count1 = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (--len2 == 1) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            } while ((count1 | count2) &lt; minGallop);</span></span>
<span class="line"><span style="color:#A6ACCD;">            do {</span></span>
<span class="line"><span style="color:#A6ACCD;">                count1 = len1 - gallopRight(tmp[cursor2], a, base1, len1, len1 - 1, c);</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (count1 != 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    dest -= count1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    cursor1 -= count1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    len1 -= count1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    arraycopy(a, cursor1 + 1, a, dest + 1, count1);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (len1 == 0) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                a[dest--] = tmp[cursor2--];</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (--len2 == 1) break outer;</span></span>
<span class="line"><span style="color:#A6ACCD;">                count2 = len2 - gallopLeft(a[cursor1], tmp, 0, len2, len2 - 1, c);</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (count2 != 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    dest -= count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    cursor2 -= count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    len2 -= count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    arraycopy(tmp, cursor2 + 1, a, dest + 1, count2);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (len2 &lt;= 1) break outer</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                a[dest--] = a[cursor1--];</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (--len1 == 0) break outer;</span></span>
<span class="line"><span style="color:#A6ACCD;">                minGallop--</span></span>
<span class="line"><span style="color:#A6ACCD;">            } while (count1 &gt;= MIN_GALLOP | count2 &gt;= MIN_GALLOP);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (minGallop &lt; 0) minGallop = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">            minGallop += 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.minGallop = minGallop &lt; 1 ? 1 : minGallop;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len2 == 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            dest -= len1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cursor1 -= len1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(a, cursor1 + 1, a, dest + 1, len1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[dest] = tmp[cursor2]</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (len2 == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&quot;IllegalArgumentException. Comparison method violates its general contract!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arraycopy(tmp, 0, a, dest - (len2 - 1), len2)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function rangeCheck(arrayLen, fromIndex, toIndex) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (fromIndex &gt; toIndex) throw new Error(&quot;IllegalArgument fromIndex(&quot; + fromIndex + &quot;) &gt; toIndex(&quot; + toIndex + &quot;)&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (fromIndex &lt; 0) throw new Error(&quot;ArrayIndexOutOfBounds &quot; + fromIndex);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (toIndex &gt; arrayLen) throw new Error(&quot;ArrayIndexOutOfBounds &quot; + toIndex);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br></div></div><p>\u5177\u4F53\u64CD\u4F5C\u8F83\u4E3A\u590D\u6742\uFF0C\u8FD9\u91CC\u5EFA\u8BAE\u5927\u5BB6\u66F4\u591A\u7684\u4E86\u89E3\u8FD9\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u800C\u5177\u4F53\u5B9E\u73B0\u4E00\u822C\u4E0D\u4F5C\u8981\u6C42\u3002</p><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B v8 \u5728\u91C7\u7528 Timsort \u4E4B\u540E\uFF0C\u5F97\u5230\u7684\u4E00\u4E9B benchmark\uFF1A</p><p><img src="https://images.gitbook.cn/3eb83630-db4f-11e9-b7e8-efbebe7dfdf6" alt="2"></p><p><img src="https://images.gitbook.cn/55bb5330-db4f-11e9-9f9d-c526a5f387ab" alt="3"></p><p><img src="https://images.gitbook.cn/6a0bfa60-db4f-11e9-b7e8-efbebe7dfdf6" alt="4"></p><p>\u66F4\u591A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u53C2\u8003 v8 \u5B98\u65B9\u535A\u5BA2\uFF1A<a href="https://v8.dev/blog/array-%20sort" target="_blank" rel="noreferrer">Getting things sorted in V8</a></p><h2 id="\u5B9E\u6218\u4F8B\u9898" tabindex="-1">\u5B9E\u6218\u4F8B\u9898 <a class="header-anchor" href="#\u5B9E\u6218\u4F8B\u9898" aria-hidden="true">#</a></h2><p>\u4ECE\u8FD9\u91CC\u5F00\u59CB\uFF0C\u6211\u4EEC\u6765\u201C\u5237\u201D\u4E00\u4E9B\u5B9E\u6218\u4F8B\u9898\u3002</p><h3 id="\u4EA4\u6362\u661F\u53F7" tabindex="-1">\u4EA4\u6362\u661F\u53F7 <a class="header-anchor" href="#\u4EA4\u6362\u661F\u53F7" aria-hidden="true">#</a></h3><p>\u9898\u76EE\uFF1A\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u53EA\u5305\u542B <em>\u548C\u6570\u5B57\uFF0C\u8BF7\u628A</em> \u53F7\u90FD\u653E\u5F00\u5934\u3002</p><p>\u601D\u8DEF\uFF1A\u4F7F\u7528\u4E24\u4E2A\u6307\u9488\uFF0C\u4ECE\u540E\u5F80\u524D\u626B\u5B57\u7B26\u4E32\uFF0C\u9047\u5230\u6570\u5B57\u5219\u8D4B\u503C\u7ED9\u540E\u9762\u7684\u6307\u9488\uFF0C\u7EE7\u7EED\u5F80\u540E\u626B\uFF0C\u9047\u5230 * \u5219\u4E0D\u5904\u7406\u3002</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const isNumeric = n =&gt; !isNaN(parseFloat(n)) &amp;&amp; isFinite(n);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {string}</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {string}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const solution = s =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const n = s.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    let a = s.split(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    let j = n - 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = n - 1; i &gt;= 0; --i)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isNumeric(a[i])) a[j--] = a[i]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for (; j &gt;= 0; --j) a[j] = &#39;*&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a.join(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u9006\u5E8F\u64CD\u4F5C\u6570\u7EC4\uFF0C\u9047\u89C1\u6570\u5B57\u5219\u5411\u540E\u7F6E\uFF0C\u904D\u5386\u5B8C\u4E00\u904D\u540E\uFF0C\u6240\u6709\u7684\u6570\u5B57\u90FD\u5DF2\u7ECF\u5728\u540E\u8FB9\u4E86\uFF0C\u540C\u65F6\u628A\u524D\u8FB9\u7684\u6570\u7EC4\u9879\u7528 * \u586B\u5145\u3002</p><h3 id="longest-substring-without-repeating-characters" tabindex="-1">Longest Substring Without Repeating Characters <a class="header-anchor" href="#longest-substring-without-repeating-characters" aria-hidden="true">#</a></h3><p>\u9898\u610F\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u5B83\u6700\u957F\u7684\u4E0D\u5305\u542B\u91CD\u590D\u7684\u5B50\u4E32\u957F\u5EA6\u3002\u4F8B\u5982\uFF0C\u8F93\u5165 abcabcbb \u8F93\u51FA 3\uFF08\u5BF9\u5E94 abc\uFF09\u3002</p><p>\u601D\u8DEF\uFF1A</p><ul><li>\u66B4\u529B\u679A\u4E3E\u8D77\u70B9\u548C\u7EC8\u70B9\uFF0C\u5E76\u5224\u65AD\u91CD\u590D\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n\xB2)\uFF1B</li><li>\u901A\u8FC7\u53CC\u6307\u9488\u3001\u6ED1\u52A8\u7A97\u53E3\uFF0C\u52A8\u6001\u7EF4\u62A4\u7A97\u53E3 [i..j)\uFF0C\u4F7F\u7A97\u53E3\u5185\u5B57\u7B26\u4E0D\u91CD\u590D\u3002</li></ul><p>\u6211\u4EEC\u770B\u7B2C\u4E8C\u79CD\u601D\u8DEF\u89E3\u6CD5\uFF0C\u4FDD\u8BC1\u7A97\u53E3 [i..j) \u4E4B\u95F4\u6CA1\u6709\u91CD\u590D\u5B57\u7B26\uFF1A</p><ul><li>\u9996\u5148 i, j \u4E24\u4E2A\u6307\u9488\u5747\u6307\u5411\u5B57\u7B26\u4E32\u5934\u90E8\uFF0C\u5982\u679C\u6CA1\u6709\u91CD\u590D\u5B57\u7B26\uFF0C\u5219 j \u4E0D\u65AD\u5411\u53F3\u6ED1\u52A8\uFF0C\u76F4\u5230\u51FA\u73B0\u91CD\u590D\u5B57\u7B26\uFF1B</li><li>\u5982\u679C\u51FA\u73B0\u4E86\u91CD\u590D\u7684\u5B57\u7B26\uFF0C\u91CD\u590D\u5B57\u7B26\u51FA\u73B0\u5728\u7B2C str[j] \u5904\uFF0C\u8FD9\u65F6\u5019\u5F00\u59CB\u79FB\u52A8\u6307\u9488 i\uFF0C\u627E\u5230\u53E6\u4E00\u4E2A\u91CD\u590D\u7684\u5B57\u8BFB\u51FA\u73B0\u5728 str[i] \u5904\uFF0C\u90A3\u4E48\u80FD\u4FDD\u8BC1 [0, i] \u4EE5\u53CA [i, j] \u5B50\u5B57\u7B26\u4E32\u662F\u4E0D\u91CD\u590D\u7684\uFF0C\u66F4\u65B0\u4E34\u65F6\u7ED3\u679C\u4E3A Math.max(result, j - i)\u3002</li></ul><p><strong>\u65F6\u95F4\u590D\u6742\u5EA6 O(n)</strong></p><p>\u5B9E\u73B0\uFF1A</p><div class="language-text line-numbers-mode"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">const lengthOfLongestSubstring = str =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    let len = str.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BB0\u5F55\u5F53\u524D\u533A\u95F4\u5185\u51FA\u73B0\u7684\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    let mapping = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0, j = 0; ; ++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // j \u53F3\u79FB\u7684\u8FC7\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (j &lt; len &amp;&amp; !mapping[str[j]])</span></span>
<span class="line"><span style="color:#A6ACCD;">            mapping[str[j++]] = true</span></span>
<span class="line"><span style="color:#A6ACCD;">        result = Math.max(result, j - i)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (j &gt;= len)</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u51FA\u73B0\u4E86\u91CD\u590D\u5B57\u7B26\uFF0Ci \u5F00\u59CB\u8FDB\u884C\u53F3\u79FB\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u5C06\u79FB\u51FA\u7684\u5B57\u7B26\u5728 mapping \u4E2D\u91CD\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (str[i] != str[j])</span></span>
<span class="line"><span style="color:#A6ACCD;">            mapping[str[i++]] = false</span></span>
<span class="line"><span style="color:#A6ACCD;">        mapping[str[i]] = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u4E3E\u8FD9\u4E2A\u4F8B\u5B50\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u5C55\u793A\u6ED1\u52A8\u7A97\u53E3\u7684\u601D\u60F3\uFF0C\u901A\u8FC7\u6ED1\u52A8\u7A97\u53E3\u4E00\u822C\u80FD\u5B9E\u73B0 O(n) \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u548C O(1) \u7684\u7A7A\u95F4\u590D\u6742\u5EA6\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8BB2\u6211\u4EEC\u4E3B\u8981\u4ECB\u7ECD\u4E86\u51E0\u79CD\u6392\u5E8F\u7B97\u6CD5\u548C\u6700\u5148\u8FDB\u7684 Timsort\uFF0C\u76F8\u4FE1\u51ED\u501F\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u5728\u524D\u7AEF\u6392\u5E8F\u4E0A\u4F60\u53EF\u4EE5\u201C\u9119\u89C6\u201D\u9762\u8BD5\u5B98\u4E86\u3002\u5F53\u7136\u7B97\u6CD5\u7684\u5751\u8FD8\u662F\u5F88\u6DF1\u7684\uFF0C\u6211\u4EEC\u8981\u4FDD\u6301\u597D\u7684\u5FC3\u6001\u3002\u6700\u540E\u90E8\u5206\u4ECB\u7ECD\u4E86\u4E24\u4E2A\u7B97\u6CD5\u9898\uFF0C\u7B97\u662F\u629B\u7816\u5F15\u7389\uFF0C\u4E0B\u4E00\u8BB2\uFF0C\u8BA9\u6211\u4EEC\u9488\u5BF9\u7B97\u6CD5\u9762\u8BD5\uFF0C\u5237\u4E00\u5237\u7B97\u6CD5\u3002</p>`,99),r=[e];function c(i,o,t,b,A,C){return n(),a("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
