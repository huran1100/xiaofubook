<template>
    <div>
        <van-nav-bar title="记账"
                     left-text="返回"
                     left-arrow
                     @click-left="goBack">

        </van-nav-bar>
        <van-button round :plain ="plain" type="info" @click="income(0)">支出</van-button>
        <van-button round :plain ="!plain" type="info" @click="income(1)">收入</van-button>

        <Categories ref="category" @sendCategory="getCategory"></Categories>
        <van-cell-group>
            <van-field readonly v-model="money" placeholder="金额" @touchstart.stop="show = true"/>
            <van-field v-model="remark" placeholder="备注" />
        </van-cell-group>

        <!--图片上传-->
        <!--<van-uploader :after-read="afterRead" />-->
        <van-uploader v-model="fileList" :after-read="afterRead" multiple :max-count="1"/>

        <span @click="showPopup">
            <van-icon class="booking-date" name="calender-o" size="2rem"/>
            <span>{{spendTime}}</span>
        </span>
        <span @click="showUserup">
            <van-icon class="booking-date" name="friends-o" size="2rem"/>
            <span>{{spendUser.name}}</span>
        </span>

        <!--键盘-->
        <van-number-keyboard
                :show="show"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @input="onInput"
                @close="onClose"
                @delete="onDelete"
        />

        <!--日期选择-->
        <van-popup
                v-model="popShow"
                round
                position="bottom"
                :style="{ height: '40%' }"
        >
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :formatter="formatter"
                    @confirm="setDate"
            />
        </van-popup>

        <!--用户选择-->
        <van-popup
                v-model="userShow"
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
    import Categories from 'views/booking/Categories'
    import {getCompanion,booking,upload,upLoadImage} from "network/booking";
    import {formatTimeToStr} from "common/date"

    export default {
        name: "",
        data(){
            return {
                plain: false,
                money:'',
                remark:'',
                spendTime:'今天',
                spendUser:{
                    id: this.$store.state.currentUser.id,
                    name:this.$store.state.currentUser.nikename
                },
                type:0,
                cateogryId:1,
                picture:'',
                columns: [{text:'小福',id:1},{text:'顾明',id:2}],

                show: true,
                popShow:false,
                userShow:false,

                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                fileList:[]

            }
        },
        components:{
            Categories
        },
        methods:{
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }else{
                    return `${value}日`
                }
                return value;
            },
            setDate(value){
                this.spendTime = formatTimeToStr(value,"yyyy-MM-dd")
                this.popShow = false
            },
            income(inc){
                if(inc == 1){
                    this.plain = true
                }else{
                    this.plain = false
                }
                this.type = inc

                console.log(this.type)

            },
            getCategory(value) {
                this.cateogryId = value

            },
            onInput(value) {
                this.money+=value
            },
            onDelete() {
                this.money = this.money.substr(0,this.money.length-1)
            },
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                let formData = new FormData();
                // upload这个名字是后台给的
                formData.append("file", file.file);
                upLoadImage(formData).then(res => {
                    //console.log(res.data.data)
                    this.picture = res.data.data
                })

            },
            showPopup() {
                this.popShow = true;
            },
            showUserup() {
                this.userShow = true;
            },

            onClose() {
                if(this.money == '') return this.$toast('请输入金额')
                let userId = this.$store.state.currentUser.id
                let accountId = this.$store.state.currentUser.currentAccountId
                console.log(this.type,'tupe++====')
                booking(this.spendTime,userId,this.spendUser.id,accountId,
                    this.type,this.cateogryId,this.money,this.picture,this.remark).then(res => {
                        if(res.data.status == 0){
                            this.$toast("添加成功")
                        }
                })
                this.show = false
            },
            goBack() {
                this.$router.replace('/bill')
            },
            onConfirm(value, index) {
                this.spendUser.id = value.id
                this.spendUser.name = value.text
                this.userShow = false
            },
            onCancel() {
                this.$toast('取消');
                this.userShow=false
            },

        },
        mounted:function () {
            getCompanion(this.$store.state.currentUser.currentAccountId).then(
                res => {
                    this.columns = res.data.data
                    this.spendTime = formatTimeToStr(new Date(),'yyyy-MM-dd')

                }
            )

        }


    }
</script>

<style scoped>
    .booking-date{
        vertical-align:middle;
    }

</style>