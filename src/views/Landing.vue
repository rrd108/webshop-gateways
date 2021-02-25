<template>
  <div id="app">
    <main>
      <h1>Mit használsz?</h1>
      <div>
        <section id="simplepay">
          <h2><router-link to="/simplepay">SimplePay</router-link></h2>
        </section>
        <section id="barion">
          <h2>Barion</h2>
        </section>
        <section id="paylike">
          <h2>Paylike</h2>
        </section>
        <section id="paypal">
          <h2>PayPal</h2>
        </section>
      </div>
      <p>még semmit...</p>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Landing',
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}

div {
  display: flex;
  flex-wrap: wrap;
}

section {
  width: 40vw;
  height: 40vw;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  position: relative;
  cursor: pointer;

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