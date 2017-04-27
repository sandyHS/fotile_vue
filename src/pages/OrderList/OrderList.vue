<template>
  <div class="fotile_OrderList">
  	<TitleWithNTALKER title="订单"></TitleWithNTALKER>
  	<div class="orderWrap">
  		<div class="orderTop">
  			<div>
  				<span class="num">1/</span>
  			</div>
  			<div>
  				<p class="orderTime">订单日期：2017年3月20日</p>
  				<p class="orderNum">编号：MX1TTY</p>
  			</div>
  		</div>

  		<div class="orderContainer">
  			<div class="orderInfo">
  				<div class="orderInfo-left">
  					<div class="productShow">
  						<div class="productImg">
                <a href="javascript:;">
                  <img src="./product1.png">
                </a>  
              </div>
              <div class="productName">
                <a href="javascript:;">
                  方太水槽洗碗机  JBSD3T-Q6  （不带超声波） 水槽＋洗碗机＋果蔬净化机跨界三合一神器
                </a>
              </div>
  					</div>
            <div class="productShow">
              <div class="productImg">
                <a href="javascript:;">
                  <img src="./product2.png">
                </a>  
              </div>
              <div class="productName">
                <a href="javascript:;">
                  科勒(KOHLER)科勒齐悦单把面盆龙头K-16027T-4-CP
                </a>
              </div>
            </div>
            <div class="productShow">
              <div class="productImg">
                <a href="javascript:;">
                  <img src="./replace.png">
                </a>  
              </div>
              <div class="productName">
                <p>
                  您已选择换装服务，工作人员会先联系您进上门设计
                </p>
              </div>
            </div>	
  				</div>
  				<div class="orderInfo-right">
  					<span>￥ 6888.00</span>
  				</div>
  			</div>
  			<div class="userInfo">
          <p>
            <span>收货人：龚思佳</span>
            <span>地址：上海 黄浦区 黄陂南路657号403室 </span> 
            <!-- <span>已付款</span> -->
          </p>
          <p>送达日期：2017年4月1日</p>  
        </div>
  			<div class="btn-service">
          <div class="btn-left"><a href="javascript:;">预约服务</a></div>
          <div class="btn-right">
            <a href="javascript:;">显示订单详情</a>
            <a href="javascript:;">取消订单</a>
            <a href="javascript:;" class="pay">立即支付</a>
          </div>
          
        </div>		
  		</div>
  	</div>
		

    
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
