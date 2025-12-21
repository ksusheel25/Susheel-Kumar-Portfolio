import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

/**
 * Navigation header with theme toggle
 */
export function Header() {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sushil808174', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/susheel-kumar-9497b5245/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sushil80817425@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918081742575', label: 'Phone' },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors
        ${
          theme === 'dark'
            ? 'bg-slate-900/80 border-slate-800'
            : 'bg-white/80 border-slate-200'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.05 }}
        >
          Susheel Kumar
        </motion.button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-blue-600
                ${theme === 'dark' ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600'}
              `}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className={`p-2 rounded-full transition-colors
                  ${
                    theme === 'dark'
                      ? 'text-slate-400 hover:text-blue-400 hover:bg-slate-800'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
