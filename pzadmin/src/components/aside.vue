
<template>
<el-menu
        :style="{width: '230px'} "
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <p class="logo-lg">🍉大校医院陪诊</p>
        <TreeMenu :index="0" :menuData = "menuData"></TreeMenu>
      </el-menu>
</template>

<script setup>
import TreeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
const router = useRouter()
//console.log(router,'router')可以获取到所有的router信息
const menuData = reactive(router.options.routes[0].children)
console.log(menuData)
const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="less" scoped>
.aside-container{
    height: 100%;
    .logo-lg {
        font-size: 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: white;
    }
}

</style>
