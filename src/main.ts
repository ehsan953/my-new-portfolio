import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/tailwind.css";
import "./assets/scroll-reveal.css";
import { reveal } from "./directives/reveal";

// Vuetify imports
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App).use(store).use(router).use(vuetify);
app.directive("reveal", reveal);
app.mount("#app");
