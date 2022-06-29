<template>
  <header>
    <el-row type="flex" class="row-bg">
      <el-col :span="7" class="fl">
        <!-- <div class="grid-content bg-purple"></div> -->
        <ul>
          <li>
            <a class="yun">华科云</a>
          </li>
          <li>
            <a href="#">总览</a>&nbsp;
            <a class="style_red">&nbsp;云产品</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="8" class="fm">
        <!-- <div class="grid-content bg-purple-light"></div> -->
        <!-- <a-input-search placeholder="input search text"  enter-button @search="onSearch" /> -->
        <a-input-search
          placeholder="搜索文档、产品..."
          :loading="searchInput.loading"
          :enterButton="false"
          @search="onSearch"
        ></a-input-search>
      </el-col>
      <el-col :span="6" class="fr">
        <!-- <div class="grid-content bg-purple"></div> -->
        <ul>
          <li>
            <!-- 换成图标 -->
            <a href>站内信</a>
          </li>
          <li>
            <a href class="arrow-icon">工具</a>
          </li>
          <li>
            <a href>费用</a>
          </li>
        </ul>
      </el-col>
      <!-- 判断用户是否登入，登入时有token -->
      <el-col :span="3" class="photo" v-if="$store.state.user.token">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="userImg" alt />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col v-else :span="3">
        <button></button>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      searchInput: {
        text: '正在搜索',
        loading: false,
        enterButton: false,
        waitFlag: false
      },
      userImg: require("@/assets/images/photoSmall.png")
    }
  },
  mounted() {
    //this.$store.dispatch('getUserInfo')
  },
  methods: {
    onSearch(value, event) {
      this.searchInput.loading = true
      //console.log(value, event)
      setTimeout(() => this.searchInput.loading = false, 2000)
    },
    async logout() {
      try {
        //退出成功回到首页
        this.$store.dispatch('USERLOGOUT')
        this.$router.push('/home')
      } catch (error) {

      }

    }

  }
}
</script>

<style lang="less" scoped>
.row-bg {
  height: 60px;
  background-color: #052b5e;
  color: #fff;
}
header {
  height: 100%;
  background-color: #f1f1f1;
  font-size: 18px;
  text-align: left;
  ul {
    height: 60px;
    overflow: hidden;
  }
  ul li {
    float: left;
    height: 60px;
    margin: 0;
    padding: 0 14px;
    line-height: 56px;
    border-right: 1.5px solid #666666;
    a {
      color: #f1f1f1;
    }
    .yun {
      font-size: 30px;
    }
  }
  .fl {
    ul li {
      border: none;
    }
  }
  .fm {
    text-align: right;
  }
  .fr {
    ul {
      margin-left: 120px;
      width: 250px;
    }
    ul li:nth-child(3) {
      border: none;
    }
  }
  .photo {
    padding-right: 8px;
    text-align: right;
    background-color: #052b5e;
    line-height: 60px;
    span {
      display: block;
      height: 60px;
    }
    .el-dropdown {
      vertical-align: middle;
    }
    .el-dropdown-link {
      img {
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }
}
</style>