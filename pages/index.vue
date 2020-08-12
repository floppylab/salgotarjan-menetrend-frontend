<template>
  <main>
    <schedule-header />
    <schedule-map v-if="stops" :center="[longitude, latitude]" :zoom="zoom" />
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
  }
}
</script>

<style>

  #location-button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #678fa6;
    z-index: 10000;
  }

</style>
