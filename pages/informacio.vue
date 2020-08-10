<template>
  <main>
    <schedule-header :active="4" title="Információ" />
    <div id="info">
      <h1>Salgótarján helyi járati menetrend alkalmazás</h1>
      <p>
        Az alkalmazás a <a target="_blank" href="https://www.volanbusz.hu/hu/menetrendek/helyi-jaratok/salgotarjan">Volánbusz honlapján</a> elérhető adatokat tartalmazza
        <br>
        Menetrend érvényes 2019. 04. 15-től
      </p>
      <small v-if="info">v{{ info.version }} - {{ info.buildTime }}</small>
      <p>hibabejelentés: info [kukac] floppylab [pont] com</p>
      <p>2020 <a href="https://floppylab.com">floppylab</a></p>
    </div>
  </main>
</template>

<script>

import ScheduleHeader from '../components/ScheduleHeader'

export default {
  name: 'Information',
  components: {
    ScheduleHeader
  },
  computed: {
    info () {
      return this.$store.getters.info
    }
  },
  created () {
    this.$store.dispatch('getInfo')
  }
}
</script>

<style lang="scss" scoped>

  @import '~assets/variables.scss';

  #info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    text-align: center;
  }

  small {
    font-weight: 400;
  }

</style>
