<template>
  <footer class="bg-gray-900 text-white text-center px-4 py-8 border-t-2 border-gray-800">
    <!-- Logo Row -->
    <div class="mb-6 flex justify-center">
      <router-link to="/" class="flex items-center space-x-2 w-[310px] h-[90px]">
        <!-- <div class="w-12 h-12 rounded-full bg-white text-[#00A8CD] flex items-center justify-center text-lg font-bold">
          M
        </div>
        <span class="text-[#00A8CD] font-bold text-lg">Ehsan</span> -->
        <img src="/transparent-logo.png" alt="" class="cover">
      </router-link>
    </div>

    <!-- Navigation Row -->
    <div class="mb-6 flex flex-wrap justify-center gap-6">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="hover:text-[#00A8CD] transition-colors"
      >
        {{ item.name }}
      </router-link>
    </div>

    <!-- Social Icons Row -->
    <div class="mb-6 flex justify-center space-x-6">
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

    <!-- Contact Info Row -->
    <div class="mb-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
        <a
            href="mailto:muhammadehsanhassan781@gmail.com"
            class="flex items-center space-x-2 hover:text-[#00A8CD] transition-colors"
        >
            <i class="fas fa-envelope text-[#00A8CD]"></i>
            <span class="email-size">muhammadehsanhassan781@gmail.com</span>
        </a>
        <a
            href="tel:+923034408443"
            class="flex items-center space-x-2 hover:text-[#00A8CD] transition-colors"
        >
            <i class="fas fa-phone text-[#00A8CD]"></i>
            <span>+92 303 440 8443</span>
        </a>
    </div>

    <!-- Divider -->
    <hr class="border-gray-700 mb-4 w-[200px] mx-auto" />

    <!-- Footer Note -->
    <div class="text-gray-400 text-sm">
      Designed by <span class="text-[#00A8CD]">@Muhammad Ehsan</span> Frontend Developer
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteFooter',
  data() {
    return {
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blogs' },
      ],
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/ehsan953', iconClass: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ehsan-b0b59a367/', iconClass: 'fab fa-linkedin' },
        // { name: 'Twitter', url: 'https://twitter.com/yourusername', iconClass: 'fab fa-twitter' },
        { name: 'Facebook', url: 'https://www.facebook.com/ehsan.rajpoot.7140?mibextid=ZbWKwL', iconClass: 'fab fa-facebook' },
        { name: 'Instagram', url: 'https://www.instagram.com/ehsanrajpoot39?igsh=MWJvdDR3aDY0ZGptMw==', iconClass: 'fab fa-instagram' },
      ]
    }
  }
})
</script>

<style>
@media(max-width:360px){
    .email-size{
        font-size: 15px;
    }
}
</style>
