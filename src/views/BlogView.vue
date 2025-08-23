<template>
  <div class="about">
    <HeroSection/>
    <AllBlogs/>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import HeroSection from "@/components/BlogPageCompoents/HeroSection.vue"
import AllBlogs from "@/components/BlogPageCompoents/AllBlogs.vue"
export default defineComponent({
  name: "BlogPage",
  components: {
    HeroSection, AllBlogs
  },
})
</script>