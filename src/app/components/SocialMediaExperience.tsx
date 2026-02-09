import { motion } from 'motion/react';
import { Instagram, TrendingUp, Users, Heart, MessageCircle, Eye, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function SocialMediaExperience() {
  const stats = [
    {
      icon: TrendingUp,
      value: '127%',
      label: 'Engagement Increase',
      color: 'from-primary to-secondary'
    },
    {
      icon: Users,
      value: '15K+',
      label: 'Followers Gained',
      color: 'from-turquoise to-accent'
    },
    {
      icon: Heart,
      value: '85%',
      label: 'Average Engagement Rate',
      color: 'from-secondary to-dusty-mint'
    },
    {
      icon: Eye,
      value: '2.5M+',
      label: 'Total Reach',
      color: 'from-accent to-primary'
    }
  ];

  const skills = [
    {
      name: 'Content Strategy',
      description: 'Developed cohesive content calendars aligned with brand voice and marketing goals',
      icon: BarChart3
    },
    {
      name: 'Community Management',
      description: 'Built engaged communities through authentic interactions and timely responses',
      icon: MessageCircle
    },
    {
      name: 'Analytics & Insights',
      description: 'Leveraged data analytics to optimize posting times, content types, and hashtag strategies',
      icon: TrendingUp
    },
    {
      name: 'Visual Storytelling',
      description: 'Created compelling visual narratives using Canva, Adobe Suite, and video editing tools',
      icon: Instagram
    }
  ];

  return (
    <section id="social-media" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-secondary/40 to-primary/40 blur-3xl"
          style={{ top: '10%', right: '5%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-sm">Social Media Expertise</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl mb-4">
            Instagram Management
            <br />
            <span className="bg-gradient-to-r from-primary via-turquoise to-secondary bg-clip-text text-transparent">
              & Digital Storytelling
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining analytical thinking with creative flair to drive meaningful engagement 
            and build authentic brand communities across social platforms.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills and Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Skills List */}
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-turquoise/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:from-turquoise group-hover:to-primary transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-turquoise group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="mb-1 group-hover:text-turquoise transition-colors">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Visual Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Instagram-style mockup */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-4 border-2 border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-turquoise to-secondary"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">@yourbrand</div>
                    <div className="text-xs text-muted-foreground">Sponsored</div>
                  </div>
                  <motion.div
                    className="text-primary cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  >
                    •••
                  </motion.div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-turquoise/20 to-secondary/20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 0.95 }}
                    >
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${
                          i === 1 ? '1611162617213-7d7a39e9b1d7' :
                          i === 2 ? '1611162616475-46b635cb6868' :
                          i === 3 ? '1611162618071-b39a2ec055fb' :
                          i === 4 ? '1522202757859-7472b0973c69' :
                          i === 5 ? '1611162616305-f8fe0b89e87e' :
                          '1611162616999-8f8e82d34e48'
                        }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&utm_source=figma&utm_medium=referral`}
                        alt={`Social post ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex items-center gap-1 text-secondary"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                      <span>12.5K</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1 text-turquoise"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>847</span>
                    </motion.div>
                  </div>
                  <div className="text-muted-foreground">2 hours ago</div>
                </div>
              </motion.div>

              {/* Floating achievement badges */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-border"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Top Post</div>
                    <div className="text-sm font-medium text-primary">This Week</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-border"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-turquoise to-accent flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                    <div className="text-sm font-medium text-turquoise">+2.5K/mo</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Case Study Highlight */}
        <motion.div
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-turquoise/5 to-secondary/5 border border-border relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-turquoise/20 to-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-turquoise flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Instagram className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="mb-2">Featured Campaign: Brand Partnership</h3>
                <p className="text-muted-foreground">
                  Led a 3-month Instagram campaign for a sustainable fashion brand, 
                  focusing on authentic storytelling and user-generated content.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-2xl mb-1 text-turquoise">450%</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div>
                <div className="text-2xl mb-1 text-primary">3.2M</div>
                <div className="text-sm text-muted-foreground">Total Impressions</div>
              </div>
              <div>
                <div className="text-2xl mb-1 text-secondary">12K</div>
                <div className="text-sm text-muted-foreground">New Followers</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white text-sm border border-border">
                Instagram Reels
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-sm border border-border">
                Stories Strategy
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-sm border border-border">
                Influencer Collaboration
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-sm border border-border">
                A/B Testing
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
