const localData = localStorage.getItem('pz_sys')
const state = localData? localData.menu:{
    isCollapse: false,
    selectMenu:[],
    routerList: []

}
const mutations = {
    collapseMenu (state)
    {
        state.isCollapse = !state.isCollapse
    },
    addMenu(state,payload) {
        //对数据进行去重   
        if(state.selectMenu.findIndex(item=>item.path===payload.path)===-1){
            state.selectMenu.push(payload)
        }
    },
    closeMenu(state,payload){
        //找到点击数据的索引
        const index = state.selectMenu.findIndex(val => val.name === payload.name)
        //通过索引删除数组制定元素
        state.selectMenu.splice(index,1)
    },
    dynamicMenu(state,payload)
    {
        console.log(payload,'payload')
        const modules = import.meta.glob('../views/**/**/*.vue')
        console.log(modules)
        function routerSet(router)
        {
            router.forEach(route => {
                if(!route.children){
                    const url = `../views${route.meta.path}/index.vue`
                    route.component = modules[url]
                    console.log(url, modules[url],'@@@@@@@@');
                } else{
                    routerSet(route.children)
                }
                
            });

        }
        routerSet(payload)
        state.routerList = payload
        //拿到完整的路由数据
    }  
}

export default {
    state,
    mutations   //es6的一个简写
}