<template>
  <div>
    <div class="dataInfo">
      <div class="alrteData">
        <div class="infoText">各国疫情数据：
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
  name: 'WorldSearch',
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
        value: '美国',
        label: '美国'
      }, {
        value: '英国',
        label: '英国'
      }, {
        value: '意大利',
        label: '意大利'
      }, {
        value: '印度',
        label: '印度'
      }, {
        value: '西班牙',
        label: '西班牙'
      },
      {
        value: '俄罗斯',
        label: '俄罗斯'
      },
      {
        value: '日本',
        label: '日本'
      },
      {
        value: '韩国',
        label: '韩国'
      },
      {
        value: '澳大利亚',
        label: '澳大利亚'
      },
      {
        value: '德国',
        label: '德国'
      },
      {
        value: '伊朗',
        label: '伊朗'
      },
      {
        value: '新西兰',
        label: '新西兰'
      },
      {
        value: '加拿大',
        label: '加拿大'
      },
      {
        value: '墨西哥',
        label: '墨西哥'
      },
      {
        value: '泰国',
        label: '泰国'
      },
      {
        value: '印度尼西亚',
        label: '印度尼西亚'
      },
      {
        value: '菲律宾',
        label: '菲律宾'
      },
      {
        value: '越南',
        label: '越南'
      },
      {
        value: '新加坡',
        label: '新加坡'
      },
      {
        value: '芬兰',
        label: '芬兰'
      },
      {
        value: '挪威',
        label: '挪威'
      },
      {
        value: '波兰',
        label: '波兰'
      },
      {
        value: '乌克兰',
        label: '乌克兰'
      },
      {
        value: '土耳其',
        label: '土耳其'
      },
      {
        value: '希腊',
        label: '希腊'
      },
      {
        value: '冰岛',
        label: '冰岛'
      },
      {
        value: '葡萄牙',
        label: '葡萄牙'
      },
      {
        value: '阿尔及利亚',
        label: '阿尔及利亚'
      },
      {
        value: '缅甸',
        label: '缅甸'
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