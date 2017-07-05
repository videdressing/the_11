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
      <div class="col-6 col-lg-4">
        <h2>Venue 1</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="/#/venue/1" role="button">View details &raquo;</a></p>
      </div><!--/span-->
      <div class="col-6 col-lg-4">
        <h2>Venue 2</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="/#/venue/2" role="button">View details &raquo;</a></p>
      </div><!--/span-->
      <div class="col-6 col-lg-4">
        <h2>Venue 3</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="/#/venue/3" role="button">View details &raquo;</a></p>
      </div><!--/span-->
      <div class="col-6 col-lg-4">
        <h2>Venue 4</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="/#/venue/4" role="button">View details &raquo;</a></p>
      </div><!--/span-->
      <div class="col-6 col-lg-4">
        <h2>Venue 5</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="/#/venue/5" role="button">View details &raquo;</a></p>
      </div><!--/span-->
      <div class="col-6 col-lg-4">
        <h2>Venue 6</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="/#/venue/6" role="button">View details &raquo;</a></p>
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
