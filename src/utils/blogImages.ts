/** Cover images available under public/blog_imgs */
export const BLOG_COVER_IMAGES = [
  "/blog_imgs/blog_random1.jpg",
  "/blog_imgs/blog_random2.jpg",
  "/blog_imgs/blog_random3.jpg",
  "/blog_imgs/blog_random4.jpg",
  "/blog_imgs/blog2.png",
  "/blog_imgs/blog3.jpg",
] as const;

const FALLBACK_DEFAULTS = [
  "/blog_imgs/blog-default-img2.png",
  "/blog_imgs/blog_default_img.jpg",
  "/blog_imgs/blog-default-img.png",
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function isUnsetOrDefault(image?: string | null): boolean {
  if (!image) return true;
  return FALLBACK_DEFAULTS.includes(image);
}

/** Pick a cover image for a blog. Uses a stable hash of the id so it doesn't change on re-render. */
export function getBlogCoverImage(blog: {
  id?: string | number;
  image?: string | null;
}): string {
  if (!isUnsetOrDefault(blog.image)) {
    return blog.image as string;
  }

  const key = String(blog.id ?? blog.image ?? "blog");
  const index = hashString(key) % BLOG_COVER_IMAGES.length;
  return BLOG_COVER_IMAGES[index];
}

/** Truly random cover — use when creating a new blog in admin. */
export function getRandomBlogCoverImage(): string {
  const index = Math.floor(Math.random() * BLOG_COVER_IMAGES.length);
  return BLOG_COVER_IMAGES[index];
}
