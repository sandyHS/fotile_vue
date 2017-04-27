<template>
<div class="fotile_collection">
  <TitleWithNTALKER title="我的收藏"></TitleWithNTALKER>
  <ul class="collectionList" v-loading="loadingCollection">
    <li class="item" v-for="collection in collectionList">
      <a href="javascript:void(0)">
        <i class="iconfont icon-shoucang shoucang" @click="removeCollection(collection.ID)"></i>
        <img :src="collection.Cover" class="goodImg">
        <div class="text-wrapper">
          <p class="goodName">{{collection.Title}}</p>
          <!-- <p class="goodDesc">产品描述+产品描述+产品描述+产品描述</p> -->
          <p class="price">{{collection.Price.toFixed(2)}}</p>
        </div>
      </a>
    </li>
  </ul>
  <el-dialog title="提示" v-model="confirmShow" size="tiny">
    <span>此操作不可逆</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="confirmShow=false">取 消</el-button>
    <el-button type="primary" @click="realDel()">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
import {
  url,
  appid,
  appsecret
} from '../../assets/config.js';
import axios from 'axios';
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  data() {
    return {
      confirmShow: false, // 对话框展示状态
      loadingCollection: true, // 加载中
      collectionList: [], //收藏商品列表
      currentID: -1, // 想要删除的id在点击时改变
    }
  },
  computed: {
    token: function() {
      return this.$store.state.token;
    }
  },
  methods: {
    removeCollection(ID) { // 点击移除收藏
      this.confirmShow = true;
      this.currentID = ID;
    },
    realDel() { // 实际删除
      console.log(this.currentID);
      this.confirmShow = false;
      axios.post(`${url}/api/user/RemoveFavorite`, {
          id: this.currentID,
          token:this.token
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
    },
    getMyCollection() { // 获取收藏列表
      axios.get(`${url}/api/user/getfavorites?token=${this.token}`, {
          params: {
            appid: appid,
            appsecret: appsecret,
          }
        })
        .then((response) => {
          this.loadingCollection = false;
          this.collectionList = response.data.Data;
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  },
  mounted() {
    this.getMyCollection();
  },
  components: {
    TitleWithNTALKER
  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
