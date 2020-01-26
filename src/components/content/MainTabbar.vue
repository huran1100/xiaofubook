<template>
    <div>
        <Tabbar>
            <TabbarItem path="/bill">
                <img slot="icon" src="~assets/img/tabbar/home.svg">
                <div slot="ttext">账本</div>
            </TabbarItem>
            <TabbarItem path="/booking">
                <img slot="icon" src="~assets/img/tabbar/category.svg">
                <div slot="ttext">记账</div>
            </TabbarItem>
            <TabbarItem path="/user">
                <img slot="icon" src="~assets/img/tabbar/profile.svg">
                <div slot="ttext">我的</div>
            </TabbarItem>
        </Tabbar>
    </div>
</template>

<script>
    import Tabbar from 'components/common/tabbar/Tabbar'
    import TabbarItem from 'components/common/tabbar/TabbarItem'
    export default {
        name: "",
        components :{
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>