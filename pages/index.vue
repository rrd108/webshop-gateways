<template>
  <div>
    <h1>Mit használsz?</h1>
    <div>
      <section v-for="gateway in gateways" :key="gateway.name" :class="gateway.name">
        <h2><nuxt-link :to="`/vote/${gateway.name}`">{{gateway.displayName}}</nuxt-link></h2>
      </section>
    </div>
    <p><nuxt-link to="/comparison">még semmit...</nuxt-link></p>
  </div>
</template>

<script>
import GatewaysMixin from '~/mixins/GatewaysMixin'

export default {
  name: 'Landing',
  mixins: [GatewaysMixin],
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

section {
  width: 40vw;
  max-width: 20rem;
  height: 40vw;
  max-height: 20rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  position: relative;

  h2 {
    font-size: 1.5rem;
    z-index: 1;
  }
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 65%);
}

p {
  margin-top: 1rem;
}
</style>