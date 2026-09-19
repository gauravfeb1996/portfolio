import { HiOutlineAcademicCap } from 'react-icons/hi2';

export function Brand({ name }) {
  if (name === 'Spinny') {
    return <img className="brand-logo spinny-logo" src="/logos/spinny-transparent.png" alt="Spinny" />;
  }
  if (name === 'Brevo') {
    return <img className="brand-logo brevo-logo" src="/logos/brevo.png" alt="Brevo" />;
  }
  return (
    <span className="doprep-lockup">
      <HiOutlineAcademicCap />
      DoPrep
    </span>
  );
}
