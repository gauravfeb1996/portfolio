import './NavyugProjects.css';

const projects = [
  {
    name: 'Role-based learning',
    detail: 'AI learning platform',
    image: '/projects/role-learning.png',
    className: 'learning',
  },
  {
    name: 'Assessment reporting',
    detail: 'Performance dashboard',
    image: '/projects/assessment-report.png',
    className: 'assessment',
  },
  {
    name: 'Zaky',
    detail: 'Family care app',
    image: '/projects/zaky.webp',
    className: 'zaky',
  },
];

export function NavyugProjects() {
  return (
    <div className="navyug-projects product" aria-label="A selection of client products delivered">
      <div className="project-kicker">Client product delivery</div>
      {projects.map(({ name, detail, image, className }) => (
        <article className={`project-card ${className}`} key={name}>
          <img src={image} alt={`${name} product screen`} />
          <footer>
            <b>{name}</b>
            <span>{detail}</span>
          </footer>
        </article>
      ))}
    </div>
  );
}
