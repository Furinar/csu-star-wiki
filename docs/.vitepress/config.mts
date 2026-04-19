import { defineConfig } from 'vitepress'
import { majorList } from "../data/majorList";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSU Wiki",
  titleTemplate: "中南指北",
  description: "Make CSU Great Again",
  head: [
    ['link', { rel: 'icon', type: 'image/svg', href: '/csustar.svg' }]
  ],

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: '/csustar.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '入学指南', link: '/compass' },
      { text: '专业指北', link: '/major' }
    ],

    sidebar: {
      '/compass/': [
        {
          text: '入学指南',
          collapsed: false,
          items: [
            { text: 'ysnb', link: '/compass/' },
          ]
        }
      ],

      '/major/': majorList
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Furinar/csu-star-wiki' }
    ],


    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2026-至今 CSU Star开发者团队'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})
