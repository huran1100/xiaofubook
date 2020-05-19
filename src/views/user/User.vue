<template>
    <div>
        <div class="user-info">
            <div class="user-item">
                <van-image
                        round
                        width="7rem"
                        height="7rem"
                        :src="this.$store.state.currentUser.picture"
                />
            </div>
            <div class="user-item">{{this.$store.state.currentUser.nikename}}</div>
        </div>
        <div class="user-links">
            <div class="links-item" @click="jump()">
                <van-icon name="pending-payment" />
                <div>添加账本</div>
            </div>
            <div class="links-item" @click="toSort()">
                <van-icon name="records" />
                <div>分类管理</div>
            </div>
            <div class="links-item">
                <van-icon name="tosend" />
                <div>邮箱绑定</div>
            </div>
            <div class="links-item">
                <van-icon name="logistics" />
                <div>导出数据</div>
            </div>
        </div>
        <van-cell-group>
            <van-cell icon="points" title="意见反馈" is-link />
            <van-cell icon="gold-coin-o" title="关于哦我们" is-link />
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
        <van-button plain type="info" @click="loginOut()">退出登录</van-button>
    </div>
</template>

<script>
    import {Row, Col} from 'vant';
    import {loginOut} from "../../network/login";

    export default {
        name: "",
        components:{
            [Row.name]: Row,
            [Col.name]: Col,
        },
        methods:{
            jump() {
                this.$router.push('/addAccount')
            },
            toSort(){
                this.$router.push('/sort')
            },
            loginOut(){
                loginOut().then(res =>{
                    window.sessionStorage.clear()
                    this.$toast('退出成功')
                    this.$router.push('/login')
                })


            }

        }
    }
</script>

<style scoped>
    .user-info{
        width: 100%;
        height: 50%;
        display: block;
        background-color: honeydew;
    }
    .user-item{
        text-align: center;
    }
    .user-links {
        display: flex;
        margin-top: 10px;

    }
    .links-item {
        flex: 1;
        text-align: center;

    }
</style>