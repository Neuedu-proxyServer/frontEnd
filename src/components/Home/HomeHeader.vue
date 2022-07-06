<template>
  <header>
    <el-row type="flex" class="row-bg">
      <el-col :span="7" class="fl">
        <!-- <div class="grid-content bg-purple"></div> -->
        <ul>
          <li>
            <a class="yun">Mbao</a>
          </li>
          <li>
            <a href="#"></a>&nbsp;
            <a class="style_red">&nbsp;</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="8" class="fm">
        <!-- <div class="grid-content bg-purple-light"></div> -->
        <!-- <a-input-search placeholder="input search text"  enter-button @search="onSearch" /> -->
        <!-- <a-input-search
          placeholder="搜索文档、产品..."
          :loading="searchInput.loading"
          :enterButton="false"
          @search="onSearch"
        ></a-input-search>-->
        <el-autocomplete
          v-model="state"
          :debounce="1000"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        >
          <template slot-scope="{ item }">
            <div class="name">{{ item.goods_name }}</div>
            <!-- <span class="addr">{{ item.goods_id }}</span> -->
          </template>
        </el-autocomplete>
      </el-col>
      <el-col :span="6" class="fr">
        <!-- <div class="grid-content bg-purple"></div> -->
        <ul>
          <li>
            <!-- 换成图标 -->
            <a href></a>
          </li>
          <li>
            <a href class="arrow-icon"></a>
          </li>
          <li>
            <a href></a>
          </li>
        </ul>
      </el-col>
      <!-- 判断用户是否登入，登入时有token -->
      <el-col :span="3" class="photo" v-if="!$store.state.user.token">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="userImg" alt />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <button @click="toShopCart">我的购物车</button>
            </el-dropdown-item>
            <el-dropdown-item>
              <button @click="logout">退出</button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col v-else :span="3">
        <button class="login" @click="toLogin">登录</button>
        <button class="register" @click="toRegister">注册</button>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "HomeHeader",
  data() {
    return {
      state: '',
      timeout: null,
      // searchInput: {
      //   text: '正在搜索',
      //   loading: false,
      //   enterButton: false,
      //   waitFlag: false
      // },
      userImg: require("@/assets/images/photoSmall.png")
    }
  },
  mounted() {

  },
  computed: {
    ...mapGetters(['goodsArr'])
  },
  methods: {
    // onSearch(value, event) {
    //   this.searchInput.loading = true
    //   //console.log(value, event)
    //   setTimeout(() => this.searchInput.loading = false, 2000)
    // },

    toLogin() {
      this.$router.push('/login')
    },
    toRegister() {
      this.$router.push('/register')
    },
    toShopCart() {
      this.$router.push({ name: "shopCart" })
    },
    logout() {
      try {
        //退出成功回到首页
        this.$store.dispatch('userLogout')
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }

    },
    async querySearchAsync(query, cb) {
      try {
        if (this.state)
          await this.$store.dispatch('getSearchInfo', query)
        // console.log(query)
        cb(this.goodsArr)
      } catch (error) {
        console.log(error)
      }

    },
    handleSelect(item) {
      try {
        console.log(item);
        //await this.$store.dispatch('toDetail', item.goods_id)
        this.$router.push({ name: 'goods_detail', params: { goods_id: item.goods_id } })
      } catch (error) {
        alert(error)
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
    // border-right: 1.5px solid #666666;
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
  .login {
    background-color: #052b5e;
    margin-right: 20px;
  }
  .register {
    background-color: #052b5e;
  }
}
</style>