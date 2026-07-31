"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { secretMessages, SecretMessage } from "../data/messages";

export default function SecretLetters() {
  const [selectedMsg, setSelectedMsg] = useState<SecretMessage | null>(null);

  return (
    <section className="py-24 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-accent)] mb-10">
          Secret Letters ✉️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secretMessages.map((msg) => (
            <motion.div
              key={msg.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedMsg(msg)}
              className="p-8 bg-pink-50 rounded-2xl border border-[var(--color-secondary)]/30 cursor-pointer shadow-sm hover:shadow-md text-center"
            >
              <span className="text-4xl block mb-4">💌</span>
              <h3 className="font-serif font-semibold text-lg text-[var(--color-darkText)]">
                {msg.title}
              </h3>
              <span className="text-xs text-[var(--color-primary)] font-medium mt-2 inline-block">
                Open Letter →
              </span>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedMsg && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white max-w-md w-full rounded-3xl p-8 border border-[var(--color-secondary)]/30 relative text-left shadow-2xl"
            >
              <button
                onClick={() => setSelectedMsg(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                Secret Note
              </span>
              <h3 className="font-serif text-2xl text-[var(--color-accent)] font-bold mt-1 mb-4">
                {selectedMsg.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-serif italic">
                "{selectedMsg.content}"
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}