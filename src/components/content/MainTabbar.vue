<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item  replace to="/bill" icon="balance-list-o">账单</van-tabbar-item>
            <van-tabbar-item   @click="to('/account')" icon="debit-pay">账本</van-tabbar-item>
            <van-tabbar-item   @click="to('/user')" icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

    import { Tabbar, TabbarItem } from 'vant';
    export default {
        name: "",
        data() {
            return {
                active: 0
            }
        },
        components :{
            [Tabbar.name]:Tabbar,
            [TabbarItem.name]:TabbarItem
        },
        methods:{
            to(url){
                let currentAccountId = this.$store.state.currentUser.currentAccountId
                if(currentAccountId == 0 || currentAccountId == null){
                    this.$toast('请添加一个账本')
                    this.$router.replace('/addAccount')
                }else{
                    this.$router.replace(url)
                }
            }

        }
    }
</script>

<style scoped>

</style>