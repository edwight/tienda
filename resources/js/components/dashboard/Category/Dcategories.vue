<template>
	<div class="getProducts">
		<div class="box-body">
	        <table class="table table-bordered">
	            <tbody>
	            	<tr>
	                  <th style="width: 10px">#</th>
	                  <th>nombre</th>
	                  <th>Total items</th>
	                  <th>Total Valor</th>
	                  <th>acción</th>
	                </tr>
	                <tr v-for="category in getCategoriesAll">
	                  <td>1.</td>
	                  <td>{{category.name}}</td>
	                  <td>45</td>
	                  <td>5800</td>
	                  <td>
	                  	<router-link :to="{ name: 'DeditCategory',params: { categoryId: category.id }}">
	                  		<button class="btn btn-info">
	                  			editar
	                  		</button>	
	                  	</router-link>
	                  	
	                  </td>
	                </tr>
	                
	            </tbody>
	        </table>
        </div>
	</div>
	            
</template>
<script>
	export default{
		name:'Dcategories',
		created(){
			this.getCategories();
		},
		data(){
			return{
				getCategoriesAll:[]
			}
		},
		methods:{
			getCategories(){
				this.$store.dispatch('getCategoryAll')
				.then(response=>{
					//console.log(response)
					this.getCategoriesAll = response.data.data
				})
				.catch(error=>{
					console.log(error.response)
				})
			}
		}
	}
</script>