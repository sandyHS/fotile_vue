<template>
<div class="fotile_questions">
  <h6 class="comp_name">问题</h6>
  <div class="fotile_tab">
    <div class="label">
      <div :class="['tab_label',{'active':activeTab===1}]" @click="toggleTab(1)">交付选项</div>
      <div :class="['tab_label',{'active':activeTab===2}]" @click="toggleTab(2)">送货地址</div>
      <div :class="['tab_label',{'active':activeTab===3}]" @click="toggleTab(3)">付款</div>
    </div>
    <div class="content">
      <div :class="['tab_content',{'active':activeTab===1}]">
        <div class="grid">
          <h3 class="question">我何时能收到订购的商品？</h3>
          <p class="answer">送达日期是将您的产品送达您的收货地址的预计时间。这考虑到了仓库处理时间（即“发货”时间）和承运商的送达时间。</p>
          <p class="answer">我们会在结账流程中提供有关发货选项和送达日期的更多信息。了解有关<a href="javascript:void(0)">发货与交货</a>的更多信息。</p>
        </div>
        <div class="grid">
          <h3 class="question">我可以使用哪些付款方式？</h3>
          <p class="answer">所有运送选项均有多种付款方式供您选择，包括信用卡和借记卡。</p>
          <p class="answer">如需了解更多信息，请直接拨打400-315-315咨询方太业务代表。</p>
          <p class="answer">了解有关付款方式的更多信息。</p>
        </div>
        <div class="grid">
          <h3 class="question">方太的退货和退款政策是如何规定的？</h3>
          <p class="answer">如果您对所购产品不满意，可以按照相关规定办理退货。了解有关退货和退款的更对信息。</p>
        </div>
      </div>
      <div :class="['tab_content',{'active':activeTab===2}]">
        内容2
      </div>
      <div :class="['tab_content',{'active':activeTab===3}]">
        内容3
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeTab:1
    }
  },
  methods:{
    toggleTab(n) {
      this.activeTab = n;
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
