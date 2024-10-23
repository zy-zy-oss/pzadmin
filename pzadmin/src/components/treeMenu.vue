
<template>
        <template v-for="(item,index) in props.menuData">
        <!-- 如果没有孩子或者孩子数量为0，那使用 <el-menu-item>-->
        <el-menu-item
        @click="handleClick(item,`${props.index}-${item.meta.id}`)"
        v-if = "!item.children||item.children.length==0" 
        :index="`${props.index}-${item.meta.id}`"
        :key="`${props.index}-${item.meta.id}`">
          <el-icon size="20">
          <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{item.meta.name+props.index}}</span>
        </el-menu-item>
        <!-- 如果有孩子，就用<el-sub-menu>标签 --> 
        <el-sub-menu v-else :index="`${props.index}-${item.meta.id}`">
            <template #title>
            <el-icon size="20">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{item.meta.name+props.index}}</span>
            </template>
            <!-- 这个递归够我学一辈子啊。。 -->
            <tree-menu :index="`${props.index+1}-${item.meta.id}`" :menuData="item.children"/> 
        </el-sub-menu>
    </template>
</template>

<script setup>
 const props = defineProps(['menuData','index'])
 import { useRouter } from 'vue-router';
 const router = useRouter()
 console.log(props.index,'????????????') 
 const handleClick = (item,active) => {
    console.log(item,'item')
    router.push(item.meta.path)
 }
</script>

<style scoped>


</style>
