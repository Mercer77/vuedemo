// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入组件
import Vue from 'vue'
import App from './App'
import User from './components/User'

Vue.config.productionTip = false
// 全局注册组件
Vue.component('users',User)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
