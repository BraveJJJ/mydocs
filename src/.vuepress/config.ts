import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/mydocs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "BraveJ Blog Preview",
      
      description: "A blog  for vp-brave-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "演示",
      description: "vp-brave-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
