<template>
  <div class="fotile_cart page-container">
    <TitleWithNTALKER title="购物车内的产品"></TitleWithNTALKER>
    <div class="list-wrapper">
      <ul class="cartList">
        <li class="cartItem">
          <ul class="goodList">
            <li class="goodItem">
              <img src="//img001.efotile.com/201741312547875.JPG" class="goodImg" width="270">
              <div class="right-wrapper">
                <div class="top-wrapper">
                  <div class="nameAndDesc">
                    <div class="name">方太水槽洗碗机 JBSD3T-Q6 (不带超声波)</div>
                    <div class="desc">水槽+洗碗机+果蔬净化机跨界三合一神器</div>
                  </div>
                  <div class="unit-price">6888.00</div>
                  <div class="cartControl">
                    <el-input-number :min="1" v-model="tempVal" size="small"></el-input-number>
                  </div>
                  <div class="totalPrice">6888.00</div>
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
            <li class="goodItem">
              <img src="//img001.efotile.com/201741312547875.JPG" class="goodImg" width="270">
              <div class="right-wrapper">
                <div class="top-wrapper">
                  <div class="nameAndDesc">
                    <div class="name">可乐水龙头</div>
                  </div>
                  <div class="unit-price"></div>
                  <div class="cartControl"></div>
                  <div class="totalPrice">0.00</div>
                </div>
                <div class="bottom-wrapper">
                  <div class="line">
                    <div class="goodNo">编号：MXYH001</div>
                    <div class="del">
                      <span class="cantDel">此产品为附赠商品无法删除</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li class="cartItem">
          <ul class="goodList">
            <li class="goodItem">
              <img src="//img001.efotile.com/201741312547875.JPG" class="goodImg" width="270">
              <div class="right-wrapper">
                <div class="top-wrapper">
                  <div class="nameAndDesc">
                    <div class="name">方太水槽洗碗机 JBSD3T-Q6 (不带超声波)</div>
                    <div class="desc">水槽+洗碗机+果蔬净化机跨界三合一神器</div>
                  </div>
                  <div class="unit-price">6888.00</div>
                  <div class="cartControl">
                    <el-input-number :min="1" v-model="tempVal" size="small"></el-input-number>
                  </div>
                  <div class="totalPrice">6888.00</div>
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
            <li class="goodItem">
              <img src="//img001.efotile.com/201741312547875.JPG" class="goodImg" width="270">
              <div class="right-wrapper">
                <div class="top-wrapper">
                  <div class="nameAndDesc">
                    <div class="name">可乐水龙头</div>
                  </div>
                  <div class="unit-price"></div>
                  <div class="cartControl"></div>
                  <div class="totalPrice">0.00</div>
                </div>
                <div class="bottom-wrapper">
                  <div class="line">
                    <div class="goodNo">编号：MXYH001</div>
                    <div class="del">
                      <span class="cantDel">此产品为附赠商品无法删除</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="cart-count">
      <p>总计<span class="red">2</span>件商品</p>
      <p>您可以获得以下赠品</p>
      <p>积分：<span class="red">+13380分</span></p>
      <p style="font-size:24px;">总计&nbsp;&nbsp;¥&nbsp;&nbsp;6888.00&nbsp;&nbsp;元</p>
    </div>
    <div class="actions">
      <a href="javascript:void(0)" class="btn default">返回继续购物</a>
      <a href="javascript:void(0)" class="btn red">结算</a>
    </div>
    <FotileQuestions></FotileQuestions>
  </div>
</template>

<script>
import FotileQuestions from '../../components/FotileQuestions/FotileQuestions.vue';
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  data() {
    return {
      tempVal:1
    }
  },
  components:{
    FotileQuestions,TitleWithNTALKER
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
