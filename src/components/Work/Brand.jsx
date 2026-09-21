import { HiOutlineAcademicCap } from 'react-icons/hi2';
import navyugLogo from '../../assets/navyug.png';
import './Brand.css';

export function Brand({ name }) {
  const companyUrls = {
    Spinny: 'https://www.spinny.com/',
    Brevo: 'https://www.brevo.com/',
    'Navyug Infosolutions': 'https://navyuginfo.com/',
  };
  let content;

  if (name === 'Spinny') {
    content = (
      <span className="spinny-logo-set">
        <img className="brand-logo spinny-logo spinny-logo-light" src="/logos/spinny.png" alt="Spinny" />
        <img className="brand-logo spinny-logo spinny-logo-dark" src="/logos/spinny-dark.svg" alt="" aria-hidden="true" />
      </span>
    );
  } else if (name === 'Brevo') {
    content = <img className="brand-logo brevo-logo" src="/logos/brevo.png" alt="Brevo" />;
  } else if (name === 'Navyug Infosolutions') {
    content = <img className="brand-logo navyug-logo" src={navyugLogo} alt="Navyug Infosolutions" />;
  } else {
    content = (
      <span className="doprep-lockup">
        <HiOutlineAcademicCap />
        DoPrep
      </span>
    );
  }

  const href = companyUrls[name];
  return href ? <a className="company-link" href={href} target="_blank" rel="noreferrer">{content}</a> : content;
}
