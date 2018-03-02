<template>
  <div>
      <el-col :span="8" v-for="(item, index) in data" :key="index" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
       
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time" v-html="item.content" v-highlight></time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '前端首页',
      data:[]
    }
  },
  created(){
     const baseUrl = this.$store.state.url
     this.$axios.get( baseUrl + '/indexWeb').then(res=>{
        this.data = res.data
      })
  }
}
</script>
<<style lang="scss">


</style>
