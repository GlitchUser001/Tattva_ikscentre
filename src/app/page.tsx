"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, Menu, X } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const activities = [
  {
    number: "01",
    title: "Explore",
    description:
      "Encounter ideas, traditions and systems of knowledge.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Turn learning into activities, experiences and expression.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Bring people together through curiosity and conversation.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-[#f4f0e8]">
     {/* ───────────────── Navigation ───────────────── */}

<motion.nav
  animate={{
    paddingTop: scrolled ? 14 : 24,
    paddingBottom: scrolled ? 14 : 24,
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className={`fixed inset-x-0 top-0 z-50 px-6 md:px-10 ${
    scrolled
      ? "border-b border-white/5 bg-[#080807]/75 backdrop-blur-xl"
      : "bg-transparent"
  }`}
>
  <div className="mx-auto flex max-w-7xl items-center justify-between">

    {/* Wordmark */}
    <motion.a
      href="#top"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="text-xs font-medium uppercase tracking-[0.3em]"
    >
      Tattva
    </motion.a>


    {/* Desktop Navigation */}
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
      }}
      className="hidden items-center gap-9 md:flex"
    >
      <a
        href="#about"
        className="nav-link"
      >
        About
      </a>

      <a
        href="#journey"
        className="nav-link"
      >
        Journey
      </a>

      <a
        href="#activities"
        className="nav-link"
      >
        Activities
      </a>

      <a
        href="#members"
        className="nav-link"
      >
        Core Members
      </a>
    </motion.div>


    {/* Right side */}
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.4,
      }}
      className="flex items-center gap-5"
    >

      {/* Instagram */}
      <a
        href="#instagram"
        className="hidden text-[10px] uppercase tracking-[0.2em] text-[#8f8982] transition-colors duration-300 hover:text-[#f4f0e8] md:block"
      >
        Instagram
      </a>


      {/* Mobile menu */}
      <button
        type="button"
        aria-label={
          menuOpen
            ? "Close navigation"
            : "Open navigation"
        }
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="relative z-[70] flex h-9 w-9 items-center justify-center md:hidden"
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {menuOpen ? (
            <motion.span
              key="close"
              initial={{
                opacity: 0,
                rotate: -45,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
              }}
            >
              <X
                size={19}
                strokeWidth={1}
              />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{
                opacity: 0,
                rotate: 45,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                rotate: -45,
              }}
            >
              <Menu
                size={19}
                strokeWidth={1}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

    </motion.div>

  </div>
</motion.nav>


{/* ───────────────── Mobile Navigation ───────────────── */}

<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[60] bg-[#080807] text-[#f4f0e8] md:hidden"
    >

      <div className="flex h-full flex-col px-6 pb-8 pt-28">

        {/* Menu heading */}
        <div className="mb-12">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#625d57]">
            Navigation
          </p>
        </div>


        {/* Links */}
        <div className="flex flex-1 flex-col">

          {[
            ["01", "About", "#about"],
            ["02", "Journey", "#journey"],
            ["03", "Activities", "#activities"],
            ["04", "Core Members", "#members"],
            ["05", "Instagram", "#instagram"],
          ].map(([number, label, href], index) => (

            <motion.a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-center gap-5 border-b border-white/10 py-6"
            >

              <span className="text-[9px] tracking-[0.2em] text-[#625d57]">
                {number}
              </span>

              <span className="text-3xl font-light tracking-[-0.04em]">
                {label}
              </span>

              <span className="ml-auto text-[#625d57] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>

            </motion.a>

          ))}

        </div>


        {/* Instagram account */}
        <motion.a
          href="https://www.instagram.com/tattva_ikscentre/"
          target="_blank"
          rel="noreferrer"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.25em] text-[#918a81]"
        >
          @tattva_ikscentre ↗
        </motion.a>

      </div>

    </motion.div>
  )}
</AnimatePresence>
{/* ───────────────── Hero ───────────────── */}

<section
  id="top"
  className="relative flex min-h-screen items-center overflow-hidden bg-[#080807]"
