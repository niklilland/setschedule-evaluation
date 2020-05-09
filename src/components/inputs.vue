<template>
  <div>
    <h2>Find local events in your area!</h2>
    <!-- Topic input -->
    <span>Event keywords</span>
    <input type="text" v-model="term">
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
    <input type="number" v-model="radius">
    <br>
    <button @click="submit">
      Go!
    </button>
    <br>
    <br>
    <Events v-if="events.length > 0" :events="events" />
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import { queryEventful } from '../lib/api';
import Events from './events';

export default {
  name: 'Inputs',

  components: {
    'vue-google-autocomplete': VueGoogleAutocomplete,
    Events
  },

  data: function() {
    return {
      term: '',
      zip: '',
      radius: '',
      events: []
    }
  },

  methods: {
    getAddressData(obj) {
      this.zip = obj.postal_code;
    },
    submit() {
      // TODO: Validate inputs and then call API service
      queryEventful(this.term, this.zip, this.radius)
      .then(response => {
        this.events = response.events.event;
      })
      .catch(error => {
        console.log('eventful api request failed');
        console.log(error);
      })
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
