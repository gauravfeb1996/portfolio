import { Label } from './Label.jsx';

export function RoleOutcome({ role, outcome }) {
  return (
    <div className="case-meta">
      <div>
        <Label>My role</Label>
        <span>{role}</span>
      </div>
      <div>
        <Label>Outcome</Label>
        <span>{outcome}</span>
      </div>
    </div>
  );
}
