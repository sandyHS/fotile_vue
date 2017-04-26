<template>
  <div class="fotile_userintegral">
    <TitleWithNTALKER title="我的积分"></TitleWithNTALKER>
    <div class="listwrap">
    	<div class="currentIntegral">
    		<span>当前积分</span>
    		<span class="num">3000</span>
    	</div>
		<div class="integralList">
			<ul>
				<li class="title">
					<span>获取日期</span>
					<span>来源</span>
					<span>+4000</span>
				</li>
				<li>
					<span>2017-01-04 01:44:12</span>
					<span>双11抽奖赠送1000积分</span>
					<span>+4000</span>
				</li>
				<li>
					<span>2017-01-04 01:44:12</span>
					<span>双11抽奖赠送1000积分</span>
					<span>+4000</span>
				</li>
			</ul>
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
