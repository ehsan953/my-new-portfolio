<template>
  <section id="blogs" class="relative py-20 bg-black text-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Latest <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8CD] to-cyan-400">Blogs</span>
        </h2>  
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Insights, tutorials, and thoughts on web development and coding.
        </p>
      </div>

      <!-- Blog Cards -->
      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="bg-gray-900 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
              {{ blog.title }}
            </h3>
            <p class="text-gray-400 text-sm mb-4 line-clamp-3">
              {{ blog.description }}
            </p>
            <router-link to="/blogs"
              class="inline-block text-cyan-400 font-medium hover:underline"
            >
              Read More →
            </router-link>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-10 flex justify-center animate-fadeIn animation-delay-400">
        <router-link to="/blogs" class="relative inline-block px-10 py-3 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-[#00A8CD] to-cyan-400 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_#00A8CD] shadow-lg shadow-[#00A8CD]/40">
          Explore Blogs
          <span
            class="absolute inset-0 rounded-full bg-gradient-to-r from-[#00A8CD] to-cyan-400 opacity-40 blur-lg -z-10"
          ></span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogSection",
  data() {
    return {
      blogs: [
        {
          title: "Mastering Vue 3 Composition API",
          description:
            "Learn how to use the Composition API to write cleaner and more scalable Vue.js applications.",
          image: "/blog_imgs/blog-bg.jpg",
          link: "/blogs/vue-composition-api",
        },
        {
          title: "10 Tailwind CSS Tricks You Should Know",
          description:
            "Speed up your workflow and create stunning designs with these Tailwind CSS tips and tricks.",
          image: "/blog_imgs/blog2.png",
          link: "/blogs/tailwind-tips",
        },
        {
          title: "Deploying Apps with Vercel",
          description:
            "A step-by-step guide to deploying modern web apps on Vercel with ease and speed.",
          image: "/blog_imgs/blog3.jpg",
          link: "/blogs/deploy-vercel",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* Clamp text for 3 lines */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}
</style>
