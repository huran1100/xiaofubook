<template>
    <div class="category">
        <div :class="{active:currentIndex == index}"  class="category-item"
             v-for="(item,index) in category" @click = "selectCategory(index,item.id)">

            <van-icon :name="item.icon" size="20px"/>
            <div>{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    import {getCategory} from 'network/booking'
    export default {
        name: "",
        data() {
            return {
                category:[{
                    id:'',
                    icon: '',
                    name:''
                }],
                currentIndex:0
            }
        },
        mounted:function () {
            getCategory().then(res =>{
                this.category = res.data.data
            })
        },
        methods:{
            selectCategory(index,categoryId){
                this.currentIndex = index
                this.$emit('sendCategory',categoryId)
            }

        }
    }
</script>

<style scoped>
    .category{
        height: 130px;
        width: 100%;

        overflow-y: scroll;



    }
    .category-item{
        width: 15vw;
        height: 8vh;
        margin: 1%;
        float: left;
        display: block;
        text-align: center;
    }
    .active{
        background-color: beige;
    }

</style>