<template>
	
</template>
<script>
	export default{
		name:'logout',
				
		created(){
            this.$store.dispatch('destroyToken')
            .then(res => {
                //this.$store.commit(“loginSuccess”, res);
                this.$router.push({path: '/'});
            })
            .catch(error => {
            	
                //this.$store.commit("loginFailed", {error});
            })  
		}
		
	}
</script>