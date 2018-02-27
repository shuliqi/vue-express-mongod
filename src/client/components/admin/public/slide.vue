<template>

    <!--后台侧边导航-->
    <div class="asideMenu">
      <el-menu
          style="width:100%"
          default-active="1-1"
        
          select="menuSelect"
          class="el-menu-vertical-demo">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span>文章</span>
            </template>
            <el-menu-item index="1-1">所有文章</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push({name: 'adminEdit'})">写文章</el-menu-item>
          </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
  
</template>

<script>

export default {
  name:"slide",
  data () {
    return {
       msg: '后台管理首页',
       theme: 'light',
       value:""
    }
  },
  created(){
    
  },
  methods:{
    //菜单点击
    menuSelect(){
      console.log("dsfh")
    }
  }
}
</script>
<style lang="scss" type="text/scss" >
@import "../../../static/css/base.scss";
  .asideMenu {
    width: 12%;
    float:left;
    .el-submenu .el-menu-item {
      height: 50px;
      line-height: 50px;
      padding: 0;
      min-width:auto; 
    }
  }
</style>
