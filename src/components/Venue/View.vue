<template>
  <div class="col-12 venue" v-if="venue['.key']">
    <b-button-toolbar aria-label="Toolbar" class="float-right">
      <b-button-group>
        <b-btn v-b-toggle.editionForm class="m-1">Edit Venue</b-btn>
      </b-button-group>
    </b-button-toolbar>
    
    <b-collapse id="editionForm">
      <venue-edit :venue="venue" class="border border-top-0 border-right-0 border-left-0 mb-3 pb-3"></venue-edit>
    </b-collapse>
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