>

  {/* Hero background video */}
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      className="h-full w-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    {/* Keeps the typography dominant over the footage */}
    <div className="absolute inset-0 bg-[#080807]/70" />

    {/* Soft edge vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at center, transparent 10%, rgba(8,8,7,0.35) 55%, rgba(8,8,7,0.92) 100%)",
      }}
    />
  </div>

  {/* Ambient glow */}
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.7,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="pointer-events-none absolute left-1/2 top-[42%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a86543]/[0.06] blur-[120px]"
  />


  {/* Fine grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  </div>


  {/* Hero content */}
  <div className="relative z-10 w-full px-6 md:px-10">

    <div className="mx-auto max-w-7xl">

      {/* Small identifier */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="mb-8 flex items-center gap-4"
      >

        <span className="h-px w-8 bg-[#746b61]" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-[#827a71]">
          Indian Knowledge Systems
        </span>

      </motion.div>


      {/* Main title */}
      <div className="overflow-hidden">

        <motion.h1
          initial={{
            opacity: 0,
            y: "100%",
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: "0%",
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.25,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[22vw] font-light leading-[0.78] tracking-[-0.075em] md:text-[17vw] lg:text-[15vw]"
        >
          TATTVA
        </motion.h1>

      </div>


      {/* Supporting statement */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end"
      >

        <p className="max-w-md text-sm leading-7 text-[#928b83] md:text-base">
          A space for curiosity, conversation and exploration,
          where knowledge meets the present.
        </p>


        <a
          href="#manifesto"
          className="group flex w-fit items-center gap-4"
        >

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#b1aaa2]">
            Begin exploring
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">

            <ArrowDown
              size={14}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:translate-y-1"
            />

          </span>

        </a>

      </motion.div>

    </div>

  </div>


  {/* Bottom metadata */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      delay: 1.3,
    }}
    className="absolute bottom-7 left-6 right-6 flex justify-between md:left-10 md:right-10"
  >

    <span className="text-[8px] uppercase tracking-[0.3em] text-[#5e5954]">
      Tattva IKS Centre
    </span>

    <span className="text-[8px] uppercase tracking-[0.3em] text-[#5e5954]">
      2026
    </span>

  </motion.div>
{/* Hero → Manifesto transition */}
<div
  className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
  style={{
    background:
      "linear-gradient(to bottom, transparent, #080807)",
  }}
/>

</section>

{/* ───────────────── Manifesto ───────────────── */}

<section
  id="manifesto"
  className="relative overflow-hidden bg-[#080807]"
>
  {/*
    The manifesto video and manifesto statement intentionally live in
    the same visual system. The video is the opening image of the section,
    while the dark gradient lets the statement emerge from the footage.
  */}
  <div className="relative min-h-[125vh]">

    {/* Sticky cinematic viewport */}
    <div className="sticky top-0 flex min-h-screen items-end overflow-hidden">

      {/* Manifesto video */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.025,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Tattva IKS Centre visual introduction"
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/manifesto.mp4" type="video/mp4" />
        </video>

        {/* Keep the footage cinematic and make text readable */}
        <div className="absolute inset-0 bg-[#080807]/25" />

        {/* Top black atmosphere */}
        <div
          className="absolute inset-x-0 top-0 h-[32%]"
          style={{
            background:
              "linear-gradient(to bottom, #080807 0%, rgba(8,8,7,0.75) 28%, transparent 100%)",
          }}
        />

        {/* Strong lower fade into the manifesto statement */}
        <div
          className="absolute inset-x-0 bottom-0 h-[62%]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(8,8,7,0.18) 22%, rgba(8,8,7,0.72) 60%, #080807 100%)",
          }}
        />

        {/* Subtle side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 25%, rgba(8,8,7,0.35) 100%)",
          }}
        />
      </motion.div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-6 right-6 top-28 z-20 flex items-center justify-between md:left-10 md:right-10 md:top-32"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-white/40" />
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
            01&nbsp;&nbsp;Manifesto
          </span>
        </div>

        <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/35 sm:block">
          Tattva IKS Centre
        </span>
      </motion.div>

      {/* Manifesto statement emerges from the video */}
      <div className="relative z-10 w-full px-6 pb-20 md:px-10 md:pb-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-5xl overflow-hidden">
            <motion.h2
              initial={{
                opacity: 0,
                y: "100%",
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: "0%",
                filter: "blur(0px)",
              }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-6xl font-light leading-[0.88] tracking-[-0.055em] text-[#f4f0e8] md:text-8xl lg:text-[9rem]"
            >
              Knowledge
              <br />
              <span className="text-white/45">is not</span>
              <br />
              static.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-white/60 md:text-base md:leading-8">
              It evolves through questions, experiences,
              conversations and the people who carry it forward.
            </p>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              Continue to About
            </span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 h-px w-full origin-left bg-white/10"
          />

        </div>
      </div>

    </div>

    {/* Manifesto → About transition */}
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[42vh]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(8,8,7,0.15) 18%, #080807 48%, #f1ece2 100%)",
      }}
    />

    {/* A quiet transition marker */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="pointer-events-none absolute bottom-[18vh] left-6 z-40 md:left-10"
    >
      <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
        Continue to About
      </span>
    </motion.div>

  </div>
</section>

{/* ───────────────── About ───────────────── */}

<section
  id="about"
  className="relative overflow-hidden bg-[#f1ece2] px-6 pb-40 pt-32 text-[#171613] md:px-10 md:pb-56 md:pt-48"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-15%",
      }}
      transition={{
        duration: 0.8,
      }}
      className="flex items-center gap-4"
    >
      <span className="text-[9px] uppercase tracking-[0.35em] text-[#81786e]">
        02
      </span>

      <span className="h-px w-8 bg-[#a59b90]" />

      <span className="text-[9px] uppercase tracking-[0.35em] text-[#81786e]">
        About Tattva
      </span>
    </motion.div>


    {/* Main statement */}
    <div className="mt-20 grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:items-end">

      <motion.h2
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-15%",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl"
      >
        A centre for
        <span className="text-[#877d72]">
          {" "}
          discovering what knowledge can become.
        </span>
      </motion.h2>


      {/* Intro */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-10%",
        }}
        transition={{
          duration: 0.9,
          delay: 0.15,
        }}
        className="max-w-md md:pb-2"
      >
        <p className="text-sm leading-7 text-[#625b53] md:text-base md:leading-8">
          Tattva IKS Centre is a space for exploring Indian
          Knowledge Systems through curiosity, creativity,
          discussion and experience.
        </p>

        <p className="mt-6 text-sm leading-7 text-[#625b53] md:text-base md:leading-8">
          We look at knowledge not only as something from
          the past, but as something that can continue to
          inform the way we learn, think and create today.
        </p>
      </motion.div>

    </div>


    {/* Divider */}
    <div className="my-24 h-px bg-[#d2cbc0] md:my-32" />


    {/* Principles */}
    <div className="grid gap-12 md:grid-cols-3">

      {[
        {
          number: "01",
          title: "Question",
          text: "Look beyond the obvious. Ask why, how and what might be possible.",
        },
        {
          number: "02",
          title: "Experience",
          text: "Turn ideas into experiences that can be explored, shared and remembered.",
        },
        {
          number: "03",
          title: "Carry Forward",
          text: "Connect inherited knowledge with contemporary questions and possibilities.",
        },
      ].map((item, index) => (

        <motion.div
          key={item.number}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-10%",
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.12,
          }}
          className="border-t border-[#c9c1b5] pt-6"
        >

          <span className="text-[9px] tracking-[0.25em] text-[#8c8277]">
            {item.number}
          </span>

          <h3 className="mt-10 text-2xl font-light tracking-[-0.03em]">
            {item.title}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#746c63]">
            {item.text}
          </p>

        </motion.div>

      ))}

    </div>

  </div>


  {/* Decorative edge text */}
  <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] uppercase tracking-[0.4em] text-[#aaa095] md:block">
    Indian Knowledge Systems
  </div>
{/* About → What Happens Here transition */}
<div
  className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
  style={{
    background:
      "linear-gradient(to bottom, transparent, #080807)",
  }}
/>
</section>

{/* ───────────────── What Happens Here ───────────────── */}

<section
  id="what-we-do"
  className="relative overflow-hidden bg-[#080807] px-6 py-32 md:px-10 md:py-48"
>
  {/* Ambient background */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="pointer-events-none absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full bg-[#9d6548]/[0.035] blur-[120px]"
  />

  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-10% 0px",
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Label */}
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-8 bg-[#746b61]" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-[#827a71]">
          03&nbsp;&nbsp;What Happens Here?
        </span>
      </div>

      {/* Heading */}
      <h2 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.045em] text-[#f4f0e8] md:text-7xl lg:text-8xl">
        Ideas become
        <br />
        <span className="text-[#817970]">experiences.</span>
      </h2>

      {/* Description */}
      <p className="mt-10 max-w-xl text-sm leading-7 text-[#8f8982] md:text-base md:leading-8">
        Tattva creates opportunities to encounter knowledge through
        activities, conversations, creative expression and shared
        experiences.
      </p>
    </motion.div>


    {/* ───────────────── Cinematic Media ───────────────── */}

    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-10% 0px",
      }}
      transition={{
        duration: 1.2,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-20 md:mt-28"
    >
      <div className="image-reveal relative aspect-[16/10] w-full overflow-hidden bg-[#151412] md:aspect-[16/8]">

        {/* What Happens Here cinematic video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Tattva IKS Centre activities and experiences"
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/what-we-do.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[#080807]/10" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,7,0.78) 0%, rgba(8,8,7,0.18) 42%, transparent 72%)",
          }}
        />

        {/* Media label */}
        <div className="absolute bottom-5 left-5 flex items-center gap-3 md:bottom-7 md:left-7">
          <span className="h-px w-6 bg-white/60" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/75">
            Learning in motion
          </span>
        </div>

      </div>
    </motion.div>


    {/* ───────────────── Three Experiences ───────────────── */}

    <div className="mt-24 grid border-t border-white/10 md:mt-32 md:grid-cols-3">

      {/* Explore */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-10"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#746b61]">
          01
        </span>

        <h3 className="mt-6 text-2xl font-light tracking-[-0.03em] text-[#f4f0e8]">
          Explore
        </h3>

        <p className="mt-5 text-sm leading-7 text-[#77716b]">
          Discover ideas, traditions and systems of knowledge through
          curiosity and open exploration.
        </p>
      </motion.div>


      {/* Create */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#746b61]">
          02
        </span>

        <h3 className="mt-6 text-2xl font-light tracking-[-0.03em] text-[#f4f0e8]">
          Create
        </h3>

        <p className="mt-5 text-sm leading-7 text-[#77716b]">
          Transform learning into activities, experiments, discussions
          and creative expression.
        </p>
      </motion.div>


      {/* Connect */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="py-10 md:pl-10"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#746b61]">
          03
        </span>

        <h3 className="mt-6 text-2xl font-light tracking-[-0.03em] text-[#f4f0e8]">
          Connect
        </h3>

        <p className="mt-5 text-sm leading-7 text-[#77716b]">
          Bring people together to exchange perspectives, stories and
          ways of understanding.
        </p>
      </motion.div>

    </div>

  </div>
</section>

{/* ───────────────── Our Journey ───────────────── */}

<section
  id="journey"
  className="relative overflow-hidden bg-[#f1ece2] px-6 py-32 text-[#171613] md:px-10 md:py-48"
>
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-8 bg-[#827a71]" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-[#827a71]">
          04&nbsp;&nbsp;Our Journey
        </span>
      </div>

      <h2 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
        From here
        <br />
        <span className="text-[#91887d]">to somewhere.</span>
      </h2>

      <p className="mt-10 max-w-xl text-sm leading-7 text-[#706960] md:text-base md:leading-8">
        A story still unfolding. The journey of Tattva will be shaped
        by the people, ideas, activities and moments that become part
        of the centre.
      </p>
    </motion.div>


    {/* ───────────────── Journey Media ───────────────── */}

    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-10% 0px",
      }}
      transition={{
        duration: 1.2,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-20 md:mt-28"
    >
      <div className="image-reveal relative aspect-[16/10] w-full overflow-hidden bg-[#ddd5c8] md:aspect-[16/8]">

        {/* Replace with actual Journey image/video */}
        <img
          src="/images/journey.jpg"
          alt="Tattva IKS Centre journey"
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 flex items-center gap-3 md:bottom-7 md:left-7">
          <span className="h-px w-6 bg-white/70" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/80">
            The story continues
          </span>
        </div>

      </div>
    </motion.div>


    {/* ───────────────── Timeline ───────────────── */}

    <div className="mt-24 border-t border-[#171613]/15 md:mt-32">

      <div className="grid md:grid-cols-3">

        {/* Origin */}
        <div className="border-b border-[#171613]/15 py-10 md:border-b-0 md:border-r md:pr-10">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#827a71]">
            01
          </span>

          <h3 className="mt-6 text-2xl font-light">
            Origin
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#706960]">
            Where the idea began.
          </p>
        </div>


        {/* Now */}
        <div className="border-b border-[#171613]/15 py-10 md:border-b-0 md:border-r md:px-10">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#827a71]">
            02
          </span>

          <h3 className="mt-6 text-2xl font-light">
            Now
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#706960]">
            Where Tattva is taking shape.
          </p>
        </div>


        {/* Next */}
        <div className="py-10 md:pl-10">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#827a71]">
            03
          </span>

          <h3 className="mt-6 text-2xl font-light">
            Next
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#706960]">
            What comes next is still being written.
          </p>
        </div>

      </div>

      {/* Draft indicator */}
      <div className="mt-16 flex items-center justify-between border-t border-[#171613]/15 pt-5">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#827a71]">
          Journey archive
        </span>

        <span className="rounded-full border border-[#171613]/15 px-3 py-1 text-[8px] uppercase tracking-[0.25em] text-[#827a71]">
          Draft
        </span>
      </div>

    </div>

  </div>
</section>
{/* ───────────────── Upcoming Activities ───────────────── */}

<section
  id="activities"
  className="relative overflow-hidden bg-[#080807] px-6 py-32 md:px-10 md:py-48"
>
  <div className="mx-auto max-w-7xl">

    {/* Section label */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4"
    >
      <span className="text-[9px] uppercase tracking-[0.35em] text-[#77716a]">
        05
      </span>

      <span className="h-px w-8 bg-[#4d4944]" />

      <span className="text-[9px] uppercase tracking-[0.35em] text-[#77716a]">
        Upcoming Activities
      </span>
    </motion.div>


    {/* Heading */}
    <div className="mt-20 grid gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">

      <motion.h2
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-5xl text-5xl font-light leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-8xl"
      >
        Something is
        <span className="text-[#716b65]">
          {" "}
          always unfolding.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="max-w-md text-sm leading-7 text-[#8d867f] md:text-base md:leading-8"
      >
        Workshops, conversations, explorations and
        experiences designed to make knowledge something
        you can encounter.
      </motion.p>

    </div>


    {/* Activities */}
    <div className="mt-24">

      {[
        {
          number: "01",
          status: "Upcoming",
          title: "Activity / Workshop",
          meta: "Details to be announced",
        },
        {
          number: "02",
          status: "Upcoming",
          title: "Conversation / Session",
          meta: "Details to be announced",
        },
        {
          number: "03",
          status: "Coming soon",
          title: "Experience / Exploration",
          meta: "Details to be announced",
        },
      ].map((activity, index) => (

        <motion.div
          key={activity.number}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-10%",
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
          }}
          className="group border-t border-white/10 py-8 md:py-10"
        >

          <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-center">

            {/* Number */}
            <span className="text-[9px] tracking-[0.25em] text-[#5d5853]">
              {activity.number}
            </span>


            {/* Activity */}
            <div>
              <div className="flex flex-wrap items-center gap-4">

                <h3 className="text-2xl font-light tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {activity.title}
                </h3>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[7px] uppercase tracking-[0.25em] text-[#77716f]">
                  {activity.status}
                </span>

              </div>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#55514c]">
                {activity.meta}
              </p>
            </div>


            {/* Arrow */}
            <span className="hidden text-xl font-light text-[#5d5853] transition-transform duration-500 group-hover:translate-x-2 md:block">
              ↗
            </span>

          </div>

        </motion.div>

      ))}

    </div>


    {/* Bottom note */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 flex items-center gap-4"
    >
      <span className="h-px w-8 bg-[#4d4944]" />

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#514d48]">
        More experiences ahead
      </span>
    </motion.div>

  </div>


  {/* Ambient glow */}
  <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#9d6548]/[0.035] blur-[120px]" />

</section>

{/* ───────────────── Core Members ───────────────── */}

<section
  id="members"
  className="relative overflow-hidden bg-[#f1ece2] px-6 py-32 text-[#171613] md:px-10 md:py-48"
>
  <div className="mx-auto max-w-7xl">

    {/* Section label */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4"
    >
      <span className="text-[9px] uppercase tracking-[0.35em] text-[#81786e]">
        06
      </span>

      <span className="h-px w-8 bg-[#a59b90]" />

      <span className="text-[9px] uppercase tracking-[0.35em] text-[#81786e]">
        Core Members
      </span>
    </motion.div>


    {/* Intro */}
    <div className="mt-20 grid gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">

      <motion.h2
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-5xl text-5xl font-light leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-8xl"
      >
        The people
        <span className="text-[#877d72]">
          {" "}
          behind Tattva.
        </span>
      </motion.h2>


      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="max-w-md text-sm leading-7 text-[#625b53] md:text-base md:leading-8"
      >
        Tattva is shaped by the people who bring ideas,
        perspectives and experiences into the centre.
      </motion.p>

    </div>


    {/* Draft divider */}
    <div className="mt-24 flex items-center justify-between border-t border-[#c9c1b5] pt-6">

      <span className="text-[9px] uppercase tracking-[0.3em] text-[#8d8378]">
        Core Members
      </span>

      <span className="rounded-full border border-[#bdb3a7] px-3 py-1 text-[8px] uppercase tracking-[0.25em] text-[#8d8378]">
        Draft
      </span>

    </div>


    {/* Portrait profiles */}
    <div className="mt-12 grid gap-10 md:grid-cols-2">

      {[1, 2].map((member, index) => (

        <motion.article
          key={member}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-10%",
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.12,
          }}
          className="group"
        >

          {/* Portrait */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd5c9]">

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#a1988d]">
                Portrait
              </span>
            </div>

            {/* Hover layer */}
            <div className="absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          </div>


          {/* Profile */}
          <div className="mt-6 border-t border-[#c9c1b5] pt-5">

            <div className="flex items-start justify-between gap-6">

              <div>

                <h3 className="text-2xl font-light tracking-[-0.035em] md:text-3xl">
                  Name
                </h3>

                <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#8d8378]">
                  Main Role
                </p>

              </div>

              <span className="text-[9px] tracking-[0.2em] text-[#aaa095]">
                0{member}
              </span>

            </div>


            <p className="mt-6 max-w-md text-sm leading-7 text-[#746c63]">
              Short introduction about the member will appear here.
              Their role, perspective and contribution to Tattva
              will be introduced through this profile.
            </p>


            {/* Qualities */}
            <div className="mt-8 flex flex-wrap gap-2">

              {["Quality", "Quality", "Quality"].map(
                (quality, qualityIndex) => (
                  <span
                    key={qualityIndex}
                    className="border border-[#c9c1b5] px-3 py-2 text-[7px] uppercase tracking-[0.22em] text-[#8d8378]"
                  >
                    {quality}
                  </span>
                )
              )}

            </div>

          </div>

        </motion.article>

      ))}

    </div>


    {/* Mentor placeholder */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
      className="mt-20 border-t border-[#c9c1b5] pt-8"
    >

      <div className="grid gap-8 md:grid-cols-[180px_1fr_auto] md:items-center">

        <span className="text-[8px] uppercase tracking-[0.3em] text-[#9a9085]">
          Faculty / Mentor
        </span>

        <div>
          <h3 className="text-2xl font-light tracking-[-0.03em]">
            Mentor Profile
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-7 text-[#746c63]">
            A dedicated profile for the Class Mentor or faculty
            mentor will be introduced here.
          </p>
        </div>

        <span className="rounded-full border border-[#bdb3a7] px-3 py-1 text-[8px] uppercase tracking-[0.25em] text-[#8d8378]">
          Draft
        </span>

      </div>

    </motion.div>


    {/* Future note */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#9a9085]">
        Profiles coming soon
      </span>

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#9a9085]">
        People · Perspective · Contribution
      </span>

    </motion.div>

  </div>


  {/* Side label */}
  <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] uppercase tracking-[0.4em] text-[#aaa095] md:block">
    Tattva / 06
  </div>

</section>
{/* ───────────────── Instagram ───────────────── */}

<section
  id="instagram"
  className="relative overflow-hidden bg-[#080807] px-6 py-32 md:px-10 md:py-48"
>
  <div className="mx-auto max-w-7xl">

    {/* Section label */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4"
    >
      <span className="text-[9px] uppercase tracking-[0.35em] text-[#77716a]">
        08
      </span>

      <span className="h-px w-8 bg-[#4d4944]" />

      <span className="text-[9px] uppercase tracking-[0.35em] text-[#77716a]">
        Instagram
      </span>
    </motion.div>


    {/* Intro */}
    <div className="mt-20 grid gap-12 md:grid-cols-[1fr_0.65fr] md:items-end">

      <motion.h2
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-8xl"
      >
        See what
        <span className="text-[#716b65]">
          {" "}
          Tattva is becoming.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="max-w-md text-sm leading-7 text-[#827b74] md:text-base md:leading-8"
      >
        Follow the centre beyond this page through
        activities, moments, ideas and everything still
        unfolding.
      </motion.p>

    </div>


    {/* Instagram window */}
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto mt-20 max-w-5xl"
    >

      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111110] shadow-2xl">

        {/* Browser / app chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>

          <span className="text-[8px] uppercase tracking-[0.3em] text-[#625d57]">
            Instagram
          </span>

          <span className="text-[8px] uppercase tracking-[0.2em] text-[#625d57]">
            Tattva
          </span>

        </div>


        {/* Profile header */}
        <a
          href="https://www.instagram.com/tattva_ikscentre/"
          target="_blank"
          rel="noreferrer"
          className="group block"
        >

          <div className="border-b border-white/10 px-6 py-8 md:px-10 md:py-10">

            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">

              {/* Avatar */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-[#1c1b19] md:h-24 md:w-24">

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#77716f]">
                  T
                </span>

              </div>


              {/* Profile details */}
              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-4">

                  <h3 className="text-xl font-light tracking-[-0.03em] text-[#f4f0e8] md:text-2xl">
                    @tattva_ikscentre
                  </h3>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[7px] uppercase tracking-[0.25em] text-[#77716f]">
                    Instagram
                  </span>

                </div>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#77716f]">
                  Tattva IKS Centre · Indian Knowledge Systems
                </p>

                <p className="mt-1 text-xs text-[#595550]">
                  Exploring knowledge through curiosity,
                  creativity and experience.
                </p>

              </div>


              {/* Visit */}
              <div className="flex items-center gap-3 text-[#a8a19a] transition-colors duration-300 group-hover:text-white">

                <span className="text-[8px] uppercase tracking-[0.25em]">
                  Visit
                </span>

                <span className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>

              </div>

            </div>

          </div>

        </a>


        {/* Preview grid */}
        <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">

          {[
            {
              label: "Explore",
              number: "01",
            },
            {
              label: "Experience",
              number: "02",
            },
            {
              label: "Connect",
              number: "03",
            },
            {
              label: "Discover",
              number: "04",
            },
            {
              label: "Create",
              number: "05",
            },
            {
              label: "Continue",
              number: "06",
            },
          ].map((post, index) => (

            <a
              key={post.number}
              href="https://www.instagram.com/tattva_ikscentre/"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#181715]"
            >

              {/* Ambient visual */}
              <div
                className={`absolute inset-0 transition-transform duration-700 group-hover:scale-110 ${
                  index % 3 === 0
                    ? "bg-[#6f4937]/20"
                    : index % 3 === 1
                      ? "bg-[#3d4038]/20"
                      : "bg-[#82735f]/15"
                }`}
              />

              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">

                <div className="flex justify-between">

                  <span className="text-[8px] tracking-[0.25em] text-white/40">
                    {post.number}
                  </span>

                  <span className="text-xs text-white/30 transition-all duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                    Tattva
                  </p>

                  <h4 className="mt-2 text-xl font-light tracking-[-0.03em] text-white/80 md:text-2xl">
                    {post.label}
                  </h4>

                </div>

              </div>

            </a>

          ))}

        </div>


        {/* Footer */}
        <a
          href="https://www.instagram.com/tattva_ikscentre/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between border-t border-white/10 px-6 py-6 md:px-10"
        >

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#77716f] transition-colors duration-300 group-hover:text-white">
            Open @tattva_ikscentre
          </span>

          <span className="text-sm text-[#77716f] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
            ↗
          </span>

        </a>

      </div>

    </motion.div>


    {/* Closing line */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      className="mt-12 flex items-center gap-4"
    >

      <span className="h-px w-8 bg-[#4d4944]" />

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#514d48]">
        Knowledge · Community · Continuation
      </span>

    </motion.div>

  </div>

</section>

{/* ───────────────── Footer ───────────────── */}

<footer className="relative overflow-hidden bg-[#080807] px-6 pb-8 pt-12 md:px-10 md:pt-20">

  <div className="mx-auto max-w-7xl">

    {/* Top footer line */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-between border-t border-white/10 pt-5"
    >
      <span className="text-[9px] uppercase tracking-[0.35em] text-[#625d57]">
        Tattva IKS Centre
      </span>

      <span className="text-[9px] uppercase tracking-[0.35em] text-[#625d57]">
        2026
      </span>
    </motion.div>


    {/* Footer content */}
    <div className="mt-14 grid gap-12 border-t border-white/10 pt-8 md:mt-16 md:grid-cols-[1fr_auto]">

      {/* Description */}
      <div>
        <p className="max-w-sm text-sm leading-7 text-[#625d57]">
          Exploring Indian Knowledge Systems through
          curiosity, creativity, conversation and experience.
        </p>
      </div>


      {/* Navigation */}
      <nav className="grid grid-cols-1 gap-y-5 md:text-right">

        <a
          href="#about"
          className="text-[9px] uppercase tracking-[0.25em] text-[#77716f] transition-colors duration-300 hover:text-[#f4f0e8]"
        >
          About
        </a>

        <a
          href="#journey"
          className="text-[9px] uppercase tracking-[0.25em] text-[#77716f] transition-colors duration-300 hover:text-[#f4f0e8]"
        >
          Journey
        </a>

        <a
          href="#activities"
          className="text-[9px] uppercase tracking-[0.25em] text-[#77716f] transition-colors duration-300 hover:text-[#f4f0e8]"
        >
          Activities
        </a>

        <a
          href="#members"
          className="text-[9px] uppercase tracking-[0.25em] text-[#77716f] transition-colors duration-300 hover:text-[#f4f0e8]"
        >
          Core Members
        </a>

        <a
          href="#instagram"
          className="text-[9px] uppercase tracking-[0.25em] text-[#77716f] transition-colors duration-300 hover:text-[#f4f0e8]"
        >
          Instagram
        </a>

      </nav>

    </div>


    {/* Creator credit */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.15,
      }}
      className="mt-24 border-t border-white/10 pt-10 md:mt-32 md:pt-14"
    >

      <p className="text-[10px] uppercase tracking-[0.3em] text-[#514d48]">
        Created & designed by
      </p>

      <h3 className="mt-4 text-5xl font-light tracking-[-0.055em] text-[#f4f0e8] md:text-7xl lg:text-8xl">
        Sheron Khoya
      </h3>

    </motion.div>


    {/* Copyright */}
    <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">

      <span className="text-[8px] uppercase tracking-[0.25em] text-[#3f3b37]">
        Tattva IKS Centre Project 2026
      </span>

      <span className="text-[8px] uppercase tracking-[0.25em] text-[#3f3b37]">
        All rights reserved.
      </span>

    </div>


    {/* Final footer mark */}
    <div className="mt-16 flex items-center justify-between">

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#3f3b37]">
        Tattva
      </span>

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#3f3b37]">
        End
      </span>

    </div>

  </div>

</footer>
    </main>
  );
}