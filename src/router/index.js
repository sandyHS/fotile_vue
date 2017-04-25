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
      },
      meta:{
        breadcrumbs:[
          {
            name:"首页",
            link:"//www.fotile.com"
          },
          {
            name:"购物车",
          }
        ]
      }
    },
    {
      path: '/OrderConfirm',
      component: (resolve) => {
        require(['../pages/OrderConfirm/OrderConfirm.vue'], resolve);
      },
      meta:{
        breadcrumbs:[
          {
            name:"首页",
            link:"//www.fotile.com"
          },
          {
            name:"购物车",
            link:'#/Cart'
          },
          {
            name:"订单确认",
          }
        ]
      }
    },
    {
      path: '/OrderSubmit',
      component: (resolve) => {
        require(['../pages/OrderSubmit/OrderSubmit.vue'], resolve);
      },
      meta:{
        breadcrumbs:[
          {
            name:"首页",
            link:"//www.fotile.com"
          },
          {
            name:"购物车",
          }
        ]
      }
    },
    {
      path: '/PayResult',
      component: (resolve) => {
        require(['../pages/PayResult/PayResult.vue'], resolve);
      },
      meta:{
        breadcrumbs:[
          {
            name:"首页",
            link:"//www.fotile.com"
          },
          {
            name:"购物车",
          }
        ]
      }
    },
    {
      path: '/UserCenter',
      component: (resolve) => {
        require(['../pages/UserCenter/UserCenter.vue'], resolve);
      },
      children: [
        {
          path: 'UserInfo',
          component: (resolve) => {
            require(['../pages/UserInfo/UserInfo.vue'], resolve);
          }
        },
        {
          path: 'UserIntegral',
          component: (resolve) => {
            require(['../pages/UserIntegral/UserIntegral.vue'], resolve);
          }
        },
        {
          path: 'RedPackets',
          component: (resolve) => {
            require(['../pages/RedPackets/RedPackets.vue'], resolve);
          }
        },
        {
          path: 'Address',
          component: (resolve) => {
            require(['../pages/Address/Address.vue'], resolve);
          }
        },
        {
          path: 'Security',
          component: (resolve) => {
            require(['../pages/Security/Security.vue'], resolve);
          }
        },
        {
          path: 'Receipt',
          component: (resolve) => {
            require(['../pages/Receipt/Receipt.vue'], resolve);
          }
        },
        {
          path: 'Collection',
          component: (resolve) => {
            require(['../pages/Collection/Collection.vue'], resolve);
          }
        },
        {
          path: 'OrderList',
          component: (resolve) => {
            require(['../pages/OrderList/OrderList.vue'], resolve);
          }
        },
        {
          path: 'OrderDetail',
          component: (resolve) => {
            require(['../pages/OrderDetail/OrderDetail.vue'], resolve);
          }
        }
      ]
    },
    { path: '*', redirect: () => {
      location.href = '//www.fotile.com';
    } }
  ]
});
