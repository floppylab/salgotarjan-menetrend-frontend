<template>
  <main>
    <schedule-header :active="1" title="Indulások" />
    <div class="scrollable">
      <form>
        <div class="form-group">
          <label>nap</label>
          <date-picker v-model="date" format="yyyy. MM. dd." :language="hu" :open-date="new Date()" monday-first />
        </div>
        <div class="form-group">
          <label>járat</label>
          <select v-model="line">
            <option v-for="l in lines" :key="l.id" :value="l.id">
              {{ l.number }} - {{ l.description }}
            </option>
          </select>
        </div>
      </form>
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
        <p v-if="date && line">
          Nem indul járat ezen a napon.
        </p>
      </div>
    </div>
  </main>
</template>

<script>

import { hu } from 'vuejs-datepicker/dist/locale'

import ScheduleHeader from '../../components/ScheduleHeader'
import Departure from '../../components/Departure'

export default {
  name: 'Departures',
  components: {
    Departure,
    ScheduleHeader
  },
  data () {
    return {
      hu,
      date: new Date(),
      line: null
    }
  },
  computed: {
    lines () {
      return this.$store.getters.lines
    },
    departures () {
      return this.$store.getters.lineDepartures
    }
  },
  watch: {
    date (val) {
      if (val && this.line != null) {
        this.getDepartures()
      }
    },
    line (val) {
      if (val && this.date != null) {
        this.getDepartures()
      }
    }
  },
  created () {
    this.$store.dispatch('getLines')
    this.$store.commit('setLineDepartures', [])
  },
  methods: {
    hourDepartures (hour) {
      return this.departures.filter(d => d.time.startsWith(('0' + hour).slice(-2)))
    },
    getDepartures () {
      this.$store.dispatch('getLineDepartures', { lineId: this.line, date: this.$moment(this.date).format('YYYY-MM-DD') })
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '~assets/variables.scss';

  .scrollable {
    height: 100%;
    max-width: $max-page-width;
    margin: 0 auto;
    width: 100%;
  }

  form {
    display: flex;
    padding: 0.5rem;
    flex-wrap: wrap;
    margin: 0.5rem;
    align-items: stretch;
  }

  form > .form-group {
    flex-grow: 1;
    margin: 0.5rem;
    max-width: 100%;
  }

</style>
