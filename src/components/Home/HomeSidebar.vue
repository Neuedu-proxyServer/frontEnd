<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#1e2223"
    text-color="#fff"
    router
  >
    <el-menu-item index="1" :route="{
      name:'index',
      params:{}
    }">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">实名认证</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">info</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          index="3-1"
          :route="{
          //path: '/home/infoShow',
          name:'infoShow',
          params:{}
        }"
        >infoShow</el-menu-item>
        <el-menu-item
          index="3-2"
          :route="{
           path: '/home/infoModify',
           params:{}
        }"
        >infoModify</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!-- <el-menu-item index="3" :route="{
          path:'/login',
          params:{}
        }">
      <i class="el-icon-setting"></i>
      <span slot="title">登入</span>
    </el-menu-item>
    <el-menu-item index="5" :route="{
          path:'/register',
          params:{}
        }">
      <i class="el-icon-setting"></i>
      <span slot="title">注册</span>
    </el-menu-item>-->
    <el-menu-item index="4" :route="{
           name: 'projectManage',
           params:{}}">
      <i class="el-icon-document"></i>
      <span slot="title">项目管理</span>
    </el-menu-item>
    <!-- <button class="fold-btn">
      <i :class="iconClass"></i>
    </button>-->
    <el-button circle type="info" :icon="icon" @click="changeCollapse"></el-button>
  </el-menu>
</template>

<script>
export default {
  name: "HomeSidebar",

  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    icon() {
      return this.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold"
    }
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};

</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  width: 200px;
  min-height: 400px;
  /* background-color: rbg(30, 34, 45); */
}
.el-menu {
  position: relative;
}
ul {
  height: 100%;
}
.el-button {
  position: absolute;
  bottom: 10%;
  left: 21%;
}
</style>