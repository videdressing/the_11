<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">The_11</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <div class="row row-offcanvas row-offcanvas-right">
        <router-view></router-view>
        </div><!--/row-->

      <hr>

      <footer>
        <p>&copy; Company 2017</p>
      </footer>
    </div><!--/.container-->
  </div>
</template>

<script>
export default {
  name: 'app'
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
