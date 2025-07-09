'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
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
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "Voice-Grivience",
      description: "Built a real-time complaint system with secure login (Google OAuth), image uploads (AWS S3), and mobile-friendly UI. Developed and deployed full stack using React, Node.js, Express, and MongoDB.",
      image: "/project1.png",
      technologies: ["React", "Express", "Node.js", "MongoDB", "AWS S3", "Google OAuth" ],
      liveUrl: "https://voice-hackprix-98-g63e.vercel.app/primary",
      githubUrl: "https://github.com/iamkaziomer/voice-hackprix-98",
      featured: true
    },
    {
      id: 2,
      title: " SKILLO – Learning Platform",
      description: "Created a platform for users to share skills and learning resources with JWT auth and protected routes. Designed a clean, responsive UI and built robust backend APIs using MongoDB and Node.js.",
      image: "/project2.png",
      technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kaziomer/project2",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/project3.jpg",
      technologies: ["React", "Tailwind CSS", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kaziomer/project3",
      featured: false
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, SEO optimization, and content management system.",
      image: "/project4.jpg",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kaziomer/project4",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
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
            My Work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#151515] mb-6"
            variants={itemVariants}
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-[#151515] to-[#6B7280] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {"Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and problem-solving."}
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#151515]/20 to-transparent z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    <Image src={project.image} alt='project' width={1000} height={1000}/>
                  </div>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[#151515]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} className="text-[#151515]" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} className="text-[#151515]" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                variants={itemVariants}
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <motion.h3
                  className="text-3xl font-bold text-[#151515]"
                  variants={itemVariants}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="text-[#6B7280] text-lg leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#F8F8F6] text-[#151515] rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#151515] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2D2D2D] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live
                    <ExternalLink size={16} />
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-[#151515] text-[#151515] px-6 py-3 rounded-xl font-medium hover:bg-[#151515] hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                    <Github size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div variants={itemVariants}>
          {/* <motion.h3
            className="text-2xl font-semibold text-[#151515] mb-8 text-center"
            variants={itemVariants}
          >
            Other Notable Projects
          </motion.h3> */}

          {/* <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-[#F8F8F6] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <motion.h4
                    className="text-xl font-semibold text-[#151515] group-hover:text-[#6B7280] transition-colors"
                    variants={itemVariants}
                  >
                    {project.title}
                  </motion.h4>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="text-[#6B7280]" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-[#6B7280]" />
                    </motion.a>
                  </div>
                </div>

                <motion.p
                  variants={itemVariants}
                  className="text-[#6B7280] mb-4 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-white text-[#151515] rounded text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/iamkaziomer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#151515] font-medium hover:gap-4 transition-all group"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
