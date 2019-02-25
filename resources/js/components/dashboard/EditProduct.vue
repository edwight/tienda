<template>
	<div>
        <form autocomplete="off" @submit.prevent="editProduct" method="put">
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
                <select class="form-control" id="category" required>
                    <option value="1">
                        option 1
                    </option>
                    <option value="2">
                        option 2
                    </option>
                    <option value="3">
                        option 3
                    </option>
                    <option value="4">
                        option 4
                    </option>
                    <option value="5">
                        option 5
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="proveedor">Proveedor</label>
                <select class="form-control" id="proveedor" required>
                    <option value="1">
                        option 1
                    </option>
                    <option value="2">
                        option 2
                    </option>
                    <option value="3">
                        option 3
                    </option>
                    <option value="4">
                        option 4
                    </option>
                    <option value="5">
                        option 5
                    </option>
                </select>
            </div>

            <button type="submit" class="btn btn-default">Editar</button>
        </form>
    </div>
</template>
<script>
	export default{
		name:'EditProduct',
        created(){
            this.productId = this.$route.params.productId;
            this.getProduct();
        },
		data(){
            return {
                item:{},
                productId:null,
            }
        },
		methods:{
            getProduct(){
                this.item = this.$store.getters.findProduct(this.productId)
                console.log(this.item)
            },
            editProduct(){
				this.$store.dispatch('editProduct',{
                    productId:this.item.id,
                    name:this.item.name,
                    description:this.item.description,
                    price:this.item.price,
                    stock:this.item.stock,
                    category_id:this.item.category_id,
                    proveedor_id:this.item.proveedor_id ,
                })
                .then(response=>{
                    console.log(response);
                    this.$router.push({ name: 'details', params: { productId: this.productId } });

                })
                .catch(error=>{
                    console.log(error)
                })
			}	
		}
		
	}
</script>