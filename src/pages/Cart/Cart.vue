<template>
<div class="fotile_cart page-container">
  <TitleWithNTALKER title="购物车内的产品"></TitleWithNTALKER>
  <div class="list-wrapper" v-loading="cartListLoading">
    <ul class="cartList">
      <li class="cartItem" v-for="good in cartList">
        <ul class="goodList">
          <li class="goodItem">
            <img :src="good.Cover" class="goodImg" width="270">
            <div class="right-wrapper">
              <div class="top-wrapper">
                <div class="nameAndDesc">
                  <div class="name">{{good.Title}}</div>
                  <!-- <div class="desc">水槽+洗碗机+果蔬净化机跨界三合一神器</div> -->
                </div>
                <div class="unit-price">{{good.Price.toFixed(2)}}</div>
                <div class="cartControl">
                  <el-input-number :min="1" v-model="good.Num" size="small"></el-input-number>
                </div>
                <div class="totalPrice">{{(good.Num*good.PayAmount).toFixed(2)}}</div>
              </div>
              <div class="bottom-wrapper">
                <div class="line">
                  <div class="goodNo">编号：MXYH001</div>
                  <div class="del">
                    <a href="javascript:void(0)" class="canDel">删除</a>
                  </div>
                </div>
                <div class="checkbox-wrapper">
                  <el-checkbox v-model="checked">
                    <div class="checkItem">
                      <img class="img" src="../../assets/hz_placeholder.png" width="98">
                      <div class="text-right">
                        <p class="red">上门设计，全程无尘改造，改水电改橱柜</p>
                        <p class="black">选择换装服务后，工作人员会联系您进行上门设计</p>
                      </div>
                    </div>
                  </el-checkbox>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="cart-count">
    <p>总计<span class="red">{{totalCount}}</span>件商品</p>
    <p>您可以获得以下赠品</p>
    <p>积分：<span class="red">+13380分</span></p>
    <p style="font-size:24px;">总计&nbsp;&nbsp;¥&nbsp;&nbsp;{{totalPrice.toFixed(2)}}&nbsp;&nbsp;元</p>
  </div>
  <div class="actions">
    <a href="javascript:void(0)" class="btn default">返回继续购物</a>
    <a href="javascript:void(0)" class="btn red">结算</a>
  </div>
  <FotileQuestions></FotileQuestions>
</div>
</template>

<script>
import {
  url,
  appid,
  appsecret
} from '../../assets/config.js';
import FotileQuestions from '../../components/FotileQuestions/FotileQuestions.vue';
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
import $ from 'jquery';
export default {
  data() {
    return {
      cartListLoading:true,// 购物车列表加载中
      cartList:[], // 购物车列表
      tempVal: 1,
      checked: false
    }
  },
  computed: {
    totalPrice:function() { // 计算总价
      var totalPrice = 0;
      this.cartList.forEach((item) => {
        totalPrice += item.Num*item.PayAmount;
      });
      return totalPrice;
    },
    totalCount:function (){ // 计算总件数
      var totalCount = 0;
      this.cartList.forEach((item) => {
        totalCount += item.Num;
      });
      return totalCount;
    },
    token: function() {
      return this.$store.state.token;
    }
  },
  methods: {
    getCartList() {
      $.ajax({
        url:`${url}/api/cart/getcarts?token=${this.token}`,
        type:'get',
        data:{
          appid: appid,
          appsecret:appsecret,
          provinceid:0,
          cityid:0,
          regionid:0
        },
        success:(res) => {
          this.cartListLoading = false;
          this.cartList = res.Data.CartProduct;
        },
        error:(error) => {
          console.log(error);
        }
      });
    },
  },
  components: {
    FotileQuestions,
    TitleWithNTALKER
  },
  mounted() {
    this.getCartList();
  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
