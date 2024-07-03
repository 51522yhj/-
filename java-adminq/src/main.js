import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/assets/font/iconfont.css"
import "@/router/permission.js"
// 国际化中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App).use(store).use(router).use(ElementPlus, {
  locale: zhCn,
}).use(ElementPlusIconsVue)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
