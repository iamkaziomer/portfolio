'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // You can integrate with your preferred form handling service here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kaziomersdf@gmail.com",
      href: "mailto:kaziomersdf@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 72070 19253",
    },
    
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/iamkaziomer",
      color: "#333"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kazi-omer/",
      color: "#0077B5"
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#F8F8F6]">
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
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#151515] mb-6"
            variants={itemVariants}
          >
            Let's Work
            <br />
            <span className="bg-gradient-to-r from-[#151515] to-[#6B7280] bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {"I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!"}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h3 
              className="text-2xl font-semibold text-[#151515] mb-8"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#151515] rounded-lg flex items-center justify-center group-hover:bg-[#2D2D2D] transition-colors">
                      <info.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#151515] mb-1">{info.title}</h4>
                    <p className="text-[#6B7280]">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-8">
              <motion.h4 
                className="text-lg font-semibold text-[#151515] mb-6"
                variants={itemVariants}
              >
                Follow Me
              </motion.h4>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <social.icon 
                      size={20} 
                      className="text-[#6B7280] group-hover:text-[var(--hover-color)] transition-colors" 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          
         
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
