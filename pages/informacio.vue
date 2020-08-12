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
      <p>hibabejelentés: <a href="mailto:info@floppylab.com?subject=hibajelent%C3%A9s%20-%20Salg%C3%B3tarj%C3%A1n%20menetrend%20alkalmaz%C3%A1s&body=Kedves%20Fejleszt%C5%91k!%0AAz%20al%C3%A1bbi%20hib%C3%A1t%20tal%C3%A1ltam%2C%20k%C3%A9rem%20jav%C3%ADt%C3%A1s%C3%A1t%3A%0A%0AK%C3%B6sz%C3%B6nettel%2C">info@floppylab.com</a></p>
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
