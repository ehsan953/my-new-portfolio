<template>
  <section class="py-20 bg-black text-white">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      <!-- Section Title -->
      <div class="text-center space-y-2">
        <h2 class="text-4xl md:text-5xl font-bold text-[#00A8CD]">
          {{ heading }}
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <!-- Contact Content -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Form -->
        <div class="basis-1/2 bg-gray-900 rounded-xl p-8 shadow-lg">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00A8CD] outline-none text-white"
                required
              />
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email"
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00A8CD] outline-none text-white"
                required
              />
            </div>
            <div>
              <input
                v-model="form.phone"
                placeholder="WhatsApp (Optional)"
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00A8CD] outline-none text-white"
              />
            </div>
            <div>
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                rows="5"
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00A8CD] outline-none text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full hover:bg-[#00A8CD] text-[#00A8CD] hover:text-white px-6 py-3 rounded-lg font-semibold transition"
              style="border:1px solid #00A8CD !important"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info + Social Links -->
        <div class="flex basis-1/2 flex-col gap-6">
          <!-- Info Cards -->
          <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            <div
              class="flex items-start gap-4 bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <i class="fas fa-envelope text-[#00A8CD] text-2xl mt-1"></i>
              <div class="text-left break-words">
                <h4 class="text-[#00A8CD] font-semibold">Email</h4>
                <p class="text-gray-300 break-all">muhammadehsanhassan781@gmail.com</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <i class="fas fa-phone-alt text-[#00A8CD] text-2xl mt-1"></i>
              <div class="text-left">
                <h4 class="text-[#00A8CD] font-semibold">Phone</h4>
                <p class="text-gray-300">+92 303 4408443</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <i class="fas fa-map-marker-alt text-[#00A8CD] text-2xl mt-1"></i>
              <div class="text-left">
                <h4 class="text-[#00A8CD] font-semibold">Location</h4>
                <p class="text-gray-300">Lahore, Pakistan</p>
              </div>
            </div>
            <div class="flex items-start gap-4 bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition">
                <i class="fas fa-comment-dots text-[#00A8CD] text-2xl mt-1"></i>
                <div class="text-left">
                    <h4 class="text-[#00A8CD] font-semibold">Message</h4>
                    <p class="text-gray-300">Send me a message via the form or reach me via social media below</p>
                </div>
            </div>
          </div>

          <!-- Social Links (Vertical) -->
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 hover:from-[#00A8CD] hover:to-[#00A8CD] transition transform hover:scale-110 shadow-lg"
            >
              <i
                :class="link.iconClass"
                class="text-white text-2xl hover:text-black transition"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import emailjs from "emailjs-com";

export default defineComponent({
  name: "ContactUsSection",
  data() {
    return {
      heading: "Contact Me",
      description:
        "I am available for freelance work or collaboration. Feel free to reach out through the form or connect on social media.",
      form: {
        name: "",
        email: "",
        message: "",
        phone: ""
      },
      socialLinks: [
        {
          name: "GitHub",
          url: "https://github.com/ehsan953",
          iconClass: "fab fa-github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/muhammad-ehsan-b0b59a367/",
          iconClass: "fab fa-linkedin",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/ehsan.rajpoot.7140",
          iconClass: "fab fa-facebook",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/ehsanrajpoot39",
          iconClass: "fab fa-instagram",
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        await emailjs.send(
          "service_124hiun",
          "template_wdmthwj",
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: this.form.message,
            phone: this.form.phone,
          },
          "hPUyyd4qa01C_ik8r"
        );

        alert("Message sent successfully!");
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
        this.form.phone = "";
      } catch (error) {
        console.error(error);
        alert("Failed to send message. Please try again.");
      }
    },
  },
});
</script>

<style scoped>
input,
textarea {
  transition: border-color 0.3s ease;
}

i {
  transition: color 0.3s ease, transform 0.3s ease;
}

a:hover i {
  transform: scale(1.2);
}
</style>
