<template>
<div class="fotile_userintegral">
  <TitleWithNTALKER title="我的积分"></TitleWithNTALKER>
  <div class="listwrap">
    <div class="currentIntegral">
      <span>当前积分</span>
      <span class="num">3000</span>
    </div>
    <div class="integralList" v-loading="integralLoading">
      <ul>
        <li class="title">
          <span>获取日期</span>
          <span>来源</span>
          <span>获取积分</span>
        </li>
        <li v-for="item of integralList">
          <span>{{item.Date}}</span>
          <span style="text-align:left;line-height:1.4;">{{item.Instruction}}</span>
          <span class="red">+{{item.Integral}}</span>
        </li>
      </ul>
    </div>
    <div class="pagination-wrapper">
      <el-pagination @current-change="handleCurrentChange" :current-page="pageNum" small layout="prev, pager, next" :page-size="20" :total="total"></el-pagination>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import router from '../../router/index.js';
import {
  url,
  appid,
  appsecret
} from '../../assets/config.js';
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  data() {
    return {
      integralLoading:true,
      integralList:[], // 积分信息
      pageNum:parseInt(this.$route.params.page),// 当前页码
      total:null // 总页码数页
    }
  },
  watch:{
    '$route':function(val) {
      this.pageNum = parseInt(this.$route.params.page);
      this.getIntegralListByPage();
    }
  },
  computed:{
    token:function() {
      return this.$store.state.token;
    }
  },
  methods:{
    handleCurrentChange(val) {
      router.push(`/UserCenter/UserIntegral/${val}`);
    },
    getIntegralListByPage() { // 根据页码加载数据
      this.integralLoading = true;
      $.ajax({
        url:`${url}/api/user/getintegrals?token=${this.token}`,
        type:'get',
        data:{
          Page:this.$route.params.page,
          appid:appid,
          appsecret:appsecret
        },
        success:(res) => {
          this.integralList = res.Data.Data;
          this.total = res.Data.RowCount;
        },
        error:(error) => {
          console.log(res);
        },
        complete:() => {
          this.integralLoading = false;
        }
      });
    }
  },
  mounted() {
    this.getIntegralListByPage();
  },
  components: {
    TitleWithNTALKER
  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
