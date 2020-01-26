<template>
    <div>

        <van-cell title="日期" value="2020-01-20" is-link arrow-direction="down"  @click="showPopup"></van-cell>

        <van-popup
                v-model="show"
                round
                position="bottom"
                :style="{ height: '20%' }"
        >
            <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :formatter="formatter"
            />
        </van-popup>
        <div>
            <span>12-21</span>
            <van-cell icon="location-o"  center title="餐饮" value="￥55" label="重庆鸡公煲" />
        </div>

    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                show: false
            }
        },
        methods:{
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value;
            },
            showPopup() {
                this.show = true;
            }
        }

    }
</script>

<style scoped>

</style>