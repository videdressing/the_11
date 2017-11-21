<template>
  <div>
    <h1>{{ venue.name }}</h1>
    <ul>
      <li v-for="picture in venue.pictures">
        <img v-bind:src="picture" />
      </li>
    </ul>
    <p>{{ venue.address.postal_code }}</p>
    <pre>{{ venue.description }}</pre>
  </div>
</template>

<script>
export default {
  props: ['venue']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
}
</style>
