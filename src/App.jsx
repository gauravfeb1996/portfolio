import { useEffect, useState } from 'react';
import './styles/tokens.css';
import './styles/base.css';
import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Metrics } from './components/Metrics/Metrics.jsx';
import { Work } from './components/Work/Work.jsx';
import { Tools } from './components/Tools/Tools.jsx';
import { Journey } from './components/Journey/Journey.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';

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
