<template>
  <div class="main-layout">
    <SiteHeader v-if="!isAdminRoute"/>

    <div class="min-h-[80vh] bg-black">
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <SiteFooter v-if="!isAdminRoute"/>
  </div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'MainLayout',
  components: { SiteHeader, SiteFooter },
  data() {
    return {
      isAdminRoute: false
    }
  },
  created() {
    // Set initial value
    this.isAdminRoute = this.$route.path.startsWith('/admin/dashboard')
  },
  watch: {
    // React to route changes
    '$route.path'(newPath) {
      this.isAdminRoute = newPath.startsWith('/admin/dashboard')
    }
  }
}
</script>
