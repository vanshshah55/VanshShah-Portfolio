"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typedRef1 = useRef<HTMLSpanElement>(null);
  const typedRef2 = useRef<HTMLSpanElement>(null);
  const typed1Ref = useRef<Typed | null>(null);
  const typed2Ref = useRef<Typed | null>(null);

  useEffect(() => {
    if (inView && typedRef1.current) {
      typed1Ref.current = new Typed(typedRef1.current, {
        strings: [
          "I am an <span class='highlight'>enthusiastic AI and ML student</span> with a solid foundation in <span class='highlight'>computer science</span> from my completed <span class='highlight'>diploma</span>. Through various internships, I've gained hands-on experience in <span class='highlight'>software development</span>, <span class='highlight'>Python programming</span>, and <span class='highlight'>MERN stack development</span>."
        ],
        typeSpeed: 20,
        showCursor: true,
        cursorChar: '|',
        onComplete: (self) => {
          self.cursor.style.display = 'none';
          if (typedRef2.current) {
            typed2Ref.current = new Typed(typedRef2.current, {
              strings: [
                "My expertise extends beyond technical skills to include <span class='highlight'>marketing and publicity</span>, complemented by strong <span class='highlight'>public speaking</span> and <span class='highlight'>communication abilities</span>. I thrive in <span class='highlight'>dynamic environments</span> and have demonstrated my capability to <span class='highlight'>manage and lead projects</span> effectively."
              ],
              typeSpeed: 20,
              showCursor: true,
              cursorChar: '|',
              onComplete: (self) => {
                self.cursor.style.display = 'none';
              }
            });
          }
        }
      });
    }

    return () => {
      typed1Ref.current?.destroy();
      typed2Ref.current?.destroy();
    };
  }, [inView]);

  return (
    <section ref={ref} id="about" className="py-20 section-transition">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-background/40 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-green-500/30 transition-all duration-300"
        >
          <p className="text-lg text-blue-200/90">
            <span ref={typedRef1}></span>
          </p>
          
          <p className="text-lg text-blue-200/90">
            <span ref={typedRef2}></span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}