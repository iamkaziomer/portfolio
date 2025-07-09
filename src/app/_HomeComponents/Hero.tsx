'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ["easeOut"],
      },
    },
  };

  return (
    <section id="home" className="bg-[#F8F8F6] text-[#151515] min-h-screen flex flex-col items-center justify-center gap-12 px-6 pt-20 md:flex-row md:gap-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-20 max-w-7xl mx-auto"
      >
        {/* Avatar */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div 
            className="relative h-72 w-72 md:h-80 md:w-80 rounded-2xl overflow-hidden bg-gray-200 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image
              src="/profile-pic.png"
              alt="Kazi Omer - Full-Stack Developer"
              fill
              sizes="(max-width: 768px) 288px, 320px"
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
          
          {/* Floating elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-[#151515] rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#6B7280] rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          variants={itemVariants}
          className="text-center md:text-left max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.span 
              className="inline-block text-[#6B7280] text-sm font-medium mb-4 px-4 py-2 bg-white/50 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              👋 Hello, I'm
            </motion.span>
            
            <motion.h1 
              className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="block">Full-Stack</span>
              <span className="block bg-gradient-to-r from-[#151515] to-[#6B7280] bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
          >
            I craft exceptional digital experiences with modern technologies. 
            Specialized in React, Next.js, Node.js, and cloud solutions. 
            Let's build something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.button
              onClick={scrollToProjects}
              className="bg-[#151515] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#2D2D2D] transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
            
            <motion.a
              href="/KAZI OMER RESUME -.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#151515] text-[#151515] px-8 py-4 rounded-xl font-medium hover:bg-[#151515] hover:text-white transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/kaziomer", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/kaziomer", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kaziomersdf@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-white/50 hover:bg-[#151515] hover:text-white transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-[#6B7280] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#6B7280] rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
