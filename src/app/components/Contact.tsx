import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/evelyntran224',
      color: 'hover:text-primary',
      gradient: 'from-primary to-turquoise'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Evamatrix',
      color: 'hover:text-turquoise',
      gradient: 'from-turquoise to-accent'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/evelyn_tran224',
      color: 'hover:text-secondary',
      gradient: 'from-secondary to-dusty-mint'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:evelyntran224@gmail.com',
      color: 'hover:text-accent',
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-turquoise/30 blur-3xl"
          style={{ top: '20%', left: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-secondary/30 to-dusty-mint/30 blur-3xl"
          style={{ bottom: '10%', right: '10%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking opportunities in social media management, content strategy, 
            and digital marketing. Let's chat about how we can work together!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border transition-all hover:shadow-lg ${link.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${link.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-turquoise/10 to-secondary/10 border border-border text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-turquoise/5 via-primary/5 to-secondary/5"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          />

          <div className="relative z-10">
            <h3 className="mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for a social media coordinator, content creator, or someone who can 
              bridge the gap between tech and creativity, I'd love to hear from you.
            </p>
            <motion.a
              href="mailto:evelyntran224@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary via-turquoise to-accent text-white rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent via-turquoise to-primary"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Send me an email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
