"use client";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-[var(--color-bgSoft)] via-pink-100/60 to-[var(--color-bgSoft)]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-[var(--color-accent)] uppercase bg-pink-100 rounded-full border border-[var(--color-secondary)]/30">
          A Special Gift From Shwet
        </span>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
          Happy Girlfriend Day 🤍
        </h1>

        <p className="font-serif text-xl md:text-2xl text-[var(--color-accent)] font-light italic mb-8">
          "To my cute, adorable, and stubborn Angry Bird..."
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-sm text-gray-400 mt-12"
        >
          Scroll down to explore our story ↓
        </motion.div>
      </motion.div>
    </section>
  );
}