import { CaseStudy } from './CaseStudy.jsx';
import { caseStudies } from '../../data/caseStudies.js';
import './Work.css';

export function Work() {
  return (
    <section className="work" id="work">
      {caseStudies.map((caseStudy) => (
        <CaseStudy key={caseStudy[0]} caseStudy={caseStudy} />
      ))}
    </section>
  );
}
