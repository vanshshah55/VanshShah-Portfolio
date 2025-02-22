"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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

const projects = [
  {
    title: "Namaste India, Sustainable Tourism for India",
    subtitle: "Djsce ACM Hackathon LOC-7",
    period: "Feb 2025",
    description: "Developed an innovative smart tourism platform to enhance sustainable travel experiences in India by leveraging real-time data, AI-driven crowd management, eco-friendly travel recommendations, and improved accessibility for differently-abled travelers. Built using React.js, Node.js, Firebase, and Google Maps API, the solution promotes responsible tourism while aligning with local cultural and environmental needs.",
    tags: ["real-time data", "AI-driven crowd management", "eco-friendly travel recommendations", "React.js", "Node.js", "Firebase", "Google Maps API","Full Stack Development"],
    github: "https://github.com/vanshshah55/SustainableTourism_Hackathon_LOC7"
  },
  {
    title: "AI Driven Predictive Analysis for Business Intelligence",
    subtitle: "College Projects Inclusive All Semesters",
    period: "2024 – present",
    description: "Currently developing a Business Intelligence system that leverages Artificial Intelligence, Machine Learning, and Big Data Analytics to deliver predictive insights for business operations, including customer behavior, market trends, inventory management, sales forecasts & financial trends.",
    tags: ["Artificial Intelligence", "Machine Learning", "Big Data Analytics","Data Handling","Data Analysis","Data Visualization","Financial Forecasting","Predictive Analysis","Customer Behavior","Market Trends","Inventory Management","Time Series Analysis"],
    github: "https://github.com/vanshshah55"
  },
  {
    title: "Task Tracking System using MERN Stack",
    subtitle: "Vipsee Infotech's Task Tracker",
    period: "Jan 2025 – Feb 2025",
    description: "Developing a comprehensive task tracking system for Vipsee Infotech using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create, update, and track tasks in real-time, with features for task categorization, Filters, and status updates. Utilized React for a responsive, interactive frontend, and Node.js with Express.js for the backend API. Data is stored in MongoDB for efficient management. Implemented authentication and authorization using JWT for secure user access.",
    tags: ["MERN stack", "React", "Node.js", "Express.js", "MongoDB", "JWT","Full Stack Development","Web Development","Backend Development","Frontend Development","Database Management","API Development"],
    github: "https://github.com/vanshshah55/MERN-TaskTracking"
  },
  {
    title: "Official Company Website Development",
    subtitle: "Vipsee Infotech's Website",
    period: "Dec 2024 – Jan 2025",
    description: "Developed a professional website for Vipsee Infotech using React for dynamic user interfaces and Tailwind CSS for a responsive, modern design. The website features optimized SEO to enhance search engine visibility. The site showcases company's information, products and services. Managed the domain's DNS settings, including routing Mail Servers and Name Servers from the domain provider to the hosting provider, ensuring reliable hosting with Git and GitHub for version control.",
    tags: ["React", "Tailwind CSS", "SEO", "Git", "GitHub","Website Development","Domain Management","Web Hosting","Google Analytics","Google Search Console"],
    website: "https://vipinfo.co.in",
    isWebsite: true
  },
  {
    title: "Animal threat detection using Computer vision",
    subtitle: "Atidan's Animal Threat Detection",
    period: "Sep 2024 – Oct 2024",
    description: "Developed an AI-powered solution for real-time video file based animal threat detection using computer vision for Atidan. Leveraged YOLO deep learning algorithms to monitor zoo environments, identifying animals and potential threats to enhance wildlife safety and security.",
    tags: ["Computer Vision", "YOLO deep learning algorithms","Machine Learning","Deep Learning","Object Detection"],
    github: "https://github.com/vanshshah55/Animal-threat-detection"
  },
  {
    title: "URL based AI Chatbot for Microsoft Customer support",
    subtitle: "Atidan's AI Chatbot",
    period: "Jul 2024 – Sep 2024",
    description: "Developed an AI chatbot using Python for Atidan, integrating ChatGPT and Gemini models with Natural Language Processing to automate customer queries and enhance response times by retrieving information from Microsoft's knowledge base through web scraping.",
    tags: ["AI", "Python", "ChatGPT", "Gemini", "Natural Language Processing", "Web Scraping","Customer Support"],
    github: "https://github.com/vanshshah55/Ai_URLbased_chatbot"
  },
  {
    title: "Remote Desktop Application Using Web Browser",
    subtitle: "Remote Access Pro",
    period: "Mar 2023 – Jun 2023",
    description: "Developed a web-based remote desktop application using WebSocket protocols, enabling global access & control of PCs without client-side download, & facilitating real time screen sharing & remote support using browser. Handled backend using Node.js & client-side using Electron.js.",
    tags: ["WebSocket protocols", "Node.js", "Electron.js","Remote Access","Remote Support","Screen Sharing"],
    github: "https://github.com/vanshshah55/remoteaccesspro"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleShowToggle = () => {
    setShowAll(!showAll);
    
    if (showAll) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const offset = 100;
        const targetPosition = projectsSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section ref={ref} id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 gradient-text"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col gap-8 max-w-4xl mx-auto px-4"
      >
        <AnimatePresence mode="sync">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              layout
              transition={{
                layout: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              <a href={project.isWebsite ? project.website : project.github} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full">
                <Card className="card-hover bg-background/40 backdrop-blur-sm border-blue-500/20 
                               hover:border-green-500/40 cursor-pointer p-5 
                               transition-all duration-300 ease-in-out">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold text-blue-200 group-hover:text-green-400 transition-colors duration-300">
                              {project.title}
                            </CardTitle>
                            <p className="text-lg italic text-blue-200/70">
                              {project.subtitle}
                            </p>
                            <p className="text-md text-blue-300/60">
                              {project.period}
                            </p>
                          </div>
                          {project.isWebsite ? (
                            <ExternalLink className="h-6 w-6 text-blue-300 group-hover:text-green-400 transition-colors duration-300" />
                          ) : (
                            <Github className="h-6 w-6 text-blue-300 group-hover:text-green-400 transition-colors duration-300" />
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-6">
                        <p className="text-lg leading-relaxed text-blue-100/80 group-hover:text-green-400/90 transition-colors duration-300">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="px-4 py-2 bg-blue-500/10 text-blue-200/90 text-sm font-medium 
                                       group-hover:bg-green-500/20 group-hover:text-green-400 
                                       transition-colors duration-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-4 mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={handleShowToggle}
          className="bg-blue-500/10 hover:bg-green-500/20 border-blue-500/50 
                     hover:border-green-500 text-blue-200 hover:text-green-400 
                     transition-all duration-300 ease-in-out"
        >
          {showAll ? (
            <>Show Less <ExternalLink className="ml-2 h-4 w-4" /></>
          ) : (
            <>View More <ExternalLink className="ml-2 h-4 w-4" /></>
          )}
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="bg-blue-500/10 hover:bg-green-500/20 border-blue-500/50 
                     hover:border-green-500 text-blue-200 hover:text-green-400 
                     transition-all duration-300 ease-in-out"
          asChild
        >
          <a 
            href="https://github.com/vanshshah55?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            See All Projects on GitHub <Github className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}