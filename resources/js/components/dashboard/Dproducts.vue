<template>
	<div class="getProducts">
		<router-link :to="{ name: 'createProduct'}">
	    	<button class="btn btn-info">
	            Crear Productos
	        </button>	
	    </router-link>
		<button class="btn btn-info">crear producto</button>
		<div class="box-body">
	        <table class="table table-bordered">
	            <tbody>
	            	<tr>
	                  <th style="width: 10px">#</th>
	                  <th>nombre</th>
	                  <th>Precio</th>
	                  <th>Cantidad</th>
	                  <th>categoria</th>
	                  <th>proveedor</th>
	                  <th>acción</th>
	                </tr>
	                <tr v-for="product in getProductsAll">
	                  <td>1.</td>
	                  <td>{{product.name}}</td>
	                  <td>{{product.price}}</td>
	                  <td><span class="badge bg-red">{{product.stock}}</span></td>
	                  <td>{{product.category.name}}</td>
	                  <td>{{product.proveedor.name}}</td>
	                  <td>
	                  	<router-link :to="{ name: 'editProduct',params: { productId: product.id }}">
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
		name:'Dproducts',
		created(){
			this.getProduct();
		},
		data(){
			return{
				getProductsAll:[]
			}
		},
		methods:{
			getProduct(){
				this.$store.dispatch('getProductsAll')
				.then(response=>{
					//console.log(response)
					this.getProductsAll = response.data.data
				})
				.catch(error=>{
					console.log(error.response)
				})
			}
		}
        
	}
</script>