<template>
  <div class="fotile_security">
    <TitleWithNTALKER title="安全中心"></TitleWithNTALKER>
    <div class="security">
      <div class="security_ball">
        <div class="text-title">安全级别</div>
        <div class="text-grade">安全</div>
      </div>
      <p class="tips">建议您启动全部安全设置，以保障账户及资金安全</p>
    </div>
    <div class="security_items">
      <div class="item password">
        <div class="left-text">
          <div class="inline black">
            <i class="iconfont icon-duigou" style="color:#69c361;"></i>
            登录密码
          </div>
          <div class="inline gray">
            互联网账户存在被盗风险，建议您定期更改密码以保护账户安全
          </div>
        </div>
        <div class="right-actions">
          <a href="javascript:void(0)" class="button">修改密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  components:{
    TitleWithNTALKER
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
