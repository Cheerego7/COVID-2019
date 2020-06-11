<template>
  <div>
    <div class="dataInfo">
      <div class="alrteData">
        <div class="infoText">各省疫情数据：
          <div class="search">
            <el-select class="search-input" v-model="value" @change="handleClickSelect()" filterable placeholder="请选择城市">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <hr style="border:0;background-color:rgb(229,229,229);height:1px;">
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    city: String
  },
  methods: {
    handleClickSelect: function () {
      // 向外派发事件
      this.$emit('city', this.value)
      // console.log(this.value)
    }
  },
  data() {
    return {
      options: [{
        value: '湖北省',
        label: '湖北省'
      }, {
        value: '海南省',
        label: '海南省'
      }, {
        value: '浙江省',
        label: '浙江省'
      }, {
        value: '福建省',
        label: '福建省'
      }, {
        value: '广东省',
        label: '广东省'
      },
      {
        value: '上海市',
        label: '上海市'
      },
      {
        value: '北京市',
        label: '北京市'
      },
      {
        value: '云南省',
        label: '云南省'
      },
      {
        value: '贵州省',
        label: '贵州省'
      },
      {
        value: '四川省',
        label: '四川省'
      },
      {
        value: '重庆市',
        label: '重庆市'
      },
      {
        value: '江西省',
        label: '江西省'
      },
      {
        value: '安徽省',
        label: '安徽省'
      },
      {
        value: '江苏省',
        label: '江苏省'
      },
      {
        value: '山西省',
        label: '山西省'
      },
      {
        value: '陕西省',
        label: '陕西省'
      },
      {
        value: '甘肃省',
        label: '甘肃省'
      },
      {
        value: '山东省',
        label: '山东省'
      },
      {
        value: '天津市',
        label: '天津市'
      },
      {
        value: '河北省',
        label: '河北省'
      },
      {
        value: '河南省',
        label: '河南省'
      },
      {
        value: '吉林省',
        label: '吉林省'
      },
      {
        value: '黑龙江省',
        label: '黑龙江省'
      },
      {
        value: '辽宁省',
        label: '辽宁省'
      },
      {
        value: '内蒙古自治区',
        label: '内蒙古自治区'
      },
      {
        value: '澳门',
        label: '澳门'
      },
      {
        value: '香港',
        label: '香港'
      },
      {
        value: '宁夏回族自治区',
        label: '宁夏回族自治区'
      },
      {
        value: '台湾',
        label: '台湾'
      }],
      value: ''
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
    background-color: $CitySearchColor
    .search
      height: 3rem
      padding: .2rem .1rem
      .search-input
        box-sizing: border-box
        width: 100%
        height: 1.7rem
        padding: 0 .1rem
        line-height: .92rem
        text-align: center
        border-radius: .03rem
        color: #666
</style>