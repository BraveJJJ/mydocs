// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/"
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  "/zh/demo/",
  //"/zh/posts/",
  {
    text: "\u535A\u6587",
    icon: "catppuccin:http",
    prefix: "/zh/posts/",
    children: [
      {
        text: "\u82F9\u679C",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "\u82F9\u679C1", icon: "pen-to-square", link: "1" },
          { text: "\u82F9\u679C2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "\u9999\u8549",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "\u9999\u8549 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "\u9999\u8549 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "\u6A31\u6843", icon: "pen-to-square", link: "cherry" },
      { text: "\u706B\u9F99\u679C", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html"
    }
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "F:/ZjhDoc/hopedoc/BraveJ-Doc/src/.vuepress/sidebar";
function getDirectories(srcPath) {
  const directories = [];
  const lastFolderName = path.basename(srcPath);
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      if (fs.statSync(itemPath).isDirectory()) {
        const relativePath = path.relative(srcPath, itemPath).replace(/\\/g, "/");
        directories.push(`/${lastFolderName}/${relativePath}/`);
        traverse(itemPath);
      }
    }
  }
  traverse(srcPath);
  return [...new Set(directories)];
}
var baseDir = path.resolve(__vite_injected_original_dirname, "../../zh");
var directoryStructure = getDirectories(baseDir);
var zhSidebarConfig = {
  ...directoryStructure.reduce(
    (acc, path2) => {
      acc[`${path2}`] = "structure";
      return acc;
    },
    {
      //初始化值，如果自动生成包含初始配置的key，通常会被覆盖，因为它在最前面
      //   "/zh/": [
      //   "",
      //   {
      //     text: "如何使用",
      //     icon: "laptop-code",
      //     prefix: "demo/",
      //     link: "demo/",
      //     children: "structure",
      //   },
      //   {
      //     text: "文章",
      //     icon: "book",
      //     prefix: "posts/",
      //     children: "structure",
      //   },
      //   "intro",
      //   "slide",
      // ],
    }
  )
};
var coverSidebarConfig = {
  "/zh/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slide"
  ]
};
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
debugger;
var pp = JSON.stringify(mergeObjects(zhSidebarConfig, coverSidebarConfig));
{
}
var zhSidebar = sidebar2(mergeObjects(zhSidebarConfig, coverSidebarConfig));

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://mister-hope.github.io",
  author: {
    name: "BraveJ",
    url: "https://mister-hope.com"
  },
  fullscreen: true,
  iconAssets: "iconify",
  logo: "/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  blog: {
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press"
      }
    }
  },
  locales: {
    "/": {
      // rtl: true,
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      blog: {
        description: "A .NET programmer",
        intro: "/intro.html"
      },
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // rtl: true,
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "\u9ED8\u8BA4\u9875\u811A",
      displayFooter: true,
      blog: {
        description: "\u4E00\u4E2A.NET\u5F00\u53D1\u8005",
        intro: "/zh/intro.html"
      },
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"]
    }
  },
  // enable it to preview all changes in time
  // hotReload: true,
  plugins: {
    blog: true,
    // 禁用返回顶部按钮
    backToTop: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // install katex before enabling it
      // katex: true,
      // install mathjax-full before enabling it
      // mathjax: true,
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "BraveJ Blog Preview",
      description: "A blog  for vp-brave-hope"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "\u6F14\u793A",
      description: "vp-brave-hope \u7684\u535A\u5BA2\u6F14\u793A"
    }
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovWmpoRG9jL2hvcGVkb2MvQnJhdmVKLURvYy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxaamhEb2NcXFxcaG9wZWRvY1xcXFxCcmF2ZUotRG9jXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9aamhEb2MvaG9wZWRvYy9CcmF2ZUotRG9jL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgbGFuZzogXCJlbi1VU1wiLFxuICAgICAgdGl0bGU6IFwiQnJhdmVKIEJsb2cgUHJldmlld1wiLFxuICAgICAgXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIGJsb2cgIGZvciB2cC1icmF2ZS1ob3BlXCIsXG4gICAgfSxcbiAgICBcIi96aC9cIjoge1xuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgICAgdGl0bGU6IFwiXHU2RjE0XHU3OTNBXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJ2cC1icmF2ZS1ob3BlIFx1NzY4NFx1NTM1QVx1NUJBMlx1NkYxNFx1NzkzQVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWUsXG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9aamhEb2MvaG9wZWRvYy9CcmF2ZUotRG9jL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFpqaERvY1xcXFxob3BlZG9jXFxcXEJyYXZlSi1Eb2NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovWmpoRG9jL2hvcGVkb2MvQnJhdmVKLURvYy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9taXN0ZXItaG9wZS5naXRodWIuaW9cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIkJyYXZlSlwiLFxuICAgIHVybDogXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLFxuICB9LFxuICBmdWxsc2NyZWVuOnRydWUsXG4gIGljb25Bc3NldHM6IFwiaWNvbmlmeVwiLFxuXG4gIGxvZ286IFwiL2xvZ28uc3ZnXCIsXG5cbiAgcmVwbzogXCJ2dWVwcmVzcy10aGVtZS1ob3BlL3Z1ZXByZXNzLXRoZW1lLWhvcGVcIixcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIGJsb2c6IHtcbiAgICBtZWRpYXM6IHtcbiAgICAgIEJhaWR1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEJpbGlCaWxpOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEJpdGJ1Y2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBEaW5nZGluZzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBEaXNjb3JkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEVtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXG4gICAgICBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGxhYjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIExhcms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGluZXM6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFBvY2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBSZWRkaXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUnNzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgVnVlUHJlc3NUaGVtZUhvcGU6IHtcbiAgICAgICAgaWNvbjogXCJodHRwczovL3RoZW1lLWhvcGUtYXNzZXRzLnZ1ZWpzLnByZXNzL2xvZ28uc3ZnXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBydGw6IHRydWUsXG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogZW5OYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IGVuU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIkRlZmF1bHQgZm9vdGVyXCIsXG5cbiAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSAuTkVUIHByb2dyYW1tZXJcIixcbiAgICAgICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcbiAgICAgIH0sXG5cbiAgICAgIG1ldGFMb2NhbGVzOiB7XG4gICAgICAgIGVkaXRMaW5rOiBcIkVkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hpbmVzZSBsb2NhbGUgY29uZmlnXG4gICAgICovXG4gICAgXCIvemgvXCI6IHtcbiAgICAgIC8vIHJ0bDogdHJ1ZSxcbiAgICAgIC8vIG5hdmJhclxuICAgICAgbmF2YmFyOiB6aE5hdmJhcixcblxuICAgICAgLy8gc2lkZWJhclxuICAgICAgc2lkZWJhcjogemhTaWRlYmFyLFxuXG4gICAgICBmb290ZXI6IFwiXHU5RUQ4XHU4QkE0XHU5ODc1XHU4MTFBXCIsXG5cbiAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBLk5FVFx1NUYwMFx1NTNEMVx1ODAwNVwiLFxuICAgICAgICBpbnRybzogXCIvemgvaW50cm8uaHRtbFwiLFxuICAgICAgfSxcblxuICAgICAgLy8gcGFnZSBtZXRhXG4gICAgICBtZXRhTG9jYWxlczoge1xuICAgICAgICBlZGl0TGluazogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG5cbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICAgIFwiL3poL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgfSxcbiAgfSxcblxuICAvLyBlbmFibGUgaXQgdG8gcHJldmlldyBhbGwgY2hhbmdlcyBpbiB0aW1lXG4gIC8vIGhvdFJlbG9hZDogdHJ1ZSxcblxuICBwbHVnaW5zOiB7XG4gICAgYmxvZzogdHJ1ZSxcbiAgICAvLyBcdTc5ODFcdTc1MjhcdThGRDRcdTU2REVcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcbiAgICBiYWNrVG9Ub3A6IHRydWUsXG5cbiAgICAvLyBJbnN0YWxsIEB3YWxpbmUvY2xpZW50IGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIE5vdGU6IFRoaXMgaXMgZm9yIHRlc3RpbmcgT05MWSFcbiAgICAvLyBZb3UgTVVTVCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZSBpbiBwcm9kdWN0aW9uLlxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgIC8vICAgc2VydmVyVVJMOiBcImh0dHBzOi8vd2FsaW5lLWNvbW1lbnQudnVlanMucHJlc3NcIixcbiAgICAvLyB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcblxuICAgIC8vIFRoZXNlIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAgbWFyazogdHJ1ZSxcbiAgICAgIHBsYW50dW1sOiB0cnVlLFxuICAgICAgc3BvaWxlcjogdHJ1ZSxcbiAgICAgIHN0eWxpemU6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gICAgICAvLyBpbnN0YWxsIGVjaGFydHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIGZsb3djaGFydC50cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcblxuICAgICAgLy8gZ2ZtIHJlcXVpcmVzIG1hdGhqYXgtZnVsbCB0byBwcm92aWRlIHRleCBzdXBwb3J0XG4gICAgICAvLyBnZm06IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwga2F0ZXggYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBrYXRleDogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBtYXRoamF4LWZ1bGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtYXRoamF4OiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIG1lcm1haWQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyByZXZlYWxKczoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIHNhbmRwYWNrLXZ1ZTMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBzYW5kcGFjazogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXB3YSBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVJbWFnZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L1pqaERvYy9ob3BlZG9jL0JyYXZlSi1Eb2Mvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFpqaERvY1xcXFxob3BlZG9jXFxcXEJyYXZlSi1Eb2NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1pqaERvYy9ob3BlZG9jL0JyYXZlSi1Eb2Mvc3JjLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgZW5OYXZiYXIgPSBuYXZiYXIoW1xuICBcIi9cIixcbiAgXCIvZGVtby9cIixcbiAge1xuICAgIHRleHQ6IFwiUG9zdHNcIixcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICBwcmVmaXg6IFwiL3Bvc3RzL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQXBwbGVcIixcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJBcHBsZTJcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMlwiIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkJhbmFuYVwiLFxuICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJhbmFuYSAxXCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCYW5hbmEgMlwiLFxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIjJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiM1wiLFxuICAgICAgICAgIFwiNFwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJDaGVycnlcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiY2hlcnJ5XCIgfSxcbiAgICAgIHsgdGV4dDogXCJEcmFnb24gRnJ1aXRcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiZHJhZ29uZnJ1aXRcIiB9LFxuICAgICAgXCJ0b21hdG9cIixcbiAgICAgIFwic3RyYXdiZXJyeVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlYyIERvY3NcIixcbiAgICBpY29uOiBcImJvb2tcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9aamhEb2MvaG9wZWRvYy9CcmF2ZUotRG9jL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxaamhEb2NcXFxcaG9wZWRvY1xcXFxCcmF2ZUotRG9jXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9aamhEb2MvaG9wZWRvYy9CcmF2ZUotRG9jL3NyYy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS92dWUnO1xuXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xuICBcIi96aC9cIixcbiAgXCIvemgvZGVtby9cIixcbiAgLy9cIi96aC9wb3N0cy9cIixcblxuICB7XG4gICAgdGV4dDogXCJcdTUzNUFcdTY1ODdcIixcbiAgICBpY29uOiBcImNhdHBwdWNjaW46aHR0cFwiLFxuICAgIHByZWZpeDogXCIvemgvcG9zdHMvXCIsXG4gICAgY2hpbGRyZW46IFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTgyRjlcdTY3OUNcIixcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIxXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcbiAgICAgICAgICBcIjNcIixcbiAgICAgICAgICBcIjRcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5XCIsXG4gICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgICAgICBwcmVmaXg6IFwiYmFuYW5hL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5IDFcIixcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgICAgICAgICAgbGluazogXCIxXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAyXCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NkEzMVx1Njg0M1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NzA2Qlx1OUY5OVx1Njc5Q1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJkcmFnb25mcnVpdFwiIH0sXG4gICAgICBcInRvbWF0b1wiLFxuICAgICAgXCJzdHJhd2JlcnJ5XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiVjIgXHU2NTg3XHU2ODYzXCIsXG4gICAgaWNvbjogXCJib29rXCIsXG4gICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvemgvXCIsXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovWmpoRG9jL2hvcGVkb2MvQnJhdmVKLURvYy9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFpqaERvY1xcXFxob3BlZG9jXFxcXEJyYXZlSi1Eb2NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9aamhEb2MvaG9wZWRvYy9CcmF2ZUotRG9jL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9lbi50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgZW5TaWRlYmFyID0gc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAgXCJcIixcbiAgICB7XG4gICAgICB0ZXh0OiBcIkRlbW9cIixcbiAgICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgICAgbGluazogXCJkZW1vL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkFydGljbGVzXCIsXG4gICAgICBpY29uOiBcImJvb2tcIixcbiAgICAgIHByZWZpeDogXCJwb3N0cy9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAgXCJpbnRyb1wiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiU2xpZGVzXCIsXG4gICAgICBpY29uOiBcInBlcnNvbi1jaGFsa2JvYXJkXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcGx1Z2luLW1kLWVuaGFuY2UudnVlanMucHJlc3MvZ3VpZGUvY29udGVudC9yZXZlYWxqcy9kZW1vLmh0bWxcIixcbiAgICB9LFxuICBdLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L1pqaERvYy9ob3BlZG9jL0JyYXZlSi1Eb2Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxaamhEb2NcXFxcaG9wZWRvY1xcXFxCcmF2ZUotRG9jXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovWmpoRG9jL2hvcGVkb2MvQnJhdmVKLURvYy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gZnVuY3Rpb24gdHJhdmVyc2VEaXJlY3RvcmllcyhkaXJlY3RvcnlQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4vLyAgIGNvbnN0IGRpcmVjdG9yaWVzU2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbi8vICAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG5cbi8vICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4vLyAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZGlyZWN0b3J5UGF0aCwgZmlsZS5uYW1lKTtcbi8vICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLnJlbGF0aXZlKHByb2Nlc3MuY3dkKCksIGZpbGVQYXRoKTtcblxuLy8gICAgIGlmIChmaWxlLmlzRGlyZWN0b3J5KCkpIHtcbi8vICAgICAgIGRpcmVjdG9yaWVzU2V0LmFkZChyZWxhdGl2ZVBhdGguc3BsaXQocGF0aC5zZXApLmpvaW4oJy8nKSk7XG5cbi8vICAgICAgIGNvbnN0IHN1YmRpcmVjdG9yaWVzID0gdHJhdmVyc2VEaXJlY3RvcmllcyhmaWxlUGF0aCk7XG4vLyAgICAgICBzdWJkaXJlY3Rvcmllcy5mb3JFYWNoKChzdWJQYXRoKSA9PiBkaXJlY3Rvcmllc1NldC5hZGQocGF0aC5qb2luKHJlbGF0aXZlUGF0aCwgc3ViUGF0aCkuc3BsaXQocGF0aC5zZXApLmpvaW4oJy8nKSkpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJldHVybiBBcnJheS5mcm9tKGRpcmVjdG9yaWVzU2V0KTtcbi8vIH1cbi8vIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vemgnKTsgXG4vLyBjb25zdCBkaXJlY3RvcnlTdHJ1Y3R1cmUgPSB0cmF2ZXJzZURpcmVjdG9yaWVzKGRpcmVjdG9yeVBhdGgpO1xuXG5mdW5jdGlvbiBnZXREaXJlY3RvcmllcyhzcmNQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZGlyZWN0b3JpZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbGFzdEZvbGRlck5hbWUgPXBhdGguYmFzZW5hbWUoc3JjUGF0aCk7XG4gICAgLy8gZGlyZWN0b3JpZXMucHVzaChgLyR7bGFzdEZvbGRlck5hbWV9L2ApO1xuXG4gICAgZnVuY3Rpb24gdHJhdmVyc2UoY3VycmVudFBhdGg6IHN0cmluZykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGZzLnJlYWRkaXJTeW5jKGN1cnJlbnRQYXRoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtUGF0aCA9IHBhdGguam9pbihjdXJyZW50UGF0aCwgaXRlbSk7XG4gICAgICAgICAgICBpZiAoZnMuc3RhdFN5bmMoaXRlbVBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAvLyBcdTgzQjdcdTUzRDZcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTVFNzZcdTY4M0NcdTVGMEZcdTUzMTZcdTRFM0FMaW51eFx1NjgzQ1x1NUYwRlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUoc3JjUGF0aCwgaXRlbVBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvcmllcy5wdXNoKGAvJHtsYXN0Rm9sZGVyTmFtZX0vJHtyZWxhdGl2ZVBhdGh9L2ApO1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlKGl0ZW1QYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYXZlcnNlKHNyY1BhdGgpO1xuICAgIHJldHVybiBbLi4ubmV3IFNldChkaXJlY3RvcmllcyldOyAvLyBcdTUzQkJcdTkxQ0Rcbn1cbmNvbnN0IGJhc2VEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vemgnKTsgXG5jb25zdCBkaXJlY3RvcnlTdHJ1Y3R1cmUgPSBnZXREaXJlY3RvcmllcyhiYXNlRGlyKTtcblxuY29uc3QgemhTaWRlYmFyQ29uZmlnID17Li4uZGlyZWN0b3J5U3RydWN0dXJlLnJlZHVjZSgoYWNjOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBwYXRoOiBzdHJpbmcpID0+XG4gIHtcbiAgICBhY2NbYCR7cGF0aH1gXSA9ICdzdHJ1Y3R1cmUnO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIFxuICB7XG4gICAgLy9cdTUyMURcdTU5Q0JcdTUzMTZcdTUwM0NcdUZGMENcdTU5ODJcdTY3OUNcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTUzMDVcdTU0MkJcdTUyMURcdTU5Q0JcdTkxNERcdTdGNkVcdTc2ODRrZXlcdUZGMENcdTkwMUFcdTVFMzhcdTRGMUFcdTg4QUJcdTg5ODZcdTc2RDZcdUZGMENcdTU2RTBcdTRFM0FcdTVCODNcdTU3MjhcdTY3MDBcdTUyNERcdTk3NjJcbiAgLy8gICBcIi96aC9cIjogW1xuICAvLyAgIFwiXCIsXG4gIC8vICAge1xuICAvLyAgICAgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTRGN0ZcdTc1MjhcIixcbiAgLy8gICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgLy8gICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAvLyAgICAgbGluazogXCJkZW1vL1wiLFxuICAvLyAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxuICAvLyAgICAgaWNvbjogXCJib29rXCIsXG4gIC8vICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gIC8vICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgLy8gICB9LFxuICAvLyAgIFwiaW50cm9cIixcbiAgLy8gICBcInNsaWRlXCIsXG4gIC8vIF0sXG4gIH0pXG59O1xuXG5cbi8vXHU4OTg2XHU3NkQ2XHU2Mzg5XHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU3Njg0XHU1MjREXHU3RjAwXHU5MTREXHU3RjZFXG5jb25zdCBjb3ZlclNpZGViYXJDb25maWcgPXtcbiAgXCIvemgvXCI6IFtcbiAgXCJcIixcbiAge1xuICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RjdGXHU3NTI4XCIsXG4gICAgaWNvbjogXCJsYXB0b3AtY29kZVwiLFxuICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgIGxpbms6IFwiZGVtby9cIixcbiAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXG4gICAgaWNvbjogXCJib29rXCIsXG4gICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICB9LFxuICBcImludHJvXCIsXG4gIFwic2xpZGVcIixcbl0sXG59XG5cbi8vXHU2NkZGXHU2MzYyXHU2MzA3XHU1QjlBa2V5XHU3Njg0XHU1MDNDXHVGRjBDXHU5MDFBXHU1RTM4XHU0RTJBXHU2MDI3XHU1MzE2XHU5MTREXHU3RjZFXG5pbnRlcmZhY2UgT2JqZWN0QW55IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VLZXlWYWx1ZShvYmo6IE9iamVjdEFueSwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oYHNpZGViYXJQcmVmaXggXCIke2tleX1cIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgU2lkZWJhckNvbmZpZ2ApO1xuICB9XG59XG4vL2NoYW5nZUtleVZhbHVlKGNvdmVyU2lkZWJhckNvbmZpZywgJ25hbWUnLCAnXHU2NzRFXHU1NkRCJyk7IFxuLy9cdTU0MDhcdTVFNzZcdTVCRjlcdThDNjFcbmZ1bmN0aW9uIG1lcmdlT2JqZWN0czxULCBVPihvYmoxOiBULCBvYmoyOiBVKTogVCAmIFUge1xuICByZXR1cm4gey4uLm9iajEsLi4ub2JqMn07XG59XG5cblxuXG5cbi8vIGNvbnN0IG9iajEgPSB7IG5hbWU6ICdBbGljZScsIGFnZTogMzAgfTtcbi8vIGNvbnN0IG9iajIgPSB7IGNpdHk6ICdOZXcgWW9yaycsIGNvdW50cnk6ICdVU0EnIH07XG4vLyBjb25zdCBtZXJnZWRPYmogPSBtZXJnZU9iamVjdHMob2JqMSwgb2JqMik7XG5kZWJ1Z2dlcjtcbmNvbnN0IHBwPUpTT04uc3RyaW5naWZ5KG1lcmdlT2JqZWN0cyh6aFNpZGViYXJDb25maWcsY292ZXJTaWRlYmFyQ29uZmlnKSk7XG4vLyB7XG4vLyAgIFwiL3poL1wiOiBcInN0cnVjdHVyZVwiLFxuLy8gICBcIi96aC9kZW1vL1wiOiBcInN0cnVjdHVyZVwiLFxuLy8gICBcIi96aC9tdXNpYy9cIjogXCJzdHJ1Y3R1cmVcIixcbi8vICAgXCIvemgvb3Blbi1zb3VyY2UtcHJvamVjdHMvXCI6IFwic3RydWN0dXJlXCIsXG4vLyAgIFwiL3poL3Bvc3RzL1wiOiBcInN0cnVjdHVyZVwiLFxuLy8gICBcIi96aC9wb3N0cy9hcHBsZS9cIjogXCJzdHJ1Y3R1cmVcIixcbi8vICAgXCIvemgvcG9zdHMvYmFuYW5hL1wiOiBcInN0cnVjdHVyZVwiLFxuLy8gICBcIi96aC9wcm9ncmFtLWxpZmUvXCI6IFwic3RydWN0dXJlXCIsXG4vLyAgIFwiL3poL3NvZnQtdG9vbC9cIjogXCJzdHJ1Y3R1cmVcIlxuLy8gICB9XG5cbntcbiAgXG5cbn1cblxuXG5leHBvcnQgY29uc3QgemhTaWRlYmFyID0gc2lkZWJhcihtZXJnZU9iamVjdHMoemhTaWRlYmFyQ29uZmlnLGNvdmVyU2lkZWJhckNvbmZpZykpO1xuXG5cblxuXG5cblxuLy8gZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xuXG4vLyAgIC8vIFwiL3poL1wiOiBkaXJlY3RvcnlTdHJ1Y3R1cmUsXG4vLyAgIFwiL3NyYy96aC9cIjogXCJzdHJ1Y3R1cmVcIixcbi8vICAgXCIvc3JjL3poL2RlbW8vXCI6IFwic3RydWN0dXJlXCJcbi8vIH1cbiBcbi8vICk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0FWLFNBQVMsY0FBYztBQUUzVSxJQUFNLFdBQVcsT0FBTztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsVUFDUixFQUFFLE1BQU0sVUFBVSxNQUFNLGlC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QVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU07QUFDckIsZ0JBQUksUUFBUTtBQUNWLHFCQUFPO0FBQUEsZ0JBQ0wsS0FBSztBQUFBLGdCQUNMLE9BQU8sRUFBRSxNQUFNLE1BQU07QUFBQSxnQkFDckIsU0FBUztBQUFBLGNBQ1g7QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF1Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEwREY7QUFDRixDQUFDOzs7QUR2UUQsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFFTixTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFFUCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFFQTtBQUFBO0FBQUE7QUFJRixDQUFDOyIsCiAgIm5hbWVzIjogWyJuYXZiYXIiLCAibmF2YmFyIiwgInNpZGViYXIiLCAicGF0aCIsICJzaWRlYmFyIl0KfQo=
