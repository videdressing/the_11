<template>
  <div>
    <h1>{{ venue.name }}</h1>

    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                indicators
                background="#ababab"
                :interval="4000"
    >
      <b-carousel-slide v-for="picture in venue.pictures" :img-src="getThumb(picture.url)">
      </b-carousel-slide>
    </b-carousel>

    <p v-if="venue.address">{{ venue.address.postal_code }}</p>
    <pre>{{ venue.description }}</pre>
  </div>
</template>

<script>
export default {
  props: ['venue'],
  methods: {
    getThumb: function (url) {
      return url.replace(/v[0-9]+/, 'w_1200,h_450,c_fill')
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
