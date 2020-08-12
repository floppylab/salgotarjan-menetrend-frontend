<template>
  <main>
    <schedule-header v-if="line" :active="2" :title="line.number + ' ' + line.description" />
    <template v-if="line && stops">
      <div id="line" class="scrollable">
        <div v-if="active === 0">
          <div v-if="departures && departures.length > 0">
            <table>
              <tbody>
                <tr v-for="hour in 19" :key="hour">
                  <th>{{ hour + 3 }}</th>
                  <td>
                    <departure v-for="(departure, index) in hourDepartures(hour + 3)" :key="index" :departure="departure" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else id="no-more">
            <p>Nem indul járat ezen a napon.</p>
          </div>
        </div>
        <div v-if="active === 1">
          <info-line
            v-for="(stopDelay, index) in line.stopDelays"
            :key="index"
            :text="stop(stopDelay.stop).name"
            :time="stopDelay.minutes"
            @click.native="goTo('/megallok/' + stopDelay.stop)"
          />
        </div>
      </div>
      <div id="tabs">
        <div :class="{active: active === 0}" @click="setActive(0)">
          Indulások ma
        </div>
        <div :class="{active: active === 1}" @click="setActive(1)">
          Megállók
        </div>
      </div>
    </template>
  </main>
</template>

<script>

import ScheduleHeader from '../../components/ScheduleHeader'
import InfoLine from '../../components/InfoLine'
import Departure from '../../components/Departure'

export default {
  name: 'LineDetails',
  components: {
    Departure,
    InfoLine,
    ScheduleHeader
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    stops () {
      return this.$store.getters.stops
    },
    lines () {
      return this.$store.getters.lines
    },
    lineId () {
      return parseInt(this.$route.params.id)
    },
    line () {
      return this.$store.getters.lines.find(line => line.id === this.lineId)
    },
    departures () {
      return this.$store.getters.lineDepartures
    }
  },
  created () {
    this.$store.dispatch('getStops')
    this.$store.dispatch('getLines')
    this.$store.dispatch('getLineDeparturesToday', this.lineId)
  },
  methods: {
    setActive (active) {
      this.active = active
    },
    stop (id) {
      return this.$store.getters.stops.find(stop => stop.id === id)
    },
    hourDepartures (hour) {
      return this.departures.filter(d => d.time.startsWith(('0' + hour).slice(-2)))
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '~assets/variables.scss';

  #line {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-width: $max-page-width;
    margin: 0 auto;
    width: 100%
  }

  #line > div:first-child {
    flex-grow: 1;
  }

  #tabs {
    display: flex;
    text-align: center;
    font-size: 0.9rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    justify-content: space-evenly;
  }

  #tabs div {
    background-color: $tertiary-color;
    padding: .5rem;
    padding-top: 0.75rem;
    flex-grow: 1;
  }

  #tabs .active {
    background-color: $background-color;
    color: initial;
  }

</style>
