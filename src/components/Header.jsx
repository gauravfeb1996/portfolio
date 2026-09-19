import { useState } from 'react';
import { HiOutlineSun, HiOutlineMoon, HiOutlineArrowRight, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import { A } from './A.jsx';

export function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <A href="#top" className="logo">
        GV<span>/</span>
      </A>
      <nav className={open ? 'nav open' : 'nav'}>
        <A href="#work" onClick={() => setOpen(false)}>Work</A>
        <A href="#about" onClick={() => setOpen(false)}>About</A>
        <A href="#notes" onClick={() => setOpen(false)}>Notes</A>
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
        <A className="talk" href="mailto:gauravverma.dev@gmail.com">
          Let’s talk <HiOutlineArrowRight />
        </A>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>
    </header>
  );
}
