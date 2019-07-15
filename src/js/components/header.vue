<template lang='pug'>
  header
    .header-wrapper
      div
        img.logo(src='~Src/assets/rogue-logo.svg')
        p Frontend Dev Test 2
      div
        router-link(
          v-for='(route, i) in this.$router.options.routes'
          :key='i'
          :to='route.path'
        ) {{ route.name }}
</template>

<style lang="scss">
  @import "../../scss/base";

  header {
    background: $black;

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 1.25em;
      max-width: $max-width;

      .logo {
        max-width: 200px;
      }

      p {
        color: $white;
      }

      a {
        display: block;
        color: $white;
        text-align: right;

        @media(min-width: 400px) {
          display: inline-block;

          &:not(:first-of-type) {
            margin-left: 1em;
          }
        }

        &:hover, &:active {
          color: $gray-light;
        }

        &.active {
          color: $red;
        }
      }
    }
  }
</style>
