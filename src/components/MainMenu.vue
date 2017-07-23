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
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
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
