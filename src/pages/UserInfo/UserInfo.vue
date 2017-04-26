<template>
  <div class="userinfo">
    <TitleWithNTALKER title="个人资料"></TitleWithNTALKER>
    <form class="form">
      <div class="line-wrapper">
        <el-input placeholder="手机号码" style="width:260px;margin-right:10px;"></el-input>
      </div>
      <div class="line-wrapper">
        <el-input placeholder="昵称" style="width:260px;margin-right:10px;"></el-input>
        <span style="font-size:12px;color:#b8b8b8;">昵称仅用于显示，不能用于账户登录。</span>
      </div>
      <div class="line-wrapper">
        <el-input placeholder="真实姓名" style="width:260px;margin-right:10px;"></el-input>
      </div>
      <div class="line-wrapper">
        <el-input placeholder="邮箱地址" style="width:260px;margin-right:10px;"></el-input>
      </div>
      <div class="line-wrapper">
        <el-date-picker v-model="birth" placeholder="生日" style="width:260px;margin-right:10px;"></el-date-picker>
      </div>
      <a href="javascript:void(0)" class="btnSave">保存设置</a>
    </form>
  </div>
</template>

<script>
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  data() {
    return {
      birth:""
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
