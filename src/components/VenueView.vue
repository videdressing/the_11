<template>
  <div>
    <h1>{{ venue.name }} ({{ venue.id }})</h1>
    <ul>
      <li v-for="picture in venue.pictures">
        <img v-bind:src="picture" />
      </li>
    </ul>
    <p>{{ venue.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['venue']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
