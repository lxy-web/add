import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AtComponents from 'at-ui'
import 'at-ui-style'    // 引入组件样式
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import VCharts from 'v-charts'
import axios from 'axios'

Vue.use(VCharts)
Vue.use(VueBlu)
Vue.use(AtComponents)
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL="http://127.0.0.1:7001";
Vue.prototype.http=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
