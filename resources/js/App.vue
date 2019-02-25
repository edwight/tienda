<template>
    <div class="container">
        <headerComp></headerComp>
        <router-view></router-view>
    </div>
</template>

<script>
    import headerComp from './components/layouts/header.vue'
    export default {
        name:'app',
        components:{
            headerComp
        }
        
    }
</script>
<style>
       
</style>