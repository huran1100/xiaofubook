<template>
    <div class="add-account">
        <van-nav-bar title="添加账本"
                     left-text="返回"
                     left-arrow
                     @click-left="goBack"
                     :z-index="10"
                     fixed />
        <div class="add-account-content">
            <van-cell-group>
                <van-field v-model="name" placeholder="请输入账本名称或邀请码" />
            </van-cell-group>
            <van-button type="info" @click="add">创建账本</van-button>
            <van-button type="info" @click="join">加入账本</van-button>
        </div>

    </div>
</template>

<script>
    import {addAccount,joinAccount} from 'network/account'
    export default {
        name: "addAccount",
        data() {
            return {
                name: ''
            }
        },
        methods:{
            goBack() {
                this.$router.push('/user')
            },
            add() {
                addAccount(this.$store.state.currentUser.id,this.name).then(res => {
                    this.$toast(res.data.msg)
                    if (res.data.status == 0) {
                        this.$store.state.currentUser.currentAccountId = res.data.data
                    }
                })
            },
            join() {
                joinAccount(this.name).then(res => {
                    this.$toast(res.data.msg)
                })
            }
        }
    }
</script>

<style scoped>
    .add-account{
        text-align: center;
    }
    .add-account-content{
        margin-top: 7vh;
    }

</style>