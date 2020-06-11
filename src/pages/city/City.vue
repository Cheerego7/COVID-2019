<template>
  <div>
    <city-search
    @city="handleClickSelect"
    :list="cityInfoList"
    >
    </city-search>
    <detail-info :list="cityInfoList"></detail-info>
    <city-detail :list="cityInfoList"></city-detail>
    <city-info :list="cityInfoList"></city-info>
  </div>
</template>

<script>
import axios from 'axios'
import DetailInfo from '../../components/detailinfo/DetailInfo'
import CitySearch from './components/CitySearch'
import CityDetail from './components/CityDetail'
import CityInfo from './components/CityInfo'
export default {
  name: 'City',
  components: {
    DetailInfo,
    CitySearch,
    CityDetail,
    CityInfo
  },
  data () {
    return {
      cityInfoList: []
    }
  },
  methods: {
    // getCityInfo () {
    //   axios.get('/api/common/city')
    //     .then(this.handleGetCityInfoSucc)
    // },
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