import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/Cart',
      component: (resolve) => {
        require(['../pages/Cart/Cart.vue'], resolve);
      },
      meta: {
        breadcrumbs: [{
            name: "首页",
            link: "//www.fotile.com"
          },
          {
            name: "购物车",
          }
        ]
      }
    },
    {
      path: '/OrderConfirm',
      component: (resolve) => {
        require(['../pages/OrderConfirm/OrderConfirm.vue'], resolve);
      },
      meta: {
        breadcrumbs: [{
            name: "首页",
            link: "//www.fotile.com"
          },
          {
            name: "购物车",
            link: '#/Cart'
          },
          {
            name: "订单确认",
          }
        ]
      }
    },
    {
      path: '/OrderSubmit',
      component: (resolve) => {
        require(['../pages/OrderSubmit/OrderSubmit.vue'], resolve);
      },
      meta: {
        breadcrumbs: [{
            name: "首页",
            link: "//www.fotile.com"
          },
          {
            name: "支付结果",
          }
        ]
      }
    },
    {
      path: '/PayResult',
      component: (resolve) => {
        require(['../pages/PayResult/PayResult.vue'], resolve);
      },
      meta: {
        breadcrumbs: [{
            name: "首页",
            link: "//www.fotile.com"
          },
          {
            name: "购物车",
          }
        ]
      }
    },
    {
      path: '/UserCenter',
      component: (resolve) => {
        require(['../pages/UserCenter/UserCenter.vue'], resolve);
      },
      children: [{
          path: 'UserInfo',
          component: (resolve) => {
            require(['../pages/UserInfo/UserInfo.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
              }
            ]
          }
        },
        {
          path: 'UserIntegral',
          component: (resolve) => {
            require(['../pages/UserIntegral/UserIntegral.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "我的积分",
              }
            ]
          }
        },
        {
          path: 'RedPackets',
          component: (resolve) => {
            require(['../pages/RedPackets/RedPackets.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "我的红包",
              }
            ]
          }
        },
        {
          path: 'Address',
          component: (resolve) => {
            require(['../pages/Address/Address.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "我的收货地址",
              }
            ]
          }
        },
        {
          path: 'Security',
          component: (resolve) => {
            require(['../pages/Security/Security.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "安全中心",
              }
            ]
          }
        },
        {
          path: 'Receipt',
          component: (resolve) => {
            require(['../pages/Receipt/Receipt.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "发票信息",
              }
            ]
          }
        },
        {
          path: 'Collection',
          component: (resolve) => {
            require(['../pages/Collection/Collection.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "收藏",
              }
            ]
          }
        },
        {
          path: 'OrderList',
          component: (resolve) => {
            require(['../pages/OrderList/OrderList.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "订单",
              }
            ]
          }
        },
        {
          path: 'OrderDetail',
          component: (resolve) => {
            require(['../pages/OrderDetail/OrderDetail.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "订单",
                link:"#/UserCenter/OrderList"
              },
              {
                name: "订单详情",
              }
            ]
          }
        },
        {
          path: 'MyProducts',
          component: (resolve) => {
            require(['../pages/MyProducts/MyProducts.vue'], resolve);
          },
          meta: {
            breadcrumbs: [{
                name: "首页",
                link: "//www.fotile.com"
              },
              {
                name: "会员中心",
                link:"#/UserCenter/UserInfo"
              },
              {
                name: "我的产品",
              }
            ]
          }
        }
      ]
    },
    // {
    //   path: '*',
    //   redirect: () => {
    //     location.href = '//www.fotile.com';
    //   }
    // }
  ]
});
