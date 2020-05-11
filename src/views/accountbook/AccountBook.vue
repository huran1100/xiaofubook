<template>
    <div>
        <van-nav-bar title="账本" ></van-nav-bar>
        <van-cell-group>
            <van-cell title="名称" :value="account.name" />
            <van-cell title="创建时间" :value="account.createTime|iosForDate" />
            <van-cell title="创建人" :value="account.userName" />
            <van-cell title="邀请码" :value="account.invitation" />

        </van-cell-group>
        <div class="companion" >
            <div v-for="item in account.userVoList">
                <van-image
                        round
                        width="3rem"
                        height="3rem"
                        :src="item.picture"
                />
                <div>{{item.text}}</div>
            </div>
        </div>

        <div class="switch-button">
            <van-button plain hairline type="info" @click="showPop">切换账本</van-button>
        </div>

        <!--账本选择弹出-->
        <van-popup
                v-model="show"
                round
                position="bottom"
                :style="{ height: '40%' }"
        >
            <van-picker :columns="columns" show-toolbar @cancel="onCancel"
                        @confirm="onConfirm"  />


        </van-popup>
    </div>

</template>

<script>
    import {getAccount,getUserAccount,changeAccount} from "network/account";
    import {formatTimeToStr,formattingDate} from 'common/date'

    export default {
        name: "",
        data() {
            return {
                show:false,
                columns:['杭州', '宁波', '温州', '嘉兴', '湖州'],

                account:{
                    name:'',
                    createTime:'',
                    remark:'',
                    invitation:'',
                    userVoList:[],
                }
            }
        },
        filters:{
            formatDay(time) {
                if(time != null && time!=''){
                    let date = new Date(time);
                    return formatTimeToStr(date,'yyyy-MM-dd')
                }else{
                    return ''
                }

            },
            iosForDate(time) {
                if(time != null && time!=''){
                    let date = new Date(time);
                    return formattingDate(date)
                }else{
                    return ''
                }


            }
        },
        mounted:function () {
            getAccount(this.$store.state.currentUser.currentAccountId).then(res => {
                if(res.data.status == 1){
                    this.$toast(res.data.msg)
                }else{
                    this.account = res.data.data;
                }
            })
            getUserAccount().then(res =>{
                this.columns = res.data.data
            })
        },
        methods:{
            showPop() {
                this.show = true
            },
            onCancel(){
                this.show = false
            },
            onConfirm(value){
                let accountId = value.id
                this.$store.state.currentUser.currentAccountId=accountId
                changeAccount(accountId).then(res => {
                    if(res.data.status == 1){
                        this.$toast("操作失败")
                    }
                })
                getAccount(accountId).then(res => {
                    this.account = res.data.data;
                })
                this.show = false
            }
        }


    }
</script>

<style scoped>
    .companion{
        display: flex;
    }
    .companion div{
        margin-left: 10px;
    }
    .switch-button{
        position:absolute;
        bottom:55px;
        left:40%;
    }

</style>