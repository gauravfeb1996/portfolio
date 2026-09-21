import { Label } from '../shared/Label.jsx';
import './RoleOutcome.css';

export function RoleOutcome({ role, outcome }) {
  return (
    <div className="case-meta">
      <div className="case-work">
        <Label>My work</Label>
        <strong>{role}</strong>
      </div>
      <div className="case-outcome">
        <Label>Outcome</Label>
        <strong>{outcome}</strong>
      </div>
    </div>
  );
}
