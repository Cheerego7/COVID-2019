<template>
  <div>
    <div ref="mapbox" class="container">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import '../../../common/js/map/world.json'
import jsonp from 'jsonp'

const option = {
  title: {
    text: '世界疫情数据',
    subtext: '2019-nCoV'
  },
  series: [{
    name: '总确诊人数',
    type: 'map',
    map: 'world',
    label: {
      show: false,
      color: '#333',
      fontSize: 10
    },
    emphasis: {
      // 控制鼠标滑过的颜色样式
      label: {
        color: '#fff',
        fontSize: 12
      }
    },
    zoom: 1.0, // 地图大小
    roam: true,
    data: [] // 展示后台给的数据，数据以对象的形式传入
  //   dataset: {
  //     dimensions: ['name', 'value', 'cure', 'death'],
  //     source: []
  // }
  }],
  visualMap: [{
    type: 'piecewise',
    show: true,
    pieces: [
      // 分段
      { min: 1000000, max: 9999999 },
      { min: 100000, max: 999999 },
      { min: 10000, max: 99999 },
      { min: 1000, max: 9999 },
      { min: 100, max: 999 },
      { min: 10, max: 99 },
      { min: 1, max: 99 }
    ],
    inRage: {
      symbol: 'rect',
      color: ['#ffc0b1', '#9c0505']
    }
  }],
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  }
}

export default {
  name: 'WorldMap',
  mounted() {
    this.getData()
    // echarts 初始化渲染
    this.mychart = echarts.init(this.$refs.mapbox)
    this.mychart.setOption(option)
  },
  methods: {
    getData () {
      const url = 'https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427'
      // jsonp('请求的地址',传给后台的参数可以省略,callback)
      jsonp(url, {}, (err, data) => {
        if (!err) {
          // 请求数据成功
          // console.log(data)
          const list = data.data.worldlist.map(item => ({ name: item.name, value: item.value }))
          option.series[0].data = list
          console.log(list)
          this.mychart.setOption(option)
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .container
    height: 30rem
    width: 93.75rem
</style>