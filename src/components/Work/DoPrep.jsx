import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';
import './DoPrep.css';

export function DoPrep() {
  return (
    <div className="doprep product">
      <aside>
        <b>▰ DoPrep</b>
        <span>⌂ Home</span>
        <span className="active">◉ Practice</span>
        <span>◌ Progress</span>
        <span>◌ Resources</span>
      </aside>
      <main>
        <b>My Practice</b>
        <div className="practice">
          <div>
            <HiOutlineAcademicCap />
            <b>Mock Tests</b>
            <small>Full-length tests</small>
          </div>
          <div>
            <HiOutlineChartBar />
            <b>Practice Questions</b>
            <small>Topic-wise practice</small>
          </div>
          <div>
            <HiOutlineCheckCircle />
            <b>Study Notes</b>
            <small>Curated materials</small>
          </div>
        </div>
        <p>
          Your progress <b>62%</b>
        </p>
        <div className="progress">
          <i />
        </div>
      </main>
    </div>
  );
}
