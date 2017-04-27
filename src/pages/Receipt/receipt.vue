<template>
  <div class="fotile_address">
    <TitleWithNTALKER title="发票信息"></TitleWithNTALKER>
    <form class="form">
      <div class="line">
        <div class="title">
          选择发票抬头：
        </div>
        <div class="right">
          <el-radio class="radio" v-model="Rtitle" label="1">个人</el-radio>
          <el-radio class="radio" v-model="Rtitle" label="2">单位</el-radio>
        </div>
      </div>
      <div class="line">
        <div class="title">
          选择发票类型：
        </div>
        <div class="right">
          <el-radio class="radio" v-model="Rtype" label="1">普通发票</el-radio>

        </div>
      </div>
      <div class="line">
        <div class="title">
          输入抬头：
        </div>
        <div class="right">
          <el-input style="width:200px;"></el-input>
        </div>
      </div>
      <a href="javascript:void(0)" class="save">保存发票</a>
    </form>
    <table class="ft_table">
      <thead class="thead">
        <tr class="tr">
          <td class="td">发票抬头</td>
          <td class="td">发票类型</td>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr class="tr">
          <td class="td">上海牛邦网络科技</td>
          <td class="td">单位</td>
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
      Rtitle:"1",
      Rtype:"1"
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
