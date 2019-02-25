require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth'

import store from './store/store'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8000/api';


const router = new VueRouter({
	routes,
	mode: 'history'
});
/*
Vue.router = router;
Vue.use(VueAuth, {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router
/*


Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

*/
router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=> record.meta.requiresAuth)){
        if(!store.getters.loggedIn){
            next({name:'login'})
        }else{
        	next()
        }
    }
    else if(to.matched.some(record=>record.meta.requiresVisitor)){
        if(store.getters.loggedIn){
            //next({name:'dashboard'})
            next()
        }
        else{
            next()
        }      
    }
    else{
        next()
    }
});

const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	}
});