<template>
  <main>
    <schedule-header :title="stop ? stop.name : null" :active="3" />
    <div v-if="upcoming.length > 0" class="scrollable">
      <info-line
        v-for="(departure, index) in upcoming"
        :key="index"
        :number="line(departure.line).number"
        :text="line(departure.line).description"
        :time="departure.time.slice(0, -3)"
        @click.native="viewDepartureDetails(departure)"
      />
    </div>
    <div v-else id="no-more">
      <p>
        Nem indul ma már több járat.
      </p>
    </div>
  </main>
</template>

<script>
import ScheduleHeader from '../../components/ScheduleHeader'
import InfoLine from '../../components/InfoLine'

export default {
  name: 'Stop',
  components: {
    InfoLine,
    ScheduleHeader
  },
  computed: {
    upcoming () {
      return this.$store.getters.upcoming
    },
    stopId () {
      return parseInt(this.$route.params.id)
    },
    stop () {
      return this.$store.getters.stops.find(stop => stop.id === this.stopId)
    }
  },
  created () {
    this.$store.dispatch('getStops')
    this.$store.dispatch('getLines')
    this.$store.dispatch('getUpcomingDepartures', this.stopId)
  },
  methods: {
    line (id) {
      return this.$store.getters.lines.find(line => line.id === id)
    },
    viewDepartureDetails (departure) {
      this.$router.push(`/indulasok/indulas?line=${departure.line}&time=${departure.departureTime}`)
    }
  }
}
</script>
