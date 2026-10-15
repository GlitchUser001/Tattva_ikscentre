"use client";

import { ArrowUpRight, Instagram, Play } from "lucide-react";
import { instagramPosts } from "@/data/instagram-posts";

function formatDate(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function InstagramFeed() {
  const posts = [...instagramPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center justify-between border-t border-white/10 pt-5">
        <div className="flex items-center gap-3">
          <Instagram size={14} strokeWidth={1.4} className="text-[#a8a19a]" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#77716f]">Selected moments</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#595550]">@tattva_ikscentre</span>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {posts.map((post, index) => (
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer"
              aria-label={`Open Instagram post: ${post.caption || "Tattva IKS Centre"}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[#171613]">
              <img src={post.image} alt={post.alt || post.caption || "Tattva IKS Centre"}
                loading={index < 3 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              {post.type === "video" && (
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm">
                  <Play size={12} fill="currentColor" />
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                {post.date && <p className="mb-2 text-[8px] uppercase tracking-[0.2em] text-white/60">{formatDate(post.date)}</p>}
                <p className="line-clamp-2 text-xs leading-5 text-white/90 md:text-sm">{post.caption}</p>
                <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/70 transition-colors group-hover:text-white">
                  View post <ArrowUpRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="border border-white/10 bg-white/[0.02] px-6 py-12 md:px-10">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#a86543]">Instagram archive</p>
          <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-[#f4f0e8] md:text-3xl">Moments from Tattva, collected here.</h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#827b74]">Add your first post to the Instagram archive to display it here.</p>
          <a href="https://www.instagram.com/tattva_ikscentre/" target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[9px] uppercase tracking-[0.25em] text-[#c4bcb2] transition-colors hover:text-white">
            Visit Instagram <ArrowUpRight size={13} />
          </a>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-b border-white/10 pb-5">
        <span className="text-[8px] uppercase tracking-[0.25em] text-[#514d48]">Curated archive · updated by Tattva</span>
        <a href="https://www.instagram.com/tattva_ikscentre/" target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#a8a19a] transition-colors hover:text-white">
          Follow Tattva <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
