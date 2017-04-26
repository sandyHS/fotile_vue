<template>
  <div class="fotile_ordersubmit page-container">
    <div class="wrapper">
      <div class="inner">
        <i class="iconfont icon-chenggong"></i>
        <h1 class="resultText">订单提交成功</h1>
        <p class="tips">您的货品发出后，我们将告知你这一信息</p>
      </div>
    </div>
    <div class="orderListWrapper">
      <ul class="orderList">
        <li class="oneOrder">
          <ul class="itemsInOne">
            <li class="item">
              <img class="itemImg" src="//img001.efotile.com/201661125352478.JPG" width="135">
              <div class="text">
                <div class="prodName">方太水槽洗碗机 JBSD3T-QS (不带超声波)</div>
                <div class="prodDesc">水槽+洗碗机+果蔬净化机跨界三合一神器</div>
              </div>
              <div class="prodNo">编号：MX1TTY</div>
              <div class="num">1</div>
              <div class="price">6888.00</div>
            </li>
            <li class="item">
              <img class="itemImg" src="//img001.efotile.com/201561211022234.JPG" width="135">
              <div class="text">
                <div class="prodName">克勒水龙头 JBSD3T-QS (不带超声波)</div>
              </div>
              <div class="num">1</div>
              <div class="price">6888.00</div>
            </li>
          </ul>
        </li>
        <li class="oneOrder">
          <ul class="itemsInOne">
            <li class="item">
              <img class="itemImg" src="//img001.efotile.com/201661125352478.JPG" width="135">
              <div class="text">
                <div class="prodName">方太水槽洗碗机 JBSD3T-QS (不带超声波)</div>
                <div class="prodDesc">水槽+洗碗机+果蔬净化机跨界三合一神器</div>
              </div>
              <div class="prodNo">编号：MX1TTY</div>
              <div class="num">1</div>
              <div class="price">6888.00</div>
            </li>
            <li class="item">
              <img class="itemImg" src="//img001.efotile.com/201561211022234.JPG" width="135">
              <div class="text">
                <div class="prodName">克勒水龙头 JBSD3T-QS (不带超声波)</div>
              </div>
              <div class="num">1</div>
              <div class="price">6888.00</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="actions">
      <div class="btnGroup">
        <a href="javascript:void(0)" class="btn default">在线咨询</a>
      </div>
      <div class="btnGroup">
        <a href="javascript:void(0)" class="btn red">立即支付</a>
        <a href="javascript:void(0)" class="btn red">订单详情</a>
      </div>
    </div>

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
