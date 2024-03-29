import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/hr'

moment.locale('hr')

Vue.filter('formatDate', (v, format = 'DD.MM.YYYY') => {
  return v ? moment(v).format(format) : null
})

Vue.mixin({
  methods: {
    $formatDate(v, format = 'll') {
      return v ? moment(v).format(format) : null
    },
    $extractError(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return error.response.data.message
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return error.request
      } else {
        // Something happened in setting up the request that triggered an Error
        return error.message
      }
    },
  },
})
