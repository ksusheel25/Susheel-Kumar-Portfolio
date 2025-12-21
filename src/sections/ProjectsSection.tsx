import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import projectsData from '../data/projects.json';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

/**
 * Projects section - showcase best work
 */
export function ProjectsSection() {
  const { theme } = useTheme();
  const projects = projectsData.projects as Project[];
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden h-full flex flex-col p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
        {project.title}
      </h3>
      <p
        className={`text-sm font-medium mb-3
          ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}
        `}
      >
        {project.description}
      </p>

      <p
        className={`flex-1 mb-6
          ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}
        `}
      >
        {project.longDescription}
      </p>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className={`text-sm flex items-start gap-2
                  ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
                `}
              >
                <span className="text-blue-500 mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-1 rounded font-medium
                ${
                  theme === 'dark'
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'bg-blue-100 text-blue-700'
                }
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t dark:border-slate-700">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="secondary" size="sm" className="flex-1 flex items-center justify-center gap-2">
              <Github size={16} /> Code
            </Button>
          </a>
        ) : (
          <div className={`flex-1 px-3 py-2 rounded font-medium text-sm text-center
            ${theme === 'dark' ? 'bg-slate-700/50 text-slate-400' : 'bg-slate-200 text-slate-600'}
          `}>
            Private Repository
          </div>
        )}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="primary" size="sm" className="flex-1 flex items-center justify-center gap-2">
              <ExternalLink size={16} /> Live
            </Button>
          </a>
        ) : (
          <div className={`flex-1 px-3 py-2 rounded font-medium text-sm text-center
            ${theme === 'dark' ? 'bg-slate-700/50 text-slate-400' : 'bg-slate-200 text-slate-600'}
          `}>
            Internal Application
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selection of my best work"
    >
      {/* Featured Projects */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <motion.h3
            className="text-2xl font-bold mb-8 mt-16 pt-8 border-t dark:border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Other Notable Projects
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </Section>
  );
}
