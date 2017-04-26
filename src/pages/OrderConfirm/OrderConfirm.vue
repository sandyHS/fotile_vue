<template>
  <div class="fotile_orderconfirm page-container">
    订单确认
    <FotileQuestions></FotileQuestions>
  </div>
</template>

<script>
import FotileQuestions from '../../components/FotileQuestions/FotileQuestions.vue';

export default {
  components:{
    FotileQuestions
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
