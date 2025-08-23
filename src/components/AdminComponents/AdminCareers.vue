<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold text-[#00A8CD]">Careers</h2>
      <v-btn color="#00A8CD" dark @click="dialog = true">+ Add Career</v-btn>
    </div>

    <!-- Careers Table -->
    <!-- (similar to Blogs table but with career fields like Position, Department, etc.) -->

    <!-- Dialog for Adding Career -->
    <!-- (similar to Add Blog dialog but with career fields) -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CareersWorking",
  data() {
    return {
      
    };
  },
  
  methods: {
    
  },
});
</script>
