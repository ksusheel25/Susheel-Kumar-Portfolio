import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import experienceData from '../data/experience.json';
import type { Experience } from '../types';
import { useTheme } from '../hooks/useTheme';

/**
 * Experience section - professional background
 */
export function ExperienceSection() {
  const { theme } = useTheme();
  const experience = experienceData.experience as Experience[];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="My journey as a full-stack developer"
    >
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {experience.map((job, idx) => (
          <motion.div key={job.id} variants={itemVariants} className="relative">
            {/* Timeline line */}
            {idx !== experience.length - 1 && (
              <div
                className={`absolute left-0 top-12 w-1 h-24 md:h-32
                  ${theme === 'dark' ? 'bg-gradient-to-b from-blue-500 to-transparent' : 'bg-gradient-to-b from-blue-400 to-transparent'}
                `}
              />
            )}

            {/* Timeline dot */}
            <div className="flex gap-6">
              <div className="relative pt-1">
                <div
                  className={`w-4 h-4 rounded-full border-2 border-blue-600 
                    ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}
                />
              </div>

              <Card className="flex-1 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {job.position}
                    </h3>
                    <p
                      className={`text-lg font-semibold
                        ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
                      `}
                    >
                      {job.company}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-medium mt-2 md:mt-0
                      ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}
                    `}
                  >
                    {job.duration}
                  </span>
                </div>

                <p
                  className={`mb-4
                    ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}
                  `}
                >
                  {job.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-full font-medium
                        ${
                          theme === 'dark'
                            ? 'bg-slate-700/50 text-slate-300'
                            : 'bg-slate-200 text-slate-700'
                        }
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
