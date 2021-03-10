import axios from 'axios'

export default {
  data() {
    return {
      gateways: []
    }
  },

  created() {
    axios.get(process.env.VUE_APP_API_URL)
      .then(response => this.gateways = response.data)
      .catch(error => console.error(error))
  }
}
