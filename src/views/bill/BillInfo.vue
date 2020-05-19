<template>
    <div>
        <van-nav-bar title="详情"
                     left-text="返回"
                     left-arrow
                     @click-left="goBack">

        </van-nav-bar>
        <van-cell-group>
                <van-cell v-if="info.type == 0" title="用于:" :value="info.name" />
                <van-cell v-else-if="info.type == 1" title="来源:" :value="info.name" />


            <van-cell title="金额:" :value="info.money" />
            <van-cell title="备注:" :label="info.remark" />
            <van-cell title="日期:" :value="info.spendTime" />
            <van-cell v-if="info.type == 0"  title="付款人:" :value="info.nikename" />
            <van-cell v-else-if="info.type == 1"  title="收款人:" :value="info.nikename" />

            <van-cell title="附件:" >
            <van-image v-if="info.picture != null&& info.picture != ''" width="100" height="100" :src="info.picture" />
            </van-cell>
        </van-cell-group>

    </div>
</template>

<script>
    import {getBillInfo} from 'network/bill.js'

    export default {
        name: "",
        data() {
            return {
                info:{
                    name:'',
                    money:0,
                    remark:'',
                    spendTime:'',
                    nikename:'',
                    picture:'',

                }

            }
        },
        methods: {
            goBack(){
                this.$router.replace('/bill')
            }

        },
        created:function () {
            let billId = this.$route.params.billId
            getBillInfo(billId).then(res => {
                if(res.data.status == 0){
                    this.info = res.data.data
                }
            })
        }
    }
</script>

<style scoped>

</style>