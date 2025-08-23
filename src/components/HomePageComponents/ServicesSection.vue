<template>
  <section class="py-16 bg-black text-white">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD] mb-6">My Services</h2>
      <p class="text-gray-400 max-w-2xl mx-auto px-2 text-lg">
        I help businesses and individuals with modern web solutions, creating responsive, interactive, and high-performance websites and applications.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
      <div 
        v-for="service in services" 
        :key="service.title" 
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
          description: "Build responsive, modern websites using Vue, React, or Node.js.",
          iconClass: "fas fa-laptop-code",
        },
        {
          title: "UI/UX Design",
          description: "Design intuitive interfaces and engaging user experiences.",
          iconClass: "fas fa-paint-brush",
        },
        {
          title: "Backend Development",
          description: "Create robust server-side applications and APIs.",
          iconClass: "fas fa-server",
        },
        {
          title: "Frontend Optimization",
          description: "Improve website performance, SEO, and user experience.",
          iconClass: "fas fa-bolt",
        },
        {
          title: "API Integration",
          description: "Integrate third-party services and payment gateways.",
          iconClass: "fas fa-link",
        },
        {
          title: "Consulting",
          description: "Provide technical guidance for your projects and workflows.",
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
