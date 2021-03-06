const gateways = {
  computed: {
    gateways() {
      return process.client ? JSON.parse(localStorage.getItem('gateways')) : []  // TODO
    }
  }
}

export default gateways
