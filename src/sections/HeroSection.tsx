import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { useTheme } from '../hooks/useTheme';

/**
 * Hero section - first impression
 */
export function HeroSection() {
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 md:pt-0
        ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800' : 'bg-gradient-to-b from-slate-50 via-white to-slate-50'}
      `}
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium border
              ${
                theme === 'dark'
                  ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                  : 'bg-blue-100 border-blue-200 text-blue-700'
              }
            `}
          >
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span
            className={theme === 'dark' ? 'text-white' : 'text-slate-900'}
          >
            Full Stack Developer
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Building Modern Web
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto
            ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
          `}
        >
          Java Full Stack Developer with 2+ years of experience in Spring Boot, REST APIs, React, SQL databases, CI/CD, and cloud-native tooling. Passionate about clean architecture, performance, and scalable UI systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="flex items-center justify-center gap-2"
          >
            View My Work <ArrowRight size={20} />
          </Button>
          <a href="public/Susheel_Kumar.pdf" download="Susheel_Kumar.pdf">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <Download size={20} /> Download Resume
            </Button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div
            className={`rounded-full border-2 p-3
              ${theme === 'dark' ? 'border-slate-700' : 'border-slate-300'}
            `}
          >
            <div
              className={`w-1 h-3 rounded-full animate-pulse
                ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}
              `}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
