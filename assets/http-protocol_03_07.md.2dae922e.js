import{_ as e,c as r,o as t,a as T}from"./app.771a7ea0.js";const H=JSON.parse('{"title":"07 | HTTP\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55","slug":"\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55","link":"#\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55","children":[]},{"level":2,"title":"\u5E94\u7528\u5E7F\u6CDB\u3001\u73AF\u5883\u6210\u719F","slug":"\u5E94\u7528\u5E7F\u6CDB\u3001\u73AF\u5883\u6210\u719F","link":"#\u5E94\u7528\u5E7F\u6CDB\u3001\u73AF\u5883\u6210\u719F","children":[]},{"level":2,"title":"\u65E0\u72B6\u6001","slug":"\u65E0\u72B6\u6001","link":"#\u65E0\u72B6\u6001","children":[]},{"level":2,"title":"\u660E\u6587","slug":"\u660E\u6587","link":"#\u660E\u6587","children":[]},{"level":2,"title":"\u4E0D\u5B89\u5168","slug":"\u4E0D\u5B89\u5168","link":"#\u4E0D\u5B89\u5168","children":[]},{"level":2,"title":"\u6027\u80FD","slug":"\u6027\u80FD","link":"#\u6027\u80FD","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]},{"level":2,"title":"\u8BFE\u4E0B\u4F5C\u4E1A","slug":"\u8BFE\u4E0B\u4F5C\u4E1A","link":"#\u8BFE\u4E0B\u4F5C\u4E1A","children":[]},{"level":2,"title":"\u8BFE\u5916\u5C0F\u8D34\u58EB","slug":"\u8BFE\u5916\u5C0F\u8D34\u58EB","link":"#\u8BFE\u5916\u5C0F\u8D34\u58EB","children":[]}],"relativePath":"http-protocol/03/07.md","lastUpdated":1662487438000}'),i={name:"http-protocol/03/07.md"},a=T('<h1 id="_07-http\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F" tabindex="-1">07 | HTTP\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F <a class="header-anchor" href="#_07-http\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8BB2\u6211\u4ECB\u7ECD\u4E86 HTTP \u7684\u4E94\u4E2A\u57FA\u672C\u7279\u70B9\uFF0C\u8FD9\u4E00\u8BB2\u8981\u8BF4\u7684\u5219\u662F\u5B83\u7684\u4F18\u70B9\u548C\u7F3A\u70B9\u3002\u5176\u5B9E\u8FD9\u4E9B\u4E5F\u5E94\u8BE5\u7B97\u662F HTTP \u7684\u7279\u70B9\uFF0C\u4F46\u8FD9\u4E00\u8BB2\u4F1A\u66F4\u4FA7\u91CD\u4E8E\u8BC4\u4EF7\u5B83\u4EEC\u7684\u4F18\u52A3\u548C\u597D\u574F\u3002</p><p>\u4E0A\u4E00\u8BB2\u6211\u4E5F\u7559\u4E86\u4E24\u9053\u8BFE\u4E0B\u4F5C\u4E1A\uFF0C\u4E0D\u77E5\u9053\u4F60\u6709\u6CA1\u6709\u8BA4\u771F\u601D\u8003\u8FC7\uFF0C\u4ECA\u5929\u53EF\u4EE5\u4E00\u8D77\u6765\u770B\u770B\u4F60\u7684\u7B54\u6848\u4E0E\u6211\u7684\u89C2\u70B9\u60F3\u6CD5\u662F\u5426\u76F8\u7B26\uFF0C\u5171\u540C\u63A2\u8BA8\u3002</p><p>\u4E0D\u8FC7\u5728\u6B63\u5F0F\u5F00\u8BB2\u4E4B\u524D\u6211\u8FD8\u8981\u63D0\u9192\u4F60\u4E00\u4E0B\uFF0C<strong>\u4ECA\u5929\u7684\u8BA8\u8BBA\u8303\u56F4\u4EC5\u9650\u4E8E HTTP/1.1</strong> \uFF0C\u6240\u8BF4\u7684\u4F18\u70B9\u548C\u7F3A\u70B9\u4E5F\u4EC5\u9488\u5BF9 HTTP/1.1\u3002\u5B9E\u9645\u4E0A\uFF0C\u4E13\u680F\u540E\u7EED\u8981\u8BB2\u7684 HTTPS \u548C HTTP/2 \u90FD\u662F\u5BF9 HTTP/1.1 \u4F18\u70B9\u7684\u53D1\u6325\u548C\u7F3A\u70B9\u7684\u5B8C\u5584\u3002</p><h2 id="\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55" tabindex="-1">\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55 <a class="header-anchor" href="#\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55" aria-hidden="true">#</a></h2><p>\u521D\u6B21\u63A5\u89E6 HTTP \u7684\u4EBA\u90FD\u4F1A\u8BA4\u4E3A\uFF0CHTTP \u534F\u8BAE\u662F\u5F88 <strong>\u7B80\u5355</strong> \u7684\uFF0C\u57FA\u672C\u7684\u62A5\u6587\u683C\u5F0F\u5C31\u662F <code>header+body</code>\uFF0C\u5934\u90E8\u4FE1\u606F\u4E5F\u662F\u7B80\u5355\u7684\u6587\u672C\u683C\u5F0F\uFF0C\u7528\u7684\u4E5F\u90FD\u662F\u5E38\u89C1\u7684\u82F1\u6587\u5355\u8BCD\uFF0C\u5373\u4F7F\u4E0D\u53BB\u770B RFC \u6587\u6863\uFF0C\u53EA\u9760\u731C\u4E5F\u80FD\u731C\u51FA\u4E2A\u516B\u4E5D\u4E0D\u79BB\u5341\u3002</p><p>\u53EF\u4E0D\u8981\u5C0F\u770B\u4E86 <strong>\u7B80\u5355</strong> \u8FD9\u4E2A\u4F18\u70B9\uFF0C\u5B83\u4E0D\u4EC5\u964D\u4F4E\u4E86\u5B66\u4E60\u548C\u4F7F\u7528\u7684\u95E8\u69DB\uFF0C\u80FD\u591F\u8BA9\u66F4\u591A\u7684\u4EBA\u7814\u7A76\u548C\u5F00\u53D1 HTTP \u5E94\u7528\uFF0C\u800C\u4E14\u6211\u5728 <a href="./../02/01.html">\u7B2C 1 \u8BB2</a> \u65F6\u5C31\u8BF4\u8FC7\uFF0C\u7B80\u5355\u8574\u542B\u4E86\u8FDB\u5316\u548C\u6269\u5C55\u7684\u53EF\u80FD\u6027\uFF0C\u6240\u8C13 <strong>\u5C11\u5373\u662F\u591A</strong>\uFF0C\u628A\u7B80\u5355\u7684\u7CFB\u7EDF\u53D8\u590D\u6742\uFF0C\u8981\u6BD4\u628A\u590D\u6742\u7684\u7CFB\u7EDF\u53D8\u7B80\u5355\u5BB9\u6613\u5F97\u591A**\u3002**</p><p>\u6240\u4EE5\uFF0C\u5728\u7B80\u5355\u8FD9\u4E2A\u6700\u57FA\u672C\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E4B\u4E0B\uFF0CHTTP \u534F\u8BAE\u53C8\u591A\u51FA\u4E86 <strong>\u7075\u6D3B\u548C\u6613\u4E8E\u6269\u5C55</strong> \u7684\u4F18\u70B9\u3002</p><p><strong>\u7075\u6D3B\u548C\u6613\u4E8E\u6269\u5C55</strong> \u5B9E\u9645\u4E0A\u662F\u4E00\u4F53\u7684\uFF0C\u5B83\u4EEC\u4E92\u4E3A\u8868\u91CC\u3001\u76F8\u4E92\u4FC3\u8FDB\uFF0C\u56E0\u4E3A\u7075\u6D3B\u6240\u4EE5\u624D\u4F1A\u6613\u4E8E\u6269\u5C55\uFF0C\u800C\u6613\u4E8E\u6269\u5C55\u53C8\u53CD\u8FC7\u6765\u8BA9 HTTP \u66F4\u52A0\u7075\u6D3B\uFF0C\u62E5\u6709\u66F4\u5F3A\u7684\u8868\u73B0\u80FD\u529B\u3002</p><p>HTTP \u534F\u8BAE\u91CC\u7684\u8BF7\u6C42\u65B9\u6CD5\u3001URI\u3001\u72B6\u6001\u7801\u3001\u539F\u56E0\u77ED\u8BED\u3001\u5934\u5B57\u6BB5\u7B49\u6BCF\u4E00\u4E2A\u6838\u5FC3\u7EC4\u6210\u8981\u7D20\u90FD\u6CA1\u6709\u88AB\u5199\u6B7B\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4EFB\u610F\u5B9A\u5236\u3001\u6269\u5145\u6216\u89E3\u91CA\uFF0C\u7ED9\u4E88\u4E86\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u6700\u5927\u7A0B\u5EA6\u7684\u4FE1\u4EFB\u548C\u81EA\u7531\uFF0C\u4E5F\u6B63\u597D\u7B26\u5408\u4E86\u4E92\u8054\u7F51\u81EA\u7531\u4E0E\u5E73\u7B49\u7684\u7CBE\u795E\u2014\u2014\u7F3A\u4EC0\u4E48\u529F\u80FD\u81EA\u5DF1\u52A0\u4E2A\u5B57\u6BB5\u6216\u8005\u9519\u8BEF\u7801\u4EC0\u4E48\u7684\u8865\u4E0A\u5C31\u662F\u4E86\u3002</p><p>\u300C\u8BF7\u52FF\u8DDF\u8E2A\u300D\u6240\u4F7F\u7528\u7684\u5934\u5B57\u6BB5 DNT\uFF08Do Not Track\uFF09\u5C31\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u4F8B\u5B50\u3002\u5B83\u6700\u65E9\u7531 Mozilla \u63D0\u51FA\uFF0C\u7528\u6765\u4FDD\u62A4\u7528\u6237\u9690\u79C1\uFF0C\u9632\u6B62\u7F51\u7AD9\u76D1\u6D4B\u8FFD\u8E2A\u7528\u6237\u7684\u504F\u597D\u3002\u4E0D\u8FC7\u53EF\u60DC\u7684\u662F DNT \u4ECE\u63A8\u51FA\u81F3\u4ECA\u6709\u5DEE\u4E0D\u591A\u4E03\u516B\u5E74\u7684\u5386\u53F2\uFF0C\u4F46\u5F88\u591A\u7F51\u7AD9\u4ECD\u7136\u9009\u62E9\u65E0\u89C6 DNT\u3002\u867D\u7136 DNT \u57FA\u672C\u5931\u8D25\u4E86\uFF0C\u4F46\u8FD9\u4E5F\u6B63\u8BF4\u660E HTTP \u534F\u8BAE\u662F\u7075\u6D3B\u81EA\u7531\u7684\uFF0C\u4E0D\u4F1A\u53D7\u5355\u65B9\u9762\u52BF\u529B\u7684\u538B\u5236\u3002</p><p>\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55\u7684\u7279\u6027\u8FD8\u8868\u73B0\u5728 HTTP \u5BF9\u53EF\u9760\u4F20\u8F93\u7684\u5B9A\u4E49\u4E0A\uFF0C\u5B83\u4E0D\u9650\u5236\u5177\u4F53\u7684\u4E0B\u5C42\u534F\u8BAE\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u4F7F\u7528 TCP\u3001UNIX Domain Socket\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 SSL/TLS\uFF0C\u751A\u81F3\u662F\u57FA\u4E8E UDP \u7684 QUIC\uFF0C\u4E0B\u5C42\u53EF\u4EE5\u968F\u610F\u53D8\u5316\uFF0C\u800C\u4E0A\u5C42\u7684\u8BED\u4E49\u5219\u59CB\u7EC8\u4FDD\u6301\u7A33\u5B9A\u3002</p><h2 id="\u5E94\u7528\u5E7F\u6CDB\u3001\u73AF\u5883\u6210\u719F" tabindex="-1">\u5E94\u7528\u5E7F\u6CDB\u3001\u73AF\u5883\u6210\u719F <a class="header-anchor" href="#\u5E94\u7528\u5E7F\u6CDB\u3001\u73AF\u5883\u6210\u719F" aria-hidden="true">#</a></h2><p>HTTP \u534F\u8BAE\u7684\u53E6\u4E00\u5927\u4F18\u70B9\u662F <strong>\u5E94\u7528\u5E7F\u6CDB</strong> \uFF0C\u8F6F\u786C\u4EF6\u73AF\u5883\u90FD\u975E\u5E38\u6210\u719F\u3002</p><p>\u968F\u7740\u4E92\u8054\u7F51\u7279\u522B\u662F\u79FB\u52A8\u4E92\u8054\u7F51\u7684\u666E\u53CA\uFF0CHTTP \u7684\u89E6\u89D2\u5DF2\u7ECF\u5EF6\u4F38\u5230\u4E86\u4E16\u754C\u7684\u6BCF\u4E00\u4E2A\u89D2\u843D\uFF1A\u4ECE\u7B80\u5355\u7684 Web \u9875\u9762\u5230\u590D\u6742\u7684 JSON\u3001XML \u6570\u636E\uFF0C\u4ECE\u53F0\u5F0F\u673A\u4E0A\u7684\u6D4F\u89C8\u5668\u5230\u624B\u673A\u4E0A\u7684\u5404\u79CD APP\uFF0C\u4ECE\u770B\u65B0\u95FB\u3001\u6CE1\u8BBA\u575B\u5230\u8D2D\u7269\u3001\u7406\u8D22\u3001\u300C\u5403\u9E21\u300D\uFF0C\u4F60\u5F88\u96BE\u627E\u5230\u4E00\u4E2A\u6CA1\u6709\u4F7F\u7528 HTTP \u7684\u5730\u65B9\u3002</p><p>\u4E0D\u4EC5\u5728\u5E94\u7528\u9886\u57DF\uFF0C\u5728\u5F00\u53D1\u9886\u57DF HTTP \u534F\u8BAE\u4E5F\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u652F\u6301\u3002\u5B83\u5E76\u4E0D\u9650\u5B9A\u67D0\u79CD\u7F16\u7A0B\u8BED\u8A00\u6216\u8005\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6240\u4EE5\u5929\u7136\u5177\u6709 <strong>\u8DE8\u8BED\u8A00\u3001\u8DE8\u5E73\u53F0</strong> \u7684\u4F18\u8D8A\u6027\u3002\u800C\u4E14\uFF0C\u56E0\u4E3A\u672C\u8EAB\u7684\u7B80\u5355\u7279\u6027\u5F88\u5BB9\u6613\u5B9E\u73B0\uFF0C\u6240\u4EE5\u51E0\u4E4E\u6240\u6709\u7684\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709 HTTP \u8C03\u7528\u5E93\u548C\u5916\u56F4\u7684\u5F00\u53D1\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u8FD9\u4E00\u70B9\u6211\u89C9\u5F97\u5C31\u4E0D\u7528\u518D\u4E3E\u4F8B\u4E86\u5427\uFF0C\u4F60\u53EF\u80FD\u6BD4\u6211\u66F4\u719F\u6089\u3002</p><p>HTTP \u5E7F\u6CDB\u5E94\u7528\u7684\u80CC\u540E\u8FD8\u6709\u8BB8\u591A\u786C\u4EF6\u57FA\u7840\u8BBE\u65BD\u652F\u6301\uFF0C\u5404\u4E2A\u4E92\u8054\u7F51\u516C\u53F8\u548C\u4F20\u7EDF\u884C\u4E1A\u516C\u53F8\u90FD\u4E0D\u9057\u4F59\u529B\u5730\u300C\u89E6\u7F51\u300D\uFF0C\u8D2D\u4E70\u670D\u52A1\u5668\u5F00\u529E\u7F51\u7AD9\uFF0C\u5EFA\u8BBE\u6570\u636E\u4E2D\u5FC3\u3001CDN \u548C\u9AD8\u901F\u5149\u7EA4\uFF0C\u6301\u7EED\u5730\u4F18\u5316\u4E0A\u7F51\u4F53\u9A8C\uFF0C\u8BA9 HTTP \u8FD0\u884C\u7684\u8D8A\u6765\u8D8A\u987A\u7545\u3002</p><p><strong>\u5E94\u7528\u5E7F\u6CDB</strong> \u7684\u8FD9\u4E2A\u4F18\u70B9\u4E5F\u5C31\u51B3\u5B9A\u4E86\uFF1A\u65E0\u8BBA\u662F\u521B\u4E1A\u8005\u8FD8\u662F\u6C42\u804C\u8005\uFF0C\u65E0\u8BBA\u662F\u505A\u7F51\u7AD9\u670D\u52A1\u5668\u8FD8\u662F\u5199\u5E94\u7528\u5BA2\u6237\u7AEF\uFF0CHTTP \u534F\u8BAE\u90FD\u662F\u5FC5\u987B\u8981\u638C\u63E1\u7684\u57FA\u672C\u6280\u80FD\u3002</p><h2 id="\u65E0\u72B6\u6001" tabindex="-1">\u65E0\u72B6\u6001 <a class="header-anchor" href="#\u65E0\u72B6\u6001" aria-hidden="true">#</a></h2><p>\u770B\u8FC7\u4E86\u4E24\u4E2A\u4F18\u70B9\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u770B\u4E00\u628A <strong>\u53CC\u5203\u5251</strong> \uFF0C\u4E5F\u5C31\u662F\u4E0A\u4E00\u8BB2\u4E2D\u8BF4\u5230\u7684 <strong>\u65E0\u72B6\u6001</strong>\uFF0C\u5B83\u5BF9\u4E8E HTTP \u6765\u8BF4\u65E2\u662F\u4F18\u70B9\u4E5F\u662F\u7F3A\u70B9\u3002</p><p>\u65E0\u72B6\u6001\u6709\u4EC0\u4E48\u597D\u5904\u5462\uFF1F</p><p>\u56E0\u4E3A\u670D\u52A1\u5668\u6CA1\u6709\u8BB0\u5FC6\u80FD\u529B\uFF0C\u6240\u4EE5\u5C31\u4E0D\u9700\u8981\u989D\u5916\u7684\u8D44\u6E90\u6765\u8BB0\u5F55\u72B6\u6001\u4FE1\u606F\uFF0C\u4E0D\u4EC5\u5B9E\u73B0\u4E0A\u4F1A\u7B80\u5355\u4E00\u4E9B\uFF0C\u800C\u4E14\u8FD8\u80FD\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u8D1F\u62C5\uFF0C\u80FD\u591F\u628A\u66F4\u591A\u7684 CPU \u548C\u5185\u5B58\u7528\u6765\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002</p><p>\u800C\u4E14\uFF0C\u65E0\u72B6\u6001\u4E5F\u8868\u793A\u670D\u52A1\u5668\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u6CA1\u6709\u72B6\u6001\u7684\u5DEE\u5F02\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u7EC4\u6210\u96C6\u7FA4\uFF0C\u8BA9\u8D1F\u8F7D\u5747\u8861\u628A\u8BF7\u6C42\u8F6C\u53D1\u5230\u4EFB\u610F\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u72B6\u6001\u4E0D\u4E00\u81F4\u5BFC\u81F4\u5904\u7406\u51FA\u9519\uFF0C\u4F7F\u7528\u5806\u673A\u5668\u7684\u7B28\u529E\u6CD5\u8F7B\u677E\u5B9E\u73B0\u9AD8\u5E76\u53D1\u9AD8\u53EF\u7528\u3002</p><p>\u90A3\u4E48\uFF0C\u65E0\u72B6\u6001\u53C8\u6709\u4EC0\u4E48\u574F\u5904\u5462\uFF1F</p><p>\u65E2\u7136\u670D\u52A1\u5668\u6CA1\u6709\u8BB0\u5FC6\u80FD\u529B\uFF0C\u5B83\u5C31\u65E0\u6CD5\u652F\u6301\u9700\u8981\u8FDE\u7EED\u591A\u4E2A\u6B65\u9AA4\u7684\u4E8B\u52A1\u64CD\u4F5C\u3002\u4F8B\u5982\u7535\u5546\u8D2D\u7269\uFF0C\u9996\u5148\u8981\u767B\u5F55\uFF0C\u7136\u540E\u6DFB\u52A0\u8D2D\u7269\u8F66\uFF0C\u518D\u4E0B\u5355\u3001\u7ED3\u7B97\u3001\u652F\u4ED8\uFF0C\u8FD9\u4E00\u7CFB\u5217\u64CD\u4F5C\u90FD\u9700\u8981\u77E5\u9053\u7528\u6237\u7684\u8EAB\u4EFD\u624D\u884C\uFF0C\u4F46\u65E0\u72B6\u6001\u670D\u52A1\u5668\u662F\u4E0D\u77E5\u9053\u8FD9\u4E9B\u8BF7\u6C42\u662F\u76F8\u4E92\u5173\u8054\u7684\uFF0C\u6BCF\u6B21\u90FD\u5F97\u95EE\u4E00\u904D\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u4E0D\u4EC5\u9EBB\u70E6\uFF0C\u800C\u4E14\u8FD8\u589E\u52A0\u4E86\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u4F20\u8F93\u91CF\u3002</p><p>\u6240\u4EE5\uFF0CHTTP \u534F\u8BAE\u6700\u597D\u662F\u65E2\u65E0\u72B6\u6001\u53C8\u6709\u72B6\u6001\uFF0C\u4E0D\u8FC7\u8FD8\u771F\u6709\u9C7C\u548C\u718A\u638C\u4E24\u8005\u517C\u5F97\u8FD9\u6837\u7684\u597D\u4E8B\uFF0C\u8FD9\u5C31\u662F\u5C0F\u751C\u997C Cookie \u6280\u672F\uFF08\u540E\u9762\u7AE0\u8282\u8BB2\u89E3\uFF09\u3002</p><h2 id="\u660E\u6587" tabindex="-1">\u660E\u6587 <a class="header-anchor" href="#\u660E\u6587" aria-hidden="true">#</a></h2><p>HTTP \u534F\u8BAE\u91CC\u8FD8\u6709\u4E00\u628A\u4F18\u7F3A\u70B9\u4E00\u4F53\u7684\u53CC\u5203\u5251\uFF0C\u5C31\u662F <strong>\u660E\u6587\u4F20\u8F93</strong>\u3002</p><p><strong>\u660E\u6587</strong> \u610F\u601D\u5C31\u662F\u534F\u8BAE\u91CC\u7684\u62A5\u6587\uFF08\u51C6\u786E\u5730\u8BF4\u662F header \u90E8\u5206\uFF09\u4E0D\u4F7F\u7528\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u800C\u662F\u7528\u7B80\u5355\u53EF\u9605\u8BFB\u7684\u6587\u672C\u5F62\u5F0F\u3002</p><p>\u5BF9\u6BD4 TCP\u3001UDP \u8FD9\u6837\u7684\u4E8C\u8FDB\u5236\u534F\u8BAE\uFF0C\u5B83\u7684\u4F18\u70B9\u663E\u800C\u6613\u89C1\uFF0C\u4E0D\u9700\u8981\u501F\u52A9\u4EFB\u4F55\u5916\u90E8\u5DE5\u5177\uFF0C\u7528\u6D4F\u89C8\u5668\u3001Wireshark \u6216\u8005 tcpdump \u6293\u5305\u540E\uFF0C\u76F4\u63A5\u7528\u8089\u773C\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u67E5\u770B\u6216\u8005\u4FEE\u6539\uFF0C\u4E3A\u6211\u4EEC\u7684\u5F00\u53D1\u8C03\u8BD5\u5DE5\u4F5C\u5E26\u6765\u6781\u5927\u7684\u4FBF\u5229\u3002</p><p>\u5F53\u7136\uFF0C\u660E\u6587\u7684\u7F3A\u70B9\u4E5F\u662F\u4E00\u6837\u663E\u800C\u6613\u89C1\uFF0CHTTP \u62A5\u6587\u7684\u6240\u6709\u4FE1\u606F\u90FD\u4F1A\u66B4\u9732\u5728\u5149\u5929\u5316\u65E5\u4E4B\u4E0B\uFF0C<strong>\u5728\u6F2B\u957F\u7684\u4F20\u8F93\u94FE\u8DEF\u7684\u6BCF\u4E00\u4E2A\u73AF\u8282\u4E0A\u90FD\u6BEB\u65E0\u9690\u79C1\u53EF\u8A00</strong> \uFF0C\u4E0D\u6000\u597D\u610F\u7684\u4EBA\u53EA\u8981\u4FB5\u5165\u4E86\u8FD9\u4E2A\u94FE\u8DEF\u91CC\u7684\u67D0\u4E2A\u8BBE\u5907\uFF0C\u7B80\u5355\u5730\u65C1\u8DEF\u4E00\u4E0B\u6D41\u91CF\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u901A\u4FE1\u7684\u7AA5\u89C6\u3002</p><p>\u4F60\u6709\u6CA1\u6709\u542C\u8BF4\u8FC7\u514D\u8D39 WiFi \u9677\u9631\u4E4B\u7C7B\u7684\u65B0\u95FB\u5462\uFF1F</p><p>\u9ED1\u5BA2\u5C31\u662F\u5229\u7528\u4E86 HTTP \u660E\u6587\u4F20\u8F93\u7684\u7F3A\u70B9\uFF0C\u5728\u516C\u5171\u573A\u6240\u67B6\u8BBE\u4E00\u4E2A WiFi \u70ED\u70B9\u5F00\u59CB\u9493\u9C7C\uFF0C\u8BF1\u9A97\u7F51\u6C11\u4E0A\u7F51\u3002\u4E00\u65E6\u4F60\u8FDE\u4E0A\u4E86\u8FD9\u4E2A WiFi \u70ED\u70B9\uFF0C<strong>\u6240\u6709\u7684\u6D41\u91CF\u90FD\u4F1A\u88AB\u622A\u83B7\u4FDD\u5B58</strong> \uFF0C\u91CC\u9762\u5982\u679C\u6709\u94F6\u884C\u5361\u53F7\u3001\u7F51\u7AD9\u5BC6\u7801\u7B49\u654F\u611F\u4FE1\u606F\u7684\u8BDD\u90A3\u5C31\u5371\u9669\u4E86\uFF0C\u9ED1\u5BA2\u62FF\u5230\u4E86\u8FD9\u4E9B\u6570\u636E\u5C31\u53EF\u4EE5\u5192\u5145\u4F60\u4E3A\u6240\u6B32\u4E3A\u3002</p><h2 id="\u4E0D\u5B89\u5168" tabindex="-1">\u4E0D\u5B89\u5168 <a class="header-anchor" href="#\u4E0D\u5B89\u5168" aria-hidden="true">#</a></h2><p>\u4E0E\u660E\u6587\u7F3A\u70B9\u76F8\u5173\u4F46\u4E0D\u5B8C\u5168\u7B49\u540C\u7684\u53E6\u4E00\u4E2A\u7F3A\u70B9\u662F\u4E0D\u5B89\u5168\u3002</p><p>\u5B89\u5168\u6709\u5F88\u591A\u7684\u65B9\u9762\uFF0C\u660E\u6587\u53EA\u662F <strong>\u673A\u5BC6</strong> \u65B9\u9762\u7684\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5728 <strong>\u8EAB\u4EFD\u8BA4\u8BC1</strong> \u548C <strong>\u5B8C\u6574\u6027\u6821\u9A8C</strong> \u8FD9\u4E24\u65B9\u9762 HTTP \u4E5F\u662F\u6B20\u7F3A\u7684\u3002</p><p>\u8EAB\u4EFD\u8BA4\u8BC1\u7B80\u5355\u6765\u8BF4\u5C31\u662F <strong>\u600E\u4E48\u8BC1\u660E\u4F60\u5C31\u662F\u4F60</strong> \u3002\u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\u6BD4\u8F83\u597D\u529E\uFF0C\u4F60\u53EF\u4EE5\u62FF\u51FA\u8EAB\u4EFD\u8BC1\u3001\u9A7E\u7167\u6216\u8005\u62A4\u7167\uFF0C\u4E0A\u9762\u6709\u7167\u7247\u548C\u6743\u5A01\u673A\u6784\u7684\u76D6\u7AE0\uFF0C\u80FD\u591F\u8BC1\u660E\u4F60\u7684\u8EAB\u4EFD\u3002</p><p>\u4F46\u5728\u865A\u62DF\u7684\u7F51\u7EDC\u4E16\u754C\u91CC\u8FD9\u5374\u662F\u4E2A\u9EBB\u70E6\u4E8B\u3002HTTP \u6CA1\u6709\u63D0\u4F9B\u6709\u6548\u7684\u624B\u6BB5\u6765\u786E\u8BA4\u901A\u4FE1\u53CC\u65B9\u7684\u771F\u5B9E\u8EAB\u4EFD\u3002\u867D\u7136\u534F\u8BAE\u91CC\u6709\u4E00\u4E2A\u57FA\u672C\u7684\u8BA4\u8BC1\u673A\u5236\uFF0C\u4F46\u56E0\u4E3A\u521A\u624D\u6240\u8BF4\u7684\u660E\u6587\u4F20\u8F93\u7F3A\u70B9\uFF0C\u8FD9\u4E2A\u673A\u5236\u51E0\u4E4E\u53EF\u4EE5\u8BF4\u662F\u300C\u7EB8\u7CCA\u7684\u300D\uFF0C\u975E\u5E38\u5BB9\u6613\u88AB\u653B\u7834\u3002\u5982\u679C\u4EC5\u4F7F\u7528 HTTP \u534F\u8BAE\uFF0C\u5F88\u53EF\u80FD\u4F60\u4F1A\u8FDE\u5230\u4E00\u4E2A\u9875\u9762\u4E00\u6A21\u4E00\u6837\u4F46\u5374\u662F\u4E2A\u5047\u5192\u7684\u7F51\u7AD9\uFF0C\u7136\u540E\u518D\u88AB\u9493\u8D70\u5404\u79CD\u79C1\u4EBA\u4FE1\u606F\u3002</p><p>HTTP \u534F\u8BAE\u4E5F\u4E0D\u652F\u6301\u300C\u5B8C\u6574\u6027\u6821\u9A8C\u300D\uFF0C\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u5BB9\u6613\u88AB\u7A9C\u6539\u800C\u65E0\u6CD5\u9A8C\u8BC1\u771F\u4F2A\u3002</p><p>\u6BD4\u5982\uFF0C\u4F60\u6536\u5230\u4E86\u4E00\u6761\u94F6\u884C\u7528 HTTP \u53D1\u6765\u7684\u6D88\u606F\uFF1A\u5C0F\u660E\u5411\u4F60\u8F6C\u8D26\u4E00\u767E\u5143\uFF0C\u4F60\u65E0\u6CD5\u77E5\u9053\u5C0F\u660E\u662F\u5426\u771F\u7684\u5C31\u53EA\u8F6C\u4E86\u4E00\u767E\u5143\uFF0C\u4E5F\u8BB8\u4ED6\u8F6C\u4E86\u4E00\u5343\u5143\u6216\u8005\u4E94\u5341\u5143\uFF0C\u4F46\u88AB\u9ED1\u5BA2\u7A9C\u6539\u6210\u4E86\u4E00\u767E\u5143\uFF0C\u771F\u5B9E\u60C5\u51B5\u5230\u5E95\u662F\u4EC0\u4E48\u6837\u5B50 HTTP \u534F\u8BAE\u6CA1\u6709\u529E\u6CD5\u7ED9\u4F60\u7B54\u6848\u3002</p><p>\u867D\u7136\u94F6\u884C\u53EF\u4EE5\u7528 MD5\u3001SHA1 \u7B49\u7B97\u6CD5\u7ED9\u62A5\u6587\u52A0\u4E0A\u6570\u5B57\u6458\u8981\uFF0C\u4F46\u8FD8\u662F\u56E0\u4E3A\u660E\u6587\u8FD9\u4E2A\u81F4\u547D\u7F3A\u70B9\uFF0C\u9ED1\u5BA2\u53EF\u4EE5\u8FDE\u540C\u6458\u8981\u4E00\u540C\u4FEE\u6539\uFF0C\u6700\u7EC8\u8FD8\u662F\u5224\u65AD\u4E0D\u51FA\u62A5\u6587\u662F\u5426\u88AB\u7A9C\u6539\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3 HTTP \u4E0D\u5B89\u5168\u7684\u7F3A\u70B9\uFF0C\u6240\u4EE5\u5C31\u51FA\u73B0\u4E86 HTTPS\uFF0C\u8FD9\u4E2A\u6211\u4EEC\u4EE5\u540E\u518D\u8BF4\u3002</p><h2 id="\u6027\u80FD" tabindex="-1">\u6027\u80FD <a class="header-anchor" href="#\u6027\u80FD" aria-hidden="true">#</a></h2><p>\u6700\u540E\u6211\u4EEC\u6765\u8C08\u8C08 HTTP \u7684\u6027\u80FD\uFF0C\u53EF\u4EE5\u7528\u516D\u4E2A\u5B57\u6765\u6982\u62EC\uFF1A<strong>\u4E0D\u7B97\u5DEE\uFF0C\u4E0D\u591F\u597D</strong> \u3002</p><p>HTTP \u534F\u8BAE\u57FA\u4E8E TCP/IP\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86\u8BF7\u6C42 - \u5E94\u7B54\u7684\u901A\u4FE1\u6A21\u5F0F\uFF0C\u6240\u4EE5\u6027\u80FD\u7684\u5173\u952E\u5C31\u5728\u8FD9\u4E24\u70B9\u4E0A\u3002</p><p>\u5FC5\u987B\u8981\u8BF4\u7684\u662F\uFF0CTCP \u7684\u6027\u80FD\u662F\u4E0D\u5DEE\u7684\uFF0C\u5426\u5219\u4E5F\u4E0D\u4F1A\u7EB5\u6A2A\u4E92\u8054\u7F51\u6C5F\u6E56\u56DB\u5341\u4F59\u8F7D\u4E86\uFF0C\u800C\u4E14\u5B83\u5DF2\u7ECF\u88AB\u7814\u7A76\u7684\u5F88\u900F\uFF0C\u96C6\u6210\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u91CC\u7ECF\u8FC7\u4E86\u7EC6\u81F4\u7684\u4F18\u5316\uFF0C\u8DB3\u4EE5\u5E94\u4ED8\u5927\u591A\u6570\u7684\u573A\u666F\u3002</p><p>\u53EA\u53EF\u60DC\u5982\u4ECA\u7684\u6C5F\u6E56\u5DF2\u7ECF\u4E0D\u662F\u4ECE\u524D\u7684\u6C5F\u6E56\uFF0C\u73B0\u5728\u4E92\u8054\u7F51\u7684\u7279\u70B9\u662F\u79FB\u52A8\u548C\u9AD8\u5E76\u53D1\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u7A33\u5B9A\u7684\u8FDE\u63A5\u8D28\u91CF\uFF0C\u6240\u4EE5\u5728 TCP \u5C42\u9762\u4E0A HTTP \u534F\u8BAE\u6709\u65F6\u5019\u5C31\u4F1A\u8868\u73B0\u7684\u4E0D\u591F\u597D\u3002</p><p>\u800C <strong>\u8BF7\u6C42 - \u5E94\u7B54</strong> \u6A21\u5F0F\u5219\u52A0\u5267\u4E86 HTTP \u7684\u6027\u80FD\u95EE\u9898\uFF0C\u8FD9\u5C31\u662F\u8457\u540D\u7684 <strong>\u961F\u5934\u963B\u585E</strong>\uFF08Head-of-line blocking\uFF09\uFF0C\u5F53\u987A\u5E8F\u53D1\u9001\u7684\u8BF7\u6C42\u5E8F\u5217\u4E2D\u7684\u4E00\u4E2A\u8BF7\u6C42\u56E0\u4E3A\u67D0\u79CD\u539F\u56E0\u88AB\u963B\u585E\u65F6\uFF0C\u5728\u540E\u9762\u6392\u961F\u7684\u6240\u6709\u8BF7\u6C42\u4E5F\u4E00\u5E76\u88AB\u963B\u585E\uFF0C\u4F1A\u5BFC\u81F4\u5BA2\u6237\u7AEF\u8FDF\u8FDF\u6536\u4E0D\u5230\u6570\u636E\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u8BDE\u751F\u51FA\u4E86\u4E00\u4E2A\u4E13\u95E8\u7684\u7814\u7A76\u8BFE\u9898 Web \u6027\u80FD\u4F18\u5316\uFF0CHTTP \u5B98\u65B9\u6807\u51C6\u91CC\u5C31\u6709 <strong>\u7F13\u5B58</strong> \u4E00\u7AE0\uFF08RFC7234\uFF09\uFF0C\u975E\u5B98\u65B9\u7684\u82B1\u62DB\u5C31\u66F4\u591A\u4E86\uFF0C\u4F8B\u5982\u5207\u56FE\u3001\u6570\u636E\u5185\u5D4C\u4E0E\u5408\u5E76\uFF0C\u57DF\u540D\u5206\u7247\u3001JavaScript \u9ED1\u79D1\u6280\u7B49\u7B49\u3002</p><p>\u4E0D\u8FC7\u73B0\u5728\u5DF2\u7ECF\u6709\u4E86\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\uFF1AHTTP/2 \u548C HTTP/3\uFF0C\u540E\u9762\u6211\u4E5F\u4F1A\u5C55\u5F00\u6765\u8BB2\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><ol><li>HTTP \u6700\u5927\u7684\u4F18\u70B9\u662F\u7B80\u5355\u3001\u7075\u6D3B\u548C\u6613\u4E8E\u6269\u5C55\uFF1B</li><li>HTTP \u62E5\u6709\u6210\u719F\u7684\u8F6F\u786C\u4EF6\u73AF\u5883\uFF0C\u5E94\u7528\u7684\u975E\u5E38\u5E7F\u6CDB\uFF0C\u662F\u4E92\u8054\u7F51\u7684\u57FA\u7840\u8BBE\u65BD\uFF1B</li><li>HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u96C6\u7FA4\u5316\uFF0C\u6269\u5C55\u6027\u80FD\uFF0C\u4F46\u6709\u65F6\u4E5F\u9700\u8981\u7528 Cookie \u6280\u672F\u6765\u5B9E\u73B0\u201C\u6709\u72B6\u6001\u201D\uFF1B</li><li>HTTP \u662F\u660E\u6587\u4F20\u8F93\uFF0C\u6570\u636E\u5B8C\u5168\u8089\u773C\u53EF\u89C1\uFF0C\u80FD\u591F\u65B9\u4FBF\u5730\u7814\u7A76\u5206\u6790\uFF0C\u4F46\u4E5F\u5BB9\u6613\u88AB\u7A83\u542C\uFF1B</li><li>HTTP \u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u65E0\u6CD5\u9A8C\u8BC1\u901A\u4FE1\u53CC\u65B9\u7684\u8EAB\u4EFD\uFF0C\u4E5F\u4E0D\u80FD\u5224\u65AD\u62A5\u6587\u662F\u5426\u88AB\u7A9C\u6539\uFF1B</li><li>HTTP \u7684\u6027\u80FD\u4E0D\u7B97\u5DEE\uFF0C\u4F46\u4E0D\u5B8C\u5168\u9002\u5E94\u73B0\u5728\u7684\u4E92\u8054\u7F51\uFF0C\u8FD8\u6709\u5F88\u5927\u7684\u63D0\u5347\u7A7A\u95F4\u3002</li></ol><p>\u867D\u7136 HTTP \u514D\u4E0D\u4E86\u8FD9\u6837\u90A3\u6837\u7684\u7F3A\u70B9\uFF0C\u4F46\u4F60\u4E5F\u4E0D\u8981\u6015\uFF0C\u522B\u5FD8\u4E86\u5B83\u6709\u4E00\u4E2A\u6700\u91CD\u8981\u7684\u7075\u6D3B\u53EF\u6269\u5C55\u7684\u4F18\u70B9\uFF0C\u6240\u6709\u7684\u7F3A\u70B9\u90FD\u53EF\u4EE5\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u60F3\u529E\u6CD5\u89E3\u51B3\uFF0C\u63A5\u4E0B\u6765\u7684\u8FDB\u9636\u7BC7\u548C\u5B89\u5168\u7BC7\u5C31\u4F1A\u8BB2\u5230\u3002</p><h2 id="\u8BFE\u4E0B\u4F5C\u4E1A" tabindex="-1">\u8BFE\u4E0B\u4F5C\u4E1A <a class="header-anchor" href="#\u8BFE\u4E0B\u4F5C\u4E1A" aria-hidden="true">#</a></h2><ol><li>\u4F60\u6700\u559C\u6B22\u7684 HTTP \u4F18\u70B9\u662F\u54EA\u4E2A\uFF1F\u6700\u4E0D\u559C\u6B22\u7684\u7F3A\u70B9\u53C8\u662F\u54EA\u4E2A\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</li><li>\u4F60\u80FD\u591F\u518D\u8FDB\u4E00\u6B65\u6269\u5C55\u6216\u8865\u5145\u8BBA\u8FF0\u4ECA\u5929\u63D0\u5230\u8FD9\u4E9B\u4F18\u70B9\u6216\u7F3A\u70B9\u5417\uFF1F</li><li>\u4F60\u80FD\u8BD5\u7740\u9488\u5BF9\u8FD9\u4E9B\u7F3A\u70B9\u63D0\u51FA\u4E00\u4E9B\u81EA\u5DF1\u7684\u89E3\u51B3\u65B9\u6848\u5417\uFF1F</li></ol><h2 id="\u8BFE\u5916\u5C0F\u8D34\u58EB" tabindex="-1">\u8BFE\u5916\u5C0F\u8D34\u58EB <a class="header-anchor" href="#\u8BFE\u5916\u5C0F\u8D34\u58EB" aria-hidden="true">#</a></h2><ul><li>\u7B80\u6D01\u81F3\u4E0A\uFF0C\u4E5F\u662F Apple \u516C\u53F8\u524D\u9886\u5BFC\u4EBA\u4E54\u5E03\u65AF\u6240\u5D07\u5C1A\u7684\u8BBE\u8BA1\u7406\u5FF5</li><li>\u4E0E DNT \u7C7B\u4F3C\u7684\u8FD8\u6709 P3P\uFF08Platform for Privacy Preferences Project\uFF09\u5B57\u6BB5\uFF0C\u7528\u6765\u63A7\u5236\u7F51\u7AD9\u5BF9\u7528\u6237\u7684\u9690\u79C1\u8BBF\u95EE\uFF0C\u540C\u6837\u4E5F\u5931\u8D25\u4E86</li><li>\u5904\u4E8E\u5B89\u5168\u539F\u56E0\uFF0C\u7EDD\u5927\u591A\u6570\u7F51\u7AD9\u90FD\u5C01\u7981\u4E86 80/8080 \u4EE5\u5916\u7684\u7AEF\u53E3\u53F7\uFF0C\u53EA\u5141\u8BB8 HTTP \u534F\u8BAE\u7A7F\u900F\uFF0C\u8FD9\u4E5F\u662F\u9020\u6210 HTTP \u6D41\u884C\u7684\u5BA2\u89C2\u539F\u56E0\u4E4B\u4E00</li><li>HTTP/1.1 \u4EE5\u6587\u672C\u683C\u5F0F\u4F20\u8F93 header\uFF0C\u6709\u4E25\u91CD\u7684\u6570\u636E\u5197\u4F59\uFF0C\u4E5F\u5F71\u54CD\u4E86\u5B83\u7684\u6027\u80FD</li></ul>',57),n=[a];function l(p,o,s,h,d,P){return t(),r("div",null,n)}const g=e(i,[["render",l]]);export{H as __pageData,g as default};
