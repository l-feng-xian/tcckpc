import Vue from 'vue'
import App from './App.vue'
// px2rem 自适应
// import 'lib-flexible/flexible.js'
// import './plugins/rem.js'
import './plugins/rempc.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
