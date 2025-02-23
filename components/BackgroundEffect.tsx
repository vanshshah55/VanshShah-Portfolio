"use client";

import { useEffect, useRef, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize points
  useEffect(() => {
    const initPoints = () => {
      const points: Point[] = [];
      // Fewer points for mobile
      const numPoints = isMobile ? 20 : 40;
      
      for (let i = 0; i < numPoints; i++) {
        const side = Math.random() > 0.5 ? 'left' : 'right';
        let x;
        
        if (side === 'left') {
          x = Math.random() * (window.innerWidth / 3);
        } else {
          x = (window.innerWidth * 2/3) + (Math.random() * (window.innerWidth / 3));
        }
        
        points.push({
          x: x,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5), // Slower movement on mobile
          vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
        });
      }
      
      pointsRef.current = points;
    };

    initPoints();
    window.addEventListener('resize', initPoints);
    return () => window.removeEventListener('resize', initPoints);
  }, [isMobile]);

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
    window.addEventListener('mousemove', (e) => setMousePosition({ x: e.clientX, y: e.clientY }));

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
          const maxDistance = isMobile ? 120 : 180; // Reduced connection distance on mobile
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity * (isMobile ? 0.4 : 0.6)})`; // Reduced opacity on mobile
            ctx.lineWidth = isMobile ? 1 : 1.5;
            ctx.stroke();
          }
        });

        // Mouse interaction
        const mouseDistance = Math.hypot(point.x - mousePosition.x, point.y - mousePosition.y);
        const mouseMaxDistance = isMobile ? 150 : 250;
        
        if (mouseDistance < mouseMaxDistance) {
          const opacity = 1 - (mouseDistance / mouseMaxDistance);
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(mousePosition.x, mousePosition.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${opacity * (isMobile ? 0.6 : 0.9)})`;
          ctx.lineWidth = isMobile ? 1 : 1.5;
          ctx.stroke();
        }

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, isMobile ? 2 : 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${isMobile ? 0.7 : 0.9})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMobile]);

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