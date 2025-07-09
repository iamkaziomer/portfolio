'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const BlogPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js",
      excerpt: "Learn how to create performant and scalable React applications using Next.js framework with best practices and optimization techniques.",
      content: "Full content here...",
      category: "React",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/blog1.jpg",
      tags: ["React", "Next.js", "Performance", "Web Development"]
    },
    {
      id: 2,
      title: "Mastering TypeScript for Better Code Quality",
      excerpt: "Discover how TypeScript can improve your development workflow and help you write more maintainable and bug-free code.",
      content: "Full content here...",
      category: "TypeScript",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/blog2.jpg",
      tags: ["TypeScript", "JavaScript", "Code Quality", "Development"]
    },
    {
      id: 3,
      title: "Modern CSS Techniques for Responsive Design",
      excerpt: "Explore the latest CSS features and techniques to create beautiful, responsive designs that work across all devices.",
      content: "Full content here...",
      category: "CSS",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "/blog3.jpg",
      tags: ["CSS", "Responsive Design", "Web Design", "Frontend"]
    },
    {
      id: 4,
      title: "Node.js Best Practices for Backend Development",
      excerpt: "Learn essential Node.js patterns and practices for building robust and scalable backend applications.",
      content: "Full content here...",
      category: "Node.js",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "/blog4.jpg",
      tags: ["Node.js", "Backend", "JavaScript", "API Development"]
    }
  ];

  const categories = ['All', 'React', 'TypeScript', 'CSS', 'Node.js'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F8F6] pt-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span 
            className="inline-block text-[#6B7280] text-sm font-medium mb-4 px-4 py-2 bg-white rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Blog
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-[#151515] mb-6"
            variants={itemVariants}
          >
            Thoughts &
            <br />
            <span className="bg-gradient-to-r from-[#151515] to-[#6B7280] bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {"Sharing my experiences, learnings, and insights about web development, technology, and the ever-evolving world of software engineering."}
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#151515] focus:border-transparent transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#151515] text-white'
                    : 'bg-white text-[#6B7280] hover:bg-[#151515] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ y: -5 }}
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#151515] text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#151515] mb-3 group-hover:text-[#6B7280] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#F8F8F6] text-[#6B7280] text-xs rounded-full flex items-center gap-1"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[#151515] font-medium hover:gap-4 transition-all group"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div 
            variants={itemVariants}
            className="text-center py-16"
          >
            <p className="text-[#6B7280] text-lg">
              {"No articles found matching your criteria."}
            </p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-[#151515] mb-4"
            variants={itemVariants}
          >
            Stay Updated
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] mb-8 max-w-2xl mx-auto"
          >
            {"Subscribe to get notified about new articles and insights. No spam, just quality content delivered to your inbox."}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#151515] focus:border-transparent transition-all"
            />
            <motion.button
              className="bg-[#151515] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2D2D2D] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
