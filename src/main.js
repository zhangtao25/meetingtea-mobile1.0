import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// console.log(process.env.NODE_ENV==='development')

if (process.env.NODE_ENV==='development'){
  Vue.prototype.backendInterfaceAddress = 'http://localhost:3030'
}else {
  Vue.prototype.backendInterfaceAddress = 'http://101.132.46.146:3030'
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
