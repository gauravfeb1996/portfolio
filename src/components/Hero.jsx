import { HiOutlineArrowRight } from 'react-icons/hi2';
import { A } from './A.jsx';
import { Label } from './Label.jsx';
import { HeroFlow } from './HeroFlow.jsx';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Label>Complex problems. Clear interfaces.</Label>
        <h1>
          Gaurav Verma <span>Frontend Engineer</span>
        </h1>
        <p>
          I build clear, fast, dependable product experiences
          <br />
          from complex workflows.
        </p>
        <div className="ctas">
          <A href="#work" className="primary">
            View my work <HiOutlineArrowRight />
          </A>
          <A href="#contact" className="secondary">
            Contact me
          </A>
        </div>
        <Label>Systems × UX × Performance × People</Label>
      </div>
      <HeroFlow />
    </section>
  );
}
