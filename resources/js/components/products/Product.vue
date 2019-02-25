<template>
  <div class="item col-lg-2 col-md-3 col-sm-4 col-6">
    <div class="content_box">
      <router-link :to="{ name: 'details', params: {productId: id } }">
        <div class="picture">
          <img :src="image[0].small" class="img-thumbnail" alt=""/>
        </div>
        <h4>{{name}}</h4>
      </router-link>
    </div>
    <p>It is a long established fact that a reader</p>
         Rs. {{price}}
  </div>
</template>
<script>
  export default{
    name:'Product',
    props:['id','name', 'price','image'],
    methods:{
      addToCart(id){
        this.$store.dispatch('addToCart',id);
      }
    }
  }
</script>

<style>

</style>