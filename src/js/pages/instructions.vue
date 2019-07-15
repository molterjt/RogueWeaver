<template lang='pug'>
  .main-wrapper
    h1 Rogue Frontend Test 2
    br
    h2 Goal
    ul
      li Use the provided code base and established patterns to produce a product page similar to #[a(href='https://frontend-dev-test-2.firebaseapp.com/products' target='blank') this one]
    br
    h2 Success Criteria
    ul
      li Products show
      li Filters show
      li Filters work
      li Mobile First
      li Fully Responsive
      li Code follows established patterns
      li Code is well organized and thoughtful
    br
    h2 Notes
    ul
      li We use HTML, CSS and JS. Show us you can too!
      li This dev stack mirrors ours, which includes:
        ul
          li Webpack
          li Vue
          li Vuex
          li Vue Axios
          li Vue Router
          li SCSS
          li Pug
          li ES6+
      li This boilerplate should give you all the necessary tools you need to complete the exercise
      li Core functionality > Aesthetics
    br
    h2 Resources
    ul
      li The provided data object can be found at: #[pre ./src/assets/products.json]
      ul
        li Please treat this as a REST endpoint and GET accordingly
    br
    h2 Final Thoughts
    ul
      li We're developers. We like building cool stuff and have fun doing it; so should you!
      li We want to know you can solve problems, not define what an IIFE is
      li Work no more than a couple hours; we know your time is valuable
      li Don't worry if you don't finish; we want to see how you think
      li If you have any questions, feel free to reach out
      li Relax, and have some fun with this 🤓
    br
    p
      strong
        i Rogue Frontend - Move Fast and Break Things
</template>

<style lang='scss' scoped>
  pre {
    display: inline-block;
    margin: 0;
  }
</style>
