<template>
  <div class="home">
    <y-swiper :imgs="imgs" :autoplay="autoplay" />
    <!--
       列表 列表数据来源 
       1: 数据源 是服务器相应 ====> action 发请求 ===> 存到vuex中
    -->
    <div class="list">
      <product
        v-for="product in shopList"
        :key="product.Id"
        :product="product"
      />
    </div>
  </div>
</template>


<script>
import product from "@/components/list/index.vue";
import { mapState } from "vuex";

/*
1: v-lazy
2: 返回顶部
3：加载更多
4：固定导航条

注册 登录



*/
export default {
  name: "Home",
  data() {
    return {
      imgs: [
        require("./img/a.jpg"),
        require("./img/b.jpg"),
        require("./img/c.jpg"),
         require("./img/d.jpg"),
          require("./img/e.jpg"),
      ],
      product: {},
      autoplay: true,
    };
  },
  components: {
    product,
  },
  created: async function () {
    this.getShopList();
  },
  methods: {
    getShopList() {
      let options = {
        url: "/goodList",
        data: {
          page: 1,
        },
      };
      this.$store.dispatch("home/getShopList_", options);

      // 如何在初始化时候 获取 store/shopList
    },
  },
  computed: {
    ...mapState({
      shopList: (state) => {
        // state 是 root state
        return state.home.shopList;
      },
    }),
  },
};
</script>

<style>
.home .list{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding: 10px 20px;

}
</style>