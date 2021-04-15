<template>
  <div class="error">
    <div class="img">
      <img src="./404图.gif" alt="" />
    </div>
    <div>
      <button @click="onClick">返回上一页</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$router.back();
    },
  },
  
};
</script>
<style>
.error img {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.error button {
  position: absolute;
  right: 18%;
  top: 30%;
  border: none;
  width: 200px;
  height: 55px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  background: #f9b62d;
  outline: #f9b62d;
  z-index: 999;
}
</style>