import { Code, Palette, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const skills = [
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'Proficient in web development, data analysis, and software engineering principles.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Eye for aesthetics with experience in UI/UX design and visual content creation.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Understanding of platform algorithms, content strategy, and audience engagement.',
      color: 'text-turquoise',
      bgColor: 'bg-turquoise/10'
    },
    {
      icon: Sparkles,
      title: 'Content Strategy',
      description: 'Skilled at crafting compelling narratives and data-driven content strategies.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            As a Computer Science graduate, I've discovered my passion lies at the intersection of technology 
            and creative communication. I'm excited to leverage my technical background to drive innovative 
            social media strategies and build authentic connections with audiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-6 h-6 ${skill.color}`} />
                </motion.div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-turquoise/10 to-secondary/10 border border-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-turquoise/30 to-accent/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <div className="relative z-10">
              <h3 className="mb-4 text-center">Education</h3>
              <div className="space-y-2 text-center">
                <p className="text-lg">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground">University of Texas at Dallas | Expected Graduation: 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
