<template>
  <main>
    <schedule-header />
    <p id="marker">Salgótarján menetrend</p>
    <schedule-map :center="[longitude, latitude]" :zoom="zoom" />
    <!--<div id="location-button" @click="locateUser">-->
    <!--<font-awesome-icon icon="location-arrow" size="2x" />-->
    <!--</div>-->
  </main>
</template>

<script>

import ScheduleMap from '../components/ScheduleMap'
import ScheduleHeader from '../components/ScheduleHeader'

export default {
  name: 'Map',
  components: {
    ScheduleHeader,
    ScheduleMap
  },
  data () {
    return {
      longitude: 19.805028,
      latitude: 48.103046,
      zoom: 14
    }
  },
  computed: {
    stops () {
      return this.$store.getters.stops
    }
  },
  created () {
    this.$store.dispatch('getStops')
    this.$store.dispatch('getLines')
  },
  methods: {
    /*
    goToPosition (position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.zoom = 18
    },
    locateUser () {
      if (process.client || process.browser) {
        // console.log(navigator.geolocation)
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.goToPosition)
        }
      }
    }
    */
  }
}
</script>

<style>

  #marker {
    position: absolute;
    top: -2000px;
    left: -2000px;
  }

  #marker::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 20px;
    content: '\f04b';
  }

  /*
  #location-button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #678fa6;
    z-index: 10000;
  }
  */

</style>
