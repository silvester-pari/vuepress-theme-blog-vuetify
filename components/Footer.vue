<template>
  <div>
    <v-footer class="component-footer d-flex flex-column justify-center">
      <v-container class="d-flex flex-column flex-sm-row">

        <ul class="d-flex flex-wrap mr-auto my-4 my-sm-0">
          <li class="mx-0"><span class="d-flex justify-center">&copy; {{ (new Date()).getFullYear() }} {{ $site.title }}, All rights reserved.</span></li>
          <li v-for="(link, index) in links" :key="index" class="d-flex justify-center mx-0">
            <span class="mx-2">|</span>
            <router-link v-if="link.path" :to="link.path">{{ link.label }}</router-link>
            <a v-else-if="link.url" :href="link.url" target="link.target">{{ link.label }}</a>
          </li>
        </ul>

        <SnsLinks font-size="1.2em" margin-size="0.7em" class="d-flex flex-column justify-center mr-0 mr-sm-5" />

      </v-container>
    </v-footer>

    <component :is="afterFooterComponent" />

  </div>
</template>

<script>
  import Vue from 'vue'
  import SnsLinks from '@theme/components/SnsLinks';

  export default {
    components: {
      SnsLinks,
    },
    created() {
      this.links = this.$themeConfig.footer.links
      this.afterFooterComponent = Vue.component(this.$themeConfig.components.afterFooter)
    },
    data: () => ({
      links: {},
      afterFooterComponent: null,
    }),
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .component-footer.v-footer {
    background-color: $color-brand !important;
    color: white !important;

    ul {
      list-style: none;
      padding-left: 0 !important;

      li {
        a {
          @include unstyled-link;
          color: white !important;
          text-decoration: none !important;
          &:hover {
            text-decoration: underline !important;
          }
        }

        &:not(:last-of-type) {
          margin-right: 1em;
        }
      }
    }
  }
</style>
