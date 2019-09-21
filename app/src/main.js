// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*引入初始化文件reset.css*/
import 'css/reset.css'

/*fastclcik.js解决移动端click300ms延迟*/
import Fastclick from 'fastclick'
Fastclick.attach(document.body);

/*引入iconfont.css文件*/
import 'css/iconfont.css'
Vue.config.productionTip = false

/*引入swiper*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
/*引入swiper.css文件*/
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


/*引入axios*/
import axios from 'axios'
Vue.prototype.$axios=axios

//vuex
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
