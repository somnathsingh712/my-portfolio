import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import EnhancedSkills from './components/EnhancedSkills';
import Projects from './components/Projects';
import About from './components/About';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Skills />
          </>
        );
      case 'about':
        return <About />;
      case 'skills':
        return <EnhancedSkills />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'certifications':
        return <Certifications />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <CustomCursor />
      <div className="bg-sky-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <main className="min-h-screen">
          <div key={currentPage} className="page-enter">
            {renderPage()}
          </div>
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
