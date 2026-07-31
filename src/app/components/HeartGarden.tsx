"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface Flower {
  id: number;
  x: number;
  y: number;
  icon: string;
}

export default function HeartGarden() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const icons = ["🌸", "🌺", "🌷", "🌷", "🪷"];

  const handleBloom = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    setFlowers((prev) => [...prev, { id: Date.now(), x, y, icon: randomIcon }]);
  };

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-accent)] mb-2">
        Interactive Heart Garden 🌸
      </h2>
      <p className="text-gray-500 mb-8 text-sm">Tap anywhere in the box below to plant a flower for Angry Bird!</p>

      <div
        onClick={handleBloom}
        className="relative max-w-3xl mx-auto h-80 bg-gradient-to-b from-pink-100/40 to-pink-50 rounded-3xl border-2 border-dashed border-[var(--color-secondary)]/40 overflow-hidden cursor-crosshair flex items-center justify-center select-none"
      >
        {flowers.length === 0 && (
          <span className="text-gray-400 text-sm">Click inside this box...</span>
        )}

        {flowers.map((item) => (
          <motion.span
            key={item.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ left: item.x - 12, top: item.y - 12 }}
            className="absolute text-2xl pointer-events-none"
          >
            {item.icon}
          </motion.span>
        ))}
      </div>
    </section>
  );
}