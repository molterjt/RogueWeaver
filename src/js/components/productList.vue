<template>
  <div class="productContainer" >
    <ol class="productItem" v-for="(x, i) in productData" :key="i">
     
      <product productData
        :name="x.name"
        :brand="x.brand"
        :placeholder="x.placeholder"
        :image="x.image"
        :url="x.url"
        :price="x.price"
        :rating="x.rating"
        :startingAt="x.startingAt"
        :specialPrice="x.specialPrice"
        :promotions="x.promotions"
      /> 
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    productData: Array,
  },
  data: () => ({
    productData: [],
  }),

  //computed properties are cached based on their reactive dependencies.
  //will immediately return the previously computed result without 
  // having to run the function again
  computed:{},
  //a method invocation will always run the function whenever a re-render happens
  // In cases where you do not want caching, use a method instead.
  methods:{  },
  
}
</script>
<style scoped>
  .productContainer{
    display: flex;
    width: 100%;
    flex-direction: 'row';
    flex-flow: row wrap;
    justify-content: baseline;
    align-content: left;
    align-items: baseline;
  }
  .productItem{
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    width: 210px;
    height: auto;
  }
</style>