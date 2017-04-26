<template>
  <div class="fotile_redpackets">
    <TitleWithNTALKER title="可领取的红包"></TitleWithNTALKER>
    <ul class="redpacketsList">
    	<li class="item">
        <div class="redpackinfo">
          <div class="redpack">
            <span class="currency">￥</span>
            <span class="num">300</span>
          </div>
        </div>
        <div>
          <h3>方太商城<span>300</span>元电子红包</h3>
          <p>截止日期： 2018-01-01 00:00:00</p>
          <p>使用条件:   购买方太商城满7000可使用(秒杀、特惠商品及配件除外)仅限普通会员</p>
          <input type="button" value="立即领取">
        </div>    
      </li>
    	

    </ul>
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
