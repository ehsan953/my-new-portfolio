<template>
  <section class="min-h-[80vh] flex items-center justify-center bg-black text-white">
    <div class="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-8 space-y-6 border-2 border-[#00A8CD]">
      <!-- Title -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-[#00A8CD]">Admin Login</h2>
        <p class="text-gray-400 mt-2">Sign in to manage your blogs</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-2 border-gray-800 focus:border-[#00A8CD] focus:ring-2 focus:ring-[#00A8CD] outline-none transition"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#00A8CD] focus:ring-2 focus:ring-[#00A8CD] outline-none transition"
            required
          />
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full py-2 px-4 rounded-lg bg-[#00A8CD] text-white font-semibold hover:bg-[#0090b3] transition"
        >
          Login
        </button>
      </form>

      <!-- Status / Error Message -->
      <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">
        {{ errorMessage }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async handleLogin() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter both email and password.";
        return;
      }

      // 🔒 In future: integrate Firebase Auth here
      // For now just simulate login
      if (this.email === "muhammadehsanhassan781@gmail.com" && this.password === "ehsan@7656") {
        this.errorMessage = "";
        alert("Login successful! 🚀 (Later this will redirect to Admin Dashboard)");
        this.$router.push("/admin/dashboard");
      } else {
        this.errorMessage = "Invalid email or password.";
      }
    }
  }
});
</script>
