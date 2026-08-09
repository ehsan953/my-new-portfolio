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
            :src="getBlogCoverImage(blog)"
            :alt="blog.title"
            wrapper-class="w-full aspect-[7/4] rounded-lg"
            img-class="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div
          v-reveal="'fade-in-up'"
          class="blog-content prose prose-invert max-w-none mt-6"
          v-html="cleanedContent"
        ></div>
        
      </div>

      <div v-else class="text-center text-gray-400 text-lg">
        Blog not found.
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import SkeletonImage from "@/components/SkeletonImage.vue";
import { getBlogCoverImage } from "@/utils/blogImages";

/** Remove empty Quill blocks like <h3><br></h3> or <p><br></p> that create extra gaps. */
function cleanBlogContent(html: string): string {
  if (!html) return "";

  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  const isEmptyBlock = (el: Element) => {
    const text = (el.textContent || "").replace(/\u00a0/g, " ").trim();
    if (text.length > 0) return false;
    // Allow intentionally empty media / embeds if added later
    return !el.querySelector("img, video, iframe, table");
  };

  wrapper
    .querySelectorAll("h1, h2, h3, h4, h5, h6, p")
    .forEach((el) => {
      if (isEmptyBlock(el)) el.remove();
    });

  return wrapper.innerHTML;
}

export default defineComponent({
  name: "BlogDetails",
  components: { SkeletonImage },
  setup() {
    const route = useRoute();
    const blog = ref<any>(null);
    const loading = ref(true);

    const cleanedContent = computed(() =>
      cleanBlogContent(blog.value?.content || "")
    );

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

    return { blog, loading, formatDate, cleanedContent, getBlogCoverImage };
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

/* Quill stores bullets as <ol><li data-list="bullet"> — restore list styles
   that Tailwind preflight and missing Quill CSS would otherwise strip. */
.blog-content ol,
.blog-content ul {
  list-style-position: outside;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.blog-content li {
  display: list-item;
  margin: 0.4rem 0;
  padding-left: 0.25rem;
}

.blog-content li[data-list="bullet"] {
  list-style-type: disc;
}

.blog-content li[data-list="ordered"],
.blog-content ol > li:not([data-list]) {
  list-style-type: decimal;
}

.blog-content ul > li {
  list-style-type: disc;
}

.blog-content .ql-ui {
  display: none;
}

.blog-content p {
  margin: 0.85rem 0;
}

.blog-content h2,
.blog-content h3 {
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
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
