<template>
  <div id="app">
    <header>
      <router-link to="/" title="Nyitólap">
        <font-awesome-icon icon="igloo" />
      </router-link>
      <font-awesome-icon icon="lightbulb" />
    </header>
    <main>
      <transition name="slide">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created() {
    axios.get(process.env.VUE_APP_API_URL)
      .then(response => localStorage.gateways = JSON.stringify(response.data))
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
}
header {
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  padding: .3rem 1rem;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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