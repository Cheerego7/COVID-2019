<template>
  <div class="dataInfo">
    <div class="alrteData">
      <div class="infoText">疫情数据：
        <div class="labelInfo">
          <span class="label labelDiagnosed">确诊</span>{{ confirmedNum }}
          <span class="label labelDeath">死亡</span>{{ deadNum }}
          <span class="label labelCure">治愈</span>{{ curedNum }}
        </div>
      </div>
    </div>
    <hr style="border:0;background-color:rgb(229,229,229);height:1px;">
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  data () {
    return {
      confirmedNum: '',
      deadNum: '',
      curedNum: ''
    }
  },
  props: {
    list: Array
  },
  watch: {
    list: function (newValue, oldValue) {
      this.getListData(newValue)
    }
  },
  methods: {
    getListData (newValue) {
      const listData = newValue.map((item) => {
        return {
          confirmedCount: item.province_confirmedCount,
          deadCount: item.province_deadCount,
          curedCount: item.province_curedCount
        }
      })
      const dataList = listData.pop()
      this.confirmedNum = dataList.confirmedCount
      this.deadNum = dataList.deadCount
      this.curedNum = dataList.curedCount
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/styles/varibles.styl'
  .dataInfo
    height: 4.25rem
    width: 90rem
    margin: 1.25rem auto
    background-color: $detailBgColor
    .infoText
      text-align: center
      .labelInfo
        padding: .9375rem
        font-size: 90%
        .label
          display: inline
          margin-left: 1.875rem
          padding: 0 .125rem
          line-height: 1
          border-radius: .25em
        .labelDiagnosed
          background-color: $labelDiagnosedColor
        .labelDeath
          background-color: $labelDeathColor
        .labelSuspected
          background-color: $labelSuspectedColor
        .labelCure
          background-color: $labelCureColor
</style>