"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setPosition({ x, y });
      
      // Update background effect position
      const percentX = (x / window.innerWidth) * 100;
      const percentY = (y / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${percentX}%`);
      document.documentElement.style.setProperty('--mouse-y', `${percentY}%`);

      // Check for clickable elements
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none;
        }
      `}</style>

      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99999
      }}>
        {/* Main dot */}
        <motion.div
          style={{
            position: 'absolute',
            top: position.y - 3,
            left: position.x - 3,
            width: '6px',
            height: '6px',
            backgroundColor: 'rgba(167, 139, 250, 0.8)',
            borderRadius: '50%',
            pointerEvents: 'none',
            mixBlendMode: 'normal'
          }}
          animate={{
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />

        {/* Outer ring */}
        <motion.div
          style={{
            position: 'absolute',
            top: position.y - 12,
            left: position.x - 12,
            width: '24px',
            height: '24px',
            border: '1px solid rgba(167, 139, 250, 0.5)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
          animate={{
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </div>
    </>
  );
}