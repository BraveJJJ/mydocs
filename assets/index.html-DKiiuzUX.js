import{_ as n,c as r,e as a,a as t,b as o,o as i}from"./app-BCb_XVbp.js";const m={};function l(s,e){return i(),r("div",null,[a(` <script lang="ts">
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
  <\/script>

<p> {{currentTime}}</p> `),e[0]||(e[0]=t("p",null,"这是一个博客主页的案例。",-1)),e[1]||(e[1]=t("p",null,[o("要使用此布局，你应该在页面前端设置 "),t("code",null,"layout: BlogHome"),o(" 和 "),t("code",null,"home: true"),o("。")],-1)),e[2]||(e[2]=t("p",null,[o("相关配置文档请见 "),t("a",{href:"https://theme-hope.vuejs.press/zh/guide/blog/home.html",target:"_blank",rel:"noopener noreferrer"},"博客主页"),o("。")],-1))])}const c=n(m,[["render",l],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/zh/","title":"首页","lang":"zh-CN","frontmatter":{"home":true,"layout":"BlogHome","icon":"clarity:home-solid","title":"首页","bgImage":"http://localhost:8080/mydocs/assets/images/bg.png","bgimagedark":"http://localhost:8080/mydocs/assets/images/bgnight.jpg","heroImage":"/logo.svg","heroText":"BraveJ,一个.NET开发者","heroFullScreen":true,"tagline":"勇敢不是无所畏惧,而是心怀恐惧,却依然向前","projects":[{"icon":"project","name":"项目名称","desc":"项目详细描述","link":"https://你的项目链接"},{"icon":"link","name":"链接名称","desc":"链接详细描述","link":"https://链接地址"},{"icon":"book","name":"书籍名称","desc":"书籍详细描述","link":"https://你的书籍链接"},{"icon":"article","name":"文章名称","desc":"文章详细描述","link":"https://你的文章链接"},{"icon":"friend","name":"伙伴名称","desc":"伙伴详细介绍","link":"https://你的伙伴链接"},{"icon":"/logo.svg","name":"自定义项目","desc":"自定义详细介绍","link":"https://你的自定义链接"}],"footer":"自定义你的页脚文字","description":"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/mydocs/"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/mydocs/zh/"}],["meta",{"property":"og:site_name","content":"演示"}],["meta",{"property":"og:title","content":"首页"}],["meta",{"property":"og:description","content":"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-13T20:11:02.000Z"}],["meta",{"property":"article:author","content":"BraveJ"}],["meta",{"property":"article:modified_time","content":"2024-09-13T20:11:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"首页\\",\\"description\\":\\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。\\"}"]]},"headers":[],"git":{"createdTime":1726068143000,"updatedTime":1726258262000,"contributors":[{"name":"BraveJ","email":"1228848984@qq.com","commits":2}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"zh/README.md","localizedDate":"2024年9月11日","excerpt":"","autoDesc":true}');export{c as comp,u as data};
