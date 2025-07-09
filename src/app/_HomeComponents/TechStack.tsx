'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "Next.js", level: 90, color: "#000000" },
        { name: "TypeScript", level: 88, color: "#3178C6" },
        { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
        { name: "JavaScript", level: 95, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 98, color: "#E34F26" }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", level: 90, color: "#339933" },
        { name: "Express.js", level: 88, color: "#000000" },
        { name: "MongoDB", level: 85, color: "#47A248" },
        { name: "PostgreSQL", level: 82, color: "#336791" },
        { name: "REST APIs", level: 92, color: "#FF6B35" },
        { name: "GraphQL", level: 75, color: "#E10098" }
      ]
    },
    {
      title: "Tools & Cloud",
      technologies: [
        { name: "AWS", level: 80, color: "#FF9900" },
        { name: "Vercel", level: 90, color: "#000000" },
        { name: "Git", level: 95, color: "#F05032" },
        { name: "Docker", level: 75, color: "#2496ED" },
        { name: "VS Code", level: 98, color: "#007ACC" },
        { name: "Figma", level: 85, color: "#F24E1E" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-[#F8F8F6]">
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
            className="inline-block text-[#6B7280] text-sm font-medium mb-4 px-4 py-2 bg-white rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Tech Stack
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#151515] mb-6"
            variants={itemVariants}
          >
            Technologies I
            <br />
            <span className="bg-gradient-to-r from-[#151515] to-[#6B7280] bg-clip-text text-transparent">
              Work With
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            I stay current with the latest technologies and tools to deliver cutting-edge solutions. 
            Here's my technical expertise across different domains.
          </motion.p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className="text-xl font-semibold text-[#151515] mb-6 text-center"
                variants={itemVariants}
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#151515] font-medium text-sm">{tech.name}</span>
                      <span className="text-[#6B7280] text-xs">{tech.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.2) + (techIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.h3 
            className="text-2xl font-semibold text-[#151515] mb-8"
            variants={itemVariants}
          >
            Additional Skills
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {[
              "Responsive Design", "SEO Optimization", "Performance Tuning", 
              "Testing (Jest, Cypress)", "CI/CD", "Agile/Scrum", 
              "Code Review", "Mentoring", "Technical Writing"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-4 py-2 bg-white text-[#151515] rounded-full text-sm font-medium hover:bg-[#151515] hover:text-white transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;
