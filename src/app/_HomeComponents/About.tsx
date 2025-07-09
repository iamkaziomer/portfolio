'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: "easeOut" as const,
      },
    },
  };

  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern frameworks and best practices."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Creating fast, efficient applications with optimal user experience."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in agile teams and mentoring junior developers."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing complex problems and delivering innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span 
            className="inline-block text-[#6B7280] text-sm font-medium mb-4 px-4 py-2 bg-[#F8F8F6] rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#151515] mb-6"
            variants={itemVariants}
          >
            Passionate About Creating
            <br />
            <span className="bg-gradient-to-r from-[#151515] to-[#6B7280] bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            I'm a dedicated Full-Stack Developer with a passion for crafting exceptional digital experiences. 
            With expertise in modern web technologies, I transform ideas into scalable, user-friendly applications.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              className="text-2xl font-semibold text-[#151515] mb-4"
              variants={itemVariants}
            >
              My Journey
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                My journey in software development began with curiosity and has evolved into a passion for 
                creating meaningful digital solutions. I specialize in building full-stack applications 
                that not only look great but perform exceptionally.
              </p>
              
              <p>
                With experience in React, Next.js, Node.js, and cloud technologies, I've worked on 
                diverse projects ranging from e-commerce platforms to complex web applications. 
                I believe in writing clean, maintainable code and following industry best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always eager to take on 
                new challenges and collaborate on innovative projects.
              </p>
            </motion.div>

            {/* Stats */}
       
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              className="text-2xl font-semibold text-[#151515] mb-8"
              variants={itemVariants}
            >
              What I Bring
            </motion.h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-6 bg-[#F8F8F6] rounded-xl hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#151515] rounded-lg flex items-center justify-center">
                      <skill.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151515] mb-2">{skill.title}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
