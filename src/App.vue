<template>
  <div id="app" v-loading="loading">
    <y-header></y-header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/layout'
export default {
  components: {
    YHeader: Header
  },
  created() {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    setTimeout(() => {
      loading.close()
    }, 2000)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
#app > main {
  min-width: 100%;
  min-height: 1px;
  padding: 10px 50px;
}
</style>
