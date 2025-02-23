"use client";

import { motion, useAnimationControls } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimationControls();

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    // { id: "achievements", label: "Achievements" },
    { id: "organizations", label: "Organizations" },
    { id: "softskills", label: "Soft Skills" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Special handling for home section
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Find active section
      const viewportHeight = window.innerHeight;
      let currentSection = sections[0].id;
      let maxVisibility = 0;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibility = Math.max(0, visibleHeight / element.offsetHeight);

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === "home") {
        // Scroll to top for home section
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        // For other sections, calculate offset
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveSection("home");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            VS
          </motion.span>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-500 ease-out ${
                    activeSection === section.id
                      ? 'text-green-400'
                      : 'text-foreground hover:text-green-400/80'
                  } transition-colors duration-300`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
                      transition={{ 
                        type: "spring", 
                        stiffness: 280, 
                        damping: 35,
                        mass: 1,
                        duration: 0.6 
                      }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-lg py-4"
          >
            <div className="flex flex-col space-y-2">
              {sections.map((section, index) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    scrollToSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 ${
                    activeSection === section.id
                      ? 'text-green-400'
                      : 'text-foreground hover:text-green-400/80'
                  }`}
                >
                  {section.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}