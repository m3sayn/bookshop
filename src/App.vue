<template>
  <AppHeader></AppHeader>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  export default {
    components: {
      AppHeader
    },
    created() {
      const locale = localStorage.getItem("locale");
      if (locale) {
        this.$i18n.locale = locale;
      }
      else if (navigator.language) {
        this.$i18n.locale = navigator.language.substring(0, 2);
      }
  },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
