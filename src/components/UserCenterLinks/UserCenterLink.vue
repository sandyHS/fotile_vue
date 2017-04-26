<template>
  <div class="fotile_usercenterlinks">
    <ul class="links">
      <li class="border-1px">
        <router-link class="link" to="/Cart">
          <i class="iconfont icon-shopcar"></i>
          购物车
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/OrderList">
          <i class="iconfont icon-dingdan"></i>
          订单
          <span style="float:right;">(3)</span>
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/Collection">
          <i class="iconfont icon-qianbao"></i>
          收藏
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/UserInfo">
          <i class="iconfont icon-shezhi"></i>
          个人资料
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/MyProducts">
          <i class="iconfont icon-youyanji"></i>
          我的产品
          <span style="float:right;">(7)</span>
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/UserIntegral">
          <i class="iconfont icon-jifen3"></i>
          我的积分
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/RedPackets">
          <i class="iconfont icon-hongbao"></i>
          我的红包
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/Address">
          <i class="iconfont icon-songhuo"></i>
          我的收货地址
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/Security">
          <i class="iconfont icon-suo"></i>
          安全中心
        </router-link>
      </li>
      <li class="border-1px">
        <router-link class="link" to="/UserCenter/Receipt">
          <i class="iconfont icon-fapiao"></i>
          发票信息
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
