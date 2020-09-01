<template>
  <main>
    <schedule-header :active="3" title="Megállók" />
    <div class="scrollable">
      <info-line v-for="(stop, index) in stops" :key="index" :text="stop.name" :lines="uniqueAndSort(stop.lines)" @click.native="goTo('/megallok/' + stop.id)" />
    </div>
  </main>
</template>

<script>

import ScheduleHeader from '../../components/ScheduleHeader'
import InfoLine from '../../components/InfoLine'

export default {
  name: 'Stops',
  components: {
    InfoLine,
    ScheduleHeader
  },
  computed: {
    stops () {
      if (this.$store.getters.stops.length === 0 || this.$store.getters.lines.length === 0) { return [] }
      return this.$store.getters.stops.concat().sort((a, b) => a.name.localeCompare(b.name))
    }
  },
  created () {
    this.$store.dispatch('getStops')
    this.$store.dispatch('getLines')
  },
  methods: {
    goTo (link) {
      this.$router.push(link)
    },
    line (id) {
      return this.$store.getters.lines.find(line => line.id === id)
    },
    uniqueAndSort (lines) {
      let lineList = [...lines]
      if (!lineList) { return [] }
      lineList = lineList.map(line => line.number)
      lineList = [...new Set(lineList)]
      lineList.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
      return lineList
    }
  }
}
</script>
