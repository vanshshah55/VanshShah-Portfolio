"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="contact" className="py-20 min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
        <Card className="bg-background/40 backdrop-blur-sm border-blue-500/20 hover:border-green-500/30 transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="gradient-text">Let's Connect</CardTitle>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-green-500/20 transition-all duration-500">
                <MapPin className="h-4 w-4 text-blue-300 group-hover:text-green-400 transition-colors duration-500" />
              </div>
              <span className="text-blue-200/70 group-hover:text-green-400/70 transition-colors duration-500">Mumbai, India</span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-blue-200/90 mb-6 group-hover:text-green-400/90 transition-colors duration-500">
              I'm always open to new opportunities and collaborations. Feel free to reach out through any of these platforms:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg" asChild className="bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/50 hover:border-blue-500">
                <a
                  href="https://github.com/vanshshah55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200/90 hover:text-green-400 transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/50 hover:border-purple-500">
                <a
                  href="https://linkedin.com/in/vanshshah55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200/90 hover:text-green-400 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/50 hover:border-pink-500">
                <a
                  href="https://instagram.com/vanshshah55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200/90 hover:text-green-400 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/50 hover:border-cyan-500">
                <a
                  href="mailto:vips.vansh@gmail.com"
                  className="flex items-center gap-2 text-blue-200/90 hover:text-green-400 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                  Email : vips.vansh@gmail.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}