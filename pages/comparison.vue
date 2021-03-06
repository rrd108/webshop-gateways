<template>
  <div id="comparison">
    <section v-for="gateway in gateways" :key="gateway.name" :class="gateway.name">
      <h2>{{gateway.displayName}}</h2>
      <h3 :class="gateway.name">{{rating(gateway)}}</h3>

      <span>Web</span>
      <p><a :href="gateway.url"><font-awesome-icon icon="link" /></a></p>

      <span>Jutalék</span>
      <p class="r2">{{gateway.comission}}</p>

      <span>Csatlakozási díj</span>
      <p>{{gateway.joinFee ? gateway.joinFee : '-'}}</p>

      <span>Ügyfél szolgálat</span>
      <p><star-rating v-model="gateway.support" :show-rating="false" :round-start-rating="false" :star-size="15" :read-only="true"></star-rating></p>

      <span>Kifizetés</span>
      <p>{{gateway.paying}}</p>

      <span>Élesítés</span>
      <p>{{gateway.registration}}</p>

      <div v-show="gateway.plugins.woocommerce">
        <span>Woo</span>
        <p><a :href="gateway.plugins.woocommerce"><font-awesome-icon icon="link" /></a></p>
      </div>

      <div v-show="gateway.plugins.woocommerce">
        <span>Prestashop</span>
        <p><a :href="gateway.plugins.prestashop"><font-awesome-icon icon="link" /></a></p>
      </div>
    </section>
  </div>
</template>

<script>
import GatewaysMixin from '@/mixins/GatewaysMixin'
import StarRating from 'vue-star-rating'

export default {
  name: 'Comparison',
  components: {
    StarRating
  },
  mixins: [GatewaysMixin],
  methods: {
    rating(gateway) {
      return parseInt(((gateway.stars.reduce((total, currentValue, currentIndex) => total + (currentIndex + 1) * currentValue) / gateway.stars.reduce((total, currentValue) => total + currentValue)) / 5) * 100) + '%'
    }
  },
}
</script>

<style lang="scss" scoped>
#comparison {
  display: flex;
  width: 100vw;
  max-width: 62rem;
  justify-content: space-around;
  gap: .3rem;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 0;
  position: relative;
  padding: 1rem .3rem;

  h2 {
    z-index: 1;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    z-index: 1;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    border: medium solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 100;
    font-size: .75rem;
  }
  p {
    padding: .5rem 0;
    border-bottom: 1px solid #ffffff44;
    margin-bottom: .5rem;
    font-size: 1.3rem;

    &.r2 {
      height: 4.2rem;
    }
  }
}
section::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 3rem, 0 6rem);
}

@media only screen and (min-width: 48rem) {
  #comparison {
    margin-top: 2rem;
    gap: 1rem;
  }
  section {
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      height: 5rem;
      width: 5rem;
      font-size: 2rem;
    }
    span {
      font-size: 1.1rem;
    }
    p {
      font-size: 1.7rem;
    }
  }
}

</style>