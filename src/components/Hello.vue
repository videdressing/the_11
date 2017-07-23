<template>
  <div class="col-12 col-md-12 hello">
    <p class="float-right hidden-md-up">
      <button type="button" class="btn btn-primary btn-sm" data-toggle="offcanvas">Toggle nav</button>
    </p>
    
    <b-jumbotron :header="msg" lead='Explore a different side of the "11ème arrondissement" with Videdressing' >
      <p>For more information visit website</p>
      <b-btn variant="primary" href="https://github.com/videdressing/the_11">Docs</b-btn>
    </b-jumbotron>

    <div class="row venues">
      <div class="col-6 col-lg-4" v-for="venue in venues">
        <h2>{{ venue.name }}</h2>
        <p>{{ venue.short_description }}</p>
        <p><router-link class="btn btn-secondary" :to="{name: 'Venue', params: { id: venue.id }}" role="button">View details &raquo;</router-link></p>
      </div><!--/span-->
    </div><!--/row-->
  </div><!--/span-->
</template>

<script>
import db from '../firebase.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to The_11'
    }
  },
  firebase: {
    venues: db.ref('venues').limitToLast(6)
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

.venues a {
  color: #42b983;
}
</style>
