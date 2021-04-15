<template>
  <div class="search" :style="{width}">
    <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" />
  </div>
</template>

<script>
export default {
  props:['width'],
  // 搜索功能
};
</script>

<style>
</style>