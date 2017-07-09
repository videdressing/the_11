<template>
  <div class="col-12 col-md-9 hello">
    <p class="float-right hidden-md-up">
      <button type="button" class="btn btn-primary btn-sm" data-toggle="offcanvas">Toggle nav</button>
    </p>
    <div class="jumbotron">
      <h1>{{ msg }}</h1>
      <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.</p>
    </div>
    <div class="row">
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
var venuesRef = db.ref('venues')

console.log(db.ref().child('venues'))

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your The_11 App'
    }
  },
  firebase: {
    venues: venuesRef.limitToLast(6)
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

a {
  color: #42b983;
}
</style>
