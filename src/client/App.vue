<template>
  <div class="app full-height">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '舒丽琦的blog'
    }
  }
}
</script>

<style lang="scss" >
html,
body,
.app {
  width: 100%;
  height: 100%;
}

</style>
