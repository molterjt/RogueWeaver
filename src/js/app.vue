<template lang='pug'>
  div
    rogue-header
    router-view
</template>

<style lang="scss">
  @import "../scss/variables";

  .main-wrapper {
    margin: 0 auto;
    padding: 1em;
    max-width: $max-width;
  }
</style>
