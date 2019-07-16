
const RogueData = require('../assets/products.json')
export default {
  
  state: {
    productsData   : [...RogueData],
    checkedFilters : {
      brand      : [],
      promotions : [],
    },
  },

  actions: {},

  getters: {
    /**
     * Returns filtered products
     * @param  {object} state
     * @return {array}
     */
    productFilter(state){
      let filters = [...state.checkedFilters]
      const data = [...state.productsData]
      let filteredData = []
      let newData = []
      filters.map( filter => {
        filteredData = data.filter( product => product.brand === filter || product.promotions.includes(filter))
        newData = newData.concat(filteredData)
      })
    
      return newData
    },
    /**
     * Return state.productsData array
     * @param  {object} state
     * @return {array}
     */
    getRogueProducts: (state) => {
      return state.productsData
    },
  },

  mutations: {
    /**
     * Handle state.checkedFilters add/remove of filters
     * @param  {string} filter
     * @return {array} state.checkedFilters
     */
    updateCheckedFilters: (state, filter) => {
      let filters = [...state.checkedFilters]
      if(filters.includes(filter)){
        const index = filters.indexOf(filter)
        filters.splice(index,1)
      } else{
        filters = filters.concat(filter)
      }
  
      return state.checkedFilters = [...filters]  
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
