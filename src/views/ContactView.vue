<template>
  <div class="about">
    <ContactUsSection/>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ContactUsSection from "@/components/HomePageComponents/ContactSection.vue"
export default defineComponent({
  name: "ContactPage",
  components: {
     ContactUsSection
  },
})
</script>
