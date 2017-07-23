<template>
  <b-navbar type="toggleable-md" fixed="top" class="navbar-inverse bg-inverse"> 
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-link class="navbar-brand" :to="{name: 'Hello'}">
      <span>The_11</span>
    </b-link>
    
    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'Auth'}">Sign in</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">
        <b-form inline>
          <b-form-input v-model="search"
            type="text"
            placeholder="Search"
            :state="search.length?'success':'warning'"
            :formatter="format"
            class="mr-sm-2"
          ></b-form-input>
          <b-button :variant="'outline-success'" type="submit">Search</b-button>
        </b-form>
      </b-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'main-menu',
  data () {
    return {
      search: ''
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
