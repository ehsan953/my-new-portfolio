<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #00A8CD;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 2px;
}
</style>
