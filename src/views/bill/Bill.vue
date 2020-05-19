<template>
    <div>
        <van-nav-bar title="账单" right-text="记账" @click-right="toBooking">
            <!--<van-icon @click="toBooking" name="add-o" slot="right" size="30px"/>-->
        </van-nav-bar>

        <van-cell title="日期" :value="showDate" is-link arrow-direction="down"  @click="showPopup"></van-cell>

        <van-popup
                v-model="show"
                round
                position="bottom"
                :style="{ height: '40%' }"
        >
            <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :formatter="formatter"
                    @confirm="setDate"
                    @cancel="dateCancel"
            />
        </van-popup>

        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
        <div v-for="item in dataList">
            <span>{{item.day|iosForDate}}</span>

            <van-cell v-for="info in item.billList"
                      :icon="info.icon"  center
                      :title="info.name"
                      :value="'￥'+info.money"
                      :label="info.remark"
                        @click ="toInfo(info.id)"/>
        </div>
        </van-list>

    </div>
</template>

<script>
    import {getBillList} from 'network/bill'
    import {formatTimeToStr} from 'common/date'
    import moment from 'moment/moment'

    export default {
        name: "",
        data() {
            return {
                minDate: new Date(2000, 0, 1),
                maxDate: new Date(2050, 10, 1),
                currentDate: new Date(),
                showDate:formatTimeToStr(new Date(),'yyyy-MM'),
                show: false,
                loading: false,
                finished: false,

                dataList:[],
                pageNum:1
            }
        },
        filters: {
            formatDate: function(time) {
                if(time!=null&&time!="")
                {
                    let date = new Date(time);

                    return formatTimeToStr(date, "yyyy-MM-dd");
                    //return date;
                }else{
                    return "";
                }
            },
            iosDate(time){

                return time.replace(/\-/g, "/");

            },
            iosForDate(time) {
                if(time != null && time!=''){
                    //let date = new Date(time);
                    //return formattingDate(date)
                    let transTime = moment(time).format('YYYY/MM/DD')
                    console.log(transTime)
                    return transTime
                }else{
                    return ''
                }


            }
        },
        methods:{
            formatter(type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`
                }
                return val;
            },
            toBooking() {
                let currentAccountId = this.$store.state.currentUser.currentAccountId
                console.log(currentAccountId,'currentAccountId')
                if(currentAccountId == 0 || currentAccountId == null){
                    this.$toast('请添加一个账本')
                    this.$router.replace('/addAccount')
                }else{
                    this.$router.replace('/booking')
                }

            },
            dateFor(time){
                if(time!=null&&time!="")
                {
                    var date = new Date(time);
                    return formatTimeToStr(date, "yyyy-MM-dd");
                }else{
                    return "";
                }
            },
            showPopup() {
                this.show = true;
            },
            getList(){
                getBillList(this.$store.state.currentUser.currentAccountId,this.showDate,this.pageNum,6).then(res=>{
                    //console.log(res.data.data)

                    if(res.data.status == 1){

                        this.dataList = []

                        this.finished = true;

                    }else if(res.data.status == 0){
                        // 加载状态结束
                        this.loading = false;
                        //this.dataList = this.dataList.concat(res.data.data.list)
                        this.dataList.push(...res.data.data.list)

                        if(res.data.data.isLastPage == true){
                            this.finished = true
                        }
                    }

                })
            },
            onLoad() {
                //this.showDate = formatTimeToStr(new Date(), "yyyy-MM");
                this.getList()
                this.pageNum+=1

                /*console.log('来一次')
                console.log(this.pageNum)*/
            },
            setDate(value){
                this.showDate = formatTimeToStr(value,'yyyy-MM')
                this.show = false
                this.pageNum = 1
                this.dataList = []
                this.loading = true
                this.finished = false
                this.onLoad()

            },
            dateCancel() {
                this.show = false;

            },
            toInfo(billId){
                this.$router.push('/billInfo/'+billId)
            }
        }

    }
</script>

<style scoped>

</style>