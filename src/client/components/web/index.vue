<template>
  <div>
    前端首页
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '前端首页'
    }
  },
  created(){
     const baseUrl = this.$store.state.url
      this.$ajax.get( baseUrl + 'users').then(res=>{
        console.log(res)
      })
  }
}
</script>
<<style lang="scss">


</style>
