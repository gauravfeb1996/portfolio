import './NavyugProjects.css';

const projects = [
  {
    name: 'Role-based learning',
    detail: 'AI learning platform',
    image: '/projects/learning-concept.png',
    className: 'learning',
  },
  {
    name: 'Assessment reporting',
    detail: 'Performance dashboard',
    image: '/projects/reporting-concept.png',
    className: 'assessment',
  },
  {
    name: 'Mobile app',
    detail: 'Family care experience',
    image: '/projects/mobile-concept.png',
    className: 'mobile',
  },
];

export function NavyugProjects() {
  return (
    <div className="navyug-projects product" aria-label="A selection of client products delivered">
      <div className="project-kicker">Client product delivery</div>
      {projects.map(({ name, detail, image, className }) => (
        <article className={`project-card ${className}`} key={name}>
          <img src={image} alt={`${name} illustrative product concept`} />
          <footer>
            <b>{name}</b>
            <span>{detail}</span>
          </footer>
        </article>
      ))}
    </div>
  );
}
