<template>
  <section class=" bg-black text-white py-12 px-6 md:px-12 lg:px-16">
    <div
      class="container mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div class="flex-1">
          <h1 class="text-4xl md:text-[42px] lg:text-5xl font-bold mb-8">
            {{ name }}
          </h1>
          <p class="text-2xl text-[#00A8CD] mb-8">
            {{ designation }}
          </p>

        
        <div class="mb-8 flex justify-center space-x-6">
            <a
                v-for="icon in socialLinks"
                :key="icon.name"
                :href="icon.url"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-[#00A8CD] transition-colors "
            >
                <i :class="icon.iconClass" class="text-2xl"></i>
            </a>
        </div>
        <div class="flex justify-center gap-4 mb-8">
            <router-link to="/contact">
                <button
                  class="text-[#00A8CD] font-medium px-6 py-3 rounded hover:bg-[#0090b3] hover:text-black transition glow"
                >
                  Hire Me
                </button>
            </router-link>
          <button
            class="border border-[#00A8CD] text-[#00A8CD] font-medium px-6 py-3 rounded hover:bg-[#00A8CD] hover:text-black transition"
          >
            Download CV
          </button>
        </div>

        <div
          class="mx-auto xl:w-[80%] flex sm:gap-8 bg-[#111] rounded-lg shadow-md py-4 px-6 text-center justify-center divide-x divide-gray-600 border-b border-[#00A8CD]"
        >
          <div class="px-4">
            <p class="text-2xl font-bold">{{ stats.experience }}</p>
            <p class="text-gray-400 text-sm">Experience</p>
          </div>
          <div class="px-4">
            <p class="text-2xl font-bold">{{ stats.projects }}</p>
            <p class="text-gray-400 text-sm">Projects</p>
          </div>
          <div class="px-4">
            <p class="text-2xl font-bold">{{ stats.clients }}</p>
            <p class="text-gray-400 text-sm">Clients</p>
          </div>
        </div>
      </div>

      <div class="flex-1 flex justify-center relative mt-8 md:mt-0 py-8">
        <div
          class="w-[300px] h-[330px] sm:w-[370px] sm:h-[440px] md:w-[300px] md:h-[330px] lg:w-[350px] lg:h-[400px] xl:w-[370px] xl:h-[420px] bg-gray-800 rounded-full relative flex justify-center items-center "
        >
          <img
            :src="image"
            alt="Profile"
            class="w-[285px] sm:w-[350px] md:w-[266px] lg:w-[315px] xl:w-[330px] object-cover absolute -top-[90px] sm:-top-[80px] md:-top-[60px] rounded-[40%] drop-shadow-[0_10px_15px_rgba(0,168,205,0.5)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroSection",
  data() {
    return {
      name: "Muhammad Ehsan",
      designation: "Software Developer",
      image: "/ehsan.png",
      stats: {
        experience: "3+",
        projects: "20+",
        clients: "10+",
      },
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/ehsan953', iconClass: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ehsan-b0b59a367/', iconClass: 'fab fa-linkedin' },
        // { name: 'Twitter', url: 'https://twitter.com/yourusername', iconClass: 'fab fa-twitter' },
        { name: 'Facebook', url: 'https://www.facebook.com/ehsan.rajpoot.7140?mibextid=ZbWKwL', iconClass: 'fab fa-facebook' },
        { name: 'Instagram', url: 'https://www.instagram.com/ehsanrajpoot39?igsh=MWJvdDR3aDY0ZGptMw==', iconClass: 'fab fa-instagram' },
      ]
    };
  },
});
</script>
<style scoped>
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px 1px #00A8CD;
  }
  50% {
    box-shadow: 0 0 15px 4px #00A8CD;
  }
}

.glow {
  animation: glowPulse 1.7s ease-in-out infinite;
}

</style>
