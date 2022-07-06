<template>
  <div class="wrap">
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <div slot="footer">
        <b>ant design vue</b> footer part
      </div>
      <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
        <!-- <template v-for="{ type, text } in actions" slot="actions">
          <span :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>-->
        <img slot="extra" width="232" alt="logo" :src="item.goods_small_logo" />
        <a-list-item-meta :description="`￥ ${item.goods_price}`" class="goods-price">
          <a slot="title" @click="toDetail(item.goods_id)">{{ item.goods_name}}</a>
          <!-- <a-avatar slot="avatar" :src="item.avatar" /> -->
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import requests from '@/api/axios.js';
export default {
  name: "GoodsList",
  data() {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      // actions: [
      //   { type: 'star-o', text: '156' },
      //   { type: 'like-o', text: '156' },
      //   { type: 'message', text: '2' },
      // ],
    };
  },
  methods: {
    toDetail(goods_id) {
      this.$router.push({ name: 'goods_detail', params: { goods_id } })
    }
  },
  created() {
    let query = this.$route.query.query
    requests({
      url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/search?query=${query}`,
      method: 'get'
    }).then((res) => {
      let data = res.data
      this.listData = data.message.goods
      console.log(data)
    }, (err) => {
      alert(err)
    })

  }
}

</script>

<style scoped>
/* .goods-price {
  color: red;
  font-size: 40px !important;
} */
.wrap {
  padding: 50px;
}
.ant-list .ant-list-item-main {
  text-align: left !important;
  font-size: 30px !important;
}
.ant-list-vertical .ant-list-item-meta {
  margin-bottom: 100px;
}
.ant-list-item-meta-description {
  font-size: 40px;
  color: red;
  text-align: left;
}
</style>