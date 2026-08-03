<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
/* Clip horizontal overflow without creating nested vertical scrollbars.
   overflow-x: hidden forces overflow-y to auto (CSS quirk) → double scrollbars.
   Vuetify's .v-layout--full-height { height: 100% } can also nest a scroller. */
html {
  overflow-x: clip;
  width: 100%;
  max-width: 100%;
}

body {
  overflow-x: clip;
  width: 100%;
  max-width: 100%;
  margin: 0;
}

#app,
.v-application {
  overflow: visible !important;
  height: auto !important;
  min-height: 100dvh;
  max-width: 100%;
}

.v-application__wrap {
  min-height: 100dvh;
  height: auto !important;
  overflow: visible;
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
