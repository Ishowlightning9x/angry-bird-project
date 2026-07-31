"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function LoveCounter() {
  const startDate = new Date("2026-06-21T00:00:00");
  const [timePassed, setTimePassed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, now.getTime() - startDate.getTime());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimePassed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--color-bgSoft)] to-pink-50 text-center px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl text-[var(--color-accent)] mb-4"
      >
        Time Passed Since Shwet Confessed ❤️
      </motion.h2>
      <p className="text-gray-600 mb-10 text-sm md:text-base">Started on 21 June 2026</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {Object.entries(timePassed).map(([unit, val]) => (
          <motion.div
            key={unit}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-sm border border-[var(--color-secondary)]/20 flex flex-col items-center justify-center"
          >
            <span className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] font-sans">{val}</span>
            <span className="capitalize text-gray-500 text-xs md:text-sm mt-2">{unit}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}