import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { A } from './A.jsx';

export function Footer() {
  return (
    <footer>
      <A href="#top" className="logo">
        GV<span>/</span>
      </A>
      <nav>
        <A href="#work">Work</A>
        <A href="#about">About</A>
        <A href="#notes">Notes</A>
      </nav>
      <div>
        <a href="#top" aria-label="GitHub">
          <SiGithub />
        </a>
        <a href="#top" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <small>© 2024 Gaurav Verma. All rights reserved.</small>
    </footer>
  );
}
