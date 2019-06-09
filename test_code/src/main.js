import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueScrollactive from 'vue-scrollactive';

import App from './App'
import {store} from './store';
import {router} from './routes';

import './scss/main.scss'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VueScrollactive);


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
