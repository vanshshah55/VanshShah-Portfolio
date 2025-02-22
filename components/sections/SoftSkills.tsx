"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Users, MessageSquare, Presentation, Briefcase, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const softSkills = [
  { name: "Leadership & Decision Making", icon: Brain },
  { name: "Team Collaboration", icon: Users },
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Public Speaking & Presentation", icon: Presentation },
  { name: "Project Management", icon: Briefcase },
  { name: "Creativity", icon: Lightbulb }
];

export default function SoftSkills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} id="softskills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 gradient-text"
      >
        Soft Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full card-hover bg-background/40 backdrop-blur-sm border-blue-500/20 
                           hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-blue-500/10 group-hover:bg-green-500/20 
                                transition-all duration-300 mb-4">
                    <skill.icon className="h-8 w-8 text-blue-400 group-hover:text-green-400 
                                         transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-blue-200 group-hover:text-green-400 
                                      transition-colors duration-300">
                    {skill.name}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}