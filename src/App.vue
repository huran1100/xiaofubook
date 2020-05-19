<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
      name: 'app',
      created:function () {
            //  在页面加载时读取sessionStorage里的状态信息

          if ( sessionStorage.getItem('state') ) {
              this.$store.replaceState( Object.assign( {}, this.$store.state,
                  JSON.parse(sessionStorage.getItem('state') ) ) )
          }

          // 页面刷新时将state数据存储到sessionStorage中

          window.addEventListener('beforeunload',()=>{
              sessionStorage.setItem('state',JSON.stringify(this.$store.state) )
          })
      }
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
