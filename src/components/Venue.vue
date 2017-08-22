<template>
  <div class="col-12 col-md-9 venue">
    <venue-view :venue="venue"></venue-view>
    <venue-edit :venue="venue"></venue-edit>
  </div>
</template>

<script>
import {db} from '../initFirebase.js'
import VenueView from './VenueView'
import VenueEdit from './VenueEdit'

export default {
  firebase () {
    return {
      venue: {
        source: db.ref('venues/' + this.$route.params.id),
        asObject: true
      }
    }
  },
  components: {
    VenueView,
    VenueEdit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
