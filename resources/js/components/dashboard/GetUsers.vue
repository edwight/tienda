<template>
	<div class="getUser">
		<ul>
			<li v-for="user in getUsersAll">
                {{user.name}} | {{user.email}}
            </li>
        </ul>
	</div>
	            
</template>
<script>
	export default{
		name:'getUsers',
		created(){
			
			this.$store.dispatch('getUserAll')
			.then(response=>{
				//console.log(response)
				this.getUsersAll = response.data.data
			})
			.catch(error=>{
				console.log(error.response)
			})
		},
		data(){
			return{
				getUsersAll:[]
			}
		}
        
	}
</script>