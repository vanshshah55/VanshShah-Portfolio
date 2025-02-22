"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, 
  FaGithub, FaAws, FaDocker, FaDatabase, FaRaspberryPi, FaChartBar,
  FaCode, FaMicrochip
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiElectron, SiTailwindcss, SiBootstrap,
  SiPandas, SiNumpy, SiFlask, SiDjango, SiPytorch, SiTensorflow,
  SiOpenai, SiGooglecloud, SiPostman, SiTableau,
  SiCanva, SiFigma, SiMysql, SiOracle, SiGoogleanalytics,
  SiCplusplus, SiC, SiGit, SiVmware, SiVirtualbox,
  SiScikitlearn, SiGooglecolab,
} from "react-icons/si";
import { TbBrandVscode, TbBrain, TbRobot, TbEye } from "react-icons/tb";
import { BiNetworkChart, BiData } from "react-icons/bi";
import { BsGraphUp, BsClockHistory } from "react-icons/bs";

const skillCategories = [
  {
    title: "Web Development",
    icon: FaReact,
    skills: [
      { name: "MERN Stack (MongoDB, Express.js, React.js, Node.js)", icon: FaReact },
      { name: "Electron.js", icon: SiElectron },
      { name: "HTML 5", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "PHP", icon: FaPhp },
      { name: "SEO", icon: BiNetworkChart },
      { name: "Web Hosting", icon: FaAws }
    ]
  },
  {
    title: "Python",
    icon: FaPython,
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "Numpy", icon: SiNumpy },
      { name: "Matplotlib" },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "Pytorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Openai", icon: SiOpenai },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Plotly", icon: SiGoogleanalytics },
      { name: "Python for Rasberry-Pi", icon: FaRaspberryPi }
    ]
  },
  {
    title: "Artificial Intelligence",
    icon: TbBrain,
    skills: [
      { name: "AI Agents", icon: TbRobot },
      { name: "Generative AI", icon: TbBrain },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Gemini", icon: SiGooglecloud },
      { name: "Azure OpenAI"},
      { name: "NLP", icon: BiNetworkChart },
      { name: "Computer Vision", icon: TbEye },
      { name: "Time Series Analysis", icon: BsClockHistory },
      { name: "Recommendation Systems", icon: BsGraphUp }
    ]
  },
  {
    title: "Tools",
    icon: TbBrandVscode,
    skills: [
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Git", icon: SiGit },
      { name: "Github", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "AWS EC2", icon: FaAws },
      { name: "Azure Cloud"},
      { name: "Tableau", icon: SiTableau },
      { name: "PowerBI"},
      { name: "VMware", icon: SiVmware },
      { name: "VirtualBox", icon: SiVirtualbox },
      { name: "Canva", icon: SiCanva },
      { name: "Figma", icon: SiFigma },
      { name: "AutoIT", icon: FaCode }
    ]
  },
  {
    title: "Data Mining and Analysis",
    icon: BiData,
    skills: [
      { name: "Data Preprocessing", icon: FaChartBar },
      { name: "Web Scraping", icon: BiNetworkChart },
      { name: "Association Rule Mining", icon: BiData },
      { name: "Statistical Analysis", icon: BsGraphUp },
      { name: "Exploratory Data Analysis (EDA)", icon: FaChartBar }
    ]
  },
  {
    title: "Programming & Databases",
    icon: FaCode,
    skills: [
      { name: "C/C++", icon: SiCplusplus },
      { name: "Oracle", icon: SiOracle },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Microprocessors - Assembly Level Language", icon: FaMicrochip },
      { name: "8085, 8086, 8051", icon: FaMicrochip }
    ]
  }
];

export default function Skills() {
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
    <section ref={ref} id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 gradient-text leading-relaxed"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-8 md:grid-cols-2"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full card-hover bg-background/40 backdrop-blur-sm border-blue-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-200 group-hover:text-green-400 transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                 hover:from-blue-500/20 hover:to-purple-500/20 
                                 text-blue-200 rounded-full text-sm border border-blue-500/20 
                                 hover:border-blue-500/40 transition-all duration-300 
                                 transform hover:scale-105 flex items-center gap-2"
                    >
                      {skill.icon && <skill.icon className="h-4 w-4" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}