import Vue from 'vue'
import { error } from '../assets/errors'

export default function ({ $axios, redirect }) {
  $axios.onError((e) => {
    // eslint-disable-next-line no-console
    console.log(e.response.data)
    if (e.response.data.error) {
      Vue.notify({
        type: 'notification notification-error',
        duration: -1,
        title: error[e.response.data.error.replace('error.', '')]
      })
    }
  })
}
