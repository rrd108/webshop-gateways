<template>
  <div>
    <section v-for="gateway in gateways" :key="gateway.name" :id="gateway.name">
      <h2>{{gateway.displayName}}</h2>
    </section>
  </div>
</template>

<script>
import GatewaysMixin from '@/mixins/GatewaysMixin'

export default {
  name: 'Comparison',
  mixins: [GatewaysMixin]
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: wrap;
}
</style>