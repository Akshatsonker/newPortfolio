import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Javacript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Langchain.js', level: 80 },
      
      ],
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proficient in modern technologies and frameworks, with a focus on 
              creating efficient, scalable, and maintainable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <span className="text-white font-bold text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;