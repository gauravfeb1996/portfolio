import { HiOutlineBolt, HiOutlineCodeBracketSquare, HiOutlineCursorArrowRays } from 'react-icons/hi2';
import './EngineeringImpact.css';

const impactAreas = [
  [HiOutlineBolt, 'Performance optimisation', 'Reduced avoidable JavaScript and rendering work to improve loading paths that influence LCP and FCP.'],
  [HiOutlineCursorArrowRays, 'Accessible UI systems', 'Introduced semantic, keyboard-friendly patterns while modernising Brevo campaign tooling.'],
  [HiOutlineCodeBracketSquare, 'Legacy modernisation', 'Refactored legacy UI into reusable React components that are easier to evolve and maintain.'],
];

export function EngineeringImpact() {
  return (
    <aside className="engineering-impact" aria-labelledby="engineering-impact-title">
      <p className="eyebrow">ENGINEERING IMPACT</p>
      <h2 id="engineering-impact-title">Performance, accessibility, and code health.</h2>
      <div className="engineering-impact-grid">
        {impactAreas.map(([Icon, title, detail]) => (
          <article className="engineering-impact-card" key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </aside>
  );
}
