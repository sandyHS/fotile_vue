<template>
  <div class="fotile_orderconfirm page-container">
    <div class="confirm_wrapper">
      <ul class="list">
        <li class="item editing">
          <div class="title">1/送货选项</div>
          <div class="content">
            <ul class="goodList">
              <li class="goodItem">
                <img class="img" src="//img001.efotile.com/201741312547875.JPG" width="270">
                <div class="text">
                  <p class="nameDesc">方太水槽洗碗机 JBSD3T-Q6 （不带超声波）水槽+洗完机+果蔬净化机跨界三合一神器</p>
                  <a href="javascript:void(0)" class="goodLink">查看产品详情</a>
                </div>
                <div class="price">¥ 6888.00</div>
              </li>
              <li class="goodItem">
                <img class="img" src="//img001.efotile.com/201741312547875.JPG" width="270">
                <div class="text">
                  <p class="nameDesc">方太水槽洗碗机 JBSD3T-Q6 （不带超声波）水槽+洗完机+果蔬净化机跨界三合一神器</p>
                  <a href="javascript:void(0)" class="goodLink">查看产品详情</a>
                </div>
                <div class="price">¥ 6888.00</div>
              </li>
            </ul>
            <div class="content-bottom">
              <div>
                <a href="javacript:void(0)" class="btn default">返回购物车</a>
                <a href="javacript:void(0)" class="btn default">在线咨询</a>
              </div>
              <div>
                <a href="javascript:void(0)" style="font-size:12px;text-decoration:underline;display:inline-block;margin-right:12px;">查看预约服务条款</a>
                <a href="javascript:void(0)" class="btn red">继续</a>
              </div>
            </div>
          </div>
        </li>
        <li class="item editing">
          <div class="title">2/送货地址</div>
          <div class="content">
            <div class="addressAndRules">
              <div class="address">
                <h6>送货地址</h6>
                <div class="topInput-wrapper">
                  <div class="input-wrapper">
                    <el-input placeholder="姓氏" style="width:250px;margin-right:10px;"></el-input>
                    <el-input placeholder="名字" style="width:170px;"></el-input>
                  </div>
                  <div class="input-wrapper">
                    <el-input placeholder="区号" style="width:90px;margin-right:10px;"></el-input>
                    <el-input placeholder="联系号码" style="width:330px;"></el-input>
                  </div>
                </div>
                <div class="radio-wrapper">
                  <el-radio class="radio" v-model="addressType" label="1">选择已有收货地址</el-radio>
                  <el-radio class="radio" v-model="addressType" label="2">添加新的收货地址</el-radio>
                </div>
                <div class="select-wrapper" v-if="addressType==='1'">
                  选择已有地址
                </div>
                <div class="addInput-wrapper" v-if="addressType==='2'">
                  填写新地址
                </div>
              </div>
              <div class="rules">
                <h6>送货政策 | <a href="javascript:void(0)">了解更多</a></h6>
                <ul>
                  <li>签收时需要签名。</li>
                  <li>如果您所在的城市不再下拉菜单中的城市范围内。我们目前无法送货。请<a href="javascript:void(0)">点击这里</a>查看您附近的方太授权经销商。</li>
                  <li>送活时间按照送货至市中心地区进行估算。送货至边远地区可能需要更长时间。</li>
                  <li>对于军事禁区，保税监管区或其他任何政府监管区域，（我们）将无法提供运送服务。</li>
                  <li>送货时间：星期一至星期日 上午 8:30 至下午 5:30 （公众假期暂停交货）</li>
                  <li>请<a href="javascript:void(0)">点击这里</a>查看“快速送货”的区域及付款时间详情。</li>
                </ul>
              </div>
            </div>
            <div class="content-bottom">
              <div>
                <a href="javacript:void(0)" class="btn default" style="display:inline-block;margin-right:12px;">在线咨询</a>
                <el-checkbox>保存为默认收货地址</el-checkbox>
              </div>
              <div>
                <a href="javascript:void(0)" class="btn red">继续</a>
              </div>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="title">3/付款方式</div>
        </li>
        <li class="item">
          <div class="title">4/发票</div>
        </li>
        <li class="item">
          <div class="title">5/送货优惠信息</div>
        </li>
      </ul>
    </div>
    <div class="cart-count">
      <p><span class="fixWidth">商品总金额：</span>¥ 6888.00</p>
      <p><span class="fixWidth">红包优惠：</span>¥ -0.00</p>
      <p><span class="fixWidth">积分抵扣：</span>¥ -0.00</p>
      <p style="font-size:24px;">实际支付金额：¥&nbsp;&nbsp;&nbsp;&nbsp;<span class="red">6888.00</span>&nbsp;&nbsp;元</p>
    </div>
    <FotileQuestions></FotileQuestions>
  </div>
</template>

<script>
import FotileQuestions from '../../components/FotileQuestions/FotileQuestions.vue';

export default {
  data() {
    return {
      addressType:"1"
    }
  },
  components:{
    FotileQuestions
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
