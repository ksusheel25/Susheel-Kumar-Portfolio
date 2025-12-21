import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import skillsData from '../data/skills.json';
import type { Skill } from '../types';

/**
 * Skills section - showcase technical expertise
 */
export function SkillsSection() {
  const skills = skillsData.skills as Skill[];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and frameworks I work with daily"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skills.map((skillGroup, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
