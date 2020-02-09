<template>
    <div>
        <div class="mid-login" >
            <van-tabs v-model="active" animated>
                <van-tab  title="登录">
                    <van-cell-group class="login">
                        <van-field v-model="username" label="用户名" />
                        <van-field v-model="password" type="password" label="密码" />
                        <van-button type="info" size="large" @click="login()">登录</van-button>
                    </van-cell-group>
                </van-tab>
                <van-tab  title="注册">
                    <van-cell-group>
                        <van-field v-model="nickname" label="用户名" />
                        <van-field
                                v-model="username"
                                error
                                required
                                label="账号"
                                placeholder="请输入用户名"
                        />
                        <van-field v-model="password" type="password" label="密码" />
                        <van-field v-model="cpassword" type="password" label="确认密码" />
                        <van-field v-model="email" label="邮箱" />
                        <van-button type="info" size="large" @click="register()">注册</van-button>

                    </van-cell-group>
                </van-tab>
            </van-tabs>


        </div>

    </div>
    
</template>

<script>
    import {Tab,Tabs} from 'vant'
    import {userLogin,userRegister} from 'network/login'

    export default {
        name: "userLogin",
        components:{
            [Tab.name]:Tab ,
            [Tabs.name]:Tabs
        },
        data() {
            return {
                nickname:'',
                username:'',
                password:'',
                cpassword:'',
                email:'',
                active:0
            }
        },
        methods:{
            register() {
                userRegister(this.nickname,this.username,
                    this.password,this.email).then(res =>{
                        this.$toast(res.data.msg);
                    }
                )
            },
            login(){
                userLogin(this.username,this.password).then(res => {
                    console.log(res)
                    this.$toast(res.data.msg);
                    if(res.data.status == 0){
                        //保存用户信息
                        this.$store.state.token = true
                        this.$store.state.currentUser = res.data.data.user
                        //保存token
                        window.sessionStorage.setItem('token',res.data.data.token)
                        this.$store.state.token = res.data.data.token
                        //跳回原页面
                        //let redirect = decodeURIComponent(this.$route.query.redirect||'/home')
                        console.log("===heh===")
                        this.$router.push('/home');
                    }

                })
            }
        }


    }
</script>

<style scoped>
    .mid-login{
        position: absolute;
        top: 30%;
        left:10%;
        width: 80vw;
        border: 1px solid;
    }


</style>