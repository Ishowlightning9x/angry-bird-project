'use client';
import React, { useState } from 'react';

const cardData =[
  { 
    id: 1, 
    img: '/photo1.jpeg', 
    title: 'Kitni pyaari smile hai🥰', 
    subtitle: 'Tap to flip💖' 
  },
  { 
    id: 2, 
    img: '/photo2.jpeg', 
    title: 'Khule hue baalon mein kitni acchi lgti hai na?', 
    subtitle: 'Click to view💓 ' 
  },
  { 
    id: 3, 
    img: '/photo3.jpeg', 
    title: 'Smile kitni pyaari hai yrr✨️', 
    subtitle: 'Tap to reveal 📸' 
  },
  { 
    id: 4, 
    img: '/photo4.jpeg', 
    title: 'how can someone look this adorable ❤️', 
    subtitle: 'Tap to see 💖' 
  },
  { 
    id: 5, 
    img: '/photo5.jpeg', 
    title: 'Simple but cute smile😊', 
    subtitle: 'Tap to see photo 🌟' 
  },
  { 
    id: 6, 
    img: '/photo6.jpeg', 
    title: 'Admirable 😍', 
    subtitle: 'Click to unveil💞' 
  },
  { 
    id: 7, 
    img: '/photo7.jpeg', 
    title: 'Final Surprise ✨', 
    subtitle: 'Tap to view 💌' 
  },
];

export default function PhotoGallery() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const handleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">Our Special Surprise Cards 💌</h2>
      <div className="flex flex-wrap gap-6 justify-center max-w-5xl">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className="w-56 h-72 cursor-pointer [perspective:1000px]"
          >
            <div
              className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-xl shadow-xl ${
                flipped[card.id] ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* Front Side (Pehle Text / Title dikhega) */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-slate-800 text-white rounded-xl flex flex-col items-center justify-center p-4 text-center border-2 border-pink-500">
                <h3 className="text-xl font-bold text-pink-400 mb-2">{card.title}</h3>
                <p className="text-xs text-slate-400 mt-2">{card.subtitle}</p>
              </div>

              {/* Back Side (Tap karne par Photo dikhegi) */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden border-2 border-slate-700 [transform:rotateY(180deg)]">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}