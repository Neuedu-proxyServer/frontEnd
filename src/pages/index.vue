<template>
  <div>
    <div class="wrap" v-for="(element,index)  in resArr" :key="index">
      <el-row>
        <el-col :span="23" :offset="1">
          <div class="head-title">{{element[0].name}}</div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7" :offset="1" class="main-col">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="element[0].image_src" class="image" />
            <div style="padding: 14px;">
              <span>{{element[0].name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click="toList(element[0])">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="7" :offset="1" v-for="(productListArr,index) in element[1]" :key="index">
          <el-card
            v-for="(productEle,index) in productListArr"
            :key="index"
            :body-style="{ padding: '0px' }"
          >
            <img :src="productEle.image_src" class="image" />
            <div style="padding: 14px;">
              <span>{{productEle.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click="toList(productEle)">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 

<script>
import requests from '../api/axios.js';
export default
  {
    name: "index",
    data() {
      return {
        floorArr: [],
        firstColArr: [],
        secondColList: [],
        thirdColList: [],
        resArr: [],
        currentDate: new Date()
      }
    },
    methods: {
      toList({ navigator_url = '' }) {
        let index = navigator_url.indexOf('?')
        let query1 = navigator_url.slice(index + 1)
        let queryArr = query1.split('=')
        let query = queryArr[1]
        // this.$router.push('/goods_list' + query)
        this.$router.push({ path: 'goods_list', query: { query } })
      }
    },
    created() {
      requests({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
        method: 'get'
      }).then((res => {
        let data = res.data
        if (data.meta.status == 200) {
          //console.log(res.data)
          this.floorArr = data.message
          let resArr = []
          this.floorArr.forEach((ele, indexOut) => {
            const product_list = ele.product_list
            //console.log(product_list)
            let tempArr1 = []
            let tempArr2 = []
            let tempArr3 = []
            let temp = []
            ele.product_list.forEach((good, index) => {

              if (index == 0)
                temp.push(good)
              else if (index % 2 == 1) {
                tempArr2.push(good)
              }
              else {
                tempArr3.push(good)
              }
            })
            tempArr1.push(tempArr2, tempArr3)
            temp.push(tempArr1)
            resArr.push(temp)
          })
          console.log(resArr)
          this.resArr = resArr
        }
        else {
          throw new Error("抓取失败")
        }
      }))
    },
    //貌似在v-for中用不了
    // filters: {
    //   sliceListArr(element) {
    //     var product_list_arr = []
    //     let tempArr1 = []
    //     let tempArr2 = []
    //     element.product_list.forEach((ele, index) => {
    //       if (index == 0) { }
    //       else if (index % 2 == 1) {
    //         tempArr1.push(ele)
    //       }
    //       else {
    //         tempArr2.push(ele)
    //       }
    //     })
    //     product_list_arr.push(tempArr1, tempArr2)
    //     console.log(product_list_arr)
    //     return product_list_arr
    //   }
    // }
  }
</script>

<style lang="less" scoped>
.wrap {
  margin-bottom: 20px;
}
.el-row {
  line-height: 18px;
  text-align: left;
}
.main-col {
  img {
    width: 100%;
  }
}
.el-card {
  img {
    width: 50%;
    display: block;
  }
}
.head-title {
  height: 50px;
  font-size: 20px;
  background-color: #fff;
  line-height: 30px;
  margin-bottom: 5px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 150px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>