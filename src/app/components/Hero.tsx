import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import evelynPic from '@/app/components/images/evelyn-pic.svg';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const words = ["Creative", "Analytical", "Strategic", "Passionate"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #C5B4E3 0%, #F4C2C2 100%)',
            top: '10%',
            left: '5%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #7CC9C0 0%, #A8CFC8 100%)',
            bottom: '10%',
            right: '10%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #F4C2C2 0%, #7CC9C0 100%)',
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? '#C5B4E3' : i % 3 === 1 ? '#7CC9C0' : '#F4C2C2',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-turquoise/20 border border-primary/30"
              >
                <Sparkles className="w-4 h-4 text-turquoise" />
                <span className="text-sm">Available for Full-Time Opportunities</span>
              </motion.div>

              <div>
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary via-turquoise to-secondary bg-clip-text text-transparent">
                    Evelyn Tran
                  </span>
                </motion.h1>

                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground h-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-gradient-to-r from-turquoise to-accent bg-clip-text text-transparent"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                  {' '}Social Media Enthusiast
                </motion.div>
              </div>

              <motion.p
                className="text-lg text-foreground/80 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Graduating Computer Science Senior from the{' '} <span className="text-peach font-medium">University of Texas at Dallas</span> blending{' '}
                <span className="text-turquoise font-medium">technical expertise</span> with{' '}
                <span className="text-primary font-medium">creative storytelling</span> to craft 
                engaging digital experiences that resonate.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-turquoise text-white rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-turquoise to-primary"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-foreground rounded-xl border-2 border-secondary hover:bg-secondary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['React', 'TypeScript', 'Content Strategy', 'Analytics', 'Social Media'].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm bg-white/80 backdrop-blur border border-border"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#7CC9C0', color: '#ffffff', borderColor: '#7CC9C0' }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container with Organic Blob Shape */}
              <motion.div
                className="relative z-10 overflow-hidden"
                animate={floatingAnimation}
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/30 via-turquoise/30 to-secondary/30 backdrop-blur-sm border-4 border-white/50 shadow-2xl relative overflow-hidden">
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-turquoise to-secondary opacity-20"></div>
                  <ImageWithFallback
                    src={evelynPic}
                    alt="Photo of Evelyn Tran"
                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-turquoise to-accent opacity-60 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-br from-secondary to-primary opacity-60 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-border"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-5, -8, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-turquoise"></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Engagement Rate</div>
                    <div className="font-medium text-turquoise">+127%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 border border-border"
                animate={{
                  y: [0, 15, 0],
                  rotate: [5, 8, 5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent"></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Projects Built</div>
                    <div className="font-medium text-primary">15+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
