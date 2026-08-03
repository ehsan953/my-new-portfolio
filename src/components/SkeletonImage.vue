<template>
  <div
    class="skeleton-image relative overflow-hidden bg-gray-800"
    :class="[wrapperClass, { 'skeleton-image--loading': !loaded && !error }]"
    @click="$emit('click', $event)"
  >
    <div
      v-if="!loaded && !error"
      class="absolute inset-0 skeleton-shimmer"
      aria-hidden="true"
    />

    <img
      ref="imgEl"
      v-show="!error"
      :src="src"
      :alt="alt"
      :class="[
        imgClass,
        'transition-opacity duration-300 ease-out',
        loaded ? 'opacity-100' : 'opacity-0',
      ]"
      @load="onLoad"
      @error="onError"
    />

    <div
      v-if="error"
      class="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500 text-sm"
    >
      Image unavailable
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonImage",
  emits: ["click"],
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    imgClass: {
      type: String,
      default: "w-full h-full object-cover",
    },
    wrapperClass: {
      type: String,
      default: "w-full h-48",
    },
  },
  data() {
    return {
      loaded: false,
      error: false,
    };
  },
  watch: {
    src() {
      this.loaded = false;
      this.error = false;
      this.$nextTick(() => this.checkCached());
    },
  },
  mounted() {
    this.checkCached();
  },
  methods: {
    checkCached() {
      const img = this.$refs.imgEl;
      if (img && img.complete && img.naturalWidth > 0) {
        this.onLoad();
      }
    },
    onLoad() {
      this.loaded = true;
      this.error = false;
    },
    onError() {
      this.loaded = false;
      this.error = true;
    },
  },
};
</script>

<style scoped>
.skeleton-image--loading {
  min-height: 12rem;
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

.skeleton-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 168, 205, 0.08) 50%,
    transparent 100%
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
