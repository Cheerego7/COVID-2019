<template>
  <div>
    <world-search
    @city="handleClickSelect"
    :list="cityInfoList"
    >
    </world-search>
    <detail-info :list="cityInfoList"></detail-info>
    <world-detail :list="cityInfoList"></world-detail>
    <world-info :list="cityInfoList"></world-info>
  </div>
</template>

<script>
import axios from 'axios'
import DetailInfo from '../../components/detailinfo/DetailInfo'
import WorldSearch from './components/WorldSearch'
import WorldDetail from './components/WorldDetail'
import WorldInfo from './components/WorldInfo'
export default {
  name: 'World',
  components: {
    DetailInfo,
    WorldSearch,
    WorldDetail,
    WorldInfo
  },
  data () {
    return {
      cityInfoList: []
    }
  },
  methods: {
    postCityInfo (value) {
      const data = { provinceName: value }
      axios.post('/api/common/city', data)
        .then(this.handlePostCityInfoSucc)
      // console.log(data)
    },
    handlePostCityInfoSucc (res) {
      // console.log(res.data)
      if (res.data) {
        this.cityInfoList = res.data
      }
    },
    handleClickSelect (value) {
      this.postCityInfo(value)
    }
  },
  mounted () {
    this.postCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>