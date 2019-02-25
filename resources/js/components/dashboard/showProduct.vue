<template>
    <div class="create">crear producto</div>
	<div class="getProducts">
		<ul>
			<div class="product">
                <p>name:{{product.name}}</p> 
                <p>price:{{product.price}}</p>
                <p>stock:{{product.stock}}</p>
                <p>category:{{product.category.name}}</p>
                <p>proveedor:{{product.proveedor.name}}</p>
            </div>
        </ul>
	</div>
	            
</template>
<script>
    name:'showProduct',
</script>