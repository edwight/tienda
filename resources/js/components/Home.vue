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
                    <h4>Enthecwear - <span>4449 itemms</span> </h4>
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
                    <data>{{products}}</data>
                <product 
                    :key="item.id"
                    v-bind:id="item.id"
                    :name="item.name" 
                    :price="item.price"
                    :image="item.images"
                    v-for="item in getProductsAll">
                </product>
                </div>
            </div> 
        </section>
    </div>
    
</template>
<script>
	import Product from './products/Product.vue';
    import Sidebar from './layouts/sidebar.vue';
	export default{
		name:'home',
		components:{
            Product,
            Sidebar
        },
        created(){
		    this.getProduct();
		},
        data(){
            return{
                getProductsAll:[]
            }
        },
        computed:{
            //products(){ return this.$store.dispatch('ProductList');},
            //products(){ return this.$store.getters.allProducts; },
            length(){ return this.$store.getters.getNumberOfProducts; },
        },
        methods:{
            getProduct(){
                this.$store.dispatch('ProductList')
                .then(response=>{
                    console.log(response.data.data[0].images[0].small)
                    this.getProductsAll = response.data.data
                })
                .catch(error=>{
                    console.log(error.response)
                })
            }
        }
	}
</script>
<style>
.main{
   padding: 2em 0; 
}
.sidebar{
    border: 1px solid #ebebeb;
    padding: 20px;
}
.sidebar h3.title{
    border-bottom: 1px solid #ebebeb;
    padding-bottom: .5em;
}
.sidebar ul{
    padding: 0;
    list-style: none;
}
.sidebar ul li {
    line-height: 1.5em;
}

.stats {
    text-align: left;
    border-bottom: 1px solid #ebebeb;
}
.stats h4 {
    color: #555555;
}

.stats h4 {
    float: left;
    font-size: 1em;
    text-transform: uppercase;
    color: #333333;
}
.stats--nav {
    text-align: right;
    color: #555555;
    font-size: 0.8125em;
    padding: 0;
    list-style: none;
}
.stats--nav li {
    display: inline-block;
}
.stats--nav li a {
    display: block;
    color: #555555;
    text-transform: capitalize;
}

</style>