import{_ as e,c as p,o as s,a as n}from"./app.771a7ea0.js";const T="/vitepress-demo/assets/d8f8606948bbd63c31466e464c1956b0.48f55e83.png",a="/vitepress-demo/assets/19be1138574589458c96040e1a23b3a7.7f306ce0.png",b=JSON.parse('{"title":"04 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230 HTTP/2 \u5417\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTTP/2 \u7684\u4F18\u70B9","slug":"http-2-\u7684\u4F18\u70B9","link":"#http-2-\u7684\u4F18\u70B9","children":[]},{"level":2,"title":"HTTP/2 \u7684\u7F3A\u70B9","slug":"http-2-\u7684\u7F3A\u70B9","link":"#http-2-\u7684\u7F3A\u70B9","children":[]},{"level":2,"title":"\u5E94\u8BE5\u8FC1\u79FB\u5230 HTTP/2 \u5417\uFF1F","slug":"\u5E94\u8BE5\u8FC1\u79FB\u5230-http-2-\u5417\uFF1F","link":"#\u5E94\u8BE5\u8FC1\u79FB\u5230-http-2-\u5417\uFF1F","children":[]},{"level":2,"title":"\u914D\u7F6E HTTP/2","slug":"\u914D\u7F6E-http-2","link":"#\u914D\u7F6E-http-2","children":[]},{"level":2,"title":"\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08ALPN\uFF09","slug":"\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09","link":"#\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]},{"level":2,"title":"\u8BFE\u4E0B\u4F5C\u4E1A","slug":"\u8BFE\u4E0B\u4F5C\u4E1A","link":"#\u8BFE\u4E0B\u4F5C\u4E1A","children":[]},{"level":2,"title":"\u62D3\u5C55\u9605\u8BFB","slug":"\u62D3\u5C55\u9605\u8BFB","link":"#\u62D3\u5C55\u9605\u8BFB","children":[]}],"relativePath":"http-protocol/06/04.md","lastUpdated":1662487438000}'),l={name:"http-protocol/06/04.md"},t=n(`<h1 id="_04-\u6211\u5E94\u8BE5\u8FC1\u79FB\u5230-http-2-\u5417\uFF1F" tabindex="-1">04 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230 HTTP/2 \u5417\uFF1F <a class="header-anchor" href="#_04-\u6211\u5E94\u8BE5\u8FC1\u79FB\u5230-http-2-\u5417\uFF1F" aria-hidden="true">#</a></h1><p>\u8FD9\u4E00\u8BB2\u662F\u98DE\u7FD4\u7BC7\u7684\u6700\u540E\u4E00\u8BB2\uFF0C\u800C HTTP \u7684\u6240\u6709\u77E5\u8BC6\u4E5F\u5DEE\u4E0D\u591A\u5FEB\u5B66\u5B8C\u4E86\u3002</p><p>\u524D\u9762\u4F60\u5DF2\u7ECF\u770B\u5230\u4E86\u65B0\u7684 HTTP/2 \u548C HTTP/3 \u534F\u8BAE\uFF0C\u4E86\u89E3\u4E86\u5B83\u4EEC\u7684\u7279\u70B9\u548C\u5DE5\u4F5C\u539F\u7406\uFF0C\u5982\u679C\u518D\u8054\u7CFB\u4E0A\u524D\u51E0\u5929\u5B89\u5168\u7BC7\u7684 HTTPS\uFF0C\u4F60\u53EF\u80FD\u53C8\u4F1A\u53D1\u51FA\u7591\u95EE\uFF1A</p><p>\u521A\u8D39\u4E86\u597D\u5927\u7684\u529B\u6C14\u5347\u7EA7\u5230 HTTPS\uFF0C\u8FD9\u53C8\u51FA\u4E86\u4E00\u4E2A HTTP/2\uFF0C\u8FD8\u6709\u518D\u6B21\u5347\u7EA7\u7684\u5FC5\u8981\u5417\uFF1F</p><p>\u4E0E\u5404\u5927\u6D4F\u89C8\u5668\u5F3A\u63A8 HTTPS \u7684\u5F85\u9047\u4E0D\u4E00\u6837\uFF0CHTTP/2 \u7684\u516C\u5E03\u53EF\u8C13\u662F\u6CE2\u6F9C\u4E0D\u60CA\u3002\u867D\u7136\u5B83\u662F HTTP \u534F\u8BAE\u7684\u4E00\u4E2A\u91CD\u5927\u5347\u7EA7\uFF0C\u4F46 Apple\u3001Google \u7B49\u79D1\u6280\u5DE8\u5934\u5E76\u6CA1\u6709\u50CF HTTPS \u90A3\u6837\u7ED9\u4E88\u5927\u91CF\u8D44\u6E90\u7684\u652F\u6301\u3002</p><p>\u76F4\u5230\u4ECA\u5929\uFF0CHTTP/2 \u5728\u4E92\u8054\u7F51\u4E0A\u8FD8\u662F\u5904\u4E8E\u201C\u4E0D\u6E29\u4E0D\u706B\u201D\u7684\u72B6\u6001\uFF0C\u867D\u7136\u5DF2\u7ECF\u6709\u4E86\u4E0D\u5C11\u7684\u7F51\u7AD9\u6539\u9020\u5347\u7EA7\u5230\u4E86 HTTP/2\uFF0C\u4F46\u666E\u53CA\u7684\u901F\u5EA6\u8FDC\u4E0D\u53CA HTTPS\u3002</p><p>\u6240\u4EE5\uFF0C\u4F60\u6709\u8FD9\u6837\u7684\u7591\u95EE\u4E5F\u662F\u5F88\u81EA\u7136\u7684\uFF0C\u5347\u7EA7\u5230 HTTP/2 \u7A76\u7ADF\u80FD\u7ED9\u6211\u4EEC\u5E26\u6765\u591A\u5C11\u597D\u5904\u5462\uFF1F\u5230\u5E95\u503C\u4E0D\u503C\u5462\uFF1F</p><h2 id="http-2-\u7684\u4F18\u70B9" tabindex="-1">HTTP/2 \u7684\u4F18\u70B9 <a class="header-anchor" href="#http-2-\u7684\u4F18\u70B9" aria-hidden="true">#</a></h2><p>\u524D\u9762\u7684\u51E0\u8BB2\u4E3B\u8981\u5173\u6CE8\u4E86 HTTP/2 \u7684\u5185\u90E8\u5B9E\u73B0\uFF0C\u4ECA\u5929\u6211\u4EEC\u5C31\u6765\u770B\u770B\u5B83\u6709\u54EA\u4E9B\u4F18\u70B9\u548C\u7F3A\u70B9\u3002</p><p>\u9996\u5148\u8981\u8BF4\u7684\u662F\uFF0CHTTP/2 \u6700\u5927\u7684\u4E00\u4E2A\u4F18\u70B9\u662F <strong>\u5B8C\u5168\u4FDD\u6301\u4E86\u4E0E HTTP/1 \u7684\u517C\u5BB9</strong> \uFF0C\u5728\u8BED\u4E49\u4E0A\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\uFF0C\u4E4B\u524D\u5728 HTTP \u4E0A\u7684\u6240\u6709\u6295\u5165\u90FD\u4E0D\u4F1A\u6D6A\u8D39\u3002</p><p>\u56E0\u4E3A\u517C\u5BB9 HTTP/1\uFF0C\u6240\u4EE5 HTTP/2 \u4E5F\u5177\u6709 HTTP/1 \u7684\u6240\u6709\u4F18\u70B9\uFF0C\u5E76\u4E14\u57FA\u672C\u89E3\u51B3\u4E86 HTTP/1 \u7684\u6240\u6709\u7F3A\u70B9\uFF0C\u5B89\u5168\u4E0E\u6027\u80FD\u517C\u987E\uFF0C<strong>\u53EF\u4EE5\u8BA4\u4E3A\u662F\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS</strong> \u3002</p><p>\u5728\u5B89\u5168\u4E0A\uFF0CHTTP/2 \u5BF9 HTTPS \u5728\u5404\u65B9\u9762\u90FD\u505A\u4E86\u5F3A\u5316\u3002\u4E0B\u5C42\u7684 TLS \u81F3\u5C11\u662F 1.2\uFF0C\u800C\u4E14\u53EA\u80FD\u4F7F\u7528\u524D\u5411\u5B89\u5168\u7684\u5BC6\u7801\u5957\u4EF6\uFF08\u5373 ECDHE\uFF09\uFF0C\u8FD9\u540C\u65F6\u4E5F\u5C31\u9ED8\u8BA4\u5B9E\u73B0\u4E86 <code>TLS False Start</code> \uFF0C\u652F\u6301 1-RTT \u63E1\u624B\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u518D\u52A0\u989D\u5916\u7684\u914D\u7F6E\u5C31\u53EF\u4EE5\u81EA\u52A8\u5B9E\u73B0 HTTPS \u52A0\u901F\u3002</p><p>\u5B89\u5168\u6709\u4E86\u4FDD\u969C\uFF0C\u518D\u6765\u770B HTTP/2 \u5728\u6027\u80FD\u65B9\u9762\u7684\u6539\u8FDB\u3002</p><p>\u4F60\u5E94\u8BE5\u77E5\u9053\uFF0C\u5F71\u54CD\u7F51\u7EDC\u901F\u5EA6\u7684\u4E24\u4E2A\u5173\u952E\u56E0\u7D20\u662F <strong>\u5E26\u5BBD</strong> \u548C <strong>\u5EF6\u8FDF</strong> \uFF0CHTTP/2 \u7684\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u3001\u6D41\u4F18\u5148\u7EA7\u3001\u670D\u52A1\u5668\u63A8\u9001\u7B49\u624B\u6BB5\u5176\u5B9E\u90FD\u662F\u9488\u5BF9\u8FD9\u4E24\u4E2A\u8981\u70B9\u3002</p><p>\u6240\u8C13\u7684\u5E26\u5BBD\u5C31\u662F\u7F51\u7EDC\u7684\u4F20\u8F93\u901F\u5EA6\u3002\u4ECE\u6700\u65E9\u7684 56K/s\uFF0C\u5230\u5982\u4ECA\u7684 100M/s\uFF0C\u867D\u7136\u7F51\u901F\u5DF2\u7ECF\u662F\u4ECA\u975E\u6614\u6BD4\uFF0C\u6BD4\u4ECE\u524D\u5FEB\u4E86\u51E0\u5341\u500D\u3001\u51E0\u767E\u500D\uFF0C\u4F46\u4ECD\u7136\u662F\u7A00\u7F3A\u8D44\u6E90\uFF0C\u56FE\u7247\u3001\u89C6\u9891\u8FD9\u6837\u7684\u591A\u5A92\u4F53\u6570\u636E\u5F88\u5BB9\u6613\u4F1A\u628A\u5E26\u5BBD\u7528\u5C3D\u3002</p><p>\u8282\u7EA6\u5E26\u5BBD\u7684\u57FA\u672C\u624B\u6BB5\u5C31\u662F\u538B\u7F29\uFF0C\u5728 HTTP/1 \u91CC\u53EA\u80FD\u538B\u7F29 body\uFF0C\u800C HTTP/2 \u5219\u53EF\u4EE5\u7528 HPACK \u7B97\u6CD5\u538B\u7F29 header\uFF0C\u8FD9\u5BF9\u9AD8\u6D41\u91CF\u7684\u7F51\u7AD9\u975E\u5E38\u6709\u4EF7\u503C\uFF0C\u6709\u6570\u636E\u8868\u660E\u80FD\u8282\u7701\u5927\u6982 5%~10% \u7684\u6D41\u91CF\uFF0C\u8FD9\u662F\u5B9E\u5B9E\u5728\u5728\u7684\u771F\u91D1\u767D\u94F6\u3002</p><p>\u4E0E HTTP/1 \u5E76\u53D1\u591A\u4E2A\u8FDE\u63A5\u4E0D\u540C\uFF0CHTTP/2 \u7684\u591A\u8DEF\u590D\u7528\u7279\u6027\u8981\u6C42\u5BF9 <strong>\u4E00\u4E2A\u57DF\u540D\uFF08\u6216\u8005 IP\uFF09\u53EA\u7528\u4E00\u4E2A TCP \u8FDE\u63A5</strong> \uFF0C\u6240\u6709\u7684\u6570\u636E\u90FD\u5728\u8FD9\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u4F20\u8F93\uFF0C\u8FD9\u6837\u4E0D\u4EC5\u8282\u7EA6\u4E86\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u5668\u548C\u7F51\u7EDC\u7684\u8D44\u6E90\uFF0C\u8FD8\u53EF\u4EE5\u628A\u5E26\u5BBD\u8DD1\u6EE1\uFF0C\u8BA9 TCP \u5145\u5206\u5403\u9971\u3002</p><p>\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u5728 HTTP/1 \u91CC\u7684\u957F\u8FDE\u63A5\uFF0C<strong>\u867D\u7136\u662F\u53CC\u5411\u901A\u4FE1\uFF0C\u4F46\u4EFB\u610F\u4E00\u4E2A\u65F6\u95F4\u70B9\u5B9E\u9645\u4E0A\u8FD8\u662F\u5355\u5411\u7684</strong> \uFF1A\u4E0A\u884C\u8BF7\u6C42\u65F6\u4E0B\u884C\u7A7A\u95F2\uFF0C\u4E0B\u884C\u54CD\u5E94\u65F6\u4E0A\u884C\u7A7A\u95F2\uFF0C\u518D\u52A0\u4E0A <strong>\u961F\u5934\u963B\u585E</strong> \uFF0C\u5B9E\u9645\u7684\u5E26\u5BBD\u6253\u4E86\u4E2A\u5BF9\u6298\u8FD8\u4E0D\u6B62\u3002</p><p>\u800C\u5728 HTTP/2 \u91CC\uFF0C\u591A\u8DEF\u590D\u7528\u5219\u8BA9 TCP \u5F00\u8DB3\u4E86\u9A6C\u529B\uFF0C\u5168\u901F\u72C2\u5954\uFF0C\u591A\u4E2A\u8BF7\u6C42\u54CD\u5E94\u5E76\u53D1\uFF0C\u6BCF\u65F6\u6BCF\u523B\u4E0A\u4E0B\u884C\u65B9\u5411\u4E0A\u90FD\u6709\u6D41\u5728\u4F20\u8F93\u6570\u636E\uFF0C\u6CA1\u6709\u7A7A\u95F2\u7684\u65F6\u5019\uFF0C\u5E26\u5BBD\u7684\u5229\u7528\u7387\u80FD\u591F\u63A5\u8FD1 100% \u3002\u6240\u4EE5\uFF0CHTTP/2 \u53EA\u4F7F\u7528\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u5C31\u80FD\u62B5\u5F97\u8FC7 HTTP/1 \u91CC\u7684\u4E94\u516D\u4E2A\u8FDE\u63A5\u3002</p><p>\u4E0D\u8FC7\u6D41\u4E5F\u53EF\u80FD\u4F1A\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u7B49\u5F85\u5BFC\u81F4\u7684\u963B\u585E\uFF0C\u8FD9\u5C31\u662F <strong>\u5EF6\u8FDF</strong> \uFF0C\u6240\u4EE5 HTTP/2 \u7684\u5176\u4ED6\u7279\u6027\u5C31\u6D3E\u4E0A\u4E86\u7528\u573A\u3002</p><p><strong>\u4F18\u5148\u7EA7</strong> \u53EF\u4EE5\u8BA9\u5BA2\u6237\u7AEF\u544A\u8BC9\u670D\u52A1\u5668\uFF0C\u54EA\u4E2A\u6587\u4EF6\u66F4\u91CD\u8981\uFF0C\u66F4\u9700\u8981\u4F18\u5148\u4F20\u8F93\uFF0C\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u8C03\u9AD8\u6D41\u7684\u4F18\u5148\u7EA7\uFF0C\u5408\u7406\u5730\u5206\u914D\u6709\u9650\u7684\u5E26\u5BBD\u8D44\u6E90\uFF0C\u8BA9\u9AD8\u4F18\u5148\u7EA7\u7684 HTML\u3001\u56FE\u7247\u66F4\u5FEB\u5730\u5230\u8FBE\u5BA2\u6237\u7AEF\uFF0C\u5C3D\u65E9\u52A0\u8F7D\u663E\u793A\u3002</p><p><strong>\u670D\u52A1\u5668\u63A8\u9001</strong> \u4E5F\u662F\u964D\u4F4E\u5EF6\u8FDF\u7684\u6709\u6548\u624B\u6BB5\uFF0C\u5B83\u4E0D\u9700\u8981\u5BA2\u6237\u7AEF\u9884\u5148\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u76F4\u63A5\u5C31\u53D1\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u5C31\u7701\u53BB\u4E86\u5BA2\u6237\u7AEF\u89E3\u6790 HTML \u518D\u8BF7\u6C42\u7684\u65F6\u95F4\u3002</p><h2 id="http-2-\u7684\u7F3A\u70B9" tabindex="-1">HTTP/2 \u7684\u7F3A\u70B9 <a class="header-anchor" href="#http-2-\u7684\u7F3A\u70B9" aria-hidden="true">#</a></h2><p>\u8BF4\u4E86\u4E00\u5927\u5806 HTTP/2 \u7684\u4F18\u70B9\uFF0C\u518D\u6765\u770B\u770B\u5B83\u6709\u4EC0\u4E48\u7F3A\u70B9\u5427\u3002</p><p>\u542C\u8FC7\u4E0A\u4E00\u8BB2 HTTP/3 \u7684\u4ECB\u7ECD\uFF0C\u4F60\u5C31\u77E5\u9053 HTTP/2 \u5728 TCP \u7EA7\u522B\u8FD8\u662F\u5B58\u5728\u201C\u961F\u5934\u963B\u585E\u201D\u7684\u95EE\u9898\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u7F51\u7EDC\u8FDE\u63A5\u8D28\u91CF\u5DEE\uFF0C\u53D1\u751F\u4E22\u5305\uFF0C\u90A3\u4E48 TCP \u4F1A\u7B49\u5F85\u91CD\u4F20\uFF0C\u4F20\u8F93\u901F\u5EA6\u5C31\u4F1A\u964D\u4F4E\u3002</p><p>\u53E6\u5916\uFF0C\u5728\u79FB\u52A8\u7F51\u7EDC\u4E2D\u53D1\u751F IP \u5730\u5740\u5207\u6362\u7684\u65F6\u5019\uFF0C\u4E0B\u5C42\u7684 TCP \u5FC5\u987B\u91CD\u65B0\u5EFA\u8FDE\uFF0C\u8981\u518D\u6B21\u63E1\u624B\uFF0C\u7ECF\u5386\u6162\u542F\u52A8\uFF0C\u800C\u4E14\u4E4B\u524D\u8FDE\u63A5\u91CC\u79EF\u7D2F\u7684 HPACK \u5B57\u5178\u4E5F\u90FD\u6D88\u5931\u4E86\uFF0C\u5FC5\u987B\u91CD\u5934\u5F00\u59CB\u8BA1\u7B97\uFF0C\u5BFC\u81F4\u5E26\u5BBD\u6D6A\u8D39\u548C\u65F6\u5EF6\u3002</p><p>\u521A\u624D\u4E5F\u8BF4\u4E86\uFF0CHTTP/2 \u5BF9\u4E00\u4E2A\u57DF\u540D\u53EA\u5F00\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u6240\u4EE5\u4E00\u65E6\u8FD9\u4E2A\u8FDE\u63A5\u51FA\u95EE\u9898\uFF0C\u90A3\u4E48\u6574\u4E2A\u7F51\u7AD9\u7684\u4F53\u9A8C\u4E5F\u5C31\u53D8\u5DEE\u4E86\u3002</p><p>\u800C\u8FD9\u4E9B\u60C5\u51B5\u4E0B HTTP/1 \u53CD\u800C\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u56E0\u4E3A\u5B83\u672C\u6765\u5C31\u6162\uFF0C\u800C\u4E14\u8FD8\u4F1A\u5BF9\u4E00\u4E2A\u57DF\u540D\u5F00 6~8 \u4E2A\u8FDE\u63A5\uFF0C\u9876\u591A\u5176\u4E2D\u7684\u4E00\u4E24\u4E2A\u8FDE\u63A5\u4F1A\u66F4\u6162\uFF0C\u5176\u4ED6\u7684\u8FDE\u63A5\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p><h2 id="\u5E94\u8BE5\u8FC1\u79FB\u5230-http-2-\u5417\uFF1F" tabindex="-1">\u5E94\u8BE5\u8FC1\u79FB\u5230 HTTP/2 \u5417\uFF1F <a class="header-anchor" href="#\u5E94\u8BE5\u8FC1\u79FB\u5230-http-2-\u5417\uFF1F" aria-hidden="true">#</a></h2><p>\u8BF4\u5230\u8FD9\u91CC\uFF0C\u4F60\u5BF9\u8FC1\u79FB\u5230 HTTP/2 \u662F\u5426\u5DF2\u7ECF\u6709\u4E86\u81EA\u5DF1\u7684\u5224\u65AD\u5462\uFF1F</p><p>\u5728\u6211\u770B\u6765\uFF0CHTTP/2 \u5904\u4E8E\u4E00\u4E2A\u7565\u5C34\u5C2C\u7684\u4F4D\u7F6E\uFF0C\u524D\u9762\u6709\u8001\u524D\u8F88 HTTP/1\uFF0C\u540E\u9762\u6709\u65B0\u6765\u8005 HTTP/3\uFF0C\u5373\u6709\u8001\u524D\u8F88\u7684\u6253\u538B\uFF0C\u53C8\u6709\u65B0\u6765\u8005\u7684\u8FFD\u8D76\uFF0C\u4E5F\u5C31\u96BE\u602A\u6CA1\u6709\u83B7\u5F97\u5E02\u573A\u7684\u5927\u529B\u5439\u6367\u4E86\u3002</p><p>\u4F46\u8FD9\u7EDD\u4E0D\u662F\u8BF4 HTTP/2 \u4E00\u65E0\u662F\u5904\uFF0C\u5B9E\u9645\u4E0A HTTP/2 \u7684\u6027\u80FD\u6539\u8FDB\u6548\u679C\u662F\u975E\u5E38\u660E\u663E\u7684\uFF0CTop 1000 \u7684\u7F51\u7AD9\u4E2D\u5DF2\u7ECF\u6709\u8D85\u8FC7 40% \u8FD0\u884C\u5728\u4E86 HTTP/2 \u4E0A\uFF0C\u5305\u62EC\u77E5\u540D\u7684 Apple\u3001Facebook\u3001Google\u3001Twitter \u7B49\u7B49\u3002\u4EC5\u7528\u4E86\u56DB\u5E74\u7684\u65F6\u95F4\uFF0CHTTP/2 \u5C31\u62E5\u6709\u4E86\u8FD9\u4E48\u5927\u7684\u5E02\u573A\u4EFD\u989D\u548C\u5DE8\u5934\u7684\u8BA4\u53EF\uFF0C\u8DB3\u4EE5\u8BC1\u660E\u5B83\u7684\u4EF7\u503C\u3002</p><p>\u56E0\u4E3A HTTP/2 \u7684\u4FA7\u91CD\u70B9\u662F\u6027\u80FD\uFF0C\u6240\u4EE5\u662F\u5426\u8FC1\u79FB\u5C31\u9700\u8981\u5728\u8FD9\u65B9\u9762\u8FDB\u884C\u8BC4\u4F30\u3002\u5982\u679C\u7F51\u7AD9\u7684\u6D41\u91CF\u5F88\u5927\uFF0C\u90A3\u4E48 HTTP/2 \u5C31\u53EF\u4EE5\u5E26\u6765\u53EF\u89C2\u7684\u6536\u76CA\uFF1B\u53CD\u4E4B\uFF0C\u5982\u679C\u7F51\u7AD9\u6D41\u91CF\u6BD4\u8F83\u5C0F\uFF0C\u90A3\u4E48\u5347\u7EA7\u5230 HTTP/2 \u5C31\u6CA1\u6709\u592A\u591A\u5FC5\u8981\u4E86\uFF0C\u53EA\u8981\u5229\u7528\u73B0\u6709\u7684 HTTP \u518D\u4F18\u5316\u5C31\u8DB3\u77E3\u3002</p><p>\u4E0D\u8FC7\u5982\u679C\u4F60\u662F\u65B0\u5EFA\u7F51\u7AD9\uFF0C\u6211\u89C9\u5F97\u5B8C\u5168\u53EF\u4EE5\u8DF3\u8FC7 HTTP/1\u3001HTTPS\uFF0C\u76F4\u63A5\u4E00\u6B65\u5230\u4F4D\uFF0C\u4E0A HTTP/2\uFF0C\u8FD9\u6837\u4E0D\u4EC5\u53EF\u4EE5\u83B7\u5F97\u6027\u80FD\u63D0\u5347\uFF0C\u8FD8\u514D\u53BB\u4E86\u8001\u65E7\u7684\u5386\u53F2\u5305\u88B1\uFF0C\u65E5\u540E\u4E5F\u4E0D\u4F1A\u518D\u6709\u8FC1\u79FB\u7684\u70E6\u607C\u3002</p><p>\u987A\u4FBF\u518D\u591A\u5634\u4E00\u53E5\uFF0CHTTP/2 \u6BD5\u7ADF\u662F\u4E0B\u4E00\u4EE3HTTP \u534F\u8BAE\uFF0C\u5B83\u7684\u5F88\u591A\u7279\u6027\u4E5F\u5EF6\u7EED\u5230\u4E86 HTTP/3\uFF0C\u63D0\u65E9\u5347\u7EA7\u5230 HTTP/2 \u8FD8\u53EF\u4EE5\u8BA9\u4F60\u5728 HTTP/3 \u5230\u6765\u65F6\u6709\u66F4\u591A\u7684\u6280\u672F\u79EF\u7D2F\u548C\u50A8\u5907\uFF0C\u4E0D\u81F3\u4E8E\u843D\u540E\u4E8E\u65F6\u4EE3\u3002</p><h2 id="\u914D\u7F6E-http-2" tabindex="-1">\u914D\u7F6E HTTP/2 <a class="header-anchor" href="#\u914D\u7F6E-http-2" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u4F60\u5DF2\u7ECF\u51B3\u5B9A\u8981\u4F7F\u7528 HTTP/2\uFF0C\u5E94\u8BE5\u5982\u4F55\u642D\u5EFA\u670D\u52A1\u5462\uFF1F</p><p>\u56E0\u4E3A HTTP/2 \u4E8B\u5B9E\u4E0A\u662F\u52A0\u5BC6\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u5DF2\u7ECF\u5728\u5B89\u5168\u7BC7\u91CC\u6210\u529F\u8FC1\u79FB\u5230\u4E86 HTTPS\uFF0C\u90A3\u4E48\u5728 Nginx \u91CC\u542F\u7528 HTTP/2 \u7B80\u76F4\u53EF\u4EE5\u8BF4\u662F\u4E0D\u8D39\u5439\u7070\u4E4B\u529B\uFF0C\u53EA\u9700\u8981\u5728 server \u914D\u7F6E\u91CC\u518D\u591A\u52A0\u4E00\u4E2A\u53C2\u6570\u5C31\u53EF\u4EE5\u641E\u5B9A\u4E86\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       443 ssl http2; # \u8FD9\u91CC\u518D\u52A0\u4E0A\u4E00\u4E2A http2 \u5C31\u53EF\u4EE5\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  www.xxx.net;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate         xxx.crt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key     xxx.key;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u5C31\u8868\u793A\u5728 443 \u7AEF\u53E3\u4E0A\u5F00\u542F\u4E86 SSL \u52A0\u5BC6\uFF0C\u7136\u540E\u518D\u542F\u7528 HTTP/2\u3002</p><p>\u914D\u7F6E\u670D\u52A1\u5668\u63A8\u9001\u7279\u6027\u53EF\u4EE5\u4F7F\u7528\u6307\u4EE4 <code>http2_push</code> \u548C <code>http2_push_preload</code> \uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http2_push         /style/xxx.css;</span></span>
<span class="line"><span style="color:#A6ACCD;">http2_push_preload on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0D\u8FC7\u5982\u4F55\u5408\u7406\u5730\u914D\u7F6E\u63A8\u9001\u662F\u4E2A\u96BE\u9898\uFF0C\u5982\u679C\u63A8\u9001\u7ED9\u6D4F\u89C8\u5668\u4E0D\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u53CD\u800C\u6D6A\u8D39\u4E86\u5E26\u5BBD\u3002</p><p>\u8FD9\u65B9\u9762\u6682\u65F6\u6CA1\u6709\u4E00\u822C\u6027\u7684\u539F\u5219\u6307\u5BFC\uFF0C\u4F60\u5FC5\u987B\u6839\u636E\u81EA\u5DF1\u7F51\u7AD9\u7684\u5B9E\u9645\u60C5\u51B5\u53BB\u731C\u6D4B\u5BA2\u6237\u7AEF\u6700\u9700\u8981\u7684\u6570\u636E\u3002</p><p>\u4F18\u5316\u65B9\u9762\uFF0CHTTPS \u7684\u4E00\u4E9B\u7B56\u7565\u4F9D\u7136\u9002\u7528\uFF0C\u6BD4\u5982\u7CBE\u7B80\u5BC6\u7801\u5957\u4EF6\u3001ECC \u8BC1\u4E66\u3001\u4F1A\u8BDD\u590D\u7528\u3001HSTS \u51CF\u5C11\u91CD\u5B9A\u5411\u8DF3\u8F6C\u7B49\u7B49\u3002</p><p>\u4F46\u8FD8\u6709\u4E00\u4E9B\u4F18\u5316\u624B\u6BB5\u5728 HTTP/2 \u91CC\u662F\u4E0D\u9002\u7528\u7684\uFF0C\u800C\u4E14\u8FD8\u4F1A\u6709\u53CD\u6548\u679C\uFF0C\u6BD4\u5982\u8BF4\u5E38\u89C1\u7684\u7CBE\u7075\u56FE\uFF08Spriting\uFF09\u3001\u8D44\u6E90\u5185\u8054\uFF08inlining\uFF09\u3001\u57DF\u540D\u5206\u7247\uFF08Sharding\uFF09\u7B49\uFF0C\u81F3\u4E8E\u539F\u56E0\u662F\u4EC0\u4E48\uFF0C\u6211\u628A\u5B83\u7559\u7ED9\u4F60\u81EA\u5DF1\u53BB\u601D\u8003\uFF08\u63D0\u793A\uFF0C\u4E0E\u7F13\u5B58\u6709\u5173\uFF09\u3002</p><p>\u8FD8\u8981\u6CE8\u610F\u4E00\u70B9\uFF0CHTTP/2 \u9ED8\u8BA4\u542F\u7528 header \u538B\u7F29\uFF08HPACK\uFF09\uFF0C\u4F46\u5E76\u6CA1\u6709\u9ED8\u8BA4\u542F\u7528 body \u538B\u7F29\uFF0C\u6240\u4EE5\u4E0D\u8981\u5FD8\u4E86\u5728 Nginx \u914D\u7F6E\u6587\u4EF6\u91CC\u52A0\u4E0A gzip \u6307\u4EE4\uFF0C\u538B\u7F29 HTML\u3001JS \u7B49\u6587\u672C\u6570\u636E\u3002</p><h2 id="\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09" tabindex="-1">\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08ALPN\uFF09 <a class="header-anchor" href="#\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09" aria-hidden="true">#</a></h2><p>\u6700\u540E\u8BF4\u4E00\u4E0B HTTP/2 \u7684 <strong>\u670D\u52A1\u53D1\u73B0</strong> \u5427\u3002</p><p>\u4F60\u6709\u6CA1\u6709\u60F3\u8FC7\uFF0C\u5728 URI \u91CC\u7528\u7684\u90FD\u662F HTTPS \u534F\u8BAE\u540D\uFF0C\u6CA1\u6709\u7248\u672C\u6807\u8BB0\uFF0C\u6D4F\u89C8\u5668\u600E\u4E48\u77E5\u9053\u670D\u52A1\u5668\u652F\u6301 HTTP/2 \u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0A\u6765\u5C31\u80FD\u7528 HTTP/2\uFF0C\u800C\u4E0D\u662F\u7528 HTTP/1 \u901A\u4FE1\u5462\uFF1F</p><p>\u7B54\u6848\u5728 TLS \u7684\u6269\u5C55\u91CC\uFF0C\u6709\u4E00\u4E2A\u53EB <strong>ALPN</strong>\uFF08Application Layer Protocol Negotiation\uFF09\u7684\u4E1C\u897F\uFF0C\u7528\u6765\u4E0E\u670D\u52A1\u5668\u5C31 TLS \u4E0A\u8DD1\u7684 <strong>\u5E94\u7528\u534F\u8BAE\u8FDB\u884C\u534F\u5546</strong> \u3002</p><p>\u5BA2\u6237\u7AEF\u5728\u53D1\u8D77 Client Hello \u63E1\u624B\u7684\u65F6\u5019\uFF0C\u540E\u9762\u4F1A\u5E26\u4E0A\u4E00\u4E2A ALPN \u6269\u5C55\uFF0C\u91CC\u9762\u6309\u7167\u4F18\u5148\u987A\u5E8F\u5217\u51FA\u5BA2\u6237\u7AEF\u652F\u6301\u7684\u5E94\u7528\u534F\u8BAE\u3002</p><p>\u5C31\u50CF\u4E0B\u56FE\u8FD9\u6837\uFF0C\u6700\u4F18\u5148\u7684\u662F h2\uFF0C\u5176\u6B21\u662F <code>http/1.1</code> \uFF0C\u4EE5\u524D\u8FD8\u6709 <code>spdy</code> \uFF0C\u4EE5\u540E\u8FD8\u53EF\u80FD\u4F1A\u6709 <code>h3</code> \u3002</p><p><img src="`+T+'" alt="img"></p><p>\u670D\u52A1\u5668\u770B\u5230 ALPN \u6269\u5C55\u4EE5\u540E\u5C31\u53EF\u4EE5\u4ECE\u5217\u8868\u91CC\u9009\u62E9\u4E00\u79CD\u5E94\u7528\u534F\u8BAE\uFF0C\u5728 <code>Server Hello</code> \u91CC\u4E5F\u5E26\u4E0A ALPN \u6269\u5C55\uFF0C\u544A\u8BC9\u5BA2\u6237\u7AEF\u670D\u52A1\u5668\u51B3\u5B9A\u4F7F\u7528\u7684\u662F\u54EA\u4E00\u79CD\u3002\u56E0\u4E3A\u6211\u4EEC\u5728 Nginx \u914D\u7F6E\u91CC\u4F7F\u7528\u4E86 HTTP/2 \u534F\u8BAE\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u5B83\u9009\u62E9\u7684\u5C31\u662F <code>h2</code> \u3002</p><p><img src="'+a+'" alt="img"></p><p>\u8FD9\u6837\u5728 TLS \u63E1\u624B\u7ED3\u675F\u540E\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5C31\u901A\u8FC7\u201CALPN\u201D\u5B8C\u6210\u4E86\u5E94\u7528\u5C42\u7684\u534F\u8BAE\u534F\u5546\uFF0C\u540E\u9762\u5C31\u53EF\u4EE5\u4F7F\u7528 HTTP/2 \u901A\u4FE1\u4E86\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u4ECA\u5929\u6211\u4EEC\u8BA8\u8BBA\u4E86\u662F\u5426\u5E94\u8BE5\u8FC1\u79FB\u5230 HTTP/2\uFF0C\u8FD8\u6709\u5E94\u8BE5\u5982\u4F55\u8FC1\u79FB\u5230 HTTP/2\u3002</p><ol><li>HTTP/2 \u5B8C\u5168\u517C\u5BB9 HTTP/1\uFF0C\u662F\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS\uFF0C\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u7B49\u6280\u672F\u53EF\u4EE5\u5145\u5206\u5229\u7528\u5E26\u5BBD\uFF0C\u964D\u4F4E\u5EF6\u8FDF\uFF0C\u4ECE\u800C\u5927\u5E45\u5EA6\u63D0\u9AD8\u4E0A\u7F51\u4F53\u9A8C\uFF1B</li><li>TCP \u534F\u8BAE\u5B58\u5728\u961F\u5934\u963B\u585E\uFF0C\u6240\u4EE5 HTTP/2 \u5728\u5F31\u7F51\u6216\u8005\u79FB\u52A8\u7F51\u7EDC\u4E0B\u7684\u6027\u80FD\u8868\u73B0\u4F1A\u4E0D\u5982 HTTP/1\uFF1B</li><li>\u8FC1\u79FB\u5230 HTTP/2 \u80AF\u5B9A\u4F1A\u6709\u6027\u80FD\u63D0\u5347\uFF0C\u4F46\u9AD8\u6D41\u91CF\u7F51\u7AD9\u6548\u679C\u4F1A\u66F4\u663E\u8457\uFF1B</li><li>\u5982\u679C\u5DF2\u7ECF\u5347\u7EA7\u5230\u4E86 HTTPS\uFF0C\u90A3\u4E48\u518D\u5347\u7EA7\u5230 HTTP/2 \u4F1A\u5F88\u7B80\u5355\uFF1B</li><li>TLS \u534F\u8BAE\u63D0\u4F9B ALPN \u6269\u5C55\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u534F\u5546\u4F7F\u7528\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u53D1\u73B0 HTTP/2 \u670D\u52A1\u3002</li></ol><h2 id="\u8BFE\u4E0B\u4F5C\u4E1A" tabindex="-1">\u8BFE\u4E0B\u4F5C\u4E1A <a class="header-anchor" href="#\u8BFE\u4E0B\u4F5C\u4E1A" aria-hidden="true">#</a></h2><ol><li><p>\u7ED3\u5408\u81EA\u5DF1\u7684\u5B9E\u9645\u60C5\u51B5\uFF0C\u5206\u6790\u4E00\u4E0B\u662F\u5426\u5E94\u8BE5\u8FC1\u79FB\u5230 HTTP/2\uFF0C\u6709\u6CA1\u6709\u96BE\u70B9\uFF1F</p><p>\u5206\u60C5\u51B5\u5427\uFF0C\u5728 HTTPS \u7684\u57FA\u7840\u4E0A\uFF0C\u8FC1\u79FB\u5F88\u7B80\u5355\u3002</p></li><li><p>\u7CBE\u7075\u56FE\uFF08Spriting\uFF09\u3001\u8D44\u6E90\u5185\u8054\uFF08inlining\uFF09\u3001\u57DF\u540D\u5206\u7247\uFF08Sharding\uFF09\u8FD9\u4E9B\u624B\u6BB5\u4E3A\u4EC0\u4E48\u4F1A\u5BF9 HTTP/2 \u7684\u6027\u80FD\u4F18\u5316\u9020\u6210\u53CD\u6548\u679C\u5462\uFF1F</p><p>\u56E0\u4E3A HTTP/2 \u4E2D\u4F7F\u7528\u5C0F\u9897\u7C92\u5316\u7684\u8D44\u6E90\uFF0C\u4F18\u5316\u4E86\u7F13\u5B58\uFF0C\u800C\u4F7F\u7528\u7CBE\u7075\u56FE\u5C31\u76F8\u5F53\u4E8E\u4F20\u8F93\u5927\u6587\u4EF6\uFF0C\u4F46\u662F\u5927\u6587\u4EF6\u4F1A\u5EF6\u8FDF\u5BA2\u6237\u7AEF\u7684\u5904\u7406\u6267\u884C\uFF0C\u5E76\u4E14\u7F13\u5B58\u5931\u6548\u7684\u5F00\u9500\u5F88\u6602\u8D35\uFF0C\u5F88\u5C11\u6570\u91CF\u7684\u6570\u636E\u66F4\u65B0\u5C31\u4F1A\u4F7F\u6574\u4E2A\u7CBE\u7075\u56FE\u5931\u6548\uFF0C\u9700\u8981\u91CD\u65B0\u4E0B\u8F7D(http1 \u4E2D\u4F7F\u7528\u7CBE\u7075\u56FE\u662F\u4E3A\u4E86\u51CF\u5C11\u8BF7\u6C42)</p><p>HTTP1 \u4E2D\u4F7F\u7528\u5185\u8054\u8D44\u6E90\u4E5F\u662F\u4E3A\u4E86\u51CF\u5C11\u8BF7\u6C42\uFF0C\u5185\u8054\u8D44\u6E90\u6CA1\u6709\u529E\u6CD5\u72EC\u7ACB\u7F13\u5B58\uFF0C\u7834\u574F\u4E86 HTTP/2 \u7684\u591A\u8DEF\u590D\u7528\u548C\u4F18\u5148\u7EA7\u7B56\u7565\uFF1B</p><p>\u57DF\u540D\u5206\u7247\u5728 HTTP1 \u4E2D\u662F\u4E3A\u4E86\u7A81\u7834\u6D4F\u89C8\u5668\u6BCF\u4E2A\u57DF\u540D\u4E0B\u540C\u65F6\u8FDE\u63A5\u6570\uFF0C\u4F46\u662F\u8FD9\u5728 HTTP/2 \u4E2D\u4F7F\u7528\u591A\u8DEF\u590D\u7528\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u4F7F\u7528\u57DF\u540D\u5206\u7247\u53CD\u800C\u4F1A\u9650\u5236 HTTP2 \u7684\u81EA\u7531\u53D1\u6325</p></li></ol><h2 id="\u62D3\u5C55\u9605\u8BFB" tabindex="-1">\u62D3\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u62D3\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><ul><li>Nginx \u4E5F\u652F\u6301\u660E\u6587\u5F62\u5F0F\u7684 HTP/2(\u5373 <code>h2c</code> )\uFF0C\u5728\u914D\u7F6E listen \u6307\u4EE4\u65F6\u4E0D\u6DFB\u52A0 <code>ss</code> \u53C2\u6570\u5373\u53EF\uFF0C\u4F46\u65E0\u6CD5\u4F7F\u7528 Chrome \u7B49\u6D4F\u89C8\u5668\u76F4\u63A5\u6D4B\u8BD5\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u53EA\u652F\u6301 <code>h2</code></li><li>HTTP/2 \u7684\u4F18\u5148\u7EA7\u53EA\u4F7F\u7528\u4E00\u4E2A\u5B57\u8282\uFF0C\u4F18\u5148\u7EA7\u6700\u4F4E\u662F 0\uFF0C\u6700\u9AD8\u662F 255\uFF0C\u4E00\u4E9B\u8FC7\u65F6\u7684\u4E66\u520A\u548C\u7F51\u4E0A\u8D44\u6599\u4E2D\u628A HTTP/2 \u7684\u4F18\u5148\u7EA7\u5199\u6210\u4E86 2^31\uFF0C\u662F\u975E\u5E38\u9519\u8BEF\u7684\u3002</li><li>ALPN \u7684\u524D\u8EAB\u662F Google \u7684 NPN(Next Protocol Negotiation)\uFF0C\u5B83\u4E0E ALPN \u7684\u534F\u5546\u8FC7\u7A0B\u521A\u597D\u76F8\u53CD\uFF0C\u670D\u52A1\u5668\u63D0\u4F9B\u652F\u6301\u7684\u534F\u8BAE\u5217\u8868\uFF0C\u7531\u5BA2\u6237\u7AEF\u51B3\u5B9A\u6700\u7EC8\u4F7F\u7528\u7684\u534F\u8BAE</li><li>\u660E\u6587\u7684 HTTP/2( <code>h2c</code> ) \u4E0D\u4F7F\u7528 TLS\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u4F7F\u7528 ALPN \u8FDB\u884C\u534F\u8BAE\u534F\u5546\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528\u5934\u5B57\u6BB5 <code>Connection: Upgrade</code> \u5347\u7EA7\u5230 HTTP/2\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001\u7801 101 \u5207\u6362\u534F\u8BAE</li><li>\u76EE\u524D\u56FD\u5185\u5DF2\u7ECF\u6709\u4E0D\u5C11\u5927\u7F51\u7AD9\u8FC1\u79FB\u5230\u4E86 HTTP/2\uFF0C\u6BD4\u5982 <a href="http://www.qg.com" target="_blank" rel="noreferrer">www.qg.com</a>\u3001<a href="http://www.tmal.com" target="_blank" rel="noreferrer">www.tmal.com</a>\uFF0C\u4F60\u53EF\u4EE5\u7528 Chrome \u7684\u5F00\u53D1\u8005\u5DE5\u5177\u68C0\u67E5\u5B83\u4EEC\u7684 Protocol</li></ul>',65),r=[t];function o(i,c,P,H,d,h){return s(),p("div",null,r)}const u=e(l,[["render",o]]);export{b as __pageData,u as default};
