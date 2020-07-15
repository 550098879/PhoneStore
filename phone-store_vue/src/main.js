import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局配置
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);//引入


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
