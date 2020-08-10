<template>
  <div class="departure" @click="viewDepartureDetails">
    <div class="number">
      {{ departure.time.slice(0, -3) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Departure',
  props: {
    departure: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    viewDepartureDetails () {
      this.$router.push(`/indulasok/indulas?line=${this.departure.line}&time=${this.departure.time}`)
    }
  }
}
</script>

<style scoped lang="scss">

  @import '~assets/variables.scss';

  .departure {
    display: inline-block;
    margin: 0.2rem 0.5rem 0.2rem 0;
    font-weight: 400;
    font-size: 1rem;
  }

  .number {
    padding: 0.5rem;
    background-color: $tertiary-color;
    color: $default-color;
    max-width: 4rem;
    text-align: center;
    border-radius: 5px;
  }

  .number a {
    color: $default-color !important;
    cursor: pointer;
  }

</style>
