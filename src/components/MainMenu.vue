<template>
  <b-navbar toggleable="md" fixed="top" type="light" variant="light">
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

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'main-menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
