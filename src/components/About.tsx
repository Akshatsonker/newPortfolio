import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const services = [
    {
      Icon: Globe,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, Javacript, and modern CSS frameworks.',
    },
    {
      Icon: Database,
      title: 'Backend Development',
      description: 'Building scalable server-side applications with Node.js, Express.js, and MongoDB.',
    },
    {
      Icon: Code,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development from concept to deployment and maintenance.',
    },
  
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with over 1 years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love turning complex problems into simple, beautiful designs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">1+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;