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
      <div class="col-6 col-lg-4" v-for="n in 6">
        <h2>Venue {{ n }}</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><router-link class="btn btn-secondary" :to="{name: 'Venue', params: { id: n }}" role="button">View details &raquo;</router-link></p>
      </div><!--/span-->
    </div><!--/row-->
  </div><!--/span-->
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your The_11 App'
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

a {
  color: #42b983;
}
</style>
