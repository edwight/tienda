<template>
	<div class="showUser">
		<ul>
			<div class="user">
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
    export default{
     name:'showUser',
        created() {
          this.userId = this.$route.params.userId;

        },
        data(){
          return{
            userId:null
          } 
        },
        computed:{
          findUser(){
            return this.$store.getters.findUser(this.userId)
          }
        }   
    }
    
</script>