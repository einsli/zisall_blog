const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题

  title: "Z's Blog",
  description: '记录自己的工作学习心得，争取当一条有梦想的咸鱼',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  serviceWorker: true, // 是否开启 PWA
  head: [ // 注入到页面<head> 中的标签
    ['link', {rel: 'icon', href: 'images/logo.jpg'}], //favicon，资源放在public文件夹
    ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      // 运维部分
      {
         text: "运维", items:[
             {
                 text: "内核升级", 
                 items: [
                     {text: "CentOS内核版本在线升级", link: "/pages/7f493a/"},
                     {text: "CentOS内核版本离线升级", link: "/pages/34698b/"}
                 ]
             },
             {
                 text: "环境搭建",
                 items: [
                     {text: "Centos7下Jdk1.8安装与配置", link: "/pages/083fae/"}
                 ]
             }
         ]
      },
      {
          text: "devops", items: [
              {
                  text: "Git",
                  items: [
                      {text: "Git版本控制学习", link: "/pages/63beb7/"}
                   ]
              },
              {
                  text: "Docker",
                  items: [
                      {text: "centos7-docker离线安装", link: "/pages/e57985/"}
                  ]
              }
          ]
      },
      {
          text: "问题排查", items: [
              {
                  text: "Harbor",
                  items: [
                      {text: "Harbor问题排查-unknown blob", link: "/pages/3d1ff5/"}
                  ]
              }
          ]
      },
      // },
      // { text: '案例', link: '/pages/5d571c/' },
      // {text: '关于我', link: '/pages/db78e2/'},
      {text: 'Gitee', link: 'https://gitee.com/ZisFinal/'},
      {text: 'Github', link: 'https://github.com/einsli/'}
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/images/logo.jpg', // 导航栏logo
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: {mode: 'structuring', collapsable: false}, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'z', // 必需
      link: 'https://github.com/einsli', // 作者链接（可选）
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/images/logo.jpg',
      name: 'z',
      slogan: '所思，所学，所想，所行',
    },

    social: { // 社交图标，显示于博主信息栏和页脚栏
      iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: 'Email',
          link: 'mailto:keington@outlook.com'
        },
        {
          iconClass: 'icon-QQ',
          title: 'QQ',
          link: 'tencent://message/?uin=qq1950974755&Site=Sambow&Menu=yes'
        },
        {
          iconClass: 'icon-github',
          title: 'Github',
          link: 'https://github.com/keington/'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      // 博客版权信息，支持a标签
      copyrightInfo: 'Z | MIT License <br> <a target="_blank" href="http://beian.miit.gov.cn/" >鲁ICP备2021033689号-1</a>'
},

htmlModules,
},

  // 插件
  plugins: [

    ['fulltext-search'], // 全文搜索
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '9b9b3e79c929cfce252e54a57c3833df'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],
}
