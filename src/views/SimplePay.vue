<template>
  <div>
    <h1>Mi a tapasztalatod?</h1>
    <section id="simplepay">
      <h2>SimplePay</h2>
      <star-rating v-model="rating" :show-rating="false" :round-start-rating="false"></star-rating>
    </section>
    <p>Szavazz a csillagokkal!</p>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'SimplePay',
  components: {
    StarRating
  },
  data() {
    return {
      rating: 2.4
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
  height: 80vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  position: relative;
  cursor: pointer;
  font-size: 2rem;

  h2 {
    margin-bottom: 2.5rem;
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
  clip-path: polygon(0 0, 100% 0, 100% 25%, 0 45%);
}
</style>