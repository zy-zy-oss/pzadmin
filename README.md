# pzadmin项目

一、创建项目

vite构建项目非常快，直接输入下面的命令会自动构建（代理记得要改一下）

```bash
% export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897
% npm create vite@latest pzadmin -- --template vue
% npm i #npm install的简称hhh
% npm run dev #启动
```

### 二、路由创建

vue3对应的router 4.0的版本

```bash
% npm install vue-router@4
```

创建路由和对应界面. src/router/index.js

### 三、UI框架：element plus（基于Vue3的框架）

可以完整引入或按需引入（需要额外下载插件），看链接的教程吧

https://element-plus.org/zh-CN/guide/quickstart.html

```bash
#按需引入，下载插件
% npm install -D unplugin-vue-components unplugin-auto-import
```

一些questions：reactive from  'vue'，defineProps。Vue3的东西还挺陌生的。` <component :is="item.meta.icon"></component>`⬅️自定义组件，递归组件！

### 四、Vuex的引用（不过现在流行pinia，后面再学吧

Vuex 是一个专为 Vue.js 应用程序开发的 **状态管理模式 + 库** 。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
