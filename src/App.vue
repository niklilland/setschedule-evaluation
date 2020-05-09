<template>
  <div id="app">
    <img alt="Vue logo" src="https://www.setschedule.com/wp-content/uploads/2018/03/ssmainlogo.png">
    <Inputs />
  </div>
</template>

<script>
import Inputs from './components/inputs.vue'

export default {
  name: 'App',
  components: {
    Inputs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
