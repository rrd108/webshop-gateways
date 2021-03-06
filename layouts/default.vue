<template>
  <div id="app">
    <header>
      <nuxt-link to="/" title="Nyitólap">
        <font-awesome-icon icon="home" />
      </nuxt-link>
      <a href="https://webmania.cc"><img src="~/assets/logo.png" alt="logo"></a>
      <nuxt-link to="/contact" title="Contact">
        <font-awesome-icon icon="lightbulb" />
      </nuxt-link>
    </header>
    <main>
      <transition name="slide">
        <Nuxt />
      </transition>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created() {
    axios.get(this.$config.apiURL)
      .then(response => {
        if (process.client) {
          localStorage.gateways = JSON.stringify(response.data) // TODO
        }
        })
      .catch(error => console.error(error))
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Quicksand', sans-serif;
  background-color: #010;
  color: #fff;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 62rem;
  margin: 0 auto;
}
header {
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  padding: .3rem 1rem;

  img {
    height: 2rem;
  }
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
  }
}
a {
  text-decoration: none;
  color: #fff;
}

.slide-enter-active {
  transition: all 250ms ease-in-out;
}
.slide-leave-active {
  transition: all 250ms ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}

.simplepay {
  background-color: #d64045cc;
}
.simplepay::before {
  background-color: #d64045;
}
.barion {
  background-color: #477998cc;
}
.barion::before {
  background-color: #477998;
}
.paylike {
  background-color: #791E94cc;
}
.paylike::before {
  background-color: #791E94;
}
.paypal {
  background-color: #009B72cc;
}
.paypal::before {
  background-color: #009B72;
}
</style>