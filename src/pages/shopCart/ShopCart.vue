<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :row-selection="rowSelection"
    :expanded-row-keys.sync="expandedRowKeys"
  />
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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export default {
  name: "ShopCart",
  data() {
    return {
      data: [],
      columns,
      rowSelection,
      expandedRowKeys: [],
    }
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
        price: num * res.info.goods_price
      }
      this.data.push(temp)
    }
  }
}
</script>

<style lang="less" scoped>
</style>