"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const reactions = [
  {
    id: "i_like_it",
    label: "I Like It",
    symbol: "♡",
  },
  {
    id: "wonderful",
    label: "Wonderful",
    symbol: "✦",
  },
  {
    id: "inspiring",
    label: "Inspiring",
    symbol: "◌",
  },
  {
    id: "fascinating",
    label: "Fascinating",
    symbol: "⌁",
  },
];

type Ratings = {
  i_like_it: number;
  wonderful: number;
  inspiring: number;
  fascinating: number;
};

const initialRatings: Ratings = {
  i_like_it: 0,
  wonderful: 0,
  inspiring: 0,
  fascinating: 0,
};

const reactionLabels: Record<keyof Ratings, string> = {
  i_like_it: "I Like It",
  wonderful: "Wonderful",
  inspiring: "Inspiring",
  fascinating: "Fascinating",
};

export default function WhatHappensHerePage() {
  const [ratings, setRatings] = useState<Ratings>(initialRatings);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function loadRatings() {
    const { data, error } = await supabase
      .from("video_ratings")
      .select("i_like_it, wonderful, inspiring, fascinating")
      .eq("video_id", "what-happens-here")
      .single();

    if (error) {
      setMessage("Ratings are temporarily unavailable.");
      return;
    }

    setRatings({
      i_like_it: data.i_like_it,
      wonderful: data.wonderful,
      inspiring: data.inspiring,
      fascinating: data.fascinating,
    });
  }

  useEffect(() => {
    async function initialise() {
      try {
        await loadRatings();
      } catch {
        setMessage("Ratings are temporarily unavailable.");
      } finally {
        setLoading(false);
      }
    }

    void initialise();
  }, []);

  async function submitRating(reaction: keyof Ratings) {
    if (submitting !== null || loading) return;

    setSubmitting(reaction);
    setMessage("");

    try {
      const { data, error } = await supabase.rpc(
        "record_video_rating",
        {
          p_video_id: "what-happens-here",
          p_reaction: reaction,
        }
      );

      if (error) throw error;

      const result = Array.isArray(data) ? data[0] : data;

      if (!result) {
        throw new Error("No updated ratings returned.");
      }

      setRatings({
        i_like_it: result.i_like_it,
        wonderful: result.wonderful,
        inspiring: result.inspiring,
        fascinating: result.fascinating,
      });

      setMessage(`Your reaction "${reactionLabels[reaction]}" was recorded.`);
    } catch {
      setMessage("We couldn't record your reaction. Please try again.");
    } finally {
      setSubmitting(null);
    }
  }

  return (
    <main className="min-h-screen bg-[#080807] text-[#f4f0e8]">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.3em] text-[#8f8982] transition-colors duration-300 hover:text-[#f4f0e8]"
        >
          ← Tattva
        </Link>

        <span className="text-[9px] uppercase tracking-[0.3em] text-[#625d57]">
          Experience 01
        </span>
      </header>

      {/* Intro */}
      <section className="px-6 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-6xl"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#9b958d]">
            What Happens Here?
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Ideas become
            <br />
            experiences.
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#918b84] md:text-base">
            A glimpse into the spaces, activities and experiences that take
            place at Tattva IKS Centre.
          </p>
        </motion.div>
      </section>

      {/* Video */}
      <section className="px-4 md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-[1500px]"
        >
          <div className="relative overflow-hidden bg-[#151412]">
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              preload="auto"
              className="block aspect-video h-auto w-full object-cover"
            >
              <source
                src="/videos/what-we-do.mp4"
                type="video/mp4"
              />

              Your browser does not support the video element.
            </video>
          </div>
        </motion.div>
      </section>

      {/* Reaction section */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#716b64]">
              Your response
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
              How did it feel?
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#77716a]">
              Every experience leaves a different impression. Tell us what
              this one left with you.
            </p>
          </motion.div>

          {/* Reaction cards */}
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reactions.map((reaction, index) => (
              <motion.button
                key={reaction.id}
                type="button"
                onClick={() =>
                  void submitRating(reaction.id as keyof Ratings)
                }
                disabled={loading || submitting !== null}
                aria-label={`Rate this experience: ${reaction.label}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex min-h-40 flex-col justify-between border border-white/10 bg-white/[0.025] p-6 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="text-2xl text-[#a49d95]">
                  {reaction.symbol}
                </span>

                <div>
                  <p className="text-sm text-[#e7e1d8]">
                    {reaction.label}
                  </p>

                  <p className="mt-3 text-2xl font-light text-[#f4f0e8]">
                    {loading ? "…" : ratings[reaction.id as keyof Ratings]}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#77716a]">
                    {submitting === reaction.id
                      ? "Recording..."
                      : "Responses"}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking placeholder */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#716b64]">
            Collective response
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] md:text-5xl">
            How others experienced it.
          </h2>

          <div className="mt-12 border-t border-white/10">
            <div className="flex items-end justify-between py-6">
              <p className="text-sm text-[#918b84]">
                Total responses
              </p>

              <p className="text-3xl font-light">
                {Object.values(ratings).reduce(
                  (total, count) => total + count,
                  0
                )}
              </p>
            </div>

            {[...Object.entries(ratings)]
              .sort((a, b) => b[1] - a[1])
              .map(([reaction, count], index) => {
                const total = Object.values(ratings).reduce(
                  (sum, value) => sum + value,
                  0
                );

                const percentage =
                  total === 0 ? 0 : (count / total) * 100;

                return (
                  <div
                    key={reaction}
                    className="border-t border-white/10 py-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-[#625d57]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm">
                          {reactionLabels[reaction as keyof Ratings]}
                        </span>
                      </div>

                      <span className="text-sm text-[#918b84]">
                        {count}
                      </span>
                    </div>

                    <div className="mt-4 h-px w-full bg-white/10">
                      <div
                        className="h-px bg-[#c8a47d] transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}

            {message && (
              <p
                aria-live="polite"
                className="mt-6 text-sm text-[#a49d95]"
              >
                {message}
              </p>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[9px] uppercase tracking-[0.25em] text-[#625d57] md:flex-row md:items-center md:justify-between">
          <span>Tattva IKS Centre</span>

          <Link
            href="/"
            className="transition-colors duration-300 hover:text-[#f4f0e8]"
          >
            Return to Tattva
          </Link>
        </div>
      </footer>

    </main>
  );
}