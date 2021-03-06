const gateways = {
  computed: {
    gateways() {
      return process.browser ? JSON.parse(localStorage.getItem('gateways')) : []  // TODO
    }
  }
}

export default gateways
