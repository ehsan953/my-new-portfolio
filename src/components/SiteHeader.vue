<template>
  <header class="bg-gray-900 text-white">
    <div class="container mx-auto max-w-[1400px] flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold order-2">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-lg font-bold" style="border:1px solid #00A8CD !important; color:#00A8CD !important">
            M
          </div>
          <span class="truncate max-w-[100px] text-[#00A8CD] sm:max-w-[150px]">
            Ehsan
          </span>
        </div>
      </router-link>

      <!-- Hamburger button (mobile) -->
      <button
        class="order-1 sm:hidden block text-gray-300 hover:text-white focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden sm:flex sm:order-2 gap-6 md:gap-8">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="hover:text-[#00A8CD] text-gray-400 font-medium"
        >
          {{ item.name }}
        </router-link>
      </nav>
      <router-link to="/contact" class="order-3">
        <button class="hover:bg-[#00a7cdf4] py-2 px-4 rounded-md font-medium glow">
          Contact
        </button>
      </router-link>
    </div>

    <!-- Mobile nav -->
    <div
      class="absolute opacity-95 top-[62px] left-0 w-full bg-gray-900 px-4 py-6 transform transition-transform duration-300 ease-in-out sm:hidden z-50"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Menu items -->
      <nav class="flex flex-col gap-4">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="hover:text-[#00A8CD] text-gray-400 font-medium"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>

  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteHeader',
  data() {
    return {
      isOpen: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        // { name: 'Contact', path: '/contact' }
      ]
    }
  }
})
</script>
<style scoped>
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px 1px #00A8CD;
  }
  50% {
    box-shadow: 0 0 20px 4px #00A8CD;
  }
}

.glow {
  animation: glowPulse 1.7s ease-in-out infinite;
}
</style>
