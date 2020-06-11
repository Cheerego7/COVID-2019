<template>
  <div ref='mapbox' class='container'></div>
</template>

<script>
import echarts from 'echarts'

const option = {
  backgroundColor: new echarts.graphic.LinearGradient(
    1,
    1,
    0,
    0,
    [
      {
        offset: 0,
        color: '#c86589'
      },
      {
        offset: 1,
        color: '#06a7ff'
      }
    ],
    false
  ),
  title: {
    text: '疫情信息',
    left: 'center',
    bottom: '5%',
    textStyle: {
      color: '#fff',
      fontsize: 16
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    // data: ['确诊人数', '死亡人数', '疑似病例', '治愈人数']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    top: '10%',
    left: '6%',
    right: '6%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false
      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '确诊人数',
      type: 'line',

      areaStyle: { normal: {} },
      label: { show: true }
      // data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '死亡人数',
      type: 'line',
      // stack: '总量',
      areaStyle: { normal: {} },
      label: { show: true }
      // data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '治愈人数',
      type: 'line',
      // stack: '总量',
      areaStyle: { normal: {} },
      label: { show: true }
      // data: [320, 332, 301, 334, 390, 330, 320]
    }
  ],
  dataZoom: [
    {
      // dataZoom组件默认控制x轴，可以控制缩放平移操作。
      type: 'inside',
      start: 10,
      end: 40
    },
    {
      type: 'slider',
      start: 10,
      end: 60
    }
  ],
  dataset: {
    dimensions: ['dateTime', 'confirmedCount', 'deadCount', 'curedCount'],
    source: []
  }
}

export default {
  name: 'WorldInfo',
  props: {
    list: {
      type: Array
    }
  },
  watch: {
    list: function(newValue, oldValue) {
      console.warn('list change', newValue)
      this.getListData(newValue)
      // this.renderEcharts()
    }
  },
  methods: {
    getListData(newValue) {
      const listData = newValue.map(item => {
        return {
          dateTime: item.updateTime,
          confirmedCount: item.province_confirmedCount,
          deadCount: item.province_deadCount,
          curedCount: item.province_curedCount
        }
      })
      option.dataset.source = listData
      this.mychart.setOption(option)
      // console.log(listData.pop())
    }
  },
  mounted() {
    this.mychart = echarts.init(this.$refs.mapbox)
    this.mychart.setOption(option)
  }
}
</script>

<style lang='stylus' scoped>
.container {
  height: 20rem
  width: 90rem
  margin: 1.25rem auto
}
</style>