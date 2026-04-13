<template>
  <section class="py-16 bg-black text-white">
    <div class="max-w-4xl mx-auto px-6 space-y-10">
      
      <!-- Title -->
      <h2 v-reveal="'fade-in-down'" class="text-4xl font-bold text-[#00A8CD]">{{ project.title }}</h2>

      <!-- Images + Button in Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Images -->
        <img
          v-for="(img, index) in project.images"
          :key="'img-' + index"
          v-reveal="{
            animation: ['fade-in-up', 'fade-in-left', 'fade-in-right', 'fade-in-down'][index % 4],
            delay: index * 80,
          }"
          :src="img"
          :alt="`${project.title} screenshot ${index + 1}`"
          class="w-full h-auto object-cover rounded-lg shadow-lg hover:cursor-pointer"
          @click="openImage(img)"
        />

        <!-- Live Project Button in last grid slot -->
        <div
          v-if="project.url"
          v-reveal="'fade-in-up'"
          class="flex items-center justify-center sm:border sm:border-[#00A8CD]"
        >
          <button class="hover:bg-[#00A8CD] text-[#00A8CD] border border-[#00A8CD] hover:text-white rounded-lg shadow-lg transition cursor-pointer glow">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full h-full text-center font-semibold px-6 py-3"
            >
              View Live Project
            </a>
          </button>
        </div>
      </div>

      <!-- Description -->
      <p v-reveal="'fade-in-up'" class="text-gray-300 text-left" v-html="project.details"></p>
      <br/>
      <!-- Goal -->
      <p v-reveal="'fade-in-up'" class="text-gray-300 text-left mt-0" v-html="project.goal"></p>
      <!-- Technologies -->
      <div v-if="project.technologies && project.technologies.length" v-reveal="'fade-in-left'" class="text-left">
        <h3 class="text-2xl font-semibold text-[#00A8CD] mt-6 mb-2">Technologies Used</h3>
        <ul class="list-disc list-outside pl-5 text-gray-400">
          <li v-for="(tech, index) in project.technologies" :key="'tech-' + index">
            {{ tech }}
          </li>
        </ul>
      </div>

      <!-- Features -->
      <div v-if="project.features && project.features.length" v-reveal="'fade-in-right'" class="text-left">
        <h3 class="text-2xl font-semibold text-[#00A8CD] mt-6 mb-2">Key Features</h3>
        <ul class="list-disc list-outside pl-5 text-gray-400">
          <li v-for="(feature, index) in project.features" :key="'feature-' + index">
            {{ feature }}
          </li>
        </ul>
      </div>

    </div>
    <!-- Image Dialog -->
    <v-dialog v-model="dialog" max-width="1400px">
      <v-card style="padding:8px">
        <v-img :src="selectedImage" alt="Selected" class="w-full h-auto rounded-lg" />
      </v-card>
    </v-dialog>
  </section>
</template>


<script>
import projectsData from "@/utils/projects.json";

export default {
  name: "PortfolioDetail",
  data() {
    const projectId = parseInt(this.$route.params.id);
    const project = projectsData.find(p => p.id === projectId) || {};
    return { 
      project,
      dialog: false,
      selectedImage: null
    };
  },
  methods: {
    openImage(img) {
      this.selectedImage = img;
      this.dialog = true;
    }
  }
};
</script>

<style scoped>
img {
  box-shadow: 0 8px 20px rgba(0, 168, 205, 0.5);
  transition: box-shadow 0.3s ease;
}
img:hover {
  box-shadow: 0 12px 25px rgba(0, 168, 205, 0.8);
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
</style>
