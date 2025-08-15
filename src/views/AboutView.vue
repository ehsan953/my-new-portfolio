<template>
  <div class="about">
    <AboutSection/>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import AboutSection from "@/components/HomePageComponents/AboutSection.vue"
export default defineComponent({
  name: "AboutPage",
  components: {
     AboutSection
  },
})
</script>
