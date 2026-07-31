"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { finalSurpriseData } from "../data/surprise";

export default function FinalSurprise() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-4 text-center bg-pink-50/50">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-accent)] font-bold mb-6">
          One Last Surprise... 🎁
        </h2>

        {!isOpen ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all cursor-pointer text-lg"
          >
            {finalSurpriseData.buttonText}
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-white rounded-3xl shadow-xl border-2 border-pink-200"
          >
            <h3 className="font-serif text-2xl font-bold text-[var(--color-accent)] mb-4">
              {finalSurpriseData.title}
            </h3>
            <p className="text-gray-600 font-serif leading-relaxed mb-4">
              {finalSurpriseData.message}
            </p>
            <span className="text-sm font-semibold text-pink-400">
              {finalSurpriseData.closingNote}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}