<template>
  <div class="col-12 col-md-9 venue">
    <venue-edit :venue="venue"></venue-edit>
    <venue-preview :venue="venue"></venue-preview>
  </div>
</template>

<script>
import {db} from '../../initFirebase.js'
import VenuePreview from './Preview'
import VenueEdit from './Edit'

export default {
  firebase () {
    if (this.$route.params.key) {
      return {
        venue: {
          source: db.ref('venues/' + this.$route.params.key),
          asObject: true
        }
      }
    }
    return {}
  },
  components: {
    VenuePreview,
    VenueEdit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
