<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" @click="clickCoordinate = $event.coordinate" @mounted="updateMap">
    <vl-view :zoom.sync="mapZoom" :center="mapCenter" />

    <vl-layer-tile id="osm">
      <vl-source-osm />
    </vl-layer-tile>

    <vl-feature
      v-for="stop in stops"
      :id="'stop' + stop.id"
      :key="stop.id"
      class="stop"
      :properties="{ id: stop.id, name: stop.name, lines: stop.lines }"
    >
      <vl-geom-point :coordinates="[stop.longitude, stop.latitude]" />
      <vl-style-box>
        <vl-style-text :text="'\uf04b'" font="900 20px 'Font Awesome 5 Free'" :rotation="rad(30 + stop.direction)">
          <vl-style-fill :color="'#086972'" />
          <vl-style-fill :color="'#08828b'" />
        </vl-style-text>
      </vl-style-box>
    </vl-feature>

    <vl-interaction-select :features.sync="selectedFeatures">
      <template slot-scope="select">
        <vl-overlay
          v-for="feature in select.features"
          :id="feature.id"
          :key="feature.id"
          :position="pointOnSurface(feature.geometry)"
          :auto-pan="true"
          class="feature-popup"
        >
          <template>
            <div class="selected-feature">
              <stop-box :stop="feature.properties" />
            </div>
          </template>
        </vl-overlay>
      </template>
    </vl-interaction-select>
  </vl-map>
</template>

<script>

import StopBox from './StopBox'

export default {
  name: 'ScheduleMap',
  components: {
    StopBox
  },
  props: {
    center: {
      type: Array,
      default: () => { return [19.805028, 48.103046] }
    },
    zoom: {
      type: Number,
      default: 14
    }
  },
  data () {
    return {
      url: 'https://api.maptiler.com/maps/de13c2b7-2743-4473-ab17-1f93eb5c3eb8/style.json?key=wykXPxOsQENOPcBVxMFS',

      clickCoordinate: undefined,
      selectedFeatures: [],
      mapZoom: null,
      mapCenter: null
    }
  },
  computed: {
    stops () {
      return this.$store.getters.stops
    }
  },
  watch: {
    zoom (val) {
      this.mapZoom = val
    },
    center (val) {
      this.mapCenter = val
    }
  },
  created () {
    this.mapZoom = this.zoom
    this.mapCenter = this.center
  },
  methods: {
    pointOnSurface (geom) {
      return this.$findPointOnSurface(geom)
    },
    rad (degrees) {
      return degrees * (Math.PI / 180)
    },
    updateMap (vm) {
      console.log('uhguhtgth')
      setTimeout(function () {
        vm.$map.updateSize()
      }, 200)
    }
  }
}
</script>

<style scoped>

  .selected-feature {
    width: 20rem;
    cursor: pointer;
  }

</style>
