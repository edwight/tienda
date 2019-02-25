<template>
	<div>
        <form autocomplete="off" @submit.prevent="saveProduct" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="name">Title</label>
                <input type="text" id="name" class="form-control" v-model="item.name" required>
            </div>
            <div class="form-group">
                <label for="name">description</label>
                <textarea id="description" class="form-control" v-model="item.description" required></textarea>
            </div>
            <div class="form-group">
                <label for="price">Precio</label>
                <input type="number" id="price" class="form-control" v-model="item.price" required>
            </div>
            <div class="form-group">
                <label for="stock">Stock</label>
                <input type="number" id="stock" class="form-control" v-model="item.stock" required>
            </div>
            <div class="form-group">
                <label for="category">Categoria</label>
                <input type="text" id="category" class="form-control" v-model="item.category_id" required>
            </div>
            <div class="form-group">
                <label for="proveedor">Proveedor</label>
                <input type="text" id="proveedor" class="form-control" v-model="item.proveedor_id" required>
            </div>
            <div class="form-group">
               
            </div>
            
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>
<script>
    import VueUploadMultipleImage from 'vue-upload-multiple-image';
	export default{
		name:'CreateProduct',
        components: {
            VueUploadMultipleImage,

         },
		data(){
            return {
                item:{
                    name: '',
                    description: '',
                    price:0,
                    stock:0,
                    category_id: null,
                    proveedor_id: null,
                },
            };
        },
		methods:{
            
            saveProduct(){
				this.$store.dispatch('saveProduct',{
                    name:this.item.name,
                    description:this.item.description,
                    price:this.item.price,
                    stock:this.item.stock,
                    images:this.item.images,
                    category_id:this.item.category_id,
                    proveedor_id:this.item.proveedor_id,
                })
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })
			},
            
            	
		}
		
	}
</script>
<style>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 
h1, h2 {
  font-weight: normal;
}
 
ul {
  list-style-type: none;
  padding: 0;
}
 
li {
  display: inline-block;
  margin: 0 10px;
}
 
a {
  color: #42b983;
}
</style>