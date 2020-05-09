<template>
  <div>
    <h2>Find local events in your area!</h2>

    <!-- Topic input -->
    <span>Event keywords</span>
    <input type="text">
    <br>
    <!-- Address input -->
    <span>Location to search from</span>
    <vue-google-autocomplete
      id="map"
      classname="form-control"
      placeholder="Start typing"
      v-on:placechanged="getAddressData" />
    <br>
    <!-- Radius input (mi) -->
    <span>Search radius (mi)</span>
    <input type="number">
    <br>
    <button :click="submit">
      Go!
    </button>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  name: 'Inputs',

  components: {
    'vue-google-autocomplete': VueGoogleAutocomplete
  },

  methods: {
    getAddressData(obj, place) {
      console.log(obj);
      console.log(place);
    },
    submit() {
      // TODO: Validate inputs and then call API service
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 300px;
}
</style>
