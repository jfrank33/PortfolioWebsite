<template>
  <div id="app">
    <Header />
      <b-card>
    <b-tabs card align="center">
      <b-tab title="About Me">
        <AboutMe />
      </b-tab>
      <b-tab title="Portfolio">
        <Portfolio />
      </b-tab>
      <b-tab title="Resume">
        <h1>Embedded Resume PDF</h1>
        <embed src="./assets/img/FrankResume.pdf">
      </b-tab>
    </b-tabs>
  </b-card>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'
import AboutMe from './components/AboutMe.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Portfolio,
    AboutMe,
    Header
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

#header{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #890928;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
