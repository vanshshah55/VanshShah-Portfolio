"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeModel } from "@/components/3d/CodeModel";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "AI and ML Engineer",
        "Full Stack Developer",
        "Digital Marketing Specialist",
        "Data Analyst"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas 
          camera={{ position: [0, 0, 12], fov: 40 }}
          className="translate-y-[50px]"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#67e8f9" />
          <Float
            speed={1.2}
            rotationIntensity={0.4}
            floatIntensity={0.4}
          >
            <CodeModel />
          </Float>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.4}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      
      <div className="z-10 text-center max-w-6xl w-full mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-4 gradient-text"
        >
          Vansh Vipul Shah
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl glow-text mb-8 h-8"
        >
          <span ref={typedRef}></span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-between max-w-4xl mx-auto px-20"
        >
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/50 hover:border-blue-500 text-blue-200/90 "
              asChild
            >
              <a href="https://github.com/vanshshah55" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="ml-2">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/50 hover:border-purple-500 text-blue-200/90 "
              asChild
            >
              <a href="https://linkedin.com/in/vanshshah55" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/50 hover:border-cyan-500 text-blue-200/90 "
              asChild
            >
              <a href="mailto:vips.vansh@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="ml-2">Email</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/50 hover:border-pink-500 text-blue-200/90 "
              asChild
            >
              <a href="https://instagram.com/vanshshah55" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="ml-2">Instagram</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}