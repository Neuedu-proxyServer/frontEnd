<template>
  <div class="wrap">
    <a-table
      :columns="columns"
      :data-source="data"
      :row-selection="rowSelection"
      :expanded-row-keys.sync="expandedRowKeys"
    />
    <div class="payDiv">
      <span class="price">总价格：￥{{allPrice}}</span>
      <button class="pay">去支付</button>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Num',
    dataIndex: 'num',
    key: 'num',
    width: '12%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: '30%',
    key: 'price',
  },
];


export default {

  name: "ShopCart",
  data() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.allPrice = 0
        //  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        selectedRows.forEach((element) => {
          this.allPrice += parseInt(element.price)
        })
      },
      onSelect: (record, selected, selectedRows) => {
        // console.log(record, selected, selectedRows);

      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        // console.log(selected, selectedRows, changeRows);
      },
    };
    return {
      data: [],
      columns,
      rowSelection,
      expandedRowKeys: [],
      allPrice: 0
    }
  },
  computed: {
    // allPrice() {
    //   console.log("sssss", this.expandedRowKeys)
    //   return this.expandedRowKeys
    // }
  },
  created() {
    let sessionKeys = Object.keys(sessionStorage)
    console.log(sessionKeys)
    for (var i = 0; i < sessionKeys.length; i++) {
      //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
      let res = JSON.parse(sessionStorage.getItem(sessionKeys[i]))
      console.log(res)
      let temp = {
        key: i,
        name: res.info.goods_name,
        num: res.num,
        price: res.num * res.info.goods_price
      }
      this.data.push(temp)
    }
  }
}
</script>

<style lang="less" scoped>
.payDiv {
  margin-top: 30px;
  line-height: 40px;
}
.price {
  float: left;
  font-size: 30px;
}
.pay {
  float: right;
  margin-right: 20px;
  font-size: 20px;
  color: #a5a5ec;
  background-color: pink;
}
</style>