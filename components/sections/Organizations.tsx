"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart } from "lucide-react";

const organizations = [
  {
    title: "Leo Club of Juhu",
    role: "Member",
    type: "NGO",
    icon: Heart,
    period: "Jul 2023 – present"
  },
  {
    title: "Association for Computing Machinery",
    role: "Publicity Committee",
    type: "DJSCE ACM",
    icon: Users,
    period: "Sep 2023 – Aug 2024"
  }
];

export default function Organizations() {
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
    <section ref={ref} id="organizations" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 gradient-text leading-relaxed"
      >
        Organizations
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-8 md:grid-cols-2"
      >
        {organizations.map((org, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Card className="h-full card-hover bg-background/40 backdrop-blur-sm border-blue-500/20 
                           hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-green-500/20 
                                transition-all duration-300">
                    <org.icon className="h-6 w-6 text-blue-400 group-hover:text-green-400 
                                      transition-colors duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-200 group-hover:text-green-400 
                                        transition-colors duration-300">
                      {org.title}
                    </CardTitle>
                    <p className="text-blue-300/60 group-hover:text-green-400/60 
                                transition-colors duration-300">
                      {org.role}
                    </p>
                    <p className="text-sm text-blue-300/60 group-hover:text-green-400/60 
                                transition-colors duration-300">
                      {org.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100/80 group-hover:text-green-400/80 
                            transition-colors duration-300">
                  {org.type}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}