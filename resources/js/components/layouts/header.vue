<template>
    <div class="header">
        <div class="container">
           <navbar></navbar> 
        </div>
    </div>
    
</template>
<script>
    import navbar from './navbar.vue';
    export default{
        name:'header',
        components:{
            navbar
        },
        
    }
</script>
<style>
.header{
   border-bottom: 1px solid rgb(236, 236, 236); 
}

</style>
