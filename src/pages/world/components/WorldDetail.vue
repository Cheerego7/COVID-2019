<template>
  <div ref="mapbox" class="container">
  </div>
</template>

<script>
import echarts from 'echarts'

const option = {
  backgroundColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
    offset: 0,
    color: '#c86589'
  },
  {
    offset: 1,
    color: '#06a7ff'
  }
  ], false),
  title: {
    text: '总确诊人数',
    left: 'center',
    bottom: '5%',
    textStyle: {
      color: '#fff',
      fontsize: 16
    }
  },
  grid: {
    top: '10%',
    left: '6%',
    right: '6%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // data: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    axisLabel: {
      margin: 30,
      color: '#fffffff63'
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: true,
      length: 25,
      lineStyle: {
        color: '#ffffff1f'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ffffff1f'
      }
    }
  },
  yAxis: [{
    type: 'value',
    position: 'right',
    axisLabel: {
      margin: 20,
      color: '#ffffff63'
    },
    axisTick: {
      show: true,
      length: 15,
      lineStyle: {
        color: '#ffffff1f'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ffffff1f'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#fff',
        width: 2
      }
    }
  }],
  dataZoom: [{
    // dataZoom组件默认控制x轴，可以控制缩放平移操作。
    type: 'inside',
    start: 0,
    end: 30
  },
  {
    type: 'slider',
    start: 0,
    end: 30
  }],
  dataset: {
    dimensions: ['dateTime', 'confirmedCount'],
    source: []
  },
  series: [{
    name: '确诊总数',
    type: 'line',
    smooth: true, // 是否平滑曲线显示
    showAllSymbol: 'auto',
    symbol: 'circle',
    symbolSize: 6,
    lineStyle: {
      normal: {
        color: '#fff' // 线条颜色
      }
    },
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: '#fff'
      }
    },
    itemStyle: {
      color: 'red',
      borderColor: '#fff',
      borderWidth: 3
    },
    // visualMap: [{
    //   type: 'continuous'
    // }],
    tooltip: {
      show: true,
      trigger: 'axis',
      showContent: true
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#eb64fb'
        },
        {
          offset: 1,
          color: '#3fbbff0d'
        }
        ], false)
      }
    }
    // data: [156, 515, 656, 700]
  }]
}

export default {
  name: 'WorldDetail',
  props: {
    list: {
      type: Array
    }
  },
  watch: {
    list: function (newValue, oldValue) {
      console.warn('list change', newValue)
      this.getListData(newValue)
    }
  },
  methods: {
    getListData (newValue) {
      const listData = newValue.map((item) => {
        return {
          confirmedCount: item.province_confirmedCount,
          dateTime: item.updateTime
        }
      })
      option.dataset.source = listData
      this.mychart.setOption(option)
      // console.log(listData.pop())
    }
  },
  mounted () {
    this.mychart = echarts.init(this.$refs.mapbox)
    this.mychart.setOption(option)
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height: 20rem
    width: 90rem
    margin: 1.25rem auto
</style>