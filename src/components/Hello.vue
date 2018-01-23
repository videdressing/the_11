<template>
  <b-row>
    <b-col cols="12" md="6" lg="4" v-for="venue in venues">
      <router-link :to="{name: 'VenueView', params: { key: venue['.key'] }}">
        <b-card overlay
                :img-src="getThumb(venue.pictures[0].url)"
                :img-alt="venue.name"
                text-variant="white"
                :title="venue.name"
                class="text-center mb-3">
        </b-card>
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
import {db} from '../initFirebase.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to The_11'
    }
  },
  computed: {
    venues () {
      return this.dbVenues.reverse()
    }
  },
  firebase: {
    dbVenues: {
      source: db.ref('venues').limitToLast(6),
      asObject: false
    }
  },
  methods: {
    getThumb: function (url) {
      return url.replace(/v[0-9]+/, 'w_600,h_400,c_fill')
    }
  }
}
</script>

<style scoped>
.card-img-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0) 50%);
}
</style>
