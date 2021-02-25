const gateways = {
  computed: {
    gateways() {
      return JSON.parse(localStorage.getItem('gateways'))
    }
  }
}

export default gateways
