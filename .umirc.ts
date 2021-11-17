import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'top',
  },
  routes: [
    { path: '/', component: '@/pages/index', name: "首页" },
    {
      name: "课程管理",
      path: "/manage",
      component: "@/pages/manage",
    },
    {
      name: "关于我们",
      path: "/about",
      component: "@/pages/about",
    },
  ],
  fastRefresh: {},
});
