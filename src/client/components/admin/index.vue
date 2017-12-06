<template>
  <div class="admin">
  <header>
    <div class="logo"></div>
    <h5>舒丽琦博客后台</h5>
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
  <div class="asideMenu">
     <el-menu
        style="width:201px"
        default-active="1-1"
        background-color="#464c5b"
        text-color="#fff"
        select="menuSelect"
        class="el-menu-vertical-demo">
       <el-submenu index="1">
          <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章</span>
          </template>
          <el-menu-item index="1-1">所有文章</el-menu-item>
          <el-menu-item index="1-2">写文章</el-menu-item>
        </el-submenu>
    
       <el-menu-item index="3">
         <i class="el-icon-setting"></i>
         <span slot="title">导航三</span>
       </el-menu-item>
    </el-menu>
  </div>
   
  </div>
</template>

<script>

export default {
  data () {
    return {
       msg: '后台管理首页',
       theme: 'light',
       value:""
    }
  },
  created(){
     const baseUrl = this.$store.state.url
      this.$ajax.get( baseUrl + 'users').then(res=>{
        console.log(res)
      })
  },
  methods:{
    /*
    * 退出
    */
    handleClick(){

      console.log("退出")
      
    },
    //菜单点击
    menuSelect(){
      console.log("dsfh")
    }
  }
}
</script>
<style lang="scss">
@import "../../static/css/base.scss";

.admin {
  width: 100%;
  height: 100%;

  // background:red;
  header {
    width: 100%;
    height: 60px;
    line-height: 1.5;
    box-shadow: 0 0 8.7px .3px rgba(159, 194, 192, .26);

    .logo {
      float: left;
      width: 200px;
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

  .asideMenu {
    width: 200px;
    height: 100%;
    background: $sd_colr;
  }
}







</style>
