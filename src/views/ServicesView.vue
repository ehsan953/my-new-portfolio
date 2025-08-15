<template>
  <div class="about">
    <ServicesSection/>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ServicesSection from "@/components/HomePageComponents/ServicesSection.vue"
export default defineComponent({
  name: "ServicesPage",
  components: {
     ServicesSection
  },
})
</script>
