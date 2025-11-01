<template>
  <section class="py-16 bg-black text-white">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      
      <!-- Title + Description -->
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD] mb-6">{{ heading }}</h2>
        <p class="text-gray-400 max-w-3xl mx-auto text-lg">{{ description }}</p>
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
          <p class="text-gray-300 text-lg mb-6 md:py-2">
            I am a frontend developer with up to 2 years of experience specializing in Vue.js, Vuex, Vuetify, JavaScript, and basic React. I have also worked with Firebase and am currently expanding my skills towards full-stack development.<br/>

            In addition to coding, I bring over 3 years of experience in UI design, transforming Figma designs into fully responsive and visually appealing interfaces using HTML, CSS, and TailwindCSS. 
            I enjoy crafting seamless user experiences and bridging the gap between design and development, delivering polished and interactive web applications.<br/>

            I am passionate about learning new technologies and continuously improving my skill set. 
            I take pride in writing clean, maintainable code while adhering to best practices and modern development standards.<br/>

            Whether it’s building responsive layouts, integrating APIs, or optimizing performance, I strive to create solutions that meet user needs and business goals effectively.
          </p>
          <div class="flex justify-start">
              <button
                class="text-[#00A8CD] font-medium px-6 py-3 rounded hover:bg-[#00A8CD] hover:text-black transition"
                style="border:1px solid #00A8CD !important"
                onclick="window.location.href='/EhsanResumeB.pdf'"
                >
                Download CV
              </button>
          </div>
          <!-- Skills -->
        </div>
        
    </div>
    <h3 class="text-3xl md:text-4xl font-bold text-[#00A8CD] mb-12 text-center">
        Skills
    </h3>
    <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-7 lg:w-[90%] mx-auto gap-8 mt-6">
      <div v-for="skill in skills" :key="skill.name" class="space-y-2">
        <!-- Rounded Loading Bar -->
        <!-- <div class="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            class="h-2 rounded-full bg-[#00A8CD]" 
            :style="{ width: skill.percentage + '%' }"
          ></div>
        </div>   -->
        <div class="relative w-20 h-20 m-auto">
            <!-- Background Circle -->
            <svg class="w-full h-full" viewBox="0 0 36 36">
                <path
                class="text-gray-700"
                stroke-width="3.8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                d="
                    M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831
                "
                />
                <!-- Progress Circle -->
                <path
                class="text-[#00A8CD]"
                stroke-width="3.8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                :stroke-dasharray="skill.percentage + ', 100'"
                d="
                    M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831
                "
                />
            </svg>
            <!-- Center Icon (optional) -->
            <div class="absolute inset-0 flex items-center justify-center text-white">
                <slot></slot>
            </div>
            </div>
        <!-- Percentage -->
        <p class="text-gray-300 font-semibold text-center">{{ skill.percentage }}%</p>
        <!-- Skill Name -->
        <p class="text-gray-400 font-medium text-center">{{ skill.name }}</p>
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
      image: "/ehsan3.jpg",
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
