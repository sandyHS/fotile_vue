<template>
  <div id="app">
    <div class="FotileNav_wrapper">
      <FotileNav></FotileNav>
    </div>
    <router-view class="main-view"></router-view>
    <div class="FotileFooter_wrapper">
      <FotileFooter></FotileFooter>
    </div>
  </div>
</template>

<script>
import FotileNav from './components/FotileNav/FotileNav.vue';
import FotileFooter from './components/FotileFooter/FotileFooter.vue';
export default {
  components:{
    FotileNav,FotileFooter
  }
}
</script>

<style lang="less">
  @import './assets/reset.css';
  @import './assets/global.less';
</style>
