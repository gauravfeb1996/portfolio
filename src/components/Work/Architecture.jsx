import { SiReact } from 'react-icons/si';
import './Architecture.css';

export function Architecture() {
  const left = ['UI Components', 'Form Builders', 'Data Tables', 'Charts & Visuals'];
  const right = ['Campaign Builder', 'Audience tools', 'Automation', 'Analytics'];
  const lanes = [35, 90, 155, 215];
  const ports = [76, 108, 142, 174];
  const mobileLanes = [60, 103, 147, 190];
  const mobilePorts = [82, 112, 142, 172];

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
      <svg className="arch-lines arch-lines-mobile" viewBox="0 0 720 250" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="arch-mobile-arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" />
          </marker>
        </defs>
        {mobileLanes.map((laneY, laneIndex) => (
          <path key={`mobile-in-${laneY}`} d={`M234 ${laneY} C247 ${laneY} 259 ${mobilePorts[laneIndex]} 272 ${mobilePorts[laneIndex]}`} markerEnd="url(#arch-mobile-arrowhead)" />
        ))}
        {mobileLanes.map((laneY, laneIndex) => (
          <path key={`mobile-out-${laneY}`} d={`M448 ${mobilePorts[laneIndex]} C461 ${mobilePorts[laneIndex]} 473 ${laneY} 484 ${laneY}`} markerEnd="url(#arch-mobile-arrowhead)" />
        ))}
      </svg>
    </div>
  );
}
