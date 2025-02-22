"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar, Building, Award } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Web/App Developer, Digital Marketing",
    company: "Vipsee Infotech",
    location: "Mumbai, India",
    period: "Dec 2024 – present",
    description: "Developed and maintained the company website using React, ensuring a dynamic and responsive user experience. Built an internal application leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline business operations and enhance productivity. Managed digital marketing strategies, including SEO optimization and social media to boost online visibility and audience engagement.",
    achievements: [
      "Developed and maintained responsive company website using React",
      "Built internal MERN stack application improving operational efficiency",
      "Increased online visibility through SEO and social media strategies",
      "Implemented networking solutions and IT infrastructure setup",
      "Contributed to company's digital growth through full-stack development"
    ],
    skills: [
      "React",
      "Node.js", 
      "MongoDB",
      "Express.js",
      "SEO",
      "Digital Marketing",
      "IT Infrastructure",
      "Full Stack Development"
    ],
    link: "https://drive.google.com/file/d/1RBJd-my82eyITaHo4TDnrqfYMB_geKY-/view"
  },
  {
    title: "AI Developer",
    company: "ATIDAN TECHNOLOGIES",
    location: "Mumbai, India",
    period: "Jun 2024 – Oct 2024",
    description: "Part of data analysis and report generation department. Developed an URL-based AI chatbot using Python for Microsoft customer support, improving interaction efficiency. Additionally, created an AI-powered solution for real-time video-based animal threat detection using computer vision and YOLO algorithms for zoo environment monitoring.",
    achievements: [
      "Developed AI chatbot for Microsoft customer support using Python",
      "Implemented YOLO-based real-time animal threat detection system",
      "Optimized chatbot functionality for enhanced user experience",
      "Integrated APIs for improved system connectivity",
      "Created comprehensive data analysis reports"
    ],
    skills: [
      "Python",
      "AI Development",
      "Computer Vision",
      "YOLO",
      "Deep Learning",
      "API Integration",
      "Data Analysis",
      "ChatBot Development"
    ],
    link: "https://drive.google.com/file/d/1BfEmdTXuJ23k4AZCrxjel_z603ax-FPf/view"
  },
  {
    title: "Technical Executive",
    company: "UNIVIEW TECHNOLOGIES INDIA",
    location: "Mumbai, India",
    period: "Jul 2022 – Aug 2022",
    description: "Worked in the RMA Department, gaining hands-on technical experience with hardware components and troubleshooting.",
    achievements: [
      "Resolved 200+ technical support tickets",
      "Improved RMA process efficiency by 40%",
      "Trained 3 new team members on technical procedures"
    ],
    skills: ["Hardware Troubleshooting", "Technical Support", "Documentation"],
    link: "https://drive.google.com/file/d/1MXfRHG-oqA_psPYPY0ViK4c_0veeXgjK/view"
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={ref} id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 gradient-text"
      >
        Professional Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative" ref={scrollRef}>
        <motion.div
          className="absolute left-0 top-0 w-[2px] h-full"
          style={{ 
            scaleY,
            transformOrigin: "top",
            background: "linear-gradient(180deg, #3B82F6 0%, #10B981 100%)",
          }}
        />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-6 mb-8 group"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div
              className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-blue-500 
                         group-hover:bg-green-500 transition-colors duration-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            />
            
            <Card className="bg-background/40 backdrop-blur-sm border-blue-500/20 
                           group-hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-green-400 transition-colors duration-500 text-blue-200/90">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-blue-300/60 group-hover:text-green-400/60 transition-colors duration-500">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-300/60 group-hover:text-green-400/60 transition-colors duration-500">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-500/10 group-hover:bg-green-500/20 
                             transition-all duration-500"
                  >
                    <ExternalLink className="h-5 w-5 text-blue-300 group-hover:text-green-400 
                                          transition-colors duration-500" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100/80 mb-4 group-hover:text-green-400/80 transition-colors duration-500">
                  {exp.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300
                                 group-hover:bg-green-500/10 group-hover:text-green-400
                                 transition-all duration-500"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}