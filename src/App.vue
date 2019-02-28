<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  //绑定数据
  data () {
    return {}
  },
  created () {
    let token = window.localStorage.getItem('token');
    this.$store.commit('setToken', token);
  },
  watch: {}
}
</script>
<style lang="scss">
</style>
