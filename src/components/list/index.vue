<template>
  <div class="product-list-item" @click="triggerClick({id:product.Id,type_one:product.type_one})">
    <!-- v-lazy=“图片地址” -->
    <!-- <img v-lazy="product.img_list_url" alt class='img'/> -->
    <img :src="product.img_list_url" alt="" class="img">
    <h3>{{product.title}}</h3>
    <div class="des">
      <span class="price">￥{{product.price}}</span>
      <div class="intro" v-html="product.mack">       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'product',
  props:['product'],
  // props:{
  //   poduct:{
  //     type:Object,
  //     default:{}
  //   }
  // },
  methods:{
    triggerClick(data){
      this.$emit('click',data)
    }
  }
}
</script>

<style scoped>

 .product-list-item{
    width:20%;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    padding:0.1rem;
    margin:0.2rem 0;
    cursor: pointer;
    float: left;
    margin: 10px 2.5%;
}
.product-list-item::after{
  content: "";
  display: inline-block;
  clear: both;
  visibility: hidden;
}
 .product-list-item img{
    width:100%;
}
 .product-list-item h3{
    font-size: 0.16rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
 .product-list-item .des{
    font-size: 0.16rem;
    display:flex;
    justify-content:space-between;
    color:red;
    margin: 0.1rem 0;
}
</style>