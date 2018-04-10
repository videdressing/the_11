<template>
  <div>
    <h1>{{ venue.name }}</h1>
    <b-row>
      <b-col sm="12" lg="6">
        <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" indicators 
          background="#ababab" :interval="4000">
          <b-carousel-slide v-for="picture in venue.pictures" :key="picture.signature"
            :img-src="getThumb(picture.url)"></b-carousel-slide>
        </b-carousel>
      </b-col>
      <b-col sm="12" lg="6">
        <pre>{{ venue.description }}</pre>
        <gmap-map
          :center="center"
          :zoom="15"
          style="width: 100%; height: 300px"
        >
          <gmap-marker
            :position="center"
            :clickable="false"
            :draggable="false"
          ></gmap-marker>
        </gmap-map>
        <p v-if="venue.address">
          {{ venue.address.street_number }}
          {{ venue.address.route }},
          {{ venue.address.postal_code }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDoyPRWSXuUu9WWel323GQ1UnSc-gp8zCs',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

export default {
  props: ['venue'],
  methods: {
    getThumb: function (url) {
      return url.replace(/v[0-9]+/, 'w_1200,h_800,c_fill')
    }
  },
  data () {
    return {
      center: {lat: this.venue.address.latitude, lng: this.venue.address.longitude}
    }
  }
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
