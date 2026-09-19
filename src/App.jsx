import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Metrics } from './components/Metrics.jsx';
import { Work } from './components/Work.jsx';
import { Tools } from './components/Tools.jsx';
import { Journey } from './components/Journey.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="page" id="top">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <Metrics />
      <Work />
      <Tools />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}
