import {
  HiOutlineMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import './CaseHighlights.css';

const spinny = {
  '01': [
    [HiOutlineUserGroup, '100+ internal users'],
    [HiOutlineCheckCircle, 'Faster turnarounds'],
    [HiOutlineMagnifyingGlass, 'Reliable data'],
  ],
  '02': [
    [HiOutlineSparkles, 'Visual builder'],
    [HiOutlineChatBubbleLeftRight, 'Faster resolution'],
    [HiOutlineUserGroup, 'Happier customers'],
  ],
  '03': [
    [HiOutlineChartBar, '40% → 8% drop-off'],
    [HiOutlineMagnifyingGlass, 'Mobile-first flow'],
    [HiOutlineCheckCircle, 'Secure login'],
  ],
};

export function CaseHighlights({ tone, number }) {
  const content =
    tone === 'spinny'
      ? spinny[number]
      : tone === 'brevo'
        ? [
            [HiOutlineSparkles, 'Reusable UI'],
            [HiOutlineChartBar, 'Consistent tools'],
            [HiOutlineCheckCircle, '100K+ users'],
          ]
        : [
            [HiOutlineAcademicCap, 'Practice-first'],
            [HiOutlineChartBar, 'Progress tracking'],
            [HiOutlineUserGroup, 'Guidance in one place'],
          ];

  return (
    <div className={`case-highlights ${tone}`}>
      {content.map(([Icon, text]) => (
        <div key={text}>
          <Icon />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
