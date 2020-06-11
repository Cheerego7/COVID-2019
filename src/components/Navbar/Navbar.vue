<template>
  <div class="nav-container">
    <div class="nav-title">
      <span class="iconfont">&#xe779;</span>
      2019nCoV
    </div>
    <router-link to="/">
      <div class="nav-left">
        <span class="iconfont">&#xec3f;</span>
        全国情况
      </div>
    </router-link>
    <router-link to="/city">
      <div class="nav-left">
        <span class="iconfont">&#xec66;</span>
        疫情趋势
      </div>
    </router-link>
    <router-link to='/world'>
      <div class="nav-left">
        <span class="iconfont">&#xeb96;</span>
        国外疫情信息
      </div>
    </router-link>
    <div class="nav-right">声明</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>
  @import '~@/common/styles/varibles.styl'
  .nav-container
    display: flex
    width: 100%
    height: 3.4375rem
    background: $navBgColor
    .nav-title
      padding: 1.25rem
      margin-right: auto
    .nav-left
      padding: 1.25rem
      color: #000
    .nav-right
      padding: 1.25rem
      margin-left: auto
    .router-link-active
      text-decoration: none
</style>
