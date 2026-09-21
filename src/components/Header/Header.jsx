import { useState } from 'react';
import { HiOutlineSun, HiOutlineMoon, HiOutlineBars3, HiOutlineXMark, HiOutlineArrowDownTray, HiOutlineCursorArrowRays } from 'react-icons/hi2';
import { A } from '../shared/A.jsx';
import './Header.css';

export function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [resumeStarted, setResumeStarted] = useState(false);

  return (
    <header className="header">
      <A href="#top" className="logo">
        GV<span>/</span>
      </A>
      <nav className={open ? 'nav open' : 'nav'}>
        <A href="#work" onClick={() => setOpen(false)}>Work</A>
        <A href="#about" onClick={() => setOpen(false)}>About</A>
      </nav>
      <div className="header-actions">
        <button
          className="theme"
          aria-label="Switch colour theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}
          <span className="switch">
            <i />
          </span>
        </button>
        <a
          className={resumeStarted ? 'talk resume-download is-started' : 'talk resume-download'}
          href="/Gaurav_Verma_Resume_Revised_v5.pdf"
          download="Gaurav_Verma_Resume_Revised_v5.pdf"
          onClick={() => setResumeStarted(true)}
        >
          <span>Download Resume</span>
          {resumeStarted ? <HiOutlineCursorArrowRays aria-hidden="true" /> : <HiOutlineArrowDownTray aria-hidden="true" />}
        </a>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>
    </header>
  );
}
