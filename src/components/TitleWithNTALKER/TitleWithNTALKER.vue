<template>
<div class="fotile_titleWithNTALKER">
  <h3 class="title">{{title}}</h3>
  <a href="javascript:void(0)" class="btn" @click="NTALKER">
    <i class="iconfont icon-htmal5icon31"></i> 在线客服
  </a>
</div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    title: {
      type: String,
      default: "没有传标题"
    }
  },
  methods: {
    NTALKER() {
      NTKF.im_openInPageChat('kf_9729_1422865742088');
    }
  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
