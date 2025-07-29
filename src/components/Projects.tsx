import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Maa Kitchen Food Delivery App',
      description: 'Full-stack app  with React, Node.js, Express.js with Artificial Intelligence and Razorpay integration.',
      image: 'https://www.inexture.com/wp-content/uploads/2023/05/On-demand-Food-Delivery-App-4.webp',
      tech: ['React', 'Node.js','Express.js', 'MongoDB', 'Razorpay'],
      github: 'https://github.com/Akshatsonker/MaaKitchen-Frontend',
      live: 'https://maa-kitchen-frontend-d8tv.vercel.app/',
    },
    {
      title: 'AI Therapist App',
      description: 'Created an application for meditation , health control and therpay sessions.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdnvbMJiLBju2Ko7Z6QVPcQqMIPp-OSPdrg&s',
      tech: ['Next.js', 'TypeScript', 'Zerepy agent', 'Socket.io'],
      github: 'https://github.com/Akshatsonker/AI-Therapist',
      live: 'https://ai-therapist-flax.vercel.app/',
    },
    {
      title: 'Chessgame',
      description: ' Created a chessgame for two players with real-time application with spectator mode .',
      image: 'https://plus.unsplash.com/premium_photo-1672855191351-e26398f27e5f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlc3MlMjBnYW1lfGVufDB8fDB8fHww',
      tech: ['React', 'Socket.io', 'chess.js'],
      github: 'https://github.com/Akshatsonker/Chessgame',
      live: 'https://chessgame-3237.onrender.com/',
    },
   
  ];

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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in modern web 
              technologies and innovative problem-solving approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;