import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import emailjs from '@emailjs/browser';

/**
 * Contact section - get in touch
 */
export function ContactSection() {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const templateParams = {
      to_email: 'sushil80817425@gmail.com',
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams
      )
      .then(() => {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      })
      .catch(() => {
        setError('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sushil80817425@gmail.com',
      href: 'mailto:sushil80817425@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/susheel-kumar-9497b5245',
      href: 'https://www.linkedin.com/in/susheel-kumar-9497b5245/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Sushil808174',
      href: 'https://github.com/Sushil808174',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <>
      <Section id="contact" title="Let's Connect" subtitle="I'm always open to new opportunities">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 text-center h-full hover:scale-105 transition-transform cursor-pointer">
                <Icon className="w-10 h-10 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold mb-1">{label}</h3>
                <p
                  className={`text-sm
                    ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
                  `}
                >
                  {value}
                </p>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </Section>

      {/* Contact Form Section with Full Width Background */}
      <section className={`py-20 md:py-28
        ${theme === 'dark' ? 'bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900' : 'bg-gradient-to-b from-blue-50 via-slate-50 to-purple-50'}
      `}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-lg text-center
                ${
                  theme === 'dark'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-green-100 text-green-700'
                }
              `}
            >
              <p className="font-semibold">Thanks for reaching out! I'll get back to you soon.</p>
            </motion.div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-lg text-center
                ${
                  theme === 'dark'
                    ? 'bg-red-500/20 text-red-300'
                    : 'bg-red-100 text-red-700'
                }
              `}
            >
              <p className="font-semibold">{error}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2
                    ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
                  `}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border transition-colors
                    ${
                      theme === 'dark'
                        ? 'bg-slate-700/50 border-slate-600 text-white focus:border-blue-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  `}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2
                    ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
                  `}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border transition-colors
                    ${
                      theme === 'dark'
                        ? 'bg-slate-700/50 border-slate-600 text-white focus:border-blue-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  `}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2
                    ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
                  `}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-2.5 rounded-lg border transition-colors resize-none
                    ${
                      theme === 'dark'
                        ? 'bg-slate-700/50 border-slate-600 text-white focus:border-blue-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600'
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  `}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
