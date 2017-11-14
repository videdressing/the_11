<template>
  <div class="col-12">
    <b-jumbotron :header="msg" lead='Explore a different side of the "11ème arrondissement" with Videdressing' >
      <p>For more information visit website</p>
      <b-btn variant="primary" href="https://github.com/videdressing/the_11">Docs</b-btn>
    </b-jumbotron>

    <div class="row venues">
      <div class="col-6 col-lg-4" v-for="venue in venues">
        <h2>{{ venue.name }}</h2>
        <p>{{ venue.short_description }}</p>
        <p><router-link class="btn btn-secondary" :to="{name: 'VenueView', params: { key: venue['.key'] }}" role="button">View details &raquo;</router-link></p>
      </div><!--/span-->
    </div><!--/row-->
  </div><!--/span-->
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
