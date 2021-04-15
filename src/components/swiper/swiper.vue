<template>
  <div class="swiper">
    <a-carousel arrows v-model="dotPosition" :autoplay="autoplay" :docs="dots">
      <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
      <div class="swiper-view" v-for="(item, index) in imgs" :key="index">
        <img alt="" :src="item" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: function () {
        return [];
      },
    },
    afterChange: {
      type: Function,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    beforeChange: {
      type: Function,
    },
    dotPosition: {
      type: String,
      default: "bottom",
      // 自定义验证函数。验证数据是否是  left ..
      validator: function (value) {
        let arr = ["left", "top", "bottom", "right"];
        if (arr.indexOf(value) === -1) {
          throw new Error(
            "dotPosition of props must be left or right or botton or top"
          );
        }
        return true; // return true 使用 value  否者 default
      },
    },
    dots: {
      type: Boolean,
      default: true,
    },
    // dotsClass,
    // easing,
    // effect,
  },
};
</script>

<style scoped>
/* 动态数组轮播样式 */

/* 
问题：
1： 动态数组婂图大小、
2： 轮播图响应式
 */
 /* !import 没用，用 >>> */
 /* >>> 强制修改组件组件库中的样式  要求 style scoped */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* 弊端：不能动态设置 宽度和高度 */
  /* height: 100%;
  line-height: 100%; */
  line-height: 500px;
  height: 500px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

/* .ant-carousel >>> .slick-slide img {
   width: 100%;
} */
.swiper-view{
  width: 100%;
  height: 100%;
}
.swiper-view img{
  width: 100%;
  height: 100%;
}
</style>