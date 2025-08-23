<template>
  <section class="py-16 bg-black text-white">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      <!-- Section Title -->
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD] mb-6">
          My Blogs
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto text-lg">
          Insights, tutorials, and tips from my journey in web development.
        </p>
      </div>
      <!-- Layout Toggle -->
      <div class="flex justify-center space-x-2 mb-6">
        <button
          @click="layout = 'grid'"
          :class="
            layout === 'grid'
              ? 'bg-[#00A8CD] text-white'
              : 'bg-gray-700 text-gray-300'
          "
          class="px-4 py-2 rounded hover:bg-[#0090b3] transition"
        >
          Grid
        </button>
        <button
          @click="layout = 'list'"
          :class="
            layout === 'list'
              ? 'bg-[#00A8CD] text-white'
              : 'bg-gray-700 text-gray-300'
          "
          class="px-4 py-2 rounded hover:bg-[#0090b3] transition"
        >
          List
        </button>
      </div>
      <!-- Blog Grid/List -->
      <div
        v-if="layout === 'grid'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <router-link
          v-for="(blog, index) in paginatedBlogs"
          :key="index"
          to="/blogs"
          class="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img
            :src="blog.image"
            :alt="blog.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-[#00A8CD] mb-2">
              {{ blog.title }}
            </h3>
            <p class="text-gray-300 line-clamp-3">{{ blog.description }}</p>
          </div>
        </router-link>
      </div>

      <div v-else class="space-y-8">
        <div
          v-for="(blog, index) in paginatedBlogs"
          :key="index"
          class="border-2 border-gray-800 flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img
            :src="blog.image"
            :alt="blog.title"
            class="w-full md:w-1/4 h-48 object-cover"
          />
          <div class="p-6 text-left">
            <div class="mb-2">
              <h3 class="text-2xl font-semibold text-[#00A8CD] mb-2 ">
                {{ blog.title }}
              </h3>
              <p class="text-gray-300 line-clamp-3">{{ blog.description }}</p>
            </div>
            <router-link
              to="/blogs"
              class="inline-block text-[#00A8CD] font-medium hover:underline"
            >
              Read More →
            </router-link>
          </div>
        </div>
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
          :class="
            currentPage === page
              ? 'bg-[#00A8CD] text-white'
              : 'bg-gray-700 text-white'
          "
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogsPage",
  data() {
    return {
      layout: "grid", // can be 'grid' or 'list'
      blogs: [
        {
          title: "Mastering Vue 3 Composition API",
          description:
            "Learn how to use the Composition API to write cleaner and more scalable Vue.js applications.",
          image: "/blog_imgs/blog-bg.jpg",
        },
        {
          title: "10 Tailwind CSS Tricks You Should Know",
          description:
            "Speed up your workflow and create stunning designs with these Tailwind CSS tips and tricks.",
          image: "/blog_imgs/blog2.png",
        },
        {
          title: "Deploying Apps with Vercel",
          description:
            "A step-by-step guide to deploying modern web apps on Vercel with ease and speed.",
          image: "/blog_imgs/blog3.jpg",
        },
        
      ],
      currentPage: 1,
      itemsPerPage: 10,
      maxVisibleButtons: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.blogs.length / this.itemsPerPage);
    },
    paginatedBlogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.blogs.slice(start, start + this.itemsPerPage);
    },
    visiblePages() {
      let start = Math.max(
        this.currentPage - Math.floor(this.maxVisibleButtons / 2),
        1
      );
      let end = start + this.maxVisibleButtons - 1;

      if (end > this.totalPages) {
        end = this.totalPages;
        start = Math.max(end - this.maxVisibleButtons + 1, 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) pages.push(i);
      return pages;
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
