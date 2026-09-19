import { Label } from './Label.jsx';
import { tech } from '../data/tech.js';

export function Tools() {
  return (
    <section className="tools" id="about">
      <div className="tools-intro">
        <Label>Technologies / tools I work with</Label>
        <h2>
          Technologies
          <br />
          and tools
        </h2>
      </div>
      <div className="tech-grid">
        {tech.map(([techName, TechIcon, iconColor]) => (
          <div key={techName}>
            <TechIcon style={{ color: iconColor }} />
            <span>{techName}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
