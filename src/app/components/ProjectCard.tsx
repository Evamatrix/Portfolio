import { ExternalLink, Code } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  thumbnail?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {project.thumbnail && (
        <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 via-turquoise/20 to-secondary/20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="mb-2 group-hover:text-turquoise transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="w-4 h-4" />
            <span>Tech Stack:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1 text-sm rounded-full bg-turquoise/10 text-turquoise border border-turquoise/20 hover:bg-turquoise hover:text-white transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {project.demoLink && (
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-secondary to-dusty-mint text-white hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Demo</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
