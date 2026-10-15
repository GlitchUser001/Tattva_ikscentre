export type InstagramPost = {
  id: string;
  image: string;
  url: string;
  date: string; // YYYY-MM-DD
  caption: string;
  alt?: string;
  type?: "image" | "video";
};

/**
 * MANUAL INSTAGRAM ARCHIVE
 * 1. Put each selected image in public/instagram/.
 * 2. Add a post below and use its exact Instagram post URL.
 * 3. Newest dates appear first automatically.
 */
export const instagramPosts: InstagramPost[] = [
  // Example:
  // {
  //   id: "tattva-post-001",
  //   image: "/instagram/post-001.jpg",
  //   url: "https://www.instagram.com/p/REPLACE_WITH_POST_ID/",
  //   date: "2026-10-11",
  //   caption: "A moment from Tattva IKS Centre.",
  //   alt: "Describe the image briefly",
  //   type: "image",
  // },
];
