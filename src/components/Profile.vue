<template>
  <b-col v-if="user" class="text-center">
    <img :src="user.photoURL" class="img-fluid profilePic mb-3"/>
    <h3>{{user.displayName}}</h3>
    <p>{{user.email}}</p>
  </b-col>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scopped>
.profilePic {
  border-radius: 50%;
}
</style>
