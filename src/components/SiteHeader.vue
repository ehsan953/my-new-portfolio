<template>
  <header class="bg-gray-900 text-white">
    <div class="container mx-auto max-w-[1400px] flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-full bg-white text-[#00A8CD] flex items-center justify-center text-lg font-bold">
            M
          </div>
          <span class="truncate max-w-[100px] text-[#00A8CD] sm:max-w-[150px]">
            Ehsan
          </span>
        </div>
      </router-link>

      <!-- Hamburger button (mobile) -->
      <button
        class="md:hidden block text-gray-300 hover:text-white focus:outline-none"
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
      <nav class="hidden md:flex space-x-6">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="hover:text-[#00A8CD] text-gray-500"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>

    <!-- Mobile nav -->
    <div v-if="isOpen" class="md:hidden bg-gray-900 px-4 pb-4">
      <nav class="flex flex-col space-y-3">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="hover:text-[#00A8CD] text-gray-500"
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
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
})
</script>
