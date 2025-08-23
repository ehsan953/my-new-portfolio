<template>
  <div class="flex min-h-screen bg-black  text-white" >
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 p-6 flex flex-col bg-no-repeat bg-cover" style="background-image:url('/1719419702bg.jpg')">
      <h2 class="text-2xl font-bold text-[#00A8CD] mb-6">Muhammad Ehsan</h2>
      <v-avatar size="80px" class="mx-auto mb-6">
        <img src="/ehsan2.png" alt="">
      </v-avatar>
      <nav class="flex flex-col space-y-3">
        <button
          class="text-left px-3 py-2 rounded hover:bg-gray-800 transition"
          :class="activeTab === 'blogs' ? 'bg-[#00A8CD] text-white' : 'text-gray-300'"
          @click="activeTab = 'blogs'"
        >
          Blogs
        </button>
        <button
          class="text-left px-3 py-2 rounded hover:bg-gray-800 transition"
          :class="activeTab === 'careers' ? 'bg-[#00A8CD] text-white' : 'text-gray-300'"
          @click="activeTab = 'careers'"
        >
          Careers
        </button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 space-y-6 relative">
      <AdminBlogs v-if="activeTab === 'blogs'" />
      <AdminCareers v-if="activeTab === 'careers'" />
      <!-- Extra Particles -->
    <div
      v-for="n in 54"
      :key="n"
      class="absolute w-2 h-2 bg-cyan-300 rounded-full blur-sm opacity-70 animate-pulseSlow"
      :style="randomPosition()"
    ></div>
    </main>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminBlogs from "@/components/AdminComponents/AdminBlogs.vue";
import AdminCareers from "@/components/AdminComponents/AdminCareers.vue";

export default defineComponent({
  name: "AdminDashboard",
  components: { AdminBlogs, AdminCareers },
  data() {
    return {
      activeTab: "blogs",
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
/* Pulse Glow */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}
.animate-pulseSlow {
  animation: pulseSlow 3s infinite;
}
</style>