<template>
  <div id="app">
    <main-menu></main-menu>
    <div class="container">
      <div class="row row-offcanvas row-offcanvas-right">
        <router-view :key="$route.fullPath"></router-view>
        </div><!--/row-->

      <hr>

      <footer>
        <p>&copy; Videdressing 2017</p>
        <p><a href="https://github.com/videdressing/the_11">Docs</a></p>
      </footer>
    </div><!--/.container-->
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'app',
  components: { MainMenu }
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

  /*
   * Off Canvas
   * --------------------------------------------------
   */
  @media screen and (max-width: 767px) {
    .row-offcanvas {
      position: relative;
      -webkit-transition: all .25s ease-out;
           -o-transition: all .25s ease-out;
              transition: all .25s ease-out;
    }

    .row-offcanvas-right {
      right: 0;
    }

    .row-offcanvas-left {
      left: 0;
    }

    .row-offcanvas-right
    .sidebar-offcanvas {
      right: -100%; /* 12 columns */
    }

    .row-offcanvas-right.active
    .sidebar-offcanvas {
      right: -50%; /* 6 columns */
    }

    .row-offcanvas-left
    .sidebar-offcanvas {
      left: -100%; /* 12 columns */
    }

    .row-offcanvas-left.active
    .sidebar-offcanvas {
      left: -50%; /* 6 columns */
    }

    .row-offcanvas-right.active {
      right: 50%; /* 6 columns */
    }

    .row-offcanvas-left.active {
      left: 50%; /* 6 columns */
    }

    .sidebar-offcanvas {
      position: absolute;
      top: 0;
      width: 50%; /* 6 columns */
    }
  }
</style>
