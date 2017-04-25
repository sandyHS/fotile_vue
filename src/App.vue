<template>
  <div id="app">
    <TempNav></TempNav>
    <div class="FotileNav_wrapper">
      <FotileNav></FotileNav>
    </div>
    <router-view class="main-view"></router-view>
    <div class="FotileFooter_wrapper">
      <FotileGuarantee></FotileGuarantee>
      <FotileBreadcrumbs></FotileBreadcrumbs>
      <FotileFooter></FotileFooter>
    </div>
  </div>
</template>

<script>
import FotileNav from './components/FotileNav/FotileNav.vue';
import FotileGuarantee from './components/FotileGuarantee/FotileGuarantee.vue';
import FotileBreadcrumbs from './components/FotileBreadcrumbs/FotileBreadcrumbs.vue';
import FotileFooter from './components/FotileFooter/FotileFooter.vue';
import TempNav from './components/TempNav/TempNav.vue';
export default {
  components:{
    FotileNav,FotileFooter,FotileGuarantee,FotileBreadcrumbs,TempNav
  }
}
</script>

<style lang="less">
  @import './assets/reset.css';
  @import './assets/global.less';
</style>
