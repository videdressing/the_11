<template>
  <div id="app">
    <main-menu :key="$route.fullPath"></main-menu>
    <b-container>
      <transition name="slide-left" mode="out-in">
        <div :key="$route.fullPath">
          <b-row>
            <router-view :key="$route.fullPath"></router-view>
          </b-row>
          <hr>

          <footer>
            <p>&copy; Videdressing 2017 - {{ currentYear }}</p>
            <p><a href="https://github.com/videdressing/the_11">Docs</a></p>
          </footer>
        </div>
      </transition>
    </b-container>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'app',
  components: { MainMenu },
  data () {
    return {
      currentYear: (new Date()).getFullYear()
    }
  }
}
</script>

<style>
  /*
   * Style tweaks
   * --------------------------------------------------
   */
  html,
  body {
    overflow-x: hidden; /* Prevent scroll on narrow devices */
  }
  body {
    padding-top: 70px;
  }
  footer {
    padding: 30px 0;
  }

  .card-img-overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0) 50%);
  }

  .slide-left-leave-active {
    transition: all 0.3s ease-in;
    opacity: 0;
    transform: translateX(-300px);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translateX(300px);
  }

  .slide-left-enter-active {
    transition: all 0.3s ease-out;
  }
</style>
