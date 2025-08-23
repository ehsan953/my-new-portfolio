<template>
  <div class="home">
    <HeroSection/>
    <ServicesSection/>
    <v-divider class="my-2 w-1/2 md:w-1/4 mx-auto" style="border-top:3px solid #00d1ff"></v-divider>
    <AboutSection/>
    <v-divider class="my-2 w-1/2 md:w-1/4 mx-auto" style="border-top:3px solid #00d1ff"></v-divider>
    <PortfolioSection/>
    <v-divider class="my-2 w-1/2 md:w-1/4 mx-auto" style="border-top:3px solid #00d1ff"></v-divider>
    <BlogSection/>
    <v-divider class="my-2 w-1/2 md:w-1/4 mx-auto" style="border-top:3px solid #00d1ff"></v-divider>
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
import BlogSection from "@/components/HomePageComponents/BlogSection.vue"
export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection, ServicesSection, AboutSection, PortfolioSection,ContactUsSection, BlogSection
  },
  methods: {
   
  },
});
</script>
