<template>
  <b-navbar toggleable="md" fixed="top" type="dark" variant="dark">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-link class="navbar-brand" :to="{name: 'Hello'}">
      <span>The_11</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'Login'}">Sign in</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'Logout'}">Logout</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'Profile'}">Profile</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'VenueAdd'}">Add Venue</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">
          <ais-search-box :search-store="searchStore">
            <b-input-group>
              <ais-input :search-store="searchStore"
                placeholder="Search for venue"
                :class-names="{'ais-input': 'form-control'}"
                id="popoverResults"
              >
              </ais-input>
            </b-input-group>
          </ais-search-box>
      </b-nav>

      <ais-index :search-store="searchStore" index-name="venues">
        <b-popover target="popoverResults" triggers="click" placement="auto">
          <ais-results inline-template>
            <b-list-group>
              <b-list-group-item v-for="result in results" :key="result.objectID">
                <router-link
                  :to="{name: 'VenueView', params: { key: result.objectID }}"
                  role="button"
                >
                  {{ result.name }}
                </router-link>
              </b-list-group-item>
            </b-list-group>
          </ais-results>
        </b-popover>
      </ais-index>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

export default {
  name: 'main-menu',
  data () {
    return {
      searchStore: createFromAlgoliaCredentials('XJ4KFZWO2I', 'b29f97abde99f1dcd9874e03ee0807fc')
    }
  },
  methods: {
    format (value) {
      return value.toLowerCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
