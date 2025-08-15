<template>
  <div class="main-layout">
    <SiteHeader />

    <div class="min-h-[80vh] bg-black">
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'MainLayout',
  components: { SiteHeader, SiteFooter }
}
</script>
