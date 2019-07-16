
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

  
    getProductsByFilter: (state) => (filter) => {
      return state.productsData.filter(item => item.brand === filter)
    },

    getRogueProducts: (state) => {
      return state.productsData
    },

    filterProducts: (state) =>{
      if(state.checkedFilters.length > 1 ){
        let filters = [...state.checkedFilters]
        let data = [...state.productsData]
        let newData = []
        filters.map( filter => {
          newData = data.filter(
            product => product.brand === filter || product.promotions.includes(filter)
          )
        })
        state.productsData = [...newData]
        
        return state.productsData

      } else {
        return state.productsData
      }

    },
    

  },

  mutations: {
    
    filterMe: (state, filter) => {
      let data = state.productsData
      let newData = []
      data.filter( product => {
        newData = product.brand === filter || product.promotions.includes(filter)
      })
      
      return state.productsData = [...newData]
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
