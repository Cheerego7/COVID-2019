<template>
  <div class="container">
    <word-map></word-map>
    <china-map></china-map>
    <!-- <world-map></world-map> -->
  </div>
</template>

<script>
import ChinaMap from './components/ChinaMap'
import WordMap from './components/WordMap'
// import WorldMap from './components/WorldMap'
export default {
  name: 'Home',
  components: {
    ChinaMap,
    WordMap
    // WorldMap
  }
}
</script>

<style lang="stylus">
@import '~@/common/styles/varibles.styl'
  body
    margin: 0
    padding: 0
    background-color: $homeBgColor
</style>
