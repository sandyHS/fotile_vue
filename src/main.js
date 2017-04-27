import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index.js';

import {Loading,Input,Cascader,Checkbox,DatePicker,Pagination,InputNumber,Radio,Select,Option,Autocomplete } from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Loading);
Vue.use(Input);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Pagination);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Option);
Vue.use(Autocomplete);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
