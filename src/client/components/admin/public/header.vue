<template>
    <header  class="clearfix">
      <div class="logo"></div>
      <h5>舒丽琦博客后台</h5>
      <!--后台头部-->
      <div class="user">
      <el-dropdown 
          size="medium"
          trigger="click"
          @command="handleClick">
          <span class="el-dropdown-link">
            舒丽琦<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>

<script>

export default {
  name:"slide",
  data () {
    return {
    
       theme: 'light',
       value:""
    }
  },
  created(){
      const baseUrl = this.$store.state.url
      
  },
  methods:{
    /*
    * 退出
    */
    handleClick(){

      console.log("退出")
      
    },
  }
}
</script>
<style lang="scss" type="text/scss" >
@import "../../../static/css/base.scss";

  header {
    width: 100%;
    height: 60px;
    line-height: 1.5;
    box-shadow: 0 0 8.7px .3px rgba(159, 194, 192, .26);

    .logo {
      float: left;
      width: 12%;
      height: 60px;
      background: $th_bg;
    }

    h5 {
      display: inline-block;
      padding-left: 20px;
    }

    .user {
      float: right;
      padding-right: 40px;

      cursor: pointer;
    }
  }













</style>
