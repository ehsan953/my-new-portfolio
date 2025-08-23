<template>
  <section
    class="relative min-h-[80vh] bg-black text-white overflow-hidden flex items-center"
  >
    <!-- Background Image + Overlay -->
    <div
      class="hidden md:block absolute inset-0 bg-cover bg-center"
      style="background-image:url('/1719419702bg.jpg')"
    ></div>
    <div class="absolute inset-0 bg-black/80"></div>

    <!-- Glow Background -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00A8CD] opacity-25 blur-[220px] rounded-full"
    ></div>

    <div
      class="relative z-10 container mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 lg:px-16"
    >
      <div class="flex-1 text-center md:text-left animate-fadeIn">
          <h1 class="text-4xl md:text-[42px] lg:text-5xl font-bold my-8">
            {{ name }}
          </h1>
          <p class="text-2xl text-[#00A8CD] mb-8">
            {{ designation }}
          </p>

        <!-- Social Links -->
        <div class="mb-8 flex justify-center md:justify-start space-x-6">
          <a
            v-for="icon in socialLinks"
            :key="icon.name"
            :href="icon.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[#00A8CD] transition-colors"
          >
            <i :class="icon.iconClass" class="text-2xl"></i>
          </a>
        </div>

        <div class="flex justify-center md:justify-start gap-4 mb-8">
          <router-link to="/contact">
            <button
              class="text-[#00A8CD] font-medium px-6 py-3 rounded hover:bg-[#0090b3] hover:text-black transition glow"
            >
              Hire Me
            </button>
          </router-link>
          <button
            class="text-[#00A8CD] font-medium px-6 py-3 rounded hover:bg-[#00A8CD] hover:text-black transition"
            onclick="window.location.href='/EhsanResumeB.pdf'"
            style="border:1px solid #00A8CD !important"
          >
            Download CV
          </button>
        </div>

        <div
          class="border-2 border-gray-800 mx-auto xl:w-[80%] flex sm:gap-8 bg-[#111] rounded-lg shadow-md py-4 px-6 text-center justify-center divide-x divide-gray-600" style="border-bottom:1px solid #00A8CD !important"
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
          class="w-[300px] h-[330px] sm:w-[370px] sm:h-[440px] md:w-[300px] md:h-[330px] lg:w-[350px] lg:h-[400px] xl:w-[370px] xl:h-[420px] bg-[#00303b] rounded-full relative flex justify-center items-center animate-fadeIn animation-delay-100"
        >
          <img
            :src="image"
            alt="Profile"
            class="w-[285px] sm:w-[350px] md:w-[266px] lg:w-[315px] xl:w-[330px] object-cover absolute -top-[90px] sm:-top-[80px] md:-top-[60px] rounded-[40%] drop-shadow-[0_10px_15px_rgba(0,168,205,0.5)] animate-float"
          />
        </div>
      </div>
    </div>

    <!-- Floating Shapes -->
    <div
      class="absolute top-32 hidden sm:block md:top-24 left-5 sm:left-24 w-8 sm:w-14 h-8 sm:h-14 border-2 border-[#00A8CD] rounded-full backdrop-blur-md bg-[#00A8CD]/10 animate-float"
    ></div>
    <div
      class="absolute hidden sm:block top-44 right-12 sm:top-36 md:top-36 sm:right-32 md:right-24 lg:right-32 w-6 h-6 sm:w-8 sm:h-8 border-2 border-cyan-400 rounded-md rotate-12 animate-spinSlow"
    ></div>
    <div
      class="absolute hidden sm:block bottom-20 md:bottom-12 lg:bottom-20 right-24 w-16 h-16 lg:w-20 lg:h-20 bg-[#00A8CD]/20 backdrop-blur-xl rounded-xl animate-floatSlow"
    ></div>

    <!-- Extra Particles -->
    <div
      v-for="n in 20"
      :key="n"
      class="md:hidden absolute w-2 h-2 bg-cyan-300 rounded-full blur-sm opacity-70 animate-pulseSlow"
      :style="randomPosition()"
    ></div>
    <div
      v-for="n in 44"
      :key="n"
      class="hidden md:block absolute w-3 h-3 bg-cyan-300 rounded-full blur-sm opacity-70 animate-pulseSlow"
      :style="randomPosition()"
    ></div>
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
  methods: {
    randomPosition() {
      const top = Math.random() * 80 + "%";
      const left = Math.random() * 90 + "%";
      const delay = Math.random() * 3 + "s";
      return `top:${top};left:${left};animation-delay:${delay}`;
    },
  },
});
</script>

<style scoped>
/* Gradient Title */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientMove 6s ease infinite;
}
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
/* Floating Shapes */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
.animate-float { animation: float 5s ease-in-out infinite; }
.animate-floatSlow { animation: float 8s ease-in-out infinite; }

/* Pulse Glow */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}
.animate-pulseSlow { animation: pulseSlow 3s infinite; }

/* Spin Slow */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spinSlow { animation: spinSlow 8s linear infinite; }

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }
</style>
