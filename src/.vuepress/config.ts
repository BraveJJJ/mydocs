import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/mydocs/",
  // 设置正在使用的语言
  // lang: "zh-CN",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "演示",
      description: "vp-brave-hope 的博客演示",
    },
    "/": {
      lang: "en-US",
      title: "BraveJ Blog Preview",

      description: "A blog  for vp-brave-hope",
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },
});
