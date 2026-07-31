"use client";
import { motion } from "motion/react";
import { promises } from "../data/promises";

export default function PromiseSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[var(--color-bgSoft)] to-pink-50">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-md border border-[var(--color-secondary)]/20 relative">
        <div className="absolute top-0 left-8 right-8 h-2 bg-[var(--color-primary)] rounded-b-md" />
        
        <h2 className="font-serif text-3xl text-center text-[var(--color-accent)] mb-8">
          My Promises To You 📜
        </h2>

        <ul className="space-y-6">
          {promises.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-3 font-serif text-base md:text-lg text-gray-700 border-b border-pink-100 pb-4"
            >
              <span className="text-[var(--color-primary)] font-bold">✓</span>
              <span>{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}