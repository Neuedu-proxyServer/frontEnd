<template>
  <el-container>
    <el-header>
      <home-header></home-header>
    </el-header>
    <!-- style="height=900px" -->
    <el-container>
      <el-aside width="auto">
        <HomeSidebar></HomeSidebar>
      </el-aside>
      <el-main>
        <!-- <home-main></home-main> -->
        <!-- <InfoModify></InfoModify> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from '../components/Home/HomeHeader.vue';
import HomeSidebar from '../components/Home/HomeSidebar.vue'
export default {
  name: "Home",
  components: { HomeHeader, HomeSidebar },
  data() {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style scoped>
/* el-container:nth-child(1) {
  height: 100%;
} */
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #052b5e;
  color: #fff;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
