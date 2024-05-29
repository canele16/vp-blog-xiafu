import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "canele`s notebook",
  titleTemplate: "lovecanele",
  description: "canele`s blog powered by VitePress",
  head: [['link', { rel: 'icon', href: '/vp-blog-xiafu/favicon.ico' }]],
  themeConfig: {
    // logo: '/cat.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "intro",
        items: [
          { text: "introduction", link: "/intro/" },
          { text: "markdown-examples", link: "/intro/markdown-examples" },
          { text: "api-examples", link: "/intro/api-examples" },
        ],
      },
      {
        text: "nav_beta",
        items: [
          { text: "Item A", link: "/nav_beta/item-1" },
          { text: "Item B", link: "/nav_beta/item-2" },
          { text: "Item C", link: "/nav_beta/item-3" },
        ],
      },
      {
        text: " maa_copilot_frontend",
        items: [
          { text: "readme", link: "/maa_copilot_frontend/README" },
          { text: "copilot", link: "/maa_copilot_frontend/copilot" },
        ],
      }
    ],

    sidebar: {
      intro: [
        {
          text: "intro",
          items: [
            { text: "introduction", link: "/intro/" },
            { text: "markdown-examples", link: "/intro/markdown-examples" },
            { text: "api-examples", link: "/intro/api-examples" },
          ],
        },
      ],

      nav_beta: [
        {
          text: "nav_beta",
          items: [
            { text: "Item A", link: "/nav_beta/item-1" },
            { text: "Item B", link: "/nav_beta/item-2" },
            { text: "Item C", link: "/nav_beta/item-3" },
          ],
        },
      ],
      
      maa_copilot_frontend: [
        {
          text: "maa_copilot_frontend",
          items: [
            { text: "readme", link: "/maa_copilot_frontend/README" },
            { text: "copilot", link: "/maa_copilot_frontend/copilot" },
          ],
        },
      ],
    },

    // 更新时间
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    // 页脚
    footer: {
      message: 'Powered by <a href="https://vitepress.dev/">VitePress</a>',
      copyright: "Copyright ©2024-present xiafu",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/canele16" },
    ],
  },

  // 站点地址
  base: "/vp-blog-xiafu/",

  // 简洁URL
  cleanUrls: true,
});
