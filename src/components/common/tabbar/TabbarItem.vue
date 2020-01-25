<template>
    <div class="tabbar-item" @click="swich">
        <div><slot name="icon"><img :src="imgurl"></slot></div>
        <div><slot name="text">{{text}}</slot></div>
    </div>

</template>

<script>
    export default {
        name: "TabbarItem",
        props:{
            path:String,
            text: {
                type:String,
                default:'用户'
            }
        },
        data(){
            return {
                imgurl : '~assets/img/tabbar/profile.svg',
                text: '用户'

            }
        },
        methods: {
            swich(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;

    }
    .tabbar-item img {
        width: 25px;
        height: 25px;
    }

</style>