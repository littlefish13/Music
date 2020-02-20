import Vue from 'vue'
import App from './App'
import './registerServiceWorker'
import router from './router'
import store from './store'
//引入swiper插件

import 'swiper/dist/css/swiper.css'
// 引入swiper样式
import VueAwesomeSwiper from 'vue-awesome-swiper'


import axios from 'axios'
Vue.prototype.axios = axios

//引入接口地址配置文件
import apis from './common/js/api'
Vue.prototype.api = apis


Vue.use(VueAwesomeSwiper, )
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')