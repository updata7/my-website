import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import Element from 'element-ui'
import i18n from './lang' // internationalization
import Cookies from 'js-cookie'
import '@/styles/index.scss'
import './styles/element-variables.scss'

Vue.config.productionTip = false
Vue.use(Avue);
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
