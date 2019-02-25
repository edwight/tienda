<template>
    <div class="row main">
        <aside class="col-md-3">
            <Sidebar></Sidebar>
        </aside>
        <section class="col-md-9">
            <div class="container articles">
                <div class="row">
                <div class="stats col-12">
                <a href="#">
                    <h4>{{categoryName}} - <span>4449 itemms</span> </h4>
                </a>
                <ul class="stats--nav">
                    <li>Sort : </li>
                    <li><a class="active" href="#">popular</a></li> |
                    <li><a href="#">new </a></li> |
                    <li><a href="#">discount</a></li> |
                    <li><a href="#">price: Low High </a></li> 
                    <div class="clear"></div>   
                </ul>
                </div>
                </div>
                <div class="row">
                <product 
                    :key="item.id"
                    v-bind:id="item.id"
                    :name="item.name" 
                    :price="item.price"
                    :image="item.image"
                    v-for="item in findCategory">
                </product>
                </div>
            </div> 
        </section>
    </div>
    
</template>

<script>
	import Product from '../products/Product.vue';
    import Sidebar from '../layouts/sidebar.vue';
	export default{
		name:'showCategory',
		components:{
            Product,
            Sidebar
        },
		created() {
	      this.categoryName = this.$route.params.categoryName;

	    },
	    data(){
	      return{
	        categoryName:null
	      } 
	    },
	    computed:{
      		findCategory(){
	    		return this.$store.getters.findCategory(this.categoryName)
	    	}
	  	}
	}
</script>