<template>
    <div>
        <van-nav-bar title="分类管理"
                     left-text="返回"
                     right-text="添加"
                     left-arrow
                     @click-left="goBack()"
                     @click-right="addSort()">


        </van-nav-bar>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >

            <van-swipe-cell v-for="item in list" :key="item.id" >

                <van-cell  :value="item.name" center/>

                <template v-if="item.userId != 0" #right>
                    <van-button square type="danger" text="删除" @click="delSort(item.id)"/>
                </template>
            </van-swipe-cell>
        </van-list>

        <van-dialog v-model="show" title="添加分类" show-cancel-button :before-close="beforeClose">
            <van-field v-model="category" placeholder="请输入分类名称" />
        </van-dialog>

    </div>
</template>

<script>
    import {SwipeCell } from 'vant'
    import {getCategory,addCategory,delCategory} from "network/booking";

    export default {
        name: "sort",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                show: false,
                category:'',
            }
        },
        components:{
            [SwipeCell.name]: SwipeCell,
            //[Dialog.name]: Dialog,
        },
        methods: {
            goBack() {
                this.$router.push('/user')
            },
            onLoad() {
                this.categorylist()
                this.finished = true

            },
            categorylist(){
                getCategory().then(res =>{
                    if(res.data.status == 0){
                        this.list = res.data.data
                    }
                })
            }
            ,

            addSort(){
                console.log(this.show)
                this.show = true

            },
            beforeClose(action, done) {
                if(action === 'confirm') {
                    addCategory(this.category).then(res =>{
                        if(res.data.status == 0){
                            //this.$toast('添加成功')
                            this.categorylist()
                        }else{
                            this.$toast('添加失败')
                        }
                    })
                    done() //关闭
                } else if(action === 'cancel') {
                    done() //关闭
                }
            },
            delSort(categoryId){
                delCategory(categoryId).then(res =>{
                    if(res.data.status == 0){
                        this.categorylist()
                    }else{
                        this.$toast('添加失败')
                    }
                })
            }

        },
        /*created:function () {
            getCategory().then(res =>{
                if(res.data.status == 0){
                    this.list = res.data.data

                }
            })
        }*/
    }
</script>

<style scoped>

</style>