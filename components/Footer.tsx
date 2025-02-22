"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 text-center text-blue-200/60 bg-background/40 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <p className="text-m">
          © {currentYear} <span className="gradient-text font-semibold">Vansh Shah</span>. All rights reserved.
        </p>
        <p className="text-m">
          Crafted with love ❤️ and the power of AI by <span className="gradient-text font-semibold">Vansh Shah</span>.
        </p>
        <p className="text-m">
          Built using Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </motion.footer>
  );
} 