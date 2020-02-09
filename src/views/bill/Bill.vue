<template>
    <div>
        <van-nav-bar title="账单" ></van-nav-bar>

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
            <span>{{item.day|formatDate}}</span>
            <van-cell v-for="info in item.billList"
                      :icon="info.icon"  center
                      :title="info.name"
                      :value="'￥'+info.money"
                      :label="info.remark" />
        </div>
        </van-list>

    </div>
</template>

<script>
    import {getBillList} from 'network/bill'
    import {formatTimeToStr} from 'common/date'
    export default {
        name: "",
        data() {
            return {
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                showDate:formatTimeToStr(new Date(),'yyyy-MM'),
                show: false,
                loading: false,
                finished: false,

                dataList:[]
            }
        },
        filters: {
            formatDate: function(time) {
                if(time!=null&&time!="")
                {
                    let date = new Date(time);
                    return formatTimeToStr(date, "yyyy-MM-dd");
                }else{
                    return "";
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
                getBillList(this.$store.state.currentUser.currentAccountId,this.showDate,10).then(res=>{
                    console.log(res.data.data)
                    this.dataList = res.data.data.list



                    if(res.data.data.isLastPage == true){
                        this.finished = true
                    }
                })
            },
            onLoad() {
                //this.showDate = formatTimeToStr(new Date(), "yyyy-MM");
                this.getList()

            },
            setDate(value){
                console.log(value)
                this.showDate = formatTimeToStr(value,'yyyy-MM')
                this.show = false
                this.getList()

            },
            dateCancel() {
                this.show = false;

            }
        }

    }
</script>

<style scoped>

</style>