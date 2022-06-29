<template>
  <div>
    <!-- 这里也可以用栅格 -->
    <el-container class="home-main">
      <el-header height="20px" class="home-main-header">
        <h2>账户信息</h2>
      </el-header>
    </el-container>
    <el-row>
      <el-col :span="8">
        <!-- <div class="grid-content bg-purple"></div> -->
        <el-card :body-style="{ padding: '0px' }">
          <img :src="userImg" class="image" />
          <div style="padding-top: 14px;">
            <h2>h2好吃的汉堡</h2>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <!-- <el-button type="text" class="button">操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row>
      <el-col :span="10" class="sub-col">
        <div class="grid-content bg-purple">
          <h2>基本信息</h2>
        </div>
      </el-col>
      <el-col :span="10" class="sub-col">
        <div class="grid-content bg-purple">
          <h2>基本信息</h2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" class="sub-col">
        <div class="grid-content bg-purple">
          <h2>基本信息</h2>
        </div>
      </el-col>
      <el-col :span="10" class="sub-col">
        <div class="grid-content bg-purple">
          <h2>基本信息</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "InfoShow",
  data() {
    return {
      currentDate: new Date(),
      userImg: require('@/assets/images/photoBig.png')
    };
  },
}
</script>

<style lang="less" scoped>
.el-container {
  background-color: rgb(242, 242, 242);
  padding: 0px;
  height: 30px;
}
.el-container .el-header {
  text-align: left;
  line-height: 12px;
  margin: 0px;
  padding: 0px;
  font-size: 10px;
  background-color: #fff;
}
.el-row {
  text-align: left;
  line-height: 12px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .sub-col {
    height: 120px;
    margin-right: 20px;
    background-color: #fff;
    .bg-purple {
      background: #d3dce6;
    }
  }
}
.el-col {
  border-radius: 4px;
}
.el-card {
  width: 300px;
  height: 300px;
  background-color: #fff;
}
.img {
  display: block;
  width: 100px;
  height: 100px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>