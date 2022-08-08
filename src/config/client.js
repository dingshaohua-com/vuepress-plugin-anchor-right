import { defineClientConfig } from "@vuepress/client";
import { watch, createApp } from "vue";
import { useRoute, useRouter } from "vue-router";
// @ts-ignore
import AnchorRight from "./components/anchor-right/index.vue";

export default defineClientConfig({
  setup() {
    const route = useRoute();
    const router = useRouter();

    // 监听切换左侧一级标题切换，将右侧小菜单挂载到当前页面上
    // 因为不是主题  所以如果小标题不采用fixted 只能作为全局组件挂载
    watch(
      () => route.path,
      (oldVal, newVal) => {
        if (oldVal !== newVal) {
          setTimeout(() => {
            const anchorRight = document.querySelector(".anchor-right");
            const app = createApp(AnchorRight);
            app.provide("route", route);
            app.provide("router", router);
            app.mount(anchorRight);
          }, 300);
        }
      },
      {
        immediate: true,
      }
    );
  },
});
