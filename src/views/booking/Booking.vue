<template>
    <div>

        <van-button round :plain ="plain" type="info" @click="income(1)">收入</van-button>
        <van-button round :plain ="!plain" type="info" @click="income(0)">支出</van-button>
        <Categories></Categories>
        <van-cell-group>
            <van-field readonly v-model="money" placeholder="金额" @touchstart.stop="show = true"/>
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="remark" placeholder="备注" />
        </van-cell-group>
        <van-uploader :after-read="afterRead" />

        <van-number-keyboard
                :show="show"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
        />

    </div>
</template>

<script>
    import Categories from 'views/booking/Categories'

    export default {
        name: "",
        data(){
            return {
                plain: false,
                money:'',
                remark:'',
                show: true
            }
        },
        components:{
            Categories
        },
        methods:{
            income(inc){
                if(inc == 0){
                    this.plain = true
                }else{
                    this.plain = false
                }

            },
            onInput(value) {
                this.$toast(value);
                this.money+=value
            },
            onDelete() {
                this.money = this.money.substr(0,this.money.length-1)
            },
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            }
        }

    }
</script>

<style scoped>

</style>