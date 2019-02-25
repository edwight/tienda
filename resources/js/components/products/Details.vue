<template> 
  <div class="row main">
      <aside class="col-md-3">
          <div class="sidebar">
              <h3 class="title">Category</h3>
              <ul>
                  <li><a href="women.html">women</a></li>
                  <li><a href="#">new arrivals</a></li>
                  <li><a href="#">trends</a></li>
                  <li><a href="#">boys</a></li>
                  <li><a href="#">girls</a></li>
                  <li><a href="#">sale</a></li>
              </ul>
          </div>
      </aside>
      <section class="col-md-9">
          <div class="container details">
            
              <div class="row">
                <div class="row details--main">
                  <div class="col-sm-6 col-md-5 col-lg-4">
                    <ul class="details-figure">
                      <li>
                        <img :src="findProduct.image" class="img-thumbnail" alt=""/>
                      </li>
                    </ul>
                    
                  </div>
                  <div class="col-sm-6 col-md-7 col-lg-8">
                    <div class="details-pricipal"> 
                      <h3>soluta nobis eleifend option</h3>
                      <p>Rs. 999 <a href="#">click for offer</a></p>
                      <div class="details-thumbnail">
                        <h4>related styles :</h4>
                        <ul>
                          <li v-for="images in findProduct.images">
                            <a href="#">
                              <img :src="images.thumbnail" class="img-thumbnail" alt=""/>
                            </a>
                          </li>
                        </ul>   
                      </div>
                      <div class="product_rassurance">
                            <ul class="list-inline">
                                <li class="list-inline-item"><i class="fa fa-truck fa-2x"></i><br/>Fast delivery</li>
                                <li class="list-inline-item"><i class="fa fa-credit-card fa-2x"></i><br/>Secure payment</li>
                                <li class="list-inline-item"><i class="fa fa-phone fa-2x"></i><br/>+33 1 22 54 65 60</li>
                            </ul>
                        </div>
                      <div class="btn-buy">
                        <a @click="addToCart()" href="#" class="btn btn-success btn-lg btn-block text-uppercase">
                          <i class="fa fa-shopping-cart"></i> Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="details--description">
                  <h6>Details</h6>
                  <p class="description-prod">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option</p>
                </div>
              </div>
          </div> 
      </section>
  </div>
</template>
<script>
  export default{
    name:'Details',
    created() {
      this.productId = this.$route.params.productId;

    },
    data(){
      return{
        productId:null
      } 
    },
    methods:{
      addToCart(){
        this.$store.dispatch('addToCart',this.productId);
      },
    },
    computed:{
      findProduct(){
        return this.$store.getters.findProduct(this.productId)
      }
    }
  }
</script>
<style>

.details--description {
    padding: 3% 0 4%;
}
.details--description h6{
    background: #F3F3F3;
    padding: 10px;
    color: #333;
    font-size: 1.2em;
}


p.description-prod {
    color: #888;
    padding-top: 2%;
    font-size: 0.89em;
    line-height: 1.5em;
}
.details-pricipal h3 {
    color: #333333;
    font-size: 1.4em;
    text-transform: capitalize;
}
.details-pricipal p {
    margin-top: 2%;
    font-size: 1.8em;
    color: #00405d;
    line-height: 1.8em;
    -webkit-text-stroke: 1.5px;
    text-shadow: 0 1px 0 #ffffff;
    letter-spacing: 1px;
}
.details-thumbnail{
    margin: 6% 0;
}
.details-thumbnail h4{
    line-height: 1.8em;
    font-size: 1em;
    color: #555555;
    text-transform: uppercase;
    margin-bottom: 4%;
}
.details-thumbnail li{
    display: inline-block;
    width: 20.33333%;
    margin-left: 4%;
}
.details-figure{
  padding: 0;
}
.details-figure ul{
  padding: 0;
}
.details-figure li{
  list-style: none;
}


.details-figure li img{
  width: 100%
}





.product_rassurance {
    padding: 10px;
    margin-top: 15px;
    background: #ffffff;
    border: 1px solid #6c757d;
    color: #6c757d;
}
.product_rassurance .list-inline {
    margin-bottom: 0;
    text-transform: uppercase;
    text-align: center;
}
.product_rassurance .list-inline li:hover {
    color: #343a40;
}

</style>