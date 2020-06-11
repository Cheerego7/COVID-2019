<template>
  <div id="app">
    <navbar></navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">
 @import '~@/common/styles/media.styl'
</style>
