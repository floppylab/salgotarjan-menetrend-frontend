import Vue from 'vue'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader
import { loadingBBox, findPointOnSurface } from 'vuelayers/lib/ol-ext'

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326'
})
Vue.use(loadingBBox)

Vue.prototype.$loadingBBox = () => {
  return loadingBBox
}
Vue.prototype.$findPointOnSurface = (geom) => {
  return findPointOnSurface(geom)
}
