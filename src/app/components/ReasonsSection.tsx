"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { reasons } from "../data/reasons";

export default function ReasonsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50/50 to-[var(--color-bgSoft)]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-[var(--color-accent)] mb-4"
        >
          Reasons Why I Love You 💌
        </motion.h2>
        <p className="text-gray-500 mb-12 text-sm md:text-base">Tap any card to flip and reveal</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="cursor-pointer h-40 rounded-2xl bg-white border border-[var(--color-secondary)]/20 p-6 shadow-sm flex flex-col justify-center items-center text-center transition-all hover:shadow-md"
            >
              {activeCard === index ? (
                <p className="text-sm md:text-base font-medium text-[var(--color-accent)] leading-relaxed">
                  "{reason}"
                </p>
              ) : (
                <div>
                  <span className="text-2xl mb-2 block">💖</span>
                  <span className="font-serif text-lg text-[var(--color-primary)] font-semibold">
                    Reason #{index + 1}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">Tap to read</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}