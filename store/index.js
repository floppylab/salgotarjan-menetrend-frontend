import Vue from 'vue'

export const state = () => ({
  stops: [],
  lines: [],

  lineDepartures: [],

  upcoming: [],

  loading: 0,

  info: null,

  apiEndPoint: process.env.API_BASE_URL || 'http://localhost:8098/api'
  // apiEndPoint: 'https://guide-kmk-backend-prod.herokuapp.com/api'
})

export const mutations = {
  setInfo (state, info) {
    state.info = info
  },
  setLines (state, lines) {
    state.lines = lines
  },
  setStops (state, stops) {
    state.stops = stops
  },
  setUpcoming (state, upcoming) {
    state.upcoming = upcoming
  },
  setLineDepartures (state, lineDepartures) {
    state.lineDepartures = lineDepartures
  },
  loading (state, isLoading) {
    state.loading += (isLoading ? 1 : -1)
  }
}

export const actions = {
  getInfo (context) {
    this.$axios.get('/info')
      .then(function (response) {
        context.commit('setInfo', response.data)
      })
  },
  getStops (context) {
    if (context.getters.stops.length > 0) { return }

    this.$axios.get('/stops')
      .then((response) => {
        context.commit('setStops', response.data)
      })
  },
  getLines (context) {
    if (context.getters.lines.length > 0) { return }

    this.$axios.get('/lines')
      .then((response) => {
        context.commit('setLines', response.data)
      })
  },
  getUpcomingDepartures (context, stopId) {
    this.$axios.get(`/stops/${stopId}/upcoming`)
      .then((response) => {
        context.commit('setUpcoming', response.data)
      })
  },
  getLineDepartures (context, { lineId, date }) {
    this.$axios.get(`/lines/${lineId}/departures?date=${date}`)
      .then((response) => {
        context.commit('setLineDepartures', response.data)
      })
  },
  getLineDeparturesToday (context, lineId) {
    this.$axios.get(`/lines/${lineId}/departures`)
      .then((response) => {
        context.commit('setLineDepartures', response.data)
      })
  },
  notifySuccess () {
    Vue.notify({
      type: 'notification notification-success',
      duration: 3000,
      title: 'sikeres művelet!'
    })
  },
  clearNotifications () {
    Vue.notify({
      clean: true
    })
  }
}

export const getters = {
  info: state => state.info,

  stops: state => state.stops,
  lines: state => state.lines,
  upcoming: state => state.upcoming,
  lineDepartures: state => state.lineDepartures,

  loading: state => state.loading > 0,
  apiEndPoint: state => state.apiEndPoint
}
