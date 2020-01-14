<template>
    <div>
        <h1>商品列表页面</h1>
        <div>
            <router-link :to="{name:'gDetail', params:{id: idIdx}}">商品详情页面</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                idIdx:1
            }
        }


    }
</script>

<style scoped>

</style>
