const gateways = {
  data() {
    return {
      gateways: []
    }
  },
  created() {
    axios.get(this.$config.apiURL)
      .then(response => this.gateways = response.data)
      .catch(error => console.error(error))
  }
}

export default gateways
