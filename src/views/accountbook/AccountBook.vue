<template>
    <div>
        <van-nav-bar title="账单" ></van-nav-bar>
        <van-cell-group>
            <van-cell title="名称" :value="account.name" />
            <van-cell title="创建时间" :value="account.createTime|formatDay" />
            <van-cell title="创建人" :value="account.remark" />
            <van-cell title="邀请码" :value="account.invitation" />
            <div class="companion">
                <div>
                    <van-image
                            round
                            width="3rem"
                            height="3rem"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <div>小福</div>

                </div>
                <div>
                    <van-image
                            round
                            width="3rem"
                            height="3rem"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <div>小福</div>

                </div>
            </div>
        </van-cell-group>
    </div>
</template>

<script>
    import {getAccount} from "network/account";
    import {formatTimeToStr} from 'common/date'

    export default {
        name: "",
        data() {
            return {
                account:{
                    name:'',
                    createTime:'',
                    remark:'',
                    invitation:'',
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

            }
        },
        mounted:function () {
            getAccount(this.$store.state.currentUser.currentAccountId).then(res => {
                this.account = res.data.data;
            })
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

</style>