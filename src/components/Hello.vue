<template>
  <b-col>
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

    <ais-index :search-store="searchStore" index-name="venues">
        <ais-results inline-template>
          <b-row>
            <b-col cols="12" md="6" lg="4" v-for="result in results" :key="result.objectID">
              <router-link :to="{name: 'VenueView', params: { key: result.objectID }}">
                <div class="text-center mb-3 card text-white">
                  <img
                    :src="result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_288,h_192,c_fill')"
                    :srcset="result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_288,h_192,c_fill') + ' 320w,'
                      + result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_576,h_384,c_fill') + ' 640w,'
                      + result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_462,h_308,c_fill') + ' 992w,'
                      + result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_312,h_208,c_fill') + ' 1024w'"
                    :alt="result.name"
                    class="card-img">
                  <div class="card-body card-img-overlay">
                    <h4 class="card-title">{{ result.name }}</h4>
                    &lt;{{ Math.ceil(result._rankingInfo.geoDistance / 100) * 100 }}m
                  </div>
                </div>

                <!-- <b-card overlay
                        :img-src="result.pictures[0].secure_url.replace(/v[0-9]+/, 'w_600,h_400,c_fill')"
                        :img-alt="result.name"
                        text-variant="white"
                        :title="result.name"
                        class="text-center mb-3">
                  &lt;{{ Math.ceil(result._rankingInfo.geoDistance / 100) * 100 }}m
                </b-card> -->
              </router-link>
            </b-col>
          </b-row>
        </ais-results>
    </ais-index>
  </b-col>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

export default {
  name: 'hello',
  data () {
    let store = createFromAlgoliaCredentials('XJ4KFZWO2I', 'b29f97abde99f1dcd9874e03ee0807fc')
    // Videdressing : Latitude : 48.859649 | Longitude : 2.378816
    store.queryParameters = {git : '48.859649, 2.378816', getRankingInfo: true}

    return {
      msg: 'Welcome to The_11',
      searchStore: store
    }
  }
}
</script>

<style scoped>
</style>
