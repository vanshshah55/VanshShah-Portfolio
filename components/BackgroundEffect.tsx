"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number>();

  // Initialize points
  useEffect(() => {
    const initPoints = () => {
      const points: Point[] = [];
      const numPoints = 40;
      
      for (let i = 0; i < numPoints; i++) {
        // Determine if this point should be on left or right side
        const side = Math.random() > 0.5 ? 'left' : 'right';
        let x;
        
        if (side === 'left') {
          // Place points in the left third of the screen
          x = Math.random() * (window.innerWidth / 3);
        } else {
          // Place points in the right third of the screen
          x = (window.innerWidth * 2/3) + (Math.random() * (window.innerWidth / 3));
        }
        
        points.push({
          x: x,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      
      pointsRef.current = points;
    };

    initPoints();
    window.addEventListener('resize', initPoints);
    
    return () => window.removeEventListener('resize', initPoints);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      pointsRef.current.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      // Draw connections
      pointsRef.current.forEach((point, i) => {
        pointsRef.current.slice(i + 1).forEach(otherPoint => {
          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
          const maxDistance = 180; // Increased connection distance
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity * 0.6})`; // Increased opacity
            ctx.lineWidth = 1.5; // Increased line width
            ctx.stroke();
          }
        });

        // Mouse interaction
        const mouseDistance = Math.hypot(point.x - mousePosition.x, point.y - mousePosition.y);
        const mouseMaxDistance = 250; // Increased mouse interaction distance
        
        if (mouseDistance < mouseMaxDistance) {
          const opacity = 1 - (mouseDistance / mouseMaxDistance);
          
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(mousePosition.x, mousePosition.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${opacity * 0.9})`; // Increased opacity
          ctx.lineWidth = 1.5; // Increased line width
          ctx.stroke();
        }

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2); // Increased point size
        ctx.fillStyle = 'rgba(167, 139, 250, 0.9)'; // Increased opacity
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0" style={{ zIndex: -1 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: '#0a0a1e' }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 30, 0.5) 100%)'
        }}
      />
    </div>
  );
}