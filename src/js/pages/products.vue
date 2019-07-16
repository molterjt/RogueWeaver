<template>
  <div class="topLevelContainer">
      <div class="leftContainer">
        <div class="filterOptions">
          <filters filterKey="brand"/>
        </div>
        <div class="filterOptions">
         <filters filterKey="promotions"/>
        </div>
      </div>
      <div class="rightContainer">
        <productList :productData="getFilteredProducts" />
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    productData: [],
  }),
  methods: {},
  computed: {
    /**
     * Return state.checkedFilters
     * @return {array}
     */
    getFilters(){
      return this.$store.state.checkedFilters;
    },
    /**
     * Return state.productData
     * @return {array}
     */
    getProductData(){
      return this.$store.getters.getRogueProducts;
    },
    /**
     * Return filtered product data if filters selected
     * @return {array}
     */
    getFilteredProducts(){
      if(this.getFilters.length > 0){
        return this.$store.getters.productFilter
      }else{
        return this.getProductData;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "../../scss/base";

  .topLevelContainer{
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    align-items: flex-start;
    justify-content: center;
     @media (max-width: 700px) {
        flex-direction: column;
     }
  }

  .leftContainer{
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex:2;
    @media (max-width: 700px) {
        height: 100%;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        flex:1;
     }
  
  }
  .rightContainer{
    flex-direction: column;
    height: 100vh;
    display: block;
    flex: 10;
    align-content: center;
    justify-content: space-evenly;
    overflow: auto;
    @media (max-width: 700px) {
        height: auto;
        overflow: hidden;
    }
  }
  .filterOptions{
    justify-content: center;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 20px;
    flex-direction: column;
    
  }
  
</style>
