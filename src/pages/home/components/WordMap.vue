<template>
  <div>
    <div ref="mapWord" class="container">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import '../../../common/js/map/worldcloud'

const JosnList = [
  { name: '战疫英雄', value: '888' },
  { name: '疫情拐点', value: '444' },
  { name: '经济复苏', value: '458' },
  { name: '华人互助', value: '445' },
  { name: '中美疫苗制备竞赛', value: '456' },
  { name: '病毒源头', value: '647' },
  { name: '疫情抗击纪实', value: '500' },
  { name: '庚子春', value: '300' },
  { name: '宅家', value: '652' }
]

const option = {
  tooltip: {
    show: true
  },
  series: [{
    name: '疫情热词',
    type: 'wordCloud',
    sizeRange: [10, 50], // 文字范围
    // 文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
    rotationRange: [-45, 90],
    rotationStep: 45,
    textRotation: [0, 45, 90, -45],
    // 形状
    shape: 'circle',
    textStyle: {
      normal: {
        color: function () { // 文字颜色的随机色
          return 'rgb(' + [
            Math.round(Math.random() * 250),
            Math.round(Math.random() * 250),
            Math.round(Math.random() * 250)
          ].join(',') + ')'
        }
      },
      // 悬停上去的颜色设置
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: JosnList
  }]
}

export default {
  name: 'WordMap',
  mounted () {
    // echarts 初始化渲染
    this.mychart = echarts.init(this.$refs.mapWord, '', { width: '1500px', height: '180px' })
    this.mychart.setOption(option)
  }
}
</script>

<style lang="stylus">
  .container
    height: 10.25rem
    width: 93.75rem
</style>
