<template>
  <div>
    <h1>Mi a tapasztalatod?</h1>
    <section :class="gateway.name">
      <h2>{{gateway.displayName}}</h2>
      <star-rating v-model="rating" :show-rating="false" :round-start-rating="false" @rating-selected="saveRating"></star-rating>
      <h3>{{rating.toFixed(1)}}</h3>
    </section>
    <p>Szavazz a csillagokkal!</p>
    <p><nuxt-link to="/comparison">nem szavazok...</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'
import GatewaysMixin from '~/mixins/GatewaysMixin'
import StarRating from 'vue-star-rating'

export default {
  name: 'Vote',
  components: {
    StarRating
  },
  data() {
    return {
      rate: null,
    }
  },
  mixins: [GatewaysMixin],
  computed: {
    gateway() {
      return this.gateways.find(gateway => gateway.name == this.$route.params.name)
    },
    rating: {
      get() {
        return this.gateway.stars.reduce((total, currentValue, currentIndex) => total + (currentIndex + 1) * currentValue) / this.gateway.stars.reduce((total, currentValue) => total + currentValue)
      },
      set(newValue) {
        this.rate = newValue
      }
    }
  },
  methods: {
    saveRating(rating) {
      axios.put(this.$config.apiURL, {
        gateway: this.gateway.name,
        rating
        })
        .then(response => {
          //console.log(response.data)
          let gateways = this.gateways
          gateways.find(gateway => gateway.name == this.gateway.name).stars[rating]++
          localStorage.gateways = process.client ? JSON.stringify(gateways) : []   // TODO
          this.$router.push('/comparison')
          })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section {
  width: 80vw;
  max-width: 45rem;
  height: 80vw;
  max-height: 45rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  position: relative;
  font-size: 2rem;

  h2 {
    margin-bottom: 2.5rem;
    z-index: 1;
  }

  h3 {
    margin-top: 1rem;
  }
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 25%, 0 45%);
}
p {
  margin-top: 1rem;
}
</style>