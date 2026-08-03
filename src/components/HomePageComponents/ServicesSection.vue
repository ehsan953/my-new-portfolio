<template>
  <section class="py-16 bg-black text-white">
    <!-- Section Header -->
    <div v-reveal="'fade-in-down'" class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD] mb-6">My Services</h2>
      <p class="text-gray-400 max-w-2xl mx-auto px-2 text-lg">
        I specialize in building modern, high-performance frontend applications and scalable web solutions.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
      <div 
        v-for="(service, index) in services" 
        :key="service.title"
        v-reveal="{
          animation: ['fade-in-up', 'fade-in-left', 'fade-in-right', 'fade-in-down'][index % 4],
          delay: index * 75,
        }"
        class="border-2 border-gray-800 bg-gray-900 p-6 rounded-lg text-center hover:shadow-lg hover:shadow-[#00A8CD]/50 transition"
      >
        <!-- Icon -->
        <i :class="service.iconClass" class="text-4xl mb-4 text-[#00A8CD]"></i>
        <!-- Title -->
        <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
        <!-- Description -->
        <p class="text-gray-400">{{ service.description }}</p>
      </div>
    </div>
    
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          title: "Web Development",
          description: "Build fast, responsive, and scalable web applications using Vue, React, and modern frontend technologies with a focus on performance and clean architecture.",
          iconClass: "fas fa-laptop-code",
        },
        {
          title: "UI/UX Design",
          description: "Convert Figma and design files into pixel-perfect, responsive interfaces with strong focus on usability and user experience.",
          iconClass: "fas fa-paint-brush",
        },
        {
          title: "Backend Development",
          description: "Develop backend services and REST APIs using Node.js and Firebase, focusing on real-time data handling and scalable architecture.",
          iconClass: "fas fa-server",
        },
        {
          title: "Frontend Optimization",
          description: "Optimize frontend performance, improve loading speed, and enhance SEO and accessibility for better user experience.",
          iconClass: "fas fa-bolt",
        },
        {
          title: "API Integration",
          description: "Integrate third-party APIs, payment gateways, and external services seamlessly into web applications.",
          iconClass: "fas fa-link",
        },
        {
          title: "Consulting",
          description: "Provide technical guidance on frontend architecture, performance optimization, and best practices for scalable web applications.",
          iconClass: "fas fa-comments",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* Optional: smooth hover glow effect for icons */
i {
  transition: text-shadow 0.3s ease;
  text-shadow: 0 6px 15px rgba(0,168,205,0.5);
}

i:hover {
  text-shadow: 0 10px 20px rgba(0,168,205,0.8);
}
</style>
