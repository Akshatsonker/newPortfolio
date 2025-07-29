import React from 'react';
import Navigation from './components/Navigation';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <ThreeScene />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 Full-Stack Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;