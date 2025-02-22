"use client";

import { Suspense, lazy } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Navbar from "@/components/Navbar";
import TopProgressBar from "@/components/TopProgressBar";
import Footer from '@/components/Footer';

// Lazy load all sections
const Hero = lazy(() => import('@/components/sections/Hero'));
const About = lazy(() => import('@/components/sections/About'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Organizations = lazy(() => import('@/components/sections/Organizations'));
const SoftSkills = lazy(() => import('@/components/sections/SoftSkills'));
const Contact = lazy(() => import('@/components/sections/Contact'));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopProgressBar />
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Organizations />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <SoftSkills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}