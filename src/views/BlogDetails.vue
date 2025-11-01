<template>
  <section class="py-16 bg-black text-white min-h-screen">
    <div class="max-w-3xl mx-auto px-6">
      <div v-if="loading" class="text-center text-gray-400 text-lg">
        Loading blog...
      </div>

      <div v-else-if="blog" class="space-y-6 text-left">
          
        <h1 class="text-4xl font-bold text-[#00A8CD]">{{ blog.title }}</h1>
        <p class="text-gray-400 text-sm flex gap-8">
          <span class="font-medium">By {{ blog.author }}</span> <span>•
          {{ formatDate(blog.date) }}</span>
        </p>
        <div class="w-[100%] aspect-[7/4] mx-auto">
            <img
            :src="blog.image || '/blog_imgs/blog-default-img2.png'"
            :alt="blog.title"
            class="w-full h-full object-cover rounded-lg"
            />
        </div>
        
        <div
          class="prose prose-invert max-w-none mt-6"
          v-html="blog.content"
        ></div>
        
      </div>

      <div v-else class="text-center text-gray-400 text-lg">
        Blog not found.
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";

export default defineComponent({
  name: "BlogDetails",
  setup() {
    const route = useRoute();
    const blog = ref<any>(null);
    const loading = ref(true);

    const fetchBlog = async () => {
      const blogId = route.params.id as string;
      const docRef = doc(db, "blogs", blogId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        blog.value = { id: docSnap.id, ...docSnap.data() };
      } else {
        blog.value = null;
      }
      loading.value = false;
    };

    const formatDate = (date: any) => {
        if (!date) return "";
        const jsDate = date.toDate ? date.toDate() : new Date(date);
        return jsDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    onMounted(fetchBlog);

    return { blog, loading, formatDate };
  },
});
</script>

<style>
.prose-invert {
  color: #ddd;
}
.prose-invert h1,
.prose-invert h2,
.prose-invert h3, .prose-invert h4, .prose-invert h5, .prose-invert h6, .prose-invert strong, .prose-invert b, .prose-invert a {
  color: #00A8CD !important;
}
.prose-invert a {
  color: #00A8CD;
  text-decoration: underline;
}
</style>
