/*
 * @Author: airmz
 * @Date: 2021-10-07 11:42:25
 * @LastEditTime: 2021-12-06 21:39:32
 * @FilePath: \yeb\src\main.js
 */
/*
 * @Author: airmz
 * @Date: 2021-10-07 11:42:25
 * @LastEditTime: 2021-10-09 15:52:26
 * @FilePath: /yeb/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'


// import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
// axios.defaults.baseURL = ''
import {
  postRequest
} from "./utils/api.js";
import {
  putRequest
} from './utils/api.js'
import {
  getRequest
} from './utils/api.js'
import {
  deleteRequest
} from './utils/api.js'
import {
  downloadRequest
} from './utils/download'
import {
  initMenu
} from './utils/menus'
// 插件
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.downloadRequest = downloadRequest;

router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem('tokenStr')) {
    initMenu(router, store);
    if (!window.sessionStorage.getItem('user')) {
      return getRequest('/admin/info')
        .then(resp => {
          if (resp) {
            window.sessionStorage.setItem('user', JSON.stringify(resp))
          }
          // next();
        })
    }
    next();
  } else {
    if (to.path == '/') {
      next()
    } else {
      next('/?redirect=' + to.path)
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')