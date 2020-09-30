<template>
  <div id="app">
    <Header />
    <AboutMe />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    Header,
    AboutMe
  }
}
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
