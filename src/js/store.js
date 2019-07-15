import Axios from 'axios'


const RogueData = require('../assets/products.json')
export default {
  
  state: {
    productsData: [...RogueData],
  
    checkedFilters: {
      brand      : [],
      promotions : [],
    },
  },


  actions: {
    loadProductData ({commit}){
      Axios.get('/Users/jeffreymolter/Vue-Projects/front-end-dev-test-2/src/assets/products.json')
        .then( r => r.data)
        .then(loadedProducts => {
          commit('SET_PRODUCTS', loadedProducts)
        })
    },
  },

  getters: {
    filterMe: (state) => {
      let filters = [...state.checkedFilters]
      let productList = [...state.productsData]
    
      filters.map( promo => (
        productList = productList.filter( product => {
          product.promotions.includes(promo) 
        })
      ))
      state.productsData = productList
      
      return state.productsData
    },
  
    getProductsByFilter: (state) => (filter) => {
      return state.productsData.filter(item => item.brand === filter)
    },

    getRogueProducts: (state) => {
      return state.productsData
    },
  },


  mutations: {


    filterProducts: (state) => {
      let brandFilters = [...state.checkedFilters.brand]
      let promoFilters = [...state.checkedFilters.promotions]
      let productList = [...state.productsData]
      brandFilters.map( brand => (
        productList = productList.filter(product => product.brand === brand )
      ))
      promoFilters.map( promo => (
        productList = productList.filter( product => product.promotions.includes(promo))
      ))
      
      return state.productsData = [...productList]
    },

   

    filtering: (state, filter) =>{
      let filtered = [...state.productsData]
      filtered.filter( product => {
        product.brand === filter || product.promotions.includes(filter)
      })
      
      return state.productsData = [...filtered]


    },

    updateCheckedFilters: (state, filter) => {
      let filters = [...state.checkedFilters]
      filters.push(filter)
      state.checkedFilters = [...filters]
    },


    productFilter(state,filter){
      if(!filter) {
        return state.productsData
      } else {
        return state.productsData.filter(product => product.brand === filter)
      }
     
    },

    SET_PRODUCTS (state, products){
      state.productsData = products
    },


    /**
     * Set productsData
     * @param  {object} state
     * @param  {array} sentProductData
     */
    setProductData(state, sentProductData = []) {
      state.productsData = sentProductData
    },

    /**
     * Reset sent filter array
     * @param  {object} state
     * @param  {string} sentFilter
     */
    resetFilterGroup(state, sentFilter) {
      state.checkedFilters[sentFilter].length = 0
    },

    /**
     * Replace placeholder image with real one
     * @param  {object} context
     * @param  {string} index
     */
    replacePlaceholder(state, index) {
      state.productsData[index].placeholder = state.productsData[index].image
    },
  },
}
