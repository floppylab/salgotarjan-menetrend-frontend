<template>
  <main v-if="line && stops.length > 0">
    <schedule-header :active="1" :title="line.number + ' ' + line.description" />
    <div class="scrollable">
      <info-line
        v-for="(stopDelay, index) in line.stopDelays"
        :key="index"
        :text="stop(stopDelay.stop).name"
        :time="calculateStopTime(stopDelay.minutes)"
        @click.native="goTo('/megallok/' + stopDelay.stop)"
      />
    </div>
  </main>
</template>

<script>

import ScheduleHeader from '../../components/ScheduleHeader'
import InfoLine from '../../components/InfoLine'

export default {
  name: 'Departure',
  components: {
    InfoLine,
    ScheduleHeader
  },
  computed: {
    time () {
      return this.$route.query.time
    },
    stops () {
      return this.$store.getters.stops
    },
    line () {
      return this.$store.getters.lines.find(line => line.id === parseInt(this.$route.query.line))
    }
  },
  created () {
    this.$store.dispatch('getLines')
    this.$store.dispatch('getStops')
  },
  methods: {
    stop (id) {
      return this.$store.getters.stops.find(stop => stop.id === id)
    },
    calculateStopTime (minutes) {
      return this.$moment(this.time, 'HH:mm:ss').add(minutes, 'minutes').format('HH:mm')
    },
    goTo (link) {
      this.$router.push(link)
    }
  }
}
</script>
