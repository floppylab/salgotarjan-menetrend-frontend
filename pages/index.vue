<template>
  <main>
    <schedule-header />
    <schedule-map :center="[longitude, latitude]" :zoom="zoom" />
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
  created () {
    this.$store.dispatch('getStops')
    this.$store.dispatch('getLines')
    if (process.client) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.goToPosition)
      }
    }
  },
  mounted () {

  },
  methods: {
    goToPosition (position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.zoom = 18
    }
  }
}
</script>
