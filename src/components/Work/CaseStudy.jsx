import { Label } from '../shared/Label.jsx';
import { Brand } from './Brand.jsx';
import { RoleOutcome } from './RoleOutcome.jsx';
import { CaseHighlights } from './CaseHighlights.jsx';
import './CaseStudy.css';

export function CaseStudy({ caseStudy }) {
  const [num, company, title, desc, role, outcome, note, tone, Visual] = caseStudy;

  return (
    <article id={`case-${num}`} className={`case ${tone}`}>
      <div className="case-copy">
        <Label>
          {num} / {company}
        </Label>
        <h2>{title}</h2>
        <p className="case-context">{desc}</p>
        <RoleOutcome role={role} outcome={outcome} />
        <CaseHighlights tone={tone} number={num} />
      </div>
      <div className="case-visual">
        <div className="company">
          <Brand name={company} />
        </div>
        <span className="handwritten">{note}</span>
        <Visual />
      </div>
    </article>
  );
}
