---
home: true
layout: BlogHome
icon: clarity:home-solid
title: 首页
bgImage: http://localhost:8080/mydocs/assets/images/bg.png
bgimagedark: http://localhost:8080/mydocs/assets/images/bgnight.jpg
heroImage: /logo.svg
heroText: BraveJ,一个.NET开发者
heroFullScreen: true
tagline: 勇敢不是无所畏惧,而是心怀恐惧,却依然向前
projects:
  - icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: /logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接

footer: 自定义你的页脚文字
---

  <!-- <script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  export default defineComponent({
    name: 'TimeDisplay',
    setup() {
      const currentTime = ref('');
      let timer: number;
      const updateTime = () => {
        const now = new Date();
        currentTime.value = now.toLocaleTimeString();
      };
      onMounted(() => {
        updateTime();
        timer = setInterval(updateTime, 1000);
      });
      onBeforeUnmount(() => {
        clearInterval(timer);
      });
      return {
        currentTime,
      };
    },
  });
  </script>

<p> {{currentTime}}</p> -->

这是一个博客主页的案例。

要使用此布局，你应该在页面前端设置 `layout: BlogHome` 和 `home: true`。

相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home.html)。
