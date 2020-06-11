<template>
  <div>
    <div ref="mapCN" class="container">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import '../../../common/js/map/china'
import jsonp from 'jsonp'

const option = {
  title: {
    text: '全国疫情数据',
    subtext: '2019-nCoV'
  },
  series: [{
    name: '总确诊人数',
    type: 'map',
    map: 'china',
    label: {
      show: true,
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
    zoom: 1.25, // 地图大小
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
      { min: 10000 },
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
  name: 'ChinaMap',
  mounted() {
    this.getData()
    // echarts 初始化渲染
    this.mychart = echarts.init(this.$refs.mapCN, '', { width: '1500px', height: '500px' })
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
          const list = data.data.list.map(item => ({ name: item.name, value: item.value }))
          option.series[0].data = list
          this.mychart.setOption(option)
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .container
    height: 31.25rem
    width: 93.75rem
</style>