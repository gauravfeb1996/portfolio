import { HiOutlineMagnifyingGlass, HiOutlineUserGroup, HiOutlineArrowUpTray } from 'react-icons/hi2';
import { FlowCard } from './FlowCard.jsx';

export function HeroFlow() {
  return (
    <div className="hero-flow" aria-label="Inspect, review and publish workflow">
      <svg viewBox="0 0 600 300" aria-hidden="true">
        <path
          className="flow-path"
          d="M110 75 C195 76 155 174 260 177 S335 91 425 145 S470 214 535 201"
        />
        <circle cx="110" cy="75" r="4" />
        <circle cx="260" cy="177" r="4" />
        <circle cx="425" cy="145" r="4" />
        <circle cx="535" cy="201" r="4" />
      </svg>
      <svg className="hero-flow-mobile-lines" viewBox="0 0 400 300" aria-hidden="true">
        <path
          className="flow-path"
          d="M128 88 C150 102 142 135 170 146 S215 154 242 143 S275 116 300 140 S340 202 378 192"
        />
        <circle cx="128" cy="88" r="3" />
        <circle cx="202" cy="151" r="3" />
        <circle cx="300" cy="140" r="3" />
        <circle cx="378" cy="192" r="3" />
      </svg>
      <FlowCard
        icon={HiOutlineMagnifyingGlass}
        title="Inspect"
        text="Find and understand the right data"
        cls="inspect"
      />
      <FlowCard
        icon={HiOutlineUserGroup}
        title="Review"
        text="Collaborate with context and confidence"
        cls="review"
      />
      <FlowCard
        icon={HiOutlineArrowUpTray}
        title="Publish"
        text="Ship changes that make an impact"
        cls="publish"
      />
      <aside>
        Complex
        <br />
        workflows.
        <br />
        Better outcomes.
      </aside>
    </div>
  );
}
