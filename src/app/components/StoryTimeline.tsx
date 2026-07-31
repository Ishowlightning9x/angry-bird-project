"use client";
import { motion } from "motion/react";
import { memories } from "../data/memories";

export default function StoryTimeline() {
  return (
    <section className="py-24 px-4 bg-white/60">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-center text-[var(--color-accent)] mb-16"
        >
          Our Story So Far ✨
        </motion.h2>

        <div className="relative border-l-2 border-[var(--color-secondary)]/30 ml-4 md:ml-32 space-y-12">
          {memories.map((mem, idx) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot Icon */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm" />

              <span className="text-xs font-semibold text-[var(--color-primary)] bg-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {mem.date}
              </span>

              <h3 className="font-serif text-2xl text-[var(--color-darkText)] mt-2 font-semibold">
                {mem.title}
              </h3>

              <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                {mem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}