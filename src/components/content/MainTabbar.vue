<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item  replace to="/bill" icon="balance-list-o">账单</van-tabbar-item>
            <van-tabbar-item  replace to="/account" icon="debit-pay">账本</van-tabbar-item>
            <van-tabbar-item  replace to="/user" icon="user-circle-o">我的</van-tabbar-item>
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

        }
    }
</script>

<style scoped>

</style>