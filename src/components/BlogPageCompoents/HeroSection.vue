<template> 
  <section
    class="relative min-h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden"
  >
    <!-- Background image with overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image:url('/blog-bg.jpg')"
    ></div>
    <div class="absolute inset-0 bg-black/80"></div>

    <!-- Glow Background -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00A8CD] opacity-25 blur-[220px] rounded-full"
    ></div>

    <div class="relative z-10 max-w-5xl mx-auto text-center px-6">
      <!-- Title -->
      <h1
        class="text-4xl md:text-6xl md:leading-[1.2] font-extrabold leading-tight tracking-tight animate-fadeIn"
      >
        {{ title }}
        <span
          class="block text-transparent bg-clip-text bg-gradient-to-r from-[#00A8CD] via-cyan-300 to-cyan-400 animate-gradient"
        >
          {{ highlight }}
        </span>
      </h1>

      <!-- Subtitle -->
      <p
        class="mt-6 text-lg md:text-xl text-gray-300 animate-fadeIn animation-delay-200"
      >
        {{ subtitle }}
      </p>

      <!-- CTA Button -->
      <div class="mt-10 flex justify-center animate-fadeIn animation-delay-400">
        <router-link
          to="/contact"
          class="relative inline-block px-10 py-3 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-[#00A8CD] to-cyan-400 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_#00A8CD] shadow-lg shadow-[#00A8CD]/40"
        >
          {{ buttonText }}
          <span
            class="absolute inset-0 rounded-full bg-gradient-to-r from-[#00A8CD] to-cyan-400 opacity-40 blur-lg -z-10"
          ></span>
        </router-link>
      </div>
    </div>

    <!-- Floating Shapes -->
    <div
      class="absolute top-24 left-20 w-14 h-14 border-2 border-[#00A8CD] rounded-full backdrop-blur-md bg-[#00A8CD]/10 animate-float"
    ></div>

    <div
      class="absolute top-36 right-32 w-8 h-8 border-2 border-cyan-400 rounded-md rotate-12 animate-spinSlow"
    ></div>

    <div
      class="absolute bottom-20 right-24 lg:right-64 lg:bottom-10 w-20 h-20 bg-[#00A8CD]/20 backdrop-blur-xl rounded-xl animate-floatSlow"
    ></div>

    <!-- Extra Particles -->
    <div
      v-for="n in 54"
      :key="n"
      class="absolute w-2 h-2 bg-cyan-300 rounded-full blur-sm opacity-70 animate-pulseSlow"
      :style="randomPosition()"
    ></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogHero",
  data() {
    return {
      title: "Welcome to My",
      highlight: "Blogs",
      subtitle:
        "A space where I share coding tutorials, web development tips, and personal insights.",
      buttonText: "Lets Connect",
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
/* Title Gradient Animation */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientMove 6s ease infinite;
}

/* Floating Animation */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.animate-floatSlow {
  animation: float 8s ease-in-out infinite;
}

/* Pulse Glow */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}
.animate-pulseSlow {
  animation: pulseSlow 3s infinite;
}

/* Spin Slow */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spinSlow {
  animation: spinSlow 15s linear infinite;
}

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
</style>
