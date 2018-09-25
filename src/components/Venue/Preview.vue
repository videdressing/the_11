<template>
  <div>
    <h1>{{ venue.name }}</h1>
    <b-row>
      <b-col lg="6">
        <carousel :per-page="1" :paginationPadding="4" :paginationSize="6"
          style="text-shadow: 1px 1px 2px #333;">
          <slide v-for="picture in venue.pictures" :key="picture.signature">
            <img style="width: 100%;" :src="getThumb(picture.url)" />
          </slide>
        </carousel>
      </b-col>
      <b-col lg="6">
        <p v-if="venue.is_restaurant_ticket_friendly"><strong>TR</strong> <sup>friendly</sup></p>
        <p v-else><strong>TR</strong> <sup><u>NOT</u> friendly</sup></p>
        <pre>{{ venue.description }}</pre>
        <gmap-map
          :center="center"
          :zoom="16"
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
        <p v-if="venue.user">
          <strong>Recommended by:</strong>
          <b-img :src="venue.user.photoURL" rounded="circle" width="25px" height="25px" />
          {{ venue.user.displayName }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
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
  components: {
    Carousel,
    Slide
  },
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
<style>
.VueCarousel-dot {
  margin-top: -4px !important;
}
</style>
