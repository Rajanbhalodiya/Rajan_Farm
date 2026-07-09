import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingMangoes = ({ count = 15 }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Generate random items client-side to avoid hydration mismatches
    const generated = Array.from({ length: count }).map((_, i) => {
      const isMango = Math.random() > 0.4;
      return {
        id: i,
        isMango,
        size: isMango ? Math.random() * 40 + 30 : Math.random() * 25 + 15, // size in px
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 15, // float duration
        rotate: Math.random() * 360,
      };
    });
    setItems(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute opacity-10 dark:opacity-5"
          style={{
            left: item.left,
            bottom: '-10%',
            width: item.size,
            height: item.size,
          }}
          initial={{ y: 0, rotate: item.rotate, opacity: 0 }}
          animate={{
            y: '-120vh',
            rotate: item.rotate + 360,
            opacity: [0, 0.15, 0.15, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'linear',
          }}
        >
          {item.isMango ? (
            // Premium Gold Mango SVG
            <svg
              viewBox="0 0 100 100"
              fill="#FFB703"
              className="w-full h-full drop-shadow-glow-gold"
            >
              <path d="M50 15 C 20 15, 10 50, 30 75 C 45 90, 75 90, 85 70 C 95 50, 80 15, 50 15 Z" />
              {/* Leaf detail */}
              <path d="M50 15 C 55 5, 70 5, 75 10 C 65 15, 55 15, 50 15 Z" fill="#2D6A4F" />
            </svg>
          ) : (
            // Organic Farm Leaf SVG
            <svg
              viewBox="0 0 100 100"
              fill="#2D6A4F"
              className="w-full h-full drop-shadow-glow-green"
            >
              <path d="M50 10 C 20 40, 45 85, 50 90 C 55 85, 80 40, 50 10 Z" />
              {/* Leaf rib */}
              <path d="M50 10 L 50 85" stroke="#40916C" strokeWidth="3" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingMangoes;
