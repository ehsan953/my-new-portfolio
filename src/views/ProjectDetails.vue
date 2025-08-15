<template>
  <section class="py-16 bg-black text-white">
    <div class="max-w-4xl mx-auto px-6 space-y-6">
      <h2 class="text-4xl font-bold text-[#00A8CD]">{{ project.title }}</h2>
      
      <img :src="project.image" :alt="project.title" class="w-full h-auto object-cover rounded-lg shadow-lg"/>

      <p class="text-gray-300">{{ project.details }}</p>

      <!-- Live Project Link -->
      <div v-if="project.url" class="mt-4">
        <a 
          :href="project.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block bg-[#00A8CD] text-black px-6 py-3 rounded font-semibold hover:bg-[#0090b3] transition"
        >
          View Live Project
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from "@/utils/projects.json";

export default {
  name: "PortfolioDetail",
  data() {
    const projectId = parseInt(this.$route.params.id);
    const project = projectsData.find(p => p.id === projectId) || {};

    return { project };
  },
};
</script>

<style scoped>
img {
  box-shadow: 0 8px 20px rgba(0,168,205,0.5);
  transition: box-shadow 0.3s ease;
}

img:hover {
  box-shadow: 0 12px 25px rgba(0,168,205,0.8);
}
</style>
