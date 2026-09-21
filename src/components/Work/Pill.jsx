import './Pill.css';

export function Pill({ children, tone = '' }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}
