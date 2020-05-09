<template>
  <ul>
    <li v-for="event in events" v-bind:key="event.id">
      <p>Name: {{ event.title }}</p>
      <p>Location: {{ event.venue_name }}</p>
      <p>Address: {{ event.venue_address }}</p>
      <p>City: {{ event.city_name }} ({{ event.postal_code }})</p>
      <a :href="event.venue_url">Event link</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'event-list',

  props: {
    events: { type: Array, required: true }
  },
}
</script>