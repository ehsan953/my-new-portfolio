<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
/* Prevent horizontal scroll from off-screen transforms (e.g. v-reveal translateX) and wide decor */
html,
body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}

#app,
.v-application {
  overflow-x: hidden;
  max-width: 100%;
}

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
