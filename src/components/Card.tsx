import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Reusable Card component with hover effect
 */
export function Card({ children, className = '', hover = true }: CardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`
        rounded-lg border transition-all duration-300
        ${
          theme === 'dark'
            ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-800'
            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
        }
        ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
