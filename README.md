# 两天做完的pzadmin项目

10.21-10.22必须敲完！

### 一、创建项目

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
