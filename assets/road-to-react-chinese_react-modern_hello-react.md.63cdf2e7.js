import{_ as e,o as a,c as r,a as t}from"./app.ee052c02.js";const w=JSON.parse('{"title":"React \u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F60\u597D React","slug":"\u4F60\u597D-react","link":"#\u4F60\u597D-react","children":[{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60","link":"#\u7EC3\u4E60","children":[]}]}],"relativePath":"road-to-react-chinese/react-modern/hello-react.md","lastUpdated":1676383400000}'),c={name:"road-to-react-chinese/react-modern/hello-react.md"},i=t('<h1 id="react-\u57FA\u7840" tabindex="-1">React \u57FA\u7840 <a class="header-anchor" href="#react-\u57FA\u7840" aria-hidden="true">#</a></h1><p>\u5728\u7B2C\u4E00\u90E8\u5206\u7684\u5B66\u4E60\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7\u521B\u5EFA\u7B2C\u4E00\u4E2A React \u9879\u76EE\uFF0C\u4ECB\u7ECD React \u7684\u57FA\u7840\u77E5\u8BC6\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u5B9E\u73B0\u771F\u5B9E\u7684\u529F\u80FD\u6765\u63A2\u7D22 React \u7684\u65B0\u5185\u5BB9\uFF0C\u5C31\u50CF\u5F00\u53D1\u771F\u5B9E\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u4E00\u6837\u3002\u6700\u540E\uFF0C\u6211\u4EEC\u5C06\u62E5\u6709\u4E00\u4E2A\u53EF\u6B63\u5E38\u4F7F\u7528\u7684 React \u5E94\u7528\u7A0B\u5E8F\uFF0C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u5177\u5907\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u641C\u7D22\uFF0C\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u4EE5\u53CA\u9AD8\u7EA7\u72B6\u6001\u7BA1\u7406\u7B49\u529F\u80FD\u3002</p><h2 id="\u4F60\u597D-react" tabindex="-1">\u4F60\u597D React <a class="header-anchor" href="#\u4F60\u597D-react" aria-hidden="true">#</a></h2><p>\u5355\u9875\u9762\u5E94\u7528\uFF08<a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noreferrer">SPA</a>\uFF09\u5728\u7B2C\u4E00\u4EE3 SPA \u6846\u67B6\u5982 Angular\uFF08\u7531 Google \u5F00\u53D1\uFF09\u3001Ember\u3001Knockout \u548C Backbone \u4E2D\u53D8\u5F97\u8D8A\u6765\u8D8A\u53D7\u6B22\u8FCE\u3002\u4F7F\u7528\u8FD9\u4E9B\u6846\u67B6\u4F7F\u6784\u5EFA Web \u5E94\u7528\u66F4\u52A0\u7B80\u5355\uFF0C\u8FD9\u4E9B\u6846\u67B6\u8D85\u8D8A\u4E86\u666E\u901A\u7684 JavaScript \u548C jQuery\u3002Facebook \u4E8E 2013 \u5E74\u53D1\u5E03\u4E86 React\uFF0C\u8FD9\u662F\u53E6\u4E00\u79CD SPA \u7684\u89E3\u51B3\u65B9\u6848\u3002\u8FD9\u4E9B\u6846\u67B6\u5168\u90E8\u4F7F\u7528 JavaScript \u521B\u5EFA\u6574\u4E2A Web \u5E94\u7528\u3002</p><p>\u8BA9\u6211\u4EEC\u6682\u65F6\u56DE\u5230 SPA \u51FA\u73B0\u4E4B\u524D\uFF1A\u5728\u8FC7\u53BB\uFF0C\u7F51\u7AD9\u548C Web \u5E94\u7528\u662F\u5728\u670D\u52A1\u5668\u6E32\u67D3\u7684\u3002\u7528\u6237\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE URL\uFF0C\u5E76\u4ECE Web \u670D\u52A1\u5668\u8BF7\u6C42 HTML \u6587\u4EF6\u53CA\u5176\u6240\u6709\u76F8\u5173\u7684 HTML\u3001CSS \u548C JavaScript \u6587\u4EF6\u3002\u7ECF\u8FC7\u4E00\u6BB5\u7F51\u7EDC\u5EF6\u8FDF\u540E\uFF0C\u7528\u6237\u4F1A\u5728\u6D4F\u89C8\u5668\uFF08\u5BA2\u6237\u7AEF\uFF09\u4E2D\u770B\u5230\u6E32\u67D3\u540E\u7684 HTML\uFF0C\u968F\u540E\u5F00\u59CB\u4E0E\u5176\u8FDB\u884C\u4EA4\u4E92\u3002\u6BCF\u8FDB\u884C\u4E00\u6B21\u9875\u9762\u8DF3\u8F6C\uFF08\u4E5F\u5C31\u662F\u8BBF\u95EE\u53E6\u4E00\u4E2A URL\uFF09\u5C31\u4F1A\u518D\u6B21\u542F\u52A8\u8FD9\u4E00\u7CFB\u5217\u7684\u8FC7\u7A0B\u3002\u5728\u8FC7\u53BB\uFF0C\u672C\u8D28\u4E0A\u6240\u6709\u5173\u952E\u7684\u6B65\u9AA4\u90FD\u7531\u670D\u52A1\u5668\u5B8C\u6210\uFF0C\u800C\u5BA2\u6237\u7AEF\u4EC5\u901A\u8FC7\u5C55\u793A\u4E00\u4E2A\u4E2A\u6E32\u67D3\u540E\u7684\u9875\u9762\u626E\u6F14\u7740\u4E00\u4E2A\u5C0F\u89D2\u8272\u3002\u867D\u7136\u4F7F\u7528\u6807\u51C6\u7684 HTML \u548C CSS \u6784\u5EFA\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F46\u662F\u53EA\u4F7F\u7528\u4E86\u5C11\u91CF\u7684 JavaScript \u4F7F\u5B9E\u73B0\u4EA4\u4E92\uFF08\u5982\u4E0B\u62C9\u83DC\u5355\uFF09\u6216\u9AD8\u7EA7\u6837\u5F0F\uFF08\u5982\u5B9A\u4F4D\u63D0\u793A\u5DE5\u5177\uFF09\u6210\u4E3A\u53EF\u80FD\u3002jQuery \u5C31\u662F\u5B9E\u73B0\u8FD9\u7C7B\u529F\u80FD\u6700\u53D7\u6B22\u8FCE\u7684 JavaScript \u5E93\u3002</p><p>\u76F8\u53CD\uFF0C\u73B0\u4EE3\u7684 JavaScript \u5C06\u7126\u70B9\u4ECE\u670D\u52A1\u5668\u8F6C\u79FB\u5230\u4E86\u5BA2\u6237\u7AEF\u3002\u4E3E\u4E2A\u6700\u6781\u7AEF\u7684\u4F8B\u5B50\uFF1A\u7528\u6237\u8BBF\u95EE URL \u5E76\u8BF7\u6C42\u4E00\u4E2A <em>\u6700\u5C0F\u7684 HTML \u6587\u4EF6</em> \u548C\u4E00\u4E2A <em>\u76F8\u5173\u7684 JavaScript \u6587\u4EF6</em> \u3002\u7ECF\u8FC7\u4E00\u6BB5\u7F51\u7EDC\u5EF6\u8FDF\u540E\uFF0C\u7528\u6237\u4F1A\u5728\u6D4F\u89C8\u5668\u4E2D\u770B\u5230 <em>\u7531 JavaScript \u6E32\u67D3\u7684 HTML</em> \u5E76\u5F00\u59CB\u4E0E\u5176\u8FDB\u884C\u4EA4\u4E92\u3002\u6BCF\u4E00\u6B21\u989D\u5916\u7684\u9875\u9762\u8DF3\u8F6C\u90FD <em>\u4E0D\u4F1A</em> \u4ECE Web \u670D\u52A1\u5668\u8BF7\u6C42\u66F4\u591A\u7684\u6587\u4EF6\uFF0C\u800C\u662F\u4F1A\u4F7F\u7528\u6700\u521D\u8BF7\u6C42\u7684 JavaScript \u6765\u6E32\u67D3\u65B0\u7684\u9875\u9762\u3002\u540C\u6837\uFF0C\u7528\u6237\u7684\u5176\u4ED6\u6240\u6709\u4EA4\u4E92\u4E5F\u90FD\u5728\u5BA2\u6237\u7AEF\u4E0A\u8FDB\u884C\u5904\u7406\u3002\u5728\u73B0\u4EE3\u7684\u7248\u672C\u4E2D\uFF0C\u670D\u52A1\u5668\u4E3B\u8981\u901A\u8FC7\u4E00\u4E2A\u5C0F\u4F53\u79EF\u7684 HTML \u6587\u4EF6\u8DE8\u7EBF\u63D0\u4F9B JavaScript\u3002\u7136\u540E\uFF0C\u8FD9\u4E2A HTML \u6587\u4EF6\u5728\u5BA2\u6237\u7AEF\u6267\u884C\u6240\u6709\u76F8\u5173\u7684 JavaScript\uFF0C\u4EE5\u4F7F\u7528 HTML \u548C JavaScript \u6E32\u67D3\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u4EA4\u4E92\u3002</p><p>\u5728\u5176\u4ED6 SPA \u89E3\u51B3\u65B9\u6848\u4E2D\uFF0CReact \u4F7F\u8FD9\u5176\u6210\u4E3A\u53EF\u80FD\u3002\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0CSPA \u662F\u521B\u5EFA\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u4E2A JavaScript \u4E3B\u4F53\uFF0C\u8FD9\u4E9B JavaScript \u6574\u9F50\u7684\u7EC4\u7EC7\u5728\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u4E2D\uFF0C\u800C SPA \u6846\u67B6\u63D0\u4F9B\u4E86\u6784\u5EFA\u5B83\u7684\u6240\u6709\u5DE5\u5177\u3002\u5F53\u7528\u6237\u8BBF\u95EE\u60A8\u7684 Web \u5E94\u7528\u7684 URL \u65F6\uFF0CJavaScript \u5E94\u7528\u7A0B\u5E8F\u4F1A\u901A\u8FC7\u7F51\u7EDC\u4E00\u6B21\u6027\u53D1\u9001\u81F3\u60A8\u7684\u6D4F\u89C8\u5668\u3002\u4ECE\u6B64\uFF0CReact \u548C\u5176\u4ED6 SPA \u6846\u67B6\u5C31\u63A5\u7BA1\u4E86\u6D4F\u89C8\u5668\u4E2D\u6E32\u67D3\u548C\u5904\u7406\u7528\u6237\u4EA4\u4E92\u7684\u4EFB\u52A1\u3002</p><p>\u968F\u7740 React \u7684\u5174\u8D77\uFF0C\u7EC4\u4EF6\u7684\u6982\u5FF5\u5F00\u59CB\u6D41\u884C\u8D77\u6765\u3002\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u4F7F\u7528 HTML\u3001CSS \u548C JavaScript \u5B9A\u4E49\u5916\u89C2\u3002\u4E00\u65E6\u5B9A\u4E49\u597D\u4E00\u4E2A\u7EC4\u4EF6\u540E\uFF0C\u5B83\u5C31\u53EF\u4EE5\u7528\u5728\u7EC4\u4EF6\u7ED3\u6784\u4E2D\u6765\u521B\u5EFA\u6574\u4E2A\u5E94\u7528\u3002\u5C3D\u7BA1 React \u4F5C\u4E3A\u4E00\u4E2A\u5E93\u975E\u5E38\u91CD\u89C6\u7EC4\u4EF6\u7684\u6982\u5FF5\uFF0C\u4F46\u5468\u56F4\u7684\u751F\u6001\u7CFB\u7EDF\u5374\u4F7F\u5176\u6210\u4E3A\u4E86\u4E00\u4E2A\u975E\u5E38\u7075\u6D3B\u7684\u6846\u67B6\u3002React \u62E5\u6709\u4FBF\u6377\u7684 API\uFF0C\u8FD8\u62E5\u6709\u7A33\u5B9A\u800C\u7E41\u8363\u7684\u751F\u6001\u7CFB\u7EDF\u4EE5\u53CA\u70ED\u60C5\u6D3B\u8DC3\u7684\u793E\u533A\u3002\u6211\u4EEC\u975E\u5E38\u6B22\u8FCE\u60A8\u7684\u52A0\u5165 \u{1F603}</p><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li>\u9605\u8BFB\u5173\u4E8E<a href="https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/" target="_blank" rel="noreferrer">\u4E3A\u4EC0\u4E48\u6211\u4ECE Angular \u6362\u6210 React</a></li><li>\u9605\u8BFB\u5173\u4E8E<a href="https://www.robinwieruch.de/how-to-learn-framework/" target="_blank" rel="noreferrer">\u5982\u4F55\u5B66\u4E60\u4E00\u4E2A\u6846\u67B6</a></li><li>\u9605\u8BFB\u5173\u4E8E<a href="https://www.robinwieruch.de/learn-react-js" target="_blank" rel="noreferrer">\u5982\u4F55\u5B66\u4E60 React</a></li><li>\u9605\u8BFB\u5173\u4E8E<a href="https://www.robinwieruch.de/why-frameworks-matter" target="_blank" rel="noreferrer">\u4E3A\u4EC0\u4E48\u6846\u67B6\u5F88\u91CD\u8981</a></li><li>\u6D4F\u89C8<a href="https://www.robinwieruch.de/javascript-fundamentals-react-requirements" target="_blank" rel="noreferrer">React \u6240\u9700\u7684 JavaScript \u57FA\u7840</a> -- \u4E0D\u7528\u592A\u5173\u6CE8 React\uFF0C\u770B\u4E00\u4E0B\u81EA\u5DF1\u5BF9 React \u4E2D\u7528\u5230\u7684 JavaScript \u7279\u6027\u4E86\u89E3\u591A\u5C11</li></ul>',10),n=[i];function l(o,p,h,s,d,S){return a(),r("div",null,n)}const f=e(c,[["render",l]]);export{w as __pageData,f as default};
