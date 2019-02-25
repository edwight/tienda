import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('access_token') || null,
    inCart: [],
    forSale: [
        {
          id: 1,
          name: 'COBOL 201 vintage',
          image: '/img/w1.jpg',
          images:[
            {thumbnail:'/img/w1.jpg'},
            {thumbnail:'/img/w2.jpg'},
            {thumbnail:'/img/w3.jpg'},
            {thumbnail:'/img/w4.jpg'},
          ],
          category_id:2,
          proveedor_id:1,
          description: 'Learn COBOL with this vintage programming book',
          price: 399,
          stock: 23,
        },
        {
          id: 2,
          name: 'COBOL 401 vintage',
          image: '/img/w4.jpg',
          images:[
            {thumbnail:'/img/nuggets-de-pollo.jpg'},
            {thumbnail:'/img/nuggets-pollo.jpg'},
          ],
          category_id:2,
          proveedor_id:1,
          description: 'Learn COBOL with this vintage programming book',
          price: 39,
          stock: 23,
        },
        {
          id: 3,
          name: 'COBOL 101 vintage',
          image: '/img/w5.jpg',
          images:[
            {thumbnail:'/img/nuggets-de-pollo.jpg'},
            {thumbnail:'/img/nuggets-pollo.jpg'},
          ],
          category_id:2,
          proveedor_id:1,
          description: 'Learn COBOL with this vintage programming book',
          price: 399,
          stock: 23,
        },
        {
          id: 'cc919e21-ae5b-5e1f-d023-c40ee669532a',
          name: 'Mortadela 500g',
          image: '/img/w2.jpg',
          images:[
            {thumbnail:'/img/w2.jpg'},
          ],
          category: 'camisas',
          description: 'Learn COBOL with this vintage programming book',
          price: 399,
          stock: 13,
        },
        {
          id: 'ab129e21-aecb-5e1f-d023-c40ee669532a',
          name: 'Mortadela 900g',
          image: '/img/w6.jpg',
          images:[
            {thumbnail:'/img/w2.jpg'},
          ],
          category: 'camisas',
          description: 'Learn COBOL with this vintage programming book',
          price: 399,
          stock: 13,
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
          name: 'Sharp C2719 curved TV',
          image: '/img/w3.jpg',
          images:[
            {thumbnail:'/img/paisa.jpg'},
            {thumbnail:'/img/quesoblanco2.jpg'},
            {thumbnail:'/img/queso-fresco.jpg'},
          ],
          category: 'zapatos',
          description: 'Watch TV like never before with the brand new curved screen technology',
          price: 1995
        },
        {
          id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
          name: 'Remmington X mechanical keyboard',
          image: '/img/Salchipollo-300x300.png',
          category: 'zapatos',
          description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
            'features tactile, clicky switches for speed and accuracy',
          price: 595
        }
    ],
  },
  getters:{
    loggedIn(state){
        return state.token != null
    },
    allProducts: state => state.forSale, // would need action/mutation if data fetched async
    getUser: state => state.getUser,
    findProduct: (state) => (productId) => {
      return state.forSale.find(forSale => forSale.id === productId)
    },
    findCategory: (state) => (categoryName) => {
      return state.forSale.filter(forSale => forSale.category === categoryName)
    },
    getNumberOfProducts: state => (state.forSale) ? state.forSale.length : 0,
    cartProducts: state => {
      return state.inCart.map(({ id, quantity }) => {
          const product = state.forSale.find(p => p.id === id)
          return {
              name: product.name,
              price: product.price,
              quantity
          }
      })
    }
  },
  mutations: {
    RETRIEVE_TOKEN(state,token){
      state.token = token
    },
    DESTROY_TOKEN(state){
        state.token = null
    },
    ADD_TO_CART(state,id){
        //state.inCart.push(invId);
       const record = state.inCart.find(p => p.id === id)

        if (!record) {
          state.inCart.push({
            id,
            quantity: 1
          })
        } else {
          record.quantity++
        }
    },
    REMOVE_FROM_CART(state,index){
        state.inCart.splice(index, 1)
    },
    
  },
  actions: {
    destroyToken(context){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      if(context.getters.loggedIn){
          return new Promise((resolve,reject)=>{
            axios.get('/auth/logout')
            .then(response=>{
              console.log('logout')
              localStorage.removeItem('access_token')
              context.commit('DESTROY_TOKEN')
              resolve(response);
            })
            .catch(error=>{
              console.log(error.response)
              localStorage.removeItem('access_token')
              context.commit('DESTROY_TOKEN')
              reject(error)
            })
          });
      }
    },
    retrieveToken(context,credentials){
      return new Promise((resolve,reject)=>{
        axios.post('/auth/login',{
          email:credentials.email,
          password:credentials.password,
        })
        .then(response=>{
          const token = response.data.access_token;
          localStorage.setItem('access_token',token);
          context.commit('RETRIEVE_TOKEN',token)
          resolve(response);
        })
        .catch(error=>{
          console.log(error.response);
          reject(error)
        })
      });
        
    },
    //aciones para productos
    saveProduct(context,credentials){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      return new Promise((resolve,reject)=>{
        axios.post('/auth/products',{
          name:credentials.name,
          description:credentials.description,
          price:credentials.price,
          stock:credentials.stock,
          proveedor_id:credentials.proveedor_id,
          category_id:credentials.category_id,
        })
        .then(response=>{
          //ADD_PRODUCT TO STATE 
          //context.commit('RETRIEVE_TOKEN',token)
          resolve(response);
        })
        .catch(error=>{
          console.log(error.response);
          reject(error)
        })
      });
        
    },
    editProduct(context,credentials){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      return new Promise((resolve,reject)=>{
        console.log(credentials)
        let id = credentials.productId
        axios.put('/auth/products/'+id,{
          name:credentials.name,
          description:credentials.description,
          price:credentials.price,
          stock:credentials.stock,
          proveedor_id:credentials.proveedor_id,
          category_id:credentials.category_id,
        })
        .then(response=>{
          //ADD_PRODUCT TO STATE 
          //context.commit('RETRIEVE_TOKEN',token)
          resolve(response);
        })
        .catch(error=>{
          console.log(error.response);
          reject(error)
        })
      });
        
    },
    getProductsAll(context){

    },
    //lista de productos en el index 
    ProductList(context){
        return new Promise((resolve,reject)=>{
          axios.get('/products')
          .then(response=>{
          resolve(response);
          })
          .catch(error=>{
          console.log('error')
          //console.log(error.response);
          reject(error)
          })
        });
    },
    getUserAll(context){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      if(context.getters.loggedIn){
        return new Promise((resolve,reject)=>{
        axios.get('/auth/users')
        .then(response=>{
          //console.log('success')
          //console.log(response.data)
          //context.getters.getUser = response.data
          //context.commit('RETRIEVE_TOKEN',token)
          resolve(response);
        })
        .catch(error=>{
          console.log('error')
          //console.log(error.response);
          reject(error)
        })
        });
      }
    },
    
    getCategoryAll(context){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      if(context.getters.loggedIn){
        return new Promise((resolve,reject)=>{
        axios.get('auth/category')
        .then(response=>{
          //console.log('success')
          //console.log(response.data)
          //context.getters.getUser = response.data
          //context.commit('RETRIEVE_TOKEN',token)
          resolve(response);
        })
        .catch(error=>{
          console.log('error')
          //console.log(error.response);
          reject(error)
        })
        });
      }
    },
    getCategoryfind(context,id){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      if(context.getters.loggedIn){
        return new Promise((resolve,reject)=>{
        axios.get('auth/category/'+id)
        .then(response=>{
          //console.log('success')
          //console.log(response.data)
          //context.getters.getUser = response.data
          //context.commit('RETRIEVE_TOKEN',token)
          resolve(response);
        })
        .catch(error=>{
          console.log('error')
          //console.log(error.response);
          reject(error)
        })
        });
      }
    },
    editCategory(context,credentials){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
      return new Promise((resolve,reject)=>{
        //console.log(credentials)
        let id = credentials.categoryId
        axios.put('/auth/category/'+id,{
          name:credentials.name,
          description:credentials.description,
        })
        .then(response=>{
          //ADD_PRODUCT TO STATE 
          //context.commit('RETRIEVE_TOKEN',token)
          console.log(response);
          resolve(response);
        })
        .catch(error=>{
          console.log(error.response);
          reject(error)
        })
      });
        
    },
    addToCart(context, id){
        context.commit('ADD_TO_CART', id)
    },
    removeFromCart(context, index){
        context.commit('REMOVE_FROM_CART',index)
    }
  }
})
