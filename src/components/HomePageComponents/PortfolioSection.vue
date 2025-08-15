<template>
  <section class="py-16 bg-black text-white">
    <div class="max-w-7xl mx-auto px-6 space-y-12">

      <!-- Section Title -->
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD] mb-4">{{ heading }}</h2>
        <p class="text-gray-400 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link v-for="project in projects" :key="project.id" :to="`/project/${project.id}`" class="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-[#00A8CD] mb-2">{{ project.title }}</h3>
            <p class="text-gray-300">{{ project.description }}</p>
          </div>
        </router-link>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <router-link to="/portfolio">
          <button class="bg-[#00A8CD] text-white px-8 py-3 rounded font-semibold hover:bg-[#0090b3] transition">
            View All
          </button>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import projectsData from "@/utils/projects.json";
export default defineComponent({
  name: "PortfolioSection",
  data() {
    return {
      heading: "My Portfolio",
      description: "Here are some of the projects I've worked on. You can explore more on the portfolio page.",
      projects: projectsData.slice(0, 6),
    };
  },
});
</script>

<style scoped>
/* Optional hover effect for project cards */
div[class*="shadow-lg"]:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
