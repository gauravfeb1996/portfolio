import { SiWhatsapp } from 'react-icons/si';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';
import './Automation.css';

export function Automation() {
  return (
    <div className="automation">
      <svg
        className="auto-flow-lines"
        viewBox="0 0 696 255"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <marker id="automation-arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" />
          </marker>
        </defs>
        <path d="M414 122 H440" />
        <path d="M440 122 V45 Q440 35 455 35 H470" markerEnd="url(#automation-arrowhead)" />
        <path d="M440 122 H470" markerEnd="url(#automation-arrowhead)" />
        <path d="M440 122 V210 Q440 220 455 220 H470" markerEnd="url(#automation-arrowhead)" />
      </svg>
      <div className="auto-node whats">
        <SiWhatsapp />
        <span>
          Incoming message
          <br />
          (WhatsApp)
        </span>
      </div>
      <i className="auto-arrow" aria-hidden="true" />
      <div className="auto-node identify">
        <HiOutlineChatBubbleLeftRight />
        <span>Identify intent</span>
      </div>
      <div className="auto-branches">
        <div className="auto-branch">
          <div className="auto-node">
            <HiOutlineChatBubbleLeftRight />
            <span>
              Agent reply
              <br />
              (Automated)
            </span>
          </div>
        </div>
        <div className="auto-branch">
          <div className="auto-node coral">
            <HiOutlineUserGroup />
            <span>Escalate to human</span>
          </div>
        </div>
        <div className="auto-branch">
          <div className="auto-node">
            <HiOutlineCheckCircle />
            <span>
              Resolve
              <br />
              Close the loop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
