<template>
  <div>
    <section v-for="gateway in gateways" :key="gateway.name" :class="gateway.name">
      <h2>{{gateway.displayName}}</h2>
      <h3 :class="gateway.name">{{rating(gateway)}}</h3>

      <span>Csatlakozási díj</span>
      <p>40.000</p>

      <span>Jutalék</span>
      <p>1,6%</p>

      <span>Ügyfél szolgálat</span>
      <p class="mini">
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
      </p>

      <span>Woo</span>
      <p><font-awesome-icon icon="link" /></p>

      <span>Prestashop</span>
      <p><font-awesome-icon icon="link" /></p>

    </section>
  </div>
</template>

<script>
import GatewaysMixin from '@/mixins/GatewaysMixin'

export default {
  name: 'Comparison',
  mixins: [GatewaysMixin],
  methods: {
    rating(gateway) {
      return parseInt(((gateway.stars.reduce((total, currentValue, currentIndex) => total + (currentIndex + 1) * currentValue) / gateway.stars.reduce((total, currentValue) => total + currentValue)) / 5) * 100) + '%'
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  width: 100vw;
  justify-content: space-around;
  gap: .3rem;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1 1 0;
  position: relative;
  padding: 1rem .3rem;

  h2 {
    font-size: 1rem;
    z-index: 1;
    margin-bottom: 1rem;
  }

  h3 {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
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

  &.mini {
    font-size: .6rem;
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
  clip-path: polygon(0 0, 100% 0, 100% 1rem, 0 3rem);
}
</style>