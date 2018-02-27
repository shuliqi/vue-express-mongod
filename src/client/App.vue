<template>
  <div class="app full-height">
    <vHeader></vHeader>
    <vHSlide></vHSlide>
    <router-view class="view clearfix"></router-view>
  </div>
</template>

<script>
import vHeader from '../client/components/admin/public/header';
import vHSlide from '../client/components/admin/public/slide';
export default {
  data () {
    return {
      message: '舒丽琦的blog'
    }
  },
  components:{
    vHeader,
    vHSlide
  }
}
</script>

<style lang="scss" >
@import "./static/css/base.scss";
html,
body,
.app {
  width: 100%;
  height: 100%;
  .view{
    margin-left:12%;
    background:#ebebeb;
    font-size:12px;
    height: 92%;
    padding:30px;
  }
}

</style>
