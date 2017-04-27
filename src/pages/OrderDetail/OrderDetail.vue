<template>
  <div class="fotile_orderDetail">
    <TitleWithNTALKER title="订单"></TitleWithNTALKER>
    <div class="orderDetail">
    	<div class="orderDetail-top">
    		<div class="orderLeft">
    			<p class="setMargin">
    				<span>订单编号:</span>
    				<span>1052292</span>
    			</p>
    			<p>
    				<span>订单状态:</span>
    				<span>受理中</span>
    			</p>
    			<p>
    				<span>订单总额:</span>
    				<span>6888.00元</span>
    			</p>
    		</div>
    		<div class="orderRight">
    			<a href="javascript:;">
    				返回订单列表
    			</a>
    		</div>	
    	</div>
    	<div class="orderDetail-info">
    		<div class="goodsReceipt item">
    			<h2>收货信息</h2>
    			<p>
    				<span>下单时间:</span>
    				<span>2017/4/24  15:07:04</span>
    			</p>
    			<p>
    				<span>收货人：</span>
    				<span>龚思佳</span>
    			</p>
    			<p>
    				<span>收货地址：</span>
    				<span>上海黄浦区黄陂南路657号403室</span>
    			</p>
    			<p>
    				<span>电话号码：</span>
    				<span>12345678888</span>
    			</p>
    			<p>
    				<span>邮箱：</span>
    				<span></span>
    			</p>
    			<div class="text-area-input">
    				<p>备注:</p>
    				<p></p>
    			</div>
    		</div>
    		<div class="logistics item">
    			<h2>物流信息</h2>
    		</div>
    		<div class="invoice item">
    			<h2>发票信息</h2>
    			<p>
    				<span>发票类型:</span>
    				<span>普通发票</span>
    			</p>
    			<p>
    				<span>发票抬头:</span>
    				<span>个人</span>
    			</p>
    			<p>
    				<span>发票名称:</span>
    				<span>个人</span>
    			</p>
    		</div>    		
    	</div>
    	<div class="orderDetail-product">
    		<div class="productList">
                <div class="productShow">
                    <div class="productImg">
                        <a href="javascript:;">
                            <img src="./product1.png">
                        </a>  
                    </div>
                </div>
                <div class="productName">
                    <a href="javascript:;">
                      方太水槽洗碗机  JBSD3T-Q6  （不带超声波） 水槽＋洗碗机＋果蔬净化机跨界三合一神器
                    </a>
                </div>    
            </div>	
    	</div>
    	<div class="orderDetail-money">
			<div>
				<p>
					<span>商品总金额：</span>
					<span>6888.00元</span>
				</p>
				<p>
					<span>折扣优惠：</span>
					<span>-0.00元</span>
				</p>
				<p>
					<span>积分抵扣：</span>
					<span>0.00元</span>
				</p>
			</div>
			<div class="totalMoney">
				<p>
					<span>订单总额：</span>
					<span class="red">6888.00元</span>
				</p>
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
