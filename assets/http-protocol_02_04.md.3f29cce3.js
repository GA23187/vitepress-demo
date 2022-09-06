import{_ as e,c as o,o as t,a as r}from"./app.771a7ea0.js";const n="/vitepress-demo/assets/261bac84bfb1f957c3e9fd45021a5d73.0e991424.png",I=JSON.parse('{"title":"04 | HTTP \u4E16\u754C\u5168\u89C8\uFF1A\u4E0E HTTP \u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE","description":"","frontmatter":{},"headers":[{"level":2,"title":"TCP/IP","slug":"tcp-ip","link":"#tcp-ip","children":[]},{"level":2,"title":"DNS","slug":"dns","link":"#dns","children":[]},{"level":2,"title":"URI/URL","slug":"uri-url","link":"#uri-url","children":[]},{"level":2,"title":"HTTPS","slug":"https","link":"#https","children":[]},{"level":2,"title":"\u4EE3\u7406","slug":"\u4EE3\u7406","link":"#\u4EE3\u7406","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]},{"level":2,"title":"\u8BFE\u4E0B\u4F5C\u4E1A","slug":"\u8BFE\u4E0B\u4F5C\u4E1A","link":"#\u8BFE\u4E0B\u4F5C\u4E1A","children":[]},{"level":2,"title":"\u8BFE\u5916\u5C0F\u8D34\u58EB","slug":"\u8BFE\u5916\u5C0F\u8D34\u58EB","link":"#\u8BFE\u5916\u5C0F\u8D34\u58EB","children":[]}],"relativePath":"http-protocol/02/04.md","lastUpdated":1662487438000}'),p={name:"http-protocol/02/04.md"},s=r('<h1 id="_04-http-\u4E16\u754C\u5168\u89C8\uFF1A\u4E0E-http-\u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE" tabindex="-1">04 | HTTP \u4E16\u754C\u5168\u89C8\uFF1A\u4E0E HTTP \u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE <a class="header-anchor" href="#_04-http-\u4E16\u754C\u5168\u89C8\uFF1A\u4E0E-http-\u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE" aria-hidden="true">#</a></h1><p>\u5728\u4E0A\u4E00\u8BB2\u4E2D\uFF0C\u6211\u4ECB\u7ECD\u4E86\u4E0E HTTP \u76F8\u5173\u7684\u6D4F\u89C8\u5668\u3001\u670D\u52A1\u5668\u3001CDN\u3001\u7F51\u7EDC\u722C\u866B\u7B49\u5E94\u7528\u6280\u672F\u3002</p><p>\u4ECA\u5929\u8981\u8BB2\u7684\u5219\u662F\u6BD4\u8F83\u504F\u5411\u4E8E\u7406\u8BBA\u7684\u5404\u79CD HTTP \u76F8\u5173\u534F\u8BAE\uFF0C\u91CD\u70B9\u662F TCP/IP\u3001DNS\u3001URI\u3001HTTPS \u7B49\uFF0C\u5E0C\u671B\u80FD\u591F\u5E2E\u4F60\u7406\u6E05\u695A\u5B83\u4EEC\u4E0E HTTP \u7684\u5173\u7CFB\u3002</p><p>\u540C\u6837\u7684\uFF0C\u6211\u8FD8\u662F\u753B\u4E86\u4E00\u5F20\u8BE6\u7EC6\u7684\u601D\u7EF4\u5BFC\u56FE\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u540E\u4ED4\u7EC6\u67E5\u770B\u3002</p><p><img src="'+n+`" alt="img"></p><h2 id="tcp-ip" tabindex="-1">TCP/IP <a class="header-anchor" href="#tcp-ip" aria-hidden="true">#</a></h2><p>TCP/IP \u534F\u8BAE\u662F\u76EE\u524D\u7F51\u7EDC\u4E16\u754C\u300C\u4E8B\u5B9E\u4E0A\u300D\u7684\u6807\u51C6\u901A\u4FE1\u534F\u8BAE\uFF0C\u5373\u4F7F\u4F60\u6CA1\u6709\u7528\u8FC7\u4E5F\u4E00\u5B9A\u542C\u8BF4\u8FC7\uFF0C\u56E0\u4E3A\u5B83\u592A\u8457\u540D\u4E86\u3002</p><p>TCP/IP \u534F\u8BAE\u5B9E\u9645\u4E0A\u662F\u4E00\u7CFB\u5217\u7F51\u7EDC\u901A\u4FE1\u534F\u8BAE\u7684\u7EDF\u79F0\uFF0C\u5176\u4E2D\u6700\u6838\u5FC3\u7684\u4E24\u4E2A\u534F\u8BAE\u662F <strong>TCP</strong> \u548C <strong>IP</strong> \uFF0C\u5176\u4ED6\u7684\u8FD8\u6709 UDP\u3001ICMP\u3001ARP \u7B49\u7B49\uFF0C\u5171\u540C\u6784\u6210\u4E86\u4E00\u4E2A\u590D\u6742\u4F46\u6709\u5C42\u6B21\u7684\u534F\u8BAE\u6808\u3002</p><p>\u8FD9\u4E2A\u534F\u8BAE\u6808\u6709\u56DB\u5C42\uFF0C\u6700\u4E0A\u5C42\u662F <strong>\u5E94\u7528\u5C42</strong>\uFF0C\u6700\u4E0B\u5C42\u662F <strong>\u94FE\u63A5\u5C42</strong> \uFF0CTCP \u548C IP \u5219\u5728\u4E2D\u95F4\uFF1A<strong>TCP \u5C5E\u4E8E\u4F20\u8F93\u5C42\uFF0CIP \u5C5E\u4E8E\u7F51\u9645\u5C42</strong> \u3002\u534F\u8BAE\u7684\u5C42\u7EA7\u5173\u7CFB\u6A21\u578B\u975E\u5E38\u91CD\u8981\uFF0C\u6211\u4F1A\u5728\u4E0B\u4E00\u8BB2\u4E2D\u518D\u4E13\u95E8\u8BB2\u89E3\uFF0C\u8FD9\u91CC\u5148\u6682\u65F6\u653E\u4E00\u653E\u3002</p><p><strong>IP \u534F\u8BAE</strong> \u662F <strong>I</strong> nternet <strong>P</strong>rotocol \u7684\u7F29\u5199\uFF0C<strong>\u4E3B\u8981\u76EE\u7684\u662F\u89E3\u51B3\u5BFB\u5740\u548C\u8DEF\u7531\u95EE\u9898\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u4E24\u70B9\u95F4\u4F20\u9001\u6570\u636E\u5305</strong> \u3002IP \u534F\u8BAE\u4F7F\u7528 <strong>IP \u5730\u5740</strong> \u7684\u6982\u5FF5\u6765\u5B9A\u4F4D\u4E92\u8054\u7F51\u4E0A\u7684\u6BCF\u4E00\u53F0\u8BA1\u7B97\u673A\u3002\u53EF\u4EE5\u5BF9\u6BD4\u4E00\u4E0B\u73B0\u5B9E\u4E2D\u7684\u7535\u8BDD\u7CFB\u7EDF\uFF0C\u4F60\u62FF\u7740\u7684\u624B\u673A\u76F8\u5F53\u4E8E\u4E92\u8054\u7F51\u4E0A\u7684\u8BA1\u7B97\u673A\uFF0C\u800C\u8981\u6253\u7535\u8BDD\u5C31\u5FC5\u987B\u63A5\u5165\u7535\u8BDD\u7F51\uFF0C\u7531\u901A\u4FE1\u516C\u53F8\u7ED9\u4F60\u5206\u914D\u4E00\u4E2A\u53F7\u7801\uFF0C\u8FD9\u4E2A\u53F7\u7801\u5C31\u76F8\u5F53\u4E8E IP \u5730\u5740\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u4F7F\u7528\u7684 IP \u534F\u8BAE\u5927\u591A\u6570\u662F v4 \u7248\uFF0C\u5730\u5740\u662F\u56DB\u4E2A\u7528 <code>.</code> \u5206\u9694\u7684\u6570\u5B57\uFF0C\u4F8B\u5982 <code>192.168.0.1</code> \uFF0C\u603B\u5171\u6709 2^32\uFF0C\u5927\u7EA6 42 \u4EBF\u4E2A\u53EF\u4EE5\u5206\u914D\u7684\u5730\u5740\u3002\u770B\u4E0A\u53BB\u597D\u50CF\u5F88\u591A\uFF0C\u4F46\u4E92\u8054\u7F51\u7684\u5FEB\u901F\u53D1\u5C55\u8BA9\u5730\u5740\u7684\u5206\u914D\u7BA1\u7406\u5F88\u5FEB\u5C31\u6349\u895F\u89C1\u8098\u3002\u6240\u4EE5\uFF0C\u5C31\u53C8\u51FA\u73B0\u4E86 v6 \u7248\uFF0C\u4F7F\u7528 8 \u7EC4 <code>:</code> \u5206\u9694\u7684\u6570\u5B57\u4F5C\u4E3A\u5730\u5740\uFF0C\u5BB9\u91CF\u6269\u5927\u4E86\u5F88\u591A\uFF0C\u6709 2^128 \u4E2A\uFF0C\u5728\u672A\u6765\u7684\u51E0\u5341\u5E74\u91CC\u5E94\u8BE5\u662F\u8DB3\u591F\u7528\u4E86\u3002</p><p><strong>TCP \u534F\u8BAE</strong>\u662F <code>Transmission Control Protocol</code> \u7684\u7F29\u5199\uFF0C\u610F\u601D\u662F <strong>\u4F20\u8F93\u63A7\u5236\u534F\u8BAE</strong> \uFF0C\u5B83\u4F4D\u4E8E IP \u534F\u8BAE\u4E4B\u4E0A\uFF0C\u57FA\u4E8E IP \u534F\u8BAE\u63D0\u4F9B\u53EF\u9760\u7684\u3001\u5B57\u8282\u6D41\u5F62\u5F0F\u7684\u901A\u4FE1\uFF0C\u662F HTTP \u534F\u8BAE\u5F97\u4EE5\u5B9E\u73B0\u7684\u57FA\u7840\u3002</p><p>\u300C\u53EF\u9760\u300D\u662F\u6307\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\uFF0C\u300C\u5B57\u8282\u6D41\u300D\u662F\u6307\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\uFF0C\u6240\u4EE5\u5728 TCP \u534F\u8BAE\u7684\u4E24\u7AEF\u53EF\u4EE5\u5982\u540C\u64CD\u4F5C\u6587\u4EF6\u4E00\u6837\u8BBF\u95EE\u4F20\u8F93\u7684\u6570\u636E\uFF0C\u5C31\u50CF\u662F\u8BFB\u5199\u5728\u4E00\u4E2A\u5BC6\u95ED\u7684\u7BA1\u9053\u91CC\u300C\u6D41\u52A8\u300D\u7684\u5B57\u8282\u3002</p><p>\u5728 <a href="./02.html">\u7B2C 2 \u8BB2</a> \u65F6\u6211\u66FE\u7ECF\u8BF4\u8FC7\uFF0CHTTP \u662F\u4E00\u4E2A\u4F20\u8F93\u534F\u8BAE\uFF0C\u4F46\u5B83\u4E0D\u5173\u5FC3\u5BFB\u5740\u3001\u8DEF\u7531\u3001\u6570\u636E\u5B8C\u6574\u6027\u7B49\u4F20\u8F93\u7EC6\u8282\uFF0C\u800C\u8981\u6C42\u8FD9\u4E9B\u5DE5\u4F5C\u90FD\u7531\u4E0B\u5C42\u6765\u5904\u7406\u3002\u56E0\u4E3A\u4E92\u8054\u7F51\u4E0A\u6700\u6D41\u884C\u7684\u662F TCP/IP \u534F\u8BAE\uFF0C\u800C\u5B83\u521A\u597D\u6EE1\u8DB3 HTTP \u7684\u8981\u6C42\uFF0C\u6240\u4EE5\u4E92\u8054\u7F51\u4E0A\u7684 HTTP \u534F\u8BAE\u5C31\u8FD0\u884C\u5728\u4E86 TCP/IP \u4E0A\uFF0CHTTP \u4E5F\u5C31\u53EF\u4EE5\u66F4\u51C6\u786E\u5730\u79F0\u4E3A <strong>HTTP over TCP/IP</strong></p><h2 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-hidden="true">#</a></h2><p>\u5728 TCP/IP \u534F\u8BAE\u4E2D\u4F7F\u7528 IP \u5730\u5740\u6765\u6807\u8BC6\u8BA1\u7B97\u673A\uFF0C\u6570\u5B57\u5F62\u5F0F\u7684\u5730\u5740\u5BF9\u4E8E\u8BA1\u7B97\u673A\u6765\u8BF4\u662F\u65B9\u4FBF\u4E86\uFF0C\u4F46\u5BF9\u4E8E\u4EBA\u7C7B\u6765\u8BF4\u5374\u65E2\u96BE\u4EE5\u8BB0\u5FC6\u53C8\u96BE\u4EE5\u8F93\u5165\u3002</p><p>\u4E8E\u662F <strong>\u57DF\u540D\u7CFB\u7EDF</strong> \uFF08Domain Name System\uFF09\u51FA\u73B0\u4E86\uFF0C\u7528\u6709\u610F\u4E49\u7684\u540D\u5B57\u6765\u4F5C\u4E3A IP \u5730\u5740\u7684\u7B49\u4EF7\u66FF\u4EE3\u3002\u8BBE\u60F3\u4E00\u4E0B\uFF0C\u4F60\u662F\u613F\u610F\u8BB0 <code>95.211.80.227</code> \u8FD9\u6837\u67AF\u71E5\u7684\u6570\u5B57\uFF0C\u8FD8\u662F <code>nginx.org</code> \u8FD9\u6837\u7684\u8BCD\u7EC4\u5462\uFF1F</p><p>\u5728 DNS \u4E2D\uFF0C\u57DF\u540D\uFF08Domain Name\uFF09\u53C8\u79F0\u4E3A\u4E3B\u673A\u540D\uFF08Host\uFF09\uFF0C\u4E3A\u4E86\u66F4\u597D\u5730\u6807\u8BB0\u4E0D\u540C\u56FD\u5BB6\u6216\u7EC4\u7EC7\u7684\u4E3B\u673A\uFF0C\u8BA9\u540D\u5B57\u66F4\u597D\u8BB0\uFF0C\u6240\u4EE5\u88AB\u8BBE\u8BA1\u6210\u4E86\u4E00\u4E2A\u6709\u5C42\u6B21\u7684\u7ED3\u6784\u3002</p><p>\u57DF\u540D\u7528 <code>.</code> \u5206\u9694\u6210\u591A\u4E2A\u5355\u8BCD\uFF0C\u7EA7\u522B\u4ECE\u5DE6\u5230\u53F3\u9010\u7EA7\u5347\u9AD8\uFF0C\u6700\u53F3\u8FB9\u7684\u88AB\u79F0\u4E3A <strong>\u9876\u7EA7\u57DF\u540D</strong> \u3002\u5BF9\u4E8E\u9876\u7EA7\u57DF\u540D\uFF0C\u53EF\u80FD\u4F60\u968F\u53E3\u5C31\u80FD\u8BF4\u51FA\u51E0\u4E2A\uFF0C\u4F8B\u5982\u8868\u793A\u5546\u4E1A\u516C\u53F8\u7684 <code>com</code>\u3001\u8868\u793A\u6559\u80B2\u673A\u6784\u7684 <code>edu</code>\uFF0C\u8868\u793A\u56FD\u5BB6\u7684 <code>cn</code>\u3001<code>uk</code> \u7B49\uFF0C\u4E70\u706B\u8F66\u7968\u65F6\u7684\u57DF\u540D\u8FD8\u8BB0\u5F97\u5417\uFF1F\u662F <code>www.12306.cn</code> \u3002</p><p>\u4F46\u60F3\u8981\u4F7F\u7528 TCP/IP \u534F\u8BAE\u6765\u901A\u4FE1\u4ECD\u7136\u8981\u4F7F\u7528 IP \u5730\u5740\uFF0C\u6240\u4EE5\u9700\u8981\u628A\u57DF\u540D\u505A\u4E00\u4E2A\u8F6C\u6362\uFF0C<strong>\u6620\u5C04</strong> \u5230\u5B83\u7684\u771F\u5B9E IP\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684 <strong>\u57DF\u540D\u89E3\u6790</strong> \u3002</p><p>\u7EE7\u7EED\u7528\u521A\u624D\u7684\u6253\u7535\u8BDD\u505A\u4E2A\u6BD4\u55BB\uFF0C\u4F60\u60F3\u8981\u6253\u7535\u8BDD\u7ED9\u5C0F\u660E\uFF0C\u4F46\u4E0D\u77E5\u9053\u7535\u8BDD\u53F7\u7801\uFF0C\u5C31\u5F97\u5728\u624B\u673A\u91CC\u7684\u53F7\u7801\u7C3F\u91CC\u4E00\u9879\u4E00\u9879\u5730\u627E\uFF0C\u76F4\u5230\u627E\u5230\u5C0F\u660E\u90A3\u4E00\u6761\u8BB0\u5F55\uFF0C\u7136\u540E\u624D\u80FD\u67E5\u5230\u53F7\u7801\u3002\u8FD9\u91CC\u7684 \u300C\u5C0F\u660E\u300D\u5C31\u76F8\u5F53\u4E8E\u57DF\u540D\uFF0C\u800C\u300C\u7535\u8BDD\u53F7\u7801\u300D\u5C31\u76F8\u5F53\u4E8E IP \u5730\u5740\uFF0C\u8FD9\u4E2A <strong>\u67E5\u627E\u7684\u8FC7\u7A0B\u5C31\u662F\u57DF\u540D\u89E3\u6790</strong>\u3002</p><p>\u57DF\u540D\u89E3\u6790\u7684\u5B9E\u9645\u64CD\u4F5C\u8981\u6BD4\u521A\u624D\u7684\u4F8B\u5B50\u590D\u6742\u5F88\u591A\uFF0C\u56E0\u4E3A\u4E92\u8054\u7F51\u4E0A\u7684\u7535\u8111\u5B9E\u5728\u662F\u592A\u591A\u4E86\u3002\u76EE\u524D\u5168\u4E16\u754C\u6709 13 \u7EC4\u6839 DNS \u670D\u52A1\u5668\uFF0C\u4E0B\u9762\u518D\u6709\u8BB8\u591A\u7684\u9876\u7EA7 DNS\u3001\u6743\u5A01 DNS \u548C\u66F4\u5C0F\u7684\u672C\u5730 DNS\uFF0C\u9010\u5C42\u9012\u5F52\u5730\u5B9E\u73B0\u57DF\u540D\u67E5\u8BE2\u3002</p><p>HTTP \u534F\u8BAE\u4E2D\u5E76\u6CA1\u6709\u660E\u786E\u8981\u6C42\u5FC5\u987B\u4F7F\u7528 DNS\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4E3A\u4E86\u65B9\u4FBF\u8BBF\u95EE\u4E92\u8054\u7F51\u4E0A\u7684 Web \u670D\u52A1\u5668\uFF0C\u901A\u5E38\u90FD\u4F1A\u4F7F\u7528 DNS \u6765\u5B9A\u4F4D\u6216\u6807\u8BB0\u4E3B\u673A\u540D\uFF0C\u95F4\u63A5\u5730\u628A DNS \u4E0E HTTP \u7ED1\u5728\u4E86\u4E00\u8D77\u3002</p><h2 id="uri-url" tabindex="-1">URI/URL <a class="header-anchor" href="#uri-url" aria-hidden="true">#</a></h2><p>\u6709\u4E86 TCP/IP \u548C DNS\uFF0C\u662F\u4E0D\u662F\u6211\u4EEC\u5C31\u53EF\u4EE5\u4EFB\u610F\u8BBF\u95EE\u7F51\u7EDC\u4E0A\u7684\u8D44\u6E90\u4E86\u5462\uFF1F</p><p>\u8FD8\u4E0D\u884C\uFF0CDNS \u548C IP \u5730\u5740\u53EA\u662F\u6807\u8BB0\u4E86\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\uFF0C\u4F46\u4E3B\u673A\u4E0A\u6709\u90A3\u4E48\u591A\u6587\u672C\u3001\u56FE\u7247\u3001\u9875\u9762\uFF0C\u5230\u5E95\u8981\u627E\u54EA\u4E00\u4E2A\u5462\uFF1F\u5C31\u50CF\u5C0F\u660E\u7BA1\u7406\u4E86\u4E00\u5927\u5806\u6587\u6863\uFF0C\u4F60\u600E\u4E48\u544A\u8BC9\u4ED6\u662F\u54EA\u4E2A\u5462\uFF1F</p><p>\u6240\u4EE5\u5C31\u51FA\u73B0\u4E86 URI\uFF08Uniform Resource Identifier\uFF09\uFF0C\u4E2D\u6587\u540D\u79F0\u662F <strong>\u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26</strong> \uFF0C\u4F7F\u7528\u5B83\u5C31\u80FD\u591F\u552F\u4E00\u5730\u6807\u8BB0\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u3002</p><p>URI \u53E6\u4E00\u4E2A\u66F4\u5E38\u7528\u7684\u8868\u73B0\u5F62\u5F0F\u662F URL\uFF08Uniform Resource Locator\uFF09\uFF0C <strong>\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26</strong> \uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u4FD7\u79F0\u7684\u300C\u7F51\u5740\u300D\uFF0C\u5B83\u5B9E\u9645\u4E0A\u662F URI \u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u4E0D\u8FC7\u56E0\u4E3A\u8FD9\u4E24\u8005\u51E0\u4E4E\u662F\u76F8\u540C\u7684\uFF0C\u5DEE\u5F02\u4E0D\u5927\uFF0C\u6240\u4EE5\u901A\u5E38\u4E0D\u4F1A\u505A\u4E25\u683C\u7684\u533A\u5206\u3002</p><p>\u6211\u5C31\u62FF Nginx \u7F51\u7AD9\u6765\u4E3E\u4F8B\uFF0C\u770B\u4E00\u4E0B URI \u662F\u4EC0\u4E48\u6837\u5B50\u7684\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http://nginx.org/en/download.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\uFF0CURI \u4E3B\u8981\u6709\u4E09\u4E2A\u57FA\u672C\u7684\u90E8\u5206\u6784\u6210\uFF1A</p><ol><li>\u534F\u8BAE\u540D\uFF1A\u5373\u8BBF\u95EE\u8BE5\u8D44\u6E90\u5E94\u5F53\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u5728\u8FD9\u91CC\u662F <code>http</code>\uFF1B</li><li>\u4E3B\u673A\u540D\uFF1A\u5373\u4E92\u8054\u7F51\u4E0A\u4E3B\u673A\u7684\u6807\u8BB0\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216 IP \u5730\u5740\uFF0C\u5728\u8FD9\u91CC\u662F <code>nginx.org</code>\uFF1B</li><li>\u8DEF\u5F84\uFF1A\u5373\u8D44\u6E90\u5728\u4E3B\u673A\u4E0A\u7684\u4F4D\u7F6E\uFF0C\u4F7F\u7528 <code>/</code> \u5206\u9694\u591A\u7EA7\u76EE\u5F55\uFF0C\u5728\u8FD9\u91CC\u662F <code>/en/download.html</code> \u3002</li></ol><p>\u8FD8\u662F\u7528\u6253\u7535\u8BDD\u6765\u505A\u6BD4\u55BB\uFF0C\u4F60\u901A\u8FC7\u7535\u8BDD\u7C3F\u627E\u5230\u4E86\u5C0F\u660E\uFF0C\u8BA9\u4ED6\u628A\u6628\u5929\u505A\u597D\u7684\u5BA3\u4F20\u6587\u6848\u5FEB\u9012\u8FC7\u6765\u3002\u90A3\u4E48\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F60\u5C31\u5B8C\u6210\u4E86\u4E00\u6B21 URI \u8D44\u6E90\u8BBF\u95EE\uFF0C\u5C0F\u660E\u5C31\u662F\u4E3B\u673A\u540D\uFF0C\u6628\u5929\u505A\u597D\u7684\u5BA3\u4F20\u6587\u6848\u5C31\u662F\u8DEF\u5F84\uFF0C\u800C\u5FEB\u9012\uFF0C\u5C31\u662F\u4F60\u8981\u8BBF\u95EE\u8FD9\u4E2A\u8D44\u6E90\u7684\u534F\u8BAE\u540D\u3002</p><h2 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-hidden="true">#</a></h2><p>\u5728 TCP/IP\u3001DNS \u548C URI \u7684\u52A0\u6301\u4E4B\u4E0B\uFF0CHTTP \u534F\u8BAE\u7EC8\u4E8E\u53EF\u4EE5\u81EA\u7531\u5730\u7A7F\u68AD\u5728\u4E92\u8054\u7F51\u4E16\u754C\u91CC\uFF0C\u987A\u5229\u5730\u8BBF\u95EE\u4EFB\u610F\u7684\u7F51\u9875\u4E86\uFF0C\u771F\u7684\u662F\u597D\u751F\u5FEB\u6D3B\u3002</p><p>\u4F46\u4E14\u6162\uFF0C\u4E92\u8054\u7F51\u4E0A\u4E0D\u4EC5\u6709\u300C\u7F8E\u5973\u300D\uFF0C\u8FD8\u6709\u5F88\u591A\u7684\u300C\u91CE\u517D\u300D\u3002</p><p>\u5047\u8BBE\u4F60\u6253\u7535\u8BDD\u627E\u5C0F\u660E\u8981\u4E00\u4EFD\u5E7F\u544A\u521B\u610F\uFF0C\u5F88\u4E0D\u5E78\uFF0C\u7535\u8BDD\u88AB\u5546\u4E1A\u95F4\u8C0D\u7ED9\u7A83\u542C\u4E86\uFF0C\u4ED6\u7ACB\u523B\u52A8\u7528\u79CD\u79CD\u624B\u6BB5\u5077\u7A83\u4E86\u4F60\u7684\u5FEB\u9012\uFF0C\u5C31\u5728\u4F60\u8FD8\u5728\u7B49\u5305\u88F9\u7684\u65F6\u5019\uFF0C\u4ED6\u62A2\u5148\u53D1\u5E03\u4E86\u8FD9\u4EFD\u5E7F\u544A\uFF0C\u7ED9\u4F60\u7684\u516C\u53F8\u9020\u6210\u4E86\u65E0\u5F62\u6216\u6709\u5F62\u7684\u635F\u5931\u3002</p><p>\u6709\u6CA1\u6709\u4EC0\u4E48\u529E\u6CD5\u80FD\u591F\u9632\u6B62\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\u5462\uFF1F\u786E\u5B9E\u6709\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <strong>\u52A0\u5BC6</strong> \u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982\u8FD9\u6837\u6253\u7535\u8BDD\uFF1A</p><blockquote><p>\u4F60\uFF1A\u5582\uFF0C\u5C0F\u660E\u554A\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6539\u7528\u706B\u661F\u6587\u901A\u8BDD\u5427\u3002 \u5C0F\u660E\uFF1A\u597D\u554A\u597D\u554A\uFF0C\u5C31\u7528\u706B\u661F\u6587\u5427\u3002 \u4F60\uFF1A\u5DF4\u62C9\u5DF4\u62C9\u5DF4\u62C9\u5DF4\u62C9\u2026\u2026 \u5C0F\u660E\uFF1A\u5DF4\u62C9\u5DF4\u62C9\u5DF4\u62C9\u5DF4\u62C9\u2026\u2026</p></blockquote><p>\u5982\u679C\u4F60\u548C\u5C0F\u660E\u8BF4\u7684\u706B\u661F\u6587\u53EA\u6709\u4F60\u4EEC\u4E24\u4E2A\u624D\u61C2\uFF0C\u90A3\u4E48\u5373\u4F7F\u7A83\u542C\u5230\u4E86\u8FD9\u6BB5\u8C08\u8BDD\uFF0C\u4ED6\u4E5F\u4E0D\u4F1A\u77E5\u9053\u4F60\u4EEC\u5230\u5E95\u5728\u8BF4\u4EC0\u4E48\uFF0C\u4E5F\u5C31\u65E0\u4ECE\u7834\u574F\u4F60\u4EEC\u7684\u901A\u8BDD\u8FC7\u7A0B\u3002</p><p>HTTPS \u5C31\u76F8\u5F53\u4E8E\u8FD9\u4E2A\u6BD4\u55BB\u4E2D\u7684\u300C\u706B\u661F\u6587\u300D\uFF0C\u5B83\u7684\u5168\u79F0\u662F <strong>HTTP over SSL/TLS</strong> \uFF0C\u4E5F\u5C31\u662F\u8FD0\u884C\u5728 SSL/TLS \u534F\u8BAE\u4E0A\u7684 HTTP\u3002</p><p>\u6CE8\u610F\u5B83\u7684\u540D\u5B57\uFF0C\u8FD9\u91CC\u662F SSL/TLS\uFF0C\u800C\u4E0D\u662F TCP/IP\uFF0C\u5B83\u662F\u4E00\u4E2A <strong>\u8D1F\u8D23\u52A0\u5BC6\u901A\u4FE1\u7684\u5B89\u5168\u534F\u8BAE</strong> \uFF0C\u5EFA\u7ACB\u5728 TCP/IP \u4E4B\u4E0A\uFF0C\u6240\u4EE5\u4E5F\u662F\u4E2A\u53EF\u9760\u7684\u4F20\u8F93\u534F\u8BAE\uFF0C\u53EF\u4EE5\u88AB\u7528\u4F5C HTTP \u7684\u4E0B\u5C42\u3002</p><p>\u56E0\u4E3A HTTPS \u76F8\u5F53\u4E8E <code>HTTP+SSL/TLS+TCP/IP</code> \uFF0C\u5176\u4E2D\u7684 <code>HTTP</code> \u548C <code>TCP/IP</code> \u6211\u4EEC\u90FD\u5DF2\u7ECF\u660E\u767D\u4E86\uFF0C\u53EA\u8981\u518D\u4E86\u89E3\u4E00\u4E0B SSL/TLS\uFF0CHTTPS \u4E5F\u5C31\u80FD\u591F\u8F7B\u677E\u638C\u63E1\u3002</p><p>SSL \u7684\u5168\u79F0\u662F <code>Secure Socket Layer</code> \uFF0C\u7531\u7F51\u666F\u516C\u53F8\u53D1\u660E\uFF0C\u5F53\u53D1\u5C55\u5230 3.0 \u65F6\u88AB\u6807\u51C6\u5316\uFF0C\u6539\u540D\u4E3A TLS\uFF0C\u5373 <code>Transport Layer Security</code>\uFF0C\u4F46\u7531\u4E8E\u5386\u53F2\u7684\u539F\u56E0\u8FD8\u662F\u6709\u5F88\u591A\u4EBA\u79F0\u4E4B\u4E3A SSL/TLS\uFF0C\u6216\u8005\u76F4\u63A5\u7B80\u79F0\u4E3A SSL\u3002</p><p>SSL \u4F7F\u7528\u4E86\u8BB8\u591A\u5BC6\u7801\u5B66\u6700\u5148\u8FDB\u7684\u7814\u7A76\u6210\u679C\uFF0C\u7EFC\u5408\u4E86\u5BF9\u79F0\u52A0\u5BC6\u3001\u975E\u5BF9\u79F0\u52A0\u5BC6\u3001\u6458\u8981\u7B97\u6CD5\u3001\u6570\u5B57\u7B7E\u540D\u3001\u6570\u5B57\u8BC1\u4E66\u7B49\u6280\u672F\uFF0C\u80FD\u591F\u5728\u4E0D\u5B89\u5168\u7684\u73AF\u5883\u4E2D\u4E3A\u901A\u4FE1\u7684\u53CC\u65B9\u521B\u5EFA\u51FA\u4E00\u4E2A\u79D8\u5BC6\u7684\u3001\u5B89\u5168\u7684\u4F20\u8F93\u901A\u9053\uFF0C\u4E3A HTTP \u5957\u4E0A\u4E00\u526F\u575A\u56FA\u7684\u76D4\u7532\u3002</p><p>\u4F60\u53EF\u4EE5\u5728\u4ECA\u540E\u4E0A\u7F51\u65F6\u7559\u5FC3\u770B\u4E00\u4E0B\u6D4F\u89C8\u5668\u5730\u5740\u680F\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u5C0F\u9501\u5934\u6807\u5FD7\uFF0C\u90A3\u5C31\u8868\u660E\u7F51\u7AD9\u542F\u7528\u4E86\u5B89\u5168\u7684 HTTPS \u534F\u8BAE\uFF0C\u800C URI \u91CC\u7684\u534F\u8BAE\u540D\uFF0C\u4E5F\u4ECE http \u53D8\u6210\u4E86 https \u3002</p><h2 id="\u4EE3\u7406" tabindex="-1">\u4EE3\u7406 <a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true">#</a></h2><p>\u4EE3\u7406\uFF08Proxy\uFF09\u662F HTTP \u534F\u8BAE\u4E2D\u8BF7\u6C42\u65B9\u548C\u5E94\u7B54\u65B9\u4E2D\u95F4\u7684\u4E00\u4E2A\u73AF\u8282\uFF0C\u4F5C\u4E3A <strong>\u4E2D\u8F6C\u7AD9</strong> \uFF0C\u65E2\u53EF\u4EE5\u8F6C\u53D1\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u53D1\u670D\u52A1\u5668\u7684\u5E94\u7B54\u3002</p><p>\u4EE3\u7406\u6709\u5F88\u591A\u7684\u79CD\u7C7B\uFF0C\u5E38\u89C1\u7684\u6709\uFF1A</p><ol><li>\u533F\u540D\u4EE3\u7406\uFF1A\u5B8C\u5168 <strong>\u9690\u533F</strong> \u4E86\u88AB\u4EE3\u7406\u7684\u673A\u5668\uFF0C\u5916\u754C\u770B\u5230\u7684\u53EA\u662F\u4EE3\u7406\u670D\u52A1\u5668\uFF1B</li><li>\u900F\u660E\u4EE3\u7406\uFF1A\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F <strong>\u900F\u660E\u5F00\u653E</strong> \u7684\uFF0C\u5916\u754C\u65E2\u77E5\u9053\u4EE3\u7406\uFF0C\u4E5F\u77E5\u9053\u5BA2\u6237\u7AEF\uFF1B</li><li>\u6B63\u5411\u4EE3\u7406\uFF1A\u9760\u8FD1\u5BA2\u6237\u7AEF\uFF0C\u4EE3\u8868\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF1B</li><li>\u53CD\u5411\u4EE3\u7406\uFF1A\u9760\u8FD1\u670D\u52A1\u5668\u7AEF\uFF0C\u4EE3\u8868\u670D\u52A1\u5668\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF1B</li></ol><p>\u4E0A\u4E00\u8BB2\u63D0\u5230\u7684 CDN\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u79CD\u4EE3\u7406\uFF0C\u5B83\u4EE3\u66FF\u6E90\u7AD9\u670D\u52A1\u5668\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u901A\u5E38\u626E\u6F14\u7740\u900F\u660E\u4EE3\u7406\u548C\u53CD\u5411\u4EE3\u7406\u7684\u89D2\u8272\u3002</p><p>\u7531\u4E8E\u4EE3\u7406\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u63D2\u5165\u4E86\u4E00\u4E2A\u4E2D\u95F4\u5C42\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5728\u8FD9\u4E2A\u73AF\u8282\u505A\u5F88\u591A\u6709\u610F\u601D\u7684\u4E8B\u60C5\uFF0C\u6BD4\u5982\uFF1A</p><ol><li>\u8D1F\u8F7D\u5747\u8861\uFF1A\u628A\u8BBF\u95EE\u8BF7\u6C42\u5747\u5300\u5206\u6563\u5230\u591A\u53F0\u673A\u5668\uFF0C\u5B9E\u73B0\u8BBF\u95EE\u96C6\u7FA4\u5316\uFF1B</li><li>\u5185\u5BB9\u7F13\u5B58\uFF1A\u6682\u5B58\u4E0A\u4E0B\u884C\u7684\u6570\u636E\uFF0C\u51CF\u8F7B\u540E\u7AEF\u7684\u538B\u529B\uFF1B</li><li>\u5B89\u5168\u9632\u62A4\uFF1A\u9690\u533F IP\uFF0C\u4F7F\u7528 WAF \u7B49\u5DE5\u5177\u62B5\u5FA1\u7F51\u7EDC\u653B\u51FB\uFF0C\u4FDD\u62A4\u88AB\u4EE3\u7406\u7684\u673A\u5668\uFF1B</li><li>\u6570\u636E\u5904\u7406\uFF1A\u63D0\u4F9B\u538B\u7F29\u3001\u52A0\u5BC6\u7B49\u989D\u5916\u7684\u529F\u80FD\u3002</li></ol><p>\u5173\u4E8E HTTP \u7684\u4EE3\u7406\u8FD8\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u300C\u4EE3\u7406\u534F\u8BAE\u300D\uFF08proxy protocol\uFF09\uFF0C\u5B83\u7531\u77E5\u540D\u7684\u4EE3\u7406\u8F6F\u4EF6 HAProxy \u5236\u8BA2\uFF0C\u4F46\u5E76\u4E0D\u662F RFC \u6807\u51C6\uFF0C\u6211\u4E5F\u4F1A\u5728\u4E4B\u540E\u7684\u8BFE\u7A0B\u91CC\u4E13\u95E8\u8BB2\u89E3\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u6B21\u6211\u4ECB\u7ECD\u4E86\u4E0E HTTP \u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE\uFF0C\u5728\u8FD9\u91CC\u7B80\u5355\u5C0F\u7ED3\u4E00\u4E0B\u4ECA\u5929\u7684\u5185\u5BB9\u3002</p><ol><li>TCP/IP \u662F\u7F51\u7EDC\u4E16\u754C\u6700\u5E38\u7528\u7684\u534F\u8BAE\uFF0CHTTP \u901A\u5E38\u8FD0\u884C\u5728 TCP/IP \u63D0\u4F9B\u7684\u53EF\u9760\u4F20\u8F93\u57FA\u7840\u4E0A\uFF1B</li><li>DNS \u57DF\u540D\u662F IP \u5730\u5740\u7684\u7B49\u4EF7\u66FF\u4EE3\uFF0C\u9700\u8981\u7528\u57DF\u540D\u89E3\u6790\u5B9E\u73B0\u5230 IP \u5730\u5740\u7684\u6620\u5C04\uFF1B</li><li>URI \u662F\u7528\u6765\u6807\u8BB0\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u7684\u4E00\u4E2A\u540D\u5B57\uFF0C\u7531 <code>\u534F\u8BAE\u540D + \u4E3B\u673A\u540D + \u8DEF\u5F84</code> \u6784\u6210\uFF0C\u4FD7\u79F0 URL\uFF1B</li><li>HTTPS \u76F8\u5F53\u4E8E <code>HTTP+SSL/TLS+TCP/IP</code> \uFF0C\u4E3A HTTP \u5957\u4E86\u4E00\u4E2A\u5B89\u5168\u7684\u5916\u58F3\uFF1B</li><li>\u4EE3\u7406\u662F HTTP \u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u4E2D\u8F6C\u7AD9\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7F13\u5B58\u52A0\u901F\u3001\u8D1F\u8F7D\u5747\u8861\u7B49\u529F\u80FD\u3002</li></ol><p>\u7ECF\u8FC7\u8FD9\u4E24\u8BB2\u7684\u5B66\u4E60\uFF0C\u76F8\u4FE1\u4F60\u5E94\u8BE5\u5BF9 HTTP \u6709\u4E86\u4E00\u4E2A\u6BD4\u8F83\u5168\u9762\u7684\u4E86\u89E3\uFF0C\u867D\u7136\u8FD8\u4E0D\u662F\u5F88\u6DF1\u5165\uFF0C\u4F46\u5DF2\u7ECF\u4E3A\u540E\u7EED\u7684\u5B66\u4E60\u626B\u6E05\u4E86\u969C\u788D\u3002</p><h2 id="\u8BFE\u4E0B\u4F5C\u4E1A" tabindex="-1">\u8BFE\u4E0B\u4F5C\u4E1A <a class="header-anchor" href="#\u8BFE\u4E0B\u4F5C\u4E1A" aria-hidden="true">#</a></h2><ol><li><p>DNS \u4E0E URI \u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F</p><p>URL \u4E2D\u7684\u4E3B\u673A\u540D\u90E8\u5206\u662F\u9700\u8981\u8F6C\u6362\u5230 IP \u534F\u8BAE\u4E2D\u9700\u8981\u7684 IP \u5730\u5740</p></li><li><p>\u5728\u8BB2 <strong>\u4EE3\u7406</strong> \u65F6\u6211\u7279\u610F\u6CA1\u6709\u4E3E\u4F8B\u8BF4\u660E\uFF0C\u4F60\u80FD\u591F\u7528\u5F15\u5165\u4E00\u4E2A\u300C\u5C0F\u5F3A\u300D\u7684\u89D2\u8272\uFF0C\u901A\u8FC7\u6253\u7535\u8BDD\u6765\u6BD4\u55BB\u4E00\u4E0B\u5417\uFF1F</p></li></ol><h2 id="\u8BFE\u5916\u5C0F\u8D34\u58EB" tabindex="-1">\u8BFE\u5916\u5C0F\u8D34\u58EB <a class="header-anchor" href="#\u8BFE\u5916\u5C0F\u8D34\u58EB" aria-hidden="true">#</a></h2><ul><li><p>IP \u534F\u8BAE\u66FE\u6709 v1\u3001v2\u3001v3 \u7B49\u65E9\u671F\u7248\u672C\uFF0C\u4F46\u56E0\u4E3A\u4E0D\u591F\u5B8C\u5584\u800C\u4E48\u6709\u5BF9\u5916\u53D1\u5E03\uFF0C\u800C v5 \u5219\u662F\u4EC5\u7528\u4E8E\u5B9E\u9A8C\u5BA4\u5185\u90E8\u7814\u7A76\uFF0C\u4E5F\u4ECE\u672A\u516C\u5F00\uFF0C\u6240\u4EE5\u6211\u4EEC\u770B\u5230\u7684\u53EA\u6709 v4 \u548C v6 \u4E24\u4E2A\u7248\u672C</p></li><li><p>2011 \u5E74 2 \u6708\uFF0C\u4F1A\u8054\u7F51\u7BA1\u7406\u7EC4\u7EC7 ICANN \u6B63\u5F0F\u5BA3\u5E03 IPv4 \u7684\u5730\u5740\u6BB5\u88AB \u300C\u7528\u5C3D\u300D</p></li><li><p>\u5982\u679C\u4F7F\u7528 UNIX/Linux \u64CD\u4F5C\u7CFB\u7EDF\uFF0CHTTP \u53EF\u4EE5\u8FD0\u884C\u5728\u672C\u673A\u7684 UNIX Domain Socket \u4E0A\uFF0C\u5B83\u662F\u4E00\u79CD\u8FDB\u7A0B\u95F4\u901A\u4FE1\u673A\u5236\uFF0C\u4F46\u4E5F\u6EE1\u8DB3 HTTP \u5BF9\u4E0B\u5C42\u7684 <strong>\u53EF\u9760\u4F20\u8F93</strong> \u8981\u6C42\uFF0C\u6240\u4EE5\u5C31\u6210\u4E86 <code>HTTP over UNIX Domain Socket</code></p></li></ul>`,62),l=[s];function i(a,d,c,T,P,h){return t(),o("div",null,l)}const S=e(p,[["render",i]]);export{I as __pageData,S as default};
