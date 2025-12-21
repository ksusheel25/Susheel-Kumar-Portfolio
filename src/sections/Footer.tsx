import { useTheme } from '../hooks/useTheme';

/**
 * Footer section
 */
export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t
        ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={`text-sm
              ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
            `}
          >
            © {currentYear} Susheel Kumar. All rights reserved.
          </p>
          <p
            className={`text-sm
              ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
            `}
          >
            Built with React, Vite, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
