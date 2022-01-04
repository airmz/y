<!--
 * @Author: airmz
 * @Date: 2021-10-07 11:42:25
 * @LastEditTime: 2021-10-26 20:39:51
 * @FilePath: \yeb\src\App.vue
-->
<template>
  <div id="app">
    <!-- <router-link to='/'>login</router-link> -->
    <router-view />
  </div>
</template>
<script>
  export default {
    data() {
      return {
    
      }
    },
  }
</script>
<style>
#app,html,body,.el-container{
  padding: 0;
  margin: 0;
  height: 100vh;
}
</style>