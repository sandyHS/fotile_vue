<template>
  <div class="fotile_address">
    <TitleWithNTALKER title="我的收货地址"></TitleWithNTALKER>
    <div class="btnAndForm">
      <a v-if="!editing" href="javascript:void(0);" class="addBtn" @click="toEdit">+&nbsp;&nbsp;添加新的收货地址</a>
      <form class="form" v-if="editing">
        <i class="iconfont icon-cha close" @click="closeEdit"></i>
      </form>
    </div>
    <table class="ft_table">
      <thead class="thead">
        <tr class="tr">
          <td class="td">姓名</td>
          <td class="td">电话</td>
          <td class="td">收货地址</td>
          <td class="td">邮编</td>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr class="tr">
          <td class="td">王思聪</td>
          <td class="td">18616154465</td>
          <td class="td">七宝万科</td>
          <td class="td">201108</td>
        </tr>
        <tr class="tr">
          <td class="td">王健林</td>
          <td class="td">18616154465</td>
          <td class="td">七宝万科</td>
          <td class="td">201108</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  data() {
    return {
      editing:true
    }
  },
  methods:{
    toEdit() {
      this.editing = true;
    },
    closeEdit() {
      this.editing = false;
    }
  },
  components:{
    TitleWithNTALKER
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
