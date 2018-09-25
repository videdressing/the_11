<template>
  <b-col cols="12">
    <h1>{{ title }}</h1>
    <b-form @submit="onSubmit">
      <h5>Venue name:</h5>
      <b-form-input id="venue-name"
        type="text" v-model="venue.name" required
        placeholder="Venue Name" class="mb-3"
      ></b-form-input>

      <b-row>
        <b-col md="6">
          <h5>Venue price level:</h5>
          <b-form-select v-model="venue.price_level" :options="priceOptions" class="mb-3">
          </b-form-select>
        </b-col>

        <b-col md="6">
          <h5>Ticket Restaurant Friendly?</h5>
          <b-form-checkbox v-model="venue.is_restaurant_ticket_friendly" :value="true" :unchecked-value="false">
          </b-form-checkbox>
        </b-col>
      </b-row>

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
        :value="getAddressPlaceHolder()"
        v-on:placechanged="getAddressData"
        country="fr"
        class="mb-3"
        required
      >
      </vue-google-autocomplete>
      <b-tooltip :show.sync="addressError" target="map" placement="top">
        Please start writing an address
      </b-tooltip>

      <h5>Pictures:</h5>

      <b-form-file type="file" class="form-control mb-3" multiple
        v-on:change="upload($event.target.files)" accept="image/*">
      </b-form-file>

      <b-container fluid class="p-4 bg-dark mb-3">
        <b-row class="mb-2 text-center">
          <b-col v-for="picture in venue.pictures" :key="picture.signature">
            <b-img thumbnail fluid :src="getThumb(picture.url)" alt="Thumbnail" />
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col v-for="(picture, index) in venue.pictures" :key="picture.signature">
            <b-button variant="warning" size="sm" v-on:click="removePicture(index)">Remove</b-button>
          </b-col>
        </b-row>
      </b-container>

      <b-button type="submit" variant="success" size="lg">Ok</b-button>
    </b-form>
  </b-col>
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
            is_restaurant_ticket_friendly: false,
            address: '',
            _geoloc: ''
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
        },
        addressError: false
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

        if (!this.venue.user) {
          this.venue.user = {
            email: this.$store.getters.user.email,
            photoURL: this.$store.getters.user.photoURL,
            uid: this.$store.getters.user.uid,
            displayName: this.$store.getters.user.displayName
          }
        }

        // Weird Hack
        delete this.venue.address.administrative_area_level_2

        if (this.venue.address.latitude && this.venue.address.longitude) {
          this.venue._geoloc = {
            lat: this.venue.address.latitude,
            lng: this.venue.address.longitude
          }
        } else {
          this.addressError = true
          return false
        }

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
      getAddressPlaceHolder () {
        if (this.venue.address === undefined || this.venue.address === '') {
          return ''
        }
        return this.venue.address.street_number +
        ' ' + this.venue.address.route +
        ', ' + this.venue.address.locality +
        ', ' + this.venue.address.country
      },
      upload: function (files) {
        const formData = new FormData()
        var that = this
        Object.keys(files).forEach(function (key) {
          formData.append('file', files[key])
          formData.append('upload_preset', that.cloudinary.uploadPreset)
          formData.append('tags', 'gs-vue,gs-vue-uploaded')
          // for (var pair of formData.entries()) {
          //   console.log(pair[0] + ', ' + pair[1])
          // }
          that.$http.post(that.clUrl, formData).then(res => {
            if (that.venue.pictures === undefined) {
              that.venue.pictures = []
            }
            that.venue.pictures.push(res.body)
          })
        })
      },
      removePicture: function (index) {
        this.venue.pictures.splice(index, 1)
      },
      getThumb: function (url) {
        return url.replace(/v[0-9]+/, 'w_250,h_250,c_fill')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
