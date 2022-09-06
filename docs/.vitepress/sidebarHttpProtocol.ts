export default () => {
  return [
    {
      text: '01 | 开篇',
      items: [
        {
          text: '01 | 开篇: To Be a HTTP Hero',
          link: '/http-protocol/01/01.md',
        },
      ],
    },
    {
      text: '02 | 破冰篇',
      items: [
        {
          text: '01 | 时势与英雄：HTTP 的前世今生',
          link: '/http-protocol/02/01.md',
        },
        {
          text: '02 | HTTP 是什么？HTTP 又不是什么？',
          link: '/http-protocol/02/02.md',
        },
        {
          text: '03 | HTTP 世界全览：与 HTTP 相关的各种概念',
          link: '/http-protocol/02/03.md',
        },
        {
          text: '04 | HTTP 世界全览：与 HTTP 相关的各种协议',
          link: '/http-protocol/02/04.md',
        },
        {
          text: '04 | HTTP 世界全览：与 HTTP 相关的各种协议',
          link: '/http-protocol/02/05.md',
        },
        {
          text: '04 | HTTP 世界全览：与 HTTP 相关的各种协议',
          link: '/http-protocol/02/06.md',
        },
      ],
      collapsible: true,
      // collapsed: false,
    },
    {
      text: '03 | 基础篇',
      items: [
        {
          text: '01 | 键入网址再按下回车，后面究竟发生了什么？',
          link: '/http-protocol/03/01.md',
        },
        {
          text: '02 | HTTP 报文是什么样子的？',
          link: '/http-protocol/03/02.md',
        },
        {
          text: '03 | 应该如何理解请求方法？',
          link: '/http-protocol/03/03.md',
        },
        {
          text: '04 | 你能写出正确的网址吗？',
          link: '/http-protocol/03/04.md',
        },
        {
          text: '05 | 响应状态码该怎么用？',
          link: '/http-protocol/03/05.md',
        },
        {
          text: '06 | HTTP 有哪些特点？',
          link: '/http-protocol/03/06.md',
        },
        {
          text: '07 | HTTP 有哪些优点？又有哪些缺点？',
          link: '/http-protocol/03/07.md',
        },
      ],
      collapsible: true,
    },
    {
      text: '04 | 进阶篇',
      items: [
        {
          text: '01 | 海纳百川：HTTP 的实体数据',
          link: '/http-protocol/04/01.md',
        },
        {
          text: '02 | 把大象装进冰箱：HTTP 传输大文件的方法',
          link: '/http-protocol/04/02.md',
        },
        {
          text: '03 | 排队也要讲效率：HTTP 的连接管理',
          link: '/http-protocol/04/03.md',
        },
        {
          text: '04 | 四通八达：HTTP 的重定向和跳转',
          link: '/http-protocol/04/04.md',
        },
        {
          text: '05 | 让我知道你是谁：HTTP 的 Cookie 机制',
          link: '/http-protocol/04/05.md',
        },
        {
          text: '06 | 生鲜速递：HTTP 的缓存控制',
          link: '/http-protocol/04/06.md',
        },
        {
          text: '7 | 良心中间商：HTTP 的代理服务',
          link: '/http-protocol/04/07.md',
        },
        {
          text: '08 | 冷链周转：HTTP 的缓存代理',
          link: '/http-protocol/04/08.md',
        },
      ],
      collapsible: true,
    },
    {
      text: '05 | 安全篇',
      items: [
        {
          text: '01 | TLS 又是什么？',
          link: '/http-protocol/05/01.md',
        },
        {
          text: '02 | 固若金汤的根本: 对称加密与非对称加密',
          link: '/http-protocol/05/02.md',
        },
        {
          text: '03 | 固若金汤的根本: 数字签名与证书',
          link: '/http-protocol/05/03.md',
        },
        {
          text: '04 | 信任始于握手: TLS 1.2 连接过程解析',
          link: '/http-protocol/05/04.md',
        },
        {
          text: '05 | 更好更快的握手: TLS 1.3 特性解析',
          link: '/http-protocol/05/05.md',
        },
        {
          text: '06 | 连接太慢该怎么办 HTTPS 的优化',
          link: '/http-protocol/05/06.md',
        },
        {
          text: '7 | 我应该迁移到 HTTPS 吗？',
          link: '/http-protocol/05/07.md',
        },
      ],
      collapsible: true,
    },
    {
      text: '06 | 飞翔篇',
      items: [
        {
          text: '01 | 时代之风：HTTP/2 特性概览',
          link: '/http-protocol/06/01.md',
        },
        {
          text: '02 | 时代之风：HTTP/2 内核剖析',
          link: '/http-protocol/06/02.md',
        },
        {
          text: '03 | 未来之路：HTTP/3 展望',
          link: '/http-protocol/06/03.md',
        },
        {
          text: '04 | 我应该迁移到 HTTP/2 吗？',
          link: '/http-protocol/06/04.md',
        },
      ],
      collapsible: true,
    },
    {
      text: '07 | 探索篇',
      items: [
        {
          text: '01 | Nginx：高性能的 Web 服务器',
          link: '/http-protocol/07/01.md',
        },
        {
          text: '02 | OpenResty：更灵活的 Web 服务器',
          link: '/http-protocol/07/02.md',
        },
        {
          text: '003 | WAF：保护我们的网络服务',
          link: '/http-protocol/07/03.md',
        },
        {
          text: '04 | CDN：加速我们的网络服务',
          link: '/http-protocol/07/04.md',
        },
        {
          text: '005 | WebSocket：沙盒里的 TCP',
          link: '/http-protocol/07/05.md',
        },
      ],
      collapsable: true,
    },
  ]
}
