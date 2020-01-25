<template>
    <div>
        <div class="tabbar">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    .tabbar {
        display: flex;
        background-color: #f6f6f6;
        position:fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }


</style>