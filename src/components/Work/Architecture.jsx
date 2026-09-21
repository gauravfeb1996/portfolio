import { SiReact } from 'react-icons/si';
import './Architecture.css';

export function Architecture() {
  const left = ['UI Components', 'Form Builders', 'Data Tables', 'Charts & Visuals'];
  const right = ['Campaign Builder', 'Audience tools', 'Automation', 'Analytics'];
  const lanes = [35, 90, 155, 215];
  const ports = [76, 108, 142, 174];

  return (
    <div className="architecture">
      <div className="arch-group left-group">
        {left.map((leftComponent) => (
          <span key={leftComponent}>{leftComponent}</span>
        ))}
      </div>
      <div className="arch-core">
        <strong>
          <SiReact />
          React Component
          <br />
          Architecture
        </strong>
      </div>
      <div className="arch-group right-group">
        {right.map((rightTool) => (
          <span key={rightTool}>{rightTool}</span>
        ))}
      </div>
      <svg className="arch-lines" viewBox="0 0 720 250" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="arch-arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" />
          </marker>
        </defs>
        {lanes.map((laneY, laneIndex) => (
          <path
            key={`in-${laneY}`}
            d={`M238 ${laneY} C258 ${laneY} 268 ${ports[laneIndex]} 292 ${ports[laneIndex]}`}
            markerEnd="url(#arch-arrowhead)"
          />
        ))}
        {lanes.map((laneY, laneIndex) => (
          <path
            key={`out-${laneY}`}
            d={`M428 ${ports[laneIndex]} C452 ${ports[laneIndex]} 462 ${laneY} 482 ${laneY}`}
            markerEnd="url(#arch-arrowhead)"
          />
        ))}
      </svg>
    </div>
  );
}
