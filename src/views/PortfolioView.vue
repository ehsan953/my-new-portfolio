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
        <router-link 
          v-for="project in paginatedProjects" 
          :key="project.id" 
          :to="`/project/${project.id}`" 
          class="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover"/>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-[#00A8CD] mb-2">{{ project.title }}</h3>
            <p class="text-gray-300">{{ project.description }}</p>
          </div>
        </router-link>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center items-center mt-8 space-x-2">
        <!-- Previous -->
        <button 
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50 transition"
        >
          &lt;
        </button>

        <!-- Page Buttons -->
        <button 
          v-for="page in visiblePages" 
          :key="page"
          @click="currentPage = page"
          :class="currentPage === page ? 'bg-[#00A8CD] text-black' : 'bg-gray-700 text-white'"
          class="px-4 py-2 rounded font-semibold hover:bg-[#0090b3] transition"
        >
          {{ page }}
        </button>

        <!-- Next -->
        <button 
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50 transition"
        >
          &gt;
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import projectsData from "@/utils/projects.json";

export default defineComponent({
  name: "PortfolioPage",
  data() {
    return {
      heading: "My Portfolio",
      description: "Explore my latest web development projects, including UI/UX designs, frontend implementations, and interactive web applications. Click on any project to see its details or view live demos.",
      projects: projectsData,
      currentPage: 1,
      itemsPerPage: 9,
      maxVisibleButtons: 5
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.projects.length / this.itemsPerPage);
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.projects.slice(start, start + this.itemsPerPage);
    },
    visiblePages() {
      let start = Math.max(this.currentPage - Math.floor(this.maxVisibleButtons / 2), 1);
      let end = start + this.maxVisibleButtons - 1;

      if (end > this.totalPages) {
        end = this.totalPages;
        start = Math.max(end - this.maxVisibleButtons + 1, 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) pages.push(i);
      return pages;
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    }
  }
});
</script>

<style scoped>
div[class*="shadow-lg"]:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
