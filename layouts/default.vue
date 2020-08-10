<template>
  <div id="app">
    <loading :active.sync="loading" color="#689f38" loader="bars" />
    <notifications position="top center">
      <template slot="body" slot-scope="props">
        <div :class="props.item.type">
          <a class="title">
            {{ props.item.title }}
          </a>
          <a class="close" @click="props.close">
            <font-awesome-icon icon="times" />
          </a>
        </div>
      </template>
    </notifications>
    <nuxt />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
