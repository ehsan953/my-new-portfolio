<template>
  <div class="home">
    <HeroSection/>
    <ServicesSection/>
    <AboutSection/>
    <PortfolioSection/>
    <ContactUsSection/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from "@/components/HomePageComponents/HeroSection.vue"
import ServicesSection from "@/components/HomePageComponents/ServicesSection.vue"
import AboutSection from "@/components/HomePageComponents/AboutSection.vue"
import PortfolioSection from "@/components/HomePageComponents/PortfolioSection.vue"
import ContactUsSection from "@/components/HomePageComponents/ContactSection.vue"
export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection, ServicesSection, AboutSection, PortfolioSection,ContactUsSection
  },
});
</script>
