"use client";

import { motion, useScroll, useSpring } from 'framer-motion';

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] transform origin-left z-[9999]
                 bg-gradient-to-r from-blue-500/80 via-violet-500/80 to-green-400/80"
      style={{ 
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transformOrigin: '0%',
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 15px rgba(74, 222, 128, 0.4)'
      }}
    />
  );
} 