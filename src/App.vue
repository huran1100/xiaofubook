<template>
  <div id="app">
      <van-nav-bar title="标题" left-text="返回" left-arrow>
          <van-icon name="search" slot="right" />
      </van-nav-bar>
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/MainTabbar'
  export default {
      name: 'app',
      components :{
        MainTabbar
      }

  }
</script>

<style>
  @import "assets/css/base.css";

</style>
