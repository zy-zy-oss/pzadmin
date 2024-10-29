import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import PanelHead from './components/panelHead.vue'
const localData = localStorage.getItem('pz_sys')

if(localData){
  store.commit('dynamicMenu',JSON.parse(localData).menu.routerList)
  store.replaceState.menu.routerList.forEach(item => {
    router.addRoute('main',item)
  })
}
router.beforeEach((to,from) => {
  const token = localStorage.getItem('pz_token')
  //非登录页面token不存在
  if(!token && to.path!=='/login'){
    return '/login'
  }else if(token&&to.path ==='/login')
  {
    return '/'
  } else return true
})
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('PanelHead',PanelHead)
app.use(router)
app.use(store)
app.mount('#app')