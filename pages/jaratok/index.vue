<template>
  <main>
    <schedule-header :active="2" title="Járatok" />
    <div class="scrollable">
      <info-line v-for="(line, index) in lines" :key="index" :number="line.number" :text="line.description" @click.native="goTo('/jaratok/' + line.id)" />
    </div>
  </main>
</template>

<script>

import ScheduleHeader from '../../components/ScheduleHeader'
import InfoLine from '../../components/InfoLine'

export default {
  name: 'Lines',
  components: {
    InfoLine,
    ScheduleHeader
  },
  computed: {
    lines () {
      const lineList = [...this.$store.getters.lines]
      if (!lineList) { return [] }
      lineList.sort((a, b) => a.number.localeCompare(b.number, 'en', { numeric: true }))
      return lineList
    }
  },
  created () {
    this.$store.dispatch('getStops')
    this.$store.dispatch('getLines')
  },
  methods: {
    goTo (link) {
      this.$router.push(link)
    }
  }
}
</script>
