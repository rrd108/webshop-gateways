import axios from 'axios'

export default {
  data() {
    return {
      gateways: [],
    }
  },
  async fetch() {
    this.gateways = await axios.get(this.$config.apiURL)
      .then(response => response.data)
  }
}
