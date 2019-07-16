<template lang="pug">
  a.product(v-if='url' :href='url')
    .product-image-wrapper
      img.hot-deal(v-show='promotions.includes("Hot Deal")' :src='hotDealsImg')
      img.product-image(v-if='image' :src='image')
      img.product-image(v-else :src='placeholder')
    p.product-name {{ name }}
    .product-stars(v-if='rating')
        .star(v-for='n in floorRating(rating)')
          span.star-yellow ★
        .star.star-percentage(v-show='remainingDecimal(rating)')
          span.star-gray ★
          span.star-yellow.percent-star(:style='{ width: calculatePercentageStarWidth(remainingDecimal(rating)) }') ★
        .star(v-for='n in remainingRating(rating)')
          span.star-gray ★
    p.product-price(v-if='!specialPrice')
      span.starting-at(v-show='startingAt') Starting at:&nbsp;
      span.price {{ price | currency }}
    p.product-price(v-else)
      span.price {{ specialPrice | currency }}
      br
      span.old-price {{price | currency }}
</template>

<script>
export default {
 
  props: {
    sku: {type:String, default: "000"},
    name: {type: String, default: ""},
    brand:{type: String, default: ""},
    placeholder:{type:String, default: ""},
    image: {type:String, default:""},
    url: {type:String, default:""},
    price: {type: Number, default: 0},
    rating: {type: Number, default: undefined},
    startingAt: {type: Number, default: 0},
    specialPrice: {type: Number, default: 0},
    promotions: {type: Array, default: []},
  },
  data: () => ({
        // placeholder:'',
        // image: '',
        // name: '',
        // brand: '',
        // url: '',
        //rating: 0.0,
        // price: 0,
        // starRating: 0.0,
        // startingAt: undefined,
        // specialPrice: undefined,
        // promotions: [],
        hotDealsImg: 'https://www.roguefitness.com/skin/frontend/rg/2015/images/matte-black-friday/hot-deal-icon-2015.jpg',
  }),

  methods: {
    /**
     * Return integer from float for yellow stars
     * @param  {float} rating
     * @return {integer}
     */
    floorRating(rating) {
      return Math.floor(rating)
    },

    /**
     * Return remaining stars for gray stars
     * @param  {float} rating
     * @return {integer}
     */
    remainingRating(rating) {
      return Math.abs(Math.floor(5 - rating))
    },

    /**
     * Return remaining decimal for fractional star
     * @param  {float} rating
     * @return {integer}
     */
    remainingDecimal(rating) {
      return parseFloat("." + (rating+"").split(".")[1]) || null
    },

    /**
     * Return percentage width of fractional star
     * @param  {float} rating
     * @return {string}
     */
    calculatePercentageStarWidth(rating) {

      return `${rating*100}%`
    },
  },

  computed:{
    starRating: function(){
      return this.floorRating(rating);

    }
  },

  filters: {
    /**
     * Currency filter for prices (US only)
     * @param  {float} rating
     * @return {string}
     */
    currency(n) {
      return parseFloat(n).toLocaleString('en-US', {
        style    : 'currency',
        currency : 'USD',
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../scss/variables";

.product {
  text-align: center;
  margin: 0;
  max-width: 100%;
  backface-visibility: hidden;
  transform-origin: 10% 50%;
  z-index: 1;

  &, &:hover, &:active, &:visited {
    text-decoration: inherit;
    color: inherit;
  }

  p {
    margin: 0 auto .25em;
    max-width: 190px;
  }

  &-name {
    font-weight: bold;
  }

  &-image-wrapper {
    position: relative;
    margin-bottom: .25em;

    .hot-deal {
      position: absolute;
      top: .25em;
      left: .25em;
    }

    .product-image {
      width: 100%;
      height: 200px;
    }
  }

  &-stars {
    font-size: .9em;
    display: inline-block;
    width: 100%;
    margin: 0 auto .45em;
    vertical-align: middle;
    

    .star {
      display: inline-block;
      position: relative;
      margin: 0;
      padding: 0;

      .percent-star {
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
      }

      span {
        &.star-gray {
          color: $gray-light;
        }

        &.star-yellow {
          color: $yellow;
        }
      }
    }
  }

  &-price {
    font-size: .9em;

    .price {
      color: $green;
      font-weight: bold;
    }

    .starting-at {
      font-size: .8em;
    }

    .old-price {
      font-size: .9em;
      color: gray;
      text-decoration: line-through;
    }
  }

  //animations
  &-move { transition: all 600ms ease-in-out 50ms }
  &-enter-active { transition: all 300ms ease-out }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: -1;
  }

  &-enter,
  &-leave-to { opacity: 0 }
  &-enter { transform: scale(0.9) }
  //animations
}
</style>
