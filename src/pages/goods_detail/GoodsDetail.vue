<template>
  <div class="wrap">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="商品数量"></el-input-number>
    <el-button @click="toAddCartSuccess">加入购物车</el-button>
    <div v-html="richText" class="wrap-lazyimg"></div>
  </div>
</template>

<script>
import { reqAddOrUpdateCart, reqGoodsDetail } from '@/api/index.js';
export default {
  name: "GoodsDetail",
  data() {
    return {
      richText: '',
      num: 1,
      skuInfo: {}
    }
  },
  methods: {

    goBack() {
      history.go(-1)
      console.log('go back');
    },
    async toAddCartSuccess() {
      // await reqAddOrUpdateCart(this.num, this.$route.params.goods_id)
      try {
        // await this.$store.dispatch('addOrUpdateCart', {
        //   skuId: this.$router.params.goods_id,
        //   skuNum: this.num
        // })
        sessionStorage.setItem(`SKUINFO${this.$route.params.goods_id}`, JSON.stringify({ info: this.skuInfo, num: this.num }));
        this.$router.push({
          name: "addCartSuccess",
          query: {
            skuId: this.$route.params.goods_id,
            skuNum: this.num
          }
        })
      } catch (error) {
        alert("加入购物车失败")
      }
    },

    handleChange(value) {
      console.log(value);
    }
  },
  async created() {
    let goods_id = this.$route.params.goods_id
    try {
      let res = await reqGoodsDetail(goods_id)
      let data = res.data
      this.skuInfo = data.message
      //console.log(this.skuInfo)
      this.richText = data.message.goods_introduce
    } catch (error) {
      alert(error)
    }
  }
}
</script>

<style lang="less" scoped>
.wrap-lazyimg {
  padding: 50px;
}
</style>