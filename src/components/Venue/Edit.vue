<template>
  <div>
    <h1>Edition form</h1>
    <b-form @submit="onSubmit">
      <h5>Venue name:</h5>
      <b-form-input id="venue-name"
        type="text" v-model="venue.name" required
        placeholder="Venue Name"
      ></b-form-input>

      <h5>Venue price level:</h5>
      <b-form-select v-model="venue.price_level" :options="priceOptions" class="mb-3">
      </b-form-select>

      <h5>Description:</h5>
      <b-form-input textarea v-model="venue.description" placeholder="Venue description" rows="5"></b-form-input>
      <b-button type="submit" variant="success">Ok</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    props: ['venue', 'venuesRef'],
    data: function () {
      return {
        priceOptions: {1: '1', 2: '2', 3: '3', 4: '4'}
      }
    },
    methods: {
      onSubmit: function (evt) {
        evt.preventDefault()
        var venue = {...this.venue} // copy
        delete venue['.key'] // delete key
        this.venuesRef.child(this.venue['.key']).set(venue)
        this.$router.push('/')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
