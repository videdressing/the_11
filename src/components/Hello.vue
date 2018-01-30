<template>
  <b-container>
    <b-row>
      <b-col>
        <ais-search-box :search-store="searchStore" class="mb-3">
            <ais-input :search-store="searchStore"
              placeholder="Search for venue"
              :class-names="{'ais-input': 'form-control'}"
            >
            </ais-input>
        </ais-search-box>
      </b-col>
    </b-row>

    <b-row>
      <ais-index :search-store="searchStore" index-name="venues">
          <ais-results inline-template>
            <div>
              <b-col cols="12" md="6" lg="4" v-for="result in results" :key="result.objectID">
                <router-link :to="{name: 'VenueView', params: { key: result.objectID }}">
                  <b-card overlay
                          :img-src="result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_600,h_400,c_fill')"
                          :img-alt="result.name"
                          text-variant="white"
                          :title="result.name"
                          class="text-center mb-3">
                  </b-card>
                </router-link>
              </b-col>
            </div>
          </ais-results>
      </ais-index>
    </b-row>
  </b-container>
</template>

<script>
import {db} from '../initFirebase.js'
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to The_11',
      searchStore: createFromAlgoliaCredentials('XJ4KFZWO2I', 'b29f97abde99f1dcd9874e03ee0807fc')
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

<style scoped>
.card-img-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0) 50%);
}
</style>
