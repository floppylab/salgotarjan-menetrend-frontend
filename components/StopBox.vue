<template>
  <div class="stop" :style="{'border-color': '#87dfd6'}">
    <nuxt-link :to="'megallok/' + stop.id">
      <p>{{ stop.name }}</p>
      <div class="lines">
        <div v-for="line in stop.lines" :key="line.id" class="number">
          {{ line.number }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'SightBox',
  props: {
    stop: {
      type: Object,
      default: () => {}
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">

  @import '../assets/variables.scss';

    .stop {
      background-color: white;
      border-left: 0.6rem solid;
      margin: 1.1rem 0;
      padding-bottom: .5rem;
  }

  .stop, .stop * {
      cursor: pointer !important;
  }

  p {
    font-weight: normal;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    padding: 1.5rem 0.5rem 0.75rem 0.5rem;
  }

  a, a:hover {
    color: $font-color !important;
  }

  .lines {
    padding-left: 0.5rem;
  }

  .number {
    padding: 0.5rem;
    background-color: $tertiary-color;
    color: $default-color;
    max-width: 4rem;
    text-align: center;
    border-radius: 5px;
    margin: 0.2rem 0.2rem 0.2rem 0;
    display: inline-block;
    width: 100%;
  }

</style>
