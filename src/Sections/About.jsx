import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code2, Heart } from 'lucide-react';
 import { FolderGit2, Cpu, Zap, Globe, GitBranch } from "lucide-react";
import Mohit from '../assets/Mohit.jpeg';
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });





const stats = [
  {
    icon: FolderGit2,
    label: 'Real Projects',
    value: 5,
    suffix: '+',
  },
  {
    icon: Cpu,
    label: 'Tech Stack',
    value: 10,
    suffix: '+',
  },
  {
    icon: Zap,
    label: 'Features Built',
    value: 20,
    suffix: '+',
  },
  {
    icon: Globe,
    label: 'Live Deployments',
    value: 3,
    suffix: '+',
  },
  {
    icon: GitBranch,
    label: 'Git Commits',
    value: 100,
    suffix: '+',
  },
];

 const highlights = [
  {
    icon: Briefcase,
    title: 'Projects',
    description: 'Built real-world projects like Event Platform, Social Media App, and Online Voting System',
  },
  {
    icon: Code2,
    title: 'Tech Stack',
    description: 'Skilled in React, Node.js, Express, MongoDB, and REST API development',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Passionate about building scalable full-stack applications and solving real-world problems',
  },
];
  return (
    <section id="about" ref={ref} className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer focused on creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <img
                src={Mohit}
                alt="Mohit Sahu"
                className="w-full h-100 max-w-md rounded-3xl border-2 border-cyan-500/20 shadow-2xl"
              />
              {/* Glow Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all -z-10" />
              
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-500/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-blue-500/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Mohit Sahu</h3>
              <p className="text-cyan-400 text-lg">Full Stack Web Developer</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for 
              creating seamless digital experiences. With over 5 years of experience, I specialize 
              in building modern, responsive web applications that not only look great but perform 
              exceptionally well.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Stats */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
>
  {stats.map((stat, index) => {
    const Icon = stat.icon;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.03 }}
        className="group relative"
      >
        <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-cyan-500/20" />

          <div className="relative z-10 flex flex-col items-start">
            
            {/* Icon */}
            <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Icon size={26} className="text-white" />
            </div>

            {/* Value */}
            <h3 className="text-3xl font-bold text-white mb-1 flex items-center gap-1">
              {stat.value}
              <span className="text-cyan-400">{stat.suffix}</span>
            </h3>

            {/* Label */}
            <p className="text-gray-400 text-sm tracking-wide">
              {stat.label}
            </p>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    );
  })}
</motion.div>
      </div>
    </section>
  );
}
