import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Cart',
      component: (resolve) => {
        require(['../pages/Cart/Cart.vue'], resolve);
      }
    },
    { path: '*', redirect: () => {
      location.href = '//www.fotile.com';
    } }
  ]
});
