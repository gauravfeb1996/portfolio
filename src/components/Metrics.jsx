import { Label } from './Label.jsx';

export function Metrics() {
  return (
    <div className="metrics">
      <div>
        <b>6+ yrs</b>
        <Label>Experience</Label>
      </div>
      <div>
        <b>3M+</b>
        <span>
          monthly visitors<small>across consumer platforms</small>
        </span>
      </div>
      <div>
        <b>100K+</b>
        <span>
          active users<small>Brevo product users</small>
        </span>
      </div>
      <div>
        <b>≈ 40%</b>
        <span>fewer publishing errors</span>
      </div>
    </div>
  );
}
