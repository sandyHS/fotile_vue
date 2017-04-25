<template>
  <div class="fotile_usercenter page-container">
    <div class="left-menu">
      <div class="userInfo_wrapper">
        <UserInfo></UserInfo>
      </div>
      <div class="links_wrapper">
        <UserCenterLink></UserCenterLink>
      </div>
    </div>
    <div class="right-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserInfo from '../../components/UserInfo/UserInfo.vue';
import UserCenterLink from '../../components/UserCenterLinks/UserCenterLink.vue';
export default {
  components:{
    UserInfo,UserCenterLink
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
