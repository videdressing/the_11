<template>
  <div class="col-12">
    <h1>{{ title }}</h1>
    <b-form @submit="onSubmit">
      <h5>Venue name:</h5>
      <b-form-input id="venue-name"
        type="text" v-model="venue.name" required
        placeholder="Venue Name" class="mb-3"
      ></b-form-input>

      <h5>Venue price level:</h5>
      <b-form-select v-model="venue.price_level" :options="priceOptions" class="mb-3">
      </b-form-select>

      <h5>Description:</h5>
      <b-form-textarea v-model="venue.description"
        placeholder="Venue description"
        :rows="5" :max-rows="6" class="mb-3"></b-form-textarea>

      <h5>Address:</h5>
      <vue-google-autocomplete
        ref="address"
        id="map"
        classname="form-control"
        placeholder="Please type your address"
        v-on:placechanged="getAddressData"
        country="fr"
        class="mb-3"
      >
      </vue-google-autocomplete>

      <b-button type="submit" variant="success" size="lg">Ok</b-button>
    </b-form>
  </div>
</template>

<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import {db} from '../../initFirebase.js'
  let venuesRef = db.ref('venues')

  export default {
    components: { VueGoogleAutocomplete },
    props: {
      venue: {
        type: Object,
        default: function () {
          return {
            name: '',
            pictures: [],
            description: '',
            price_level: 1,
            address: ''
          }
        }
      }
    },
    data: function () {
      return {
        title: this.venue['.key'] ? 'Edition form' : 'Creation form',
        priceOptions: {1: '€', 2: '€€', 3: '€€€', 4: '€€€€'}
      }
    },
    methods: {
      onSubmit: function (evt) {
        evt.preventDefault()

        if (!this.venue['.key']) {
          venuesRef.push(this.venue)
        } else {
          var venue = {...this.venue} // copy
          delete venue['.key'] // delete key
          venuesRef.child(this.venue['.key']).set(venue)
        }

        this.$router.push('/')
      },
      /**
      * When the location found
      * @param {Object} addressData Data of the found location
      * @param {Object} placeResultData PlaceResult object
      * @param {String} id Input container ID
      */
      getAddressData: function (addressData, placeResultData, id) {
        this.venue.address = addressData
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
