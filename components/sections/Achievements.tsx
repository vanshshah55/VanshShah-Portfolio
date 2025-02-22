"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "IGNITE IT Hackathon Winner",
    subtitle: "First Position",
    organization: "SVKM's Shri Bhagubhai Mafatlal Polytechnic",
    description: "Developed a MERN stack Exercise Tracker during a hackathon, winning the competition for its innovative and efficient design. The app enables users to log workouts, track progress, and monitor exercise history through a user-friendly interface."
  },
  {
    title: "HAXITE Hackathon Winner",
    subtitle: "Second Runner up",
    organization: "SVKM's Shri Bhagubhai Mafatlal Polytechnic",
    description: "Developed \"AlgoSaurus,\" an interactive algorithm visualizer during a hackathon, securing the 2nd runner-up position. The tool helps users understand algorithms step-by-step through dynamic and engaging visualizations."
  }
];

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="achievements" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 gradient-text"
      >
        Achievements
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="h-full card-hover bg-background/40 backdrop-blur-sm border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <Trophy className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-200">{achievement.title}</CardTitle>
                    <p className="text-blue-300/60">{achievement.subtitle}</p>
                    <p className="text-sm text-blue-300/60">{achievement.organization}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100/80">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}