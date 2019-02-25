<template>
  <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Carrito de Compra</h5>
            <button class="close" data-dismiss="modal">&times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in products" v-bind:key="item.id">
                   <td>{{item.name}}</td>
                   <td>{{item.price}}</td>
                   <td>{{item.quantity}}</td>
                   <td><button class="btn btn-danger" @click="removeFromCart(index)">X</button></td>
                </tr>
                <tr>
                   <th>Total</th>
                   <th>{{total}}</th>
                   <th></th>
                   <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Guardar shopping</button>
            <button class="btn btn-primary">Pagar</button>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default{
    name:'shoppingCart',
    methods:{
      removeFromCart(index){
        this.$store.dispatch('removeFromCart',index)
      }
    },
    computed:{
      products(){
          return this.$store.getters.cartProducts;
      },
      total(){
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      } 
    }
  }
</script>