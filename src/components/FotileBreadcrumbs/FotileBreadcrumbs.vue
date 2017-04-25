<template>
  <div class="fotile_breadcrumbs page-container">
    <a :href="item.link" :class="['link',{'current':index === breadcrumbs.length-1}]" v-for="(item,index) of breadcrumbs">{{item.name}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs:[]
    }
  },
  watch:{
    '$route':function() {
      this.breadcrumbs = this.$route.meta.breadcrumbs;
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
