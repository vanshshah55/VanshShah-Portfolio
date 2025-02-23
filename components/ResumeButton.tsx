"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeButton() {
  return (
    <motion.div
      className="resume-button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant="outline"
        size="lg"
        className="bg-green-500/10 hover:bg-green-500/20 border-green-500/50 hover:border-green-500 text-green-400"
        asChild
      >
        <a
          href="https://drive.google.com/file/d/16jmMkZj_cTUTLblk4zWYsTtAT9gPoBoi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FileText className="h-5 w-5" />
          Resume
        </a>
      </Button>
    </motion.div>
  );
}