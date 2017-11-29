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

      <input type="file" class="form-control mb-3"
        v-on:change="upload($event.target.files)" accept="image/*" />

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
        priceOptions: {1: '€', 2: '€€', 3: '€€€', 4: '€€€€'},
        cloudinary: {
          uploadPreset: 'nnbgn8se',
          apiKey: '118663883161386',
          cloudName: 'the11'
        }
      }
    },
    computed: {
      clUrl: function () {
        return 'https://api.cloudinary.com/v1_1/' +
          this.cloudinary.cloudName + '/upload'
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
      getAddressData: function (addressData, placeResultData, id) {
        this.venue.address = addressData
      },
      upload: function (file) {
        const formData = new FormData()
        formData.append('file', file[0])
        formData.append('upload_preset', this.cloudinary.uploadPreset)
        formData.append('tags', 'gs-vue,gs-vue-uploaded')
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ', ' + pair[1])
        // }
        this.$http.post(this.clUrl, formData).then(res => {
          this.venue.pictures.push(res.body)
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
