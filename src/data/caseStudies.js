import { SpinnyCatalogue } from '../components/Work/SpinnyCatalogue.jsx';
import { Automation } from '../components/Work/Automation.jsx';
import { Phones } from '../components/Work/Phones.jsx';
import { Architecture } from '../components/Work/Architecture.jsx';
import { NavyugProjects } from '../components/Work/NavyugProjects.jsx';

export const caseStudies = [
  [
    '01',
    'Spinny',
    'Reliable catalogue workflows at scale',
    'Built internal tools and workflows to manage inventory, content and quality checks across a large catalogue.',
    'Designed the React/Redux workflow and reduced catalogue bundle weight for a leaner internal experience.',
    'Lean catalogue delivery · Faster turnarounds · More reliable data',
    'From data to decisions at scale.',
    'spinny',
    SpinnyCatalogue,
  ],
  [
    '02',
    'Spinny',
    'Support automation teams could shape themselves',
    'Built an in-house WhatsApp automation builder that preserved established support journeys and gave non-technical teams more control over workflows.',
    'Led 2 frontend developers from planning and stakeholder discussions through implementation and rollout.',
    'Established support flow preserved · Greater workflow ownership · More operational control',
    'Automation that adapts with your team.',
    'spinny',
    Automation,
  ],
  [
    '03',
    'Spinny',
    'A faster path through login',
    'Simplified the login experience with a mobile-first OTP flow, reducing friction while keeping it secure.',
    'Profiled and optimized the mobile-first OTP journey to keep sign-in responsive across slower devices and networks.',
    'Smoother sign-in · More responsive OTP flow · Secure login',
    'Less friction. More people on the road.',
    'spinny',
    Phones,
  ],
  [
    '04',
    'Brevo',
    'Campaign tools made easier to build on',
    'Modernized legacy campaign tooling into accessible, reusable React components that improved performance and consistency.',
    'Refactored legacy UI, introduced accessible component patterns, and removed avoidable rendering overhead.',
    'More accessible workflows · Leaner UI delivery · More consistent experiences',
    'Composable. Flexible. Built for what’s next.',
    'brevo',
    Architecture,
  ],
  [
    '05',
    'Navyug Infosolutions',
    'Delivered multiple client products from brief to launch',
    'Built and shipped web and mobile products across learning, assessment and family-care experiences for diverse client needs.',
    'Owned frontend delivery from client discussions and planning through implementation, team coordination and production support.',
    'Multiple client launches · Clearer delivery cadence · Sustainable product maintenance',
    'Many products. One delivery mindset.',
    'navyug',
    NavyugProjects,
  ],
];
