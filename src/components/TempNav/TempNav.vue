<template>
  <div class="fotile_tempNav">
    <router-link to="/Cart">购物车</router-link>
    <router-link to="/OrderConfirm">订单确认</router-link>
    <router-link to="/OrderSubmit">订单提交结果</router-link>
    <router-link to="/PayResult">订单支付结果</router-link>
    <router-link to="/UserCenter/OrderList">订单列表</router-link>
    <router-link to="/UserCenter/OrderDetail">订单详情</router-link>
    <router-link to="/UserCenter/Collection">收藏</router-link>
    <router-link to="/UserCenter/UserInfo">个人信息</router-link>
    <router-link to="/UserCenter/UserIntegral">个人积分</router-link>
    <router-link to="/UserCenter/RedPackets">红包</router-link>
    <router-link to="/UserCenter/Address">地址</router-link>
    <router-link to="/UserCenter/Security">安全</router-link>
    <router-link to="/UserCenter/Receipt">发票</router-link>
  </div>
</template>

<script>
export default {
  components:{

  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
