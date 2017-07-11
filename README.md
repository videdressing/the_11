# the_11

> A selection of great venues from Videdressing

## How to install it

``` bash
# We would recommand you to use this container
https://github.com/klessou/vue-cli-docker

git clone git@github.com:klessou/vue-cli-docker.git
cd vue-cli-docker

# And then put the project here
cd app
git clone git@github.com:videdressing/the_11.git
cd ..

# Prepare your environment
docker-compose up -d
. ./dev.sh

# Open your local url
http://localhost:8080/
```

## How to deploy it

``` bash
# Prepare your environment
docker-compose up -d
. ./dev.sh

# Build
web-npm run build

# Get a firebase token
web-firebase login:ci --no-localhost

# Deploy on firebase
web-firebase deploy --token <YOUR TOKEN>
```

## Build Setup

``` bash
# install dependencies
web-npm install

# serve with hot reload at localhost:8080
web-npm run dev

# build for production with minification
web-npm run build

# build for production and view the bundle analyzer report
web-npm run build --report

# run unit tests
web-npm run unit

# run all tests
web-npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## More documentation

http://vuejs-templates.github.io/webpack

https://bootstrap-vue.js.org/docs/setup/

https://www.grafikart.fr/formations/vuejs/vue-router

https://github.com/vuejs/vuefire

https://firebase.google.com/docs/reference/js/

https://github.com/vuejs/vuefire/issues/39

https://forum-archive.vuejs.org/topic/543/img-src-issues/3