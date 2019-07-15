<template>
  <div class="topLevelContainer">
      <div class="leftContainer">

        <div class="filterOptions">
          <filters filterKey="brand"  />
        </div>
        <div class="filterOptions">
         <filters filterKey="promotions"   />
          
        </div>
        <p>{{getCheckedFilters}}</p>
      </div>
      <div class="rightContainer">
        <productList :productData="getProductData" />
      </div> 
  </div>
</template>

<script>
import { react } from 'babel-types';

export default {
  data: () => ({
    productData: [],
  }),
  computed: {
    getName () {
      return this.$store.state.myName
    },
    getProductData(){
      return this.$store.state.productsData
    },
    getBrands(){
      return this.$store.state.brandFilters
    },
     getCheckedFilters(){
       if(this.$store.state.checkedFilters.length > 0)
        return this.$store.state.checkedFilters
    },
    getMyData(){
      if(this.$store.state.checkedFilters.promotions.length > 0){
        return this.$store.getters.filteredProducts
      } else{
        return getProductData()
      }
      
      
    }
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
