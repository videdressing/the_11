<template>
  <div class="col-12 col-md-9 venue">
    <h1>{{ venue.name }} ( {{ $route.params.id }} )</h1>
    <!-- img v-attr="src: venue.pictures" /-->
    <p>{{ venue.description }}</p>
  </div>
</template>

<script>
import db from '../firebase.js'

export default {
  firebase () {
    return {
      venue: {
        source: db.ref('venues/' + this.$route.params.id),
        asObject: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
