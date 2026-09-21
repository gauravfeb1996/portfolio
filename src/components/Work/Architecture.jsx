import { useLayoutEffect, useRef, useState } from 'react';
import { SiReact } from 'react-icons/si';
import './Architecture.css';

export function Architecture() {
  const left = ['UI Components', 'Form Builders', 'Data Tables', 'Charts & Visuals'];
  const right = ['Campaign Builder', 'Audience tools', 'Automation', 'Analytics'];
  const diagramRef = useRef(null);
  const [connections, setConnections] = useState(null);

  useLayoutEffect(() => {
    const updateConnections = () => {
      const diagram = diagramRef.current;
      if (!diagram) return;

      const root = diagram.getBoundingClientRect();
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const insetY = isMobile ? 20 : 25;
      const width = Math.round(root.width);
      const height = Math.round(root.height - insetY * 2);
      const core = diagram.querySelector('.arch-core strong')?.getBoundingClientRect();
      const leftNodes = [...diagram.querySelectorAll('.left-group span')].map((node) => node.getBoundingClientRect());
      const rightNodes = [...diagram.querySelectorAll('.right-group span')].map((node) => node.getBoundingClientRect());

      if (!core || !width || !height || leftNodes.length !== 4 || rightNodes.length !== 4) return;

      const toDiagramPoint = (rect, edge) => ({
        x: rect[edge] - root.left,
        y: rect.top - root.top - insetY + rect.height / 2,
      });
      const coreTop = core.top - root.top - insetY;
      const corePorts = Array.from({ length: 4 }, (_, index) => coreTop + (core.height * (index + 1)) / 5);
      const leftConnections = leftNodes.map((node, index) => ({
        from: toDiagramPoint(node, 'right'),
        to: { x: core.left - root.left, y: corePorts[index] },
      }));
      const rightConnections = rightNodes.map((node, index) => ({
        from: { x: core.right - root.left, y: corePorts[index] },
        to: toDiagramPoint(node, 'left'),
      }));

      setConnections({ width, height, left: leftConnections, right: rightConnections });
    };

    updateConnections();
    const observer = new ResizeObserver(updateConnections);
    observer.observe(diagramRef.current);
    window.addEventListener('resize', updateConnections);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateConnections);
    };
  }, []);

  const curvedPath = ({ from, to }) => {
    const pull = Math.max(10, Math.abs(to.x - from.x) * 0.48);
    return `M ${from.x} ${from.y} C ${from.x + pull} ${from.y} ${to.x - pull} ${to.y} ${to.x} ${to.y}`;
  };

  return (
    <div className="architecture" ref={diagramRef}>
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
      {connections && (
        <svg
          className="arch-lines arch-lines-dynamic"
          viewBox={`0 0 ${connections.width} ${connections.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
        {/* <defs>
          <marker id="arch-arrowhead" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" />
          </marker>
        </defs> */}
        {connections.left.map((connection, index) => (
          <path
            key={`in-${index}`}
            d={curvedPath(connection)}
            markerEnd="url(#arch-arrowhead)"
          />
        ))}
        {connections.right.map((connection, index) => (
          <path
            key={`out-${index}`}
            d={curvedPath(connection)}
            markerEnd="url(#arch-arrowhead)"
          />
        ))}
        </svg>
      )}
    </div>
  );
}
