import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Reusable Button component with multiple variants
 */
export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const { theme } = useTheme();

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variantStyles = {
    primary: `
      ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}
      shadow-md hover:shadow-lg
    `,
    secondary: `
      ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'}
    `,
    outline: `
      ${theme === 'dark' ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}
    `,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.button>
  );
}
