
<template>
<el-menu
        :style="{width:!isCollapse? '230px':'64px'} "
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <p class="logo-lg">{{!isCollapse?'🍉大校医院陪诊':'🍉'}}</p>
        <TreeMenu :index="0" :menuData = "menuData"></TreeMenu>
      </el-menu>
</template>

<script setup>
import TreeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import {useStore} from 'vuex';
import { computed } from 'vue';
const store = useStore()
const isCollapse  = computed(()=>store.state.menu.isCollapse)
const router = useRouter()
//console.log(router,'router')可以获取到所有的router信息
const menuData = computed(() => store.state.menu.routerList)
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
