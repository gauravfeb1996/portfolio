import { SpinnyCatalogue } from '../components/Work/SpinnyCatalogue.jsx';
import { Automation } from '../components/Work/Automation.jsx';
import { Phones } from '../components/Work/Phones.jsx';
import { Architecture } from '../components/Work/Architecture.jsx';
import { DoPrep } from '../components/Work/DoPrep.jsx';

export const caseStudies = [
  [
    '01',
    'Spinny',
    'Reliable catalogue workflows at scale',
    'Built internal tools and workflows to manage inventory, content and quality checks across a large catalogue.',
    'Designed the React/Redux workflow and validation UI.',
    'Faster turnarounds · More reliable data',
    'From data to decisions at scale.',
    'spinny',
    SpinnyCatalogue,
  ],
  [
    '02',
    'Spinny',
    'Support automation teams could shape themselves',
    'Built a flexible, visual automation builder for customer support, empowering non-technical teams to create and iterate on workflows.',
    'Led 2 frontend developers; took it from wireframes to rollout.',
    'Happier customers · More self-serve workflows',
    'Automation that adapts with your team.',
    'spinny',
    Automation,
  ],
  [
    '03',
    'Spinny',
    'A faster path through login',
    'Simplified the login experience with a mobile-first OTP flow, reducing friction while keeping it secure.',
    'Used GA + profiling to simplify the OTP journey.',
    '40% → 8% drop-off · Smoother, more secure logins',
    'Less friction. More people on the road.',
    'spinny',
    Phones,
  ],
  [
    '04',
    'Brevo',
    'Campaign tools made easier to build on',
    'Built a modular, reusable component architecture in React to ship campaign tools faster and more consistently.',
    'Rebuilt modular campaign UI architecture.',
    '100K+ active users · More consistent experiences',
    'Composable. Flexible. Built for what’s next.',
    'brevo',
    Architecture,
  ],
  [
    '05',
    'DoPrep',
    'Learning tools for what’s next',
    'Built a focused education platform to help students prepare better with practice, progress tracking and guidance in one place.',
    'Delivered product features and production maintenance.',
    'More confident students · Continuous improvements',
    'Small steps. Brighter futures.',
    'doprep',
    DoPrep,
  ],
];
