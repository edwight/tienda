import Home from './components/Home.vue';
import Signup from './components/auth/Signup.vue';
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';
import Dashboard from './components/Dashboard.vue';
import Detail from './components/products/Details.vue';
import GetUsers from './components/dashboard/GetUsers.vue';
import Dproducts from './components/dashboard/Dproducts.vue';
import CreateProduct from './components/dashboard/CreateProduct.vue';
import EditProduct from './components/dashboard/EditProduct.vue';
import showCategory from './components/category/showCategory.vue';
import Dcategories from './components/dashboard/Category/Dcategories.vue';
import DeditCategory from './components/dashboard/Category/DeditCategory.vue';
import Dstats from './components/dashboard/Stats/Dstats.vue';


export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
        meta:{
            requiresVisitor:true
        }
	},
	{
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: {
            requiresVisitor:true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresVisitor:true
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta:{
            requiresAuth:true
        }
    },
    {
      path: '/details/:productId',
      name: 'details',
      component: Detail,
      meta: {
            requiresVisitor:true
        }
    },
    {
      path: '/categoria/:categoryName',
      name: 'showCategory',
      component: showCategory,
      meta: {
            requiresVisitor:true
        }
    },
    {
      path: '/dashboard/categoria/',
      name: 'Dcategories',
      component: Dcategories,
      meta: {
            requiresVisitor:true
        }
    },
    {
      path: '/dashboard/categoria/:categoryId',
      name: 'DeditCategory',
      component: DeditCategory,
      meta: {
            requiresVisitor:true
        }
    },
    {
      path: '/dashboard/users',
      name: 'getUsers',
      component: GetUsers,
      meta: {
            requiresAuth:true
        }
    },
    {
      path: '/dashboard/metricas',
      name: 'Dstats',
      component: Dstats,
      meta: {
            requiresAuth:true
        }
    },
    {
      path: '/dashboard/product',
      name: 'Dproducts',
      component: Dproducts,
      meta: {
            requiresAuth:true
        }
    },
    {
      path: '/dashboard/product/create',
      name: 'createProduct',
      component: CreateProduct,
      meta: {
            requiresAuth:true
        }
    },
    {
      path: '/dashboard/product/:productId',
      name: 'editProduct',
      component: EditProduct,
      meta: {
            requiresAuth:true
        }
    },
    { 
        path: '/dashboard', 
        name: 'dashboard',
        component: Dashboard,
        meta:{
            requiresAuth:true
        } 
        //beforeEnter: requireAuth 
    },
]

