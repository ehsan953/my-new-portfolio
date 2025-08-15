<template>
  <section class="py-16 bg-black text-white">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      
      <!-- Title + Description -->
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD] mb-4">{{ heading }}</h2>
        <p class="text-gray-400 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <!-- Image + Text Flex -->
      <div class="flex flex-col md:flex-row items-start gap-10">
        <!-- Image (40%) -->
        <div class="flex-1 md:basis-2/5 flex justify-center mx-auto">
          <div class="relative w-full max-w-xs md:max-w-sm">
            <img 
              :src="image" 
              alt="About Me" 
              class="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- Text + Button (60%) -->
        <div class="flex-1 md:basis-3/5 text-left">
          <p class="text-gray-300 text-lg mb-4">
            I am a frontend developer with up to 2 years of experience specializing in Vue.js, Vuex, Vuetify, JavaScript, and basic React. I have also worked with Firebase and am currently expanding my skills towards full-stack development. <br/>In addition to coding, I bring over 3 years of experience in UI design, transforming Figma designs into fully responsive and visually appealing interfaces using HTML, CSS, and TailwindCSS. I enjoy crafting seamless user experiences and bridging the gap between design and development, delivering polished and interactive web applications.
          </p>
          <button class="bg-[#00A8CD] text-black px-6 py-3 rounded font-semibold hover:bg-[#0090b3] transition mb-4">
            Download CV
          </button>
          <!-- Skills -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
        <div v-for="skill in skills" :key="skill.name" class="space-y-2">
          <!-- Rounded Loading Bar -->
          <div class="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              class="h-2 rounded-full bg-[#00A8CD]" 
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
          <!-- Percentage -->
          <p class="text-gray-300 font-semibold text-center">{{ skill.percentage }}%</p>
          <!-- Skill Name -->
          <p class="text-gray-400 font-medium text-center">{{ skill.name }}</p>
        </div>
      </div>
        </div>
        
      </div>

      

    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMeSection",
  data() {
    return {
      heading: "About Me",
      description: "I am Muhammad Ehsan, a passionate software developer building responsive, interactive, and high-performance web applications.",
      image: "/ehsan.png", // replace with your full-length image path
      aboutText: ``,
      skills: [
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
        { name: "Tailwind CSS", percentage: 85 },
        { name: "Bootstrap", percentage: 70 },
        { name: "Saas", percentage: 70 },
        { name: "Vue.Js", percentage: 80 },
        { name: "Vuetify", percentage: 80 },
        { name: "Vuex", percentage: 80 },
        { name: "React", percentage: 50 },
        { name: "Firebase", percentage: 70 },
        { name: "Github", percentage: 70 },
      ],
    };
  },
});
</script>

<style scoped>
/* Optional: add glow/shadow to image */
img {
  box-shadow: 0 8px 20px rgba(0,168,205,0.5);
  transition: box-shadow 0.3s ease;
}

img:hover {
  box-shadow: 0 12px 25px rgba(0,168,205,0.8);
}
</style>
