<template>
  <div class="app full-height">
    <!-- <vHeader></vHeader> -->
    <!-- <vHSlide></vHSlide> -->
    <router-view class="view clearfix"></router-view>
  </div>
</template>

<script>
// import vHeader from '../client/components/admin/public/header';
import vHSlide from '../client/components/admin/public/slide';
export default {
  data () {
    return {
      message: '舒丽琦的blog'
    }
  },
  components:{
    // vHeader,
    vHSlide
  }
}
</script>

<style lang="scss" >
@import "./static/css/base.scss";
@import "./static/font/iconfont.css";
@font-face {
    font-family: "Didot";
    src: url('./static/font/didot-htf-m96-medium-ital.ttf');
    // src: local("☺"), url("Chantelli_Antiqua-webfont.woff") format("woff"), url("Chantelli_Antiqua-webfont.ttf") format("truetype"), url("Chantelli_Antiqua-webfont.svg#webfontZjhIjbDc") format("svg");
    font-weight: normal;
    font-style: normal;
}
html,
body,
.app {
  width: 100%;
}

</style>
