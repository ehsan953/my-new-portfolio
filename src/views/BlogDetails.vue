<template>
  <section class="py-16 bg-black text-white min-h-screen">
    <div class="max-w-3xl mx-auto px-6">
      <div v-if="loading" class="space-y-6 animate-pulse">
        <div class="h-10 w-3/4 rounded bg-gray-800"></div>
        <div class="h-4 w-1/2 rounded bg-gray-800"></div>
        <div class="w-full aspect-[7/4] rounded-lg bg-gray-800 relative overflow-hidden">
          <div class="absolute inset-0 skeleton-shimmer"></div>
        </div>
        <div class="space-y-3">
          <div class="h-4 w-full rounded bg-gray-800"></div>
          <div class="h-4 w-full rounded bg-gray-800"></div>
          <div class="h-4 w-5/6 rounded bg-gray-800"></div>
        </div>
      </div>

      <div v-else-if="blog" class="space-y-6 text-left">
          
        <h1 v-reveal="'fade-in-down'" class="text-4xl font-bold text-[#00A8CD]">{{ blog.title }}</h1>
        <p v-reveal="'fade-in-up'" class="text-gray-400 text-sm flex gap-8">
          <span class="font-medium">By {{ blog.author }}</span> <span>•
          {{ formatDate(blog.date) }}</span>
        </p>
        <div v-reveal="'fade-in'" class="w-full mx-auto">
          <SkeletonImage
            :src="blog.image || '/blog_imgs/blog-default-img2.png'"
            :alt="blog.title"
            wrapper-class="w-full aspect-[7/4] rounded-lg"
            img-class="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div
          v-reveal="'fade-in-up'"
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
import SkeletonImage from "@/components/SkeletonImage.vue";

export default defineComponent({
  name: "BlogDetails",
  components: { SkeletonImage },
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

.skeleton-shimmer {
  background: linear-gradient(
    110deg,
    #1f2937 0%,
    #1f2937 35%,
    #374151 50%,
    #1f2937 65%,
    #1f2937 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
