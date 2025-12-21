import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable Section component with animation
 */
export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 px-4 md:px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.div className="max-w-6xl mx-auto mb-12" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
      </motion.div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
