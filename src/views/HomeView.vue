<template>
  <Nav-Bar />
  <HomePage />
  <router-view />
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/Nav-Bar.vue"
import HomePage from "@/components/Home-Page.vue";


export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomePage
}
}
</script>
