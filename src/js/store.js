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


  mutations: {

    updateCheckedFilters: (state, filter) => {
      state.checkedFilters = [...state.checkedFilters, filter]
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
