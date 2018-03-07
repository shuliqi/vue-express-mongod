<template>
  <div class="webIndex">
    <header class="clearfix">
      <!-- 导航 -->
      <nav class="clearfix">
        <ul class="clearfix">
          <li class="clearfix">首页</li>
          <li class="clearfix">前端</li>
          <li class="clearfix">后端</li>
          <li class="clearfix">案例</li>
          <li class="clearfix">设计</li>
          <li class="clearfix">其他</li>
          <li class="clearfix">关于</li>
        </ul>
      </nav>
      <!-- logo图片 -->
      <img class="logo" src="../../../../comon/images/logo.png" alt="">
      <b>APPLLEN</b>
      <el-input v-model="input" placeholder="搜索"  suffix-icon="el-icon-search"></el-input>
    </header>
     
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '前端首页',
      data:[],
      input:""
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
<style lang="scss">
.webIndex{
  height: 100%;
  position: relative;
  header{
      overflow: hidden;
      position: fixed;
      z-index: -10;
      top: 0;
      left: 0;
      zoom: 1;
      width: 100%;
      height: 90%;
      background-color: #fff;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-size: cover; 
      background:url("../../../../comon/images/bg.png") center no-repeat;
      nav{
        max-width: 790px;
        margin: 40px auto;
        li{
          display: inline-block;
          font-size: 20px;
          font-weight: 300;
          letter-spacing: -0.6px;
          padding: 8px 30px;
          background: rgba(3, 3, 3, 0.19);
          text-align: right;
          color: #ffffff;
          &:first-child{
            padding-left: 50px;
            border-bottom-left-radius: 22px;
            border-top-left-radius: 22px;
          }
          &:last-child{
            padding-right: 50px;
            border-bottom-right-radius: 22px;
            border-top-right-radius: 22px;
          }
        }
      }
      .logo{
        width: 265px;
        height: 278px;
        display: block;
        margin: 0px auto;
        margin-top:5%;
      }
      b{
         font-family: PingFangSC;
        font-size: 59px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 26.9px;
        text-align: right;
        color: #fff;
        display: block;
        text-align: center;
      }
      .el-input{
        width: 240px;
        height: 37px;
       display: block;
       margin: 25px auto;
      }
      .el-input__inner{
        border-radius: 22px;
        border:none;
        background-color: rgba(255, 255, 255, 0.36);
     
        font-family: SourceHanSansSC;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.5px;
        text-align: left;
        color: rgba(255, 255, 254, 0.22);

        
      }
      .el-input__suffix {
          right: 18px;
          .el-icon-search:before {
              content: "\E619";
              font-size: 22px;
          }
      }


  }
  
}

</style>
