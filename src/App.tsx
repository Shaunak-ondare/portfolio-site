import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle .dark class on <html> — most reliable way to override body background
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <ParticleBackground />
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
