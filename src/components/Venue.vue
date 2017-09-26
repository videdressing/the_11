<template>
  <div class="col-12 col-md-9 venue">
    <venue-edit :venue="venue"></venue-edit>
    <venue-view :venue="venue"></venue-view>
  </div>
</template>

<script>
import {db} from '../initFirebase.js'
import VenueView from './VenueView'
import VenueEdit from './VenueEdit'

export default {
  data () {
    return {
      venue: {
        name: '',
        pictures: [],
        description: '',
        price_level: 1,
        short_description: ''
      }
    }
  },
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
    VenueView,
    VenueEdit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
