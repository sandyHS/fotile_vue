import Vue from 'vue';
import App from './App';
import router from './router';

import { Input,Cascader,Checkbox } from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Input);
Vue.use(Cascader);
Vue.use(Checkbox);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
