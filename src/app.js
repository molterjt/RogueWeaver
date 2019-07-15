//Base imports
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

//Plugins
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, Axios)

//Main Vue
import App from './js/app.vue'

//Vuex store
import Store from './js/store'

//Pages
import Instructions from './js/pages/instructions.vue'
import Products from './js/pages/products.vue'


//Components
Vue.component('rogue-header', () => import('./js/components/header.vue'))
Vue.component('filters', () => import('./js/components/filters.vue'))
Vue.component('product', () => import('./js/components/product.vue'))
Vue.component('productList', () => import('./js/components/productList.vue'))


//Router
const routes = [
  { path: '/', component: Instructions, name: 'Instructions' },
  { path: '/products', component: Products, name: 'Products' },
  
]

const router = new VueRouter({
  routes,
  mode                 : 'history',
  linkExactActiveClass : 'active',
})

//Vue instance
new Vue({
  el     : '#app',
  router,
  store  : new Vuex.Store(Store),
  render : h => h(App),
  
})
