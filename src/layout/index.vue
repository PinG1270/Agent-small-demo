<template>
  <div class="nav">
    <div class="top">
      <div class="logo">
        <img src="./img/logo.png" alt="" />
      </div>
      <!-- 作为基础组件 -->
      <!-- <div class="search">
        <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" />
      </div> -->
      <y-search :width="'250px'" class="y-search" />
    </div>
    <nav>
      <ul v-if="!login.token">
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/login">登录</router-link>
        <router-link tag="li" to="/register">注册</router-link>
        <!--
           router-link vue-router 4 将上面tag 变为下面的写法 
           不能自动添加高亮路由
        -->
        <!-- <router-link custom v-slot="{ navigate }" to="/register">
          <li @click="navigate" @keypress.enter="navigate" role="link">注册</li>
        </router-link> -->
      </ul>
      <ul v-else>
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/shopCar">购物车</router-link>
        <router-link tag="li" to="/logout">退出登录</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['login'])
  }
}
</script>

<style>
.nav {
  width: 100%;
  /* height: 150px; */
}
.nav > .top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 200px 20px 0px;
}
.top > .y-search {
  position: relative;
  top: 30px;
}

.nav > nav {
  width: 100%;
  padding-left: 50px;
  margin-top: 30px;
  background: #fff;
  height: 45px;
  line-height: 35px;
  box-shadow: 5px 5px 5px #ccc;
}
.nav > nav li {
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
}
.y-link-active {
  color: rgba(135, 12, 236, 0.856);
  border-bottom: 3px solid rgba(135, 12, 236, 0.856);
  font-weight: 900;
}
</style>
