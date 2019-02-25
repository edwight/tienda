<template>
	<div class="sidebar">
		<h3 class="title">Admin</h3>
		<ul>
			<li>
				<router-link :to="{ name: 'Dproducts' }">Productos</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Dcategories' }">Categorias</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Dstats' }">Metricas</router-link>
			</li>
	        <li><a href="#">Usuarios</a></li>
	        <li><a href="#">Proveedor</a></li>
	    </ul>
	    <h3 class="title">Category</h3>
	    <ul>
	        <li>
	        	<router-link :to="{ name: 'showCategory', params: {categoryName:'zapatos' } }">
	        		Zapatos
	        	</router-link>
	        </li>
	        <li>
	        	<router-link :to="{ name: 'showCategory', params: {categoryName:'camisas' } }">
	        		Camisas
	        	</router-link>
	        </li>
	        <li><a href="#">trends</a></li>
	        <li><a href="#">boys</a></li>
	        <li><a href="#">girls</a></li>
	        <li><a href="#">sale</a></li>
	    </ul>
	</div>
</template>
<script>
	export default{
		name:'sidebar',

	}
</script>