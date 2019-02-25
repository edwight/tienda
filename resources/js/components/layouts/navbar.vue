<template>
    <div>
        <nav class="menu">
            <div class="navbar">
               <li>
                    <a href="index.html">Home</a>
                </li> 
                <li v-if="!loggedIn" class="nav-item">
                    <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
                </li>
                <li v-if="!loggedIn" class="nav-item">
                     <router-link :to="{ name: 'signup' }" class="nav-link">Register</router-link>
                </li>
                <li v-if="loggedIn" class="nav-item">
                    <router-link :to="{ name: 'logout' }" class="nav-link">layout</router-link>           
                </li>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a class="btn btn-success btn-sm ml-3" data-toggle="modal" href="#" data-target="#shoppingCart">
                        <i class="fa fa-shopping-cart"></i> Cart
                        <span class="badge badge-light">{{length}}</span>
                    </a>
                </li>
            </div>
            
        </nav>
        <shoppingCart></shoppingCart> 
    </div>
    
</template>
<script>
    import shoppingCart from '../products/shoppingCart.vue';
    export default{
        name:'navbar',
        components:{
            shoppingCart
        },
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn;
            },
            length(){ 
                let cart = this.$store.getters.cartProducts;
               return cart.reduce((accum, item) => accum + item.quantity, 0 )
            },
        }
    }
</script>
<style>
.menu{
    list-style: none;
}
.menu .navbar li>a{
    color: #555;
    
    float: left;
    padding: 8px 20px;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1em;
    -webkit-transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
</style>
