<template>
    <div>
        <router-view></router-view>
        <main-tabbar ></main-tabbar>
    </div>
    
</template>

<script>
    import MainTabbar from 'components/content/MainTabbar'

    export default {
        name: "home",
        data(){
          return {
          }
        },
        components :{
            MainTabbar
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>